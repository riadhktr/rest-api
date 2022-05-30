import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router'
import {deleteProduct} from '../api/product'
import '../style/cardStyle.css'

const ProductCard = ({product,getProduct}) => {
  let navigate = useNavigate()

  const navigateProduct=()=>{
   navigate(`/updateProduct/${product._id}`)
  }
  const navigateDesc=()=>{
    navigate(`/description/${product._id}`)
   }

  const handelRemove =async()=>{
    await deleteProduct(product._id);
    getProduct();
   }

  return (
    <div >
    <Card style={{ width: '19rem' }}>
    <Card.Img variant="top" src={product.image} alt="product_pic"/>
    <Card.Body>
    <div className='title'>
    <Card.Title>{product.name}</Card.Title>
    <Button variant="light" onClick={()=>navigateDesc()}>see more .. </Button>
    </div>
    
    <Card.Text> <strong>Stock:</strong> {product.quantity}</Card.Text>
    <Card.Text> <strong>Price :</strong>  {product.price} $</Card.Text>
    <div className='buttons'>
    <Button variant="light" onClick={()=>navigateProduct()}>Update</Button>
    <Button variant="danger" onClick={async()=> handelRemove()}>Delete</Button>
    </div>
    
  </Card.Body>
</Card>
    </div>
  )
}

export default ProductCard