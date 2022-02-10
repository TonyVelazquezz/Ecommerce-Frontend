// Reducers
import user from './slices/user.slice';
import products from './slices/products.slice';
import cart from './slices/cart.slice';
import orders from './slices/orders.slice';

const rootReducer = {
	user,
	products,
	cart,
	orders,
};

export default rootReducer;
