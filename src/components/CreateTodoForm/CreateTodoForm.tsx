import React, { useState, useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';

import CustomTextField from '../../components/CustomTextField/CustomTextField';
import { CustomTextBox } from '../../components/CustomTextBox/CustomTextBox';
import { CustomResetFormButton } from '../../components/CustomResetFormButton/CustomResetFormButton';
import CustomAuthButton from '../../components/CustomAuthButton/CustomAuthButton';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useStore } from '../../stores/store';
import { styles } from './styles';
import { observer } from 'mobx-react';
import { uuid } from 'uuidv4'; 

const CreateTodoForm = (props: any) => {
    const classes = styles();
    const { uiStore } = useStore();
    const { chips, addChip, clearChips, deleteChip, selectedChips } = uiStore;
    const selectRef = useRef();
    const {
        values: { title, description },
        handleSubmit,
        handleChange,
        handleReset,
        isValid,
        setFieldTouched,
        loading,
        error, 
    } = props;

    const [selectedChip, setSelectedChip] = useState('');

    const change = (event:any, name:any) => {
        handleChange(event);
        setFieldTouched(name, true, false);
    };

    const handleSelectChipClick = (event:any) => {
        if(selectedChip.length > 0 && selectedChips?.findIndex(item => item?.name === selectedChip) === -1) {
            addChip({name:selectedChip});
        }
    }

    const handleChipChange = (event:any) => {
        const {value} = event.target;
        setSelectedChip(value);
    }

    const handleDelete = (chip:any) => () => {
        deleteChip(chip);
    }

    const onReset = () => {
        clearChips();
        handleReset();
    }

    return (
        <form className={classes.form} noValidate onSubmit={handleSubmit} onReset={onReset}>
		    <Typography 
                component='h1' 
                variant='h5'
                align='center'
                className={classes.header}>
				Create Todo
			</Typography>
			<CustomTextField 
                name='title'
                label='Todo Title'
                value={title}
				autoFocus
                onChange={change}
                {...props}/>
           <CustomTextBox
                name='description'
                label='Todo Description'
                value={description}
				rows='4'
                rowsMax='8'
                onChange={change}
                {...props}/>
            <Grid container direction='row' spacing={2}>
                <Grid item xs={4}>
                    <Select
                        ref={selectRef}
                        name='Requirements'
                        value={selectedChip}
                        fullWidth
                        variant='outlined'
                        defaultValue={'Hey'}
                        onChange={handleChipChange}>
                            {chips?.map((item:any) => {
                                return (<MenuItem value={item.name} key={uuid()}>{item.name}</MenuItem>)
                            })}
                    </Select>
                </Grid>
                <Grid item xs={8}>
                    <Button size='large' onClick={handleSelectChipClick}>
                        ADD REQUIREMENT FOR TASK
                    </Button>
                </Grid>
            </Grid>
            <Grid container className={classes.chipContainer}>
                {selectedChips?.map((item) => (
                    <Chip label={item?.name} key={uuid()} className={classes.chip}
                        onDelete={handleDelete(item)} color='primary' variant='outlined' />
                ))}
            </Grid>
            <Grid container direction='row' spacing={2} className={classes.btnContainer}>
                <Grid item xs={6} >
			        <CustomAuthButton
				        label='Submit'
                        type='submit'
                        loading={loading}
                        isValid={isValid}/>
                </Grid>
                <Grid item xs={6}>
                    <CustomResetFormButton label='Reset'/>
                </Grid>
            </Grid>
            <ErrorMessage error={error} />
		</form>
    )
}

export default observer(CreateTodoForm);