import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import './_tile.scss';

interface IProps {
	active?: boolean;
	bgColor?: string;
	className?: string;
	children?: React.ReactNode;
	side?: string;
}

const Div = styled.div`
	background-color: ${(p: IProps) => p.bgColor ? p.bgColor : 'transparent'};
`;

const TileSide: React.FC<IProps> = (props) => {
	const componentClass = classNames(
		props.className,
		'tile__side',
		`tile__side-${props.side}`,
	);

	return (
		<Div className={componentClass} {...props}>
			{props.children}
		</Div>
	);
};

export default TileSide;
