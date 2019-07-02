import React from 'react';
import classNames from 'classnames';
import MixItUp from 'mixitup';
import mixitupConfig from './mixitupConfig';
import './_shuffler.scss';
import Filter from './Filter';

interface IProps {
	children: React.ReactElement[];
	className?: string;
	name: string;
}

const Shuffler: React.FC<IProps> = (props) => {
	const shufflerRef = React.useRef<HTMLUListElement>(null);
	const mixitupRef = React.useRef<typeof MixItUp>(null);

	React.useEffect(() => {
		mixitupRef.current = MixItUp(shufflerRef.current, mixitupConfig);
	});

	const handleFilterClick = (e: React.MouseEvent<HTMLInputElement>) => {
		const filterValue = (e.target as HTMLInputElement).value;
		mixitupRef.current.filter(`[data-tag*="${filterValue}"]`);
	};

	const handleAllClick = () => {
		mixitupRef.current.filter('.shuffler__list-item');
	};

	const componentClass = classNames(props.className, 'shuffler');

	let k = 1;
	return (
		<div className={componentClass}>
			<Filter
				items={props.children}
				mixitup={mixitupRef.current}
				name={props.name}
				handleFilterClick={handleFilterClick}
				handleAllClick={handleAllClick}
			/>
			<ul className="shuffler__list" ref={shufflerRef}>
				{(props.children || []).map((n: React.ReactElement) => (
					<li className={`shuffler__list-item`} data-tag={n.props.tags} key={`${props.name}_item_${k++}`}>
						{n}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Shuffler;
