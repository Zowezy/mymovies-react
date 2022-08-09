import { calcTime } from '../../components/utils/calcTime';
import { itemApi } from './../../API/api';
const PUT_MAIN_INFO = 'single/PUT_MAIN_INFO';
const PUT_SQUAD = 'single/PUT_SQUAD';
const PUT_RECOMS = 'single/PUT_RECOMS';
const SET_FETCHING = 'single/SET_FETCHING';

const initialState = {
    mainInfo:{
        title:'',
        descr:'',
        tag:'',
        releaseDate:'',
        img:'',
        bg:'',
        runtime:null,
        rate:null,
        video:false,
        status:'',
        original_title:'',
        budget:'',
        profit:'',
        genres:''
    },
    squad:{
        type:'person',
        actors:[],
        crew:[]
    },
    recommendations:[
        {
            id:null,
            name:'',
            img:'',
            type:''
        }
    ],
    isFetching:false
}

const singleReducer = (state=initialState,action) => {
    switch(action.type) {
        case PUT_MAIN_INFO:
            const data = action.data;
            const time = data.runtime ? calcTime(data.runtime) : data.episode_run_time+`мин`;
            return {
                ...state,
                mainInfo:{
                    title:data.title ? data.title : data.name,
                    descr:data.overview,
                    tag:data.tagline,
                    releaseDate:data.release_date ? data.release_date : data.first_air_date,
                    img:data.poster_path,
                    bg:data.backdrop_path,
                    runtime:time,
                    rate:data.vote_average,
                    video:data.videos.results.length > 0 ? data.videos.results[0].key : false,
                    status:data.status,
                    original_title:data.original_title ? data.original_title : data.original_name,
                    budget:data.budget,
                    profit:data.revenue,
                    genres:data.genres
                }
            }
        case PUT_SQUAD:
            const squad = action.data.credits;
            return {
                ...state,
                squad:{
                    ...state.squad,
                    actors:squad.cast,
                    crew:squad.crew
                }
            }
        case PUT_RECOMS:
            const films = action.data.recommendations.results;
            return {
                ...state,
                recommendations: films
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



export const putMainInfo = (data) => {
    return {
        type:PUT_MAIN_INFO,
        data:data
    }
}

export const putSquad = (data) => {
    return {
        type:PUT_SQUAD,
        data
    }
}

export const putRecoms = (data) => {
    return {
        type:PUT_RECOMS,
        data
    }
}

export const setFetching = (data) => {
    return {
        type:SET_FETCHING,
        payload:data
    }
}

export const getDetails = (type,id) => async(dispatch) => {
    dispatch(setFetching(true));
    let response = await itemApi.getDetails(type,id);
    Promise.all([
        dispatch(putMainInfo(response)),
        dispatch(putSquad(response)),
        dispatch(putRecoms(response))
    ]).then(()=>{
        dispatch(setFetching(false));
    })
}

export default singleReducer;