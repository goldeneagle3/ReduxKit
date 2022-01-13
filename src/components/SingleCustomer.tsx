import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../features/customerSlice";


interface CustomerType {
  id: string;
  name: string;
  food: string[];
}

export default function SingleCustomer({id , name ,food}:CustomerType) {
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="customer-food-card-container">
      <h5>{name}</h5>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(
                addFood({
                  id,
                  food: customerFoodInput,
                })
              );
            }}
          >
            Add Food
          </button>
        </div>
      </div>
    </div>
  );
}
