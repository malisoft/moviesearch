import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {Detail} from './pages/Detail'
import {Home} from './pages/Home'

import { NotFound } from './pages/NotFound'

import {Switch,Route} from "react-router-dom"

class App extends Component {
  render() {
    //const url=new URL(document.location);
    //const Page=url.searchParams.has('id')?<Detail id={url.searchParams.get('id')}/>:<Home/>

    //Deploy the page choiced by code
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/detail/:movieID' component={Detail}/>
          <Route component={NotFound}/>
        </Switch>
        {/* {Page} */}
      </div>
    )
  }


}

export default App;
