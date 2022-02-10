import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// Components
import Modal from '../../UI/modal/modal.component';

import classes from './order-details-modal.styles.module.css';

const OrderDetailsModal = ({ onClose, id }) => {
	const token = useSelector(state => state.user.token);

	// States
	const [orderProducts, setOrderProducts] = useState([]);
	const [orderDetail, setOrderDetail] = useState({});

	// Effects
	useEffect(() => {
		const fetchOrderDetails = async () => {
			try {
				const response = await axios.get(`${process.env.REACT_APP_API_URL}/orders/${id}`, {
					headers: { authorization: `Bearer ${token}` },
				});

				const { order } = response.data.data;

				// console.log(order);

				setOrderProducts(order.productsInOrders);
				setOrderDetail(order);
			} catch (error) {
				console.log(error);
			}
		};

		fetchOrderDetails();
	}, [id, token]);

	return (
		<Modal onClick={onClose}>
			<div className={classes['details__header']}>
				<h2>Your order was for a total: {orderDetail.totalPrice}</h2>
			</div>

			{orderProducts.map(productItem => (
				<div key={productItem.id} className={classes['details__items']}>
					<div className={classes.item}>
						<p className={classes['item__name']}>{productItem.product.name}</p>
						<p className={classes['item__qty']}>{productItem.quantity}</p>
						<p className={classes['item__price']}>{productItem.price}</p>
					</div>
				</div>
			))}
		</Modal>
	);
};

export default OrderDetailsModal;
