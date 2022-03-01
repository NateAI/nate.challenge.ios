import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PurchaseWhereUniqueInput } from "../../../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePurchaseArgs {
  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: PurchaseWhereUniqueInput;
}
