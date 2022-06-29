import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'
import { useEffect } from 'react';
import Books from './BuynowFromDecs'

const ProductDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
         }, [])
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    {/* Now we need a product id which is pass from the product page. */}
    const proid = useParams();
    const proDetail = DATA.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.img} alt={product.title}height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h3 className="display-10 fw-bold">{product.title}</h3>
                  
                    <h6 className="my-2"><b>Book Price:</b> ${product.price}</h6>
                    <h6 className="my-2"><b>Author Name:</b> {product.author}</h6>
                    <h6 className="my-2"><b>Page Count:</b> {product.pageCount}</h6>
                    <h6 className="my-2"><b>ISBN:</b> {product.Isbn}</h6>
                    <p className="lead">{product.desc}</p>
                    <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-1">{cartBtn}</button>
                    <Books value={product}/>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default ProductDetail
