import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/home/Home";
import Story from "./pages/story/Story";
import Feed from "./pages/feed/Feed";
import { Fragment } from "react";
// import { sendingToApi } from "./Component/fetchingdata/SendFetch";
// import { useDispatch, useSelector } from "react-redux";

// let isInitial = true;
function App() {
  
  // const userPost = useSelector((state) => state.socialPost);
  // const dispatch = useDispatch();
  // console.log(userPost);



  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/feeds" element={<Feed />} />
      </Routes>
    </Fragment>
  );
}

export default App;
