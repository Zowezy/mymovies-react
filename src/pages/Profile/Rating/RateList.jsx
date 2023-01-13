import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '../../../components';
import { Preloader } from '../../../components/loader';
import { deleteRateItem, getRatedList } from '../../../redux/reducers/authReducer';
import HeadingSelector from '../HeadingSelector'
import RatedMovie from './RatedMovie';
import LoadRate from './../../../components/loader/LoadRate';

function RateList({session,accountId}) {

    console.log("Перерисовка");

    const {rated} = useSelector(({auth})=>auth.profile);

    const dispatch = useDispatch();

    const [type,setType] = useState('movie');
    const [page,setPage] = useState(1);

    const getItems = () => {
        dispatch(getRatedList(accountId,type,session,page))
    }

    const changeFilter = (type) => {
        setType(type);
        setPage(1);
        console.log(type);
    }

    const deleteItem = (id) => {
        dispatch(deleteRateItem(type,id,session));
    }

    useEffect(()=>{
        getItems();
    },[page,type])


    return (
        <>
        <HeadingSelector type={type} onChangeFilter={(type) => changeFilter(type)} title={rated.text} category={"rate"} />
        <div className="list-items">
        { rated.isFetching === true ?
            <LoadRate />
        :
            rated[type].items.map((item,index)=>( <RatedMovie key={index} deleteItem={deleteItem} {...item} type={type} /> ))
        }
        </div>
        { rated[type].pages > 1 && <Pagination page={page} pages={rated[type].pages} onPageChanged={(page)=>setPage(page)} /> }

        </>
    )
}

export default RateList
