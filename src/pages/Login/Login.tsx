import React from 'react';
import { useHistory } from 'react-router-dom';
import { History, LocationState } from 'history'
import { Formik } from 'formik';
import { useStore } from '../../stores/store';
import { loginValidator } from '../../helpers/validators';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import { observer } from 'mobx-react';
import { LoginData } from '../../models/formData'

import './Login.css';

const Login = () => {
	const history: History<LocationState> = useHistory();
    const { userStore } = useStore();
	const { error, isLoading } = userStore;

	const values: LoginData = {
		email: '',
		password: ''
	}

	const handleLoginButtonClick = (data: LoginData) => {
        if (data.email && data.password) {
            userStore.logInUser(data.email, data.password, history);
        }
    }

    return (
		<Container maxWidth='xs'>
			<Grid container
				alignItems='center'
				direction='row'
				justify='center'
				style={{minHeight: '100vh'}}>
			<Formik
                initialValues={values}
                validationSchema={loginValidator}
                onSubmit={handleLoginButtonClick}>
					{props => <LoginForm {...props} loading={isLoading} loginError={error}/>}
			</Formik>
			</Grid>
		</Container>
    );
} 

export default observer(Login);