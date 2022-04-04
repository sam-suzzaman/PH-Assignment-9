import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
    return (
        <section className="error-container">
            <h2 className="error-title">Sorry! 404 - page not found</h2>
            <Link to="/" className="error-btn">
                go to home
            </Link>
        </section>
    );
};

export default ErrorPage;
