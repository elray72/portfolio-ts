import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_tile.scss';

interface IProps {
	className?: string,
	tags?: string,
};

const Tile : React.FC<IProps> = (props) => {
	const colourClass = `tile--${props.tags}`;
	const componentClass = classNames(props.className, 'tile', colourClass);

	return (
		<div className={componentClass}>
			<h2>{props.tags}</h2>
		</div>
	);
};

export default Tile;
