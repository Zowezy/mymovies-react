import React, { useEffect, useState } from 'react'
import HeadingCreate from './HeadingCreate';
import { useDispatch, useSelector } from 'react-redux';
import { getList, createList, deleteList, getDetailList } from './../../../redux/reducers/authReducer';
import BlockList from './BlockList';
import List from './List';
import { Pagination } from '../../../components';
import LoaderBlockList from '../../../components/loader/LoaderBlockList';

function MyLists({accountId,session}) {

    const dispatch = useDispatch();
    const [visible,setVisible] = useState(false);
    const [page,setPage] = useState(1);
    const [idList,setIdList] = useState(0);
    
    const {list} = useSelector(({auth})=>auth.profile);
    const {sessionId} = useSelector(({auth})=>auth);
    const setVisibleBlock = () => {
        setVisible(!visible);
    }

    const getItems = () => {
        dispatch(getList(accountId,session,page))
    }
    useEffect(()=>{
        if (list.items.length === 0) {
            getItems();
        }
    },[page])

    const handleCreateList = (obj,actions) => {
        dispatch(createList(obj,actions,session)).then((response)=>{
            getItems()
        })
    }
    const handleDeleteList = (id) => {
        dispatch(deleteList(id,session)).catch((response)=>{
            getItems();
        })
    }
    const handleGetDetail = (id) => {
        dispatch(getDetailList(id));
        setIdList(id);
    }

    return (
        <>
        <HeadingCreate handleSubmit={handleCreateList} setVisibleBlock={setVisibleBlock} visible={visible} />
        <div className="list-item mt-0">
            <div className="row">
                {visible ?
                    <List items={list.currentList} isFetching={list.isFetching} idList={idList} session={sessionId}  />
                :
                    list.isFetching ?
                    <LoaderBlockList />
                    :
                    list.items && list.items.map((item,index)=> (
                    <BlockList key={index} {...item} deleteList={handleDeleteList}
                         setVisibleBlock={setVisibleBlock}
                         getDetail={handleGetDetail}  
                    />) )
                }
            </div>
        </div>
        {
            list.pages > 1 && <Pagination page={page} pages={list.pages} onPageChanged={(page)=>setPage(page)} />
        }
        </>
    )
}

export default MyLists
