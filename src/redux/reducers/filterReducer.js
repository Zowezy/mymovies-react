const SET_MOVIE_FILTER = 'filter/SET_MOVIE_FILTER';
const SET_TV_FILTER = 'filter/SET_TV_FILTER';

const initialState = {
    moviesFilter:1,
    tvFilter:1
}

const filterReducer = (state=initialState,action) => {
    switch(action.type) {
        case SET_MOVIE_FILTER:
            return {
                ...state,
                moviesFilter:action.payload
            }
        case SET_TV_FILTER:
            return {
                ...state,
                tvFilter:action.payload
            }
        default:
            return {
                ...state
            }
    }
}


export const changeFilterSlider = (index,type) => {
    return {
        type:type === 'movie' ? SET_MOVIE_FILTER : SET_TV_FILTER,
        payload:index
    }
}

export default filterReducer;