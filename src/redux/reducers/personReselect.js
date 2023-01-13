import { createSelector } from 'reselect';

const sortByDate = (items) => {
    const inDate = items.filter((item)=>item.release_date !== '' && item.first_air_date !== '');
    const result = inDate.sort((a,b)=>{
        let date1 = a.release_date ? a.release_date : a.first_air_date;
        let date2 = b.release_date ? b.release_date : b.first_air_date;
        if (date1 > date2) {
            return -1;
          }
          if (date1 < date2) {
            return 1;
          }
          return -1;
    })
    return result;
}

const haveDate = (items) => {
    const result = items.filter((item)=>{
        return item.release_date || item.first_air_date;
    })
    return result
}

const sortPopularity = (items) => {
    const result = items.sort((a,b)=>{return b.popularity-a.popularity});
    return result;
}

export const getCast = (state) => {
    return state.person.product.cast
}

export const getCrew = (state) => {
    return state.person.product.crew
}

export const getCastData = createSelector(getCast,(items)=>{
    const result =  sortByDate(items);
    return haveDate(result);
})

export const getCrewData = createSelector(getCrew,(items)=>{
    const result =  sortByDate(items);
    return haveDate(result);
})

export const getPopularityFilms = createSelector(getCast,(items)=>{
    return sortPopularity(items);
})
