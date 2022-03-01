import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateimagesInput } from "../inputs/ProductUpdateimagesInput";
import { PurchaseUpdateManyWithoutProductInput } from "../inputs/PurchaseUpdateManyWithoutProductInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProductUpdateInput", {
  isAbstract: true
})
export class ProductUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateimagesInput, {
    nullable: true
  })
  images?: ProductUpdateimagesInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  url?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  merchant?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PurchaseUpdateManyWithoutProductInput, {
    nullable: true
  })
  purchases?: PurchaseUpdateManyWithoutProductInput | undefined;
}
