import React from 'react';

import './App.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Login from './component/login'
import Main from './component/main/index'

function App() {
  return (
   <BrowserRouter>
   <Switch>
<Route path='/login'component={Login}></Route>

<Route path='/main' component={Main}></Route>
<Redirect from='/' to='/main'></Redirect>


   </Switch>
   </BrowserRouter>
  );
}

export default App;
