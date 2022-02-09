// Reducers
import user from './slices/user.slice';
import products from './slices/products.slice';
import cart from './slices/cart.slice';

const rootReducer = {
	user,
	products,
	cart,
};

export default rootReducer;
