import React from 'react';
import classNames from 'classnames';
import MixItUp from "mixitup";
import './_shuffler.scss';
import Filter from './Filter';

interface IProps {
	children: React.ReactElement[];
	className?: string,
}

const Shuffler: React.FC<IProps> = (props) => {

	const shufflerRef = React.useRef<HTMLUListElement>(null);
	const mixitupRef = React.useRef<typeof MixItUp>(null);

	React.useEffect(() => {
		mixitupRef.current = MixItUp(shufflerRef.current);
	});

	const handleFilterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const filterValue = (e.target as HTMLButtonElement).value;
		mixitupRef.current.filter(`[data-tag*="${filterValue}"]`);
	};

	const handleAllClick = () => {
		mixitupRef.current.filter('.mix');
	};

	const componentClass = classNames(props.className);

	let k = 1;
	return (
		<div className={componentClass}>
			<Filter items={props.children}
							mixitup={mixitupRef.current}
							handleFilterClick={handleFilterClick}
							handleAllClick={handleAllClick} />
			<ul className="shuffler__list" ref={shufflerRef}>
				{(props.children || []).map((n: React.ReactElement) => (
					<li className={`shuffler__list-item mix`} data-tag={n.props.tags} key={`_item_${k++}`}>
						{n}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Shuffler;
