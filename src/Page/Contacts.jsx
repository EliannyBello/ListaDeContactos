import React, { useContext } from "react";
import { Context } from "../context/GlobalContext.jsx";
import CardContact from "../components/CardContact.jsx";
import { Link } from "react-router-dom";


const Contacts = () => {
  const { store } = useContext(Context);
  const { contacts } = store;

  return (
    <div className="text-center">
      <nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-end me-5">
        <Link to="/Form">
          <button className="btn btn-primary">Crear Nuevo Contacto</button>
        </Link>
      </nav>
      {store.contacts.map((contact, index) => (
        <CardContact key={index} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
