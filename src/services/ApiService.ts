import {Buffer} from 'buffer';
import $api from '../http';
import {API} from '../CONST/CONST';
import {ResponsePeople} from '../models/responsePeople';

export default class ApiService {

	static async fetchData () {
		try {
			return await $api.get<ResponsePeople>(API.GET_ALL_PEOPLE);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Ошибка при загрузке данных');
			}
		}
	}

	static async fetchImage (url: string) {

		const response = await $api.get(url, {
			responseType: 'arraybuffer'
		});

		const imageBuffer = new Buffer(response.data).toString('base64');
		return `data:image/bmp;base64,${imageBuffer}`;
	}
}
