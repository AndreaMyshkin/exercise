import React from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "../components/ToggleButton";
import logo from '../assets/images/logo.png';

const NavMenu = props => (
  <div>
    <header className="menu">
      <nav className="menu__navigation">
        <div className="toggle-button">
          <ToggleButton click={props.menuHandler}/>
        </div>
        <div className="menu__logo">
        
          <a href="/"><img src={logo} /> canasta<span className="canasta_name">rosa </span></a>
        </div>
        <div className="space"></div>
        <div className="menu_navigation-items">
        <ul>
          {props.menuItems && props.menuItems.length > 0
            ? props.menuItems.map(item => (
            
                  <li>
                    <NavLink className="item"to={item.slug}>{item.name}</NavLink>
                  </li>
             
              ))
            : null}
               </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default NavMenu;
