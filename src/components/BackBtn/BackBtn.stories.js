import React from 'react';

import BackBtn from './BackBtn';

export default {
    title: 'Back-Button',
    component: BackBtn,
    argTypes: {
      onClick: {action: 'Click happened'},
      type: {
        options: ['text', 'primary', 'secondary'],
        control: {type: 'select'}
      },
      size: {
        options: ['regular', 'small'],
        control: {type: 'select'}
      },
      theme: {
        options: ['application-theme', 'default-theme'],
        control: {type: 'select'}
      }
    }
};

const Template = (args) => <BackBtn {...args} />;

export const PrimaryBtn = Template.bind({});
PrimaryBtn.args = {
  text: 'Click me 1',
  type: 'primary',
  size: 'regular',
  disabled: false,
  loading: false,
  theme: 'application-theme'
};