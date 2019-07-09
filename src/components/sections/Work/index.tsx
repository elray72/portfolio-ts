import * as React from 'react';
import classNames from 'classnames';
import './_work.scss';

import Image from '../../atoms/Image';
import Tile from '../../molecules/Tile';
import TileSide from '../../molecules/Tile/TileSide';
import Shuffler from '../../organisms/Shuffler';
import Video from '../../atoms/Video';

interface IProps {
	className?: string;
}

const Skills: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'work');

	return (
		<div className={componentClass}>
			<div className="work__inner">
				<h2 className="work__header-title">Selected works</h2>
				<div className="work__header">
					<p className="work__header-desc">Some of my favourite projects categorized by tech.</p>
				</div>
				<Shuffler className="work__shuffler" name="work_shuffler">
					<Tile tags="JS|React" flip={true}>
						<TileSide side="front" bgColor="#3b4b6b">
							<Image src="/static/img/clients/darwin-intelligence.svg" title="Darwin Intelligence" />
						</TileSide>
						<TileSide side="back">React other</TileSide>
					</Tile>
					<Tile tags="JS|React" flip={true} emits="toggle:furphy">
						<TileSide side="front" bgColor="#fefce1">
							<Image src="/static/img/clients/furphy.png" title="Furhpy" auto="height" />
						</TileSide>
						<TileSide side="back">
							<Video
								src="/static/video/stubby.mp4"
								autoPlay={false}
								loop={false}
								muted={true}
								preload="auto"
								listens="toggle:furphy"
							/>
						</TileSide>
					</Tile>
					<Tile tags="JS|React|.NET" flip={true}>
						<TileSide side="front" bgColor="#aacae6">
							<Image src="/static/img/clients/n-logo.svg" title="i30N" />
						</TileSide>
						<TileSide side="back">React other</TileSide>
					</Tile>
					<Tile tags="jQuery|.NET" flip={true}>
						<TileSide side="front" bgColor="#006fb8">
							<Image src="/static/img/clients/charter-hall.svg" title="Charter Hall" />
						</TileSide>
						<TileSide side="back">React other</TileSide>
					</Tile>
					<Tile tags="JS|React" flip={true}>
						<TileSide side="front" bgColor="#e4dcd3">
							<Image src="/static/img/clients/hyundai.svg" title="Hyundai" padding={24} auto="height" />
						</TileSide>
						<TileSide side="back">React other</TileSide>
					</Tile>
					<Tile tags="JS" flip={true}>
						<TileSide side="front" bgColor="#f2f0ed">
							<Image src="/static/img/clients/startrack.svg" title="StarTrack" />
						</TileSide>
						<TileSide side="back" bgColor="#000">
							React other
						</TileSide>
					</Tile>
				</Shuffler>
			</div>
		</div>
	);
};

export default Skills;
