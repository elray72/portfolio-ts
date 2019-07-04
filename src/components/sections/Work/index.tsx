import * as React from 'react';
import classNames from 'classnames';
import './_work.scss';

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
							React
						</TileSide>
						<TileSide side="back">
							React other
						</TileSide>
					</Tile>
					<Tile tags="JS|React|.NET">
						<div>
							i30n
						</div>
					</Tile>
					<Tile tags="jQuery|.NET">
						Charter Hall
					</Tile>
					<Tile tags="JS|React">
						Furphy
					</Tile>
					<Tile tags="JS">
						StarTrack
					</Tile>
					<Tile tags="JS|React">
						Design my Hyundai
					</Tile>
				</Shuffler>
			</div>
		</div>
	);
};

export default Skills;
