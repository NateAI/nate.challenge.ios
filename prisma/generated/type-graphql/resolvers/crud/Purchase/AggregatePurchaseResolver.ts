import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePurchaseArgs } from "./args/AggregatePurchaseArgs";
import { Purchase } from "../../../models/Purchase";
import { AggregatePurchase } from "../../outputs/AggregatePurchase";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Purchase)
export class AggregatePurchaseResolver {
  @TypeGraphQL.Query(_returns => AggregatePurchase, {
    nullable: false
  })
  async aggregatePurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePurchaseArgs): Promise<AggregatePurchase> {
    return getPrismaFromContext(ctx).purchase.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
