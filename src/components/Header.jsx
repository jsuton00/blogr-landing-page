import React from 'react';
import Navbar from './Navigation/desktop/Navbar';
import HeroSection from './HeroSection';
import '../styles/layouts/header.css';
import { useViewportContext } from '../hooks/useViewport';

const Header = (props) => {
	const { open, openMenu, closeMenu } = props;
	const [width] = useViewportContext();

	return (
		<div id="header" className="header header-bg-intro container-fluid">
			<div className="header-content container">
				<Navbar
					open={open}
					openMenu={openMenu}
					closeMenu={closeMenu}
					width={width}
				/>
				<HeroSection />
			</div>
		</div>
	);
};

export default Header;
