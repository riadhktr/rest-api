import React, { useState } from 'react'
import ProductCard from './ProductCard'

import { fetchProducts } from '../api/product'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import { setProduct } from '../store/ProductSlice'
import '../style/listStyle.css'
const ProductList = () => {

  const dispatch = useDispatch()
  const Products = useSelector(state=>state.product)
  const [selected,setSelected] = useState('All')
  
  
  
  const getProduct = async()=>{
    const data = await fetchProducts()
   
    dispatch(setProduct(data.ProductList))
   
   
  }
  useEffect(()=>{
    getProduct()
  })
  
  
  return (
<div className='main'>
<div className='selection'>
   
    <label><strong>Marque :</strong></label>
    <select onChange={(e)=>setSelected(e.target.value)}> 
    <option>All</option>
    <option>Hp</option>
    <option>Dell</option>
    <option>Sony</option>
    <option>Asus</option>
    </select>
    
    

    </div>
    <div className='list' >
   
    {(selected !== 'All' ) ?  Products.filter(el=> el.name === selected).map((ele)=>(<ProductCard product={ele} getProduct ={getProduct} />))
   : Products.map((ele)=>(<ProductCard product={ele} getProduct ={getProduct} />)) }
    
    
</div>

</div>

  )
}

export default ProductList