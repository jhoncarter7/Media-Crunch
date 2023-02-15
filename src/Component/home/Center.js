import React from "react";
import classes from "./Center.module.scss";
import { useState } from "react";
const dummy = [
  {
    id: "1",
    name: "Nikhil rai",
    img: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "2",
    name: "Aditya singh",
    img: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "3",
    name: "Himanshu rai",
    img: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "4",
    name: "sunny singh",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
];

function Center() {
  const [userData, setUserData] = useState([]);
  // const imges = userData.profilePicUrlHD
  const fetchData = async () => {
    const response = await fetch(
      "https://socialmedia-18d90-default-rtdb.firebaseio.com/0.json",
      {
        method: "GET",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000/",
          // "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          // Refere: "http://localhost:3000/",
          Host: "www.instagram.com",
          "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0",
          Accept: "image/avif,image/webp",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate, br",
          "Alt-Used": "www.instagram.com",
          Referer: "http://localhost:3000/",
          "Sec-Fetch-Dest": "image",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Site": "cross-site",
          Pragma: "no-cache",
          "Cache-Control": "no-cache",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    console.log(data.latestPosts);
    setUserData(data);
  };

  const feeds = userData.latestPosts;
  const imge =
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=8";
  return (
    <div className={classes.center}>
      {/* story */}
      <div className={classes.stories}>
        {dummy.map((story) => (
          <div key={dummy.id} className={classes.storiecontainer}>
            <img src={story.img} alt="" />
            <div className={classes.storie}>
              <img src={story.img} alt="" />
              <p> {story.name} </p>
            </div>
          </div>
        ))}
      </div>
      {/* create post */}
      <div className={classes.createposts}>
        <div className={classes.createpost}>
          <img src="/navIcon/writing.png" alt="" />
          <p>Create post</p>
        </div>
        <div className={classes.textarea}>
          <textarea typeof="text" placeholder="Whats on your mind ?"></textarea>
          <img src={imge} alt="" />
        </div>
        <div className={classes.postsvg}>
          <div className={classes.svg}>
            <img src="/navIcon/rvideo.png" alt="" />
            <span>live Video</span>
          </div>
          <div className={classes.svg}>
            <img src="/navIcon/image.png" alt="" />
            <span>Photo/video</span>
          </div>
          <div className={classes.svg}>
            <img src="/navIcon/feeling.png" alt="" />
            <span>Feeling/Activity</span>
          </div>
          <img className={classes.dot} src="/navIcon/dot.png" alt="" />
        </div>
      </div>
      {/* {userdata && userdata.map(posst  => <div>{posst.fullName}</div>)} */}
      {/* ////// */}

      {feeds &&
        feeds.map((udata) => {
          return (
            <div className={classes.setposts}>
              <div className={classes.setprofile}>
                <div className={classes.profile}>
                  <img src={imge} alt="" />
                  <div className={classes.setname}>
                    <div> {userData.fullName}</div>
                    <span>4 hour ago</span>
                  </div>
                </div>
                <img src="navIcon/dot.png" alt="" />
              </div>
              <div className={classes.setimage}>
                <p>{udata.caption}</p>
                {/* {udata.displayUrl} */}

                <img
                  src={`https://www.instagram.com/p/${udata.shortCode}/`}
                  alt=""
                />
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
                    {udata.comment} <span>Comments</span>
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
          );
        })}

      <button onClick={fetchData}>click for data</button>
    </div>
  );
}

export default Center;
