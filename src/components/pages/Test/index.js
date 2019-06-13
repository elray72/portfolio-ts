/** ====================================================================================================================
 // View: Test
 // ================================================================================================================= */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Test extends Component {

	render() {
		return (
			<section>
				<Helmet>
					<title>Test</title>
					<meta name="description" content="Feature page of React.js Boilerplate application" />
				</Helmet>
				<h1>Test</h1>
			</section>
		);
	}
}

export default Test;
