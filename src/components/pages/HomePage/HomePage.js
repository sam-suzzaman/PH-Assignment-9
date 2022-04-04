import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import CustomerReviews from "../../CustomerReviews/CustomerReviews";
import Hero from "../../Hero/Hero";
import useReviewsData from "../../utilities/useReviewsData";
import "./homePage.css";

const HomePage = () => {
    const { reviews, loading } = useReviewsData();

    // extract first 3items
    const newArrayOfReviews = reviews.slice(0, 3);

    if (loading) {
        return <h2>Loading</h2>;
    }
    return (
        <section>
            <Hero />
            <CustomerReviews reviewsData={newArrayOfReviews}>
                <Link to="reviews">
                    <Button btnName="see all reviews" />
                </Link>
            </CustomerReviews>
        </section>
    );
};

export default HomePage;
