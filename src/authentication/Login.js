import { useContext, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
// import { gettingUserData } from "../Component/fetchingdata/SendFetch";
import AuthContext from "./Auth-Context";
import classes from "./Login.module.scss";

import { useNavigate } from "react-router-dom";




const Login = () => {

  const Authctx = useContext(AuthContext);
const navigate = useNavigate()



  const emailRef = useRef();
  const passwordRef = useRef();

  // const userNameRef = nameRef
  const userSigIn = (e) => {
    e.preventDefault();
    const userEmailRef = emailRef.current.value;
    const userPasswordRef = passwordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNlx6A44zQ4onM499dTDHaIHK93nDAyuM ",
      {
        method: "POST",
        body: JSON.stringify({
          email: userEmailRef,
          password: userPasswordRef,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

      .then((resp) => {
        if (resp.ok) {
        
          return resp.json();
        }else{
          return resp.json().then(data => {
            let errormessage = "Authentication faild"
            throw new Error(errormessage)
          })
        }
      }).then(data => Authctx.login(data.idToken, data.localId))
      .catch((error) => console.log(error));
  };


  // calling data

  const returnHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  
  useEffect(() => {
    Authctx.isLoggedIn && returnHome();
  }, [Authctx.isLoggedIn, returnHome]);


  return (
    <div className={classes.login}>
      <div className={classes.card}>
        <div className={classes.left}>
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className={classes.right}>
          <h1>Login</h1>
          <form onSubmit={userSigIn}>
            <input type="email" placeholder="email" ref={emailRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
