import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState({});
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
            .then(res => res.json())
            .then(data => setMeals(data));
    }, [])
    const [cart, setCart] = useState([]);
    const handleOrderBtn = meal => {
        const newCart = [...cart, meal];
        setCart(newCart);
    }
    return (
        <div className='container'>
            <div className="meals-container">
                {
                    meals.meals?.map(meal => <Meal key={meal.idMeal} meal={meal} handleOrderBtn={handleOrderBtn}></Meal>)
                }
            </div>
            <div className="details container">
                {
                    cart.map(mealDetail => <Details mealDetail={mealDetail}></Details>)
                }
            </div>
        </div>
    );
};

export default Meals;