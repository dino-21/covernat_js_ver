import React from "react";
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap'

const Products = (props) => {
    let navigate = useNavigate();
    return (
        <div className="main_itembox">
            <Nav.Link onClick={() => {navigate('/detail/'+ props.i) }} className="c1" >
                <img src={props.item1.product_img} width="270px" />
                <h4>{props.item1.title}</h4>
                <div className="main_textbox">
                    <p className="price">{props.item1.price}</p>
                    <p className="sale_price">{props.item1.sale_price}</p>
                    <p className="discount">{props.item1.discount}</p>
                </div>
        </Nav.Link>
        </div>
    );
};

export default Products;