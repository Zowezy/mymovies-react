import React from 'react';
import { Link } from 'react-router-dom';
import useFilterImage from './hooks/useFilterImage';
import RateStats from './RateStats';
import DeleteAction from './DeleteAction';

function BigItem({title,name,poster_path,profile_path,type,vote_average,media_type,id,onDelete,onClick}) {

    let res = 'https://image.tmdb.org/t/p/w500';
    let img = useFilterImage(res,profile_path,poster_path);
    let src = type !== 'person' ? `/single/${media_type ? media_type : type}/${id}` : `../../actor/${id}`;
    debugger;

    return (
        <div className="item col-6 col-lg-3 col-md-6">
            <div className="content">
                <div className="poster">
                    {vote_average > 0 && <RateStats value={vote_average} /> }
                    {onDelete && <DeleteAction onClick={onDelete} /> }
                    <img src={img} alt="" onClick={onClick} />
                </div>
                <div className="title">
                    <Link to={src} ><h5>{title ? title : name}</h5></Link>
                </div>
            </div>
        </div>
    )
}

export default BigItem
