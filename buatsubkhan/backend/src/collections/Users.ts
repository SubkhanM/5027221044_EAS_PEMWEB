// payload.config.ts

import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'username',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'password',
      type: 'text', // Note: sebaiknya menggunakan tipe 'password' dan lakukan hashing
    },
    {
      name: 'channels',
      type: 'relationship',
      relationTo: 'channels', // Menggunakan relationTo sebagai gantinya
      hasMany: true,
    },
  ],
};

export default Users;
