import { createContext } from "react";
import { useState, useReducer } from "react";

export const UserContext = createContext();

export const userReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {user: action.payload};
        case 'LOGOUT':
            return {user: null}
        default:
            return state;
    }
}

export const UserContextProvider = ({children}) => {
    // const [user, setUser] = useState(null); could use useState or useReducer
    const [state, dispatch] = useReducer(userReducer, {user: null});

    return(
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
}