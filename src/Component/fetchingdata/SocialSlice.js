import { createSlice } from "@reduxjs/toolkit";

const socialSlice = createSlice({
  name: "socialPost",
  initialState: {
    socialData: [],
    AllPosts: [],
    AllVideo: [],
    change: false

  },
  reducers: {
    userDatas(state, action) {
    const user = action.payload
    const newUser = state.socialData.find(mail => mail.userEmail === user.userEmail)
    if(!newUser){
      state.socialData.push({
        userName: user.userName,
        userEmail: user.userEmail,
        image: user.images,
        userProfile: user.userProfile,
       
      })
      state.change = true
    }else{
      return
    }
     
    },
  
    allUserPost(state, action){
 state.AllPosts = action.payload
    }
  },
});

export const socialReducer = socialSlice.actions;

export default socialSlice;
