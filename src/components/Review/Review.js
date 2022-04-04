import React from "react";
import "./review.css";

const Revies = (props) => {
    const { name, img, quote, rating } = props.review;
    return (
        <div className="review-card">
            <div className="card-header">
                <div className="card-img-container">
                    <img src={img} alt="profilePic" />
                </div>
                <div>
                    <h3 className="card-title">{name}</h3>
                    <p className="card-rating">Rating: {rating}</p>
                </div>
            </div>
            <p className="card-quote">{quote}</p>
        </div>
    );
};

export default Revies;
