import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateWithoutProductInput } from "../inputs/PurchaseCreateWithoutProductInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseCreateOrConnectWithoutProductInput", {
  isAbstract: true
})
export class PurchaseCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: PurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PurchaseCreateWithoutProductInput, {
    nullable: false
  })
  create!: PurchaseCreateWithoutProductInput;
}
