import React from "react";
import "./Details.css";

const Details = ({ mealDetail }) => {
    const { strMeal, strYoutube } = mealDetail;
    return (
        <div className="details">
            <h2>{strMeal}</h2>
            <a href={strYoutube}>Demo</a>
        </div>
    );
};

export default Details;
