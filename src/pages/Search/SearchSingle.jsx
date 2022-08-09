import React, {useCallback, useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { useSearchItems } from './useSearchItems';
import Pagination from './../../components/Pagination';
import BigItem from './../../components/BigItem';
import MultiSelect from './MultiSelect';
import {Preloader} from './../../components/loader/index';


function SearchSingle() {

    const {type} = useParams();

    const [page,setPage] = useState(1);

    const {data,addCategory,removeCategory,getFilter,getItems} = useSearchItems(type);


    const handleAddCategory = useCallback(
        (cat) => {
            addCategory(cat)
            setPage(1);
        },
        [addCategory],
    )

    const handleRemoveCategory = useCallback(
        (cat) => {
            removeCategory(cat)
            setPage(1);
        },
        [removeCategory],
    )

    const getFilters = useCallback(
        (type) => {
            getFilter(type)
        },
        [getFilter],
    )

    useEffect(()=>{
        getItems(data.catItems,page)
    },[data.catItems,page,getItems])


    return (
        <>
        <div className="catalog mt-5">
            <div className="container">
                <div className="row text-center justify-content-center">
                    <h1>{ type === 'movie' ? 'Фильмы' : 'Сериалы' }</h1>
                    <div className="filter col-lg-10 d-lg-flex">
                    <MultiSelect
                    sections={data.catItems}  
                    addSection={handleAddCategory} 
                    removeSection={handleRemoveCategory} 
                    getFilter={getFilters} 
                    {...data.items}  />
                    </div>
                    <div className="list-item col-lg-12">
                        <div className="row">

                            { data.isFetching === false ? data.films.map((item)=>{ return (<BigItem key={item.id} type={type} {...item} />) }) : <Preloader /> }
                        </div>
                    </div>
                    <Pagination page={page} pages={data.pages} onPageChanged={(pg) => setPage(pg)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchSingle
