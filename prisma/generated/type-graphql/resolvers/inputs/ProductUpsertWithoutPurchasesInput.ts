import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutPurchasesInput } from "../inputs/ProductCreateWithoutPurchasesInput";
import { ProductUpdateWithoutPurchasesInput } from "../inputs/ProductUpdateWithoutPurchasesInput";

@TypeGraphQL.InputType("ProductUpsertWithoutPurchasesInput", {
  isAbstract: true
})
export class ProductUpsertWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutPurchasesInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutPurchasesInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutPurchasesInput, {
    nullable: false
  })
  create!: ProductCreateWithoutPurchasesInput;
}
