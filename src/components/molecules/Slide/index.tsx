import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_slide.scss';

interface SlideProps {
	children?: ReactNode,
	className?: string,
	slideTheme: string
}

const Slide: React.SFC<SlideProps> = (props) => {
	const slideTheme : string = props.slideTheme ? `slide--${props.slideTheme}` : '';
	const componentClass = classNames(props.className, 'slide', slideTheme);

	return (
		<div className={componentClass}>
			{props.children}
		</div>
	);
};

export default Slide;
