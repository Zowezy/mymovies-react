const initialState = {
    name:null,
    img:null
}

const profileReducer = (state=initialState,action) => {
    switch(action.type) {
        default:
            return {
                ...state
            }
    }
}

export default profileReducer;