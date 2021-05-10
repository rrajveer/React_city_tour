import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import CartList from './Components/Cart/CartList';
import { Switch, Router} from 'react-router-dom';
import SideBar from './Components/Sidebar'


function App() {
  return (
   <React.Fragment>
          <NavBar />
          <CartList />
          <SideBar/>

   </React.Fragment>
  );
}

export default App;
