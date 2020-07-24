import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://flowrspot-api.herokuapp.com'
});

export default instance;