import React from 'react';
import MixItUp from 'mixitup';

interface IProps {
	items: React.ReactElement[];
	mixitup: typeof MixItUp;
	handleAllClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	handleFilterClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Filter: React.FC<IProps> = (props) => {

	const options = props.items
		.map((n: React.ReactElement) => n.props.tags)
		.join()
		.split(/[\s,|]+/)
		.filter((v, i, a) => a.indexOf(v) === i);

	return (
		<div className="shuffler__filter">
			{(options || []).map((option: string) => (
				<button className="shuffler__filter-item"
								typeof="radio"
								value={option}
								key={`shuffler_filter_${option}`}
								onClick={props.handleFilterClick}>
					{option}
				</button>
			))}
			<button onClick={props.handleAllClick}>All</button>
		</div>
	);
};

export default Filter;
