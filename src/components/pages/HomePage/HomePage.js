import React from "react";
import Hero from "../../Hero/Hero";
import useReviewsData from "../../utilities/useReviewsData";
import "./homePage.css";

const HomePage = () => {
    const [reviews, loading] = useReviewsData();
    console.log(reviews);

    if (loading) {
        return <h2>Loading</h2>;
    }
    return <Hero />;
};

export default HomePage;
