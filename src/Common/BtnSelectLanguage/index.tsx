import React, { FC } from 'react';
import { listArray } from "../../Utils";
import './style.css';


interface IBtnSelectLanguage {
    languageSelected: string;
    handleChangeLanguage: (data: any) => void;
}

const BtnSelectLanguage: FC<IBtnSelectLanguage> = ({ handleChangeLanguage, languageSelected }) => {

    const handleOpen = () => {
        (document as any).getElementById("modal-select-language").style.height = "auto";
        (document as any).getElementById("content-close-select-language").style.display = "block";
    }

    const handleClose = () => {
        (document as any).getElementById("modal-select-language").style.height = "0";
        (document as any).getElementById("content-close-select-language").style.display = "none";
    }

    const setLanguage = (data: any) => (e: any) => {
        handleChangeLanguage(data);
        handleClose();
    }

    return (
        <div>
            <div>
                <img
                    src={listArray.find((x: any) => x.key === languageSelected)?.img}
                    alt="img-selected" className="img-selected-language"
                    onClick={handleOpen}
                />
            </div>

            <div className='content-language' id="modal-select-language">
                <div className='position-fixe-flex'>
                    {listArray.map((item: any) => <div className='select-language' onClick={setLanguage(item)}>
                        <div>
                            <img src={item.img} alt={item.key} className="img-select-language" />
                        </div>
                        <div>
                            <h1>
                                {item.label || ""}
                            </h1>
                        </div>
                    </div>)}
                </div>
            </div>

            <div
                className='content-close-select-language'
                id="content-close-select-language" onClick={handleClose}
            />

        </div>

    );
}

export default BtnSelectLanguage;