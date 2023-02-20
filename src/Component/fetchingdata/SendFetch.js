
// user signUp data 
export const sendingUserData = () => {
  return async () => {
 const sendindUser = async () => {
  const response = await fetch(`https://socialmedia-18d90-default-rtdb.firebaseio.com/`,{
    method: "PUT",
    body: JSON.stringify({
      name: "nikhil rai",
      userEmail: "rainikhil719@gmail.com",
      
    })
  })

  if(!response.ok){
    throw new Error("cant send userData to backend");
  }
 };
 try {
  await sendindUser()
 } catch (error) {
  console.log(error)
 }
  } 
}

// this is sending api for image url
export const sendingToApi = (userImageLink, caption) => {
    const uuid = Date.now(2015)
  return async () => {
    const fetchingData = async () => {
      const response = await fetch(
        `https://socialmedia-18d90-default-rtdb.firebaseio.com/imge/${uuid}/.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            imgurl: userImageLink,
            imgCaption: caption
          }),
        }
      );

      if (!response.ok) {
        throw new Error("cant send Url to backend");
      }
    };
    try {
      await fetchingData();
      
    } catch (error) {
      console.log(error);
    }
  };
};
// this is sending api for image url
export const sendingVidToApi = (userVideoLink, caption) => {
    const uuid = Date.now(2015)
  return async () => {
    const fetchingData = async () => {
      const response = await fetch(
        `https://socialmedia-18d90-default-rtdb.firebaseio.com/video/${uuid}/.json`,
        {
          method: "PUT",
          body: JSON.stringify({
          
            vidurl: userVideoLink,
            vidCaption: caption


          }),
        }
      );

      if (!response.ok) {
        throw new Error("cant send Url to backend");
      }
    };
    try {
      await fetchingData();
      
    } catch (error) {
      console.log(error);
    }
  };
};



// getting user data from backend

export const gettingUserData = () => {
  return async () => {
    const gettingData = async () => {
      const response = await fetch( `https://socialmedia-18d90-default-rtdb.firebaseio.com/imge.json`,{
        method: "GET",
        body: JSON.stringify({
          name: "",
          userEmail: "",
          userProfile: "",
          userImg: ""
        })
      })
      const data = response.json()
      return data
    }
    try {
      await gettingData()
    } catch (error) {
      console.log(error)
    }
  }
}
