import React from "react";
import classes from "./Center.module.scss";
function slides(props) {
  const { userName, imge } = props;


  const imges =
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=8";
  return (
    <div>
      {imge.map((imag) => (
        <div key={imag.imgurl} className={classes.setposts}>
          <div className={classes.setprofile}>
            <div className={classes.profile}>
              <img src={imges} alt="" />
              <div className={classes.setname}>
                <div> {userName}</div>
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
              <video  controls >
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

export default slides;
