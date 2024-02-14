function globalReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + 1 }
        case 'decrement':
            return { ...state, counter: state.counter - 1 }
        case 'color':
            return { ...state, color: action.value }
        case 'opacity':
            return { ...state, opacity: action.value }
        default:
            return state
    }
}


export {
    globalReducer
}