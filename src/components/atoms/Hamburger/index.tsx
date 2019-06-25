import * as React from 'react';
import './_hamburger.scss';

interface IProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const Hamburger: React.FC<IProps> = (props) => (
	<button type="button" className="hamburger" onClick={props.onClick}>
		<span className="hamburger__label">Menu</span>
	</button>
);



export default Hamburger;
