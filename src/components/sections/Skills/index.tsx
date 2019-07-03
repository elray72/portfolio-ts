import React from 'react';
import classNames from 'classnames';
import Swiper from 'react-id-swiper';
import swiperConfig from './swiperConfig';
import 'react-id-swiper/src/styles/scss/swiper.scss';
import './_skills.scss';

import Slide from '../../molecules/Slide';
import Card from '../../molecules/Card';
import Tags from '../../organisms/Tags';

interface IProps {
	className?: string;
}

const Skills: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'skills');

	return (
		<div className={componentClass}>
			<div className="skills__inner">
				<div className="skills__header">
					<h2 className="skills__header-title">What I do</h2>
					<p className="skills__header-desc">
						I specialise in UI & Interaction development using ReactJs. I also build on .NET, Umbraco and Sitecore.
					</p>
				</div>
				<div className="skills__body">
					<Swiper {...swiperConfig}>
						<Slide className="skills__slide">
							<Card className="skills__card" title="HTML5 + CSS" logo="/static/img/logo/html-css.png">
								<p className="skills__card-desc">Great experiences begin with solid semantic HTML and masterful CSS.</p>
								<Tags className="skills__card-tags" values={['Mastery', 'Since 2007']} />
							</Card>
						</Slide>
						<Slide>
							<Card className="skills__card" title="JavaScript" logo="/static/img/logo/js.png">
								<p className="skills__card-desc">
									Numerous vanilla JS projects for clients such as Hyundai, StarTrack, Lion and Delos. Well versed in
									ES6.
								</p>
								<Tags className="skills__card-tags" values={['ES6', 'Since 2009']} />
							</Card>
						</Slide>
						<Slide>
							<Card className="skills__card" title="React" logo="/static/img/logo/react.png">
								<p className="skills__card-desc">My framework of choice - I have been using React for the last year.</p>
								<Tags className="skills__card-tags" values={['TS', 'Redux', 'Hooks', 'Jest', 'Enzyme', 'Since 2018']} />
							</Card>
						</Slide>
						<Slide>
							<Card className="skills__card" title="TypeScript" logo="/static/img/logo/ts.png">
								<p className="skills__card-desc">
									I've begun rewriting my projects from JS to TS. Some GitHub links -
									<a href="https://github.com/elray72/portfolio-ts" target="_blank" rel="noopener noreferrer">
										Portfolio
									</a>
									,&nbsp;
									<a href="https://github.com/elray72/delos" target="_blank" rel="noopener noreferrer">
										Delos
									</a>
									,&nbsp;
									<a href="https://github.com/elray72/hyundai" target="_blank" rel="noopener noreferrer">
										Hyundai
									</a>
									.
								</p>
								<Tags className="skills__card-tags" values={['Intermediate', 'Since 2019']} />
							</Card>
						</Slide>
						<Slide>
							<Card className="skills__card" title="SCSS" logo="/static/img/logo/sass.png">
								<p className="skills__card-desc">
									My preprocessor of choice - coupled with BEM, expect easy to understand styling for maximum
									efficiency.
								</p>
								<Tags className="skills__card-tags" values={['Since 2012', 'Mastery', 'BEM']} />
							</Card>
						</Slide>
						<Slide>
							<Card className="skills__card" title=".NET / C#" logo="/static/img/logo/csharp.png">
								<p className="skills__card-desc">
									Formerly my bread & butter framework and still actively working on .NET projects for VMLY&R.
								</p>
								<Tags
									className="skills__card-tags"
									values={['Since 2007', 'Senior', 'MVC4', 'WebApi', 'Ninject', 'TDD']}
								/>
							</Card>
						</Slide>
						<Slide>
							<Card className="skills__card" title="Umbraco" logo="/static/img/logo/umbraco.png">
								<p className="skills__card-desc">
									My favourite .NET CMS, I've built numerous sites for clients like&nbsp;
									<a href="http://www.arn.com.au/" target="_blank" rel="noopener noreferrer">
										ARN
									</a>
									,&nbsp;
									<a href="http://www.duluxgroup.com.au/" target="_blank" rel="noopener noreferrer">
										Dulux Group
									</a>
									, and&nbsp;
									<a href="https://corporate.hoyts.com.au/" target="_blank" rel="noopener noreferrer">
										Hoyts Group
									</a>
									.
								</p>
								<Tags className="skills__card-tags" values={['Since 2012', 'V6', 'V7']} />
							</Card>
						</Slide>
						<Slide>
							<Card className="skills__card" title="Sitecore" logo="/static/img/logo/sitecore.png">
								<p className="skills__card-desc">
									Certified Sitecore developer and experienced on versions 6.5 and 8.
								</p>
								<Tags className="skills__card-tags" values={['Intermediate', 'V6', 'V8']} />
							</Card>
						</Slide>
						<Slide>
							<Card className="skills__card" title="WebPack" logo="/static/img/logo/webpack.png">
								<p className="skills__card-desc">I now use WebPack almost exclusively for all my bundling needs.</p>
								<Tags className="skills__card-tags" values={['Since 2017', 'Senior']} />
							</Card>
						</Slide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Skills;
