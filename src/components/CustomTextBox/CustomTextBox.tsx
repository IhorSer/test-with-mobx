import TextField from "@material-ui/core/TextField";

export const CustomTextBox = ({ name, label, value, errors, onChange, handleBlur, touched, rows}: any) => ( 
    <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id={name}
        label={label}
        name={name}
        value={value}
		helperText={touched[name]&&errors[name]}
        error={touched[name]&&Boolean(errors[name])}
		onChange={onChange}
        onBlur={handleBlur}
        multiline
        rows={rows}
    />
)