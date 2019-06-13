import * as React from 'react';
import classNames from 'classnames';
import './_hero.scss';

interface HomeProps {
	className?: string,
}

export class Home extends React.PureComponent<HomeProps> {
	constructor(props: HomeProps) {
		super(props);
		this.state = {};
	}

	render() {
		const componentClass = classNames(this.props.className, 'hero');

		return (
			<div className={componentClass}>
				<div className="hero__inner">
					<div className="hero__bg">

					</div>
					<h1 className="hero__heading">Ray Ranola</h1>
					<p className="hero__text">
						Full stack developer at VMLY&R Sydney.
						<br />
					</p>
					<p className="hero__text" />
				</div>
			</div>
		);
	}
}

export default Home;
