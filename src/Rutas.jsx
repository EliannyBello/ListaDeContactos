import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './Page/Contacts.jsx';
import Form from './Page/Form.jsx';
import './style/index.css';


const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Contacts/>} />  
                <Route path="/Form" element={<Form/>} />  
                <Route path="/Form/:id" element={<Form/>} />  
            </Routes>
        </BrowserRouter>
    );
};

export default Rutas;
