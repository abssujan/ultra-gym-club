import React, { useEffect, useState } from 'react';
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Products from '../Products/Products';
const Main = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='main-container'>
            <div className='exercise-container '>
                <div className="main-exercise-container">
                    <div className="header">
                    <FontAwesomeIcon className='dumbbell-icon' icon={faDumbbell}></FontAwesomeIcon>
                    <h2>Ultra-Gym-Club</h2>
                    </div>
                    <div className="products-container">
                     <h4>Select today's exercise</h4>
                     <div className="products">
                        {
                            products.map(product => <Products product={product} key={product.key}></Products>)
                        }
                     </div>
                    </div>
                </div>

            </div>
            <div className="personal-information">
                <h3>Information</h3>
            </div>
        </div>
    );
};

export default Main;