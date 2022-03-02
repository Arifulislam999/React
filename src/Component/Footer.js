import React from "react";

export default function Footer() {
    return (
        <div className="fot py-3">
            <div className="row">
                <div className="col-sm-12 col-md-3 text-center fott">
                    <h3>Services</h3>
                    <h6>Web design</h6>
                    <h6>Software</h6>
                    <h6>Development</h6>
                    <h6>Hosting</h6>
                </div>

                <div className="col-sm-12 col-md-3 text-center fott">
                    <h3>About</h3>
                    <h6>Company</h6>
                    <h6>Team</h6>
                    <h6>Careers</h6>
                    <h6>Develop</h6>
                    <h6>FAQ</h6>
                </div>
                <div className="col-sm-12 col-md-6 fott text-center">
                    <h3>Company Name</h3>
                    <p className="px-3 text-success">
                        Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum.
                        Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
                    </p>
                    <div className="text-center">
                        <div class="wrap">
                            <div class="search">
                                <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                                <button type="submit" class="searchButton">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="icon-2">
                <i class="fa-brands fa-facebook-square text-info"></i>
                <i class="fa-brands fa-instagram-square text-primary"></i>
                <i class="fa-brands fa-twitter-square text-info"></i>
                <i class="fa-brands fa-linkedin text-info"></i>
                <i class="fa-brands fa-pinterest text-danger"></i>
                <i class="fa-solid fa-face-glasses"></i>
            </div>
            <div className="text-center py-2 bg-white">
                <p>
                    Copyright <i class="fa-solid fa-copyright"></i>2022 <strong>Designed by Ariful Islam</strong>
                </p>
            </div>
        </div>
    );
}
