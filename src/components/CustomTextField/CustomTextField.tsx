import TextField from "@material-ui/core/TextField";
import { observer } from "mobx-react";
import { ChangeEventHandler, FocusEventHandler } from "react";

interface CustomTextFieldProps {
    name: any;
    label: string;
    value: string;
    errors: string[];
    onChange: ChangeEventHandler;
    handleBlur: FocusEventHandler;
    touched: [];
    type: string;
}

const CustomTextField = ({ name, label, value, errors, onChange, handleBlur, touched, type}: CustomTextFieldProps) => ( 
    <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id={name}
        label={label}
        name={name}
        value={value}
        type={type}
		helperText={touched[name]&&errors[name]}
        error={touched[name]&&Boolean(errors[name])}
		onChange={onChange}
        onBlur={handleBlur}
    />
)

export default observer(CustomTextField);