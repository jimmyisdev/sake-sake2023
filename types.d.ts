export interface DrinkType {
  id: string;
  name: string;
  img: string;
  category: string;
}

export interface OrderItemType {
  name: string;
  amount: number;
}

export interface DrinkSliceStateType {
  isLoading: boolean;
  orderList: Array<OrderItemType> | Array[];
  searchVal: string;
  tempDrinks: Array<DrinkType>;
  error: string;
}
export interface BillSliceStateType {
  productList: Array<OrderItemType> | Array[];
  isCheckout: boolean;
}
