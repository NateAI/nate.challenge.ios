import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPurchaseArgs } from "./args/GroupByPurchaseArgs";
import { Purchase } from "../../../models/Purchase";
import { PurchaseGroupBy } from "../../outputs/PurchaseGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Purchase)
export class GroupByPurchaseResolver {
  @TypeGraphQL.Query(_returns => [PurchaseGroupBy], {
    nullable: false
  })
  async groupByPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPurchaseArgs): Promise<PurchaseGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).purchase.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
