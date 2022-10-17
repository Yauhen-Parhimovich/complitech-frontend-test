import React from 'react';
import {MapProps} from './Map.props';
import {MapContainer, TileLayer, GeoJSON, ZoomControl} from 'react-leaflet';

const Map: React.FC<MapProps> = ({width, height, zoom, data}) => {
	return (
		<MapContainer
			center={[width, height]}
			zoom={zoom}
			zoomControl={false}
			style={{height: '100%', width: '100%'}}
		>
			{/*<TileLayer*/}
			{/*	attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'*/}
			{/*	url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'*/}
			{/*/>*/}
			<GeoJSON
				data={data}>
			</GeoJSON>
			<ZoomControl position='topright'/>
		</MapContainer>
	);
};

export default React.memo(Map);
