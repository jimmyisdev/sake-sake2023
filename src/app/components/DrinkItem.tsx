"use client";

import React, { useRef } from "react";
import { DrinkType } from "../../../types";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addOrder } from "@component/redux/features/drinkSlice";

export default function DrinkItem({ data }: { data: DrinkType }) {
  const { category, id, img, name } = data;
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const dispatch = useDispatch();

  function handleOrderBtn() {
    dispatch(
      addOrder({
        name: name,
        amount: Number(selectRef.current?.value),
      })
    );
  }
  return (
    <div className="item">
      <span className="item_description">{category}</span>
      <img src={img} alt={name} />
      <div className="item_info">
        <span>{name}</span>
      </div>
      <div className="item_action">
        <select name="amount" ref={selectRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={handleOrderBtn}>Order</button>
      </div>
    </div>
  );
}
