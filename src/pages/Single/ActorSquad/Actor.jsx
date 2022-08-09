import React from 'react';
import empty from '../../../assets/actorItem.jpg';
import { Link } from 'react-router-dom';

function Actor({name,id,character, job, profile_path}) {

    let src = 'https://www.themoviedb.org/t/p/w66_and_h66_face/';
    if (profile_path) {
        src += profile_path
    }  else {
        src = empty;
    }

    return (
        <div className="actor d-flex col-12 align-items-center">
            <div className="profile-image">
                <img src={`${src}`} alt="" />
            </div>
            <div className="detail">
                <Link to={`../../actor/${id}`} ><b>{name}</b></Link>
                <i>{character ? character : job}</i>
            </div>
        </div>
    )
}

export default Actor
