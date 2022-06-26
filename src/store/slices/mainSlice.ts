import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../@types/IProduct";
import sampleProducts from "../../sample-products";
import { EditParamsType } from "../../@types/EditParamsType";
import { IMainState } from "../../@types/IMainState";
import { CartItemType } from "../../@types/CartItemType";

const initialState: IMainState = {
  productList: sampleProducts,
  cartList: [],
  totalPrice: 0,
  totalCount: 0,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      state.productList.unshift({
        ...action.payload,
        id: state.productList[state.productList.length - 1].id + 1,
      });
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.productList = state.productList.filter(
        (i) => !(i.id === action.payload)
      );
      state.cartList = state.cartList.filter((i) => i.id !== action.payload);
      mainSlice.caseReducers.calculateCountAndPrice(state);
    },
    editItem: (state, action: PayloadAction<EditParamsType>) => {
      state.productList = state.productList.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, [action.payload.option]: action.payload.value };
        return { ...item };
      });
      mainSlice.caseReducers.calculateCountAndPrice(state);
    },
    addItemToCart: (state, action: PayloadAction<CartItemType>) => {
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      itemIndex >= 0
        ? (state.cartList[itemIndex].count += 1)
        : state.cartList.push({ ...action.payload });
      mainSlice.caseReducers.calculateCountAndPrice(state);
    },
    deleteItemFromCart: (state, action: PayloadAction<number>) => {
      state.cartList = state.cartList.filter((i) => i.id !== action.payload);
      mainSlice.caseReducers.calculateCountAndPrice(state);
    },
    clearCart: (state) => {
      state.cartList = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
    calculateCountAndPrice: (state) => {
      state.totalCount = state.cartList.reduce(
        (count, item) => count + item.count,
        0
      );
      state.totalPrice = state.cartList.reduce((sum, item) => {
        const product = state.productList.find(
          (i) => i.id === item.id && i.status === "available"
        );
        return sum + (product?.price || 0) * item.count;
      }, 0);
    },
  },
});

export const {
  addItem,
  deleteItem,
  editItem,
  addItemToCart,
  deleteItemFromCart,
  clearCart,
} = mainSlice.actions;
export default mainSlice.reducer;
