import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound';
import './Product.css'
const Product = () => {
    const[products,setProducts] = useState({});
    const{id} = useParams();

    useEffect(()=>{
        if(id){
           let a = fetch(`http://localhost:8080/products/${id}`)
            .then((r)=>r.json())
            .then((d)=>setProducts(d));
          
        };
        
    },[id]);
    
  return (
    <div><h1>Product ID : {id}</h1>
    <div><h2>Name:{products.name}</h2></div>
    <div><h2>Price:{products.price}</h2></div>
    </div>
  )
}

export default Product;