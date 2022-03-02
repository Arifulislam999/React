import React from "react";
import Footer from "./Footer";

export default function Contact() {
    return (
        <div className="my-2">
            <section id="contact">
                <div className="row text-center my-2" id="says">
                    <div className="aw mt-3">
                        <h1 className="a text-danger">Contact me </h1>
                        <h5 className="h text-primary">
                            <span className="text-primary">get in touch</span>
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-5 ct ">
                        <h2 className="text-center text-info ">Get in Touch</h2>
                        <p className="text-center p-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam ullam, at laudantium deserunt fugit
                            commodi asperiores quasi id fuga similique architecto officiis adipisci illum doloribus soluta atque eum error
                            sint consectetur quos! Est sint minima expedita eaque id obcaecati quisquam eos dolorum autem, rem sit optio
                            assumenda eligendi! Recusandae.
                        </p>
                        <div className="d-flex ctt">
                            <i className="fas fa-user"></i>
                            <div>
                                <h3>Name</h3>
                                <h4>Ariful Islam</h4>
                            </div>
                        </div>

                        <div className="d-flex ctt pt-2">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Address</h3>
                                <h5>24/2A Mymensingh,Dhaka</h5>
                            </div>
                        </div>

                        <div className="d-flex ctt pt-2">
                            <i className="far fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <h5 className="t">arifulislamjoy@gmail.com</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-7">
                        <form>
                            <div>
                                <label className="px-5">Name:</label>
                                <br />
                                <div className="px-5">
                                    <input className="px-3" type="text" required />
                                </div>
                            </div>
                            <br />
                            <div className="form-group">
                                <label className="px-5">Email:</label>
                                <br />
                                <div className="px-5">
                                    <input className="px-3" type="email" required />
                                </div>
                            </div>
                            <div class="form-group">
                                <label className="px-5" for="exampleInputEmail1">
                                    Message
                                </label>
                                <br />

                                <div className="px-5">
                                    <input className="px-3" type="text" placeholder="Message...." />
                                </div>
                            </div>
                            <div class="text-center">
                                <a class="text-center" href="#">
                                    <button class="bt">Send Message</button>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="bg-dark text-center py-5">
                <div className="container-fluid text-info">
                    <p className="text-center">
                        Created By <strong class="text-danger"> Ariful Islam Joy |</strong> <i className="far fa-copyright"></i> 2022 All
                        rights reserved.
                    </p>
                </div>
            </section>
            {/* <Footer /> */}
        </div>
    );
}
