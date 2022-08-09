import React from 'react'
import { ItemSlider } from '../../components';

function MainActors({items,setSquad,type}) {

    const array = [...items].splice(0,6);
    return (
        <div className="additional">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="header-block d-flex justify-content-between align-items-center header-block">
                        <h5>Актёрский состав</h5>
                        <i onClick={setSquad} >Посмотреть всех</i>
                    </div>
                    <div className="list-of-items col-12">
                        <div className="row p-1">
                            {/* Промапить первых пятерых актёров */}
                            { array ?
                                array.map((item)=> ( <ItemSlider key={item.id} type={type} {...item} /> ) ) 
                            :
                                Array(5).fill(0).map((_,index)=>( <ItemSlider /> )) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainActors;
