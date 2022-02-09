import { useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// Components
import Button from '../../UI/button/button.component';

import classes from './product-card.styles.module.css';

const ProductCard = ({ product }) => {
	const token = useSelector(state => state.user.token);

	// Refs
	const requestedQtyInputRef = useRef();

	const onAddToCartHandler = async () => {
		const qty = +requestedQtyInputRef.current.value;

		if (qty < 0) return;

		const data = {
			product: {
				id: product.id,
				quantity: qty,
			},
		};

		const headerAuthorization = {
			headers: { authorization: `Bearer ${token}` },
		};

		await axios.post(
			`${process.env.REACT_APP_API_URL}/orders/add-product-to-cart`,
			data,
			headerAuthorization
		);
	};

	return (
		<div className={classes.card}>
			<div className={classes.card__header}>
				<div className={classes.titles}>
					<h3 className={classes.product__title}>{product.name}</h3>
					<p className={classes.product__seller}>Sold by: {product.user.name}</p>
				</div>

				<div className={classes['button-container']}>
					<input
						className={classes['requested-qty-input']}
						type="number"
						ref={requestedQtyInputRef}
					/>
					<Button type="button" onClick={onAddToCartHandler} label="Add to Cart" />
				</div>
			</div>

			<div className={classes.card__body}>
				<p className={classes.product__description}>{product.description}</p>
				<p className={classes.product__price}>${product.price}</p>
			</div>

			<p className={classes.product__quantity}>
				Available products:{' '}
				<span className={classes.product__quantityPrice}>{product.quantity}</span>
			</p>
		</div>
	);
};

export default ProductCard;
