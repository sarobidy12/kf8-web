import React, { FC } from 'react';
import { listArray } from "../../Utils";
import './style.css';


interface IBtnSelectLanguage {
    handleOpen: () => void;
    languageSelected: string;
}

const BtnSelectLanguage: FC<IBtnSelectLanguage> = ({ handleOpen, languageSelected }) => {

    return (
        <div>
            <img
                src={listArray.find((x: any) => x.key === languageSelected)?.img}
                alt="img-selected" className="img-selected-language"
                onClick={handleOpen}
            />
        </div>
    );
}

export default BtnSelectLanguage;