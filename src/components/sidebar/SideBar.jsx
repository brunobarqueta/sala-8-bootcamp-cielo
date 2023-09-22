import * as React from "react";
import PropTypes from "prop-types";
import { FieldsStyles, SideBarStyles } from "./style";
import { NumericFormat } from "react-number-format";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { InputAdornment, Rating, TextField, Typography } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};
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

const names = ["Tools", "Sports", "Automotive", "Toys", "Kids", "Outdoors"];

const SideBar = () => {
	const [personName, setPersonName] = React.useState([]);
	const [startPrice, setStartPrice] = React.useState("");
	const [endPrice, setEndPrice] = React.useState("");
	const [ratingValue, setRatingValue] = React.useState(0);
	const [filteredData, setFilteredData] = React.useState(data);

	const handleSelectChange = (event) => {
		const value = event.target.value;
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

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

	React.useEffect(() => {
		handleFilterChange();
	}, [personName, ratingValue, startPrice, endPrice]);

	const NumericFormatAdapter = React.forwardRef(function NumericFormatAdapter(props, ref) {
		const { onChange, ...other } = props;

		return (
			<NumericFormat
				{...other}
				getInputRef={ref}
				onValueChange={(values) => {
					onChange({
						target: {
							name: props.name,
							value: values.value,
						},
					});
				}}
				thousandSeparator
				valueIsNumericString
				prefix="$"
			/>
		);
	});

	NumericFormatAdapter.propTypes = {
		name: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
	};

	return (
		<SideBarStyles>
			<FieldsStyles>
				<Typography component="legend">Categoria</Typography>
				<FormControl sx={{ m: 1, width: 300 }}>
					<InputLabel id="demo-multiple-checkbox-label"></InputLabel>
					<Select
						labelId="demo-multiple-checkbox-label"
						id="demo-multiple-checkbox"
						multiple
						value={personName}
						onChange={handleSelectChange}
						input={<OutlinedInput label="Tag" />}
						renderValue={(selected) => selected.join(", ")}
						MenuProps={MenuProps}
					>
						{names.map((name) => (
							<MenuItem key={name} value={name}>
								<Checkbox checked={personName.indexOf(name) > -1} />
								<ListItemText primary={name} />
							</MenuItem>
						))}
					</Select>
				</FormControl>
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
				<FormControl sx={{ display: "block", marginTop: "12px" }}>
					<InputLabel htmlFor="outlined-adornment-amount">De</InputLabel>
					<Input
						value={startPrice}
						onChange={(event) => handleStartPriceChange(event)}
						slotProps={{
							input: {
								component: NumericFormatAdapter,
							},
						}}
						startAdornment={<InputAdornment position="start">R$</InputAdornment>}
					/>
				</FormControl>
				<FormControl sx={{ display: "block", marginTop: "12px" }}>
					<InputLabel htmlFor="outlined-adornment-amount">Até</InputLabel>
					<Input
						value={endPrice}
						onChange={(event) => handleEndPriceChange(event)}
						slotProps={{
							input: {
								component: NumericFormatAdapter,
							},
						}}
						startAdornment={<InputAdornment position="start">R$</InputAdornment>}
					/>
				</FormControl>
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
