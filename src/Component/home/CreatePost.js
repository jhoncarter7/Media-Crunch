import React, { useEffect, useRef } from "react";
import classes from "./Center.module.scss";
import { useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { sendingToApi, sendingVidToApi } from "../fetchingdata/SendFetch";

let change = 0;

function CreatePost() {
  const dispatch = useDispatch();
  const [imageurl, setImageurl] = useState([]);
  // const [videosurl, setVideosurl] = useState([]);
  const [imagess, setImagess] = useState([]);
  const [videoss, setVideoss] = useState([]);
  const  captionRef = useRef()

  console.log(change);
  console.log(imageurl);


  const imageListRef = ref(storage, "images/");

  const videoListRef = ref(storage, "video/");

  useEffect(() => {
 
     if(change === 2) {listAll(videoListRef).then((response) => {
        response.items.forEach((item) => {
          if (item._location.path_ === `video/${imageurl}`) {
            getDownloadURL(item).then((videoUrl) =>
              dispatch(sendingVidToApi(videoUrl, captionRef.current.value))
            );
            setImagess()
          setVideoss()
          setImageurl()
            console.log("videourl");
        
           
          }
        });
      })
      change = 0;
    }
      
   
  }, [imageurl, videoListRef, dispatch]);

  useEffect(() => {
   
    if(change === 1)  {listAll(imageListRef).then((response) => {
        console.log("image render");
        response.items.forEach((item) => {
          if (item._location.path_ === `images/${imageurl}`) {
            getDownloadURL(item).then((imageUrl) => dispatch(sendingToApi(imageUrl, captionRef.current.value)));
          }
          setImagess()
          setVideoss()
          setImageurl()
        });
      
  console.log("2 bar renderr")
      })
      change = 0;
    };
     
    
  }, [imageurl, imageListRef, dispatch]);

  const uploadHandler = (e) => {
    e.preventDefault();
    console.log(captionRef.current.value);
    if (videoss.name) {
      const imgRef = ref(storage, `video/${videoss.name + uuid()}`);
      uploadBytes(imgRef, videoss).then((response) => {
        setImageurl(response.metadata.name);
        console.log("video render")
        change = 2;
      });
     
    } 

    if (imagess.name) {
      const imgRef = ref(storage, `images/${imagess.name + uuid()}`);
      uploadBytes(imgRef, imagess).then((response) => {
        setImageurl(response.metadata.name);
        console.log("video render")
      });
      change = 1;
    }
   else {
      return;
    }
  };

  console.log("render")
  const imge =
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=8";
  return (
    <form className={classes.createposts} onSubmit={uploadHandler}>
      <div className={classes.createpost}>
        <img src="/navIcon/writing.png" alt="" />
        <p>Create post</p>
      </div>
      <div className={classes.textarea}>
        <textarea typeof="text" placeholder="Whats on your mind ?" ref={captionRef}></textarea>
        <img src={imge} alt="" />
      </div>
      <div className={classes.postsvg}>
        <label htmlFor="filevid" className={classes.svg}>
          <img src="/navIcon/rvideo.png" alt="" />
          <span>Video</span>
          <input
            style={{ display: "none" }}
            type="file"
            id="filevid"
            accept=".mp4"
            onChange={(e) => setVideoss(e.target.files[0])}
          />
        </label>
        <label htmlFor="fileimg" className={classes.svg}>
          <img src="/navIcon/image.png" alt="" />
          <span>Photo</span>
          <input
            style={{ display: "none" }}
            type="file"
            id="fileimg"
            accept=".png,.jpeg,.jpg"
            onChange={(e) => setImagess(e.target.files[0])}
          />
        </label>
        <div className={classes.svg}>
          <img src="/navIcon/feeling.png" alt="" />
          <span>Feeling/Activity</span>
        </div>
        <label htmlFor="share" className={classes.dot}>
          <img src="/navIcon/dot.png" alt="" type />
          <button type="submit" id="share" style={{ display: "none" }} />
        </label>
      </div>
    </form>
  );
}

export default CreatePost;
