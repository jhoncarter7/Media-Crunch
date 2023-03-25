import React, { useContext } from "react";
import classes from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthContext from "../../authentication/Auth-Context";
function Nav() {
  const username = useSelector(state => state.socialPost.socialData)
  const userLogout = useContext(AuthContext)

  const userlogoutHandler = () => {
userLogout.logout()
  }

  return (
    
    <div className={classes.nav}>
      
      <div className={classes.left}>
        <span>Media Crunch</span>
        
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
      {/* <img src="/message.png" alt=""/> */}
      <img src="/moon.png" alt=""/>
      <div className={classes.profile}>
        <div className={classes.profileimg}>
          <NavLink to="/feeds">
    {username[0] &&   <img style={{width: "38px", height: "38px", padding: "0", background: "none"}}  src={username[0].userProfile} alt=""/>}
     
      </NavLink>
      </div>
      <div className={classes.profile_text}>
      <p>UpdateProfile</p>

      <p onClick={userlogoutHandler}>Logout</p>
      </div>
      </div>
     {username[0] && <div> <p>{username[0].userName}</p></div>}
      </div>
      </div>
  );
}

export default Nav;
