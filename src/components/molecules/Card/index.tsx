import * as React from 'react';
import classNames from 'classnames';
import './_card.scss';

interface IProps {
	children?: React.ReactNode,
	className?: string,
	logo: string,
	title: string,
}

export const Card: React.SFC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'card');

	return (
		<div className={componentClass}>
			<div className="card__inner">
				<div className="card__header">
					<h3 className="card__heading">{props.title}</h3>
					<div className="card__logo">
						<img src={props.logo} alt={props.title} />
					</div>
				</div>
				<div className="card__body">{props.children}</div>
			</div>
		</div>
	);
};

export default Card;
