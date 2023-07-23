import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DrinkSliceStateType, OrderItemType } from "../../../types";

export const getDrinkBySearchVal = createAsyncThunk(
  "drink/getDrink",
  async (searchVal: string | null | undefined) => {
    const endPoint =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const currentFetch = `${endPoint}${searchVal}`;
    try {
      const response = await fetch(currentFetch);
      const data = await response.json();
      const { drinks } = data;
      let processedData = drinks.map((item: any) => {
        return {
          id: item.idDrink,
          name: item.strDrink,
          img: item.strDrinkThumb,
          category: item.strCategory,
        };
      });
      return processedData;
    } catch (error) {
      return String(error);
    }
  }
);

const initialState = {
  searchVal: "",
  isLoading: false,
  tempDrinks: [],
  orderList: [],
  error: "",
};

export const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {
    inputSearchVal: (
      state: DrinkSliceStateType,
      action: PayloadAction<string>
    ) => {
      state.searchVal = action.payload;
    },
    addOrder: (
      state: DrinkSliceStateType,
      action: PayloadAction<OrderItemType>
    ) => {
      const {name, amount} = action.payload
      state.orderList= [...state.orderList, action.payload]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDrinkBySearchVal.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getDrinkBySearchVal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tempDrinks = action.payload;
      })
      .addCase(getDrinkBySearchVal.rejected, (state, action) => {
        state.isLoading = false;
        // state.error = action.payload;
        state.tempDrinks = [];
      });
  },
});

export const { addOrder, inputSearchVal } = drinkSlice.actions;

export default drinkSlice.reducer;
