import React from 'react';
import Tooltip from './Tooltip';

export default {
    title: 'Tooltip',
    component: Tooltip
};

const Template = (args) => <Tooltip {...args} />;

export const Test = Template.bind({});
Test.args = {
    text: 'You can be fined up to £5,000 if you do not register.',
    title: 'Warning',
    learnMoreUrl: 'https://design-system.service.gov.uk/components/warning-text/'
}

