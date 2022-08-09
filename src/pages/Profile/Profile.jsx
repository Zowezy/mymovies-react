import React, { useState } from 'react'
import ProfileInfo from './ProfileInfo';
import MyLists from './MyLists/MyLists';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import ProfileItems from './ProfileItems';


const sections = [
    {
        type:'list',
        title: 'Мои списки',
    },
    {
        type:'rated',
        title:'Мои оценки'
    },
    {
        type:'favorite',
        title:'Избранное'
    }
]

function Profile() {

    const { isAuth,sessionId,profile} = useSelector(({auth})=>(auth));

    const [select,setSelect] = useState(0);

    if (isAuth === false) {
        return (
            <Redirect to="/login" />
        )
    }

    return (
        <>
        <div className="profile">
            <div className="container">
                <div className="row">
                    <ProfileInfo img={profile.avatar} />
                    <div className="search-params col-lg-12 d-lg-flex d-sm-block justify-content-center">
                    {sections.map((item,index)=>(
                    <div onClick={()=>setSelect(index)} className={`col-lg-4 params d-flex justify-content-center align-items-center ${index === select && 'active'}  `} key={index} >
                        <b>{item.title}</b>
                    </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>

        <div className="MyFilm">
            <div className="container">
                <div className="row">
                    {sections[select].type === 'list' ?
                    <MyLists accountId={profile.id} session={sessionId} />
                    : 
                    <ProfileItems accountId={profile.id} session={sessionId} category={sections[select].type} />
                }
                </div>
            </div>
        </div>

        </>
    )
}

export default Profile
