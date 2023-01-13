import React from 'react'
import { Button } from '../../components'

function HeadingSelector({title,onChangeFilter,type}) {

    return (
        <>
        <div className="header-block d-block d-md-flex justify-content-between align-items-end">
            <h5>{title}</h5>
            <div className="sort-button">
                <Button onClick={()=>onChangeFilter('movie')} type={type && type==='movie' ? "primary" : 'alternative'} >Фильмы</Button>
                <Button onClick={()=>onChangeFilter('tv')} type={type && type==='tv' ? "primary" : 'alternative'} >Сериалы</Button>
            </div>
        </div>
        <hr id="delimiter" />
        </>
    )
}

export default HeadingSelector
