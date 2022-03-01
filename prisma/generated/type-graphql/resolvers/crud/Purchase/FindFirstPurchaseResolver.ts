import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstPurchaseArgs } from "./args/FindFirstPurchaseArgs";
import { Purchase } from "../../../models/Purchase";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Purchase)
export class FindFirstPurchaseResolver {
  @TypeGraphQL.Query(_returns => Purchase, {
    nullable: true
  })
  async findFirstPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPurchaseArgs): Promise<Purchase | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).purchase.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
