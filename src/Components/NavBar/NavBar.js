import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
           <NavbarWrapper className="navbar navbar-expand-sm navbar-dark px-sm-1">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav flex-row">
                   <li className="nav-item">Logo</li>
                   <li className="nav-item ">Home</li>
                   <li className="nav-item">about-us</li>
                   <li className="nav-item ">tours</li>
               </ul>
            </div>

       
            
           </NavbarWrapper>
        )
    }
}

const NavbarWrapper = styled.nav`
    background: var(--mainDark);
    color:var(--mainWhite);
    height:5rem !important;
    .navbar-nav{
    flex: 1;
   margin: auto !important;
   display: flex;
  justify-content: space-around;
}
    

`;




{/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className=" navbar-nav  text-capitalize">

                   <li className="nav-item">
                       
                                          home
                
                   </li>
                  
                   <li  className="nav-item" >
                       about-us
                   </li>
                   <li  className="nav-item" >
                       Tours
                   </li>
               </ul> */}