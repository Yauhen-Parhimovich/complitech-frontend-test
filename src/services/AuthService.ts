import axios, {AxiosResponse} from 'axios';
import {ResponseToken} from '../models/responseToken';
import {API} from '../CONST/CONST';
import Base64 from 'base-64';

export default class AuthService {
	static async login (username: string, password: string): Promise<AxiosResponse<ResponseToken> | undefined> {
		try {
			return axios.get(process.env.REACT_APP_BASE_URL + API.LOGIN, {
				headers: {
					'Authorization': 'Basic ' + Base64.encode(`${username}:${password}`)
				}
			});
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Неверные логин или пароль');
			}
		}
	}
}
