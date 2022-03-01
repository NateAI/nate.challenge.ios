import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PurchaseCreateInput } from "../../../inputs/PurchaseCreateInput";
import { PurchaseUpdateInput } from "../../../inputs/PurchaseUpdateInput";
import { PurchaseWhereUniqueInput } from "../../../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPurchaseArgs {
  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: PurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PurchaseCreateInput, {
    nullable: false
  })
  create!: PurchaseCreateInput;

  @TypeGraphQL.Field(_type => PurchaseUpdateInput, {
    nullable: false
  })
  update!: PurchaseUpdateInput;
}
