import React from 'react';

import Spinner from './Spinner';

export default {
    title: 'Spinner',
    component: Spinner
};

const Template = (args) => <Spinner {...args}/>

export const SpinnerTest = Template.bind({});
SpinnerTest.args = {
    loading: true
}