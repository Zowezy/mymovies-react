import { authAPI, profileAPI } from './../../API/api';
const PUT_TOKEN = "profile/PUT_TOKEN";
const PUT_SESSION = "profile/PUT_SESSION";
const PUT_PROFILE = "profile/PUT_PROFILE";
const PUT_LIST = 'profile/PUT_LIST';
const PUT_LIST_ITEMS = 'profile/PUT_LIST_ITEMS';
const PUT_LIST_FETCHING = 'profile/PUT_LIST_FETCHING';
const PUT_PROFILE_ITEMS = 'profile/PUT_PROFILE_ITEMS';
const SET_PROFILE_FETCHING = 'profile/SET_PROFILE_FETCHING';



const initialState = {
    profile:{
        id:'',
        name:'',
        avatar:'',
        list:{
            text:'Мои списки',
            items:[],
            currentList:{},
            isFetching:false,
            page:null,
            pages:null
        },
        rated:{
            text:'Мои оценки',
            movie:{
                items:[],
                page:null,
                pages:null
            },
            tv:{
                items:[],
                page:null,
                pages:null
            },
            isFetching:false
        },
        favorite:{
            text:'Избранное',
            movie:{
                items:[],
                page:null,
                pages:null
            },
            tv:{
                items:[],
                page:null,
                pages:null
            },
            isFetching:false
        }
    },
    requestToken:null,
    sessionId:null,
    isAuth:false,
    isGuess:false
}

const authReducer = (state=initialState,action) => {
    switch(action.type) {
        case PUT_PROFILE:
            return {
                ...state,
                profile:{
                    ...state.profile,
                    name:action.payload.name,
                    id:action.payload.id,
                    avatar:action.payload.avatar.tmdb.avatar_path
                },
                isAuth:true,
                isGuess:false
            }
        case PUT_TOKEN:
            return {
                ...state,
                requestToken:action.payload
            }
        case PUT_SESSION:
            const isGuess = action.isGuess ? true : false;
            return {
                ...state,
                sessionId:action.payload,
                isGuess
            }
        case PUT_LIST:
            return {
                ...state,
                profile:{
                    ...state.profile,
                    list:{
                        ...state.profile.list,
                        items:action.payload.results,
                        page:action.payload.page,
                        pages:action.payload.total_pages,
                        isFetching:false
                    }
                }
            }
        case PUT_LIST_ITEMS:
            return {
                ...state,
                profile:{
                    ...state.profile,
                    list:{
                        ...state.profile.list,
                        currentList:action.payload.items,
                        isFetching:false
                    }
                }
            }
        case PUT_LIST_FETCHING:
            return {
                ...state,
                profile:{
                    ...state.profile,
                    list:{
                        ...state.profile.list,
                        isFetching:action.payload
                    }
                }
            }
        case SET_PROFILE_FETCHING:
            return {
                ...state,
                profile:{
                    ...state.profile,
                    [action.category]:{
                        ...state.profile[action.category],
                        isFetching:action.status
                    }
                }
            }
        case PUT_PROFILE_ITEMS:
            return {
                ...state,
                profile:{
                    ...state.profile,
                    [action.category]:{
                        ...state.profile[action.category],
                        isFetching:false,
                        [action.section]:{
                            items:action.payload.results,
                            page:action.payload.page,
                            pages:action.payload.total_pages,
                        }
                    }
                }
            }
        default:
            return {
                ...state
            }
    }
}

export const putToken = (token) => {
    return {
        type: PUT_TOKEN,
        payload:token
    }
}

export const putSession = (session,isGuess) => {
    return {
        type: PUT_SESSION,
        payload:session,
        isGuess
    }
}

export const putProfile = (data) => {
    return {
        type:PUT_PROFILE,
        payload:data
    }
}
// list
export const putList = (data) => {
    return {
        type:PUT_LIST,
        payload:data,
    }
}

export const putListItems = (data) => {
    return {
        type:PUT_LIST_ITEMS,
        payload:data,
    }
}

export const putListFetching = (data) => {
    return {
        type:PUT_LIST_FETCHING,
        payload:data
    }
}


export const putProfileItems = (section,data,category) => {
    return {
        type:PUT_PROFILE_ITEMS,
        payload:data,
        section,
        category
    }
}

export const setProfileFetching = (category,status) => {
    return {
        type:SET_PROFILE_FETCHING,
        status,
        category
    }
}



// thunk
export const getRequestToken = () => async(dispatch) => {
    let response = await authAPI.getToken();
    dispatch(putToken(response.request_token));
}
export const authGuess = () => async(dispatch) => {
    let response = await authAPI.getGuessSession();
    dispatch(putSession(response.guest_session_id,true));
}

export const loginFetch = (obj,token,actions) => async(dispatch) => {
    let fetch = await authAPI.login(obj,token);
    if (fetch) {
        if (fetch.success === true) {
            let response = await authAPI.getAuthSession(token);
            let profileFetch = await authAPI.getProfile(response.session_id);
            dispatch(putProfile(profileFetch.data))
            dispatch(putSession(response.session_id));
        } else {
            actions.setStatus({message:fetch.status_message})
        }
    } else {
        actions.setStatus({message:'Произошла ошибка'});
    }
}

// list
export const getList = (accountId,sessionId,page = 1) => async(dispatch) => {
    dispatch(putListFetching(true));
    let response = await profileAPI.getMyList(accountId,sessionId,page);
    dispatch(putList(response));
}

export const getDetailList = (id) => async(dispatch) => {
    dispatch(putListFetching(true));
    let response = await profileAPI.getDetailList(id);
    dispatch(putListItems(response))
}

export const createList = (obj,actions,session) => async(dispatch) => {
    let response = await profileAPI.createList(obj,session);
    console.log(response);
}
export const deleteList = (id,session) => async(dispatch) => {
    await profileAPI.deleteList(id,session);
}
export const addItemsList = (id,session,media_id) => async(dispatch) => {
    dispatch(putListFetching(true));
    let response = await profileAPI.addItemsList(id,session,media_id);
    dispatch(putListFetching(false));
    return response;
}
export const deleteItemsList = (id,session,media_id) => async(dispatch) => {
    dispatch(putListFetching(true));
    let response = await profileAPI.deleteItemsList(id,session,media_id).then((response)=>{
        dispatch(getDetailList(id));
        return response;
    });
    return response;
}
export const checkItemsList = (id,movie_id) => async(dispatch) => {
    let response = await profileAPI.checkItemsList(id,movie_id);
    return response;
}



// profileItems
export const addProfileItems = (category,id,type,session,params,isGuess) => async(dispatch) => {
    let response = category === 'rated' ?
    await profileAPI.addRateItems(type,id,session,params,isGuess)
    :
    await profileAPI.addFavoriteItems(id,type,session,params)
    return response;

}
export const getProfileItems = (type,id,session,category,page = 1) => async(dispatch) => {
    await dispatch(setProfileFetching(category,true));
    const section = type === 'movie' ? type + 's' : type;
    let response = category === 'rated' ?
    await profileAPI.getRateItems(id,section,session,page)
    :
    await profileAPI.getFavorite(id,section,session,page);
    dispatch(putProfileItems(type,response,category));
}
export const checkItem = (type,id,session) => async(dispatch) => {
    let response = await profileAPI.checkItem(type,id,session);
    return response;
}
export const deleteProfileItems = (category,type,id,session,movie_id) => async(dispatch) => {
    await dispatch(setProfileFetching(category,true));
    let response = category === 'rated' ?
    await profileAPI.deleteRateItems(movie_id,type,session)
    :
    await profileAPI.deleteFavoriteItem(id,type,session,movie_id)
    setTimeout(()=>{
        dispatch(getProfileItems(type,id,session,category));
    },300);
    debugger;
    return response;
}

// Favorite
// export const addFavoriteItems = (id,type,session,movie_id) => async(dispatch) => {
//     let response = profileAPI.addFavoriteItems(id,type,session,movie_id);
// }

// export const addRateItems = (type,id,session,value) => async(dispatch) => {
//     profileAPI.addRateItems(type,id,session,value);
// }






export default authReducer;