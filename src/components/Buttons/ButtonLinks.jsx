import React from 'react';
import { useHistory } from 'react-router';
import '../../styles/components/buttons/buttonLinks.css';

export const SignUpButtonLink = (props) => {
	const { name } = props;
	return (
		<button
			id="sign-up-btn-link"
			name="sign-up-btn-link"
			type="button"
			className="btn-link sign-up-btn-link-default"
			aria-label="Sign up and create an account on Blogr"
		>
			{name}
		</button>
	);
};

export const LoginButtonLink = () => {
	return (
		<button
			id="login-btn-link"
			name="login-btn-link"
			type="button"
			className="btn-link login-btn-link-default"
			aria-label="Log in to your Blogr account"
		>
			Login
		</button>
	);
};

export const LearnMoreButtonLink = () => {
	let history = useHistory();

	const handleClick = () => {
		return history.push('/product');
	};
	return (
		<button
			id="learn-more"
			name="learn-more"
			type="button"
			onClick={handleClick}
			className="btn-link learn-more-btn-link-default"
		>
			Learn More
		</button>
	);
};
