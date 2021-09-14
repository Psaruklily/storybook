import React from 'react';

import  MyButton  from './MyButton';

export default {
  title: 'My-button',
  component: MyButton,
};

const Template = (args) => <MyButton {...args} />;

export const FirstButton = Template.bind({});

FirstButton.args = {
    label: 'Please, click me!',
};