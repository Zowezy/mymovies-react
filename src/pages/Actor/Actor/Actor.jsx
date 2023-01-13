import React, { useEffect } from 'react'
import ListsMovies from './ListsMovies';
import PersonalInfo from './PersonalInfo';
import PopularRoles from './PopularRoles';
import { useParams } from 'react-router';
import { getPerson } from './../../../redux/reducers/personReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCastData, getCrewData, getPopularityFilms } from './../../../redux/reducers/personReselect';
import { Preloader } from '../../../components/loader';

function Actor() {

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPerson(id));
    },[id,dispatch])

    const { main,isFetching } = useSelector(({person})=>(person));

    const cast = useSelector(getCastData);
    const cinema = useSelector(getPopularityFilms);
    const crew = useSelector(getCrewData);

    if (isFetching === true) {
        return ( <Preloader /> )
    }

    return (
        <>
        <PersonalInfo {...main} />
        <div className="detail">
            <div className="container">
                <div className="row">
                    <div className="facts col-lg-3">
                        <div className="fact">
                            <h6>Пол</h6>
                            <p>Мужской</p>
                        </div>
                        <div className="fact">
                            <h6>Дата рождения</h6>
                            <p>{main.dateBirth.date} { main.dateDead === null && `(${main.dateBirth.age})` }</p>
                        </div>
                        {  main.dateDead && 
                        <div className="fact">
                            <h6>Дата смерти</h6>
                            <p>{main.dateDead.date} ({main.dateBirth.age - main.dateDead.age}) </p>
                        </div>
                        }
                        {main.place &&
                        <div className="fact">
                            <h6>Место рождения</h6>
                            <p>{main.place}</p>
                        </div>
                        }
                    </div>
                    <div className="main-info col-lg-9">
                        <PopularRoles items={cinema} />
                        <ListsMovies  cast={cast} crew={crew} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Actor
