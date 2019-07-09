import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import './_image.scss';
import { em } from '../../../utils/helpers/em';

interface IProps {
	auto?: string;
	children?: React.ReactNode;
	className?: string;
	padding?: number;
	src: string;
	title: string;
}

const Figure = styled.figure`
	padding: ${(p: IProps) => p.padding ? em(p.padding) : em(16)};
`;

export const Image: React.FC<IProps> = (props) => {
	const componentClass = classNames(
		props.className, 'image',
		{'image--ah': props.auto === 'height'}
	);

	return (
		<Figure className={componentClass} {...props}>
			<img src={props.src} alt={props.title} />
		</Figure>
	);
};

export default Image;
