import React from 'react';
import MixItUp from 'mixitup';

interface IProps {
	items: React.ReactElement[];
	mixitup: typeof MixItUp;
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
			{(options || []).map((option: string) => (
				<label>
					<input
						type="radio"
						className="shuffler__filter-item"
						value={option}
						key={`shuffler_filter_${option}`}
						onClick={props.handleFilterClick}
					/>
				</label>
			))}
			<label>
				<input
					type="radio"
					className="shuffler__filter-item"
					onClick={props.handleAllClick}/>
			</label>
		</div>
	);
};

export default Filter;
