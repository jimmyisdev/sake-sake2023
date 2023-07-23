import { RootState } from "@component/redux/store";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import SouvenirSect from "./SouvenirSect";
import { OrderItemType } from "../../../types";

export default function CheckoutSect() {
  const orderList = useSelector((state: RootState) => state.drink.orderList);
  const productList = useSelector((state: RootState) => state.bill.productList);
  const [fee, setFee] = useState(0);
  const drinkCalc = useMemo(
    () => calculateList(orderList) * 300,
    [orderList.length]
  );
  const productCalc = useMemo(
    () => calculateList(productList) * 1500,
    [productList.length]
  );

  function calculateList(list: Array<OrderItemType>) {
    return list
      .map((item: OrderItemType) => item.amount)
      .reduce((acc: number, cur: number) => acc + cur, 0);
  }

  function calculateTotal() {
    let total = drinkCalc + productCalc + 500;
    setFee(total);
  }
  useEffect(() => {
    calculateTotal();
  }, [productList.length]);

  return (
    <div className="item_column">
      <h1>Bill</h1>
      {orderList.map(({ name, amount }: OrderItemType) => {
        return (
          <div key={name + amount} className="orederItem">
            <h5 className="name">{name}</h5>
            <span className="amount">{amount}</span>
            <span>{amount * 300}</span>
          </div>
        );
      })}
      {productList.map(({ name, amount }: OrderItemType) => {
        return (
          <div key={name + amount} className="orederItem">
            <h5 className="name">{name}</h5>
            <span className="amount">{amount}</span>
            <span>{amount * 1500}</span>
          </div>
        );
      })}
      <div className="orederItem">
        <h5 className="name">Service Fee</h5>
        <span className="amount">-</span>
        <span>500</span>
      </div>
      <div className="orederItem">
        <h5 className="name">Total Fee</h5>
        <span className="amount"></span>
        <span>{fee}</span>
      </div>
      <SouvenirSect />
    </div>
  );
}
