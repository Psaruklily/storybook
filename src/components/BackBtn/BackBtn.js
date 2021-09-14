import React from 'react';
import './style.css';
import bemHelper from '../../helpers/bem-helper';
import Spinner from '../Spinner/Spinner';

export default function Button(props) {
        const {
            text,
            type,
            size,
            disabled,
            loading,
            onClick,
            theme
        } = props;

      return(
        <div className={bemHelper('button', {
            text: type === 'text',
            primary: type === 'primary',
            secondary: type === 'secondary',
            regular: size === 'regular',
            small: size === 'small',
            disabled: (disabled || loading),
            loading: loading,
            'application-theme': theme === 'application-theme'
        })}
        role="button"
        onClick={(disabled || loading) ? () => {} : onClick}>
              <span>{text}</span>
              {loading && <Spinner />}
          </div>
      )
}


Button.defaultProps = {
    type: 'primary',
    size: 'regular',
    disabled: false,
    loading: false,
    theme: 'default-theme',
  };