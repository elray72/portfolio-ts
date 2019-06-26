import * as React from 'react';
import classNames from 'classnames';
import './_header.scss';

import Hamburger from '../../atoms/Hamburger';

interface IState {
	expanded: boolean
}

class Header extends React.PureComponent<{}, IState> {
	state = {
		expanded: false,
	};

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
			<React.Fragment>
				<header className={`${headerClass} header--sticky`}>
					<div className="header__inner">
						<div className="header__logo" />
						<div className={headerMenuClass}>

							{this.props.children}
						</div>
					</div>
					<div className="header__overlay" onClick={this.handleOverlayClick} />
				</header>
				<Hamburger onClick={this.handleHamburgerClick} />
			</React.Fragment>
		);
	}
}

export default Header;
