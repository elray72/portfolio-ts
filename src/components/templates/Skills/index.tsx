import React from 'react';
import classNames from 'classnames';
import Swiper from 'react-id-swiper';
import swiperConfig from './swiperConfig.json';
import 'react-id-swiper/src/styles/scss/swiper.scss';
import './_skills.scss';

import Slide from '../../molecules/Slide';
import Card from '../../molecules/Card';

interface IProps {
	className?: string,
}

export class Skills extends React.PureComponent<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	render() {
		const componentClass = classNames(this.props.className, 'skills');

		return (
			<div className={componentClass}>
				<div className="skills__inner">
					<div className="skills__header">
						<h2 className="skills__heading">What I do</h2>
						<p className="skills__text">
							I specialise in UI & Interaction development using React, Vue or Vanilla over MERN or ASP.NET backends.
						</p>
					</div>
					<div className="skills__body">
						<Swiper {...swiperConfig}>
							<Slide>
								<Card title="JavaScript" logo="/static/img/logo/js.png" />
							</Slide>
							<Slide>
								<Card title="React" logo="/static/img/logo/react.png" />
							</Slide>
							<Slide>
								<Card title="WebPack" logo="/static/img/logo/webpack.png" />
							</Slide>
							<Slide>
								<Card title=".NET / C#" logo="/static/img/logo/csharp.png" />
							</Slide>
							<Slide>
								<Card title="Angular" logo="/static/img/logo/angular.png" />
							</Slide>
							<Slide>
								<Card title="VueJs" logo="/static/img/logo/vue.png" />
							</Slide>
							<Slide>
								<Card title="TypeScript" logo="/static/img/logo/ts.png" />
							</Slide>
							<Slide>
								<Card title="HTML" logo="/static/img/logo/html5.png" />
							</Slide>
							<Slide>
								<Card title="SCSS" logo="/static/img/logo/sass.png" />
							</Slide>
						</Swiper>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
