import React from "react";
import DrinkItem from "./DrinkItem";
import { DrinkType } from "../../../types";
import { useSelector } from "react-redux";
import { RootState } from "@component/redux/store";
import Fallback from "./Fallback";

export default function DrinkContainer() {
  const tempDrinks = useSelector((state: RootState) => state.drink.tempDrinks);
  return (
    <div className="drinksResultSect">
      <div className="item_row">
        {!!tempDrinks.length &&
          tempDrinks.map((drinkItem: DrinkType) => {
            return <DrinkItem key={drinkItem.id} data={drinkItem} />;
          })}
        {!tempDrinks.length && <Fallback text="Failed to find the result"/>}
      </div>
    </div>
  );
}
