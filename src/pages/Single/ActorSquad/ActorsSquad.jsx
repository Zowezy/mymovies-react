import React from 'react';
import styled  from 'styled-components';
import Actor from './Actor';


const StyledBG = styled.div`
background: linear-gradient(180deg, #353941 0%, rgba(17, 18, 26, 0.4) 100%), url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${props => props.bg}) no-repeat;
background-position: center;
`;

function ActorsSquad({squad,title,setSquad,bg}) {
    return (
        <>
        <StyledBG className="bg-film" bg={bg}>
            <div className="container-fluid">
                <div className="row text-center align-items-center">
                    <div className="named-films">
                        <h5>{title}</h5>
                        {/* Заменить на ссылку */}
                        <b onClick={setSquad} >Назад к фильму</b>
                    </div>
                </div>
            </div>
        </StyledBG>

        <div className="squad">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-12 main-squad text-center text-lg-start">
                        <h2>Актёрский состав</h2>
                        <div className="list-actor">
                            { squad.actors.map((item)=> (  <Actor key={item.id} {...item} />   )) }
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-2 col-12 tech-squad text-center text-lg-start">
                        <h2>Съёмочный состав</h2>
                        <div className="list-actor">
                            { squad.crew.map((item,index)=> (  <Actor key={index} {...item} />   )) }
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default ActorsSquad
