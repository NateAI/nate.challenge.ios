import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutPurchasesInput } from "../inputs/ProductCreateOrConnectWithoutPurchasesInput";
import { ProductCreateWithoutPurchasesInput } from "../inputs/ProductCreateWithoutPurchasesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutPurchasesInput", {
  isAbstract: true
})
export class ProductCreateNestedOneWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutPurchasesInput, {
    nullable: true
  })
  create?: ProductCreateWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutPurchasesInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
