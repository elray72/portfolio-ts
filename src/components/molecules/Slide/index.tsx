import React, { ReactNode } from 'react';
import classNames from 'classnames';
import './_slide.scss';

interface IProps {
  children: ReactNode;
  className?: string;
  slideTheme?: string;
  slideType?: string;
}

const Slide: React.FC<IProps> = (props) => {
  const slideTheme: string = props.slideTheme ? `slide--${props.slideTheme}` : '';
  const componentClass = classNames(props.className, 'slide', slideTheme);

  return <div className={componentClass}>{props.children}</div>;
};

export default Slide;
