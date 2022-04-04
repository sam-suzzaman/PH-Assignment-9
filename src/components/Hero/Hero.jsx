import React from "react";
import Button from "../Button/Button";
import "./Hero.css";
import heroImg from "./../../../src/assets/img/hero-bg.jpg";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="hero-row">
                <div className="hero-col">
                    <h2 className="hero-title">find the best one</h2>
                    <p className="hero-text">
                        The best place for selecting a book According to the
                        reviews of these page you can easily find the best book
                        for yourself.
                    </p>
                    <Button btnName="live demo" />
                </div>
                <div className="hero-img-container">
                    <img src={heroImg} alt="bookself" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
