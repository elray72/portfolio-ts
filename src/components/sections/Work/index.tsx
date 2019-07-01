import * as React from 'react';
import MixItUp from 'mixitup';
import classNames from 'classnames';
import './_work.scss';

import Tile from '../../molecules/Tile';
import Shuffler from '../../organisms/Shuffler';
import Filter from '../../molecules/Filter';
import FilterOption from '../../molecules/FilterOption';

interface IProps {
	className?: string;
}

const Skills: React.FC<IProps> = (props) => {
	const shufflerRef = React.useRef<HTMLDivElement>(null);
	const mixItUpRef = React.useRef<typeof MixItUp>(null);

	React.useLayoutEffect(() => {
		mixItUpRef.current = MixItUp(shufflerRef.current);
	});

	const handleFilterClick = (e: React.MouseEvent<React.ReactElement>) => {
		const filterValue = (e.target as HTMLInputElement).value;
		mixItUpRef.current.filter(`[data-tag*="${filterValue}"]`);
	};

	const handleAllClick = () => {
		mixItUpRef.current.filter('.mix');
	};

	const componentClass = classNames(props.className, 'grid');

	return (
		<div className={componentClass}>
			<div className="grid__inner">
				<h1>Shuffler</h1>
				<Filter className="grid__filter">
					<FilterOption value="green" onClick={handleFilterClick} />
					<FilterOption value="red" onClick={handleFilterClick} />
					<FilterOption value="blue" onClick={handleFilterClick} />
					<FilterOption value="yellow" onClick={handleFilterClick} />
					<FilterOption value="all" onClick={handleAllClick} />
				</Filter>
				<Shuffler shufflerRef={shufflerRef}>
					<Tile tags="green, red" />
					<Tile tags="green" />
					<Tile tags="blue" />
					<Tile tags="green" />
					<Tile tags="yellow" />
					<Tile tags="red" />
					<Tile tags="green" />
					<Tile tags="blue" />
					<Tile tags="yellow" />
				</Shuffler>
			</div>
		</div>
	);
};

export default Skills;
