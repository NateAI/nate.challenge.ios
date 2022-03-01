import * as TypeGraphQL from "type-graphql";

export enum PurchaseScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  price = "price",
  productId = "productId"
}
TypeGraphQL.registerEnumType(PurchaseScalarFieldEnum, {
  name: "PurchaseScalarFieldEnum",
  description: undefined,
});
