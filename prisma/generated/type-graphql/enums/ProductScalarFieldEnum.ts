import * as TypeGraphQL from "type-graphql";

export enum ProductScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  title = "title",
  images = "images",
  url = "url",
  merchant = "merchant"
}
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
  name: "ProductScalarFieldEnum",
  description: undefined,
});
