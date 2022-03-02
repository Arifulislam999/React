import React from "react";
import Img from "../Img/webpic-1.png";
import Img_2 from "../Img/webpic-2.png";
import Img_3 from "../Img/webpic-3.png";
import Img_4 from "../Img/webpic-5.jfif";
import Footer from "./Footer";

export default function About() {
    return (
        <div className="about py-3 my-2" id="about">
            <div className="about-pic">
                <img src="https://wallpaperaccess.com/full/2109963.jpg" />
            </div>
            <div className="container-fluid">
                <h5 className="text-center py-3 text-primary">Website Design With Your Business In Mind.</h5>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="pt-3 img-1 text-center">
                            <img className="img-thumbnail" src={Img} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <p className="pt-3">
                            Prophase Marketing has been in website design since the birth of the modern internet. The lines between the
                            digital world and the natural world are blurring more every day, and a business’s web presence and digital
                            adaptability have never been more critical. Don’t leave your website design to chance.
                        </p>
                        <p>
                            Our professional website design team goes to work for you–our goal is a simple one: be your marketing
                            department. Our group of industry-leading web designers, graphic artists, and content creators will work with
                            you to create a fully custom & unique website — built specifically for your business & to meet the needs of your
                            customers. We can equip you with the tools, training, marketing products, and services to execute the perfect
                            digital strategy for your market. Not sure where to start? Below you’ll find some of the features, products, and
                            services we offer to tailor your website design to meet the needs of any business.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <h5 className="text-center py-3 text-danger">Website Design & Developement</h5>
                    <div className="col-sm-12 col-md-6">
                        <p className="pt-3">
                            Prophase Marketing has been in website design since the birth of the modern internet. The lines between the
                            digital world and the natural world are blurring more every day, and a business’s web presence and digital
                            adaptability have never been more critical. Don’t leave your website design to chance.
                        </p>
                        <p>
                            Our professional website design team goes to work for you–our goal is a simple one: be your marketing
                            department. Our group of industry-leading web designers, graphic artists, and content creators will work with
                            you to create a fully custom & unique website — built specifically for your business & to meet the needs of your
                            customers. We can equip you with the tools, training, marketing products, and services to execute the perfect
                            digital strategy for your market. Not sure where to start? Below you’ll find some of the features, products, and
                            services we offer to tailor your website design to meet the needs of any business.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="pt-3 img-1 text-center">
                            <img className="img-thumbnail" src={Img_2} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <h5 className="text-center py-3 text-primary">UI/UX Design & Developement</h5>
                    <div className="col-sm-12 col-md-6">
                        <p className="pt-3">
                            Prophase Marketing has been in website design since the birth of the modern internet. The lines between the
                            digital world and the natural world are blurring more every day, and a business’s web presence and digital
                            adaptability have never been more critical. Don’t leave your website design to chance.
                        </p>
                        <p>
                            Our professional website design team goes to work for you–our goal is a simple one: be your marketing
                            department. Our group of industry-leading web designers, graphic artists, and content creators will work with
                            you to create a fully custom & unique website — built specifically for your business & to meet the needs of your
                            customers. We can equip you with the tools, training, marketing products, and services to execute the perfect
                            digital strategy for your market. Not sure where to start? Below you’ll find some of the features, products, and
                            services we offer to tailor your website design to meet the needs of any business.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="pt-3 img-1 text-center">
                            <img className="img-thumbnail" src={Img_3} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <h5 className="text-center py-3 text-danger">Communication Website Design & Business In Mind.</h5>

                    <div className="col-sm-12 col-md-6">
                        <div className="pt-3 img-1 text-center">
                            <img className="img-thumbnail" src={Img_4} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <p className="pt-3">
                            Prophase Marketing has been in website design since the birth of the modern internet. The lines between the
                            digital world and the natural world are blurring more every day, and a business’s web presence and digital
                            adaptability have never been more critical. Don’t leave your website design to chance.
                        </p>
                        <p>
                            Our professional website design team goes to work for you–our goal is a simple one: be your marketing
                            department. Our group of industry-leading web designers, graphic artists, and content creators will work with
                            you to create a fully custom & unique website — built specifically for your business & to meet the needs of your
                            customers. We can equip you with the tools, training, marketing products, and services to execute the perfect
                            digital strategy for your market. Not sure where to start? Below you’ll find some of the features, products, and
                            services we offer to tailor your website design to meet the needs of any business.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
