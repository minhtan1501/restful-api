import express from 'express';
import {checkProductData} from "../middlewares/validate"
import productsController from '../controllers/productsController'
const productRoute = express.Router();


productRoute.get('/:id',productsController.getProduct)

productRoute.post('/',checkProductData,productsController.addProduct)

productRoute.put('/:id',checkProductData,productsController.updateProduct)

productRoute.delete('/:id',productsController.deleteProduct)

productRoute.get('/',productsController.getProducts)





export default productRoute