import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from "@mui/material";

const names = ["Tools", "Sports", "Automotive", "Toys", "Kids", "Outdoors"];

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 200,
		},
	},
};

const CustomSelect = ({categoryName, setCategoryName}) => {

    const handleSelectChange = (event) => {
		const value = event.target.value;
		setCategoryName(
			typeof value === "string" ? value.split(",") : value
		);
	};

	return (
		<FormControl sx={{ width: 180 }}>
			<Select
				labelId="demo-multiple-checkbox-label"
				id="demo-multiple-checkbox"
				multiple
				value={categoryName}
				onChange={handleSelectChange}
				input={<OutlinedInput label="Tag" />}
				renderValue={(selected) => selected.join(", ")}
				MenuProps={MenuProps}
			>
				{names.map((name) => (
					<MenuItem key={name} value={name}>
						<Checkbox checked={categoryName.indexOf(name) > -1} />
						<ListItemText primary={name} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default CustomSelect;
