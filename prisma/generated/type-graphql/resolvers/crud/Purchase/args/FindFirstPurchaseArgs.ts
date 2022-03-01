import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PurchaseOrderByWithRelationInput } from "../../../inputs/PurchaseOrderByWithRelationInput";
import { PurchaseWhereInput } from "../../../inputs/PurchaseWhereInput";
import { PurchaseWhereUniqueInput } from "../../../inputs/PurchaseWhereUniqueInput";
import { PurchaseScalarFieldEnum } from "../../../../enums/PurchaseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPurchaseArgs {
  @TypeGraphQL.Field(_type => PurchaseWhereInput, {
    nullable: true
  })
  where?: PurchaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PurchaseOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PurchaseOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: true
  })
  cursor?: PurchaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "price" | "productId"> | undefined;
}
