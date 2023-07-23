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

export interface DrinkSliceStateType{
  orderList: Array<OrderItemType>;
  searchVal: string;
  tempDrinks: Array<any>
}
export interface BillSliceStateType{
  productList: Array<OrderItemType>;
  isCheckout: boolean;
}

