import React from 'react';
import Navbar from './Navigation/Navbar';
import HeroSection from './HeroSection';
import '../styles/components/header.css';

const Header = () => {
	return (
		<div id="header" className="header header-bg-intro container-fluid">
			<div className="header-content container">
				<Navbar />
				<HeroSection />
			</div>
		</div>
	);
};

export default Header;
