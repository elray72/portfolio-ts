import * as React from 'react';
import classNames from 'classnames';
import './_tile.scss';

interface IProps {
	className?: string,
	flip?: boolean,
	children?: React.ReactNode | React.ReactElement[],
	tags?: string | string[],
}

const Tile : React.FC<IProps> = (props) => {
	const [flipped, setFlipped] = React.useState(props.flip);

	const handleOnClick = () => {
		if (props.flip) {
			setFlipped((flipped) => !flipped);
		}
	};

	const componentClass = classNames(
		props.className,
		'tile',
		{'tile--flip': props.flip},
		{'tile--flipped': flipped}
	);

	return (
		<div className={componentClass} data-tags={props.tags} onClick={handleOnClick}>
			<div className="tile__inner">
				{props.children}
			</div>
		</div>
	);
};

export default Tile;
