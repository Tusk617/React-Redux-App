const initialState = {
    className: [],
    isFetching: false,
    error: ''
}

export const classReducer = (state = initialState, action) => {
    console.log(state.className)
    switch(action.type) {
        case "FETCH_CLASSES_START":
            return {
                ...state,
                isFetching: true
            }
        case "FETCH_CLASSES_SUCCESS":
            return {
                ...state,
                isFetching: false,
                className: action.payload,
                error: ''
            }
        case "FETCH_CLASSES_ERROR":
            return {
                ...state,
            isFetching: false,
            error: action.payload
            }
        default:
            return state;
    }
}