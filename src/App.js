import React from 'react';
import Header from './components/Header';
import PageRoutes from './containers/PageRoutes';

const App = () => {
	return (
		<div id="app" className="app container-fluid">
			<Header />
			<main id="main" className="app-main">
				<PageRoutes />
			</main>
		</div>
	);
};

export default App;
