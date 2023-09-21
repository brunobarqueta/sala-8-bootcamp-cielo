import React from 'react';

import './App.css';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./pages/Products/Products";
import Typography from "./styles/typography";

const App = () => {
	return (
		<div className="app-container main-font">
			<Header/>
			<Products/>
			<Footer/>
		</div>
	);
};

export default App;
