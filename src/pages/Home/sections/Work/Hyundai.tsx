import * as React from 'react';
import './_work.scss';

import Image from '../../../../components/atoms/Image';
import Tile from '../../../../components/molecules/Tile';
import TileSide from '../../../../components/molecules/Tile/TileSide';

interface IProps {
	tags?: string;
	listens?: string;
	transition?: string;
}

const WorkTile: React.FC<IProps> = (props) => {
	return (
		<Tile {...props}>
			<TileSide side="front" bgColor="#e4dcd3">
				<Image src="/static/img/clients/hyundai.svg" title="Hyundai" padding={24} auto="height" />
			</TileSide>
			<TileSide side="back">React other</TileSide>
		</Tile>
	);
};

export default WorkTile;
