"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.Product = void 0;
const nexus_1 = require("nexus");
const nexus_plugin_prisma_1 = require("@kenchi/nexus-plugin-prisma");
const path_1 = require("path");
const Query_1 = require("api/schema/Query");
const Mutation_1 = require("api/schema/Mutation");
// import { Product } from 'api/schema/Models'
exports.Product = (0, nexus_1.objectType)({
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
});
exports.schema = (0, nexus_1.makeSchema)({
    types: [Query_1.Query, Mutation_1.Mutation, exports.Product],
    plugins: [
        (0, nexus_plugin_prisma_1.nexusPrisma)({
            experimentalCRUD: true,
            paginationStrategy: 'prisma'
        })
    ],
    outputs: {
        typegen: (0, path_1.join)(__dirname, '../../node_modules/@types/nexus-typegen/index.d.ts')
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
});
//# sourceMappingURL=schema.js.map