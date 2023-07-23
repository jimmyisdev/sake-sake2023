"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@component/redux/store";
import { setCheckout } from "@component/redux/features/billSlice";
import DrinkContainer from "../components/DrinkContainer";
import SearchSect from "../components/SearchSect";
import CheckoutSect from "../components/CheckoutSect";
import Image from "next/image";
import Loading from "../components/Loading";

export default function Order() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.drink.isLoading);
  const isCheckout = useSelector((state: RootState) => state.bill.isCheckout);
  const orderList = useSelector((state: RootState) => state.drink.orderList);

  function handleCheckoutBtn() {
    dispatch(setCheckout());
  }

  return (
    <main className="orderPage">
      {!isCheckout && (
        <button
          className="chekcoutBtn"
          onClick={handleCheckoutBtn}
          title="Checkout please"
        >
          <Image
            src="/assets/checkout.png"
            alt="checkout button"
            width={60}
            height={60}
          />
        </button>
      )}
      {!isCheckout && <SearchSect />}
      {!isCheckout && !isLoading && <DrinkContainer />}
      {!isCheckout && isLoading && (
        <section className="flexC">
          <Loading />
        </section>
      )}
      {isCheckout && <CheckoutSect />}
    </main>
  );
}
