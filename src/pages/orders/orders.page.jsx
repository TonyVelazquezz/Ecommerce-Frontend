import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { fetchUserOrders } from '../../store/actions/orders.action';

//Components
import OrderItem from '../../components/orders/order-item/order-item.component';

import classes from './orders.styles.module.css';

const Orders = () => {
	const dispatch = useDispatch();

	// State redux
	const userOrders = useSelector(state => state.orders.userOrders);
	// console.log(userOrders);
	const token = useSelector(state => state.user.token);

	// Effects
	useEffect(() => {
		dispatch(fetchUserOrders(token));
	}, [dispatch, token]);

	return (
		<div className={classes['orders-list']}>
			<h2>Your orders</h2>
			{userOrders.map(orderItem => (
				<OrderItem
					key={orderItem.id}
					date={orderItem.date}
					totalPrice={orderItem.totalPrice}
					orderId={orderItem.id}
				/>
			))}
		</div>
	);
};

export default Orders;
