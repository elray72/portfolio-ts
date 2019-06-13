import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import 'sanitize.css';
import '../themes/v1/scss/style.scss';

// Components
import Header from './organisms/Header';

// Pages
import Home from './pages/Home/index';
import Test from './pages/Test/index';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet titleTemplate="Ray Ranola - %s" defaultTitle="Ray Ranola - Full Stack Developer">
        <meta name="description" content="" />
      </Helmet>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
          {/*<Route exact path="/home" component={Home} />*/}
          {/*<Route exact path="/test" component={Test} />*/}
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
