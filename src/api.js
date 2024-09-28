import Cookies from 'js-cookie'
import axios from 'axios'

export const $axios = axios.create({
  baseUrl: '/api',
  headers: {
    'Content-type': 'application.json',
    Authorization: `Bearer ${Cookies.get('uni')}`
  }
})