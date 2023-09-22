import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { searchRequired } from './store/actions/search';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global';
import { lightTheme, darkTheme } from './styles/themes';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Grid from './components/Grid';
import SideBar from "./components/sidebar/SideBar";

const App = () => {
	const {load, error, list} = useSelector(state => state.products);
	const dispatch = useDispatch();
	// console.log('load: ' + load);
	// console.log('error: ' + error);
	// console.log('list: ' + list);
	// useEffect(() => {
	// 	dispatch(searchRequired('sho', 2));
	// }, [])

	const theme = 'light';
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle/>
				<div className="app-container main-font">
					<Header/>
					<div className="flex">
						<SideBar />
						<Grid />
					</div>
					<Footer/>
				</div>
		</ThemeProvider>
	);
};

export default App;
