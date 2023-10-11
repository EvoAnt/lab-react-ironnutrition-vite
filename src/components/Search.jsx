import { useState } from "react";
import { Divider, Input } from "antd";
import foodsJson from "../foods.json";
import FoodList from "./FoodList";

const Search = () => {
  const [firstLetter, setFirstLetter] = useState("");
  const [foods, setFoods] = useState(moviesDataJSON);

  const filterFoodList = (str) => {
    setFirstLetter(str);
  };

  let filtered = firstLetter
    ? [...foods].filter(
        (food) => food.name[0].toLowerCase() === firstLetter.toLowerCase()
      )
    : foods;

  return (
    <div>
      <Divider>Search</Divider>

      <label>
        <Search filterFoods={filterFoodList} firstLetter={firstLetter} />
      </label>
      <Input name="search" value={undefined} type="text" onChange={() => {}} />
      {filtered.map((food) => {
        return <FoodList key={food._id} food={food} />;
      })}
    </div>
  );
};

export default Search;
