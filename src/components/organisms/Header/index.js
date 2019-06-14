import React, { Component } from 'react';
import classNames from 'classnames';
import './_header.scss';

import Nav from '../Nav';
import Hamburger from '../../atoms/Hamburger';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
		};
	}

	toggleExpandedState = () => {
		const prevState = this.state.expanded;
		this.setState({ expanded: !prevState });
	};

	handleHamburgerClick = () => {
		this.toggleExpandedState();
	};

	handleOverlayClick = () => {
		this.toggleExpandedState();
	};

	render() {
		const headerClass = classNames({
			header: true,
			'header--expanded': this.state.expanded,
		});

		const headerMenuClass = classNames({
			header__menu: true,
			'header__menu--expanded': this.state.expanded,
		});

		return (
			<header className={`${headerClass} header--sticky`}>
				<div className="header__inner">
					<div className="header__logo" />
					<div className={headerMenuClass}>
						<Hamburger onClick={this.handleHamburgerClick} />
						{this.props.children}
					</div>
				</div>
				<div className="header__overlay" onClick={this.handleOverlayClick} />
			</header>
		);
	}
}

export default Header;
