import * as React from 'react';
import './_work.scss';

import Image from '../../../../components/atoms/Image';
import Tile from '../../../../components/molecules/Tile';
import TileSide from '../../../../components/molecules/Tile/TileSide';

interface IProps {
	tags?: string;
	transition?: string;
}

const WorkTile: React.FC<IProps> = (props) => {
	return (
		<Tile {...props}>
			<TileSide side="front" bgColor="#3b4b6b">
				<Image src="/static/img/clients/darwin-intelligence.svg" title="Darwin Intelligence" />
			</TileSide>
			<TileSide side="back">React other</TileSide>
		</Tile>
	);
};

export default WorkTile;
