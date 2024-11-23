import type { CollectionConfig } from 'payload'

export const Things: CollectionConfig = {
  slug: 'things',
  fields: [
    { name: 'name', type: 'text' },
    {
      name: 'enabled',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'foos',
      type: 'array',
      fields: [
        {
          name: 'what',
          type: 'text',
        },
      ],
    },
  ],
} satisfies CollectionConfig
