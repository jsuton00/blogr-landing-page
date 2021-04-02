import React from 'react';
import { navHeaderLinks } from '../../../constants/navLinks';
import { LoginButtonLink, SignUpButtonLink } from '../../Buttons/ButtonLinks';
import { useNavLinks, useToggleDropdown } from '../Navigation';
import { NavLinkButton } from './NavLinks';

export const NavLinksMenu = (props) => {
	const { width, closeMenu } = props;
	const [isOpen, toggleDropdown] = useToggleDropdown();
	const [navTitleLinks] = useNavLinks(navHeaderLinks);

	return (
		<div className={`nav-links-section ${width < 925 ? 'list-group' : 'row'}`}>
			<div className="nav-links row">
				{navTitleLinks.length > 0 &&
					navTitleLinks.map((link, index) => {
						return (
							<NavLinkButton
								key={index}
								link={link}
								name={link}
								handleToggle={() => toggleDropdown(isOpen)}
								open={isOpen}
								closeMenu={() => closeMenu()}
							/>
						);
					})}
			</div>
			<div className={`nav-login ${width < 925 ? 'list-group' : 'row'}`}>
				<div className="nav-login-section">
					<LoginButtonLink />
				</div>
				<div className="nav-signup-section">
					<SignUpButtonLink name="Sign Up" />
				</div>
			</div>
		</div>
	);
};

export default NavLinksMenu;
