'use client'

import { configureStore } from "@reduxjs/toolkit";
import drinkReducer from "./features/drinkSlice";
import billReducer from "./features/billSlice";


export const store = configureStore({
    reducer:{
        drink: drinkReducer,
        bill: billReducer
    }

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch