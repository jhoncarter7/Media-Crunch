import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AuthContext from "../../authentication/Auth-Context";
import { sendingProfilepic } from "../../Component/fetchingdata/SendFetch";
import { storage } from "../../firebase";
import classes from "./Feed.module.scss";
import FeedPost from "./FeedPost";

function Feed() {
  const profiledata = useSelector((state) => state.socialPost.socialData);
  
  const [profileimage, setProfileImage] = useState(null);
  const [profileurl, setProfileurl] = useState();
  const cartCtx = useContext(AuthContext)
  const dispatch = useDispatch()





const profileListRef = ref(storage, "profile/")


  useEffect(() => {
listAll(profileListRef).then((response) => {
  response.items.forEach(item => {
    if (item._location.path_ === `profile/${profileurl}`){
      getDownloadURL(item).then(url => {
   dispatch(sendingProfilepic(url, cartCtx.localId))
      })
    }
  })
})
  },[profileListRef, profileurl, cartCtx.localId, dispatch])

  useEffect(()=> {
    if(profileimage){ 
    const imagRef = ref(storage, `profile/${profileimage.name}`)
    uploadBytes(imagRef, profileimage).then(response => {
      setProfileurl(response.metadata.name)
    })
    }
      }, [profileimage])
  return (
    <section className={classes.profile}>
      <div className={classes.profileLeft}>
        <NavLink to="/">
          <div className={classes.navButtons}>
            <img
              src="https://img.icons8.com/fluency-systems-regular/48/null/home.png"
              alt=""
            />

            <p>Home</p>
          </div>
        </NavLink>
        <div className={classes.navButtons}>
          <img
            src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/null/external-search-ui-essentials-kmg-design-basic-outline-kmg-design.png"
            alt=""
          />
          <p> Search</p>
        </div>
        <div className={classes.navButtons}>
          <img
            src="https://img.icons8.com/ios/50/null/facebook-messenger--v1.png"
            alt=""
          />
          <p> Message</p>
        </div>
        <div className={classes.navButtons}>
          <img
            src="https://img.icons8.com/fluency-systems-regular/48/null/appointment-reminders--v1.png"
            alt=""
          />
          <p>Notification</p>
        </div>
      </div>
      <div className={classes.profileRight}>
        <div className={classes.Topprofile}>
          <label htmlFor="profile" className={classes.profilepic}>
            <img src={profiledata[0].userProfile} alt="" />
            <input type="file" id="profile" accept=".png, .jpeg, .jpg" onChange={(e) => setProfileImage(e.target.files[0])}/>
          </label>
          <div className={classes.Rightcontainer}>
            <div>{profiledata[0].userName}</div>
            <div className={classes.Rightcontainerdetail}>
              <div>
                <p>0</p>
                <p>Post</p>
              </div>
              <div>
                <p>0</p>
                <p>Follower</p>
              </div>
              <div>
                <p>0</p>
                <p>Following</p>
              </div>
            </div>
            <div>Bio</div>
          </div>
        </div>
        <hr />
        {/*  */}
        {profiledata.map((data) => (
          <FeedPost
            key={data.userEmail}
            username={data.userName}
            image={data.image ? Object.values(data.image) : ""}
            profile= {data.userProfile}
          />
        ))}
      </div>
    </section>
  );
}

export default Feed;
