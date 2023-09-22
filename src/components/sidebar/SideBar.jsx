import { useEffect, useState } from "react";
import { FieldsStyles, SideBarStyles } from "./style";
import { Rating, Typography } from "@mui/material";
import InputNumber from "../inputNumber/InputNumber";
import CustomSelect from "../customSelect/CustomSelect";

const data = [
	{
		id: "be001829-32ae-401b-bdfe-798e508410bc",
		name: "Handcrafted Wooden Keyboard",
		avatar: "https://picsum.photos/seed/FcRSmnCw/640/480",
		description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
		price: "45.00",
		rating: 1.4,
		category: "Tools",
	},
	{
		id: "d336fd0e-ed0e-4f74-a2cd-0b83f7fd2246",
		name: "Ergonomic Plastic Car",
		avatar: "https://picsum.photos/seed/Ek9phHLL/640/480",
		description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
		price: "196.00",
		rating: 1.5,
		category: "Sports",
	},
	{
		id: "bad242a7-da64-429d-8d5a-1ab54fe7db3d",
		name: "Elegant Granite Pants",
		avatar: "https://loremflickr.com/640/480?lock=5907805923966976",
		description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
		price: "84.00",
		rating: 4.6,
		category: "Automotive",
	},
	{
		id: "c7e203f9-cdf4-47a5-9ff4-a8cbc2911a51",
		name: "Incredible Steel Gloves",
		avatar: "https://picsum.photos/seed/gLXMdrGlq/640/480",
		description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
		price: "128.00",
		rating: 2.1,
		category: "Toys",
	},
	{
		id: "6fbaa7b9-a264-4a0f-a8c6-b718ffe02af1",
		name: "Sleek Frozen Mouse",
		avatar: "https://picsum.photos/seed/InAcl/640/480",
		description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
		price: "168.00",
		rating: 1.8,
		category: "Toys",
	},
	{
		id: "7541ede3-fd04-49a6-9e0c-ed50c01c3fc8",
		name: "Rustic Cotton Salad",
		avatar: "https://picsum.photos/seed/y4v6w/640/480",
		description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
		price: "173.00",
		rating: 4.7,
		category: "Kids",
	},
	{
		id: "48614018-4a34-47b3-a4c6-fbf3f00f6a39",
		name: "Licensed Granite Chips",
		avatar: "https://picsum.photos/seed/n3oeC7/640/480",
		description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
		price: "187.00",
		rating: 3.1,
		category: "Outdoors",
	},
	{
		id: "23615bc3-f98c-4be7-bfee-cad9408202e6",
		name: "Modern Frozen Table",
		avatar: "https://picsum.photos/seed/g51xGpRMqM/640/480",
		description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
		price: "110.00",
		rating: 1.1,
		category: "Toys",
	},
	{
		id: "56cc6092-9083-4fce-aa73-9d59f7b3091c",
		name: "Electronic Granite Cheese",
		avatar: "https://picsum.photos/seed/Tr9Ru/640/480",
		description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
		price: "164.00",
		rating: 3.9,
		category: "Automotive",
	},
	{
		id: "d59e114c-b40a-43d9-a4c4-2d575d3b07aa",
		name: "Intelligent Soft Ball",
		avatar: "https://loremflickr.com/640/480?lock=4566718185734144",
		description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
		price: "38.00",
		rating: 4.7,
		category: "Sports",
	},
];

const SideBar = () => {
	const [personName, setPersonName] = useState([]);
	const [startPrice, setStartPrice] = useState("");
	const [endPrice, setEndPrice] = useState("");
	const [ratingValue, setRatingValue] = useState(0);
	const [filteredData, setFilteredData] = useState(data);

	

	const handleStartPriceChange = (event) => {
		let inputValue = event.target.value;
		inputValue = inputValue.replace(/\D/g, "");
		inputValue = Number(inputValue / 100).toFixed(2);
	
		setStartPrice(inputValue);
	};

	const handleEndPriceChange = (event) => {
		let inputValue = event.target.value;
		inputValue = inputValue.replace(/\D/g, "");
		inputValue = Number(inputValue / 100).toFixed(2);

		setEndPrice(inputValue);
	};

	const handleFilterChange = () => {
		let filteredItems = data.filter((item) => {
			if (personName.length > 0 && !personName.includes(item.category)) {
				return false;
			}

			if (ratingValue > 0 && item.rating < ratingValue) {
				return false;
			}

			const itemPrice = parseFloat(item.price);
			if ((startPrice && (itemPrice <= 0 || itemPrice < parseFloat(startPrice))) ||
				(endPrice && itemPrice > parseFloat(endPrice))) {
				return false;
			  }

			return true;
		});

		setFilteredData(filteredItems);
	};

	useEffect(() => {
		handleFilterChange();
	}, [personName, ratingValue, startPrice, endPrice]);

	
	return (
		<SideBarStyles>
			<FieldsStyles>
				<Typography component="legend">Categoria</Typography>
				<CustomSelect personName={personName} setPersonName={setPersonName}/>
			</FieldsStyles>
			<FieldsStyles>
				<Typography component="legend">Avaliações</Typography>
				<Rating
					name="simple-controlled"
					value={ratingValue}
					onChange={(event, newValue) => {
						console.log(newValue);
						const formatNewValue = newValue === null ? 0 : newValue;
						setRatingValue(formatNewValue);
					}}
				/>
			</FieldsStyles>
			<FieldsStyles>
				<Typography component="legend">Preço</Typography>
				<InputNumber label={'De'} handleFunction={handleStartPriceChange} price={startPrice}/>
				<InputNumber label={'Até'} handleFunction={handleEndPriceChange} price={endPrice} />
			</FieldsStyles>

			{filteredData.map((item) => (
				<div key={item.id}>
					{item.name} - {item.price} - {item.rating} - {item.category}
				</div>
			))}
		</SideBarStyles>
	);
};

export default SideBar;
