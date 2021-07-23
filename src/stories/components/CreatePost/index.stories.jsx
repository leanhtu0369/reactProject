import React from 'react';

import { CreatePost } from './index';

export default {
  title: 'Example/CreatePost',
  component: CreatePost,
  argTypes: {
    
  },
};

const Template = (args) => <CreatePost {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

