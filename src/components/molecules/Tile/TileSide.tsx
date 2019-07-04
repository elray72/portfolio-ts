import * as React from 'react';
import classNames from 'classnames';
import './_tile.scss';

interface IProps {
	active?: boolean;
	className?: string;
	children?: React.ReactNode;
	side?: string;
}

const TileSide: React.FC<IProps> = (props) => {

	const componentClass = classNames(
		props.className,
		'tile__side',
		`tile__side-${props.side}`,
	);

	return (
		<div className={componentClass}>
			{props.children}
		</div>
	);
};

export default TileSide;
