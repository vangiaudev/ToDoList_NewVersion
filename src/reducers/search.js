import * as types from './../constants/ActionTypes';
var initState = '';
var myReducer = (state = initState, action) =>{
    switch(action.type){
        case types.SEARCH:
           return action.keyword;
        default: 
            return state;
    }
}

export default myReducer;