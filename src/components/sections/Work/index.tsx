import * as React from 'react';
import classNames from 'classnames';
import './_work.scss';

import Image from '../../atoms/Image';
import Tile from '../../molecules/Tile';
import TileSide from '../../molecules/Tile/TileSide';
import Shuffler from '../../organisms/Shuffler';

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
					<p className="work__header-desc">
						Some of my favourite projects categorized by tech.
					</p>
				</div>
				<Shuffler className="work__shuffler" name="work_shuffler">
					<Tile tags="JS|React" flip={true}>
						<TileSide side="front">
							<Image src="/static/img/clients/darwin-intelligence.svg" title="Darwin Intelligence" />
						</TileSide>
						<TileSide side="back">
							React other
						</TileSide>
					</Tile>
					<Tile tags="JS|React|.NET" flip={true}>
						<TileSide side="front">
							<Image src="/static/img/clients/n-logo.svg" title="i30N" />
						</TileSide>
						<TileSide side="back">
							React other
						</TileSide>
					</Tile>
					<Tile tags="jQuery|.NET" flip={true}>
						<TileSide side="front">
							<Image src="/static/img/clients/charter-hall.svg" title="Charter Hall" />
						</TileSide>
						<TileSide side="back">
							React other
						</TileSide>
					</Tile>
					<Tile tags="JS|React">
						<TileSide side="front">
							<Image src="/static/img/clients/furphy.png" title="Furhpy" auto="height" />
						</TileSide>
						<TileSide side="back">
							React other
						</TileSide>
					</Tile>
					<Tile tags="JS">
						<TileSide side="front">
							<Image src="/static/img/clients/startrack.svg" title="StarTrack" />
						</TileSide>
						<TileSide side="back">
							React other
						</TileSide>
					</Tile>
					<Tile tags="JS|React">
						<TileSide side="front">
							<Image src="/static/img/clients/hyundai.svg" title="Hyundai" padding={32} />
						</TileSide>
						<TileSide side="back">
							React other
						</TileSide>
					</Tile>
				</Shuffler>
			</div>
		</div>
	);
};

export default Skills;
