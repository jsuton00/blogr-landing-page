import React from 'react';
import Header from './components/Header';
import { useToggleNavMenu } from './components/Navigation/Navigation';
import PageRoutes from './containers/PageRoutes';
import ViewportProvider from './containers/Viewport';

const App = () => {
	const [isOpen, openMenu, closeMenu] = useToggleNavMenu();
	return (
		<div id="app" className="app container-fluid">
			<ViewportProvider>
				<Header open={isOpen} openMenu={openMenu} closeMenu={closeMenu} />
			</ViewportProvider>
			<main id="main" className="app-main container-fluid">
				<PageRoutes />
			</main>
		</div>
	);
};

export default App;
