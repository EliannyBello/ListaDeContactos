import React, { useEffect, useContext } from "react";
import { Context } from "../context/GlobalContext.jsx";
import CardContact from "../components/CardContact.jsx";
import { Link } from "react-router-dom";


const Contacts = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center justify-content-center">
        <Link to="/Form">
          <button className="contact-create">Crear Nuevo Contacto</button>
        </Link>
      {store.contacts.length === 0 ? (
        <p>No hay contactos disponibles</p>
      ) : (
        store?.contacts?.map((contact, index) => (
          <CardContact key={index} contact={contact} />
        ))
      )}
    </div>
  );
};

export default Contacts;
