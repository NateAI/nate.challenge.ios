import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseAvgOrderByAggregateInput } from "../inputs/PurchaseAvgOrderByAggregateInput";
import { PurchaseCountOrderByAggregateInput } from "../inputs/PurchaseCountOrderByAggregateInput";
import { PurchaseMaxOrderByAggregateInput } from "../inputs/PurchaseMaxOrderByAggregateInput";
import { PurchaseMinOrderByAggregateInput } from "../inputs/PurchaseMinOrderByAggregateInput";
import { PurchaseSumOrderByAggregateInput } from "../inputs/PurchaseSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PurchaseOrderByWithAggregationInput", {
  isAbstract: true
})
export class PurchaseOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  productId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PurchaseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PurchaseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PurchaseAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PurchaseAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PurchaseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PurchaseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PurchaseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PurchaseMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PurchaseSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PurchaseSumOrderByAggregateInput | undefined;
}
