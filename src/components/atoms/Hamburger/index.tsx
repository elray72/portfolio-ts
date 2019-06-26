import * as React from 'react';
import classNames from 'classnames';
import './_hamburger.scss';

interface IProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

interface IState {
	expanded: boolean,
}

class Hamburger extends React.PureComponent<IProps, IState> {

	state = {
		expanded: false
	};

	handleOnClick = (e: any) => {
		const prevState = this.state.expanded;
		this.props.onClick(e);
		this.setState({ expanded: !prevState });
	};

	render() {
		const componentClass = classNames({
			hamburger: true,
			'hamburger--expanded': this.state.expanded,
		});

		return (
			<button type="button" className={componentClass} onClick={this.handleOnClick}>
				<span className="hamburger__bar"/>
				<span className="hamburger__bar"/>
				<span className="hamburger__bar"/>
			</button>
		);
	}
}


export default Hamburger;
