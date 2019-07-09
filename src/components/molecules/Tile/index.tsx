import * as React from 'react';
import { Events } from '../../../utils/helpers/events';
import classNames from 'classnames';
import './_tile.scss';

interface IProps {
	className?: string,
	emits?: string,
	flip?: boolean,
	children?: React.ReactNode | React.ReactElement[],
	tags?: string | string[],
}

const Tile : React.FC<IProps> = (props) => {

	const [flipped, setFlipped] = React.useState(false);

	React.useEffect(() => {
		if (props.emits) Events.dispatch(props.emits, flipped);
	}, [flipped, props.emits]);

	const handleOnClick = () => {
		if (props.flip) setFlipped((flipped) => !flipped);
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
