import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfileItems, checkItem, addProfileItems } from './../../redux/reducers/authReducer';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Button from '../Button';
import { toast } from 'react-hot-toast';

function FavoriteAction({movieId,type}) {

    const {sessionId,isAuth} = useSelector(({auth})=>auth);
    const accountId = useSelector(({auth})=>auth.profile.id)

    const [isHave,setIsHave] = useState(null);

    const dispatch = useDispatch();

    const checkFavoriteItem = () => {
        if (isAuth) {
            dispatch(checkItem(type,movieId,sessionId)).then((response)=>{
                setIsHave(response.favorite);
            });
        }
    }

    const actionItem = (status) => {
        if (isAuth) {
            let thunk = status ? dispatch(deleteProfileItems('favorite',type,accountId,sessionId,movieId)) : 
            dispatch(addProfileItems('favorite',accountId,type,sessionId,movieId));
            thunk.then((response)=>{
                response.success === true ? toast.success(response.status_message) : toast.error(response.status_message);
            })
            setIsHave(!status);
        } else {
            toast.error("Сначало зайдите в аккаунт");
        }
    }

    useEffect(()=>{
        checkFavoriteItem();
    },[])

    return (
        <>
        {
            isHave ? <Button type="secondary" id={"openModal"} onClick={() => actionItem(isHave)}><i><BsHeartFill /></i></Button> 
            : <Button type="secondary" id={"openModal"} onClick={() => actionItem(isHave)}><i><BsHeart /></i></Button> 
        }
        </>
    )
}

export default FavoriteAction
