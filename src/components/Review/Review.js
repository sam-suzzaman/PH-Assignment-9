import React from "react";
import "./review.css";

// for rating
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// default images
import femalePic from "./../../assets/img/reviews/female.jpg";
import malePic from "./../../assets/img/reviews/male.png";

const Revies = (props) => {
    const { name, img, quote, rating, gender } = props.review;

    return (
        <div className="review-card">
            <div className="card-header">
                <div className="card-img-container">
                    <img
                        src={
                            img ? img : gender === "male" ? malePic : femalePic
                        }
                        alt="profilePic"
                    />
                </div>
                <div>
                    <h3 className="card-title">{name ? name : "Unknown"}</h3>
                    <p className="card-rating">
                        <Rating
                            initialRating={rating}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={
                                <FontAwesomeIcon
                                    style={{ color: "#0101ba" }}
                                    icon={faStar}
                                />
                            }
                            readonly
                        ></Rating>
                    </p>
                </div>
            </div>
            <p className="card-quote">{quote}</p>
        </div>
    );
};

export default Revies;
