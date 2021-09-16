import React, {useState} from 'react';
import './style.css';
import Link from '../Link/Link';
import Button from '../BackBtn/BackBtn';
import {ReactComponent as TooltipIcon} from './icon2.svg';

const Tooltip = (props) => {
    const { title, text, learnMoreUrl } = props;
    const [isDetailsVisible, setDetailsVisibility] = useState(false);
    return (
      <div className='Tooltip'>
        <div className='question-icon' onClick={() => setDetailsVisibility(true)}>
          <TooltipIcon />
        </div>

        {isDetailsVisible && (
          <div className='Tooltip__popup'>

          <div className='Tooltip__popup__header'>
            <div className='Tooltip__popup__title'>
              <h1>{title}</h1>
            </div>

            <div className='Tooltip__popup__backdrop' 
              onClick={() => setDetailsVisibility(false)}
              role="button">
                <span class="close">&times;</span>
            </div>
          </div>

          <div className='Tooltip__popup__body'>
            <div className='Tooltip__popup__body__content__wrapper'>
              <div className='Tooltip__popup__body__text'>
                {text}
              </div>

              <div className='Link'>
                {Boolean(learnMoreUrl) && (
                  <Link
                    text="Learn more"
                    href={learnMoreUrl}
                  />
                )}
              </div>
            
              <div className='Button'>
                <Button text="Got it" onClick={() => setDetailsVisibility(false)} />
              </div>
            </div>
          </div>
        </div>
        )}

        
      </div>
    )
}

export default Tooltip;