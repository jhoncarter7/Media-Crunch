import { socialReducer } from "./SocialSlice";

// user signUp data

// export const sendingUserData = () => {
//   return async () => {
//     const sendindUser = async () => {
//       const response = await fetch(
//         `https://socialmedia-18d90-default-rtdb.firebaseio.com/Allusers.json`,
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             name: "nikhil rai",
//             userEmail: "rainikhil719@gmail.com",
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("cant send userData to backend");
//       }
//     };
//     try {
//       await sendindUser();
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// this is sending api for image url
export const sendingToApi = (userImageLink, caption, localId) => {
  const uuid = Date.now(2015);
  return async () => {
    const fetchingData = async () => {
      const response = await fetch(
        `https://socialmedia-18d90-default-rtdb.firebaseio.com/Allusers/${localId}/imge/${uuid}/.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            imgurl: userImageLink,
            imgCaption: caption,
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
export const sendingVidToApi = (userVideoLink, caption, localId) => {
  const uuid = Date.now(2015);
  return async () => {
    const fetchingData = async () => {
      const response = await fetch(
        `https://socialmedia-18d90-default-rtdb.firebaseio.com/Allusers/${localId}/imge/${uuid}/.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            vidurl: userVideoLink,
            vidCaption: caption,
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

export const gettingUserData = (localId) => {
  return async (dispatch) => {
    const gettingData = async () => {
      const response = await fetch(
        `https://socialmedia-18d90-default-rtdb.firebaseio.com/Allusers/${localId}.json`,
        {
          method: "GET",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("data cant fetch");
      }
      const data = response.json();
     
      return data
      
    };
    try {
      const userData = await gettingData();
    console.log(userData)
      dispatch(
        socialReducer.userDatas({
          userName: userData.userName,
          userEmail: userData.userEmail,
          images: userData.imge,
          userProfile: userData.profile.profilepic
          
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const gettingAllUserPic = () => {
  return async (dispatch) => {
    const gettingData = async () => {
      const response = await fetch(
        "https://socialmedia-18d90-default-rtdb.firebaseio.com/Allusers.json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("data cant fetch");
      }
      const data = response.json();
     
      return data
    };
    try {
      const userData = await gettingData();
   
      dispatch(
        socialReducer.allUserPost(
          Object.values(userData)
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
};


export const sendingSignupData = (userReg, userNameRef) => {
  fetch(
    `https://socialmedia-18d90-default-rtdb.firebaseio.com/Allusers/${userReg.localId}.json`,
    {
      method: "PUT",
      body: JSON.stringify({
        userName: userNameRef,
        userEmail: userReg.email,
        profile: ""
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(async (resp) => {

  console.log("registration2")
      if (resp.ok) {
        return resp.json();
      } else {
        await resp.json();
        let errormessage = "user Registration failed";
        throw new Error(errormessage);
      }
    })
    .catch((error) => console.log(error));
};

export const sendingProfilepic = (userprofile, localId) => {
 
  return async () => {
    const gettingData = async () => {
      const response = await fetch(
        `https://socialmedia-18d90-default-rtdb.firebaseio.com/Allusers/${localId}/profile.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            profilepic: userprofile
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("data cant fetch");
      }
      const data = response.json();
   
      return data
    };
    try {
     await gettingData();
    
    
    } catch (error) {
      console.log(error);
    }
  };

}