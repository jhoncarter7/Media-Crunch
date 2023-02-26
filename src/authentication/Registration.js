import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Registration.module.scss";
import { sendingSignupData } from "../Component/fetchingdata/SendFetch";
// import { async } from "@firebase/util";

// import thunk from "redux-thunk";
const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  // const [userreg, setUserreg] = useState();
  const dispatch = useDispatch();


  const userSignUp = (e) => {
    e.preventDefault();
    console.log("registration2");
   dispatch(fetchEmaildata())
  };




const fetchEmaildata = () => {
  const userEmailRef = emailRef.current.value;
  const userPasswordRef = passwordRef.current.value;
  const userNameRef = nameRef.current.value;
  return async (dispatch) => {
    console.log("registration1");
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNlx6A44zQ4onM499dTDHaIHK93nDAyuM",
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
    );

    if (!response.ok) {
      let errormessage = "Authentication faild";
      throw new Error(errormessage);
    }
    const data = await response.json();
    console.log(data);
    dispatch(sendingSignupData(data, userNameRef));
  };

}


  // console.log(userreg.idToken, userreg.localId);
  // useEffect(() => {
  //   console.log("registration");
  //   const userNameRef = nameRef.current.value;
  //   if (userreg) {

  //   } else {
  //     return;
  //   }
  // }, [userreg, dispatch]);

  return (
    <div className={classes.register}>
      <div className={classes.card}>
        <div className={classes.left}>
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className={classes.right}>
          <h1>Register</h1>
          <form onSubmit={userSignUp}>
            <input type="text" placeholder="Name" ref={nameRef} />
            <input type="email" placeholder="Email" ref={emailRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
