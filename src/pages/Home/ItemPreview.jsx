import React from 'react'
import { Button } from '../../components'
import { Link } from 'react-router-dom';

function ItemPreview({id,name,title,poster_path,overview,release_date,media_type,first_air_date}) {

    return (
    <div className="slide d-lg-flex flex-row-reverse col-lg-12">
        <div className="poster col-lg-5 col-none d-flex justify-content-center mt-4">
            <img src={`https://www.themoviedb.org/t/p/w500/${poster_path}`} alt="" />
        </div>
        <div className="text-info col-lg-7 col-12">
            <h1>{title ? title : name}<span id="year-info"> ({release_date ? release_date.substr(0,4) : first_air_date.substr(0,4)}) </span> </h1>
            <p>{overview}</p>
            <Link to={`/single/${media_type}/${id}`} ><Button type={"primary"} >Подробнее</Button></Link>
        </div>
    </div>
    )
}

export default ItemPreview
