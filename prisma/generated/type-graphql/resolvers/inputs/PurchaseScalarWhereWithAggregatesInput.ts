import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PurchaseScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PurchaseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PurchaseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PurchaseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PurchaseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PurchaseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  price?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  productId?: StringNullableWithAggregatesFilter | undefined;
}
