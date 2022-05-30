import React ,{useEffect,useState} from 'react'
import { useParams ,useNavigate} from 'react-router'
import { GetById } from '../api/product'

import '../style/description.css'

const Description = () => {

    const [product,setProduct] = useState('')
    const {id} = useParams ()
    let navigate = useNavigate()
    
    const getProductById=async(productId)=>{

    const data = await GetById(productId)
       setProduct(data.GetProduct)
    }
    
useEffect(()=>{
    
 if(id){
          getProductById(id)
        } 
        },[id])
        

  return (
    <div >
    <div className='description'>
    <button onClick={()=>navigate('/products')}><strong>Back to home page</strong></button>
    </div>
        
    <div className='picture'>
    <h1>{product.name}</h1>
    <img src={product.image} alt="prod_pic"/>
    
            
    </div>
    <div className='feature'>
    <strong>Processor :</strong>  {product.processor}
    <strong>Memory :</strong>   {product.memory} GB
    <strong>stockage" :</strong>   {product.stockage} GB
    </div>
        
    </div>
  )
}

export default Description