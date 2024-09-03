import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import Navbar from "../../components/navbar/Navbar";
import "./signin.css";

import React from "react";

const SignIn = () => {
    return (
        <div className="auth-page">
            <Navbar/>
            <Form isSignin/>
            <Footer />
        </div>
    );
};

export default SignIn;