import * as TypeGraphQL from "type-graphql";
import { Product } from "../../../models/Product";
import { Purchase } from "../../../models/Purchase";
import { ProductPurchasesArgs } from "./args/ProductPurchasesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class ProductRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Purchase], {
    nullable: false
  })
  async purchases(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductPurchasesArgs): Promise<Purchase[]> {
    return getPrismaFromContext(ctx).product.findUnique({
      where: {
        id: product.id,
      },
    }).purchases(args);
  }
}
