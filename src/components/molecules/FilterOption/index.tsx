import React from 'react';
import './_filter-option.scss';

interface IProps {
	//children: any,
	onClick: any,
	value: string,
}

const FilterOption: React.FC<IProps> = (props) => {
// 	const componentClass = classNames(props.className, 'filterOption');
// 	const filterText = props.text ? props.text : props.value;
// console.log(value);
	return (
		<button typeof="radio" value={props.value} onClick={props.onClick}>
			{props.value}
		</button>
	);
};

export default FilterOption;
