import { useState } from 'react';
import { useSelector } from 'react-redux';

// Components
import Button from '../../components/UI/button/button.component';
import UpdateFormModal from '../../components/profile/update-form-modal/update-form-modal.component';
import ProductsList from '../../components/products/products-list/products-list.component';

import classes from './profile.styles.module.css';

const Profile = () => {
	// State
	const [showModal, setShowModal] = useState(false);

	// State (Redux)
	const user = useSelector(state => state.user.currentUser);
	// console.log(user);
	const { id, name, email } = user;

	// Handlers
	const onOpenModal = () => {
		setShowModal(true);
	};

	const onCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div>
			<div className={classes['user-data']}>
				<h3 className={classes['user-data__username']}>{name}</h3>

				<div className={classes['button-container']}>
					<Button type="button" label="Update profile" onClick={onOpenModal} />
				</div>
			</div>

			<div>
				<h3>Your products</h3>

				<ProductsList products={[]} />
			</div>

			{showModal && (
				<UpdateFormModal
					userId={id}
					currentUsername={name}
					currentEmail={email}
					onClose={onCloseModal}
				/>
			)}
		</div>
	);
};

export default Profile;
