import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly categorias: "categorias";
    readonly clientes: "clientes";
    readonly detalle_factura: "detalle_factura";
    readonly factura: "factura";
    readonly metodo_pago: "metodo_pago";
    readonly productos: "productos";
    readonly roles: "roles";
    readonly tiendas: "tiendas";
    readonly usuarios: "usuarios";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "categorias" | "clientes" | "detalle_factura" | "factura" | "metodo_pago" | "productos" | "roles" | "tiendas" | "usuarios";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        categorias: {
            payload: Prisma.$categoriasPayload<ExtArgs>;
            fields: Prisma.categoriasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.categoriasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>;
                };
                findFirst: {
                    args: Prisma.categoriasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>;
                };
                findMany: {
                    args: Prisma.categoriasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>[];
                };
                create: {
                    args: Prisma.categoriasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>;
                };
                createMany: {
                    args: Prisma.categoriasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.categoriasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>;
                };
                update: {
                    args: Prisma.categoriasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>;
                };
                deleteMany: {
                    args: Prisma.categoriasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.categoriasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.categoriasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>;
                };
                aggregate: {
                    args: Prisma.CategoriasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategorias>;
                };
                groupBy: {
                    args: Prisma.categoriasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.categoriasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriasCountAggregateOutputType> | number;
                };
            };
        };
        clientes: {
            payload: Prisma.$clientesPayload<ExtArgs>;
            fields: Prisma.clientesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.clientesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.clientesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientesPayload>;
                };
                findFirst: {
                    args: Prisma.clientesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.clientesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientesPayload>;
                };
                findMany: {
                    args: Prisma.clientesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientesPayload>[];
                };
                create: {
                    args: Prisma.clientesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientesPayload>;
                };
                createMany: {
                    args: Prisma.clientesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.clientesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientesPayload>;
                };
                update: {
                    args: Prisma.clientesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientesPayload>;
                };
                deleteMany: {
                    args: Prisma.clientesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.clientesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.clientesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientesPayload>;
                };
                aggregate: {
                    args: Prisma.ClientesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClientes>;
                };
                groupBy: {
                    args: Prisma.clientesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.clientesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientesCountAggregateOutputType> | number;
                };
            };
        };
        detalle_factura: {
            payload: Prisma.$detalle_facturaPayload<ExtArgs>;
            fields: Prisma.detalle_facturaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.detalle_facturaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_facturaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.detalle_facturaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_facturaPayload>;
                };
                findFirst: {
                    args: Prisma.detalle_facturaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_facturaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.detalle_facturaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_facturaPayload>;
                };
                findMany: {
                    args: Prisma.detalle_facturaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_facturaPayload>[];
                };
                create: {
                    args: Prisma.detalle_facturaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_facturaPayload>;
                };
                createMany: {
                    args: Prisma.detalle_facturaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.detalle_facturaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_facturaPayload>;
                };
                update: {
                    args: Prisma.detalle_facturaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_facturaPayload>;
                };
                deleteMany: {
                    args: Prisma.detalle_facturaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.detalle_facturaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.detalle_facturaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_facturaPayload>;
                };
                aggregate: {
                    args: Prisma.Detalle_facturaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDetalle_factura>;
                };
                groupBy: {
                    args: Prisma.detalle_facturaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Detalle_facturaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.detalle_facturaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Detalle_facturaCountAggregateOutputType> | number;
                };
            };
        };
        factura: {
            payload: Prisma.$facturaPayload<ExtArgs>;
            fields: Prisma.facturaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.facturaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.facturaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>;
                };
                findFirst: {
                    args: Prisma.facturaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.facturaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>;
                };
                findMany: {
                    args: Prisma.facturaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>[];
                };
                create: {
                    args: Prisma.facturaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>;
                };
                createMany: {
                    args: Prisma.facturaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.facturaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>;
                };
                update: {
                    args: Prisma.facturaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>;
                };
                deleteMany: {
                    args: Prisma.facturaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.facturaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.facturaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>;
                };
                aggregate: {
                    args: Prisma.FacturaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFactura>;
                };
                groupBy: {
                    args: Prisma.facturaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.facturaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturaCountAggregateOutputType> | number;
                };
            };
        };
        metodo_pago: {
            payload: Prisma.$metodo_pagoPayload<ExtArgs>;
            fields: Prisma.metodo_pagoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.metodo_pagoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$metodo_pagoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.metodo_pagoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$metodo_pagoPayload>;
                };
                findFirst: {
                    args: Prisma.metodo_pagoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$metodo_pagoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.metodo_pagoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$metodo_pagoPayload>;
                };
                findMany: {
                    args: Prisma.metodo_pagoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$metodo_pagoPayload>[];
                };
                create: {
                    args: Prisma.metodo_pagoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$metodo_pagoPayload>;
                };
                createMany: {
                    args: Prisma.metodo_pagoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.metodo_pagoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$metodo_pagoPayload>;
                };
                update: {
                    args: Prisma.metodo_pagoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$metodo_pagoPayload>;
                };
                deleteMany: {
                    args: Prisma.metodo_pagoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.metodo_pagoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.metodo_pagoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$metodo_pagoPayload>;
                };
                aggregate: {
                    args: Prisma.Metodo_pagoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMetodo_pago>;
                };
                groupBy: {
                    args: Prisma.metodo_pagoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Metodo_pagoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.metodo_pagoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Metodo_pagoCountAggregateOutputType> | number;
                };
            };
        };
        productos: {
            payload: Prisma.$productosPayload<ExtArgs>;
            fields: Prisma.productosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.productosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.productosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productosPayload>;
                };
                findFirst: {
                    args: Prisma.productosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.productosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productosPayload>;
                };
                findMany: {
                    args: Prisma.productosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productosPayload>[];
                };
                create: {
                    args: Prisma.productosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productosPayload>;
                };
                createMany: {
                    args: Prisma.productosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.productosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productosPayload>;
                };
                update: {
                    args: Prisma.productosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productosPayload>;
                };
                deleteMany: {
                    args: Prisma.productosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.productosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.productosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productosPayload>;
                };
                aggregate: {
                    args: Prisma.ProductosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductos>;
                };
                groupBy: {
                    args: Prisma.productosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.productosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductosCountAggregateOutputType> | number;
                };
            };
        };
        roles: {
            payload: Prisma.$rolesPayload<ExtArgs>;
            fields: Prisma.rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findFirst: {
                    args: Prisma.rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findMany: {
                    args: Prisma.rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                create: {
                    args: Prisma.rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                createMany: {
                    args: Prisma.rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                update: {
                    args: Prisma.rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                aggregate: {
                    args: Prisma.RolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>;
                };
                groupBy: {
                    args: Prisma.rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number;
                };
            };
        };
        tiendas: {
            payload: Prisma.$tiendasPayload<ExtArgs>;
            fields: Prisma.tiendasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tiendasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tiendasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tiendasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tiendasPayload>;
                };
                findFirst: {
                    args: Prisma.tiendasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tiendasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tiendasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tiendasPayload>;
                };
                findMany: {
                    args: Prisma.tiendasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tiendasPayload>[];
                };
                create: {
                    args: Prisma.tiendasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tiendasPayload>;
                };
                createMany: {
                    args: Prisma.tiendasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.tiendasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tiendasPayload>;
                };
                update: {
                    args: Prisma.tiendasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tiendasPayload>;
                };
                deleteMany: {
                    args: Prisma.tiendasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tiendasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.tiendasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tiendasPayload>;
                };
                aggregate: {
                    args: Prisma.TiendasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTiendas>;
                };
                groupBy: {
                    args: Prisma.tiendasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TiendasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tiendasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TiendasCountAggregateOutputType> | number;
                };
            };
        };
        usuarios: {
            payload: Prisma.$usuariosPayload<ExtArgs>;
            fields: Prisma.usuariosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usuariosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>;
                };
                findFirst: {
                    args: Prisma.usuariosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>;
                };
                findMany: {
                    args: Prisma.usuariosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>[];
                };
                create: {
                    args: Prisma.usuariosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>;
                };
                createMany: {
                    args: Prisma.usuariosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.usuariosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>;
                };
                update: {
                    args: Prisma.usuariosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>;
                };
                deleteMany: {
                    args: Prisma.usuariosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usuariosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.usuariosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>;
                };
                aggregate: {
                    args: Prisma.UsuariosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuarios>;
                };
                groupBy: {
                    args: Prisma.usuariosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuariosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usuariosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuariosCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CategoriasScalarFieldEnum: {
    readonly id_categoria: "id_categoria";
    readonly nombre_categoria: "nombre_categoria";
    readonly id_tienda: "id_tienda";
};
export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum];
export declare const ClientesScalarFieldEnum: {
    readonly id_cliente: "id_cliente";
    readonly documento_cliente: "documento_cliente";
    readonly nombre_cliente: "nombre_cliente";
    readonly telefono_cliente: "telefono_cliente";
    readonly correo_cliente: "correo_cliente";
    readonly id_tienda: "id_tienda";
};
export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum];
export declare const Detalle_facturaScalarFieldEnum: {
    readonly id_detalle: "id_detalle";
    readonly cantidad: "cantidad";
    readonly precio_unitario: "precio_unitario";
    readonly subtotal: "subtotal";
    readonly id_factura: "id_factura";
    readonly id_producto: "id_producto";
};
export type Detalle_facturaScalarFieldEnum = (typeof Detalle_facturaScalarFieldEnum)[keyof typeof Detalle_facturaScalarFieldEnum];
export declare const FacturaScalarFieldEnum: {
    readonly id_factura: "id_factura";
    readonly numero_factura: "numero_factura";
    readonly fecha: "fecha";
    readonly total: "total";
    readonly id_usuario: "id_usuario";
    readonly id_cliente: "id_cliente";
    readonly id_tienda: "id_tienda";
    readonly id_pago: "id_pago";
};
export type FacturaScalarFieldEnum = (typeof FacturaScalarFieldEnum)[keyof typeof FacturaScalarFieldEnum];
export declare const Metodo_pagoScalarFieldEnum: {
    readonly id_pago: "id_pago";
    readonly tipo_pago: "tipo_pago";
};
export type Metodo_pagoScalarFieldEnum = (typeof Metodo_pagoScalarFieldEnum)[keyof typeof Metodo_pagoScalarFieldEnum];
export declare const ProductosScalarFieldEnum: {
    readonly id_producto: "id_producto";
    readonly codigo_barras: "codigo_barras";
    readonly nombre_producto: "nombre_producto";
    readonly precio_compra: "precio_compra";
    readonly precio_venta: "precio_venta";
    readonly stock: "stock";
    readonly estado: "estado";
    readonly id_categoria: "id_categoria";
    readonly id_tienda: "id_tienda";
};
export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly id_rol: "id_rol";
    readonly nombre_rol: "nombre_rol";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const TiendasScalarFieldEnum: {
    readonly id_tienda: "id_tienda";
    readonly nombre_tienda: "nombre_tienda";
    readonly direccion_tienda: "direccion_tienda";
    readonly telefono_tienda: "telefono_tienda";
    readonly correo: "correo";
    readonly nit: "nit";
};
export type TiendasScalarFieldEnum = (typeof TiendasScalarFieldEnum)[keyof typeof TiendasScalarFieldEnum];
export declare const UsuariosScalarFieldEnum: {
    readonly id_usuario: "id_usuario";
    readonly nombre: "nombre";
    readonly documento: "documento";
    readonly fecha_registro: "fecha_registro";
    readonly contrasena: "contrasena";
    readonly estado: "estado";
    readonly id_rol: "id_rol";
    readonly id_tienda: "id_tienda";
};
export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const categoriasOrderByRelevanceFieldEnum: {
    readonly nombre_categoria: "nombre_categoria";
};
export type categoriasOrderByRelevanceFieldEnum = (typeof categoriasOrderByRelevanceFieldEnum)[keyof typeof categoriasOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const clientesOrderByRelevanceFieldEnum: {
    readonly documento_cliente: "documento_cliente";
    readonly nombre_cliente: "nombre_cliente";
    readonly telefono_cliente: "telefono_cliente";
    readonly correo_cliente: "correo_cliente";
};
export type clientesOrderByRelevanceFieldEnum = (typeof clientesOrderByRelevanceFieldEnum)[keyof typeof clientesOrderByRelevanceFieldEnum];
export declare const facturaOrderByRelevanceFieldEnum: {
    readonly numero_factura: "numero_factura";
};
export type facturaOrderByRelevanceFieldEnum = (typeof facturaOrderByRelevanceFieldEnum)[keyof typeof facturaOrderByRelevanceFieldEnum];
export declare const metodo_pagoOrderByRelevanceFieldEnum: {
    readonly tipo_pago: "tipo_pago";
};
export type metodo_pagoOrderByRelevanceFieldEnum = (typeof metodo_pagoOrderByRelevanceFieldEnum)[keyof typeof metodo_pagoOrderByRelevanceFieldEnum];
export declare const productosOrderByRelevanceFieldEnum: {
    readonly codigo_barras: "codigo_barras";
    readonly nombre_producto: "nombre_producto";
};
export type productosOrderByRelevanceFieldEnum = (typeof productosOrderByRelevanceFieldEnum)[keyof typeof productosOrderByRelevanceFieldEnum];
export declare const rolesOrderByRelevanceFieldEnum: {
    readonly nombre_rol: "nombre_rol";
};
export type rolesOrderByRelevanceFieldEnum = (typeof rolesOrderByRelevanceFieldEnum)[keyof typeof rolesOrderByRelevanceFieldEnum];
export declare const tiendasOrderByRelevanceFieldEnum: {
    readonly nombre_tienda: "nombre_tienda";
    readonly direccion_tienda: "direccion_tienda";
    readonly telefono_tienda: "telefono_tienda";
    readonly correo: "correo";
    readonly nit: "nit";
};
export type tiendasOrderByRelevanceFieldEnum = (typeof tiendasOrderByRelevanceFieldEnum)[keyof typeof tiendasOrderByRelevanceFieldEnum];
export declare const usuariosOrderByRelevanceFieldEnum: {
    readonly nombre: "nombre";
    readonly documento: "documento";
    readonly contrasena: "contrasena";
};
export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    categorias?: Prisma.categoriasOmit;
    clientes?: Prisma.clientesOmit;
    detalle_factura?: Prisma.detalle_facturaOmit;
    factura?: Prisma.facturaOmit;
    metodo_pago?: Prisma.metodo_pagoOmit;
    productos?: Prisma.productosOmit;
    roles?: Prisma.rolesOmit;
    tiendas?: Prisma.tiendasOmit;
    usuarios?: Prisma.usuariosOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
