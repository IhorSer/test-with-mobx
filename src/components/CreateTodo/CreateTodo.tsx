import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import CreateTodoForm from '../CreateTodoForm/CreateTodoForm';
import { taskCreateValidator } from '../../helpers/validators';
import { useStore } from '../../stores/store';
import { styles } from './styles';

const CreateTodo = () => {
	const history = useHistory();
    const { userStore, tasksStore, uiStore } = useStore();
    const { isLoading, error, create } = tasksStore;
    const { user } = userStore;
    const { clearChips, getChips, selectedChips } = uiStore;

    const classes = styles();

    const values = {
        title: '',
        description: ''
    };

    useEffect(() => {
        getChips();
    }, [getChips]);

    const handleCreateTodoButtonClick = (data: any) => {
        const {title, description} = data;
        clearChips();
        create({title, description, chips: selectedChips}, user, history);
    }

    return (
        <Container maxWidth='md'>
            <Grid container
                alignItems='center'
                direction='row'
                justify='center'
                style={{minHeight: '100vh'}}
                className={classes.container}>
                <Formik
                    initialValues={values}
                    validationSchema={taskCreateValidator}
                    onSubmit={handleCreateTodoButtonClick}> 
                        {props => <CreateTodoForm {...props} loading={isLoading} 
                            error={error} />}
                    </Formik>
            </Grid>
        </Container>
    )
}

export default observer(CreateTodo)