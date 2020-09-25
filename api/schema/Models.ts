import { schema } from 'nexus'

export const Product = schema.objectType({
  name: 'Product',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.title()
    t.model.images()
    t.model.url()
    t.model.merchant()
  }
})
