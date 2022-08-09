import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BigItem } from '../../../components';
import { deleteFavoriteItem, getFavoriteItems } from '../../../redux/reducers/authReducer';
import HeadingSelector from './../HeadingSelector';
import Pagination from './../../../components/Pagination';
import LoaderBigItem from './../../../components/loader/LoaderBigItem';

function FavsWatch({accountId,session}) {

    const {favorite} = useSelector(({auth})=>auth.profile);

    const dispatch = useDispatch();

    const [type,setType] = useState('movie');
    const [page,setPage] = useState(1);

    const getItems = () => {
        dispatch(getFavoriteItems(accountId,type,session,page))
    }

    const changeFilter = (type) => {
        setType(type);
        setPage(1);
    }

    const deleteItem = (id) => {
        dispatch(deleteFavoriteItem(accountId,session,type,id));
    }


    useEffect(()=>{
        getItems()
    },[type,page])

    return (
        <>
        <HeadingSelector onChangeFilter={changeFilter} title={favorite.text} category={"favs"} type={type} />
        <div className="list-item">
            <div className="row">
                { favorite.isFetching ?
                Array(10).fill(0).map((_,index)=> <LoaderBigItem key={index} /> )
                :
                favorite[type].items.map((item,index)=>( <BigItem type={type} onDelete={152} {...item} /> ))
                }
            </div>
        </div>
        { favorite[type].pages > 1 && <Pagination page={page} pages={favorite[type].pages} onPageChanged={(page)=>setPage(page)} /> }
        </>
    )
}

export default FavsWatch
