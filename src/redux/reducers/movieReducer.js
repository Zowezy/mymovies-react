import { moviesAPI, utilAPI } from '../../API/api';

const SET_FETCHING = 'movies/SET_FETCHING';
const PUT_CATEGORY = 'movies/PUT_CATEGORY';
const PUT_ITEMS_MOVIE = 'movise/PUT_ITEMS_MOVIE';
const SET_ACTIVE_CATEGORY = 'movies/SET_ACTIVE_CATEGORY';
const REMOVE_ACTIVE_CATEGORY = 'movies/REMOVE_ACTIVE_CATEGORY';

const initialState = {
    category:{
        text:'Выберите категорию',
        items:[],
        activeItems:[]
    },
    items:[],
    pages:0,
    isFetching:false,
}

const movieReducer = (state=initialState,action) => {
    switch(action.type) {

        case SET_FETCHING:
            return {
                ...state,
                isFetching:action.payload
            }
        case PUT_CATEGORY:
            return {
                ...state,
                category:{
                    ...state.category,
                    items:action.items
                }
            }
        case SET_ACTIVE_CATEGORY:
           return {
               ...state,
               category:{
                   ...state.category,
                   activeItems:[...state.category.activeItems,action.payload]
               }
           }
        case REMOVE_ACTIVE_CATEGORY:
            const activeItems = state.category.activeItems.filter((id=>id !== action.payload))
            return {
                ...state,
                category:{
                    ...state.category,
                    activeItems
                }

            }
        case PUT_ITEMS_MOVIE:
            return {
                ...state,
                items:action.items,
                pages:action.pages,
                isFetching:action.isFetching
            }
        default:
            return {
                ...state
            }
    }
}

export const setFetching = (payload) => {
    return {
        type:SET_FETCHING,
        payload
    }
}

export const putCategory = (items) => {
    return {
        type:PUT_CATEGORY,
        items
    }
}

export const setActiveCategoryMovie = (id) => {
    return {
        type:SET_ACTIVE_CATEGORY,
        payload:id
    }
}

export const removeActiveCategoryMovie = (id) => {
    return {
        type:REMOVE_ACTIVE_CATEGORY,
        payload:id
    }
}

export const putItemsMovie = (data) => {
    return {
        type:PUT_ITEMS_MOVIE,
        items:data.results,
        pages:data.total_pages,
        isFetching:false
    }
}



export const initializeMovieFilter = (type) => async(dispatch) => {
    dispatch(setFetching(true));
    let response = await utilAPI.getCategory(type);
    dispatch(putCategory(response));
}

export const getMovie = (category,page) => async(dispatch) => {
    dispatch(setFetching(true));
    let response = await moviesAPI.getMovie(category,page);
    dispatch(putItemsMovie(response));
}

export default movieReducer;