import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider} from './context/ContextProvider';
// import App from './App';
// import Nav from './components2/Nav';
// import App from './states-random/App';
// import App2 from './states-random/App2';
// import Navbar from './navbar/Navbar';
import App from './navbar2/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>

    </React.StrictMode>


);