import React from "react"

const initAuthContext = {
    isLogged : false
}

export const AuthContext = React.createContext(initAuthContext);