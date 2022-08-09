import React from 'react'
import { Button } from '../../../components'
import ModalCreateList from './../../../components/modal/ModalCreateList';

function HeadingCreate({handleSubmit,visible,setVisibleBlock}) {
    return (
        <>
        <div className="header-block d-block d-md-flex justify-content-between align-items-end">
            <h5>Cписки</h5>
            <div className="sort-button">
                {visible ?
                <Button type="alternative" onClick={setVisibleBlock}>В профиль</Button>
                :
                <ModalCreateList  handleSubmit={handleSubmit} />
                }
            </div>
        </div>
        <hr id="delimiter" />
        </>
    )
}

export default HeadingCreate
