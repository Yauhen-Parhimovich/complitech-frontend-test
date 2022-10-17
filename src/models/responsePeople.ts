import {IPerson} from './person';

export interface ResponsePeople {
	data: {
		num_elems: number;
		num_pages: number;
		people: IPerson[];
	};
	status: string;
}
