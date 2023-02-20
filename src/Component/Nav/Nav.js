import React from "react";
import classes from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className={classes.nav}>
      <div className={classes.left}>
        <span>Social</span>
        <span>Media</span>
      </div>
      <div className={classes.center}>
        <div className={classes.searchBar}>
        <input type="search" placeholder="start typing to search.."/>
        <img className={classes.searchImg} src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png" alt=""/>
        </div>
        <NavLink to="/">
        <img src="/home.png" alt=""/>
        </NavLink>
        <NavLink to="/feeds">
        <img src="/lightning.png" alt=""/>
        </NavLink>

        <NavLink to='/story'>
        <img src="/video.png" alt=""/>
        </NavLink>


      </div>

      <div className={classes.right}>
      <img src="/notification.png" alt=""/>
      <img src="/message.png" alt=""/>
      <img src="/moon.png" alt=""/>
      <img src="" alt=""/>
      </div>
      
    </div>
  );
}

export default Nav;
