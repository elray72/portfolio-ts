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
					<Tile tags="Vanilla|React">
						Delos
					</Tile>
					<Tile tags="Vanilla|React|.NET">
						i30n
					</Tile>
					<Tile tags="jQuery|.NET">
						Charter Hall
					</Tile>
					<Tile tags="Vanilla|React">
						Furphy
					</Tile>
					<Tile tags="Vanilla">
						StarTrack
					</Tile>
					<Tile tags="Vanilla">
						Design my Hyundai
					</Tile>
				</Shuffler>
			</div>
		</div>
	);
};

export default Skills;
