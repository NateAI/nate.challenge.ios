import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseWhereInput } from "../inputs/PurchaseWhereInput";

@TypeGraphQL.InputType("PurchaseListRelationFilter", {
  isAbstract: true
})
export class PurchaseListRelationFilter {
  @TypeGraphQL.Field(_type => PurchaseWhereInput, {
    nullable: true
  })
  every?: PurchaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => PurchaseWhereInput, {
    nullable: true
  })
  some?: PurchaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => PurchaseWhereInput, {
    nullable: true
  })
  none?: PurchaseWhereInput | undefined;
}
