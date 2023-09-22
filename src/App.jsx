import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { searchRequired } from "./store/actions/search";

import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Grid from './components/Grid';
import SideBar from "./components/sidebar/SideBar";

const ProductContext = createContext();

export const useProductProvider = () => {
  return useContext(ProductContext);
};

const App = () => {
	const { load, error, list } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	const [textFieldValue, setTextFieldValue] = useState(0);

	const updateTextFieldValue = (newValue) => {
		const currentValue = parseFloat(textFieldValue);
		const numericValue = parseFloat(newValue);
	
		if (!isNaN(numericValue)) {
			const result = currentValue + numericValue;
			setTextFieldValue(result);
		}
	};

	useEffect(() => {
		dispatch(searchRequired("sho", 2));
	}, []);

	return (
		<ProductContext.Provider value={{ textFieldValue, updateTextFieldValue }}>
		<div className="app-container main-font">
			<Header/>
      <div className="product-content">
				<div>
					<SideBar />
				</div>
				<Grid />
      </div>
			<Footer/>
		</div>
		</ProductContext.Provider>
	);
};

export default App;
