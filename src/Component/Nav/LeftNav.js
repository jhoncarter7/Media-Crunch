import React from 'react'
import classes from "./LeftNav.module.scss"
function LeftNav() {
  return (
    <div className={classes.leftNav}>
    <div className={classes.feeds}>
      <h3>News Feeds</h3>
      <div className={classes.feed}>
        <img src='navIcon/tv.png' alt=''/>
        <p>Newsfeed</p>
      </div>
      <div className={classes.badges}>
        <img src='/navIcon/reward.png' alt=''/>
        <p>Badges</p>
      </div>
      <div className={classes.stories}>
        <img src='/navIcon/globe.png' alt=''/>
        <p>Explore Stories</p>
      </div>
      <div className={classes.groups}>
        <img src='/navIcon/lightning.png' alt=''/>
        <p>Popular Groups</p>
      </div>
      <div className={classes.profile}>
        <img src='/navIcon/customer.png' alt=''/>
        <p>Author Profile</p>
      </div>
    </div>
    </div>
  )
}

export default LeftNav