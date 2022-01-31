import React, { createContext , useContext ,useReducer } from "react";

export const StateContext = createContext();  //this line is preparing for data layer , its creating something called a context which is where the data layer actually lives

export const StateProvider = ({
    reducer,initialState,children
}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>  //this actually alows us to go ahead and setup the data layer

);

export const useStateValue = () => useContext(StateContext);  //it allows us to pull the information from the data layer
 