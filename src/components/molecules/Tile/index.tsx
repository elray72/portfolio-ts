import * as React from 'react';
import { Events } from '../../../common/helpers/events';
import classNames from 'classnames';
import './_tile.scss';

interface IProps {
  className?: string;
  children?: React.ReactNode | React.ReactElement[];
  emits?: string;
  listens?: string;
  transition?: string;
  tags?: string | string[];
}

const Tile: React.FC<IProps> = ({
  className,
  children,
  emits,
  listens,
  transition,
  tags,
}) => {
  const [active, setActive] = React.useState(false);

  if (listens) {
    Events.subscribe(listens, (isActive: boolean) => {
      if (transition) {
        setActive(isActive);
      }
    });
  }

  React.useEffect(() => {
    if (emits) Events.dispatch(emits, active);
  }, [active, emits]);

  const handleOnClick = () => {
    if (transition) setActive(active => !active);
  };

  const transitionClass = transition ? `tile--${transition}` : null;

  return (
    <div
      className={classNames(className, 'tile', transitionClass, {
        [`${transitionClass}-active`]: active,
      })}
      data-tags={tags}
      onClick={handleOnClick}
    >
      <div className="tile__inner">{children}</div>
    </div>
  );
};

export default Tile;
export { default as TileSide } from './TileSide';
