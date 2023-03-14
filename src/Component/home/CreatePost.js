import React, { useContext, useEffect, useRef } from "react";
import classes from "./Center.module.scss";
import { useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll, getMetadata } from "firebase/storage";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { sendingToApi, sendingVidToApi } from "../fetchingdata/SendFetch";
import AuthContext from "../../authentication/Auth-Context";

let change = 0;

function CreatePost() {
  const dispatch = useDispatch();
  const [imageurl, setImageurl] = useState([]);
  const [imageDate, setImagedate] = useState()
  // const [videosurl, setVideosurl] = useState([]);
  const [imagess, setImagess] = useState([]);
  const [videoss, setVideoss] = useState([]);
  const  captionRef = useRef()

const userData = useSelector(state => state.socialPost.socialData)

const Cartctx = useContext(AuthContext)
  const imageListRef = ref(storage, "images/");

  const videoListRef = ref(storage, "video/");

  useEffect(() => {
     if(change === 2) {listAll(videoListRef).then((response) => {
        response.items.forEach((item) => {
          if (item._location.path_ === `video/${imageurl}`) {
            getDownloadURL(item).then((videoUrl) =>
              dispatch(sendingVidToApi(videoUrl, captionRef.current.value, Cartctx.localId, imageDate))
            );
            setImagess()
          setVideoss()
          setImageurl()
     
          }
        });
      })
      change = 0;
    }
  }, [imageurl, videoListRef,Cartctx.localId, dispatch, imageDate]);



  useEffect(() => {
    if(change === 1)  {listAll(imageListRef).then((response) => {
        response.items.forEach((item) => {
          if (item._location.path_ === `images/${imageurl}`) {
            getDownloadURL(item).then((imageUrl) => {
              getMetadata(item).then(metadata => { const { timeCreated } = metadata
                dispatch(sendingToApi(imageUrl, captionRef.current.value, Cartctx.localId, timeCreated))})
             
            }
       
            )
          }
          setImagess()
          setVideoss()
          setImageurl()
        });
      
  
      })
      change = 0;
    }; 
  }, [imageurl, imageListRef,Cartctx.localId, dispatch]);



  const uploadHandler = (e) => {
    e.preventDefault();
   
    if (videoss.name) {
      const imgRef = ref(storage, `video/${videoss.name + uuid()}`);
      uploadBytes(imgRef, videoss).then((response) => {
        setImageurl(response.metadata.name)
        // setImagedate(response.metadata.timeCreated)
        change = 2;
      });
     
    } 

    if (imagess.name) {
      const imgRef = ref(storage, `images/${imagess.name + uuid()}`);
      uploadBytes(imgRef, imagess).then((response) => {
        setImageurl(response.metadata.name)
         setImagedate(response.metadata.timeCreated)
         console.log(response)
    
      });
      change = 1;
    }
   else {
      return;
    }
  };



  return (
    <form className={classes.createposts} onSubmit={uploadHandler}>
      <div className={classes.createpost}>
        <img src="/navIcon/writing.png" alt="" />
        <p>Create post</p>
      </div>
      <div className={classes.textarea}>
        <textarea typeof="text" placeholder="Whats on your mind ?" ref={captionRef}></textarea>
        <img src={userData[0].userProfile} alt="" />
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
          {/* <img src="/navIcon/dot.png" alt="" type /> */}
          <button >Post</button>
          <button type="submit" id="share" style={{ display: "none" }} />
        </label>
      </div>
    </form>
  );
}

export default CreatePost;
