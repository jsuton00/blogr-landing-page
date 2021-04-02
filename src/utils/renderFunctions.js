import React from 'react';
import { NavMenu } from '../components/Navigation/mobile/NavMenu';

export const renderNavMenu = (width, open, closeMenu) => {
	if (width < 925) {
		if (open === true) {
			return <NavMenu width={width} closeMenu={closeMenu} />;
		} else {
			return <></>;
		}
	} else {
		return <></>;
	}
};
