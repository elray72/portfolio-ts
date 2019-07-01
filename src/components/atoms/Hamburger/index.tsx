import * as React from 'react';
import classNames from 'classnames';
import './_hamburger.scss';

interface IProps {
	expanded?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Hamburger: React.FC<IProps> = (props) => {
	const [expanded, setExpanded] = React.useState(props.expanded);

	React.useLayoutEffect(() => {
		setExpanded(props.expanded);
	}, [props.expanded]);

	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (props.onClick) props.onClick(e);
		else setExpanded((expanded) => !expanded);
	};

	const componentClass = classNames({
		'hamburger': true,
		'hamburger--expanded': expanded,
	});

	return (
		<button type="button" className={componentClass} onClick={handleOnClick}>
			<span className="hamburger__bar" />
			<span className="hamburger__bar" />
			<span className="hamburger__bar" />
		</button>
	);
};

export default Hamburger;
