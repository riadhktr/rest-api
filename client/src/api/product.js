import axios from 'axios'


export const fetchProducts =async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_URL}/read`) 
    return data
}


export const postProduct=async(value)=>{
    const addProduct = await axios.post(`${process.env.REACT_APP_URL}/add`,{...value})
}


export const updateProduit = async(id,value)=>{
    const updatedProduct = await axios.put(`${process.env.REACT_APP_URL}/update/${id}`,value)
}

export const GetById = async(id,value)=>{
    const {data} = await axios.get( `${process.env.REACT_APP_URL}/Product/${id}`,value)
    return data
}

export const deleteProduct = async(id)=>{
    const removedProd = await axios.delete( `${process.env.REACT_APP_URL}/delete/${id}`)
}