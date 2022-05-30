const ProductSchema = require('../model/Product')


    exports.GetProduct = async(req,res)=>{
    try{
    const ProductList =  await ProductSchema.find()

    res.status(200).send({msg: "list of Products",ProductList})
    }catch(err){
    res.status(500).send("can not find any product")
    }
    }


    exports.AddProduct = async(req,res)=>{
    //const name = req.body.name;
    //const quantity = req.body.quantity;
    //const price = req.body.price;
   
    const NewProduct =  new ProductSchema(/*{name: name, quantity: quantity, price: price}*/ req.body)

    try{
    await NewProduct.save()
    res.status(200).send({msg: "product added ",NewProduct })
        }catch(err){
            res.status(500).send({msg: "can not add the new product"})
        }
    }

    exports.DeleteProduct = async(req,res)=>{

        const {id} = req.params
          
        try{
           
            const delProduct= await  ProductSchema.findByIdAndDelete(id)
           
            res.status(200).send({msg: "product removed with sucess "})
                }catch(err){
                   res.status(500).send({msg: "can not remove the new product"})
                }
    }


    exports.UpdateProduct = async(req,res)=>{

        try{
            const {id} = req.params ; 
    
            /*  .findByIdAndUpdate(id) will give us the user with the specific id  in our database then update it */
    
            const UpdateProduct = await ProductSchema.findByIdAndUpdate(id ,{$set:{...req.body}})
    
            /* our request will be succesfull and the response will have a succesfull status(200) */
            
            res.status(200).send({message:`${UpdateProduct.name} updated`,UpdateProduct})
            }
            /* if we can't find or update the contact or there is a syntaxe mistake this error message will be displayed */
            catch(err){
             res.status(500).send("can not update the product")
        
            }
    }
    
    exports.GetProductById = async(req,res)=>{
    
        
    
        try{
            const id =req.params.id;
        /*  .findById(id) will give us the product with the specific id  in our database  */

        const GetProduct = await ProductSchema.findById(id)

        /* our request will be succesfull (product exist in the database ) and the response will have a succesfull status(200) then diplay the product */
       
        res.status(200).send({message:"Product finded",GetProduct})

        }catch(err){

        /* if we can't find  the product or there is a syntaxe mistake this error message will be displayed */

         res.status(500).send("can not find the product")
    
        }
}



