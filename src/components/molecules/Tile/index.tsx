import * as React from 'react';
import { Events } from '../../../utils/helpers/events';
import classNames from 'classnames';
import './_tile.scss';

interface IProps {
	className?: string,
	children?: React.ReactNode | React.ReactElement[],
	emits?: string,
	listens?: string,
	transition?: string,
	tags?: string | string[],
}

const Tile : React.FC<IProps> = (props) => {

	const [active, setActive] = React.useState(false);

	if (props.listens) {
		Events.subscribe(props.listens, (isActive: boolean) => {
			if (props.transition) {
				setActive(isActive);
			}
		});
	}

	React.useEffect(() => {
		if (props.emits) Events.dispatch(props.emits, active);
	}, [active, props.emits]);

	const handleOnClick = () => {
		if (props.transition) setActive((active) => !active);
	};

	const transitionClass = props.transition ? `tile--${props.transition}` : null;
	const componentClass = classNames(
		props.className,
		'tile',
		transitionClass,
		{[`${transitionClass}-active`]: active},
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
