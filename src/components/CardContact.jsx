import React, { useContext } from "react";
import { Context } from "../context/GlobalContext.jsx";
import { useNavigate } from "react-router-dom";
import img from "../img/unicor2.jpg"


const CardContact = ({ contact }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/form/${contact.id}`);
  };

  const handleDelete = () => {
    actions.deleteContact(contact.id);
  };

  return (
    <div className="user-card">
      <img
        src={img}
        alt="Profile"
        className="card_image"
      />
      <div className="user-card-info">
        <h2>{contact.name}</h2>  
        <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
        <p><i className="fas fa-phone"></i> {contact.phone}</p>
        <p><i className="fas fa-envelope"></i> {contact.email}</p>
      </div>  
      <div className="user-card-actions">
        <i className="fas fa-pencil-alt" onClick={handleEdit}></i> 
        <i className="fas fa-trash" onClick={handleDelete}></i> 
      </div>
    </div>
  );
};

export default CardContact;
