import React from 'react';

import { Suggest } from './index';

export default {
  title: 'Example/Suggest',
  component: Suggest,
  argTypes: {
    
  },
};

const Template = (args) => <Suggest {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

