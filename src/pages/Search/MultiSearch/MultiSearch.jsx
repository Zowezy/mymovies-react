import React, {useState, useEffect, useCallback} from 'react'
import { BigItem } from '../../../components'
import Pagination from '../../../components/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import Section from './Section';
import { putRequest } from './../../../redux/reducers/searchReducer';
import { Preloader } from '../../../components/loader';

function MultiSearch() {

    const dispatch = useDispatch();

    const [link,setLink] = useState(0);

    const [value,setValue] = useState('');

    const [page,setPage] = useState(1);

    const {sections,pages,isFetching} = useSelector(({search})=>{
        return {
            sections:search.items,
            pages:search.pages,
            isFetching:search.isFetching
        }
    });

    const handleChange = (event) => {
        setValue(event.target.value);
        setPage(1);
    }

    const putQuery = useCallback(
        (page) => {
            dispatch(putRequest(value,page))
        },
        [dispatch,value],
    )
    useEffect(()=>{
        if (value !== '') {
            putQuery(page)
        }
    },[value,page,putQuery])


    return (
        <div className="search mt-5">
            <div className="container">
                <div className="row text-center justify-content-center">
                    <h1>Поиск</h1>
                    <div className="filter col-lg-12 justify-content-center mb-0">
                        <form  action="" className="justify-content-center">
                            <div className="search-bar col-12">
                                <i className="bi bi-search"></i>
                                <input type="text" className="col-12" placeholder="Например: Роберт Дауни Младший" onChange={handleChange} value={value} />
                            </div>
                        </form>
                    </div>
                    <div className="search-params col-lg-12 d-lg-flex d-sm-block justify-content-center mb-4">
                        { sections.map((m,index)=>{
                            return ( <Section key={index} onClick={() => setLink(index)} name={m.name} count={m.countItems} type={ link === index && 'active'}  /> )
                        }) }
                    </div>
                    { isFetching ?
                    <Preloader /> 
                    :
                    <div className="list-item col-lg-12">
                        <div className="row">
                            { sections[link].items.map((item)=>( <BigItem key={item.id} type={item.media_type}  {...item} />  )) }
                        </div>
                    </div>
                    }
                    <Pagination page={page} pages={pages} onPageChanged={(page) => setPage(page)} />
                </div>
            </div>
        </div>
    )
}

export default MultiSearch
