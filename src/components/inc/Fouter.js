import React from "react";
import { Link } from "react-router-dom";

function Fouter() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>School Information</h6>
                        <hr/>
                        <p className="text-white" >
                        We work directly with schools, colleges, and universities with the goal of providing high quality international education to students. Learn about CIS
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">Q. REGIDESO , MUSINZIRA , GITEGA - 56XXXX, BURUNDI </p></div>
                        <div><p className="text-white mb-1">Phone: +25765184785, +25775902138, +25779548680</p></div>
                        <div><p className="text-white mb-1"> Email: aurytresorishimwe@gmail.com</p></div>
                        <div><p className="text-white mb-1">Twitter, Facebook, Linkedin</p></div>
                    </div>
                </div>
                </div>
        </section>
    );
}

export default Fouter;