// import { useSelector } from 'react-redux';

// Components
// import OrderItem from '../../components/orders/order-item/order-item.component';

import classes from './orders.styles.module.css';

const Orders = () => {
	// // State (Redux)
	// const order = useSelector(state => state.orders.orders);
	// // console.log(products);
	// const { date, totalPrice, id } = order;

	return (
		<div className={classes['orders-list']}>
			{/* <OrderItem date={date} totalPrice={totalPrice} orderId={id} /> */}
		</div>
	);
};

export default Orders;
