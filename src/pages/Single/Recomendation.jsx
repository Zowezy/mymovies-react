import React from 'react';
import MainSlider from './../../components/slider/MainSlider';

function Recomendation({items,type}) {
    return (
        <div className="additional">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="list-film col-12">
                        <h5 className="mb-2">Рекомендации</h5>
                        <MainSlider type={type} items={items} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recomendation
