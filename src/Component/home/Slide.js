import React, { useEffect } from 'react'
import classes from "./Center.module.scss";
import { useState } from "react";
function Slide(props) {
    const { userName, createTime, imgurl, vidurl, imgCaption, vidCaption, profile} = props;
    const [imagetime, setImageTime] = useState()



useEffect(() => {
   
    const timestamp =  new Date(createTime); // timestamp in milliseconds
    const now = new Date().getTime(); // current timestamp in milliseconds
    const diff = now - timestamp; // difference in milliseconds
    const minute = 60 * 1000; // milliseconds in a minute
    const hour = 60 * minute; // milliseconds in an hour
    const day = 24 * hour; // milliseconds in a day
    const week = 7 * day; // milliseconds in a week

    if (diff < minute) {
    setImageTime(Math.floor(diff / 1000) + ' seconds ago');
    } else if (diff < hour) {
    setImageTime(Math.floor(diff / minute) + ' minutes ago');
    } else if (diff < day) {
    setImageTime(Math.floor(diff / hour) + ' hours ago');
    } else if (diff < week) {
    setImageTime(Math.floor(diff / day) + ' days ago');
    } else {
        setImageTime(Math.floor(diff / week) + ' weeks ago');
    }
}, [createTime])
  
  return (
    
    <div key={imgurl} className={classes.setposts} >
    <div className={classes.setprofile}>
      <div className={classes.profile}>
        <img src={profile.profilepic} alt="" />
        <div className={classes.setname}>
          <div> {userName}</div>
          <span >{imagetime}</span>
        </div>
      </div>
      <img src="navIcon/dot.png" alt="" />
    </div>
    <div className={classes.setimage}>
      <p>{imgCaption}</p>
      <p>{vidCaption}</p>
      {/* {udata.displayUrl} */}

      {imgurl ? (
        <img src={imgurl} alt="" />
      ) : (
        <video  controls >
          <source src={vidurl} type="video/mp4" />
        </video>
      )}
    </div>
    <div className={classes.reaction}>
      <div className={classes.like}>
        <img
          src="https://img.icons8.com/fluency/30/null/filled-like.png"
          alt=""
        />
        <p>
          7k<span>Like</span>
        </p>
      </div>
      <div className={classes.comments}>
        <img
          src="https://img.icons8.com/ios/30/null/chat-message--v1.png"
          alt=""
        />
        <p>
          <span>Comments</span>
        </p>
      </div>
      <div className={classes.share}>
        <img
          src="https://img.icons8.com/external-kmg-design-flat-kmg-design/35/null/external-share-interface-essentials-kmg-design-flat-kmg-design.png"
          alt=""
        />
        <p>Share</p>
      </div>
    </div>
  </div>
  )
}

export default Slide