import { queryType } from 'nexus'

const options = { filtering: true, ordering: true, pagination: true }

export const Query = queryType({
  definition(t) {
    // Product
    // t.crud.product()
    // t.crud.products(options)
  }
})
