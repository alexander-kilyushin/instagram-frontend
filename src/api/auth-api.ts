import { CurUser } from './../types/types';
// import { User } from '../types/types';
import { instance } from './api';


interface CurUserRes extends CurUser {
	token: string
}


export const authApi = {
	async requestAndSetToken(username: string, password: string) {

		try {
			const response = await instance.post<CurUserRes>('api-token-auth/', {username, password})
			localStorage.setItem('token', response.data.token)
			return response
		} catch (e) {
			return null
		}
	},



	// old
	// async getUserFromToken() {

	// },
	// async getUserData(authUsername: string) {
	// 	const response = await instance.get<User>(`users/${authUsername}/`)
	// 	return response.data
	// },
	// async updateUserData(avatar: File, bio: string, username: string) {
  //   const formData = new FormData()
  //   formData.append('bio', bio)
	// 	formData.append('avatar', avatar)
  //   await instance.put(
	// 		`${username}/`,
	// 		formData,
  //     {headers: {'content-type': 'multipart/form-data'}}
  //   )
	// },
	// async register(username: string, password: string) {
	// 	await instance.post('register/', {username, password})
	// },
	// async like(postId: number, userId: number) {
	// 	await instance.post(`posts/${postId}/like/`, {userId})
	// },
	// async follow(followedUserId: number, followerId: number) {
	// 	await instance.post('follow/', {followedUserId, followerId})
	// },
}