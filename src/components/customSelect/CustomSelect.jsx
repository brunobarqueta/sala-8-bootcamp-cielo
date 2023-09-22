import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from "@mui/material";

const names = ["Tools", "Sports", "Automotive", "Toys", "Kids", "Outdoors"];

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

const CustomSelect = ({personName, setPersonName}) => {

    const handleSelectChange = (event) => {
		const value = event.target.value;
		setPersonName(
			typeof value === "string" ? value.split(",") : value
		);
	};

	return (
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
	);
};

export default CustomSelect;
