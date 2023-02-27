import React, { FC, useEffect, useState } from 'react';
import { listArray } from "../../Utils";
import './style.css';


interface ISelectLanguage {
    open: boolean;
    setLanguage: (data: any) => void;
}

const SelectLanguage: FC<ISelectLanguage> = ({
    open, setLanguage
}) => {

    useEffect(() => {
        if (open) {
            (document as any).getElementById('modal-select-language').style.display = 'block';
        } else {
            (document as any).getElementById('modal-select-language').style.display = 'none';
        }
    }, [open])

    const close = (data: string) => (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setLanguage(data);
    }

    return (
        <div className='position-fixe-content' id="modal-select-language">
            <div className='position-fixe-flex'>
                <div>
                    {listArray.map((item: any) => <div className='select-language' onClick={close(item)}>
                        <div>
                            <img src={item.img} alt={item.key} className="img-select-language" />
                        </div>
                        <div>
                            <h1>
                                {item.key || ""}
                            </h1>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default SelectLanguage;