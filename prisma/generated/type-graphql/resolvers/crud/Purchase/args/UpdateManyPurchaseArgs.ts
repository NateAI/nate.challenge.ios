import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PurchaseUpdateManyMutationInput } from "../../../inputs/PurchaseUpdateManyMutationInput";
import { PurchaseWhereInput } from "../../../inputs/PurchaseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPurchaseArgs {
  @TypeGraphQL.Field(_type => PurchaseUpdateManyMutationInput, {
    nullable: false
  })
  data!: PurchaseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PurchaseWhereInput, {
    nullable: true
  })
  where?: PurchaseWhereInput | undefined;
}
