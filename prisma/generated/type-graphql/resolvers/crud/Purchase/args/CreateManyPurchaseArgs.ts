import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PurchaseCreateManyInput } from "../../../inputs/PurchaseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPurchaseArgs {
  @TypeGraphQL.Field(_type => [PurchaseCreateManyInput], {
    nullable: false
  })
  data!: PurchaseCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
