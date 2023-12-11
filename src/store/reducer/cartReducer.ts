import { PayloadAction } from '@reduxjs/toolkit';
import { ADD_MORE_QUANTITY, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from '../action/actionTypes';
import { Product } from '../../type/types';

const initialState = {
    cartItems: [],
}

const cartReducer = (state = initialState, action: PayloadAction<Product>) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case ADD_MORE_QUANTITY:
            const updatedCartItems = state.cartItems.map((item: Product) =>
                item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
            );
            return {
                ...state,
                cartItems: updatedCartItems,
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item: Product) => item.id !== action.payload.id),
            };
        case CLEAR_CART:
            return {
                cartItems: action.payload,
            };
        default:
            return state;
    }
};


export default cartReducer;
