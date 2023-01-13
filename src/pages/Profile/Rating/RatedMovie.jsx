import React from 'react'
import { BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FavoriteAction from './../../../components/actionItem/FavoriteAction';
import RatingAction from './../../../components/actionItem/RatingAction';
import RateStats from '../../../components/RateStats';

function RatedMovie({id,title,name,overview,poster_path,rating,vote_average,type,deleteItem}) {

    const descr = [...overview].splice(0,300);

    return (
        <div className="rate-items d-lg-flex col-lg-12">
        <div className="poster col-lg-2">
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt="" />
        </div>
        <div className="about_film col-lg-7 d-flex flex-column justify-content-between">
            <div className="named d-flex justify-content-center justify-content-lg-start">
                <Link to={`../single/${type}/${id}`} ><h4>{title ? title : name}</h4></Link>
                <RateStats value={vote_average} />
            </div>
            <div className="descr">
                <p>{descr}...</p>
            </div>
            <div className="action_link d-flex justify-content-center justify-content-lg-start">
                <div className="action">
                    <RatingAction type={type} movieId={id} />
                </div>
                <div className="action" >
                    <FavoriteAction type={type} movieId={id} />
                </div>
                <div className="action" onClick={() => deleteItem(id)} >
                    <Button type={"secondary"} circle><BsTrashFill /></Button>
                </div>
            </div>
        </div>
        <div className="rate col-lg-3 d-flex flex-column justify-content-center align-items-center">
            <b>{rating}</b>
            <span>Моя оценка</span>
        </div>
        </div>
    )
}

export default RatedMovie
