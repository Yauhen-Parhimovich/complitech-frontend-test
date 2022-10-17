import React, {useEffect, useState} from 'react';
import {Grid} from '@mui/material';
import Map from './components/Map/Map';
import People from './components/People/People';
import data from './data/floor.json';
import {IPerson} from './models/person';
import AuthService from './services/AuthService';
import ApiService from './services/ApiService';
import Loading from './components/Loading/Loading';

const App: React.FC = () => {

	const [people, setPeople] = useState<IPerson[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState('');

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				const response = await AuthService.login(process.env.REACT_APP_USERNAME as string, process.env.REACT_APP_PASSWORD as string);
				if (response) {
					localStorage.setItem('token', response.data.access_token);
					const fetchingPeople = await ApiService.fetchData();
					if (fetchingPeople) {
						setPeople(fetchingPeople.data.data.people);
					}
				}
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<Grid
			container
			spacing={1}
			minHeight={'100vh'}
			overflow={'auto'}
		>
			<Grid
				xs={6}
				item={true}
				container
				justifyContent={'center'}
				alignItems={'center'}
			>
				{
					isLoading
						? <Loading/>
						: <People
							people={people}
							contentPerPage={3}
							error={error}
						/>
				}

			</Grid>

			<Grid
				xs={6}
				item={true}
			>
				<Map
					width={53.91712919154794}
					height={27.63486423374176}
					zoom={20}
					data={data}
				/>
			</Grid>
		</Grid>
	);
};

export default App;
