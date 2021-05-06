import * as React from 'react';
import { useContext } from 'react';
import classNames from 'classnames';
import { Events } from '../../../common/helpers/events';
import './_header.scss';

import Hamburger from '../../atoms/Hamburger';
import Nav from '../../organisms/Nav';
import { AppContext } from '../../../App';

interface IHeader {
  children?: React.ReactNode;
  isSticky?: boolean;
}

const Header: React.FC<IHeader> = ({ children, isSticky: bool = false }) => {
  const { appContext, setAppContext } = useContext(AppContext);

  // const toggleExpandedState = () =>
  //   setExpanded((expanded: boolean) => !expanded);
  // const handleHamburgerClick = () => toggleExpandedState();
  // const handleOverlayClick = () => {
  //   // if wrapper prevents further click of overlay while transitioning out
  //   if (isExpanded) {
  //     toggleExpandedState();
  //   }
  // };
  //
  // Events.subscribe('header:expand', (expanded: boolean) =>
  //   setExpanded(expanded),
  // );
  //
  // const menuClass = classNames({
  //   header__menu: true,
  //   'header__menu--expanded': isExpanded,
  // });

  const handleOverlayClick = () => {};

  return (
    <header
      className={classNames('header', {
        'header--sticky': true,
        'header--expanded': appContext.isMenuOpen,
      })}
    >
      <div className="header__inner">{children}</div>
      <div className="header__overlay" onClick={handleOverlayClick} />
    </header>
  );
};

export default Header;
