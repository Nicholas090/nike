import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  outline?: boolean;
  children?: any;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={classNames('button', props.className, {
        'button--outline': props.outline,
      })}>
      {props.children}
    </button>
  );
};
