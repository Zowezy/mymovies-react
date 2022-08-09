import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../hooks/useModal';
import { BsListUl } from 'react-icons/bs';
import ListItem from './ListItem';
import { deleteItemsList,addItemsList,getList, } from './../../redux/reducers/authReducer';
import Button from '../Button';
import LoaderListItem from '../loader/LoaderListItem';
import { toast } from 'react-hot-toast';


function ListAction({movieId,type}) {

    const dispatch = useDispatch();

    const { openModal, isOpen, Modal } = useModal({
        background: "rgba(0, 0, 0, 0.5)"
      });
    
    const {list} = useSelector(({auth})=>auth.profile);
    const {sessionId,isAuth} = useSelector(({auth})=>auth);
    const {accountId} = useSelector(({auth})=>auth.profile.id);
    const {isFetching} = useSelector(({auth})=>auth.profile.list);

    const actionItem = (listId,status) => {
        let thunk = status ? dispatch(deleteItemsList(listId,sessionId,movieId)) :
        dispatch(addItemsList(listId,sessionId,movieId));
        thunk.then((response)=>{
            response.success === true ? toast.success(response.status_message) : toast.error(response.status_message);
        })
    }

    const getItems = () => {
        dispatch(getList(accountId,sessionId));
    }

    // useEffect(()=>{
    //     if (isAuth && list.items.length === 0) {
    //         dispatch(getList(accountId,sessionId));
    //     }
    // },[])

    const handleOpenModal = (e) => {
        if (isAuth) {
            openModal(e);
            getItems();
        } else {
            toast.error("Сначало зайдите в аккаунт");
        }
    }


    return (
        <>
        <Button id={"openModal"} onClick={handleOpenModal} > <i><BsListUl /></i> </Button>
        {isOpen && (
            <Modal>
            <div className={`modal-wrapper text-center`}>
                <div class="content-list">
                    <h5 className={isOpen ? 'animateIn' : 'animateOut'} >Добавить в список</h5>
                    <div class="lists">
                        {
                            isFetching === false ?
                            list.items.map((item,index)=>(
                                <ListItem {...item} movieId={movieId} accountId={accountId} sessionId={sessionId} actionItem={(id,isHave)=>actionItem(id,isHave)} addItems={actionItem} isFetching={isFetching}   />
                            ))
                            :
                            <LoaderListItem />
                        }
                    </div>
                </div>
            </div>
            </Modal>
        )}
        </>
    )
}

export default ListAction