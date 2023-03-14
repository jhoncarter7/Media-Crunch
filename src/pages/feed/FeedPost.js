import React from "react";
import classes from "./FeedPost.module.scss";
import SubFeedPost from "./SubFeedPost";
function FeedPost(props) {
  const { image, username, profile } = props;
 
  return (
    <div className={classes.posts}>
      <p className={classes.postsHead}> Posts </p>
      {image && image.map((imag) => (
        <SubFeedPost  key = {imag.imgurl} userName = {username} image={image} imgCaption={imag.imgCaption} vidCaption={imag.vidCaption} imgurl={imag.imgurl} vidurl={imag.vidurl} createTime={imag.createTime} profile={profile}/>
      ))}
    </div>
  );
}

export default FeedPost;
