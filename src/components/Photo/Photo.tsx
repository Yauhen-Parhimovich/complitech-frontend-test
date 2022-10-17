import React, {useEffect, useState} from 'react';
import ApiService from '../../services/ApiService';
import {Avatar} from '@mui/material';
import {PhotoProps} from './Photo.props';

const Photo: React.FC<PhotoProps> = ({image_ref}) => {

	const [image, setImage] = useState<string>();

	useEffect(() => {
		(async () => {
			const response = await ApiService.fetchImage(image_ref);
			setImage(response);
		})();
	}, [image_ref]);

	return (
		<Avatar
			src={image}
			alt='user photo'
			sx={{width: 80, height: 80}}
		/>
	);
};

export default Photo;
