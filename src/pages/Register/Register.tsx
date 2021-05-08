import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik'
import { useStore } from '../../stores/store';
import { registerValidator } from '../../helpers/validators';
import { observer } from 'mobx-react';

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { RegisterData } from '../../models/formData';

import './Register.css';

const Register = () => {
	const history = useHistory();
    const {userStore} = useStore();
	const {isLoading, error} = userStore;

	const values: RegisterData = {
		email: '',
		password: '',
		confirmPassword: ''
	}

	const handleRegisterButtonClick = (data: RegisterData) => {
        if (data.email && data.password) {
            userStore.registerUser(data.email, data.password, history);
        }
    }

    return (
		<Container maxWidth='xs' component='main'>
			<Grid
				container
				alignItems='center'
				direction='row'
				justify='center'
				style={{ minHeight: '100vh' }}>
				<Formik
                	initialValues={values}
                	validationSchema={registerValidator}
                	onSubmit={handleRegisterButtonClick}>
					{props => <RegisterForm {...props} 
						loading={isLoading} 
						registerError={error} />}
				</Formik>
			</Grid>
		</Container>
    );
}

export default observer(Register);