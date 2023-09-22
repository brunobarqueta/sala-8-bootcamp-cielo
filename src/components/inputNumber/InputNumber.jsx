import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { forwardRef } from "react";
import { NumericFormat } from "react-number-format";
import PropTypes from "prop-types";

const NumericFormatAdapter = forwardRef(function NumericFormatAdapter(props, ref) {
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

const InputNumber = ({label, handleFunction, price}) => {
	return (
		<>
			<FormControl sx={{ display: "block", marginTop: "12px" }}>
				<InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
				<Input
					value={price}
					onChange={(event) => handleFunction(event)}
					slotProps={{
						input: {
							component: NumericFormatAdapter,
						},
					}}
					startAdornment={<InputAdornment position="start">R$</InputAdornment>}
				/>
			</FormControl>
		</>
	);
};

export default InputNumber;
