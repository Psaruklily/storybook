import React from 'react';
import './style.css';
import bemHelper from '../../helpers/bem-helper';

export default function Button(props) {
        const {
            text,
            type,
            size,
            disabled,
        } = props;
      return(
        <div className={bemHelper('button', {
            text: type === 'text',
            primary: type === 'primary',
            secondary: type === 'secondary',
            regular: size === 'regular',
            small: size === 'small',
        })}>
              {text}
          </div>

        //   <div className={`button ${toggle ? 'disabled' : ''}`}>
        //       {text}
        //   </div>
      )
}


Button.defaultProps = {
    type: 'primary',
    size: 'regular',
    disabled: false,
    loading: false,
    theme: 'default-theme',
  };