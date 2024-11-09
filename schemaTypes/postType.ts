import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Govt. Jobs', value: 'govt-jobs'},
          {title: 'Non Govt. Jobs', value: 'non-govt-jobs'},
          {title: 'Newspaper', value: 'newspaper'},
          {title: 'Result', value: 'result'},
          {title: 'Admit Card', value: 'admit-card'},
          {title: 'Technology', value: 'technology'},
          {title: 'Entertainment', value: 'entertainment'},
          {title: 'others', value: 'others'},
          // Add more categories as needed
        ],
      },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'attachments',
      title: 'Attachments',
      type: 'array',
      of: [{type: 'file'}],
    }),
    defineField({
      name: 'totalCount',
      title: 'Total Count',
      type: 'string',
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
    }),
    defineField({
      name: 'otherLinks',
      title: 'Other Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    }),
  ],
})
