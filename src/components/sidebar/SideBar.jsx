import * as React from "react";
import { FieldsStyles, SideBarStyles } from "./style";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
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

const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard", "Omar Alexander", "Carlos Abbott", "Miriam Wagner", "Bradley Wilkerson", "Virginia Andrews", "Kelly Snyder"];

const SideBar = () => {
	const [personName, setPersonName] = React.useState([]);
	const [startPrice, setStartPrice] = React.useState(0);
	const [endPrice, setEndPrice] = React.useState(0);

	const handleSelectChange = (event) => {
		const {
			target: { value },
		} = event;
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};
	const handleStartPriceChange= (event) => {
		setStartPrice(event.target.value);
	};
	const handleEndPriceChange = (event) => {
		setEndPrice(event.target.value);
	};

	return (
		<SideBarStyles>
            {startPrice} 
            {endPrice}
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
				<Rating name="no-value" value={null} />
			</FieldsStyles>

			<FieldsStyles>
				<Typography component="legend">Preço</Typography>
				<FormControl sx={{ display: "block", marginTop: "12px" }}>
					<InputLabel htmlFor="outlined-adornment-amount">De</InputLabel>
					<OutlinedInput onChange={handleStartPriceChange} inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} id="outlined-adornment-amount" startAdornment={<InputAdornment position="start">R$</InputAdornment>} label="De" />
				</FormControl>
				<FormControl sx={{ display: "block", marginTop: "12px"  }}>
					<InputLabel htmlFor="outlined-adornment-amount">Até</InputLabel>
					<OutlinedInput onChange={handleEndPriceChange} inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} id="outlined-adornment-amount" startAdornment={<InputAdornment position="start">R$</InputAdornment>} label="Até" />
				</FormControl>
			</FieldsStyles>
		</SideBarStyles>
	);
};

export default SideBar;
