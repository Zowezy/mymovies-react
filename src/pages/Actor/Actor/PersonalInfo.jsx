import React from 'react'

function PersonalInfo({name,img,bio}) {
    return (
        <div className="person">
            <div className="container">
                <div className="row">
                    <div className="image col-lg-3">
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${img}`} alt="" />
                    </div>
                    <div className="about col-lg-9">
                        <h1>{name}</h1>
                        <div className="bio">
                            <h3>Биография</h3>
                            <p>{bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo
