import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateWithoutProductInput } from "../inputs/PurchaseCreateWithoutProductInput";
import { PurchaseUpdateWithoutProductInput } from "../inputs/PurchaseUpdateWithoutProductInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseUpsertWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class PurchaseUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: PurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PurchaseUpdateWithoutProductInput, {
    nullable: false
  })
  update!: PurchaseUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => PurchaseCreateWithoutProductInput, {
    nullable: false
  })
  create!: PurchaseCreateWithoutProductInput;
}
