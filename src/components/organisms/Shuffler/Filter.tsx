import React from 'react';
import classNames from 'classnames';
import './_filter.scss';

interface IProps {
	children: React.ReactNode,
	className: string,
}

export const Filter: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'filter');
	return <div className={componentClass}>{props.children}</div>;
};

export default Filter;
