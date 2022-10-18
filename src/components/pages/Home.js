import React from "react";
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import VMC from "./inc/Vmc";
import Service1 from '../images/information-arts.jpg';
import Service2 from '../images/information-arts-esociety.jpg';
import Service3 from '../images/info-science-technology_0.jpg';

function Home() {
    return (
        <div>
            <Slider />

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our School</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                Hello welcome to Hill School
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            <VMC />

            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Degree Programs</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>B.A. Information Science & Arts</h6>
                                    <div className="underline"></div>
                                    <p> 
                                    Learn about creative coding, human-computer interaction,
                                     virtual reality, user experience, interactive art, sound
                                      technology, multimedia design, and game development.
                                    </p>
                                    <Link to="/services" className="btn btn-link">LEARN MORE</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service2} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>B.A. Information Science & eSociety</h6>
                                    <div className="underline"></div>
                                    <p> 
                                    Explore social network theories and analysis, digital
                                     storytelling, information manipulation and propaganda,
                                      digital discourse, web design, and the impact of social media on daily life.
                                    </p>
                                    <Link to="/services" className="btn btn-link">LEARN MORE</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service3} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>B.S. Information Science & Technology</h6>
                                    <div className="underline"></div>
                                    <p> 
                                    Explore information systems and computational methods
                                     that are being used to transform data and information into
                                      knowledge, from machine learning and data science to artificial intelligence.
                                    </p>
                                    <Link to="/services" className="btn btn-link">LEARN MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section style={{backgroundColor: " #87CEEB"}}>
            <div className="entity entity-paragraphs-item paragraphs-item-uaqs-full-width-bg-wrapper mb-4  background-wrapper bg-sky">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="btgrid">
                                <div className="row row-1">
                                    <div className="col col-md-4">
                                        <div className="content">
                                            <h3>INFORMATION AND TECHNOLOGIE DEGREE</h3>
                                            <p>Check out our Youtube Channel !</p>
                                            <p><a className="btn btn-hollow-primary" href="https://www.youtube.com/watch?v=cFyabB5mgOc&ab_channel=HarvardUniversity">Share Alumni Stories</a></p>
                                            <p> </p>
                                        </div>
                                    </div>
                                    <div className="col col-md-8">
                                        <div className="content">
                                            <div id="file-504" class="file file-video file-video-oembed view-mode-uaqs_large no-alignment-set">
                                                <h2 className="element-hidden sr-only"><a href="/file/504">School of Information and technology</a></h2>
                                                <div class="content">
                                                <div class="embed-responsive embed-responsive-16by9">
                                                <iframe width="640" height="360" src="https://www.youtube.com/embed/1GHKvIB7Luw?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="UArizona's School of Information MLIS Program 50th Anniversary!"></iframe>
                                                </div>  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
}

export default Home;