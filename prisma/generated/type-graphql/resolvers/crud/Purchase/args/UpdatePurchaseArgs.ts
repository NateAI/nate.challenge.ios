import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PurchaseUpdateInput } from "../../../inputs/PurchaseUpdateInput";
import { PurchaseWhereUniqueInput } from "../../../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePurchaseArgs {
  @TypeGraphQL.Field(_type => PurchaseUpdateInput, {
    nullable: false
  })
  data!: PurchaseUpdateInput;

  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: PurchaseWhereUniqueInput;
}
