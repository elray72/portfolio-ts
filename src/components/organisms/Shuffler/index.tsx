import * as React from 'react';
import './_shuffler.scss';

interface IProps {
	shufflerRef: any,
	children: React.ReactElement[];
}

const Shuffler: React.FC<IProps> = (props) => {
	let k = 1;
	return (
		<ul className="grid__shuffle" ref={props.shufflerRef}>
			{(props.children || []).map((n: React.ReactElement) => (
				<li className={`grid__item mix`} data-tag={n.props.tags} key={`grid_item_${k++}`}>
					{n}
				</li>
			))}
		</ul>
	);
};

export default Shuffler;
