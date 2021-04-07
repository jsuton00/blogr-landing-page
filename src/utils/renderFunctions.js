import React from 'react';
import { NavMenu } from '../components/Navigation/mobile/NavMenu';
import TextSnippets from '../components/PageSections/TextSnippets';

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

export const renderSnippets = (sectionText) => {
	if (sectionText) {
		if (sectionText.length > 0) {
			return sectionText.map((text, index) => {
				return (
					<TextSnippets
						key={index}
						title={text.title}
						text={text.description}
					/>
				);
			});
		}
	}
};
