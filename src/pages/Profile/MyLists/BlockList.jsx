import React from 'react';
import LoaderBlockList from '../../../components/loader/LoaderBlockList';
import Button from './../../../components/Button';

function BlockList({name,id,deleteList,setVisibleBlock, getDetail,isFetching}) {

    const checkDetail = () => {
        getDetail(id);
        setVisibleBlock();
    }

    if (isFetching) {
        return ( <LoaderBlockList /> )
    }

    return (
        <>
            <div className="list col-lg-3 text-center">
                <div className="named d-flex align-items-center justify-content-center">
                    <span>{name}</span>
                </div>
                <div className="col-12">
                    <Button type="primary" onClick={checkDetail} >Посмотреть</Button>
                    <Button type="alternative" onClick={() => deleteList(id)} >Удалить</Button>
                </div>
            </div>
        </>
    )
}

export default BlockList
