import React from 'react';
import HeaderInfo from './HeaderInfo';
import MainActors from './MainActors';
import Recomendation from './Recomendation';

function MainInfo({info, recoms, setSquad,squads,type,movieId}) {
    const crews = [...squads.crew].splice(0,3);
    return (
        <>
        <HeaderInfo {...info} movieId={movieId} type={type} />
        <div className="main-info">
            <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                    <div className="role col-lg-9">
                        <div className="roles d-flex justify-content-between">
                            {
                                crews.map((item,index)=> (  
                            <div key={index} >
                                <h5>{item.job}</h5>
                                <p>{item.name}</p>
                            </div>
                                 ))
                            }
                        </div>
                        <div className="description">
                            <h4>Описание</h4>
                            <p>{info.descr}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 d-lg-flex justify-content-end m-0 p-0">
                        <div className="col-12 col-lg-7 roles d-flex d-lg-block justify-content-between">
                            <div>
                                <h5>Статус</h5>
                                <p>{info.status}</p>
                            </div>
                            <div>
                                <h5>Оригинальное название</h5>
                                <p>{info.original_title}</p>
                            </div>
                            { info.budget > 0 &&
                                <div>
                                    <h5>Бюджет</h5>
                                    <p>{info.budget}$</p>
                                </div>
                            }
                            { info.profit > 0 &&
                            <div>
                               <h5>Сборы</h5>
                               <p>{info.profit}$</p>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        { squads.actors.length > 0 && <MainActors type={squads.type} items={squads.actors} setSquad={setSquad}/> }
        { recoms.length > 5 &&  <Recomendation type={type} items={recoms} /> }
        </>
    )
}

export default MainInfo
