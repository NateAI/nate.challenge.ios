import * as TypeGraphQL from "type-graphql";
import { Product } from "../../../models/Product";
import { Purchase } from "../../../models/Purchase";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Purchase)
export class PurchaseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: true
  })
  async product(@TypeGraphQL.Root() purchase: Purchase, @TypeGraphQL.Ctx() ctx: any): Promise<Product | null> {
    return getPrismaFromContext(ctx).purchase.findUnique({
      where: {
        id: purchase.id,
      },
    }).product({});
  }
}
