import React, { useState, useEffect, useRef } from 'react'
import { BsArrowDownShort } from 'react-icons/bs';

const MultiSelect = React.memo(({items,getFilter,sections,addSection,removeSection})=> {

    const [visible,setVisible] = useState(false);
    const toggleVisible = () => {
        setVisible(!visible);
    }
    const selectRef = useRef();
    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath()) || event.composedPath(event.target); // данная строкча позволяет в Firefox также использолвать путь. Но для firefox мы дополнительн указываем что path - это это путь до клика
          if (!path.includes(selectRef.current)) { // path это путь состоящий из массива, где указан весь путь DOM элементов до места клика мыши. Includes - это метод в JS, который ищет в массиве что-то конкретное
              setVisible(false);
          }
      }

    const checkItem = (id) => {
        let isHave = false;
        sections.map((item)=>{
            if (item === id) {
                isHave = true;
            }
            return null
        })
        return isHave;
    }

    useEffect(()=>{
        items && items.length === 0 && getFilter();
        console.log(items);
        document.body.addEventListener("click",handleOutsideClick);
        return () => {
            document.body.removeEventListener("click",handleOutsideClick);
        }
    },[items,getFilter])


    return (
        <div className="select col-lg-12" ref={selectRef}>
            <div onClick={toggleVisible} className="label d-flex justify-content-between align-items-center">
                <b>{ sections.length !== 0 ? `Выбрано категорий (${sections.length})` : 'Выберите категории'  }</b>
                <i className={visible ? 'active' : null} ><BsArrowDownShort className /></i>
            </div>
            { visible &&
            <div className="sort">
                {items && items.map((item)=>{
                    if (item.name) {
                        return (
                        <div
                            key={item.id} 
                            className={checkItem(item.id) ? 'item active' : 'item'}
                            onClick={checkItem(item.id) ? () => removeSection(item.id,item.type) : () => addSection(item.id,item.type) }
                            ><b>{item.name}</b>
                        </div>
                        )
                    }
                    return null
                })}
            </div>
            }
        </div>
    )
})

export default MultiSelect;
