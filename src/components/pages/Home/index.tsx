import React from 'react';
import { Helmet } from 'react-helmet';
import Swiper from 'react-id-swiper';
import swiperConfig from './swiperconfig.json';
import 'react-id-swiper/src/styles/scss/swiper.scss';
import './_home.scss';

import Slide from '../../molecules/Slide';
import Hero from '../../templates/Hero'

export default class Home extends React.Component {

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
						<div>Hi there</div>
					</Slide>
				</Swiper>
			</div>
		);
	}
}
