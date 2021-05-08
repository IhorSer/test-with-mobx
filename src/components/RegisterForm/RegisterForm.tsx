import React from "react";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomTextField from '../CustomTextField/CustomTextField'
import CustomAuthButton from '../CustomAuthButton/CustomAuthButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { observer } from 'mobx-react';

const RegisterForm = (props: any) => {
    const {
        values: { email, password, confirmPassword },
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
        loading,
        registerError
      } = props;
    
    const change = (event: any, name: any) => {
        handleChange(event);
        setFieldTouched(name, true, false);
    };
    return (
        <form className='form' noValidate onSubmit={handleSubmit}>
		    <Typography 
                component='h1' 
                variant='h5'
                align='center'>
				Register
			</Typography>
            <CustomTextField 
                name='email'
                label='Email Address'
                value={email}
                autoComplete='email'
				autoFocus
                onChange={change}
                {...props}/>
            <CustomTextField 
                name='password'
                label='Password'
                value={password}
                type='password'
				autoComplete='current-password'
                onChange={change}
                {...props}/>
            <CustomTextField 
                name='confirmPassword'
                label='Confirm Password'
                value={confirmPassword}
                type='password'
                onChange={change}
                {...props}/>
			<CustomAuthButton
                label='Sign Up'
                type='submit'
				loading={loading}
                isValid={isValid}/>
			<Grid container>
				<Grid item>
					<Link href='/login' variant='body2'>
						{'Already have account? Sign In'}
					</Link>
				</Grid>
			</Grid>
            <ErrorMessage error={registerError}/>
		</form>
    )
}

export default observer(RegisterForm);