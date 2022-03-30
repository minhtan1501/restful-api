import Products from "../models/productModel"
const productsController ={
    getProducts: async(req, res, next) =>{
        try {
            const response = await Products.find({});
            
            res.status(200).json(response)
        }
        catch (err) {
            res.status(500).json({message: err.message})
        }
    },
    getProduct: async(req, res, next) =>{
        try{
            const product = await Products.findById(req.params.id);
            
            if(!product) return res.status(404).json({message:"This products does not exist."});
            
            return res.status(200).json(product);
        }catch(err) {
            res.status(404).json({error:err})

        }
    },
    addProduct: async(req, res, next) =>{
        try{
            const {title,price,description,category ,image} = req.body; 
            console.log(req.body);
            const newProduct = new Products(req.body);

            await newProduct.save();

            return res.status(200).json(newProduct);
        }
        catch (err) {
            res.status(404).json({error:err})
        }
    },
    updateProduct: async(req, res, next) =>{
        try{
            const {title,price,description,category ,image} = req.body;

            const product = await Products.findByIdAndUpdate(req.params.id,{
                title,price,description,category ,image
            },{new: true})
            if(!product) return res.status(404).json({msg:"This products does not exist."});
            
            return res.status(200).json({msg:"Product updated successfully."});
        }catch (err) {
            res.status(404).json({error:err})
        }


    },
    deleteProduct: async(req, res, next) =>{
        try{
            const product = await Products.findByIdAndDelete(req.params.id)
            if(!product) return res.status(404).json({msg:"This products does not exist."});
            
            return res.status(200).json({msg:"Delete Successfully."});
        }catch (err) {
            res.status(404).json({error:err})
        }
    }
}

export default productsController