import React from 'react';
import styled from 'styled-components';
import {ModalTrailer} from './../../components/modal/index';
import useFilterImage from '../../components/hooks/useFilterImage';
import ListAction from './../../components/actionItem/ListAction';
import FavoriteAction from './../../components/actionItem/FavoriteAction';
import RatingAction from './../../components/actionItem/RatingAction';
import RateStats from '../../components/RateStats';



const StyledBG = styled.div`
z-index: 1;
position: absolute;
background: linear-gradient(180deg, #353941 0%, rgba(17, 18, 26, 0.4) 100%),
url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${props => props.bg}')
    no-repeat;
background-position: center;
width: 100%;
height: 350px;
`;


export default function HeaderInfo({title,movieId,name,tag,releaseDate,runtime,rate,genres,bg,img,video,type}) {
    let src = 'https://image.tmdb.org/t/p/w500';
    const poster = useFilterImage(src,img);
    return (
        <div className="single">
            <StyledBG bg={bg} />
            <div className="container">
                <div className="row">
                    <div className="header-info col-lg-12 d-lg-flex text-center text-lg-start">
                        <div className="poster col-lg-3 col-12">
                            <img src={poster} alt="" />
                        </div>
                        <div className="about col-lg-8 col-12 mt-5 mt-lg-1 text-center text-lg-start">
                            <h5>{title ? title : name} <span>({releaseDate && releaseDate.substr(0,4)})</span>{rate > 0 && <RateStats value={rate} />} </h5>
                            <i>{tag}</i>
                            <div className="action mt-0 mt-lg-5">
                                <p>{runtime} •   { genres && genres.map((genre) => ( <i key={genre.id} >{genre.name} / </i> ) ) }</p>
                                <div className="action-btn mt-4">
                                    <ListAction type={type} movieId={movieId} />
                                    <FavoriteAction type={type} movieId={movieId} />
                                    <RatingAction type={type} movieId={movieId} />
                                    { video &&  ( <ModalTrailer src={video}  /> ) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
