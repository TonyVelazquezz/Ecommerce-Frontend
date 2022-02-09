import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// Components
import Modal from '../../UI/modal/modal.component';

import classes from './order-details-modal.styles.module.css';

const OrderDetailsModal = ({ onClose, id }) => {
	// const token = useSelector(state => state.user.token);

	// State
	const [orderProducts, setOrderProducts] = useState([]);

	const fetchOrderDetails = async () => {
		try {
			// const response = await axios.get(`${process.env.REACT_APP_API_URL}/orders/${id}`, {
			// 	headers: { authorization: `Bearer ${token}` },
			// });
			// const { orders } = response.data.data;
			setOrderProducts([...orderProducts, orders]);
		} catch (error) {
			console.log(error);
		}
	};

	// Effects
	useEffect(() => {
		fetchOrderDetails();
	}, []);

	return (
		<Modal onClick={onClose}>
			<div className={classes['details__header']}>
				<h2>Your order was for a total: $12.99</h2>
			</div>

			<div className={classes['details__items']}>
				<div className={classes.item}>
					<p className={classes['item__name']}>Product name</p>
					<p className={classes['item__qty']}>Requested qty</p>
					<p className={classes['item__price']}>Unitary Price</p>
				</div>
			</div>
		</Modal>
	);
};

export default OrderDetailsModal;
