import React from 'react';
import './css/props.css';
import './css/App.css';
import background from './assets/background.jpg';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Screen
import Header from './screens/Header';
import Sidebar from './screens/Sidebar';
import HomePage from './screens/Home';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <HomePage />
      
    </div>
  );
}


export default App;
