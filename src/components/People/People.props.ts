import {IPerson} from '../../models/person';

export interface PeopleProps {
	people?: IPerson[];
	contentPerPage: number;
	error?: string;
}
