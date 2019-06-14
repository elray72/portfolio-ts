import React from 'react';
import { Helmet } from 'react-helmet';
import Swiper from 'react-id-swiper';
import swiperConfig from './swiperConfig.json';
import 'react-id-swiper/src/styles/scss/swiper.scss';
import './_home.scss';

import Slide from '../../molecules/Slide';
import Hero from '../../templates/Hero'
import Skills from '../../templates/Skills';

export class Home extends React.PureComponent {

	render() {
		return (
			<div className="home">
				<Helmet>
					<title>Home</title>
					<meta name="description" content="Feature page of React.js Boilerplate application" />
				</Helmet>
				<Swiper {...swiperConfig}>
					<Slide slideTheme="navy" slideType="section">
						<Hero />
					</Slide>
					<Slide slideTheme="white" slideType="div">
						<Skills />
					</Slide>
				</Swiper>
			</div>
		);
	}
}

export default Home;
