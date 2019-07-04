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
	const [active, setActive] = React.useState(props.active);

	const componentClass = classNames(
		props.className,
		'tile__side',
		`tile__side-${props.side}`,
		//{'tile__side--active': active}
	);

	return (
		<div className={componentClass}>
			{props.children}
		</div>
	);
};

export default TileSide;
