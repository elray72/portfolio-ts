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
			<TileSide side="front" bgColor="#006fb8">
				<Image src="/static/img/clients/charter-hall.svg" title="Charter Hall" />
			</TileSide>
			<TileSide side="back">React other</TileSide>
		</Tile>
	);
};

export default WorkTile;
