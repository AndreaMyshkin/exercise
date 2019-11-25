import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = props => {
  return (
    <div>
      {props.menuItems && props.menuItems.length > 0
        ? props.menuItems.map(item => (
            <ul>
              <li>
                <NavLink to={item.slug}>{item.name}</NavLink>
              </li>
            </ul>
          ))
        : null}
    </div>
  );
};

export default NavMenu;
