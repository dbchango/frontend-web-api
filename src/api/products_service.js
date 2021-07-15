import axios from 'axios';
import authHeader from './auth_header';

const API_URL = 'https://webapiingseg.azurewebsites.net/api/Products';

class ProductsService {
    getProducts(){
        return axios.get(API_URL, { headers, authHeader() });
    }
}

export default productsService;