import * as React from 'react';
import classNames from 'classnames';
import './_hamburger.scss';

interface IProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const Hamburger: React.FC<IProps> = (props) => {

	const [expanded, setExpanded] = React.useState(false);

	const componentClass = classNames({
		hamburger: true,
		'hamburger--expanded': expanded,
	});

	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		props.onClick(e);
		setExpanded(expanded => !expanded);
	};

	return (
		<button type="button" className={componentClass} onClick={handleOnClick}>
			<span className="hamburger__bar"/>
			<span className="hamburger__bar"/>
			<span className="hamburger__bar"/>
		</button>
	);
};


export default Hamburger;
