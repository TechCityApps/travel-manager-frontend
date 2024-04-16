import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthButtons from './auth/AuthButtons';
import CurrencyConverter from './components/Currency'; // Ensure the import path is correct
import Home from './components/Home'; // Ensure the import path is correct
import OffcanvasNavbar from './components/OffcanvasNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <OffcanvasNavbar />
            <div>
                Auth0
                <AuthButtons />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/currency" element={<CurrencyConverter />} />
            </Routes>
        </Router>
    );
}

export default App;