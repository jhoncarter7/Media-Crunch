import React from "react";
import classes from "./FeedPost.module.scss";
function FeedPost(props) {
  const { image, username, profile } = props;
  console.log(image);
  return (
    <div className={classes.posts}>
      <p className={classes.postsHead}> Posts </p>
      {image && image.map((imag) => (
        <div key={imag.imgurl} className={classes.setposts}>
          <div className={classes.setprofile}>
            <div className={classes.profile}>
              <img src={profile} alt="" />
              <div className={classes.setname}>
                <div> {username}</div>
                <span>4 hour ago</span>
              </div>
            </div>
            <img src="navIcon/dot.png" alt="" />
          </div>
          <div className={classes.setimage}>
            <p>{imag.imgCaption}</p>
            <p>{imag.vidCaption}</p>
            {/* {udata.displayUrl} */}

            {imag.imgurl ? (
              <img src={imag.imgurl} alt="" />
            ) : (
              <video controls>
                <source src={imag.vidurl} type="video/mp4" />
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
                src="https:/...prev, url/img.icons8.com/external-kmg-design-flat-kmg-design/35/null/external-share-interface-essentials-kmg-design-flat-kmg-design.png"
                alt=""
              />
              <p>Share</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedPost;
