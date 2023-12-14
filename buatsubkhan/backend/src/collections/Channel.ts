// payload.config.ts

import { CollectionConfig } from 'payload/types';

const Channels: CollectionConfig = {
  slug: 'channels',
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'users',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
    },
    {
      name: 'messages',
      type: 'relationship',
      relationTo: 'messages',
      hasMany: true,
    },
  ],
};

export default Channels;
