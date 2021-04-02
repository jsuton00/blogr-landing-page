import React from 'react';
import NavLinksMenu from '../desktop/NavLinksMenu';
import '../../../styles/components/navigation/navMenu.css';

export const NavMenu = (props) => {
	return (
		<div className="nav-mobile-container">
			<div className="nav-menu mobile-menu">
				<NavLinksMenu {...props} />
			</div>
		</div>
	);
};
