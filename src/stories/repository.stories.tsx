import React from 'react';
import RepositoryComponent from '../components/repository';

export default {
  title: 'RepositoryComponent',
  component: RepositoryComponent,
};

const Template = (args: { repository: Repository }) => <RepositoryComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  repository: {
    name: 'Sample Repository',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    language: 'JavaScript',
    license: 'MIT License',
    lastUpdated: new Date('2021-08-01T00:00:00Z'),
  },
};