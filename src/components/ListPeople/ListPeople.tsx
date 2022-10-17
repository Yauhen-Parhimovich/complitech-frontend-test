import React from 'react';
import {ListPeopleProps} from './ListPeople.props';
import {
	Box,
	Table,
	TableBody,
	TableContainer,
	Typography
} from '@mui/material';
import ListPeopleItem from '../ListPeopleItem/ListPeopleItem';

const ListPeople: React.FC<ListPeopleProps> = ({people}) => {

	return (
		<Box>
			<Typography variant={'h6'}>
				Список людей
			</Typography>
			<TableContainer>
				<Table>
					<TableBody>
						{people.map(person => <ListPeopleItem person={person} key={person.id}/>)}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>

	);
};

export default ListPeople;
