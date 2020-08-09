import { schema } from 'nexus'

schema.mutationType({
  definition(t) {
    t.crud.createOneProduct()
    t.crud.updateOneProduct()
    t.crud.upsertOneProduct()
    t.crud.deleteOneProduct()
  }
})
