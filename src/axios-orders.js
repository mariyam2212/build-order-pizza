import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-build-pizza.firebaseio.com/'
});

export default instance;