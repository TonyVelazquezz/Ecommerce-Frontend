import axios from 'axios';

import { cartActions } from '../slices/cart.slice';

export const fetchCart = token => async dispatch => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_API_URL}/orders/get-cart`, {
			headers: { authorization: `Bearer ${token}` },
		});

		const { products } = response.data.data.cart;
		// console.log(products);

		dispatch(cartActions.getCart({ products }));
	} catch (error) {
		console.log(error);
	}
};
