import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useStore } from './stores/store';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Main from './pages/Main/Main';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';
import './App.css';
import { configure } from 'mobx';

configure({
    enforceActions: 'never',
})

function App() {
  const history = useHistory();
  const { userStore } = useStore();
  const { initAuth } = userStore;
  useEffect(() => {
      initAuth(history);
  }, [history]);
    
  return (
          <div className="App">
              <Switch>
                  <PublicRoute exact path='/login' component={Login}></PublicRoute>
                  <PublicRoute exact path='/register' component={Register}></PublicRoute>
                  <PrivateRoute path='/' component={Main}></PrivateRoute>
              </Switch>
          </div>
    );
}

export default observer(App);
