import React, {useEffect, useMemo, useState} from 'react';
import {PeopleProps} from './People.props';
import {Grid, Typography} from '@mui/material';
import ListPeople from '../ListPeople/ListPeople';
import ListPagination from '../Pagination/Pagination';
import {IPerson} from '../../models/person';

const People: React.FC<PeopleProps> = ({people = [], contentPerPage, error}) => {

	const [data, setData] = useState<IPerson[]>([]);

	useEffect(() => {
		setData([...people.slice(0, contentPerPage)]);
	}, [people, contentPerPage]);

	const count = useMemo(() => {
		return Math.ceil(people.length / contentPerPage);
	}, [people, contentPerPage]);

	const changePage = (event: React.ChangeEvent<unknown>, page: number): void => {
		const lastIndex = page * contentPerPage;
		const firstIndex = lastIndex - contentPerPage;
		setData([...people.slice(firstIndex, lastIndex)]);
	};

	if (error) {
		return <Typography variant={'h4'}>{error}</Typography>;
	}

	return (
		<Grid
			maxWidth={'80%'}
			minHeight={'70%'}
			container
			flexDirection={'column'}
			justifyContent={'space-between'}
			alignItems={'center'}
		>
			{people.length
				? <ListPeople
					people={data}
				/>
				: <Typography>
					Данных не найдено
				</Typography>
			}
			<ListPagination
				count={count}
				changePage={changePage}
			/>
		</Grid>
	);
};

export default People;
