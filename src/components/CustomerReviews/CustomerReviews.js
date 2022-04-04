import React from "react";
import "./customerReviews.css";
import Review from "./../../components/Review/Review";


const CustomerReviews = ({ children, reviewsData }) => {
    return (
        <section className="reviews-sec-wrapper">
            <h2 className="review-title">
                customers reviews-
                <span className="fancy">{reviewsData.length}</span>
            </h2>
            <div className="reviews-container">
                {reviewsData.map((review) => {
                    return <Review key={review.id} review={review} />;
                })}
            </div>
            <div className={`btn-container ${children && "mt-3"}`}>
                {children}
            </div>
        </section>
    );
};

export default CustomerReviews;
