import { useEffect, useState } from "react";
import Service from "../../services/service";
import FoodCard from "./FoodCard";

const request = new Service("http://localhost:3000/");

export default function FoodsWrapper() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    request.get("Menu").then((results) => {
      setFoods(results);
    });
  }, []);

  return (
    <ul className="foods-wrapper">
      {foods.length > 0 &&
        foods.map((food, i) => (
          <FoodCard
            key={i}
            img={food.image}
            title={food.name}
            basePrice={Number(food.price)}
          />
        ))}
    </ul>
  );
}
