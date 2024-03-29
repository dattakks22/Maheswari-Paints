import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from './components/Home/home';
import About from "./components/About/about";
import Project from "./components/Projects/project";
import Contect from './components/Contect/contect'

const App = () => (
  
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/project" component={Project} />
      <Route path='/contectUs' component={Contect}/>
      <Redirect to="/not-found" />
    </Switch>

)

export default App;

