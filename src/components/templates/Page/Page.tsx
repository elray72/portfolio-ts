import * as React from 'react';
import classNames from 'classnames';

interface IPage {
  children?: React.ReactNode;
  className?: string;
}

const Page: React.FC<IPage> = ({ children, className }) => {
  return (
    <div className={classNames('component', className)}>

    </div>
  );
};

export default Page;

