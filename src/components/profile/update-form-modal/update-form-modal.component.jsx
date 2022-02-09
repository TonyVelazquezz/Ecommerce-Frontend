import { useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// Components
import Modal from '../../UI/modal/modal.component';
import Button from '../../UI/button/button.component';
import Input from '../../UI/input/input.component';

import classes from './update-form-modal.style.module.css';

const UpdateFormModal = ({ onClose, userId, currentUsername, currentEmail }) => {
	const token = useSelector(state => state.user.token);

	const usernameInputRef = useRef();
	const emailInputRef = useRef();

	// Handlers
	const onSubmitHandler = async e => {
		e.preventDefault();

		const updateName = usernameInputRef.current.value;
		const updateEmail = emailInputRef.current.value;

		const data = {
			name: updateName,
			email: updateEmail,
		};

		const headerAuthorization = {
			headers: { authorization: `Bearer ${token}` },
		};

		const response = await axios.patch(
			`${process.env.REACT_APP_API_URL}/users/${userId}`,
			data,
			headerAuthorization
		);

		console.log(response);
	};

	return (
		<Modal onClick={onClose}>
			<form className={classes.form} onSubmit={onSubmitHandler}>
				<h3>You can update your profile here</h3>
				<Input
					label="Username"
					input={{
						type: 'text',
						ref: usernameInputRef,
						placeholder: currentUsername,
					}}
				/>
				<Input
					label="Email"
					input={{
						type: 'email',
						ref: emailInputRef,
						placeholder: currentEmail,
					}}
				/>

				<div className={classes.actions}>
					<Button type="submit" label="Update" />
					<Button type="button" onClick={onClose} label="Cancel" />
				</div>
			</form>
		</Modal>
	);
};

export default UpdateFormModal;
