import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'


const productSlice = createSlice({
    name: 'product',
    initialState : [{}],
    reducers:{
 addProduct:(state,action)=>{
const newProduct={
    id:uuidv4(),
    ...action.payload
}
return [...state,newProduct]

 },

 setProduct:(state,action)=>{
     return action.payload
 }
,
 
    }
})

export const {setProduct,addProduct}= productSlice.actions;
export default productSlice.reducer