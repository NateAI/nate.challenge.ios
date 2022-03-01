import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseAvgAggregate } from "../outputs/PurchaseAvgAggregate";
import { PurchaseCountAggregate } from "../outputs/PurchaseCountAggregate";
import { PurchaseMaxAggregate } from "../outputs/PurchaseMaxAggregate";
import { PurchaseMinAggregate } from "../outputs/PurchaseMinAggregate";
import { PurchaseSumAggregate } from "../outputs/PurchaseSumAggregate";

@TypeGraphQL.ObjectType("AggregatePurchase", {
  isAbstract: true
})
export class AggregatePurchase {
  @TypeGraphQL.Field(_type => PurchaseCountAggregate, {
    nullable: true
  })
  _count!: PurchaseCountAggregate | null;

  @TypeGraphQL.Field(_type => PurchaseAvgAggregate, {
    nullable: true
  })
  _avg!: PurchaseAvgAggregate | null;

  @TypeGraphQL.Field(_type => PurchaseSumAggregate, {
    nullable: true
  })
  _sum!: PurchaseSumAggregate | null;

  @TypeGraphQL.Field(_type => PurchaseMinAggregate, {
    nullable: true
  })
  _min!: PurchaseMinAggregate | null;

  @TypeGraphQL.Field(_type => PurchaseMaxAggregate, {
    nullable: true
  })
  _max!: PurchaseMaxAggregate | null;
}
