import { makeSchema, objectType } from 'nexus'

import { nexusPrisma } from '@kenchi/nexus-plugin-prisma'

import { join } from 'path'

import { Query } from 'api/schema/Query'
import { Mutation } from 'api/schema/Mutation'
// import { Product } from 'api/schema/Models'

export const Product = objectType({
  name: 'Product',
  definition(t) {
    // t.model.id()
    // t.model.createdAt()
    // t.model.updatedAt()
    // t.model.title()
    // t.model.images()
    // t.model.url()
    // t.model.merchant()
  }
})

export const schema = makeSchema({
  types: [Query, Mutation, Product],
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      paginationStrategy: 'prisma'
    })
  ],
  outputs: {
    typegen: join(__dirname, '../../node_modules/@types/nexus-typegen/index.d.ts')
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context'
  },
  sourceTypes: {
    modules: [
      {
        module: require.resolve('.prisma/client/index.d.ts'),
        alias: 'prisma'
      }
    ]
  }
})
