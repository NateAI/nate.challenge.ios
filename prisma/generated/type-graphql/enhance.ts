import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Product: crudResolvers.ProductCrudResolver,
  Purchase: crudResolvers.PurchaseCrudResolver
};
const actionResolversMap = {
  Product: {
    product: actionResolvers.FindUniqueProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    products: actionResolvers.FindManyProductResolver,
    createProduct: actionResolvers.CreateProductResolver,
    createManyProduct: actionResolvers.CreateManyProductResolver,
    deleteProduct: actionResolvers.DeleteProductResolver,
    updateProduct: actionResolvers.UpdateProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    upsertProduct: actionResolvers.UpsertProductResolver,
    aggregateProduct: actionResolvers.AggregateProductResolver,
    groupByProduct: actionResolvers.GroupByProductResolver
  },
  Purchase: {
    purchase: actionResolvers.FindUniquePurchaseResolver,
    findFirstPurchase: actionResolvers.FindFirstPurchaseResolver,
    purchases: actionResolvers.FindManyPurchaseResolver,
    createPurchase: actionResolvers.CreatePurchaseResolver,
    createManyPurchase: actionResolvers.CreateManyPurchaseResolver,
    deletePurchase: actionResolvers.DeletePurchaseResolver,
    updatePurchase: actionResolvers.UpdatePurchaseResolver,
    deleteManyPurchase: actionResolvers.DeleteManyPurchaseResolver,
    updateManyPurchase: actionResolvers.UpdateManyPurchaseResolver,
    upsertPurchase: actionResolvers.UpsertPurchaseResolver,
    aggregatePurchase: actionResolvers.AggregatePurchaseResolver,
    groupByPurchase: actionResolvers.GroupByPurchaseResolver
  }
};
const crudResolversInfo = {
  Product: ["product", "findFirstProduct", "products", "createProduct", "createManyProduct", "deleteProduct", "updateProduct", "deleteManyProduct", "updateManyProduct", "upsertProduct", "aggregateProduct", "groupByProduct"],
  Purchase: ["purchase", "findFirstPurchase", "purchases", "createPurchase", "createManyPurchase", "deletePurchase", "updatePurchase", "deleteManyPurchase", "updateManyPurchase", "upsertPurchase", "aggregatePurchase", "groupByPurchase"]
};
const argsInfo = {
  FindUniqueProductArgs: ["where"],
  FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProductArgs: ["data"],
  CreateManyProductArgs: ["data", "skipDuplicates"],
  DeleteProductArgs: ["where"],
  UpdateProductArgs: ["data", "where"],
  DeleteManyProductArgs: ["where"],
  UpdateManyProductArgs: ["data", "where"],
  UpsertProductArgs: ["where", "create", "update"],
  AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePurchaseArgs: ["where"],
  FindFirstPurchaseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPurchaseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePurchaseArgs: ["data"],
  CreateManyPurchaseArgs: ["data", "skipDuplicates"],
  DeletePurchaseArgs: ["where"],
  UpdatePurchaseArgs: ["data", "where"],
  DeleteManyPurchaseArgs: ["where"],
  UpdateManyPurchaseArgs: ["data", "where"],
  UpsertPurchaseArgs: ["where", "create", "update"],
  AggregatePurchaseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPurchaseArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Product: relationResolvers.ProductRelationsResolver,
  Purchase: relationResolvers.PurchaseRelationsResolver
};
const relationResolversInfo = {
  Product: ["purchases"],
  Purchase: ["product"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Product: ["id", "createdAt", "updatedAt", "title", "images", "url", "merchant"],
  Purchase: ["id", "createdAt", "updatedAt", "price", "productId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateProduct: ["_count", "_min", "_max"],
  ProductGroupBy: ["id", "createdAt", "updatedAt", "title", "images", "url", "merchant", "_count", "_min", "_max"],
  AggregatePurchase: ["_count", "_avg", "_sum", "_min", "_max"],
  PurchaseGroupBy: ["id", "createdAt", "updatedAt", "price", "productId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  ProductCount: ["purchases"],
  ProductCountAggregate: ["id", "createdAt", "updatedAt", "title", "images", "url", "merchant", "_all"],
  ProductMinAggregate: ["id", "createdAt", "updatedAt", "title", "url", "merchant"],
  ProductMaxAggregate: ["id", "createdAt", "updatedAt", "title", "url", "merchant"],
  PurchaseCountAggregate: ["id", "createdAt", "updatedAt", "price", "productId", "_all"],
  PurchaseAvgAggregate: ["price"],
  PurchaseSumAggregate: ["price"],
  PurchaseMinAggregate: ["id", "createdAt", "updatedAt", "price", "productId"],
  PurchaseMaxAggregate: ["id", "createdAt", "updatedAt", "price", "productId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  ProductWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "images", "url", "merchant", "purchases"],
  ProductOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "images", "url", "merchant", "purchases"],
  ProductWhereUniqueInput: ["id"],
  ProductOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "images", "url", "merchant", "_count", "_max", "_min"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "images", "url", "merchant"],
  PurchaseWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "price", "productId", "product"],
  PurchaseOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "price", "productId", "product"],
  PurchaseWhereUniqueInput: ["id"],
  PurchaseOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "price", "productId", "_count", "_avg", "_max", "_min", "_sum"],
  PurchaseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "price", "productId"],
  ProductCreateInput: ["id", "createdAt", "updatedAt", "title", "images", "url", "merchant", "purchases"],
  ProductUpdateInput: ["id", "createdAt", "updatedAt", "title", "images", "url", "merchant", "purchases"],
  ProductCreateManyInput: ["id", "createdAt", "updatedAt", "title", "images", "url", "merchant"],
  ProductUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "title", "images", "url", "merchant"],
  PurchaseCreateInput: ["id", "createdAt", "updatedAt", "price", "product"],
  PurchaseUpdateInput: ["id", "createdAt", "updatedAt", "price", "product"],
  PurchaseCreateManyInput: ["id", "createdAt", "updatedAt", "price", "productId"],
  PurchaseUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "price"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  PurchaseListRelationFilter: ["every", "some", "none"],
  PurchaseOrderByRelationAggregateInput: ["_count"],
  ProductCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "images", "url", "merchant"],
  ProductMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "url", "merchant"],
  ProductMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "url", "merchant"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ProductRelationFilter: ["is", "isNot"],
  PurchaseCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "price", "productId"],
  PurchaseAvgOrderByAggregateInput: ["price"],
  PurchaseMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "price", "productId"],
  PurchaseMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "price", "productId"],
  PurchaseSumOrderByAggregateInput: ["price"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  ProductCreateimagesInput: ["set"],
  PurchaseCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  ProductUpdateimagesInput: ["set", "push"],
  PurchaseUpdateManyWithoutProductInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProductCreateNestedOneWithoutPurchasesInput: ["create", "connectOrCreate", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ProductUpdateOneWithoutPurchasesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  PurchaseCreateWithoutProductInput: ["id", "createdAt", "updatedAt", "price"],
  PurchaseCreateOrConnectWithoutProductInput: ["where", "create"],
  PurchaseCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
  PurchaseUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  PurchaseUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  PurchaseUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  PurchaseScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "price", "productId"],
  ProductCreateWithoutPurchasesInput: ["id", "createdAt", "updatedAt", "title", "images", "url", "merchant"],
  ProductCreateOrConnectWithoutPurchasesInput: ["where", "create"],
  ProductUpsertWithoutPurchasesInput: ["update", "create"],
  ProductUpdateWithoutPurchasesInput: ["id", "createdAt", "updatedAt", "title", "images", "url", "merchant"],
  PurchaseCreateManyProductInput: ["id", "createdAt", "updatedAt", "price"],
  PurchaseUpdateWithoutProductInput: ["id", "createdAt", "updatedAt", "price"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

