import React, { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";


const FoodList = () => {
  const [foods, setFoods] = useState(foodsJson);
  const handleDelete = (foods, id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  function addFood(food) {
    let newFoods = [food, ...foods];
    console.log(newFoods);
    setFoods(newFoods);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {/* <Search /> */}
      <AddFoodForm addFood={addFood} />
      {foods.map((food, index) => {
        return (
          <FoodBox
            key={index}
            food={food}
            handleDelete={() => {
              handleDelete(foods, food.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default FoodList;
