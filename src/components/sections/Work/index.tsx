import * as React from 'react';
import classNames from 'classnames';
import './_work.scss';

import Tile from '../../molecules/Tile';
import Shuffler from '../../organisms/Shuffler';

interface IProps {
	className?: string;
}

const Skills: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'work');

	return (
		<div className={componentClass}>
			<div className="work__inner">
				<div className="work__header">
					<h2 className="work__header-title">Selected works</h2>
					<p className="work__header-desc">
						Some of my favourite projects categorized by tech.
					</p>
				</div>
				<Shuffler className="work__shuffler" name="work_shuffler">
					<Tile tags="JS|React">
						Delos
					</Tile>
					<Tile tags="JS|React|.NET">
						i30n
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
