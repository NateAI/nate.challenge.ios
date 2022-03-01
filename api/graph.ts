import 'reflect-metadata'

import path from 'path'

import { buildSchema } from 'type-graphql'

import { ApolloServer } from 'apollo-server'

import { createContext } from 'api/context'

import { crudResolvers } from 'prisma/generated/type-graphql'

async function main() {
  const schema = await buildSchema({
    resolvers: [...crudResolvers],
    emitSchemaFile: path.resolve(__dirname, '../prisma/generated/graphql/generated-schema.graphql'),
    validate: false
  })
  const server = new ApolloServer({ schema, context: createContext(), cors: true })
  const { url } = await server.listen(4000)
  console.log(`🚀 Server ready at ${url}`)
}

main().catch(console.error)
