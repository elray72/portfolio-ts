import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Switch, Route } from 'react-router-dom';
import 'sanitize.css';
import '../themes/v1/scss/style.scss';

// Components
import Header from './organisms/Header';
import Nav from './organisms/Nav';
import Home from './pages/Home/index';
import Test from './pages/Test/index';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet titleTemplate="Ray Ranola - %s" defaultTitle="Ray Ranola - Full Stack Developer">
        <meta name="description" content="" />
      </Helmet>
      <Header>
        <Nav>
          <Link to="/" className="nav__link" title="Home">
            Home
          </Link>
          <Link to="/test" className="nav__link" title="About">
            About
          </Link>
        </Nav>
      </Header>
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
