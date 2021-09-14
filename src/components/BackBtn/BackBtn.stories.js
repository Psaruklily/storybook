import React from 'react';

import BackBtn from './BackBtn';

export default {
    title: 'Back-Button',
    component: BackBtn,
};

const Template = (args) => <BackBtn {...args} />;

export const PrimaryBtn = Template.bind({});
PrimaryBtn.args = {
  text: 'Click me 1',
  type: 'secondary',
  size: 'small'
};

// export const SecondaryBtn = Template.bind({});
// SecondaryBtn.args = {
//   ...PrimaryBtn.args,
//   text: 'Click me 2',
//   type: 'secondary',
// }