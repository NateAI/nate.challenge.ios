import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutPurchasesInput } from "../inputs/ProductCreateOrConnectWithoutPurchasesInput";
import { ProductCreateWithoutPurchasesInput } from "../inputs/ProductCreateWithoutPurchasesInput";
import { ProductUpdateWithoutPurchasesInput } from "../inputs/ProductUpdateWithoutPurchasesInput";
import { ProductUpsertWithoutPurchasesInput } from "../inputs/ProductUpsertWithoutPurchasesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneWithoutPurchasesInput", {
  isAbstract: true
})
export class ProductUpdateOneWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutPurchasesInput, {
    nullable: true
  })
  create?: ProductCreateWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutPurchasesInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutPurchasesInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutPurchasesInput, {
    nullable: true
  })
  update?: ProductUpdateWithoutPurchasesInput | undefined;
}
