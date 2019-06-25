import React from 'react';
import classNames from 'classnames';
import './_filter.scss';

interface IProps {
	children: React.ReactNode,
	className: string,
}

export const Filter: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'filter');
	return <ul className={componentClass}>{props.children}</ul>;
};

export default Filter;
