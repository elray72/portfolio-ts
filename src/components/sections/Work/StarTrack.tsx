import * as React from 'react';
import './_work.scss';

import Image from '../../atoms/Image';
import Tile from '../../molecules/Tile';
import TileSide from '../../molecules/Tile/TileSide';

interface IProps {
	tags?: string;
	listens?: string;
	transition?: string;
}

const WorkTile: React.FC<IProps> = (props) => {
	return (
		<Tile {...props}>
			<TileSide side="front" bgColor="#f2f0ed">
				<Image src="/static/img/clients/startrack.svg" title="StarTrack" />
			</TileSide>
			<TileSide side="back" bgColor="#000">
				React other
			</TileSide>
		</Tile>
	);
};

export default WorkTile;
