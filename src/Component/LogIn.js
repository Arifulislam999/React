import React, { useState } from "react";
import Footer from "./Footer";

export default function LogIn() {
    const [value, setValue] = useState("");
    const handleSubmit = (event) => {
        // event.preventDefault();
        console.log(event.target.value);
    };
    return (
        <div>
            <form type="submit" onSubmit={handleSubmit}>
                <div className="hole-aria">
                    <div className="log-in-2">
                        <div className="log">
                            <label>Name:</label>
                            <br />
                            <input type="text" placeholder="Enter Name..." required />
                            <br />
                            <label className="pt-4">Email:</label>
                            <br />
                            <input type="email" placeholder="Enter Email..." />
                            <br />
                            <div className="btt text-center pt-3">
                                <button>Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
}
