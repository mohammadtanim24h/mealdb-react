import React from "react";
import "./Meal.css";

const Meal = ({ meal, handleOrderBtn }) => {
    const { strMeal, strMealThumb, strArea } = meal;
    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <div>
                <h3>{strMeal}</h3>
                <h4>Cuisine: {strArea}</h4>
                <button onClick={() => handleOrderBtn(meal)} className="order-btn">Place Order</button>
            </div>
        </div>
    );
};

export default Meal;
