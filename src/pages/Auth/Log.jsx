import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {authGuess, loginFetch} from './../../redux/reducers/authReducer';
import FormAuth from './FormAuth';




function Log() {
    const dispatch = useDispatch();

    const {requestToken,isAuth,isGuess} = useSelector(({auth})=>auth)

    const history = useHistory();

    useEffect(()=>{
        if (isAuth) {
            history.push("/home");
        }
    },[isAuth,history])

    const handleSubmit = (obj,actions) => {
        dispatch(loginFetch(obj,requestToken,actions));
    }

    const handleGuess = () => {
        if (isGuess === true) {
            history.push('/home');
        } else {
            dispatch(authGuess());
            history.push('/home');
        }
    }


    return (
        <div className="auth">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="block col-lg-6" id="auth" >
                        <div className="col-lg-7 col-10 form-info m-auto">
                            <h5>Авторизация</h5>
                            <hr id="delimeter" />
                            <p>Авторизируйтесь на сайте для получения
                                доступа к основному функционалу</p>
                        </div>
                        <FormAuth handleGuess={handleGuess} handleSubmit={handleSubmit} />
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Log
