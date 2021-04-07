import React from 'react';
import { renderSnippets } from '../../utils/renderFunctions';
import '../../styles/layouts/pageSections.css';

const SectionContent = (props) => {
	const { sectionName, layoutOrder, sectionImage, sectionText } = props;

	return (
		<div
			id="section-content"
			className={`section-content ${sectionName} ${layoutOrder} row`}
		>
			<div className="section-content-column img-column">
				<img src={sectionImage} alt={sectionName} />
			</div>
			<div className="section-content-column text-column">
				{renderSnippets(sectionText)}
			</div>
		</div>
	);
};

export default SectionContent;
