import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsHeart, BsHeartFill, BsStar, BsStarFill } from 'react-icons/bs';
import { addFavoriteItems, checkItem } from '../../redux/reducers/authReducer';
import { deleteProfileItems } from './../../redux/reducers/authReducer';

export const modalFavoriteHoc = (Element,type,movieId) => {
    return ({id,className,...props}) => {
        debugger;
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
    
        const deleteItem = () => {
            console.log("check");
            if (isAuth) {
                // dispatch(deleteFavoriteItem(type,accountId,sessionId,movieId));
                dispatch(deleteProfileItems(type,accountId,sessionId,movieId,'favorite'));
                setIsHave(false)
            } else {
                alert("Сначало зайдите в аккаунт");
            }
        }
    
        const addItem = () => {
            console.log("check");
            if (isAuth) {
                dispatch(addFavoriteItems(accountId,type,sessionId,movieId));
                setIsHave(true)
            } else {
                alert("Сначало зайдите в аккаунт")
            }
        }
    
        useEffect(()=>{
            checkFavoriteItem();
        },[])
    
        return (
            <>
            <span onClick={isHave ? deleteItem : addItem} >
                {
                <Element id={id} >
                    <i><BsStarFill /></i>
                </Element>
                }
            </span>
            </>
        )


    }
}

export default modalFavoriteHoc
