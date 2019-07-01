import React from 'react';
import classNames from 'classnames';

import './_tile.scss';
interface IProps {
	className?: string,
	tags: string | string[],
}

const Tile : React.FC<IProps> = (props) => {

	const getTags = (tags: string| string[]) => {

		// const
		//
		// if (typeof tags === 'string') {
		//
		// }
		// else if () {
		//
		// }

		return [""];
	};

	const colourClasses = getTags(props.tags);
	const componentClass = classNames(props.className, 'tile', ...colourClasses);

	return (
		<div className={componentClass} data-tags={props.tags}>
			<h2>{props.tags}</h2>
		</div>
	);
};

export default Tile;
