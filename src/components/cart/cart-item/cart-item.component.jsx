import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// Components
import Button from '../../UI/button/button.component';

import classes from './cart-item.styles.module.css';

const CartItem = ({ product }) => {
	const { name, quantity, price, productId } = product;

	const token = useSelector(state => state.user.token);

	// State
	const [updateQty, setUpdateQty] = useState(quantity);

	// Refs
	const updateQtyInputRef = useRef();

	// Handlers
	const onUpdateInputChangeHandler = () => {
		const updateQty = +updateQtyInputRef.current.value;

		if (updateQty < 0) return;

		setUpdateQty(updateQty);
	};

	const onUpdateProductHandler = async () => {
		const data = {
			productId,
			newQuantity: updateQty,
		};

		const headerAuthorization = {
			headers: { authorization: `Bearer ${token}` },
		};

		await axios.patch(
			`${process.env.REACT_APP_API_URL}/orders/update-product-cart`,
			data,
			headerAuthorization
		);
	};

	return (
		<div className={classes['cart-item']}>
			<div className={classes['cart-item__product']}>
				<h3>{name}</h3>
				<p className={classes['cart-item__quantity']}>
					Quantity: <span className={classes['cart-item__quantityPrice']}>{quantity}</span>{' '}
				</p>
				<p className={classes['cart-item__price']}>${price}</p>
			</div>
			<div className={classes['cart-item__actions']}>
				<input
					type="number"
					value={updateQty}
					onChange={onUpdateInputChangeHandler}
					ref={updateQtyInputRef}
					className={classes['update-qty-input']}
				/>
				<Button type="button" onClick={onUpdateProductHandler} label="Update" />
				<Button type="button" label="Remove" />
			</div>
		</div>
	);
};

export default CartItem;
