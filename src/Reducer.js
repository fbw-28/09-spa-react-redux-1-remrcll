const initialState = {
    x: 0,
    y: 0
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "incrementY":
            return {...state, y:state.y+action.payload};
        case "incrementX":
            return {...state, x:state.x+action.payload};
        default:
            return state
    }
}