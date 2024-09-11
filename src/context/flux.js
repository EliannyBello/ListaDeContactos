const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [], 
        },
        actions: {
            
            getContacts: async () => {
                try {
                    const res = await fetch("https://playground.4geeks.com/contact/agendas/EliannyBello/contacts", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    if (!res.ok) {
                        console.error("Error cargando los contactos");
                        return;
                    }

                    const data = await res.json();
                    if (Array.isArray(data)) {
                        setStore({ contacts: data }); 
                    } else {
                        setStore({ contacts: [] }); 
                    }
                } catch (error) {
                    console.error("Error cargando los contactos:", error);
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
                        getActions().getContacts(); 
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
                        getActions().getContacts(); 
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
                        getActions().getContacts(); 
                    } else {
                        console.error("Error al eliminar el contacto");
                    }
                } catch (error) {
                    console.error("Error al eliminar el contacto:", error);
                }
            },
        },
    };
};

export default getState;
