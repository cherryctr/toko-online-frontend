//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    // baseURL: 'http://localhost:8000/api'
    baseURL: 'https://adminshop.punyaasset.com/api'
})

export default Api