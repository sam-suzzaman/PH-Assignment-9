import React from "react";
import CustomerReviews from "../../CustomerReviews/CustomerReviews";
import useReviewsData from "../../utilities/useReviewsData";
import "./ReviewsPage.css";

const ReviewsPage = () => {
    const { reviews } = useReviewsData();
    return (
        <section className="review-page-wrapper">
            <CustomerReviews reviewsData={reviews} />
        </section>
    );
};

export default ReviewsPage;
