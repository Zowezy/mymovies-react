import { trendingAPI } from "../../API/api"
const INITIALIZE_TRENDS = 'trends/InitializeTrends';
const SET_FETCHING = "trends/SET_FETCHING";
const SET_FETCHING_MOVIE = "trends/SET_FETCHING_MOVIE";
const SET_FETCHING_TV = "trends/SET_FETCHING_TV";
const SET_MOVIE = 'trends/SET_MOVIE';
const SET_MOVIE_FILTER = 'trends/SET_MOVIE_FILTER';
const SET_TV = 'trends/SET_TV';
const SET_TV_FILTER = 'trends/SET_TV_FILTER';

const initialState = {
    movies:{
        type:'movie',
        items:[],
        isFetching:false,
        filterIndex:1
    },
    tv:{
        type:'tv',
        items:[],
        isFetching:false,
        filterIndex:1
    },
    popular:{
        items:[]
    },
    isFetching:false,
    isEmpty:true
}

const trendsReducer = (state = initialState,action) => {
    switch(action.type) {
        case INITIALIZE_TRENDS:
            return {
                ...state,
                movies:{
                    ...state.movies,
                    items:action.movies.results
                },
                // movies:action.movies.results,
                tv:{
                    ...state.tv,
                    items:action.tv.results
                },
                popular:{
                    ...state.popular,
                    items:action.popular.results
                },
                // tv:action.tv.results,
                isEmpty:false,
                isFetching:false
            }
        case SET_MOVIE:
            return {
                ...state,
                movies:{
                    ...state.movies,
                    items:action.movies,
                    isFetching:false
                },
                // movies:action.movies,
                // isFetchingMovie:false
            }
        case SET_MOVIE_FILTER:
            return {
                ...state,
                movies:{
                    ...state.movies,
                    filterIndex:action.payload
                }
            }
        case SET_TV:
            return {
                ...state,
                tv:{
                    ...state.tv,
                    items:action.tv,
                    isFetching:false
                },
                // tv:action.tv,
                // isFetchingTv:false
            }
        case SET_TV_FILTER:
            return {
                ...state,
                tv:{
                    ...state.tv,
                    filterIndex:action.payload
                }
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching:action.payload
            }
        case SET_FETCHING_MOVIE:
            return {
                ...state,
                movies:{
                    ...state.movies,
                    isFetching:action.payload
                }
            }
        case SET_FETCHING_TV:
            return {
                ...state,
                tv:{
                    ...state.tv,
                    isFetching:action.payload
                }
            }
        default:
            return {
                ...state
            }
    }
}

export const setFetching = (bool) => {
    return {
        type:SET_FETCHING,
        payload:bool
    }
}

export const setFetchingMovie = (bool) => {
    return {
        type:SET_FETCHING_MOVIE,
        payload:bool
    }
}

export const setFetchingTv = (bool) => {
    return {
        type:SET_FETCHING_TV,
        payload:bool
    }
}

export const setMovie = (movies) => {
    return {
        type:SET_MOVIE,
        movies
    }
}

export const setTv = (tv) => {
    return {
        type:SET_TV,
        tv
    }
}

export const setFilterSlider = (index,type) => {
    return {
        type:type === 'movie' ? SET_MOVIE_FILTER : SET_TV_FILTER,
        payload:index
    }
}

export const initializeTrends = (movies,tv,popular) => {
    return {
        type: INITIALIZE_TRENDS,
        movies,
        tv,
        popular
    }
}


export const getTrends = () => async(dispatch) => {
    dispatch(setFetching(true));
    let response = await trendingAPI.getTrends('movie');
    let response2 = await trendingAPI.getTrends('tv');
    let response3 = await trendingAPI.getTrends('all');
    Promise.all([response,response2,response3]).then(()=>{
        dispatch(initializeTrends(response,response2,response3));
    })
}

export const getTrendsFilter = (type,time) => async(dispatch) => {
    type === 'movie' ? dispatch(setFetchingMovie(true)) :  dispatch(setFetchingTv(true));
    let response = await trendingAPI.getTrends(type,time);
    if (type === 'movie') {
        dispatch(setMovie(response.results))
    } else {
        dispatch(setTv(response.results))
    }
}

export default trendsReducer;