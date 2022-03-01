import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PurchaseOrderByWithAggregationInput } from "../../../inputs/PurchaseOrderByWithAggregationInput";
import { PurchaseScalarWhereWithAggregatesInput } from "../../../inputs/PurchaseScalarWhereWithAggregatesInput";
import { PurchaseWhereInput } from "../../../inputs/PurchaseWhereInput";
import { PurchaseScalarFieldEnum } from "../../../../enums/PurchaseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPurchaseArgs {
  @TypeGraphQL.Field(_type => PurchaseWhereInput, {
    nullable: true
  })
  where?: PurchaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PurchaseOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PurchaseOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "price" | "productId">;

  @TypeGraphQL.Field(_type => PurchaseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PurchaseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
