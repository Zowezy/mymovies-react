import React, {useEffect} from 'react'
import { HeadingFilter } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { getTrends } from '../../redux/reducers/trendsReducer';
import { MainCarousel } from './../../components/slider/';
import { MainSlider } from './../../components/slider/';
import { Preloader } from './../../components/loader/index';

export default function Home() {

    const dispatch = useDispatch();

    const {isEmpty,movies,tv,isFetching} = useSelector(({trending})=>(trending));

    const {popular} = useSelector(({trending})=>(trending));

    useEffect(()=>{
        if (isEmpty === true) {
            dispatch(getTrends());
        }
    },[isEmpty,dispatch]); // Пофиксить предупреждение

    if (isFetching === true) {
        return <Preloader />
    }


    return (
        <>
            <div className={"slider-section d-none d-sm-block"}>
                <div className={"container"}>
                    <MainCarousel items={popular.items} />
                </div>
            </div>

            <div className={"list-film popular-slider"}>
                <div className={"container"}>
                    <HeadingFilter title="Фильмы" type={movies.type} />
                    <hr id="delimeter"></hr>
                    <MainSlider {...movies} />
                </div>
            </div>

            <div className={"list-film popular-slider"}>
                <div className={"container"}>
                    <HeadingFilter title="Сериалы" type={tv.type} />
                    <hr id="delimeter"></hr>
                    <MainSlider {...tv} />
                </div>
            </div>
        </>
    )
}
