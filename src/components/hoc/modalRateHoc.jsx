import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkItem, getProfileItems } from '../../redux/reducers/authReducer';
import { useModal } from '../hooks/useModal';
import { addRateItems } from '../../redux/reducers/authReducer';
import Button from '../Button';
import { BsStar, BsStarFill } from 'react-icons/bs';



export const modalRateHoc = (Element,type,movieId) => {
    return ({id,className,...props}) => {

        const { openModal,closeModal, isOpen, Modal } = useModal({
            background: "rgba(0, 0, 0, 0.5)"
          });
    
        const dispatch = useDispatch();
    
        const {sessionId,isAuth} = useSelector(({auth})=>auth);
    
        const [rate,setRate] = useState(null);

    
    
        const checkRateItem = () => {
            if (isAuth) {
                dispatch(checkItem(type,movieId,sessionId)).then((response)=>{
                    response.rated && setRate(response.rated.value);
                })
            }
        }
    
        const rateItem = () => {
            if (isAuth) {
                dispatch(addRateItems(type,movieId,sessionId,rate));
                closeModal();
            }
        }
    
        useEffect(()=>{
            checkRateItem();
        },[])
        return (
            <>
            <span onClick={(e) => openModal(e)} >
            {<Element {...props} />}
            </span>
            {/* <Button id={"openModal"} circle onClick={openModal} ><i>{Element}</i></Button> */}
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
            )}
            </>
        )
    }
}

export default modalRateHoc
