import React from 'react';
import { Link } from 'react-router-dom';
import useFilterImage from '../hooks/useFilterImage';
import RateStats from '../RateStats';

function ItemSlider({id,title,name,profile_path,poster_path,vote_average,type,media_type}) {
    let src = 'https://image.tmdb.org/t/p/w500';
    let img = useFilterImage(src,profile_path,poster_path);
    let link = type !== 'person' ? `/single/${media_type ? media_type : type}/${id}` : `../../actor/${id}`;

    return (
        <div className="item col-lg-2" >
            <div className="row">
                <div className="poster col-12 d-block">
                    {vote_average > 0 && 
                    <RateStats value={vote_average} /> 
                    }
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <Link to={link}><h6>{title ? title : name}</h6></Link>
                </div>
            </div>
        </div>
    )
}

export default ItemSlider
