import React from 'react';
import Navbar from './Navigation/desktop/Navbar';
import HeroSection from './HeroSection';
import '../styles/layouts/header.css';
import { NavMenu } from './Navigation/mobile/NavMenu';
import { useViewportContext } from '../hooks/useViewport';

const Header = (props) => {
	const [width] = useViewportContext();

	return (
		<div id="header" className="header header-bg-intro container-fluid">
			<div className="header-content container">
				<Navbar {...props} width={width} />
				<HeroSection />
			</div>
		</div>
	);
};

export default Header;
