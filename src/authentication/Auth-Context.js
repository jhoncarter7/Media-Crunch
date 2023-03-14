import  React, { useState } from "react"



const AuthContext = React.createContext({
  
    token: "",
    localId: "",
    isLoggedIn: false,
    login: (token, localId)=> {},
    logout: () => {},
})


const  retrieveToken = () => {
const storeData = localStorage.getItem("token")
const storeDatalocal = localStorage.getItem("localId")
return{
  token : storeData,
  localId: storeDatalocal
}
}


// this for reciving data and store in token an localid
export function AuthContextProvider(props) {
const tokendata = retrieveToken()
let initialtoken;
let initialLocal;
if(tokendata){
initialtoken = tokendata.token
initialLocal = tokendata.localId
}

const [token, setToken] = useState(initialtoken)
const [localId, setLocalId] = useState(initialLocal)

const userIsLoggedIn = !!token && !!localId


const loginHandler = (token, localId) => {
setToken(token)
setLocalId(localId)
localStorage.setItem("token", token)
localStorage.setItem("localId", localId)

}


const logoutHandler = () => {
    setToken(null)
    setLocalId(null)
    localStorage.removeItem("token")
    localStorage.removeItem("localId")
}
console.log(token)
console.log(localId)
// this use to set data from store(authcontextprovider) data to authcontext
    const contextValue = {
        token: token,
        localId: localId,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
        
    }


  return <AuthContext.Provider value={contextValue}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContext