import React from 'react';
import { navHeaderLinks } from '../../constants/navLinks';
import { useNavLinks, useToggleDropdown } from './Navigation';
import { NavLinkButton } from './NavLinks';
import { LoginButtonLink, SignUpButtonLink } from '../Buttons/ButtonLinks';
import { Link } from 'react-router-dom';
import '../../styles/components/navigation.css';

const Navbar = () => {
	const [navTitleLinks] = useNavLinks(navHeaderLinks);
	const [isOpen, toggleDropdown] = useToggleDropdown(false);

	return (
		<div id="navigation" className="nav navbar nav-header">
			<div className="nav-header-section nav-header-left row">
				<div className="nav-brand-section">
					<h1 className="app-title">
						<Link to="/">Blogr</Link>
					</h1>
				</div>
				<div className="nav-links-section row">
					{navTitleLinks.length > 0 &&
						navTitleLinks.map((link, index) => {
							return (
								<NavLinkButton
									key={index}
									link={link}
									name={link}
									handleToggle={() => toggleDropdown(isOpen)}
									open={isOpen}
								/>
							);
						})}
				</div>
			</div>
			<div className="nav-header-section nav-header-right row">
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

export default Navbar;
