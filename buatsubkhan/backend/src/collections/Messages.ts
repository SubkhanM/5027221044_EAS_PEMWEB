// payload.config.ts

import { CollectionConfig } from 'payload/types';

const Messages: CollectionConfig = {
  slug: 'messages',
  fields: [
    {
      name: 'content',
      type: 'text',
    },
    {
      name: 'channel',
      type: 'relationship',
      relationTo: 'channels',
    },
    {
      name: 'sender',
      type: 'relationship',
      relationTo: 'users',
    },
  ],
};

export default Messages;
