// import React, {  useState } from "react";
import classes from "./Center.module.scss";
import CreatePost from "./CreatePost";
import Story from "./Story";
// import { useSelector } from "react-redux";


function Center() {

  const imge =
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=8";
  return (
    <div className={classes.center}>
      {/* story */}
      <Story />
      {/* create post */}
      <CreatePost />
      {/* {userdata && userdata.map(posst  => <div>{posst.fullName}</div>)} */}
      {/* ////// */}
      <div className={classes.setposts}>
        <div className={classes.setprofile}>
          <div className={classes.profile}>
            <img src={imge} alt="" />
            <div className={classes.setname}>
              <div> Nikhil</div>
              <span>4 hour ago</span>
            </div>
          </div>
          <img src="navIcon/dot.png" alt="" />
        </div>
        <div className={classes.setimage}>
          <p>fmvndbnsdkjbn</p>
          {/* {udata.displayUrl} */}

       <img src='' alt="" />
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
              ,mfdvndn <span>Comments</span>
            </p>
          </div>
          <div className={classes.share}>
            <img
              src="https:/...prev, url/img.icons8.com/external-kmg-design-flat-kmg-design/35/null/external-share-interface-essentials-kmg-design-flat-kmg-design.png"
              alt=""
            />
            <p>Share</p>
          </div>
        </div>
      </div>
     
    </div>
  );
}
export default Center;
