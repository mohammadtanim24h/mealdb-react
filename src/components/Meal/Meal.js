import React from "react";
import "./Meal.css";

const Meal = (props) => {
    const { strMeal, strMealThumb, strArea } = props.meal;
    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <div>
                <h3>{strMeal}</h3>
                <h4>Cuisine: {strArea}</h4>
                <button className="cart-btn">Add To Cart</button>
            </div>
        </div>
    );
};

export default Meal;
