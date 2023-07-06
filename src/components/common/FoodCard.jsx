import Counter from "./Counter";
import Price from "./Price";

export default function FoodCard() {
  return (
    <li className="food-card">
      <img src={require("../../assets/img/hum.jpg")} alt="food" />

      <div className="food-card--info">
        <p>همبرگر مخصوص</p>
        <Price price={"۱۰۰۰"} />
        <div className="food-card--total">
          <Counter />

          <Price price={"۱۰۰۰"} />
        </div>
      </div>
    </li>
  );
}
