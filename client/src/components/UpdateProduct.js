import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate} from 'react-router'
import { GetById, updateProduit } from '../api/product'
import {Button} from 'react-bootstrap'
import '../style/formStyle.css'

const UpdateProduct = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [name,setName]= useState('')
  const [quantity,setQuantity]=useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState('')

  const getProductById=async(productId)=>{

 const data = await GetById(productId)
 setName(data.GetProduct.name)
 setQuantity(data.GetProduct.quantity)
 setPrice(data.GetProduct.price)
 setImage(data.GetProduct.image)
}

useEffect(()=>{
if(id){
  getProductById(id)
} 
},[id])



  

const handelSubmit = async(idProduct,value)=>{
  await updateProduit(idProduct,value)
  navigate('/products')
}

  return (
    <div className='formulaire'>
    <label>Name :</label>
    <input type="text"
    value={name}
    onChange={(event)=>setName(event.target.value)}/>
  
    <label>Quantity :</label>
    <input type='number'
    value={quantity}
    onChange={(event)=>setQuantity(event.target.value)}/>
  
    <label>Price :</label>
    <input type="text"
    value={price}
    onChange={(event)=>setPrice(event.target.value)}/>
    <label>Picture :</label>
    <input type="url"
    value={image}
    onChange={(event)=>setImage(event.target.value)}/>
    <Button variant='dark' onClick={()=>handelSubmit(id,{name,quantity,price,image})}>submit :</Button>
  </div>
  )
}

export default UpdateProduct