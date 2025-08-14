"use client"

import React, { useContext, useEffect, useRef } from 'react';
import "./search.scss";
import { Context } from '@/context/context';

const Search = () => {
    const inpRef = useRef(null)
    const { isModal, setIsModal } = useContext(Context);

    const keys = [
        {
            id: 1,
            title: "chaewon",
        },
        {
            id: 2,
            title: "chaewon and karina",
        }
    ]

    const handleClear = () => {
        if (inpRef) {
            setIsModal(false);
            inpRef.current.value = ""
        }
    }

    useEffect(() => {
        if(isModal && inpRef.current) {
            inpRef.current.focus();
        }
    }, [isModal])

    return (
        <div className='hScS'>
            <form action="">
                <svg aria-label="Значок поиска" className="BNH gUZ U9O kVc" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M10 16a6 6 0 1 1 .02-12.01A6 6 0 0 1 10 16m13.13 2.88L21 16.75l-2.13-2.13a10 10 0 1 0-4.24 4.24L16.75 21l2.13 2.13a3 3 0 0 0 4.25 0 3 3 0 0 0 0-4.24"></path></svg>
                <input type="text" placeholder='Search' onClick={() => setIsModal(true)}/>
            </form>
            {
                isModal && <div className="modal-shap"></div>
            }
            {
                isModal && (
                    <div className="modal">
                        <input type="text" ref={inpRef} placeholder='Search' />
                        <div className='del' onClick={handleClear}>
                            <svg aria-hidden="true" aria-label="" className="Uvi gUZ U9O kVc" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M15.18 16.95 12 13.77l-3.18 3.18a1.25 1.25 0 0 1-1.77-1.77L10.23 12 7.05 8.82a1.25 1.25 0 0 1 1.77-1.77L12 10.23l3.18-3.18a1.25 1.25 0 1 1 1.77 1.77L13.77 12l3.18 3.18a1.25 1.25 0 0 1-1.77 1.77M24 12a12 12 0 1 0-24 0 12 12 0 0 0 24 0"></path></svg>
                        </div>
                        <div className="for-white"></div>
                        <div className="suggest-history">
                            <div className="history">
                                <p id='last-s'>Recent searches</p>
                                <div className="searched">
                                    {
                                        keys.map((tit, key) => (
                                            <div className="search-tag" key={key}>
                                                <p>{tit.title}</p>
                                                <span>
                                                    <svg aria-hidden="true" aria-label="" className="Uvi gUZ U9O kVc" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="m15.18 12 7.16-7.16a2.25 2.25 0 1 0-3.18-3.18L12 8.82 4.84 1.66a2.25 2.25 0 1 0-3.18 3.18L8.82 12l-7.16 7.16a2.25 2.25 0 1 0 3.18 3.18L12 15.18l7.16 7.16a2.24 2.24 0 0 0 3.18 0c.88-.88.88-2.3 0-3.18z"></path></svg>
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Search