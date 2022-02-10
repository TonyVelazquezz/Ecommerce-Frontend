import axios from 'axios';

import { ordersActions } from '../slices/orders.slice';

export const fetchUserOrders = token => async dispatch => {
	try {
		const response = await axios.get(
			`${process.env.REACT_APP_API_URL}/orders/get-user-orders`,
			{
				headers: { authorization: `Bearer ${token}` },
			}
		);

		const { orders } = response.data.data;

		dispatch(ordersActions.getOrders({ orders }));
	} catch (error) {
		console.log(error);
	}
};
