import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Users from './Users';
import Members from './Members';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="Link-div">
                    <Link to="/reglogin">Register or Login</Link>
                </div>
                <Routes>
                    <Route path="/reglogin" element={<Users />} />
                    <Route path="/members" element={<Members />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
