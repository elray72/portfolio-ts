import * as React from 'react';
import classNames from 'classnames';
import './_image.scss';

interface IImage {
  auto?: string;
  children?: React.ReactNode;
  className?: string;
  padding?: number;
  src: string;
  title: string;
}

export const Image: React.FC<IImage> = props => {
  return (
    <div
      className={classNames('image', props.className, {
        'image--ah': props.auto === 'height',
      })}
      {...props}
    >
      <img src={props.src} alt={props.title} />
    </div>
  );
};

export default Image;
