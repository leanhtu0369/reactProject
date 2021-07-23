import React from 'react';

import { Post } from './index';

export default {
  title: 'Example/Post',
  component: Post,
  argTypes: {
    
  },
};

const Template = (args) => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'test',
  control: ['abc', 'xyz']
}
