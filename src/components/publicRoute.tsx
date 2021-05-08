import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react';

interface PublicRouterProps {
    component: any;
    [x: string]: any;
}

const PublicRoute = ({component: Component,...rest}: PublicRouterProps) => {
    const { userStore } = useStore();

    return (
        <Route
          {...rest}
          render={(props) => userStore.user == null
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/todo_list', state: { from: props.location } }} />}
        />
      )
}

export default observer(PublicRoute);