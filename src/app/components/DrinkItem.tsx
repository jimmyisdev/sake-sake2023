"use client";

import React, { useRef } from "react";
import { DrinkType } from "../../../types";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addOrder } from "@component/redux/features/drinkSlice";
import { toast } from "react-toastify";

export default function DrinkItem({ data }: { data: DrinkType }) {
  const { category, id, img, name } = data;
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const dispatch = useDispatch();

  function handleOrderBtn() {
    let amount = Number(selectRef.current?.value);
    let notifyText = `You just ordered ${amount} ${name}`;

    dispatch(
      addOrder({
        name: name,
        amount: amount,
      })
    );
    toast(notifyText, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
