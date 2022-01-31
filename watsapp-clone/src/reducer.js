export const initialState = {   //how data layer looked
    user: null,
};

export const actionTypes = {  //this action that we can this is where we can push infomation into the data layer
    SET_USER: "SET_USER",
};

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
        return {
            ...state,
            user: action.user,
        };

        default:
            return state;
    }
};
export default reducer;