import { Product } from '../../type/types';
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, ADD_MORE_QUANTITY } from './actionTypes';

export const addToCart = (productById: Product | undefined) => ({
    type: ADD_TO_CART,
    payload: productById,
});

export const addMoreQuantity = (productById: Product, quantity: number) => ({
    type: ADD_MORE_QUANTITY,
    payload: { ...productById, quantity: quantity }
})

export const removeFromCart = (productById: Product) => ({
    type: REMOVE_FROM_CART,
    payload: productById,
});

export const clearCart = () => ({
    type: CLEAR_CART,
    payload: []
});
