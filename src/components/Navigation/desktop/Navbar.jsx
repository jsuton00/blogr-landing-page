import React from 'react';
import { Link } from 'react-router-dom';
import { NavMenu } from '../mobile/NavMenu';
import NavLinksMenu from './NavLinksMenu';
import { NavBurgerButton } from '../../Buttons/NavToggleButton';
import '../../../styles/components/navigation/navigation.css';

const Navbar = (props) => {
	const { width, open, openMenu, closeMenu } = props;

	const renderNavMenu = () => {
		if (width < 925 && open === true) {
			return <NavMenu />;
		} else if (width >= 925 && open === true) {
			return <NavLinksMenu />;
		}
	};

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
				<NavLinksMenu />
			)}
			{renderNavMenu()}
		</div>
	);
};

export default Navbar;
