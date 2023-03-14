// import React, {  useState } from "react";
import { useSelector } from "react-redux";

import classes from "./Center.module.scss";
import CreatePost from "./CreatePost";
import Story from "./Story";
import Slides from "./Slides";

function Center() {
 
  const change = useSelector((state) => state.socialPost.change);
  // const userImage = useSelector(state => state.socialPost.userImage)
  // below is working....
const alluserpic = useSelector(state => state.socialPost.AllPosts)
  console.log(alluserpic);
  // const isImage  =    (alluserpic.map(item => Object.values(item)) )

  // console.log(userImage);

  if (change) {

    return (
      <div className={classes.center}>
        {/* story */}
        <Story />
        {/* create post */}
        <CreatePost />
        {/* ////// */}
{/* if(alluserpic.) */}
        {alluserpic.map((img) => (
         <Slides key = {img.userEmail} userName = {img.userName} profile={img.profile} imge = {img.imge ?  Object.values(img.imge): ""}/>
        ))}
      </div>
    );
  }
}
export default Center;
