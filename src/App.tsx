import * as React from 'react';
import { createContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Switch, Route } from 'react-router-dom';
import 'sanitize.css';
import './themes/v1/scss/style.scss';

// Components
import Header from './components/organisms/Header';
import Nav from './components/organisms/Nav';
import Home from './pages/Home';
import Hamburger from './components/atoms/Hamburger';

export type AppState = {
  isMenuOpen: boolean;
};

interface IAppContext {
  appContext: AppState;
  setAppContext: (value: AppState) => void;
}

const INITIAL_STATE: IAppContext = {
  appContext: {
    isMenuOpen: false,
  },
  setAppContext: () => {},
};

export const AppContext = createContext<IAppContext>(INITIAL_STATE);

const App: React.FC = () => {
  const [appContext, setAppContext] = useState<AppState>(
    INITIAL_STATE.appContext,
  );

  return (
    <AppContext.Provider value={{appContext, setAppContext}}>
      <Helmet
        titleTemplate="Ray Ranola - %s"
        defaultTitle="Ray Ranola - Full Stack Developer"
      >
        <meta name="description" content="" />
      </Helmet>
      <Header>
        <Hamburger />
        {/*<Nav>*/}
        {/*  <Link to="/" className="nav__link" title="Home">*/}
        {/*    Home*/}
        {/*  </Link>*/}
        {/*  <Link to="/test" className="nav__link" title="About">*/}
        {/*    About*/}
        {/*  </Link>*/}
        {/*</Nav>*/}
      </Header>
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </AppContext.Provider>
  );
};

export default App;
