import { tvAPI, utilAPI } from '../../API/api';

const SET_FETCHING = 'tv/SET_FETCHING';
const PUT_CATEGORY = 'tv/PUT_CATEGORY';
const PUT_ITEMS_TV = 'tv/PUT_ITEMS_MOVIE';
const SET_ACTIVE_CATEGORY = 'tv/SET_ACTIVE_CATEGORY';
const REMOVE_ACTIVE_CATEGORY = 'tv/REMOVE_ACTIVE_CATEGORY';

const initialState = {
    category:{
        text:'Выберите категорию',
        items:[],
        activeItems:[]
    },
    items:[],
    page:0,
    pages:0,
    isFetching:false,
}

const tvReducer = (state=initialState,action) => {
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
        case PUT_ITEMS_TV:
            return {
                ...state,
                items:action.items,
                page:action.page,
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

export const setActiveCategoryTv = (id) => {
    return {
        type:SET_ACTIVE_CATEGORY,
        payload:id
    }
}

export const removeActiveCategoryTv = (id) => {
    return {
        type:REMOVE_ACTIVE_CATEGORY,
        payload:id
    }
}

export const putItemsTv = (data) => {
    return {
        type:PUT_ITEMS_TV,
        items:data.results,
        page:data.page,
        pages:data.total_pages,
        isFetching:false
    }
}



export const initializeTvFilter = (type) => async(dispatch) => {
    dispatch(setFetching(true));
    let response = await utilAPI.getCategory(type);
    dispatch(putCategory(response));
}

export const getTv = (category,page) => async(dispatch) => {
    dispatch(setFetching(true));
    let response = await tvAPI.getTv(category,page);
    dispatch(putItemsTv(response));
}

export default tvReducer;