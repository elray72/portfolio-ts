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
						Please explore some of my favourite projects categorized by tech.
					</p>
				</div>
				<Shuffler className="work__shuffler">
					<Tile tags="vanill|react">
						Delos
					</Tile>
					<Tile tags="js|react|.net">
						Hyundai
					</Tile>
					<Tile tags="js|jquery|.net">
						Charter Hall
					</Tile>
					<Tile tags="js">
						Furphy
					</Tile>
					<Tile tags="vanilla">
						StarTrack
					</Tile>
				</Shuffler>
			</div>
		</div>
	);
};

export default Skills;
