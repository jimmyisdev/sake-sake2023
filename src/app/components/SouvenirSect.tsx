import { addProduct } from "@component/redux/features/billSlice";
import Image from "next/image";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export default function SouvenirSect() {
  let products = [
    {
      description: "Free Size",
      img: "tshirtW",
      name: "Tshirt",
      price: "1500",
    },
  ];
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const dispatch = useDispatch();
  function handleOrderBtn() {
    dispatch(
      addProduct({
        name: "tshirt",
        amount: Number(selectRef.current?.value),
      })
    );
  }
  return (
    <div>
      <div className="item_row">
        {products.map((item) => {
          const { description, img, name, price } = item;
          return (
            <div className="item" key={description + img + name + price}>
              <span className="item_description">{description}</span>
              <Image
                src={`/assets/${img}.png`}
                alt={`${img}`}
                width={250}
                height={250}
              />
              <div className="item_info">
                <span>{name}</span>
                <span>$ {price}</span>
              </div>
              <div className="item_action">
                <select name="amount" ref={selectRef}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button onClick={handleOrderBtn}>Buy</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
