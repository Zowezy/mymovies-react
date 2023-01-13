import React, { useEffect, useState } from 'react';
import { BsListUl } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { checkItemsList } from '../../redux/reducers/authReducer';


function ListItem({id,movieId,name,addItems,deleteItems,actionItem}) {

    const dispatch = useDispatch();

    const [isHave,setIsHave] = useState(null);

    console.log("Перерисовка");
    useEffect(()=>{
        dispatch(checkItemsList(id,movieId)).then((response)=>{
            setIsHave(response.item_present);
        })
    },[])

    const handleActionItems = (id) => {
        setIsHave(!isHave);
        actionItem(id,isHave);
    }

    return (
        <div class="list d-flex justify-content-between align-items-center">
            <div class="name d-flex align-items-center">
                <div class="icon"><i><BsListUl /></i></div>
                <h6>{name}</h6>
            </div>
            <div class="action-button">
                <button onClick={()=>handleActionItems(id)}>
                    {isHave ? 'Убрать' : 'Добавить' }
                </button> 
            </div>
        </div>
    )
}

export default ListItem;
