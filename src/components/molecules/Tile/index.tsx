import * as React from 'react';
import classNames from 'classnames';
import './_tile.scss';

interface IProps {
	className?: string,
	children?: React.ReactNode,
	tags?: string | string[],
}

const Tile : React.FC<IProps> = (props) => {

	const componentClass = classNames(props.className, 'tile');

	return (
		<div className={componentClass} data-tags={props.tags}>
			<div className="tile__inner">
				{props.children}
			</div>
		</div>
	);
};

export default Tile;
