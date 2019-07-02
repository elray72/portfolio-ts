import React from 'react';
import MixItUp from 'mixitup';

interface IProps {
	items: React.ReactElement[];
	mixitup: typeof MixItUp;
	name: string;
	handleAllClick: (event: React.MouseEvent<HTMLInputElement>) => void;
	handleFilterClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export const Filter: React.FC<IProps> = (props) => {
	const options = props.items
		.map((n: React.ReactElement) => n.props.tags)
		.join()
		.split(/[\s,|]+/)
		.filter((v, i, a) => a.indexOf(v) === i);

	return (
		<div className="shuffler__filter">
			<label className="shuffler__filter-item" htmlFor={`${props.name}_filter_all`}>
				<input
					type="radio"
					id={`${props.name}_filter_all`}
					name={`${props.name}_filter`}
				/>
				<span>All</span>
			</label>
			{(options || []).map((o: string) => (
				<label className="shuffler__filter-item" htmlFor={`${props.name}_filter_${o}`} key={`shuffler_filter_${o}`}>
					<input
						type="radio"
						id={`${props.name}_filter_${o}`}
						name={`${props.name}_filter`}
						value={o}
						onClick={props.handleFilterClick}
					/>
					<span>{o}</span>
				</label>
			))}
		</div>
	);
};

export default Filter;
