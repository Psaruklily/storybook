import React from 'react';

import Link from './Link';

export default {
    title: 'Link',
    component: Link,
}

const Template = (args) => <Link {...args}/>

export const DefaultLink = Template.bind({});
DefaultLink.args = {
    text: 'Google Page',
    underline: false,
    href: 'https://www.google.com/'
}

DefaultLink.parameters = {
    withPseudo: {
        selector: "Link",
        prefix: "pseudoclass--"
    }
}



