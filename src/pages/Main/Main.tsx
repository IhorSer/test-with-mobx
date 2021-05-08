import React, { Fragment, useEffect } from 'react';
import PrivateRoute from '../../components/privateRoute';
import { Switch } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import TodoList from '../../components/TodoList/TodoList';
import CreateTodo from '../../components/CreateTodo/CreateTodo';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react'

const Main = ({ match }: any) => {
    const { tasksStore } = useStore();

    useEffect(() => {
        tasksStore.getAll();
    }, [tasksStore]);

    const { tasks, userTasks } = tasksStore;
    return (
        <Fragment>
            <Navbar/>
            <Switch>
                <PrivateRoute path={match.url+'todo_list/user_todos'} tasks={userTasks} title={'User'}
                    component={TodoList}></PrivateRoute>
                <PrivateRoute path={match.url+'todo_list'} tasks={tasks} title={'Common'}
                    component={TodoList}></PrivateRoute>
                <PrivateRoute exact path={match.url+'create_todo'} component={CreateTodo}></PrivateRoute>
            </Switch>
        </Fragment>
    );
} 

export default observer(Main);