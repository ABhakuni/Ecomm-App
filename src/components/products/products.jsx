import * as React from 'react';
import data from '../../data';
import './products.css';

const Products = () => {
    return (
        <div className="grid_5">
            {data.map((val,ind) => {
                return (
                    <card className="product_card" style={{background: `url(${val.image})`, backgroundSize: `contain`}}>
                        <p>{val.title}</p>
                        <p>{val.price}</p>
                        <p>{val.category}</p>
                    </card>
                )
            })}
        </div>
    )
}

export default Products