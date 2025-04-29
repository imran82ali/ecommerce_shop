import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../schemas/product-shema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
