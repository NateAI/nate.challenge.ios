import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PurchaseScalarWhereInput", {
  isAbstract: true
})
export class PurchaseScalarWhereInput {
  @TypeGraphQL.Field(_type => [PurchaseScalarWhereInput], {
    nullable: true
  })
  AND?: PurchaseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarWhereInput], {
    nullable: true
  })
  OR?: PurchaseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarWhereInput], {
    nullable: true
  })
  NOT?: PurchaseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  price?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  productId?: StringNullableFilter | undefined;
}
