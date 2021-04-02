import React, { useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useHistory } from 'react-router';

export const NavLinkButton = (props) => {
	const { link, name, handleToggle, open } = props;

	let history = useHistory();

	const menuRef = useRef();

	const handleClick = (e) => {
		if (e.target.value === menuRef.current.value) {
			handleToggle(e.target.value);
		}
		return history.push({
			pathname: `/${link}`,
		});
	};

	return (
		<div ref={menuRef} className="nav-link-item">
			<button
				ref={menuRef}
				id={`nav-link-button${link}`}
				aria-label={`Visit ${link} page`}
				className={`nav-link-button`}
				onClick={handleClick}
				value={open}
			>
				{name}{' '}
				<span className={`nav-link-icon ${open === true ? 'toggle-open' : ''}`}>
					<FaChevronDown />
				</span>
			</button>
		</div>
	);
};
