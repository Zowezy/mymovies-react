import React, { useEffect, useState } from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs';
import Button from '../Button';
import useModal from '../hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { checkItem } from '../../redux/reducers/authReducer';
import { addRateItems } from './../../redux/reducers/authReducer';
import toast from 'react-hot-toast';

function ModalRate({type,movieId}) {
    const { openModal, isOpen, Modal } = useModal({
        background: "rgba(0, 0, 0, 0.5)"
      });

    const dispatch = useDispatch();

    const {sessionId,isAuth} = useSelector(({auth})=>auth);

    const [rate,setRate] = useState(null);

    const [isHave,setIsHave] = useState(null);


    const checkRateItem = () => {
        if (isAuth) {
            dispatch(checkItem(type,movieId,sessionId)).then((response)=>{
                debugger;
                response.rated && setRate(response.rated.value);
            })
        }
    }

    const rateItem = () => {
        toast('WAS`UP');
        if (isAuth) {
            dispatch(addRateItems(type,movieId,sessionId,rate));
        }
    }

    useEffect(()=>{
        checkRateItem();
    },[])
    return (
        <>
        <Button id={"openModal"} circle onClick={openModal} ><i><BsStar /></i></Button>
        { isOpen && (
            <Modal>
                <div className="modal-wrapper text-center">
                <div className="content-rate">
                    <h5>Поставить оценку</h5>
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
        ) }
        </>

    )
}

export default ModalRate
