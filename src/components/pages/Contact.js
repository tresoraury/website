import React from "react";

function Contact() {
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

            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Contact form</h6>
                                    
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email Adress</label>
                                        <input type="text" className="form-control" placeholder="Enter Email Adress" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="3" className="form-control" placeholder="Type your Message..."></textarea>
                                    </div>
                                    <br></br>
                                    <div className="form-group p-y3">
                                        <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                                    </div>
                                </div>

                                <div className="col-md-6 border-start">
                                    <h6 className="main-heading">Adress Information</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Q. REGIDESO , MUSINZIRA , GITEGA - 56XXXX, BURUNDI 
                                    </p>
                                    <p>
                                        Phone: +25765184785, +25775902138, +25779548680
                                    </p>
                                    <p>
                                        Email: aurytresorishimwe@gmail.com
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;