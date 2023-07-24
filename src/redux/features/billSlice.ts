import { BillSliceStateType, OrderItemType } from "../../../types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCheckout: false,
  productList: [],
};

export const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    setCheckout: (state: BillSliceStateType,) => {
      state.isCheckout = !state.isCheckout;
    },
    addProduct: (
      state: BillSliceStateType,
      action: PayloadAction<OrderItemType>
    ) => {
      state.productList= [...state.productList, action.payload]
    },
    
  },
});

export const { setCheckout, addProduct } = billSlice.actions;
export default billSlice.reducer;
