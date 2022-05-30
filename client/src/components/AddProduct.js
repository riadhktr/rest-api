import React from 'react'
import { postProduct } from '../api/product'
import{useState} from 'react'
import { useNavigate } from 'react-router'
import{ Button} from 'react-bootstrap'
import '../style/formStyle.css'

const AddProduct = () => {
  let navigate = useNavigate()
  const [name,setName] = useState('')
  const [quantity,setQuantity] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState('')
  
  const handelAdd = async(value)=>{
   await postProduct(value)
   navigate('/products')
  }
  return (
    <div className='formulaire'>
      <label>Name :</label>
      <input type="text"
      onChange={e=>setName(e.target.value)}/>
      <label>Quantity :</label>
      <input type='number'
      onChange={e=>setQuantity(e.target.value)}/>
      <label>Price :</label>
      <input type="number"
      onChange={e=>setPrice(e.target.value)}/>
      <label>Picture :</label>
      <input type="url"
      onChange={e=>setImage(e.target.value)}/>
      <Button variant="dark" onClick={()=>handelAdd({name,quantity,price,image})}>submit :</Button>
      
    </div>
  )
}

export default AddProduct