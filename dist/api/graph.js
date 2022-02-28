"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("api/schema/schema");
const context_1 = require("api/schema/context");
const server = new apollo_server_1.ApolloServer({ schema: schema_1.schema, context: (0, context_1.createContext)(), cors: true });
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=graph.js.map