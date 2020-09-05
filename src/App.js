import React from 'react';
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import Error from "./pages/Error";

import {Route, Switch} from "react-router-dom"

import Navbar from "./components/Navbar"

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms/" component={Rooms}/>
        <Route exact path="/rooms/:slug/" component={SingleRooms}/>
        <Route component={Error}/>
        </Switch>
      
    </React.Fragment>
  );
}
/**
 * // we used the path becoz we need to setup dif pages and thats where react route dom comes in 
 * and it make al the pages 
 * on single rooms since they also have additional pages for each room we used a slug to denote that
You can use the last <Route> in a <Switch> as a kind of
// "fallback" route, to catch 404 errors.
//
// There are a few useful things to note about this example:
//
// - A <Switch> renders the first child <Route> that matches
// - A <Redirect> may be used to redirect old URLs to new ones
// - A <Route path="*> always matches
 */
export default App;
