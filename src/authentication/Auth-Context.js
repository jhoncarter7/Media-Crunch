import  React, { useState } from "react"



const AuthContext = React.createContext({
    token: "",
    localId: "",
    isLoggedIn: false,
    login: (token, localId)=> {},
    logout: () => {},
})


// this for reciving data and store in token an localid
export function AuthContextProvider(props) {
const [token, setToken] = useState(null)
const [localId, setLocalId] = useState(null)

const userIsLoggedIn = !!token && !!localId


const loginHandler = (token, localId) => {
setToken(token)
setLocalId(localId)

}


const logoutHandler = () => {
    setToken(null)
    setLocalId(null)
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