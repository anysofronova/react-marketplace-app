import { IProduct } from "./IProduct";
import { CartItemType } from "./CartItemType";

export interface IMainState {
  productList: IProduct[];
  cartList: CartItemType[];
  totalCount: number;
  totalPrice: number;
}
