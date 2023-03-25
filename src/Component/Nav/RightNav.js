import React from 'react'
import classes from "./RightNav.module.scss"
function RightNav() {

  return (
    <div className={classes.rightNav}>
      <h2 className={classes.friendcontainer}>Friend request</h2>
    <div className={classes.friendlist}>
      <p className={classes.fname}> <img src='profile.jpg' alt="" style={{width:"30px", height:"30px", borderRadius: "50%"}}/>Jone doe</p>
      <p className={classes.fcancel}>cancel</p>
      <p className={classes.faccept}>accept</p>
    </div>
    <div className={classes.friendlist}>
      <p className={classes.fname}> <img src='profile.jpg' alt="" style={{width:"30px", height:"30px", borderRadius: "50%"}}/>Jone doe</p>
      <p className={classes.fcancel}>cancel</p>
      <p className={classes.faccept}>accept</p>
    </div>
    <div className={classes.friendlist}>
      <p className={classes.fname}> <img src='profile.jpg' alt="" style={{width:"30px", height:"30px", borderRadius: "50%"}}/>Jone doe</p>
      <p className={classes.fcancel}>cancel</p>
      <p className={classes.faccept}>accept</p>
    </div>
    <div className={classes.friendlist}>
      <p className={classes.fname}> <img src='profile.jpg' alt="" style={{width:"30px", height:"30px", borderRadius: "50%"}}/>Jone doe</p>
      <p className={classes.fcancel}>cancel</p>
      <p className={classes.faccept}>accept</p>
    </div>

    </div>
  )
}

export default RightNav