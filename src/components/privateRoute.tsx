import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react';

interface PrivateRouterProps {
    component: any;
    [x: string]: any;
}

const PrivateRoute = ({component: Component, ...rest}:PrivateRouterProps) => {
    const { userStore } = useStore();

    return (
        <Route
          {...rest}
          render={(props) => userStore.user != null
            ? <Component {...props} user={userStore.user} {...rest} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
      )
}

export default observer(PrivateRoute);