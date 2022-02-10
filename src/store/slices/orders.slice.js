import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userOrders: [],
};

const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		getOrders: (state, action) => {
			state.userOrders = action.payload.orders;
		},
	},
});

export const ordersActions = ordersSlice.actions;

export default ordersSlice.reducer;
