import React from 'react';
import ProfileComponent from '../components/profileComponent';

export default {
  title: 'ProfileComponent',
  component: ProfileComponent,
};

const Template = (args: any) => <ProfileComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  profile: {
    username: 'sampleuser',
    name: 'Sample User',
    avatarUrl: "https://avatars.githubusercontent.com/u/62808178?v=4",
    githubUrl: 'https://github.com/sampleuser',
    followers: 1000,
    following: 500,
    company: 'Example Inc.',
    location: 'New York, USA',
    email: 'sample@example.com',
    twitterUsername: 'sampleuser',
    bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    repos: 10,
  },
};

export const MinimalInfo = Template.bind({});
MinimalInfo.args = {
  profile: {
    username: 'minimaluser',
    name: null,
    avatarUrl: "https://avatars.githubusercontent.com/u/62808178?v=4",
    githubUrl: 'https://github.com/minimaluser',
    followers: 0,
    following: 0,
    company: null,
    location: null,
    email: null,
    twitterUsername: null,
    bio: null,
    repos: 0,
  },
};

export const NoBio = Template.bind({});
NoBio.args = {
  profile: {
    username: 'nobiouser',
    name: 'No Bio User',
    avatarUrl: "https://avatars.githubusercontent.com/u/62808178?v=4",
    githubUrl: 'https://github.com/nobiouser',
    followers: 200,
    following: 100,
    company: 'NoBio Inc.',
    location: 'San Francisco, USA',
    email: 'nobio@example.com',
    twitterUsername: 'nobiouser',
    bio: null,
    repos: 5,
  },
};
