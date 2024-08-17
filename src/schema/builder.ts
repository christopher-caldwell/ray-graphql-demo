import { DateTimeResolver, DateResolver } from "graphql-scalars";
import SchemaBuilder from "@pothos/core";

import { ResolverContext } from "@/types/http";

type ScalarHelper<TInternalSource, TExposedSchema> = {
  Output: TInternalSource;
  Input: TExposedSchema;
};
export const builder = new SchemaBuilder<{
  Scalars: {
    DateTime: ScalarHelper<string | Date, Date>;
    Date: ScalarHelper<string | Date, Date>;
  };
  Context: ResolverContext;
}>({});

builder.queryType();

builder.addScalarType("Date", DateResolver, {});
builder.addScalarType("DateTime", DateTimeResolver, {});
