import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import CompanyPage from '../pages/CompanyPage';
import HomePage from '../pages/HomePage';
import ProductFeaturesPage from '../pages/ProductFeaturesPage';
import ProductIntegrationsPage from '../pages/ProductIntegrationsPage';
import ProductPricingPage from '../pages/ProductPricingPage';
import ProductsPage from '../pages/ProductsPage';

const PageRoutes = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/products" component={ProductsPage} />
			<Route exact path="/products/pricing" component={ProductPricingPage} />
			<Route exact path="/products/features" component={ProductFeaturesPage} />
			<Route
				exact
				path="/products/integrations"
				component={ProductIntegrationsPage}
			/>
			<Route exact path="/company" component={CompanyPage} />
			<Route exact path="/company/about" component={AboutPage} />
		</Switch>
	);
};

export default PageRoutes;
