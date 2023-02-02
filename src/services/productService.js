import axios from 'axios'

class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getAll")
    }
}

export default ProductService;