import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteAction from './../../../components/actionItem/FavoriteAction';
import RatingAction from './../../../components/actionItem/RatingAction';
import ListAction from './../../../components/actionItem/ListAction';


function ItemTable({title,name,release_date,character,vote_average,first_air_date,media_type,id}) {

    return (
        <>
        <tr className="aling-items-center">
            <td id="year" colSpan="1">{release_date ? ''+release_date.substr(0,4)+'' : first_air_date && first_air_date.substr(0,4)}</td>
            <td id="name" colSpan="5"><Link to={`../single/${media_type}/${id}`} ><b>{title ? title : name}</b></Link>
                <i>{character}</i></td>
            <td id="action" colSpan="5"><FavoriteAction type={media_type} movieId={id} /> <RatingAction type={media_type} movieId={id} /><ListAction movieId={id} /></td>
            <td id="rate" colSpan="3"><b>{vote_average !== 0 && vote_average}</b></td>
        </tr> 
        </>
    )
}

export default ItemTable
