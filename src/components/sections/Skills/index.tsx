import React from 'react';
import classNames from 'classnames';
import Swiper from 'react-id-swiper';
import swiperConfig from './swiperConfig.json';
import 'react-id-swiper/src/styles/scss/swiper.scss';
import './_skills.scss';

import Slide from '../../molecules/Slide';
import Card from '../../molecules/Card';
import Tags from '../../molecules/Tags';

interface IProps {
	className?: string,
}

const Skills: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'skills');

	return (
		<div className={componentClass}>
			<div className="skills__inner">
				<div className="skills__header">
					<h2 className="skills__header-title">What I do</h2>
					<p className="skills__header-desc">
						I specialise in UI & Interaction development using ReactJs.
						I also build on .NET, Umbraco and Sitecore.
					</p>
				</div>
				<div className="skills__body">
					<Swiper {...swiperConfig}>
						<Slide className="skills__slide">
							<Card className="skills__card" title="HTML5 + CSS" logo="/static/img/logo/html-css.png">
								<p className="skills__card-desc">
									Great experiences begin with solid semantic HTML and masterful CSS.
								</p>
								<Tags className="skills__card-tags" values={["10 years", "mastery"]} />
							</Card>
						</Slide>
						<Slide>
							<Card className="skills__card" title="JavaScript" logo="/static/img/logo/js.png">
								<p className="skills__card-desc">
									Highly skilled in vanilla JavaScript from ES5 to ES6.
								</p>
							</Card>
						</Slide>
						<Slide>
							<Card className="skills__card" title="React" logo="/static/img/logo/react.png">
								<p className="skills__card-desc">
									My framework of choice. I use typescript and utilize
									style-components, jest/enzyme and redux.
									<Tags className="skills__card-tags" values={["2 years", "intermediate"]} />
								</p>
							</Card>
						</Slide>
						<Slide>
							<Card title="TypeScript" logo="/static/img/logo/ts.png" />
						</Slide>
						<Slide>
							<Card title="WebPack" logo="/static/img/logo/webpack.png" />
						</Slide>
						<Slide>
							<Card title=".NET / C#" logo="/static/img/logo/csharp.png" />
						</Slide>
						<Slide>
							<Card className="skills__card" title="React" logo="/static/img/logo/react.png">
								<p className="skills__card-desc">
									My framework of choice - I have been using React for 2 years.
									<Tags className="skills__card-tags" values={["2 years", "intermediate"]} />
								</p>
							</Card>
						</Slide>
						<Slide>
							<Card className="skills__card" title="SCSS" logo="/static/img/logo/sass.png">
								<p className="skills__card-desc">
									My framework of choice - I have been using React for 2 years.
									<Tags className="skills__card-tags" values={["2 years", "intermediate"]} />
								</p>
							</Card>
						</Slide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Skills;
