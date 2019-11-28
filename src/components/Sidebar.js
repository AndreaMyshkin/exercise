import React from "react";
import { NavLink } from "react-router-dom";


const Sidebar= props => {
    let sidebarClass ='sidebar';
    if(props.show){
        sidebarClass = 'sidebar open';
    }
return(
    <nav className={sidebarClass}>
    <ul>
      {props.menuItems && props.menuItems.length > 0
        ? props.menuItems.map(item => (
        
              <li>
                <NavLink className="item"to={item.slug}>{item.name}</NavLink>
              </li>
         
          ))
        : null}
           </ul>
 
  </nav>
)
   
   
            }

    export default Sidebar;

