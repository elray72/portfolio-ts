import * as React from 'react';
import classNames from 'classnames';
import './_tags.scss';

interface IProps {
  className?: string,
  values: string[]
}

const Tags: React.FC<IProps> = (props) => {
  const componentClass = classNames(props.className, 'tags');

  return (
    <ul className={componentClass}>
      {(props.values || []).map((n: string) => (
        <li className="tags__item" key={`${n}`}>{n}</li>
      ))}
    </ul>
  );
};

export default Tags;
