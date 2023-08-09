const initialState = {
    count : 0
}


function counterReducer(state = [initialState], action){
    if(action.type === "Add"){
        return({
            ...state,
            count: state + 1
        })
    }
    if(action.type === "Sub"){
        return({
            ...state,
            count: state - 1
        })
    }
}

export default counterReducer