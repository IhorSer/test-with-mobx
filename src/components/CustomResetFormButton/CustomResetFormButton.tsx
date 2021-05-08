import React from 'react';
import Button from "@material-ui/core/Button";

export const CustomResetFormButton = ({label, onClick}: any) => (
    <Button
		fullWidth
		variant='contained'
		color='secondary'
        type='reset'
        onClick={onClick}>
        {label}
    </Button>
)