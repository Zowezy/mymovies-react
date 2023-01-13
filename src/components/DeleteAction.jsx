import React from 'react'
import { BsX} from 'react-icons/bs'

function DeleteAction({onClick}) {
    return (
        <div className="delete" onClick={onClick} >
            <BsX />
        </div>
    )
}

export default DeleteAction
