import React, { useEffect, useState } from "react";
import demo from "../Img/demo-1.jfif";
import demo_1 from "../Img/demo-2.png";
import demo_2 from "../Img/demo-3.jfif";
import demo_3 from "../Img/demo-4.jfif";
import Footer from "./Footer";
import Timer from "./Timer";
import Timer_2 from "./Timer_2";
// import Timer from "./Component/Timer";

export default function Home() {
    return (
        <div>
            <div className="banner">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfKJNuStBNJWoDAs_XgSurG1lGu47mM_qzg&usqp=CAU" />
                <div>
                    <p className="just text-secondary"></p>
                </div>
                <div className="button btn-b">
                    <button className="btn btn-secondary px-5">Explore </button>
                    <button className="btn btn-dark px-5 nn">Get Start </button>
                </div>
            </div>
            <div className="bannar-b-1 py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-4 count-number" id="bbn">
                        <div className="text-center py-4">
                            <h5 className="text-secondary">Served Over</h5>
                            <div className="counter">
                                <h1 className="text-center text-info td">{<Timer />}</h1>
                                <strong className="text-danger"> K</strong>
                            </div>
                            <div className="ctn-2 text-danger">
                                <h4 className="px-2">Children in </h4>
                                <h5>{<Timer_2 />}</h5> <h4 className="px-2">Countries</h4>
                            </div>
                            <div className="btt">
                                <button>Quick View Our Mission</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <div>
                            <h2 className="text-center text-primary py-3 text-1">Who Are We?</h2>
                        </div>
                        <div className="para">
                            <p className="px-5">
                                Knowing where every medical device is throughout your entire healthcare system can be a daunting task. We
                                can help you do just that. With products like lovely Encompass and OnWatch, we’ll help provide a transparent
                                view of every device in your organization. Knowing where every medical device is throughout your entire
                                healthcare system can be a daunting task. We can help you do just that. With products like Encompass and
                                OnWatch, we’ll help provide a transparent view of every device in your organization.
                            </p>
                            <p className="px-5">
                                More than ever, it’s important to protect against external threats to your patients’ medical information and
                                the devices that store that information across your organization. Together we will create a customized,
                                system-wide plan to help you combat and protect against these threats.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid home-b-1">
                <div className="row mt-0">
                    <div className="col-sm-12 col-md-3 my-1 text-center banner-2-img bg-secondary">
                        <div className="img-2 bg-info mt-2">
                            <img src={demo_1} />
                        </div>

                        <div className="p-3">
                            <h3 className="text-sha">Our Achievement....</h3>
                            <p className="text-shap">
                                More than ever, it’s important to protect against external threats to your patients’ medical information and
                                the devices that store that information across your organization.
                            </p>
                            <div className="btt">
                                <button>Click More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 my-1 text-center banner-2-img bg-secondary">
                        <div className="img-2 bg-info mt-2">
                            <img src={demo_2} />
                        </div>

                        <div className="p-3">
                            <h3 className="text-sha">Our Achievement....</h3>
                            <p className="text-shap">
                                More than ever, it’s important to protect against external threats to your patients’ medical information and
                                the devices that store that information across your organization.
                            </p>
                            <div className="btt">
                                <button>Click More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 my-1 text-center banner-2-img bg-secondary">
                        <div className="img-2 bg-info mt-2">
                            <img src={demo} />
                        </div>

                        <div className="p-3">
                            <h3 className="text-sha">Our Achievement....</h3>
                            <p className="text-shap">
                                More than ever, it’s important to protect against external threats to your patients’ medical information and
                                the devices that store that information across your organization.
                            </p>
                            <div className="btt">
                                <button>Click More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 my-1 text-center banner-2-img bg-secondary">
                        <div className="img-2 bg-info mt-2">
                            <img src={demo_3} />
                        </div>

                        <div className="p-3">
                            <h3 className="text-sha">Our Achievement....</h3>
                            <p className="text-shap">
                                More than ever, it’s important to protect against external threats to your patients’ medical information and
                                the devices that store that information across your organization.
                            </p>
                            <div className="btt">
                                <button>Click More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
