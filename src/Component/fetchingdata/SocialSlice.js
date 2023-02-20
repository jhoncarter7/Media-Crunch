import { createSlice } from "@reduxjs/toolkit";

const socialSlice = createSlice({
  name: "socialPost",
  initialState: {
    socialData: []
  },
  reducers: {
    replaceData(state, action) {
      state.imageurl = action.payload.imageurl
    state.videourl = action.payload.videourl},
  
    sendingSignupData(state, action) {
      const newItem = action.payload;
      if (newItem) {
        state.socialData.push({
          userimg: newItem.imageurl,
          uservid: newItem.vidurl,
        });
      }
      else{
        alert("no image/video found")
      }
    },
  },
});

export const socialReducer = socialSlice.actions;

export default socialSlice;
