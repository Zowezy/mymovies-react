import React from 'react'
import { MainSlider } from '../../../components'

function PopularRoles({items,isLoad}) {

    const films = [...items].splice(0,8);

    return (
        <>
        <div className="list-film">
        <h3>Известен по фильмам</h3>
            <MainSlider type="movie" items={films} isFetching={isLoad} showItem={5} />
        </div>
        </>
    )
}

export default PopularRoles
