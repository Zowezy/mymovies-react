import { searchAPI } from "../../API/api"

const PUT_ITEMS = 'search/PUT_ITEMS';
const SET_FETCHING = 'search/SET_FETCHING';

const initialState = {
    items:[
        {
            name:'Фильмы',
            type:'movie',
            items:[],
            countItems:0
        },
        {
            name:'Сериалы',
            type:'tv',
            items:[],
            countItems:0
        },
        {
            name:'Люди',
            type:'person',
            items:[],
            countItems:0
        }
    ],
    isFetching:false
}

const mediaSort = (items,type) => {
    return items.filter((item)=>item.media_type === type)
}

const searchReducer = (state=initialState,action) => {
    switch(action.type) {
        case PUT_ITEMS:
            const items = action.items;
            return {
                ...state,
                items:state.items.map((m)=>{
                    return {
                        ...m,
                        items:mediaSort(items,m.type),
                        countItems:mediaSort(items,m.type).length
                    }
                }),
                page:action.page,
                pages:action.pages,
                isFetching:false
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching:action.payload
            }
        default:
            return {
                ...state
            }
    }
}


export const putItems = (items) => {
    return {
        type:PUT_ITEMS,
        items:items.results,
        page:items.page,
        pages:items.total_pages
    }
}

export const setFetching = (params) => {
    return {
        type:SET_FETCHING,
        payload:params
    }
} 



export const putRequest = (query,page) => async(dispatch) => {
    dispatch(setFetching(true));
    let response = await searchAPI.getItems(query,page);
    dispatch(putItems(response));
}

export default searchReducer;