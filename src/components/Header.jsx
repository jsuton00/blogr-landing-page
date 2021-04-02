import React from 'react';
import Navbar from './Navigation/desktop/Navbar';
import HeroSection from './HeroSection';
import '../styles/layouts/header.css';
import { useViewportContext } from '../hooks/useViewport';
import { useToggleNavMenu } from '../hooks/useNavMenu';

const Header = () => {
	const [width] = useViewportContext();
	const [isOpen, openMenu, closeMenu] = useToggleNavMenu();

	return (
		<div id="header" className="header header-bg-intro container-fluid">
			<div className="header-content container">
				<Navbar
					open={isOpen}
					openMenu={() => openMenu()}
					closeMenu={() => closeMenu()}
					width={width}
				/>
				<HeroSection />
			</div>
		</div>
	);
};

export default Header;
