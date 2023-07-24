"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@component/redux/store";
import { setCheckout } from "@component/redux/features/billSlice";
import DrinkContainer from "../components/DrinkContainer";
import SearchSect from "../components/SearchSect";
import CheckoutSect from "../components/CheckoutSect";
import Image from "next/image";
import Fallback from "../components/Fallback";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { OrderItemType } from "../../../types";

export default function Order() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.drink.isLoading);
  const isCheckout = useSelector((state: RootState) => state.bill.isCheckout);
  const orderList: Array<OrderItemType> = useSelector(
    (state: RootState) => state.drink.orderList
  );

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
          <Fallback text="is loading..." />
        </section>
      )}
      {isCheckout && <CheckoutSect />}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}
