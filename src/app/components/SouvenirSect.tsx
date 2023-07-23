import { addProduct } from "@component/redux/features/billSlice";
import Image from "next/image";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export default function SouvenirSect() {
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const dispatch = useDispatch();
  function handleOrderBtn() {
    dispatch(
      addProduct({
        name: 'tshirt',
        amount: Number(selectRef.current?.value),
      })
    );
  }
  return (
    <div>
      <div className="item_row">
        <div className="item">
          <span className="item_description">Free Size</span>
          <Image
            src="/assets/tshirtW.png"
            alt="Tshirt"
            width={250}
            height={250}
          />
          <div className="item_info">
            <span>Tshirt</span>
            <span>$ 800</span>
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
      </div>
    </div>
  );
}
