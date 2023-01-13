import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button } from '.';

function Pagination({page,pages,onPageChanged}) {

    let listPage = [];

    if (pages > 10) {
        if (page > 5) {
            for (let i = page-4; i <= page+5; i++) {
                listPage.push(i)
                if(i === pages) break
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                listPage.push(i)
                if(i === pages) break
            }
        }
    } else {
        for (let i = 1; i <= pages; i++) {
            listPage.push(i)
        }
    }

    const handlePageChanged = (p) => {
        if (pages > 1) {
            onPageChanged(p);
        }
    }

    return (
        <div className="pages">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="pagination col-lg-12 d-flex align-items-center justify-content-center">
                        <Button nav onClick={() => handlePageChanged(page-1)} ><FaArrowLeft /></Button>
                        <ul>
                           { listPage.map((p)=>{
                              return <li key={p} onClick={() => onPageChanged(p)} className={p === page ? 'active' : ''}>{p}</li>
                           }) }
                        </ul>
                        <Button nav onClick={() => handlePageChanged(page+1)} ><FaArrowRight /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination
