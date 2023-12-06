import React from "react";


const SubSlider = (props) => {
    return (
        <div className="main_itembox">
                <img src={"/img/" + props.i + ".jpg"} width="80%" alt={`Shoes ${props.i}`} />
        </div>
    );
};

export default SubSlider;