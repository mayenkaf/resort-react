import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';


import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/rooms" component={Rooms}></Route>
      <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
      <Route component={Error}></Route>
    </Switch>
      
    </>

  );
}

export default App;
/*
    <Home></Home>
    <Rooms></Rooms>
    <SingleRoom></SingleRoom>
    <Error></Error>
*/