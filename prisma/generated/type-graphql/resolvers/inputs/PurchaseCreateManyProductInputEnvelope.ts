import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateManyProductInput } from "../inputs/PurchaseCreateManyProductInput";

@TypeGraphQL.InputType("PurchaseCreateManyProductInputEnvelope", {
  isAbstract: true
})
export class PurchaseCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [PurchaseCreateManyProductInput], {
    nullable: false
  })
  data!: PurchaseCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
