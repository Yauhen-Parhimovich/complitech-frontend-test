import React from 'react';
import {PaginationProps} from './Pagination.props';
import {Pagination} from '@mui/material';

const listPagination: React.FC<PaginationProps> = ({count, changePage}) => {
	return (
		<Pagination
			count={count}
			onChange={(event, page) => changePage(event, page)}
		/>
	);
};

export default listPagination;
