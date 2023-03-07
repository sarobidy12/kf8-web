import React, { FC } from "react";
import './style.css';

interface IContent {
    img: any;
    p: string;
    h3: string;
    
}

const Content: FC<IContent> = ({
    img, p, h3
}) => {
    return (

        <div className="btn-down-content">

            <div className="content-img-down">
                <img src={img} alt="Dowload" className="img-dowload" />
            </div>

            <div>
                <p>
                    {p || ""}
                </p>
                <h3>
                    {h3 || ""}
                </h3>
            </div>
            
        </div>

    )
}

export default Content;

