import * as React from 'react';
import classNames from 'classnames';
import './_tile.scss';

interface IProps {
	className?: string,
	clickable?: boolean,
	children?: React.ReactNode | React.ReactElement[],
	tags?: string | string[],
}

const TileSide : React.FC<IProps> = (props) => {

	const [flipped, setFlipped] = React.useState(false);

	const isFlippable = () => {
		const isTileSide = () => {
			return typeof (props.children as React.ReactElement[]).find((n: any) => {
				const {name} = n.type;
				return name === 'TileSide'
			}) === 'object';
		};
		return Array.isArray(props.children) && isTileSide();
	};

	const handleOnClick = () => {
		if (isFlippable()) {
			setFlipped((flipped) => !flipped);
		}
	};

	const componentClass = classNames(
		props.className,
		'tile',
		{'tile--flippable': isFlippable()},
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

export default TileSide;
