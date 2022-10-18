import React from "react";
import VMC from "./inc/Vmc";

function About() {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home  /  About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section border-bottom">
                <div className="container">
                    <h5 className="main-heading" >Our School</h5>
                    <div className="underline"></div>
                    <p>
                    Enquiring minds, inspirational teaching, pioneering research, global ambition, local commitment and social purpose
                    </p>
                </div>
            </section>

            <VMC />

        </div>
    );
}

export default About;