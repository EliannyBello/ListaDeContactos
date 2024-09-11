import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/GlobalContext.jsx"; 

const Form = () => {
    const { store, actions } = useContext(Context);  

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();  

    
    useEffect(() => {
        if (store.contactToEdit) {
            setFullName(store.contactToEdit.name || "");
            setEmail(store.contactToEdit.email || "");
            setPhone(store.contactToEdit.phone || "");
            setAddress(store.contactToEdit.address || "");
        } else {
            
            setFullName("");
            setEmail("");
            setPhone("");
            setAddress("");
        }
    }, [store.contactToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const contact = {
            name: fullName,
            phone: phone,
            email: email,
            address: address,
        };

        if (store.contactToEdit) {
        
            actions.putContact(store.contactToEdit.id, contact);
        } else {
            // Crea un nuevo contacto
            actions.createContact(contact);
        }

     
        if (actions.clearContactToEdit) {
            actions.clearContactToEdit();
        } else {
            console.error("clearContactToEdit no está definido en actions.");
        }

       
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2>{store.contactToEdit ? "Edit Contact" : "Add a new contact"}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input 
                    type="text" 
                    id="fullName" 
                    value={fullName} 
                    placeholder="Full Name" 
                    onChange={(e) => setFullName(e.target.value)} 
                    required 
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />

                <label htmlFor="phone">Phone</label>
                <input 
                    type="tel" 
                    id="phone" 
                    value={phone} 
                    placeholder="Phone" 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                />

                <label htmlFor="address">Address</label>
                <input 
                    type="text" 
                    id="address" 
                    value={address} 
                    placeholder="Address" 
                    onChange={(e) => setAddress(e.target.value)} 
                    required 
                />

                <button type="submit">Guardar</button>
            </form>
            <br />
            <Link to="/">
                <p className="btn btn-primary">or get back to contacts</p>
            </Link>
        </div>
    );
};

export default Form;
