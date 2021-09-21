import * as types from './../constants/ActionTypes';
var initState = {
    by: 'name',
    value: 1
}
var myReducer = (state = initState, action) =>{
    switch(action.type){
        case types.SORT:
           return {
               by : action.sort.by,
               value : action.sort.value
           }
        default: 
            return state;
    }
}

export default myReducer;