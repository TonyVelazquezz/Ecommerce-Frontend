import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartProducts: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		getCart: (state, action) => {
			state.cartProducts = action.payload.products;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
