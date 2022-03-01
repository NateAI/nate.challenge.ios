import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateManyProductInputEnvelope } from "../inputs/PurchaseCreateManyProductInputEnvelope";
import { PurchaseCreateOrConnectWithoutProductInput } from "../inputs/PurchaseCreateOrConnectWithoutProductInput";
import { PurchaseCreateWithoutProductInput } from "../inputs/PurchaseCreateWithoutProductInput";
import { PurchaseScalarWhereInput } from "../inputs/PurchaseScalarWhereInput";
import { PurchaseUpdateManyWithWhereWithoutProductInput } from "../inputs/PurchaseUpdateManyWithWhereWithoutProductInput";
import { PurchaseUpdateWithWhereUniqueWithoutProductInput } from "../inputs/PurchaseUpdateWithWhereUniqueWithoutProductInput";
import { PurchaseUpsertWithWhereUniqueWithoutProductInput } from "../inputs/PurchaseUpsertWithWhereUniqueWithoutProductInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseUpdateManyWithoutProductInput", {
  isAbstract: true
})
export class PurchaseUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [PurchaseCreateWithoutProductInput], {
    nullable: true
  })
  create?: PurchaseCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: PurchaseCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: PurchaseUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => PurchaseCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: PurchaseCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereUniqueInput], {
    nullable: true
  })
  set?: PurchaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PurchaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereUniqueInput], {
    nullable: true
  })
  delete?: PurchaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereUniqueInput], {
    nullable: true
  })
  connect?: PurchaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: PurchaseUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: PurchaseUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PurchaseScalarWhereInput[] | undefined;
}
