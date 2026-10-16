const schema = {
  title: 'Embed content',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['url'],
    },
  ],

  properties: {
    url: {
      title: 'Content to embed',
      type: 'string',
      widget: 'internal_url',
    },
  },

  required: ['url'],
};

export default schema;
