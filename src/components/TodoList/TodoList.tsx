import React, { useEffect, useState } from 'react';
import { TodoCard } from '../TodoCard/TodoCard';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react';
import { styles } from './styles';
import { uuid } from 'uuidv4'; 

const itemsPerPage = 4;

const TodoList = ({tasks, title}: any) => {
    const classes = styles();
    const {userStore} = useStore();
    const {user} = userStore;
    const [items, setItems] = useState(tasks?.slice(0, itemsPerPage));
    const [page, setPage] = useState(1);
    useEffect(() => {
        const start = (page-1) * itemsPerPage;
        const end = start + itemsPerPage;
        const todos = tasks?.slice(start, end);
        setItems(todos?.length > 0? todos : tasks?.slice(0, itemsPerPage));    
    }, [page, tasks]);

    const onPageClick = (event: any, page: any) => {
        setPage(page);
    }
    
    return (
        <Grid container className={classes.topContainer}>
            <Typography 
                component='h1' 
                variant='h5'
                align='center'
                className={classes.header}>
				{title} Todo List 
			</Typography>
            <Grid container className={classes.container}>
                {
                    items?.map((item: any) => {
                        return (
                            <Box p={2} className={classes.box} key={uuid()}>
                                <Grid item 
                                    component={TodoCard} todo={item} user={user} />
                            </Box>
                        )
                    })
                }
            </Grid>
            <Pagination count={Math.floor(tasks?.length/itemsPerPage)+1}
                onChange={onPageClick} />
        </Grid>
    )
}

export default observer(TodoList);