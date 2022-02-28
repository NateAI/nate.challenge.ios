"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const nexus_1 = require("nexus");
const options = { filtering: true, ordering: true, pagination: true };
exports.Query = (0, nexus_1.queryType)({
    definition(t) {
        // Product
        // t.crud.product()
        // t.crud.products(options)
    }
});
//# sourceMappingURL=Query.js.map