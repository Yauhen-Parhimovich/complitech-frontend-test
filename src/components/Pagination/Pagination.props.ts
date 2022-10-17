import {ChangeEvent} from 'react';

export interface PaginationProps {
	count: number;

	changePage (event: ChangeEvent<unknown>, page: number): void;
}
