import axios from 'axios'

export default axios.create({
  baseURL: process.env.production ? 'https://coffee-shop-back.herokuapp.com' : 'http://localhost:3000'
})
