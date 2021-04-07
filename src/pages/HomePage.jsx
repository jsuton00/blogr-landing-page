import React from 'react';
import { images } from '../assets';
import SectionContent from '../components/PageSections/SectionContent';
import { homePageSnippets } from '../constants/pageTextSnippets';
import '../styles/pages/homePage.css';

const HomePage = () => {
	return (
		<div id="home-page" className="home-page container-fluid">
			<div className="home-page-main-content container-fluid">
				<div className="home-page-main-heading row">
					<h2 className="page-title">Designed for the future</h2>
				</div>
				<SectionContent
					sectionName={'desktopEditor'}
					layoutOrder={'reversed-order'}
					sectionImage={images && images.desktopEditor}
					sectionText={homePageSnippets && homePageSnippets.desktopEditor}
				/>
				<SectionContent
					sectionName="mobile"
					layoutOrder={'default-order'}
					sectionImage={images && images.phones}
					sectionText={homePageSnippets && homePageSnippets.mobile}
				/>
				<SectionContent
					sectionName="laptop"
					layoutOrder={'default-order'}
					sectionImage={images && images.laptop}
					sectionText={homePageSnippets && homePageSnippets.laptop}
				/>
			</div>
		</div>
	);
};

export default HomePage;
