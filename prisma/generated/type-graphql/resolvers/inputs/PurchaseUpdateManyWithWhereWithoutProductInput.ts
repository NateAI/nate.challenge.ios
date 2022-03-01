import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseScalarWhereInput } from "../inputs/PurchaseScalarWhereInput";
import { PurchaseUpdateManyMutationInput } from "../inputs/PurchaseUpdateManyMutationInput";

@TypeGraphQL.InputType("PurchaseUpdateManyWithWhereWithoutProductInput", {
  isAbstract: true
})
export class PurchaseUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => PurchaseScalarWhereInput, {
    nullable: false
  })
  where!: PurchaseScalarWhereInput;

  @TypeGraphQL.Field(_type => PurchaseUpdateManyMutationInput, {
    nullable: false
  })
  data!: PurchaseUpdateManyMutationInput;
}
