import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
            <div className="navbar navbar-dark bg-dark shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 float-end">

                                <nav class="navbar navbar-dark bg-dark navbar-expand-lg float-end">
                                    <div class="container-fluid float-end">
                                        <Link to="/" class="navbar-brand">Aury_ish</Link>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse float-end" id="navbarSupportedContent">
                                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 float-end">
                                                <li class="nav-item float-end">
                                                    <Link to="/" onClick={() => {window.location.href="/"}} class="nav-link active float-end">Home</Link>
                                                </li>
                                                <li class="nav-item">
                                                   <Link to="/About" onClick={() => {window.location.href="/About"}} class="nav-link active float-end">About Us</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to="/Contact" onClick={() => {window.location.href="/Contact"}} class="nav-link active">Contact Us</Link>
                                                </li>    
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                        </div>
                    </div>
                </div>
            </div>

        
    );
}

export default Navbar;