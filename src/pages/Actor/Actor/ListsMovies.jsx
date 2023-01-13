import React, { useEffect, useState } from 'react'
import { BsArrowDownShort } from 'react-icons/bs';
import useDropdown from '../../../components/hooks/useDropdown';
import ItemTable from './ItemTable';


const sections = ['Исполнитель','Создатель'];

function ListsMovies({cast,crew}) {

    const { visible,selectRef,handleOutsideClick,handleVisible } = useDropdown();

    const [type,setType] = useState(0);

    useEffect(()=>{
        document.body.addEventListener("click",handleOutsideClick)
        return () => {
            document.body.removeEventListener("click",handleOutsideClick)
        }
    })

    return (
        <div className="participation">
            <div className="named d-flex justify-content-between align-items-center">
                <h3>Принимал участия</h3>
                <div className="select" ref={selectRef} onClick={handleVisible} >
                    <b>{sections[type]}<i className={visible ? 'active' : '' } > <BsArrowDownShort /> </i></b>
                    { visible &&
                    <div className="sort">
                        <ul>
                            {
                                sections.map((item,index)=>(<li onClick={()=>setType(index)} className={type === index && 'active'} key={index} >{item}</li>))
                            }
                        </ul>
                    </div>
                    }
                </div>
            </div>
            <div className="col-12 list-role">
                <div className="table-wrapper">
                <table className="table">
                    <tbody>
                        {
                            type === 0 ?
                            cast && cast.map((item,index)=>( <ItemTable  {...item} key={index} /> ))
                            :
                            crew && crew.map((item,index)=>( <ItemTable  {...item} key={index} /> ))
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default ListsMovies
