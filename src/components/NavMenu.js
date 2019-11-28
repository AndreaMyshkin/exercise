import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = props => (
  <div>
    <header className="menu">
      <nav className="menu__navigation">
        <div></div>
        <div className="menu__logo">
          <a href="/">The logo</a>
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
