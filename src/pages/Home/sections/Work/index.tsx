import * as React from 'react';
import classNames from 'classnames';

import Shuffler from '../../../../components/organisms/Shuffler';
import Darwin from './Darwin';
import Furphy from './Furphy';
import I30N from './I30N';
import CharterHall from './CharterHall';
import Hyundai from './Hyundai';
import StarTrack from './StarTrack';

import './_work.scss';

interface IProps {
  className?: string;
}

const Work: React.FC<{}> = (props: any) => {
  const componentClass = classNames(props.className, 'work');

  return (
    <div className={componentClass}>
      <div className="work__inner">
        <h2 className="work__header-title">Selected works</h2>
        <div className="work__header">
          <p className="work__header-desc">
            Some of my favourite projects categorized by tech.
          </p>
        </div>
        <Shuffler className="work__shuffler" name="work_shuffler">
          <Darwin tags="JS|React" transition="flip" />
          <Furphy tags="JS|React" transition="flip" />
          <I30N tags="JS|React|.NET" transition="flip" />
          <CharterHall tags=".NET|jQuery" transition="flip" />
          <Hyundai tags="JS|React|.NET" transition="flip" />
          <StarTrack tags="JS" transition="flip" />
        </Shuffler>
      </div>
    </div>
  );
};

export default Work;
