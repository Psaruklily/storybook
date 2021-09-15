import React from 'react';
import bemHelper from '../../helpers/bem-helper';
import './style.css';

const Link = (props) => {
    const {text, href, underline} = props;

    const test = () => {
        console.log('hello, Lili');
    }

    return (
        <a className={bemHelper('Link', { 'with-underline': underline})}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {text}
        </a>
    )
}

export default Link;

