import * as types from './../constants/ActionTypes';
var initState = {
    name: '',
    status: -1
}
var myReducer = (state = initState, action) =>{
    switch(action.type){
        case types.FILTER_TABLE:
           return {
               name : action.filter.name,
               status : + action.filter.status
           }
        default: 
            return state;
    }
}

export default myReducer;