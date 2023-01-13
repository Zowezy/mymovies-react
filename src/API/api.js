import * as axios from 'axios';

const apiKey = '0e0f63ab08322e0892a7fe921c4a8a45';

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    header:'Access-Control-Allow-Headers: content-type, origin, accept, X-API-KEY'
})

export const authAPI = {
    getToken() {
        return instance.get(`authentication/token/new?api_key=${apiKey}`).then((response)=>{
            return response.data;
        })
    },
    getGuessSession() {
        return instance.get(`authentication/guest_session/new?api_key=${apiKey}`).then((response)=>{
            debugger;
            return response.data;
        })
    },
    getAuthSession(token) {
        return instance.post(`authentication/session/new?api_key=${apiKey}`,{
            request_token:token
        }).then((response)=>{
            return response.data
        })
    },
    getProfile(id) {
        return instance.get(`account?api_key=${apiKey}&session_id=${id}`)
    },
    login(obj,token) {
        return instance.post(`authentication/token/validate_with_login?api_key=${apiKey}`,{
            username:obj.login,
            password:obj.password,
            request_token:token
        }).then((response)=>{
            return response.data
        }).catch((response)=>{
            return false
        })
    }
}

export const profileAPI = {
    // list
    getMyList(id,session,page) {
        return instance.get(`account/${id}/lists?api_key=${apiKey}&language=en-US&session_id=${session}&page=${page}`).then((response)=>{
            return response.data
        })
    },
    createList(obj,session) {
        return instance.post(`list?api_key=${apiKey}&session_id=${session}`,{
            name:obj.title,
            description:obj.descr,
            language:'ru'
        }).then((response)=>{
            return response.data;
        }).catch((response)=>{
            return false
        })
    },
    deleteList(id,session) {
        return instance.delete(`list/${id}?api_key=${apiKey}&session_id=${session}`).then((response)=>{
            return true
        })
    },
    getDetailList(id) {
        return instance.get(`list/${id}?api_key=${apiKey}&language=ru`).then((response)=>{
            return response.data
        })
    },
    checkItemsList(list_id,movie_id) {
        return instance.get(`list/${list_id}/item_status?api_key=${apiKey}&movie_id=${movie_id}`).then((response)=>{
            return response.data;
        })
    },
    addItemsList(id,session,media_id) {
        return instance.post(`list/${id}/add_item?api_key=${apiKey}&session_id=${session}`,{
            media_id:media_id
        }).then((response)=>{
            return response.data
        })
    },
    // addItemsList(id,movieId,type) {
    //     return instanceNew.post(`list/${id}/items?api_key=${apiKey}`,{
    //         items:[
    //             {
    //                 media_type:type,
    //                 media_id:movieId
    //             }
    //         ]
    //     })
    // },
    deleteItemsList(id,session,media_id) {
        return instance.post(`list/${id}/remove_item?api_key=${apiKey}&session_id=${session}`,{
            media_id:media_id
        }).then((response)=>{
            return response.data
        })
    },
    // rate
    getRateItems(id,type,session,page) {
        return instance.get(`account/${id}/rated/${type}?api_key=${apiKey}&language=ru-RU&session_id=${session}&sort_by=created_at.asc&page=${page}`).then((response)=>{
            return response.data
        })
    },
    addRateItems(type,id,session,value,isGuess) {
        session = isGuess ? 'guest_session_id='+session : 'session_id='+session;
        return instance.post(`${type}/${id}/rating?api_key=${apiKey}&${session}`,{
            value:value
        }).then((response)=>{
            return response.data
        })
    },
    deleteRateItems(id,type,session) {
        return instance.delete(`${type}/${id}/rating?api_key=${apiKey}&session_id=${session}`).then((response)=>{
            return response.data
        })
    },
    // Favorite
    getFavorite(id,type,session,page = 1) {
        return instance.get(`account/${id}/favorite/${type}?api_key=${apiKey}&session_id=${session}&language=ru-RU&sort_by=created_at.asc&page=${page}`).then((response)=>{
            return response.data
        })
    },
    checkItem(type,id,session){
        return instance.get(`${type}/${id}/account_states?api_key=${apiKey}&session_id=${session}`).then((response)=>{
            return response.data
        })
    },
    addFavoriteItems(id,type,session,movie_id){
        return instance.post(`account/${id}/favorite?api_key=${apiKey}&session_id=${session}`,{
            media_type:type,
            media_id:movie_id,
            favorite:true
        }).then((response)=>{
            return response.data
        })
    },
    deleteFavoriteItem(id,type,session,movie_id) {
        return instance.post(`account/${id}/favorite?api_key=${apiKey}&session_id=${session}`,{
            media_type:type,
            media_id:movie_id,
            favorite:false
        }).then((response)=>{
            return response.data
        })
    },

}

export const trendingAPI = {
    getTrends(type,time='week') {
        return instance.get(`trending/${type}/${time}?api_key=${apiKey}&language=ru-RU&region=RU`).then((response)=>{
            return response.data
        })
    }
}

export const moviesAPI = {
    getCategory(category) {
        return instance.get(`genre/movie/list?api_key=${apiKey}&language=ru`).then((response)=>{
            return response.data.genres
        })
    },
    getMovie(category,page = 1) {
        let catquery = category.length > 0 ? `&with_genres=${category}` : '';
        return instance.get(`discover/movie?api_key=${apiKey}&language=ru&sort_by=popularity.desc&page=${page}${catquery}`).then((response)=>{
            return response.data
        })
    }
}


export const tvAPI = {
    getCategory(category) {
        return instance.get(`genre/tv/list?api_key=${apiKey}&language=ru`).then((response)=>{
            return response.data.genres
        })
    },
    getTv(category,page = 1) {
        let catquery = category.length > 0 ? `&with_genres=${category}` : '';
        return instance.get(`discover/tv?api_key=${apiKey}&language=ru&sort_by=popularity.desc&page=${page}${catquery}`).then((response)=>{
            return response.data
        })
    }
}

export const utilAPI = {
    getCountry() {
        return instance.get(`configuration/languages?api_key=${apiKey}`).then((response)=>{
            return response.data
        })
    },
    getCategory(type) {
        return instance.get(`genre/${type}/list?api_key=${apiKey}&language=ru`).then((response)=>{
            return response.data.genres
        })
    }
}

export const searchAPI = {
    getItems(query,page) {
        return instance.get(`search/multi?api_key=${apiKey}&language=ru&query=${query}&page=${page}&include_adult=false&region=ru`).then((response)=>{
            return response.data;
        })
    }
}

export const itemApi = {
    getDetails(type,id) {
        return instance.get(`${type}/${id}?api_key=${apiKey}&language=ru&append_to_response=credits,recommendations,videos`).then((response)=>{
            return response.data;
        })
    },
    getSquad(type,id) {
        return instance.get(`${type}/${id}/credits?api_key=${apiKey}&language=ru`).then((response)=>{
            return response.data;
        })
    }
}

export const personAPI = {
    getPerson(id) {
        return instance.get(`/person/${id}?api_key=${apiKey}&language=ru-ru&append_to_response=combined_credits`).then((response)=>{
            return response.data
        })
    }
}

