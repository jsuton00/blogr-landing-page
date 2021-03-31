import React from 'react';
import { SignUpButtonLink, LearnMoreButtonLink } from './Buttons/ButtonLinks';
import '../styles/layouts/heroSection.css';

const HeroSection = () => {
	return (
		<div id="jumbo-text" className="hero-section container-field">
			<div id="hero-text" className="hero-text container">
				<h1 className="jumbo-title row">A modern publishing platform</h1>
				<p className="jumbo-text row">
					Grow your audience and build your own online brand
				</p>
			</div>
			<div className="hero-cta container row">
				<div className="hero-cta-sign-up">
					<SignUpButtonLink name="Start for Free" />
				</div>
				<div className="hero-cta-learn-more">
					<LearnMoreButtonLink />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
