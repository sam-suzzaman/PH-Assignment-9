import { useEffect, useState } from "react";
import fakeReviewsData from "./fakeReviewsData";

const useReviewsData = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    // setup the data
    useEffect(() => {
        setLoading(true);
        setReviews(fakeReviewsData);
        setLoading(false);
    }, []);

    return [reviews, loading];
};

export default useReviewsData;
