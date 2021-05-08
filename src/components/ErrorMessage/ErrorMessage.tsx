import React from 'react';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react';

interface ErrorMessageProps {
    error: string;
}

const ErrorMessage = ({error} : ErrorMessageProps) => {
   return error ? (
        <Typography variant='body2'>
            {error}
        </Typography>
    ) : null
}

export default observer(ErrorMessage);