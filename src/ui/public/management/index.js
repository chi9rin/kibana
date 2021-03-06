import { ManagementSection } from './section';

export const management = new ManagementSection('management', {
  display: 'Management'
});

// TODO: where should this live?
management.register('data', {
  display: 'Connect Data',
  order: 0
});

management.register('elasticsearch', {
  display: 'Elasticsearch',
  order: 10
});

management.register('kibana', {
  display: 'Kibana',
  order: 20,
});

// Default export style used in x-pack. TODO: convert to named and remove.
export default management;
