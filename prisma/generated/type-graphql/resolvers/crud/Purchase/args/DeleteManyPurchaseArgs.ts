import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PurchaseWhereInput } from "../../../inputs/PurchaseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPurchaseArgs {
  @TypeGraphQL.Field(_type => PurchaseWhereInput, {
    nullable: true
  })
  where?: PurchaseWhereInput | undefined;
}
