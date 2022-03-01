import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateimagesInput } from "../inputs/ProductCreateimagesInput";
import { PurchaseCreateNestedManyWithoutProductInput } from "../inputs/PurchaseCreateNestedManyWithoutProductInput";

@TypeGraphQL.InputType("ProductCreateInput", {
  isAbstract: true
})
export class ProductCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => ProductCreateimagesInput, {
    nullable: true
  })
  images?: ProductCreateimagesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  merchant?: string | undefined;

  @TypeGraphQL.Field(_type => PurchaseCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  purchases?: PurchaseCreateNestedManyWithoutProductInput | undefined;
}
