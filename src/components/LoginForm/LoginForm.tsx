import React from "react";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomTextField from '../CustomTextField/CustomTextField';
import CustomAuthButton from '../CustomAuthButton/CustomAuthButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { observer } from 'mobx-react';

const LoginForm = (props: any) => {
    const {
        values: { email, password },
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
        loading,
        loginError
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
				Login
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
			<CustomAuthButton
				label='Sign In'
                type='submit'
                loading={loading}
                isValid={isValid}/>
            <Grid container>
				<Grid item>
					<Link href='/register' variant='body2'>
						{'Don\'t have an account? Sign Up'}
					</Link>
				</Grid>
			</Grid>
            <ErrorMessage error={loginError} />
		</form>
    )
}

export default observer(LoginForm);