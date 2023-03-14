import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/home/Home";
import Story from "./pages/story/Story";
import Feed from "./pages/feed/Feed";
import { Fragment, useContext, useEffect } from "react";
import Registration from "./authentication/Registration";
import Login from "./authentication/Login";
import { useDispatch, useSelector } from "react-redux";
import { gettingUserData } from "./Component/fetchingdata/SendFetch";
import AuthContext from "./authentication/Auth-Context";
// import { GettingPost } from "./Component/fetchingdata/GettingAllPost";
import { gettingAllUserPic } from "./Component/fetchingdata/SendFetch";

function App() {
  const dispatch = useDispatch();
  const Cartctx = useContext(AuthContext);
  const isUserLogin = Cartctx.isLoggedIn;
  // const navigate = useNavigate();
  const change = useSelector((state) => state.socialPost.change);
  console.log(change);

  useEffect(() => {
    if (isUserLogin) {
      dispatch(gettingUserData(Cartctx.localId));
      // dispatch(gettingUserImgData(Cartctx.localId))
      dispatch(gettingAllUserPic());
      console.log("app");
    } else {
      return;
    }
  }, [isUserLogin, Cartctx, dispatch]);

  const RequireAuth = ({children}) => {
    return isUserLogin ? children : <Navigate to="/login"/> && <Navigate to="/register"/>
  }

  return (
    <Fragment>
      <Routes>
        
          <Route path="*" element={<Navigate to="/login" />} />
        
       <Route path="/" element={<RequireAuth><Home /></RequireAuth> } />
       <Route path="/story" element={ <RequireAuth><Story /></RequireAuth> } />
       <Route path="/feeds" element={<RequireAuth><Feed /></RequireAuth> } />
       <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Fragment>
  );
}

export default App;
