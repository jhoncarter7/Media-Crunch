import { useNavigate, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/home/Home";
import Story from "./pages/story/Story";
import Feed from "./pages/feed/Feed";
import { Fragment, useContext, useEffect } from "react";
import Registration from "./authentication/Registration";
import Login from "./authentication/Login";
import { useDispatch } from "react-redux";
import { gettingUserData, gettingUserImgData } from "./Component/fetchingdata/SendFetch";
import AuthContext from "./authentication/Auth-Context";
// import { GettingPost } from "./Component/fetchingdata/GettingAllPost";
import { gettingAllUserPic } from "./Component/fetchingdata/SendFetch";

function App() {
  const dispatch = useDispatch()
const Cartctx = useContext(AuthContext)
const isUserLogin = Cartctx.isLoggedIn
  const navigate = useNavigate();



  useEffect(() => {
    if(isUserLogin){
   
      dispatch(gettingUserData(Cartctx.localId))
      dispatch(gettingUserImgData(Cartctx.localId))
      dispatch(gettingAllUserPic())
     
    }else{
      return
    }
  },[isUserLogin,Cartctx, navigate, dispatch])

  return (
    <Fragment>
      <Routes>
      {!isUserLogin && <Route path="/" element={ <Navigate to="/register"/>} />}
       {isUserLogin && <Route path="/" element={<Home />} />}
       { isUserLogin && <Route path="/story" element={<Story/>} />}
       { isUserLogin && <Route path="/feeds" element={<Feed/>} />}
       <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
   
  
      </Routes>
    </Fragment>
  );
}

export default App;
