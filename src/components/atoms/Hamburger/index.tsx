import * as React from 'react';
import classNames from 'classnames';
import './_hamburger.scss';

interface IHamburger {
  defaultExpanded?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Hamburger: React.FC<IHamburger> = ({ defaultExpanded, onClick }) => {
  const [isExpanded, setExpanded] = React.useState(defaultExpanded || false);

  React.useEffect(() => {
    setExpanded(isExpanded);
  }, [isExpanded]);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    setExpanded(x => !x);
  };

  return (
    <button
      type="button"
      className={classNames({
        hamburger: true,
        'hamburger--expanded': isExpanded,
      })}
      onClick={handleOnClick}
    >
      <span className="hamburger__bar" />
      <span className="hamburger__bar" />
      <span className="hamburger__bar" />
    </button>
  );
};

export default Hamburger;
