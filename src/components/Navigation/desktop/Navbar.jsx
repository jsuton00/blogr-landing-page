import React from 'react';
import { Link } from 'react-router-dom';
import NavLinksMenu from './NavLinksMenu';
import { NavBurgerButton } from '../../Buttons/NavToggleButton';
import '../../../styles/components/navigation/navigation.css';
import { renderNavMenu } from '../../../utils/renderFunctions';

const Navbar = (props) => {
	const { width, open, openMenu, closeMenu } = props;

	return (
		<div id="navigation" className="nav navbar nav-header">
			<div className="nav-brand-section">
				<h1 className="app-title">
					<Link to="/">Blogr</Link>
				</h1>
			</div>
			{width < 925 ? (
				<NavBurgerButton
					openMenu={openMenu}
					closeMenu={closeMenu}
					buttonValue={open}
				/>
			) : (
				<NavLinksMenu width={width} />
			)}
			{renderNavMenu(width, open, closeMenu)}
		</div>
	);
};

export default Navbar;
