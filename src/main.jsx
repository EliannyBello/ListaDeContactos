import React from 'react';
import ReactDOM from 'react-dom/client';
import Rutas from './Rutas.jsx';
import PassContext from './context/GlobalContext.jsx';
import index from './style/index.css';

ReactDOM.createRoot(document.querySelector('#app')).render(
    <PassContext>
        <Rutas/>
    </PassContext>
);
