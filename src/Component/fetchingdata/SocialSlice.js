import { createSlice } from "@reduxjs/toolkit";

const socialSlice = createSlice({
  name: "socialPost",
  initialState: {
    socialData: [],
    userImage: [],
    AllPosts: [],
    AllVideo: [],
    change: false

  },
  reducers: {
    gettingSignupData(state, action) {
    const user = action.payload
    const newUser = state.socialData.find(mail => mail.userEmail === user.userEmail)
    if(!newUser){
      state.socialData.push({
        userName: user.userName,
        userEmail: user.userEmail,
        image: user.images,
        video: user.video
      })
      state.change = true
    }else{
      return
    }
     
    },
    gettingUserImage(state, action){
      state.userImage = action.payload.userImg
      
    },
    allUserPost(state, action){
 state.AllPosts = action.payload
    }
  },
});

export const socialReducer = socialSlice.actions;

export default socialSlice;
