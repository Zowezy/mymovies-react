import React, { useEffect, useState } from 'react';
import { BsListUl } from 'react-icons/bs';
import useModal from '../hooks/useModal';
import Button from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import { addItemsList, getList } from '../../redux/reducers/authReducer';
import { deleteItemsList } from './../../redux/reducers/authReducer';
import ListItem from '../actionItem/ListItem';
function ModalAddList({movieId}) {

    const dispatch = useDispatch();

    const { openModal, isOpen, Modal } = useModal({
        background: "rgba(0, 0, 0, 0.5)"
      });

    const {list} = useSelector(({auth})=>auth.profile);
    const {sessionId} = useSelector(({auth})=>auth);
    const {accountId} = useSelector(({auth})=>auth.profile.id)
    const {isFetching} = useSelector(({auth})=>auth.profile.list)

    const addItems = (listId) => {
        dispatch(addItemsList(listId,sessionId,movieId))
    }

    const deleteItems = (listId) => {
        dispatch(deleteItemsList(listId,sessionId,movieId));
    }

    useEffect(()=>{
        if (list.items.length === 0) {
            dispatch(getList(accountId,sessionId));
        }
    },[])

    return (
        <>
        <Button id={"openModal"} onClick={openModal} circle><i><BsListUl /></i> </Button>
        {isOpen && (
            <Modal>
            <div className={`modal-wrapper text-center `}>
                <div class="content-list col-12">
                    <h5 className={isOpen ? 'animateIn' : 'animateOut'} >Добавить в список</h5>
                    <div class="lists">
                        { list.items.map((item,index)=>(
                            <ListItem {...item} movieId={movieId} accountId={accountId} sessionId={sessionId} deleteItems={deleteItems} addItems={addItems} isFetching={isFetching}   />
                        )) }
                    </div>
                </div>
            </div>
            </Modal>
        )}
        </>
    )
}

export default ModalAddList
