import React from 'react';
import { BsPersonLinesFill } from 'react-icons/bs';
import {Formik,Field,Form} from 'formik';
import useModal from '../hooks/useModal';
import Button from './../Button';


function ModalCreateList({handleSubmit}) {

    const { openModal, closeModal, isOpen, Modal } = useModal({
        background: "rgba(0, 0, 0, 0.5)"
    });
    

    return (
        <>
        <Button onClick={openModal} type="alternative" >Создать</Button>
        { isOpen && (
        <Modal>
            <div className="modal-wrapper text-center">
                <div class="content-create">
                    <h5>Создание списка</h5>
                    <Formik
                    initialValues={{
                        title:'',
                        descr:''
                    }}
                    onSubmit={async (values,actions) => {
                        handleSubmit(values,actions)
                        closeModal();
                    }}
                    >
                        {({status}) =>
                        <Form className="row flex-column justify-content-center align-items-center" >
                            <div class="form-input align-items-center col-8">
                                <div class="input-group">
                                    <div class="input-group-text"><i ><BsPersonLinesFill /></i></div>
                                    <Field type="text" className="form-control" placeholder="Название списка" id="title" name="title" />
                                </div>
                                <div class="input-group">
                                    <div class="input-group-text"><i ><BsPersonLinesFill /></i></div>
                                    <Field type="text" className="form-control" placeholder="Описание" id="descr" name="descr" />
                                </div>
                            </div>
                            {status && status.message && (
                                    <div className="message">{status.message}</div>
                            )}
                            <button class="action col-6" type="submit" >Подтвердить</button>
                        </Form>
                        }
                    </Formik>
                </div>
            </div>
        </Modal> 
        ) }
        </>
    )
}

export default ModalCreateList
