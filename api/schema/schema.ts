import { makeSchema } from 'nexus'

import { nexusPrisma } from 'nexus-plugin-prisma'

import { join } from 'path'

import { Query } from 'api/schema/Query'
import { Mutation } from 'api/schema/Mutation'
import { Product } from 'api/schema/Models'

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
