import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutPurchasesInput } from "../inputs/ProductCreateWithoutPurchasesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutPurchasesInput", {
  isAbstract: true
})
export class ProductCreateOrConnectWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutPurchasesInput, {
    nullable: false
  })
  create!: ProductCreateWithoutPurchasesInput;
}
