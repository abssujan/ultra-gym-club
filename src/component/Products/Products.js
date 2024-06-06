import React from 'react';
import './Products.css'
const Products = (props) => {
    console.log(props.product)
    const {img, age, time, name} = props.product
    return (
        <div className='card'> 
            <div className='image-box'>
            <img className='image' src={img} alt="" />
            </div>
            <p className='name'> {name}</p>
            <p className='p-tag'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, magnam? Aperiam illo natus nisi fugiat iste ullam? Beatae, est nulla.</p>
            <p className='age'>For age: {age}</p>
            <p className='age'>Time required: {time}</p>
            <button className='btn'>Add To list</button>
        </div>
    );
};

export default Products;