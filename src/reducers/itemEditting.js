import * as types from './../constants/ActionTypes';
var initState = {
    id : '',
    name : '',
    status : false
}
var myReducer = (state = initState, action) =>{
    switch(action.type){
        case types.UPDATE_TASK:
            return action.task;
        default: 
            return state;
    }
}

export default myReducer;