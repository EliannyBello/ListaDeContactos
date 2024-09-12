import React, { createContext, useState, useEffect } from "react";


export const Context = createContext(null);

const PassContext = ({ children }) => {
  const [store, setStore] = useState({
    contacts: [],
    contactToEdit: null,
  });

  const [actions] = useState({
    getContacts: async () => {
      try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/EliannyBello', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const responseJson = await response.json();
          setStore((prevStore) => ({ ...prevStore, contacts: responseJson.contacts }));
        } else {
          console.error("Error al obtener los contactos");
        }
      } catch (error) {
        console.error("Error al obtener los contactos:", error);
      }
    },

    createContact: async (newContact) => {
      try {
        const res = await fetch("https://playground.4geeks.com/contact/agendas/EliannyBello/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newContact),
          
        });

        if (res.ok) {
          actions.getContacts();
        } else {
          console.error("Error al crear el contacto");
        }
      } catch (error) {
        console.error("Error al crear el contacto:", error);
      }
    },

    putContact: async (id, actContact) => {
      try {
        const res = await fetch(`https://playground.4geeks.com/contact/agendas/EliannyBello/contacts/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(actContact),
        });

        if (res.ok) {
          actions.getContacts();
        } else {
          console.error("Error al editar el contacto");
        }
      } catch (error) {
        console.error("Error al editar el contacto:", error);
      }
    },

    deleteContact: async (id) => {
      try {
        const res = await fetch(`https://playground.4geeks.com/contact/agendas/EliannyBello/contacts/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          actions.getContacts();
        } else {
          console.error("Error al eliminar el contacto");
        }
      } catch (error) {
        console.error("Error al eliminar el contacto:", error);
      }
    },

    clearContactToEdit: () => {
      setStore((prevStore) => ({ ...prevStore, contactToEdit: null }));
    },

    setContactToEdit: (contact) => {
      setStore((prevStore) => ({ ...prevStore, contactToEdit: contact }));
    },
  })

  useEffect(() => {
    actions.getContacts();
  }, []);

  return (
    <Context.Provider value={{ store, actions }}>
      {children}
    </Context.Provider>
  );
};

export default PassContext;
