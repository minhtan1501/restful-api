
export const checkProductData = async(req,res,next) => {
    const error = [];
    
    for(const key in req.body){
        if(!req.body[key]){
            error.push(`Please add product ${key}`)
        }
    }
    
    if(error.length > 0){
        res.status(401).json(error);
    }
    else{
        next();
    }
}