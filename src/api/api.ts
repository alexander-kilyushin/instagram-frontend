import axios from 'axios'

export const instance = axios.create({
	// baseURL: 'https://oaiyui-instbackend.herokuapp.com/api/'
	baseURL: 'http://localhost:8000/api/',
})