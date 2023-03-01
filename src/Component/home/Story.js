import React from 'react'
import classes from "./Center.module.scss";



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

function Story() {
  return (
  
      <div className={classes.stories}>
        {dummy.map((story) => (
          <div key={story.id} className={classes.storiecontainer}>
            <img src={story.img} alt="" />
            <div className={classes.storie}>
              <img src={story.img} alt="" />
              <p> {story.name} </p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Story