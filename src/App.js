import { Switch, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/404Page/404Page';

class App extends React.Component {
  state = {
    isLog: false
  }
  handleLogin = (isLog) => this.setState({ isLog })
  render() {
    const { isLog } = this.state;
    return (
      <div>
        <Switch>
          {
            !isLog ? 
            <Route exact path='/' render={() => <Login isLogin={this.handleLogin} /> } /> 
            : 
            <Route path="/" render={() => <Home />} />
          }
          <Route path='*' component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
