import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState({});
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
            .then(res => res.json())
            .then(data => setMeals(data));
    }, [])
    return (
        <div className='container'>
            <div className="meals-container">
                {
                    meals.meals?.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
            <div className="details container">

            </div>
        </div>
    );
};

export default Meals;