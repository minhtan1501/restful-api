import productRoute from "./products";

function route(app) {
	
	app.use('/api/products', productRoute);
}

export default route