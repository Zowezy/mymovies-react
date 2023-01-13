import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BigItem, Pagination } from '../../components';
import LoaderBigItem from '../../components/loader/LoaderBigItem';
import HeadingSelector from './HeadingSelector';
import RatedMovie from './Rating/RatedMovie';
import LoadRate from './../../components/loader/LoadRate';
import { toast } from 'react-hot-toast';
import { getProfileItems } from '../../redux/reducers/authReducer';
import { deleteProfileItems } from './../../redux/reducers/authReducer';

function ProfileItems({category,accountId,session}) {

    const section = useSelector(({auth})=>auth.profile[category]);

    const dispatch = useDispatch();

    const [type,setType] = useState('movie');
    const [page,setPage] = useState(1);

    const handleGetItems = () => {
        dispatch(getProfileItems(type,accountId,session,category,page));
    }

    const changeFilter = (type) => {
        setType(type);
        setPage(1);
    }

    const handleDeleteItem = (id) => {
        dispatch(deleteProfileItems(category,type,accountId,session,id)).then((response)=>{
            response.success === true ? toast.success(response.status_message) : toast.error(response.status_message)
        });
        console.log("check");
    }

    useEffect(()=>{
        handleGetItems();
    },[type,page,category])

    return (
        <>
        <HeadingSelector onChangeFilter={changeFilter} title={section.text} category={"favs"} type={type} />
        <div className="list-item">
            <div className="row">
                {section.isFetching ?
                Array(4).fill(0).map((_,index)=>{
                    if (category === 'rated') {
                        return (<LoadRate key={index} className="mt-3" /> )
                    } else {
                        return (<LoaderBigItem key={index} className="col-lg-3" /> )
                    }
                })
                :
                section[type].items.map((item,index)=>{
                    if (category === 'rated') {
                        return (<RatedMovie key={index} type={type} {...item} deleteItem={()=>handleDeleteItem(item.id)} />)
                    } else {
                        return ( <BigItem key={index} type={type} {...item} onDelete={()=>handleDeleteItem(item.id)}  /> )
                    }
                })
                }
            </div>
        </div>
        {section[type].pages > 1 && <Pagination page={page} pages={section[type].pages} onPageChanged={(page)=>setPage(page)}  /> }
        </>
    )
}

export default ProfileItems
