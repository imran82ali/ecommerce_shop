import { defineField,defineType } from 'sanity'

export const product = defineType ({
  name:"product",
  title:"products",
  type:'document',
  fields : [
    defineField({
    name:"name",
    title:"Name",
    type:'string',
  }),
  defineField({
    name:"slug",
    title:"Slug",
    type:'slug',
    options:{source:'name'}

  }),defineField({
    name:"images",
    title:"Images",
    type:'array',
    of:[{type:'image'}]

  }),
  defineField({
    name:"description",
    title:"Description",
    type:'string',
  }),
  defineField({
    name:"price",
    title:"Price",
    type:'number',
  }), 

  ]

})
