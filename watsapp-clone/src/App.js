import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { useStateValue } from "./StateProvider";

function App() {
    const [{ user }, dispatch] = useStateValue(); //here we pull the user from the data layer

  return (   //react router link the sidebar with chat
    <div className="app">  
      {!user ? (
        <Login />
      ):(
        <div className="app_body">
        <Router>
          {/* sidebar */} <Sidebar/>
          <Switch>

            <Route path="/rooms/:roomId">               
               {/* chat */} <Chat/>
            </Route>
            <Route path="/"><Chat/>
            </Route>
          </Switch>
        </Router>
      
    </div>

      )}
      
    </div>  //if user logged in then we show this stuff otherwise login sign

  );
}

export default App;
