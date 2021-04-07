import React from 'react';
import '../../styles/components/textSnippets.css';

const TextSnippets = (props) => {
	const { title, text } = props;
	return (
		<div className="text-snippets-row row">
			<div className="text-snippets-container">
				<h4 className="text-snippets-title row">{title}</h4>
				<p className="text-snippets-text">{text}</p>
			</div>
		</div>
	);
};

export default TextSnippets;
