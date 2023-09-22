
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { searchRequired } from './store/actions/search'

import './App.css';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Grid from './components/Grid';

const App = () => {
	return (
		<div className="app-container main-font">
			<Header/>
			<div className='app-main'>
				<div className='sidebar-temp'></div>
				<Grid />
			</div>
			<Footer/>
		</div>
	);
};

export default App;
