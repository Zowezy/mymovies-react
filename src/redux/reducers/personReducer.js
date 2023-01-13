import { personAPI } from "../../API/api";
import { calcAge } from './../../components/utils/calcAge';

const SET_INFO = 'person/SET_INFO';
const SET_FETCHING = 'perosn/SET_FETCHING';
const initialState = {
    main:{
        name:null,
        bio:null,
        dateBirth:{
            date:null,
            age:null
        },
        dateDead:{
            date:null,
            age:null
        },
        gender:null,
        img:null,
        place:null,
    },
    product:{
        cast:[],
        crew:[]
    },
    isFetching:false
}

const personReducer = (state=initialState,action) => {
    switch(action.type) {
        case SET_INFO:
            const data = action.payload;
            const birthDay = calcAge(data.birthday);
            const deathDay = data.deathday ? calcAge(data.deathday) : null;
            return {
                ...state,
                main: {
                    name:data.name,
                    bio:data.biography,
                    dateBirth:birthDay,
                    dateDead:deathDay,
                    gender:data.gender,
                    img:data.profile_path,
                    place:data.place_of_birth
                },
                product: {
                    cast:data.combined_credits.cast,
                    crew:data.combined_credits.crew
                },
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


export const setInfo = (data) => {
    return {
        type:SET_INFO,
        payload:data
    }
}

export const setFetching = (data) => {
    return {
        type:SET_FETCHING,
        payload:data
    }
}



export const getPerson = (id) => async(dispatch) => {
    dispatch(setFetching(true))
    let response = await personAPI.getPerson(id);
    console.log(response);
    dispatch(setInfo(response));
}

export default personReducer;