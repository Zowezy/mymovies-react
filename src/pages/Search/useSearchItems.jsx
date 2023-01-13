import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeActiveCategoryMovie, setActiveCategoryMovie, initializeMovieFilter, getMovie } from '../../redux/reducers/movieReducer';
import { removeActiveCategoryTv, setActiveCategoryTv, initializeTvFilter, getTv } from '../../redux/reducers/tvReducer';

export function useSearchItems(type) {


    const dispatch = useDispatch();

    const data = useSelector(state=>({
        items:state[type].category,
        catItems:state[type].category.activeItems,
        films:state[type].items,
        page:state[type].page,
        pages:state[type].pages,
        isFetching:state[type].isFetching
    }));

    const addCategory = useCallback(
        (cat) => {
        type === 'movie'
        ? dispatch(setActiveCategoryMovie(cat))
        : dispatch(setActiveCategoryTv(cat))
        },
        [dispatch,type],
    )

    const removeCategory = useCallback(
        (cat) => {
        type === 'movie'
        ? dispatch(removeActiveCategoryMovie(cat))
        : dispatch(removeActiveCategoryTv(cat))
        },
        [dispatch,type],
    )

    const getFilter = useCallback(
        () => {
            type === 'movie'
            ? dispatch(initializeMovieFilter(type))
            : dispatch(initializeTvFilter(type))
        },
        [dispatch,type],
    )

    const getItems = useCallback(
        (catItems,nextPage) => {
        type === 'movie'
        ? dispatch(getMovie(catItems,nextPage))
        : dispatch(getTv(catItems,nextPage))
        },
        [dispatch,type],
    )

    // const addCategory = (cat) => {
    //     type === 'movie'
    //     ? dispatch(setActiveCategoryMovie(cat))
    //     : dispatch(setActiveCategoryTv(cat))
    // }

    // const removeCategory = (cat) => {
    //     type === 'movie'
    //     ? dispatch(removeActiveCategoryMovie(cat))
    //     : dispatch(removeActiveCategoryTv(cat))
    // }

    // const getFilter = () => {
    //     console.log(type);
    //     type === 'movie'
    //     ? dispatch(initializeMovieFilter(type))
    //     : dispatch(initializeTvFilter(type))
    // }

    // const getItems = (catItems,nextPage) => {
    //     type === 'movie'
    //     ? dispatch(getMovie(catItems,nextPage))
    //     : dispatch(getTv(catItems,nextPage))
    // }

    return {data,addCategory,removeCategory,getFilter,getItems}


}