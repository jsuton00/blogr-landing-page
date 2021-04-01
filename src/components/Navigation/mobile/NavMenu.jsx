import React from 'react';
import NavLinksMenu from '../desktop/NavLinksMenu';
import '../../../styles/components/navigation/navMenu.css';

export const NavMenu = () => {
	return (
		<div className="nav-mobile-container container">
			<div className="nav-menu mobile-menu">
				<NavLinksMenu />
			</div>
		</div>
	);
};
