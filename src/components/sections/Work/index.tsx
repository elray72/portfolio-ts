import * as React from 'react';
import MixItUp from 'mixitup';
import classNames from 'classnames';
import './_work.scss';

import Filter from '../../molecules/Filter';
import FilterOption from '../../molecules/FilterOption';
import Tile from '../../molecules/Tile';
import Shuffler from '../../organisms/Shuffler';

interface IProps {
  className?: string,
}

const Skills: React.FC<IProps> = (props) => {

  let shuffler: typeof MixItUp = undefined;
  const shufflerRef = React.useRef<HTMLDivElement>(null);
  const initShuffler = () => {
    if (!shuffler && shufflerRef.current) {
      shuffler = MixItUp(shufflerRef.current);
    }
  };

  React.useLayoutEffect(() => {
    initShuffler();
  }, []);

  const handleFilterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
    shuffler.filter('.mix--green');
  };

  const componentClass = classNames(props.className, 'grid');

  return (
    <div className={componentClass}>
      <div className="grid__inner">
        <h1>Shuffler</h1>

        <Filter className="grid__filter">
          <button type="button" onClick={handleFilterClick} value="green">
            Green
          </button>
          <FilterOption name="filter_option" text="Red" value="red" />
          <FilterOption name="filter_option" text="Green" value="green" />
          <FilterOption name="filter_option" text="Blue" value="blue" />
          <FilterOption name="filter_option" text="Yellow" value="yellow" />
        </Filter>

        <div className="grid__shuffle" ref={shufflerRef} >
          <div className="grid__item mix">
            <Tile tags="red" />
          </div>
          <div className="grid__item mix mix--green">
            <Tile tags="green" />
          </div>
          <div className="grid__item mix">
            <Tile tags="blue" />
          </div>
          <div className="grid__item mix mix--green">
            <Tile tags="green" />
          </div>
          <div className="grid__item mix">
            <Tile tags="yellow" />
          </div>
          <div className="grid__item mix">
            <Tile tags="red" />
          </div>
          <div className="grid__item mix">
            <Tile tags="yellow" />
          </div>
          <div className="grid__item mix">
            <Tile tags="blue" />
          </div>
          <div className="grid__item mix">
            <Tile tags="blue" />
          </div>
          <div className="grid__item mix mix--green">
            <Tile tags="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
