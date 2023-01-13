import React from 'react'
import Button from './../../components/Button';

function ProfileInfo({img}) {
    const url = img ? `https://www.themoviedb.org/t/p/w150_and_h150_face${img}` : 'https://lh3.googleusercontent.com/proxy/ZWwMUlBoxWnMC4yA1LG_ftDxELSu0uBcsHS_Kj3erfALvBje8aA_djYo8TIupR8K4T1SKwmB04TdpfpgA9GSPZqx9Hk82eAlRPR1y94t_YNT4UmQ0sM';
    return (
        <div className="profile-info col-lg-12 d-lg-flex align-items-center">
            <div className="aboutMe col-lg-9 d-lg-flex text-center align-items-center">
                <img src={url} alt="avatar" />
                <h5>Zowezy</h5>
            </div>
            <div className="stats col-lg-3 justify-content-center justify-content-lg-end d-flex">
                <Button type={"primary"}>Выйти с аккаунта</Button>
            </div>
        </div>
    )
}

export default ProfileInfo
