import React from 'react';
import {Formik,Field,Form} from 'formik';
import { BsFillLockFill, BsFillPersonFill } from 'react-icons/bs';

function FormAuth({handleSubmit,handleGuess}) {

    return (
        <Formik
        initialValues={{
            login: '',
            password: '',
        }}
        onSubmit={async (values,actions) => {
            handleSubmit(values,actions);
        }}
        >
        {({status}) =>
        <Form className="row flex-column justify-content-center align-items-center" >
            <div className="col-7">
                <div className="input-group">
                    <div className="input-group-text"><i> <BsFillPersonFill /> </i></div>
                    <Field  id="login" name="login" placeholder="Login" className="form-control"/>
                </div>
            </div>
            <div className="col-7">
                <div className="input-group">
                    <div className="input-group-text"><i className="bi bi-key-fill"><BsFillLockFill /></i></div>
                    <Field  id="password" name="password" autoComplete="on" type="password" placeholder="Password" className="form-control"/>
                </div>
            </div>
            {status && status.message && (
                    <div className="message">{status.message}</div>
            )}
            <div className="action-form col-6 text-center">
                <button className="action-btn" type="submit" id="regJoin">Отправить</button>
                <b onClick={handleGuess} >Войти как гость</b>
            </div>
        </Form>
        }
    </Formik>
    )
}

export default FormAuth
