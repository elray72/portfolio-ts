import * as React from 'react';
import './_work.scss';

import Image from '../../../../components/atoms/Image';
import Video from '../../../../components/atoms/Video';
import Tile from '../../../../components/molecules/Tile';
import TileSide from '../../../../components/molecules/Tile/TileSide';

interface IProps {
	tags?: string;
	listens?: string;
	transition?: string;
}

const WorkTile: React.FC<IProps> = (props) => {
	return (
		<Tile {...props} emits="toggle:furphy">
			<TileSide side="front" bgColor="#fefce1">
				<Image src="/static/img/clients/furphy.png" title="Furhpy" auto="height"/>
			</TileSide>
			<TileSide side="back">
				<Video
					className="tile__bg video--background"
					src="/static/video/stubby.mp4"
					poster="/static/video/stubby.jpg"
					autoPlay={false}
					loop={false}
					muted={true}
					preload="auto"
					listens="toggle:furphy"
				/>
			</TileSide>
		</Tile>
	);
};

export default WorkTile;
