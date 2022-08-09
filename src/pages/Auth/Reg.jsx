import React from 'react'
import { BsEnvelopeFill, BsFillLockFill, BsPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Reg() {
    return (
        <div className="auth">
            <div className="container">
            <div className="row justify-content-center text-center">
                <div className="block col-lg-6" id="auth" >
                <div className="col-lg-7 col-10 form-info m-auto">
                            <h5>Регистрация</h5>
                            <hr id="delimeter" />
                            <p>После регистрации на сайте, вы сможете воспользоваться всеми доступными функциями на сайте</p>
                        </div>
                        <form action="" className="row flex-column justify-content-center align-items-center">
                            <div className="col-7">
                            <div className="input-group">
                                <div className="input-group-text"><i> <BsEnvelopeFill /> </i></div>
                                <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="E-mail" />
                            </div>
                            </div>
                            <div className="col-7">
                                <div className="input-group">
                                    <div className="input-group-text"><i> <BsPersonFill /> </i></div>
                                    <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Ваше Имя" />
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="input-group">
                                    <div className="input-group-text"><i><BsFillLockFill /></i></div>
                                    <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Пароль" />
                                </div>
                            </div>
                            <div className="guess-link">
                                <Link to="/home" >Продолжить как гость</Link>
                            </div>
                            <div className="action-form col-6">
                                <button className="action-btn" type="submit" id="regJoin">Отправить</button>
                                <Link className="action-btn" to="/login"><button className="action-btn">Войти в аккаунт</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Reg
