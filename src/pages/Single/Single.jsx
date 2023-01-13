import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getDetails } from './../../redux/reducers/singleReducer';
import { useDispatch, useSelector } from 'react-redux';
import MainInfo from './MainInfo';
import ActorsSquad from './ActorSquad/ActorsSquad';
import { Preloader } from '../../components/loader';
function Single() {

    const dispatch = useDispatch();

    const [squad,setVisibleSquad] = useState(false);

    const handleSquadVisible = useCallback(
        () => {
            setVisibleSquad(!squad)
        },
        [squad],
    )

    const { type,id } = useParams();

    useEffect(() => {
        dispatch(getDetails(type,id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    
    const {mainInf,squads,recoms,isFetching} = useSelector(({single})=>{
        return {
            mainInf:single.mainInfo,
            squads:single.squad,
            recoms:single.recommendations,
            isFetching:single.isFetching
        }
    })

    if (isFetching === true) {
        return (<Preloader />)
    } else {
        console.log("false")
    }
    return (
        <>
        { squad ?
            <ActorsSquad bg={mainInf.bg} title={mainInf.title} setSquad={handleSquadVisible} squad={squads} />
        :
            <MainInfo setSquad={handleSquadVisible} type={type} info={mainInf} squads={squads} recoms={recoms} movieId={id} />
        }
        </>
    )
}

export default Single;
