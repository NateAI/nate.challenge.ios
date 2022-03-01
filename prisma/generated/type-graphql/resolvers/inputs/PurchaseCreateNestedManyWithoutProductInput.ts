import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateManyProductInputEnvelope } from "../inputs/PurchaseCreateManyProductInputEnvelope";
import { PurchaseCreateOrConnectWithoutProductInput } from "../inputs/PurchaseCreateOrConnectWithoutProductInput";
import { PurchaseCreateWithoutProductInput } from "../inputs/PurchaseCreateWithoutProductInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseCreateNestedManyWithoutProductInput", {
  isAbstract: true
})
export class PurchaseCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [PurchaseCreateWithoutProductInput], {
    nullable: true
  })
  create?: PurchaseCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: PurchaseCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => PurchaseCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: PurchaseCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereUniqueInput], {
    nullable: true
  })
  connect?: PurchaseWhereUniqueInput[] | undefined;
}
