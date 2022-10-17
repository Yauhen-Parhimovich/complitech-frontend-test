import React from 'react';
import {TableCell, TableRow, Typography} from '@mui/material';
import {ListPeopleItemProps} from './ListPeopleItem.props';
import Photo from '../Photo/Photo';

const ListPeopleItem: React.FC<ListPeopleItemProps> = ({person}) => {

	return (
		<TableRow key={person.id}>
			<TableCell>
				<Photo
					image_ref={person.image_ref}
				/>
			</TableCell>

			<TableCell>
				{person.name
					? <Typography
						variant="subtitle2"
						paragraph={false}
						component={'span'}
					>
						{person.name + ' '}
					</Typography>
					: null
				}
				{person.midname
					? <Typography
						variant="subtitle2"
						paragraph={false}
						component={'span'}
					>
						{person.midname + ' '}
					</Typography>
					: null
				}
				{person.surname
					? <Typography
						variant="subtitle2"
						paragraph={false}
						component={'span'}
					>
						{person.surname + ' '}
					</Typography>
					: null
				}
			</TableCell>
		</TableRow>

	);
};

export default ListPeopleItem;
