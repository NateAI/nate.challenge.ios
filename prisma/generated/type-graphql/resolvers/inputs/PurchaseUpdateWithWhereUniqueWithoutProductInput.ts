import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseUpdateWithoutProductInput } from "../inputs/PurchaseUpdateWithoutProductInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseUpdateWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class PurchaseUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: PurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PurchaseUpdateWithoutProductInput, {
    nullable: false
  })
  data!: PurchaseUpdateWithoutProductInput;
}
