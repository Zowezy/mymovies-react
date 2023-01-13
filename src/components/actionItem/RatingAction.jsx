import React, { useEffect, useState } from 'react'
import { useModal } from '../hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { checkItem, addProfileItems, getProfileItems, setProfileFetching } from './../../redux/reducers/authReducer';
import { toast } from 'react-hot-toast';

function RatingAction({type,movieId}) {

    const {openModal,closeModal,isOpen,Modal} = useModal({
        background:"rgba(0,0,0, 0.5)"
    })

    const dispatch = useDispatch();

    // const {sessionId,isAuth} = useSelector(({auth})=>auth);
    
    const {sessionId,accountId,isAuth,isGuess} = useSelector(({auth})=>{
        return {
            sessionId:auth.sessionId,
            accountId:auth.accountId,
            isAuth:auth.isAuth,
            isGuess:auth.isGuess
        }
    })

    const [rate,setRate] = useState(false);

    const [isHave,setIsHave] = useState(null);

    const checkRateItem = () => {
        if (isAuth) {
            dispatch(checkItem(type,movieId,sessionId)).then((response)=>{
                response.rated && setRate(response.rated.value);
                response.rated ? setIsHave(true) : setIsHave(false);

            })
        }
    }

    const rateItem = () => {
        if (isAuth || isGuess ) {
            dispatch(setProfileFetching('rated',true));
            dispatch(addProfileItems('rated',movieId,type,sessionId,rate,isGuess)).then((response)=>{
                response.success === true ? toast.success(response.status_message) : toast.error(response.status_message);
                isAuth && setTimeout(()=>{
                    dispatch(getProfileItems(type,accountId,sessionId,'rated'));
                },1000)
            });
            setIsHave(true);
            closeModal();
        } else {
            alert("Сначало зайдите в аккаунт");
        }
    }

    const handleOpenModal = (e) => {
        if (isAuth || isGuess ) {
            openModal(e);
        } else {
            toast.error("Сначало зайдите в аккаунт");
        }
    }

    useEffect(()=>{
        checkRateItem()
    },[])

    return (
        <>
        <Button type="secondary" id={"openModal"} onClick={(e) => handleOpenModal(e)} >
            <i>
            { isHave === true ? 
            <BsStarFill />
            : <BsStar /> 
            }
            </i>
        </Button>
        { isOpen && (
            <Modal>
                <div className="modal-wrapper text-center">
                <div className="content-rate">
                    <h5>
                        {
                            isHave === true ? 'Изменить оценку' : 'Поставить оценку'  
                        }
                    </h5>
                        <div class="rate d-flex justify-content-center">
                            {
                                Array(10).fill(0).map((item,index)=>(
                                    rate >= index+1 ? <BsStarFill onClick={() => setRate(index+1)} /> : <BsStar onClick={() => setRate(index+1)} />
                                ))
                            }
                        </div>
                        <button class="col-12 action" onClick={() => rateItem()} >Подтвердить</button>
                    </div>
                </div>
            </Modal>
            )}
        </>
    )
}

export default RatingAction
