import React from 'react';
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import { observer } from 'mobx-react';

interface CustomAuthButtonProps {
    label: string;
    isValid: boolean;
    loading: boolean;
    type: 'button' | 'submit' | 'reset'
}

const CustomAuthButton = ({label, isValid, loading, type}: CustomAuthButtonProps) => (
    <Button
		type={type}
		fullWidth
		variant='contained'
		color='primary'
        disabled={!isValid}>
        {label}
        {loading && <CircularProgress size={30}/>}
    </Button>
)

export default observer(CustomAuthButton);