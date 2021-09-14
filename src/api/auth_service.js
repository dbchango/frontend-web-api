import axios from 'axios';
const API_URL = 'https://webapiingseg.azurewebsites.net/';

class AuthService {
    login(user){
        var body = {
            "grant_type": "password",
            "username": user.username,
            "password": user.password
        }
        
        var queryString = Object.keys(body).map(function (key){
            return key + '=' +body[key]
        }).join('&');

        return axios.post(API_URL + 'token', queryString, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(res => {
            if(res.data.access_token){
                localStorage.setItem('user', JSON.stringify(res.data))
            }
            return res.data;
        }).catch(err => console.warn(err.response))
    }
    logout(){
        localStorage.removeItem('user');
    }
    register(user){
        return axios.post(API_URL+'api/Account/Register', {
            "Email":user.username,
            "Password": user.password,
            "confirmPassword": user.confirmPassword, 
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
}

export default new AuthService();


