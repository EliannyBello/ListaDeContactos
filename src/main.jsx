import React from 'react';
import ReactDOM from 'react-dom/client';
import Rutas from './Rutas.jsx';
import passContext from './context/GlobalContext.jsx';



const App = passContext(Rutas);

ReactDOM.createRoot(document.querySelector('#app')).render(
    <App />
);
