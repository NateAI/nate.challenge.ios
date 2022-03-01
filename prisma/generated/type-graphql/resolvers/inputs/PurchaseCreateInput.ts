import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutPurchasesInput } from "../inputs/ProductCreateNestedOneWithoutPurchasesInput";

@TypeGraphQL.InputType("PurchaseCreateInput", {
  isAbstract: true
})
export class PurchaseCreateInput {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutPurchasesInput, {
    nullable: true
  })
  product?: ProductCreateNestedOneWithoutPurchasesInput | undefined;
}
