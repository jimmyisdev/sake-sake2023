import { getDrinkBySearchVal } from "@component/redux/features/drinkSlice";
import { AppDispatch } from "@component/redux/store";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

export default function SearchSect() {
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  function handleSearchBtn() {
    let searchVal = inputRef.current?.value;
    dispatch(getDrinkBySearchVal(searchVal));
  }
  useEffect(() => {
    inputRef.current?.focus();
    dispatch(getDrinkBySearchVal(""));
  }, [dispatch]);

  return (
    <div className="searchSect">
      <div className="item_row">
        <input type="text" placeholder="Want to drink..." ref={inputRef} />
        <button onClick={handleSearchBtn}>Search</button>
      </div>
    </div>
  );
}
