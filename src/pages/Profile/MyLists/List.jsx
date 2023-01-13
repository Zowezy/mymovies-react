import React from 'react'
import { BigItem } from '../../../components';
import LoaderBigItem from '../../../components/loader/LoaderBigItem';
import { useDispatch } from 'react-redux';
import { deleteItemsList } from '../../../redux/reducers/authReducer';
import { toast } from 'react-hot-toast';

function List({items,isFetching,idList,session}) {

    const dispatch = useDispatch();

    const deleteItems = (id) => {
        dispatch(deleteItemsList(idList,session,id)).then((response)=>{
            response.success === true ? toast.success(response.status_message) : toast.error(response.status_message);
        })
    }

    return (
        <>
        <div className="list-item mt-0">
            {/* <div className="container p-0"> */}
                    { isFetching ?
                    Array(4).fill(3).map((_,index)=>(<LoaderBigItem key={index} className="item col-lg-3 p-0 mt-3" />))
                    :
                    items.map((item,index)=>(<BigItem onDelete={()=>deleteItems(item.id)} key={index} {...item} />)) }
            {/* </div> */}
        </div>
        </>
    )
}

export default List
