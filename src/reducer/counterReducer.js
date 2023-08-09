const initialState = {
    count : 0
}


const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add':
          return { ...state, count: state.count + 1 };
        case 'Sub':
          return { ...state, count: state.count - 1 };
        default:
          return state;
      }
}

export default counterReducer