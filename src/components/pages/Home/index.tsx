import React from 'react';
import { Helmet } from 'react-helmet';
import Swiper from 'react-id-swiper';
import swiperConfig from './swiperConfig';
import 'react-id-swiper/src/styles/scss/swiper.scss';
import './_home.scss';

import Slide from '../../molecules/Slide';
import Hero from '../../sections/Hero'
import Skills from '../../sections/Skills';
import Work from '../../sections/Work';

export class Home extends React.PureComponent {

	render() {
		return (
			<div className="home">
				<Helmet>
					<title>Home</title>
					<meta name="description" content="Feature page of React.js Boilerplate application" />
				</Helmet>
				<Swiper {...swiperConfig}>
					<Slide slideTheme="white" slideType="section">
						<Hero />
					</Slide>
					<Slide slideTheme="light" slideType="div">
						<Skills />
					</Slide>
					<Slide slideTheme="white" slideType="div">
						<Work />
					</Slide>
				</Swiper>
			</div>
		);
	}
}

export default Home;
