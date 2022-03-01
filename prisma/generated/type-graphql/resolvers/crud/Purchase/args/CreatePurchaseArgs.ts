import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PurchaseCreateInput } from "../../../inputs/PurchaseCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePurchaseArgs {
  @TypeGraphQL.Field(_type => PurchaseCreateInput, {
    nullable: false
  })
  data!: PurchaseCreateInput;
}
