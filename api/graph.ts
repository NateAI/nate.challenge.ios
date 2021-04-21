import { ApolloServer } from 'apollo-server'

import { schema } from 'api/schema/schema'
import { createContext } from 'api/schema/context'

const server = new ApolloServer({ schema, context: createContext(), cors: true })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
