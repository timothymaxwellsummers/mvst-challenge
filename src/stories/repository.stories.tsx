import React from 'react';
import RepositoryComponent from '../components/repository';

export default {
  title: 'RepositoryComponent',
  component: RepositoryComponent,
};

const Template = (args: any) => <RepositoryComponent {...args} />;

export const Default = Template.bind({});
(Default as any).args = {
  repository: {
    name: 'Sample Repository',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    language: 'JavaScript',
    license: 'MIT License',
    lastUpdated: new Date('2021-08-01T00:00:00Z'),
  },
};

export const MinimalInfo = Template.bind({});
(MinimalInfo as any).args = {
  repository: {
    name: 'MinimalInfo',
    description: null,
    language: null,
    license: null,
    lastUpdated: new Date('2022-01-15T00:00:00Z'),
  },
};

export const LongText = Template.bind({});
(LongText as any).args = {
  repository: {
    name: 'Super Long Repository Name That Should Be Shorter',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    language: 'JavaScript',
    license: 'MIT License',
    lastUpdated: new Date('2022-01-15T00:00:00Z'),
  },
};
