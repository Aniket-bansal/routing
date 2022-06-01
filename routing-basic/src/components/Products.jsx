import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import './Product.css'
const Products = () => {
    const[product,setProduct] = useState([]);
      
    useEffect(()=>{
        const fecthProducts=async ()=>{
          let r= await fetch("http://localhost:8080/products")
          let d = await r.json()
          setProduct(d)
        };
        fecthProducts();
    },[]);
    
  return (
    <div><h1>Products:{""}</h1>
    <div className="product-anchor">
        {product.map((p)=>(
              <div className="links">
                <Link to={`/products/${p.id}`} key={p.id}>{p.name}</Link> 
              </div>// here both the id and name are passed as an parameter but in app.js which ever is placed first takes the precedence.
        ))}
    </div>
    </div>
  );
};

export default Products