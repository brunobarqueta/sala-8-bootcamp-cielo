import React, { createContext, useContext, useEffect, useState } from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/themes';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Grid from './components/Grid';
import SideBar from "./components/sidebar/SideBar";

const ProductContext = createContext();

export const useProductProvider = () => {
  return useContext(ProductContext);
};

const App = () => {
	// const theme = 'light';

	const [textFieldValue, setTextFieldValue] = useState(0);
	const [theme, setTheme] = useState('light');

	const updateTextFieldValue = (newValue) => {
		const currentValue = parseFloat(textFieldValue);
		const numericValue = parseFloat(newValue);
	
		if (!isNaN(numericValue)) {
			const result = currentValue + numericValue;
			setTextFieldValue(result);
		}
	};

	return (
		<ProductContext.Provider value={{ textFieldValue, theme, updateTextFieldValue, setTheme }}>
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
		</ProductContext.Provider>
	);
};

export default App;
