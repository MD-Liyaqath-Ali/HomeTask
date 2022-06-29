import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Img from './assets/images/image.jpg'
import './assets/styles/style.sass'
export default () => {
    return (
        <div className='container'> 
                <h1 id='first-heading'>Webpack and Babel</h1>
                <Component1 />
                <Component2 />
                <Component3 />
            <img src={Img} />
        </div>
    )
}