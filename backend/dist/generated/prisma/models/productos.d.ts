import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type productosModel = runtime.Types.Result.DefaultSelection<Prisma.$productosPayload>;
export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null;
    _avg: ProductosAvgAggregateOutputType | null;
    _sum: ProductosSumAggregateOutputType | null;
    _min: ProductosMinAggregateOutputType | null;
    _max: ProductosMaxAggregateOutputType | null;
};
export type ProductosAvgAggregateOutputType = {
    id_producto: number | null;
    precio_compra: runtime.Decimal | null;
    precio_venta: runtime.Decimal | null;
    stock: runtime.Decimal | null;
    id_categoria: number | null;
    id_tienda: number | null;
};
export type ProductosSumAggregateOutputType = {
    id_producto: number | null;
    precio_compra: runtime.Decimal | null;
    precio_venta: runtime.Decimal | null;
    stock: runtime.Decimal | null;
    id_categoria: number | null;
    id_tienda: number | null;
};
export type ProductosMinAggregateOutputType = {
    id_producto: number | null;
    codigo_barras: string | null;
    nombre_producto: string | null;
    precio_compra: runtime.Decimal | null;
    precio_venta: runtime.Decimal | null;
    stock: runtime.Decimal | null;
    estado: boolean | null;
    id_categoria: number | null;
    id_tienda: number | null;
};
export type ProductosMaxAggregateOutputType = {
    id_producto: number | null;
    codigo_barras: string | null;
    nombre_producto: string | null;
    precio_compra: runtime.Decimal | null;
    precio_venta: runtime.Decimal | null;
    stock: runtime.Decimal | null;
    estado: boolean | null;
    id_categoria: number | null;
    id_tienda: number | null;
};
export type ProductosCountAggregateOutputType = {
    id_producto: number;
    codigo_barras: number;
    nombre_producto: number;
    precio_compra: number;
    precio_venta: number;
    stock: number;
    estado: number;
    id_categoria: number;
    id_tienda: number;
    _all: number;
};
export type ProductosAvgAggregateInputType = {
    id_producto?: true;
    precio_compra?: true;
    precio_venta?: true;
    stock?: true;
    id_categoria?: true;
    id_tienda?: true;
};
export type ProductosSumAggregateInputType = {
    id_producto?: true;
    precio_compra?: true;
    precio_venta?: true;
    stock?: true;
    id_categoria?: true;
    id_tienda?: true;
};
export type ProductosMinAggregateInputType = {
    id_producto?: true;
    codigo_barras?: true;
    nombre_producto?: true;
    precio_compra?: true;
    precio_venta?: true;
    stock?: true;
    estado?: true;
    id_categoria?: true;
    id_tienda?: true;
};
export type ProductosMaxAggregateInputType = {
    id_producto?: true;
    codigo_barras?: true;
    nombre_producto?: true;
    precio_compra?: true;
    precio_venta?: true;
    stock?: true;
    estado?: true;
    id_categoria?: true;
    id_tienda?: true;
};
export type ProductosCountAggregateInputType = {
    id_producto?: true;
    codigo_barras?: true;
    nombre_producto?: true;
    precio_compra?: true;
    precio_venta?: true;
    stock?: true;
    estado?: true;
    id_categoria?: true;
    id_tienda?: true;
    _all?: true;
};
export type ProductosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productosWhereInput;
    orderBy?: Prisma.productosOrderByWithRelationInput | Prisma.productosOrderByWithRelationInput[];
    cursor?: Prisma.productosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductosCountAggregateInputType;
    _avg?: ProductosAvgAggregateInputType;
    _sum?: ProductosSumAggregateInputType;
    _min?: ProductosMinAggregateInputType;
    _max?: ProductosMaxAggregateInputType;
};
export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
    [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductos[P]> : Prisma.GetScalarType<T[P], AggregateProductos[P]>;
};
export type productosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productosWhereInput;
    orderBy?: Prisma.productosOrderByWithAggregationInput | Prisma.productosOrderByWithAggregationInput[];
    by: Prisma.ProductosScalarFieldEnum[] | Prisma.ProductosScalarFieldEnum;
    having?: Prisma.productosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductosCountAggregateInputType | true;
    _avg?: ProductosAvgAggregateInputType;
    _sum?: ProductosSumAggregateInputType;
    _min?: ProductosMinAggregateInputType;
    _max?: ProductosMaxAggregateInputType;
};
export type ProductosGroupByOutputType = {
    id_producto: number;
    codigo_barras: string | null;
    nombre_producto: string;
    precio_compra: runtime.Decimal;
    precio_venta: runtime.Decimal;
    stock: runtime.Decimal;
    estado: boolean;
    id_categoria: number;
    id_tienda: number;
    _count: ProductosCountAggregateOutputType | null;
    _avg: ProductosAvgAggregateOutputType | null;
    _sum: ProductosSumAggregateOutputType | null;
    _min: ProductosMinAggregateOutputType | null;
    _max: ProductosMaxAggregateOutputType | null;
};
export type GetProductosGroupByPayload<T extends productosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductosGroupByOutputType[P]>;
}>>;
export type productosWhereInput = {
    AND?: Prisma.productosWhereInput | Prisma.productosWhereInput[];
    OR?: Prisma.productosWhereInput[];
    NOT?: Prisma.productosWhereInput | Prisma.productosWhereInput[];
    id_producto?: Prisma.IntFilter<"productos"> | number;
    codigo_barras?: Prisma.StringNullableFilter<"productos"> | string | null;
    nombre_producto?: Prisma.StringFilter<"productos"> | string;
    precio_compra?: Prisma.DecimalFilter<"productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFilter<"productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFilter<"productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFilter<"productos"> | boolean;
    id_categoria?: Prisma.IntFilter<"productos"> | number;
    id_tienda?: Prisma.IntFilter<"productos"> | number;
    detalle_factura?: Prisma.Detalle_facturaListRelationFilter;
    categorias?: Prisma.XOR<Prisma.CategoriasScalarRelationFilter, Prisma.categoriasWhereInput>;
    tiendas?: Prisma.XOR<Prisma.TiendasScalarRelationFilter, Prisma.tiendasWhereInput>;
};
export type productosOrderByWithRelationInput = {
    id_producto?: Prisma.SortOrder;
    codigo_barras?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_producto?: Prisma.SortOrder;
    precio_compra?: Prisma.SortOrder;
    precio_venta?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    detalle_factura?: Prisma.detalle_facturaOrderByRelationAggregateInput;
    categorias?: Prisma.categoriasOrderByWithRelationInput;
    tiendas?: Prisma.tiendasOrderByWithRelationInput;
    _relevance?: Prisma.productosOrderByRelevanceInput;
};
export type productosWhereUniqueInput = Prisma.AtLeast<{
    id_producto?: number;
    AND?: Prisma.productosWhereInput | Prisma.productosWhereInput[];
    OR?: Prisma.productosWhereInput[];
    NOT?: Prisma.productosWhereInput | Prisma.productosWhereInput[];
    codigo_barras?: Prisma.StringNullableFilter<"productos"> | string | null;
    nombre_producto?: Prisma.StringFilter<"productos"> | string;
    precio_compra?: Prisma.DecimalFilter<"productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFilter<"productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFilter<"productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFilter<"productos"> | boolean;
    id_categoria?: Prisma.IntFilter<"productos"> | number;
    id_tienda?: Prisma.IntFilter<"productos"> | number;
    detalle_factura?: Prisma.Detalle_facturaListRelationFilter;
    categorias?: Prisma.XOR<Prisma.CategoriasScalarRelationFilter, Prisma.categoriasWhereInput>;
    tiendas?: Prisma.XOR<Prisma.TiendasScalarRelationFilter, Prisma.tiendasWhereInput>;
}, "id_producto">;
export type productosOrderByWithAggregationInput = {
    id_producto?: Prisma.SortOrder;
    codigo_barras?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_producto?: Prisma.SortOrder;
    precio_compra?: Prisma.SortOrder;
    precio_venta?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    _count?: Prisma.productosCountOrderByAggregateInput;
    _avg?: Prisma.productosAvgOrderByAggregateInput;
    _max?: Prisma.productosMaxOrderByAggregateInput;
    _min?: Prisma.productosMinOrderByAggregateInput;
    _sum?: Prisma.productosSumOrderByAggregateInput;
};
export type productosScalarWhereWithAggregatesInput = {
    AND?: Prisma.productosScalarWhereWithAggregatesInput | Prisma.productosScalarWhereWithAggregatesInput[];
    OR?: Prisma.productosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.productosScalarWhereWithAggregatesInput | Prisma.productosScalarWhereWithAggregatesInput[];
    id_producto?: Prisma.IntWithAggregatesFilter<"productos"> | number;
    codigo_barras?: Prisma.StringNullableWithAggregatesFilter<"productos"> | string | null;
    nombre_producto?: Prisma.StringWithAggregatesFilter<"productos"> | string;
    precio_compra?: Prisma.DecimalWithAggregatesFilter<"productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalWithAggregatesFilter<"productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalWithAggregatesFilter<"productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolWithAggregatesFilter<"productos"> | boolean;
    id_categoria?: Prisma.IntWithAggregatesFilter<"productos"> | number;
    id_tienda?: Prisma.IntWithAggregatesFilter<"productos"> | number;
};
export type productosCreateInput = {
    codigo_barras?: string | null;
    nombre_producto: string;
    precio_compra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    detalle_factura?: Prisma.detalle_facturaCreateNestedManyWithoutProductosInput;
    categorias: Prisma.categoriasCreateNestedOneWithoutProductosInput;
    tiendas: Prisma.tiendasCreateNestedOneWithoutProductosInput;
};
export type productosUncheckedCreateInput = {
    id_producto?: number;
    codigo_barras?: string | null;
    nombre_producto: string;
    precio_compra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    id_categoria: number;
    id_tienda: number;
    detalle_factura?: Prisma.detalle_facturaUncheckedCreateNestedManyWithoutProductosInput;
};
export type productosUpdateInput = {
    codigo_barras?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_producto?: Prisma.StringFieldUpdateOperationsInput | string;
    precio_compra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    detalle_factura?: Prisma.detalle_facturaUpdateManyWithoutProductosNestedInput;
    categorias?: Prisma.categoriasUpdateOneRequiredWithoutProductosNestedInput;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutProductosNestedInput;
};
export type productosUncheckedUpdateInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_barras?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_producto?: Prisma.StringFieldUpdateOperationsInput | string;
    precio_compra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    detalle_factura?: Prisma.detalle_facturaUncheckedUpdateManyWithoutProductosNestedInput;
};
export type productosCreateManyInput = {
    id_producto?: number;
    codigo_barras?: string | null;
    nombre_producto: string;
    precio_compra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    id_categoria: number;
    id_tienda: number;
};
export type productosUpdateManyMutationInput = {
    codigo_barras?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_producto?: Prisma.StringFieldUpdateOperationsInput | string;
    precio_compra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type productosUncheckedUpdateManyInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_barras?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_producto?: Prisma.StringFieldUpdateOperationsInput | string;
    precio_compra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductosListRelationFilter = {
    every?: Prisma.productosWhereInput;
    some?: Prisma.productosWhereInput;
    none?: Prisma.productosWhereInput;
};
export type productosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductosScalarRelationFilter = {
    is?: Prisma.productosWhereInput;
    isNot?: Prisma.productosWhereInput;
};
export type productosOrderByRelevanceInput = {
    fields: Prisma.productosOrderByRelevanceFieldEnum | Prisma.productosOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type productosCountOrderByAggregateInput = {
    id_producto?: Prisma.SortOrder;
    codigo_barras?: Prisma.SortOrder;
    nombre_producto?: Prisma.SortOrder;
    precio_compra?: Prisma.SortOrder;
    precio_venta?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type productosAvgOrderByAggregateInput = {
    id_producto?: Prisma.SortOrder;
    precio_compra?: Prisma.SortOrder;
    precio_venta?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type productosMaxOrderByAggregateInput = {
    id_producto?: Prisma.SortOrder;
    codigo_barras?: Prisma.SortOrder;
    nombre_producto?: Prisma.SortOrder;
    precio_compra?: Prisma.SortOrder;
    precio_venta?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type productosMinOrderByAggregateInput = {
    id_producto?: Prisma.SortOrder;
    codigo_barras?: Prisma.SortOrder;
    nombre_producto?: Prisma.SortOrder;
    precio_compra?: Prisma.SortOrder;
    precio_venta?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type productosSumOrderByAggregateInput = {
    id_producto?: Prisma.SortOrder;
    precio_compra?: Prisma.SortOrder;
    precio_venta?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type productosCreateNestedManyWithoutCategoriasInput = {
    create?: Prisma.XOR<Prisma.productosCreateWithoutCategoriasInput, Prisma.productosUncheckedCreateWithoutCategoriasInput> | Prisma.productosCreateWithoutCategoriasInput[] | Prisma.productosUncheckedCreateWithoutCategoriasInput[];
    connectOrCreate?: Prisma.productosCreateOrConnectWithoutCategoriasInput | Prisma.productosCreateOrConnectWithoutCategoriasInput[];
    createMany?: Prisma.productosCreateManyCategoriasInputEnvelope;
    connect?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
};
export type productosUncheckedCreateNestedManyWithoutCategoriasInput = {
    create?: Prisma.XOR<Prisma.productosCreateWithoutCategoriasInput, Prisma.productosUncheckedCreateWithoutCategoriasInput> | Prisma.productosCreateWithoutCategoriasInput[] | Prisma.productosUncheckedCreateWithoutCategoriasInput[];
    connectOrCreate?: Prisma.productosCreateOrConnectWithoutCategoriasInput | Prisma.productosCreateOrConnectWithoutCategoriasInput[];
    createMany?: Prisma.productosCreateManyCategoriasInputEnvelope;
    connect?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
};
export type productosUpdateManyWithoutCategoriasNestedInput = {
    create?: Prisma.XOR<Prisma.productosCreateWithoutCategoriasInput, Prisma.productosUncheckedCreateWithoutCategoriasInput> | Prisma.productosCreateWithoutCategoriasInput[] | Prisma.productosUncheckedCreateWithoutCategoriasInput[];
    connectOrCreate?: Prisma.productosCreateOrConnectWithoutCategoriasInput | Prisma.productosCreateOrConnectWithoutCategoriasInput[];
    upsert?: Prisma.productosUpsertWithWhereUniqueWithoutCategoriasInput | Prisma.productosUpsertWithWhereUniqueWithoutCategoriasInput[];
    createMany?: Prisma.productosCreateManyCategoriasInputEnvelope;
    set?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    disconnect?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    delete?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    connect?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    update?: Prisma.productosUpdateWithWhereUniqueWithoutCategoriasInput | Prisma.productosUpdateWithWhereUniqueWithoutCategoriasInput[];
    updateMany?: Prisma.productosUpdateManyWithWhereWithoutCategoriasInput | Prisma.productosUpdateManyWithWhereWithoutCategoriasInput[];
    deleteMany?: Prisma.productosScalarWhereInput | Prisma.productosScalarWhereInput[];
};
export type productosUncheckedUpdateManyWithoutCategoriasNestedInput = {
    create?: Prisma.XOR<Prisma.productosCreateWithoutCategoriasInput, Prisma.productosUncheckedCreateWithoutCategoriasInput> | Prisma.productosCreateWithoutCategoriasInput[] | Prisma.productosUncheckedCreateWithoutCategoriasInput[];
    connectOrCreate?: Prisma.productosCreateOrConnectWithoutCategoriasInput | Prisma.productosCreateOrConnectWithoutCategoriasInput[];
    upsert?: Prisma.productosUpsertWithWhereUniqueWithoutCategoriasInput | Prisma.productosUpsertWithWhereUniqueWithoutCategoriasInput[];
    createMany?: Prisma.productosCreateManyCategoriasInputEnvelope;
    set?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    disconnect?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    delete?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    connect?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    update?: Prisma.productosUpdateWithWhereUniqueWithoutCategoriasInput | Prisma.productosUpdateWithWhereUniqueWithoutCategoriasInput[];
    updateMany?: Prisma.productosUpdateManyWithWhereWithoutCategoriasInput | Prisma.productosUpdateManyWithWhereWithoutCategoriasInput[];
    deleteMany?: Prisma.productosScalarWhereInput | Prisma.productosScalarWhereInput[];
};
export type productosCreateNestedOneWithoutDetalle_facturaInput = {
    create?: Prisma.XOR<Prisma.productosCreateWithoutDetalle_facturaInput, Prisma.productosUncheckedCreateWithoutDetalle_facturaInput>;
    connectOrCreate?: Prisma.productosCreateOrConnectWithoutDetalle_facturaInput;
    connect?: Prisma.productosWhereUniqueInput;
};
export type productosUpdateOneRequiredWithoutDetalle_facturaNestedInput = {
    create?: Prisma.XOR<Prisma.productosCreateWithoutDetalle_facturaInput, Prisma.productosUncheckedCreateWithoutDetalle_facturaInput>;
    connectOrCreate?: Prisma.productosCreateOrConnectWithoutDetalle_facturaInput;
    upsert?: Prisma.productosUpsertWithoutDetalle_facturaInput;
    connect?: Prisma.productosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productosUpdateToOneWithWhereWithoutDetalle_facturaInput, Prisma.productosUpdateWithoutDetalle_facturaInput>, Prisma.productosUncheckedUpdateWithoutDetalle_facturaInput>;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type productosCreateNestedManyWithoutTiendasInput = {
    create?: Prisma.XOR<Prisma.productosCreateWithoutTiendasInput, Prisma.productosUncheckedCreateWithoutTiendasInput> | Prisma.productosCreateWithoutTiendasInput[] | Prisma.productosUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.productosCreateOrConnectWithoutTiendasInput | Prisma.productosCreateOrConnectWithoutTiendasInput[];
    createMany?: Prisma.productosCreateManyTiendasInputEnvelope;
    connect?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
};
export type productosUncheckedCreateNestedManyWithoutTiendasInput = {
    create?: Prisma.XOR<Prisma.productosCreateWithoutTiendasInput, Prisma.productosUncheckedCreateWithoutTiendasInput> | Prisma.productosCreateWithoutTiendasInput[] | Prisma.productosUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.productosCreateOrConnectWithoutTiendasInput | Prisma.productosCreateOrConnectWithoutTiendasInput[];
    createMany?: Prisma.productosCreateManyTiendasInputEnvelope;
    connect?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
};
export type productosUpdateManyWithoutTiendasNestedInput = {
    create?: Prisma.XOR<Prisma.productosCreateWithoutTiendasInput, Prisma.productosUncheckedCreateWithoutTiendasInput> | Prisma.productosCreateWithoutTiendasInput[] | Prisma.productosUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.productosCreateOrConnectWithoutTiendasInput | Prisma.productosCreateOrConnectWithoutTiendasInput[];
    upsert?: Prisma.productosUpsertWithWhereUniqueWithoutTiendasInput | Prisma.productosUpsertWithWhereUniqueWithoutTiendasInput[];
    createMany?: Prisma.productosCreateManyTiendasInputEnvelope;
    set?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    disconnect?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    delete?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    connect?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    update?: Prisma.productosUpdateWithWhereUniqueWithoutTiendasInput | Prisma.productosUpdateWithWhereUniqueWithoutTiendasInput[];
    updateMany?: Prisma.productosUpdateManyWithWhereWithoutTiendasInput | Prisma.productosUpdateManyWithWhereWithoutTiendasInput[];
    deleteMany?: Prisma.productosScalarWhereInput | Prisma.productosScalarWhereInput[];
};
export type productosUncheckedUpdateManyWithoutTiendasNestedInput = {
    create?: Prisma.XOR<Prisma.productosCreateWithoutTiendasInput, Prisma.productosUncheckedCreateWithoutTiendasInput> | Prisma.productosCreateWithoutTiendasInput[] | Prisma.productosUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.productosCreateOrConnectWithoutTiendasInput | Prisma.productosCreateOrConnectWithoutTiendasInput[];
    upsert?: Prisma.productosUpsertWithWhereUniqueWithoutTiendasInput | Prisma.productosUpsertWithWhereUniqueWithoutTiendasInput[];
    createMany?: Prisma.productosCreateManyTiendasInputEnvelope;
    set?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    disconnect?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    delete?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    connect?: Prisma.productosWhereUniqueInput | Prisma.productosWhereUniqueInput[];
    update?: Prisma.productosUpdateWithWhereUniqueWithoutTiendasInput | Prisma.productosUpdateWithWhereUniqueWithoutTiendasInput[];
    updateMany?: Prisma.productosUpdateManyWithWhereWithoutTiendasInput | Prisma.productosUpdateManyWithWhereWithoutTiendasInput[];
    deleteMany?: Prisma.productosScalarWhereInput | Prisma.productosScalarWhereInput[];
};
export type productosCreateWithoutCategoriasInput = {
    codigo_barras?: string | null;
    nombre_producto: string;
    precio_compra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    detalle_factura?: Prisma.detalle_facturaCreateNestedManyWithoutProductosInput;
    tiendas: Prisma.tiendasCreateNestedOneWithoutProductosInput;
};
export type productosUncheckedCreateWithoutCategoriasInput = {
    id_producto?: number;
    codigo_barras?: string | null;
    nombre_producto: string;
    precio_compra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    id_tienda: number;
    detalle_factura?: Prisma.detalle_facturaUncheckedCreateNestedManyWithoutProductosInput;
};
export type productosCreateOrConnectWithoutCategoriasInput = {
    where: Prisma.productosWhereUniqueInput;
    create: Prisma.XOR<Prisma.productosCreateWithoutCategoriasInput, Prisma.productosUncheckedCreateWithoutCategoriasInput>;
};
export type productosCreateManyCategoriasInputEnvelope = {
    data: Prisma.productosCreateManyCategoriasInput | Prisma.productosCreateManyCategoriasInput[];
    skipDuplicates?: boolean;
};
export type productosUpsertWithWhereUniqueWithoutCategoriasInput = {
    where: Prisma.productosWhereUniqueInput;
    update: Prisma.XOR<Prisma.productosUpdateWithoutCategoriasInput, Prisma.productosUncheckedUpdateWithoutCategoriasInput>;
    create: Prisma.XOR<Prisma.productosCreateWithoutCategoriasInput, Prisma.productosUncheckedCreateWithoutCategoriasInput>;
};
export type productosUpdateWithWhereUniqueWithoutCategoriasInput = {
    where: Prisma.productosWhereUniqueInput;
    data: Prisma.XOR<Prisma.productosUpdateWithoutCategoriasInput, Prisma.productosUncheckedUpdateWithoutCategoriasInput>;
};
export type productosUpdateManyWithWhereWithoutCategoriasInput = {
    where: Prisma.productosScalarWhereInput;
    data: Prisma.XOR<Prisma.productosUpdateManyMutationInput, Prisma.productosUncheckedUpdateManyWithoutCategoriasInput>;
};
export type productosScalarWhereInput = {
    AND?: Prisma.productosScalarWhereInput | Prisma.productosScalarWhereInput[];
    OR?: Prisma.productosScalarWhereInput[];
    NOT?: Prisma.productosScalarWhereInput | Prisma.productosScalarWhereInput[];
    id_producto?: Prisma.IntFilter<"productos"> | number;
    codigo_barras?: Prisma.StringNullableFilter<"productos"> | string | null;
    nombre_producto?: Prisma.StringFilter<"productos"> | string;
    precio_compra?: Prisma.DecimalFilter<"productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFilter<"productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFilter<"productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFilter<"productos"> | boolean;
    id_categoria?: Prisma.IntFilter<"productos"> | number;
    id_tienda?: Prisma.IntFilter<"productos"> | number;
};
export type productosCreateWithoutDetalle_facturaInput = {
    codigo_barras?: string | null;
    nombre_producto: string;
    precio_compra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    categorias: Prisma.categoriasCreateNestedOneWithoutProductosInput;
    tiendas: Prisma.tiendasCreateNestedOneWithoutProductosInput;
};
export type productosUncheckedCreateWithoutDetalle_facturaInput = {
    id_producto?: number;
    codigo_barras?: string | null;
    nombre_producto: string;
    precio_compra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    id_categoria: number;
    id_tienda: number;
};
export type productosCreateOrConnectWithoutDetalle_facturaInput = {
    where: Prisma.productosWhereUniqueInput;
    create: Prisma.XOR<Prisma.productosCreateWithoutDetalle_facturaInput, Prisma.productosUncheckedCreateWithoutDetalle_facturaInput>;
};
export type productosUpsertWithoutDetalle_facturaInput = {
    update: Prisma.XOR<Prisma.productosUpdateWithoutDetalle_facturaInput, Prisma.productosUncheckedUpdateWithoutDetalle_facturaInput>;
    create: Prisma.XOR<Prisma.productosCreateWithoutDetalle_facturaInput, Prisma.productosUncheckedCreateWithoutDetalle_facturaInput>;
    where?: Prisma.productosWhereInput;
};
export type productosUpdateToOneWithWhereWithoutDetalle_facturaInput = {
    where?: Prisma.productosWhereInput;
    data: Prisma.XOR<Prisma.productosUpdateWithoutDetalle_facturaInput, Prisma.productosUncheckedUpdateWithoutDetalle_facturaInput>;
};
export type productosUpdateWithoutDetalle_facturaInput = {
    codigo_barras?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_producto?: Prisma.StringFieldUpdateOperationsInput | string;
    precio_compra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categorias?: Prisma.categoriasUpdateOneRequiredWithoutProductosNestedInput;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutProductosNestedInput;
};
export type productosUncheckedUpdateWithoutDetalle_facturaInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_barras?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_producto?: Prisma.StringFieldUpdateOperationsInput | string;
    precio_compra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type productosCreateWithoutTiendasInput = {
    codigo_barras?: string | null;
    nombre_producto: string;
    precio_compra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    detalle_factura?: Prisma.detalle_facturaCreateNestedManyWithoutProductosInput;
    categorias: Prisma.categoriasCreateNestedOneWithoutProductosInput;
};
export type productosUncheckedCreateWithoutTiendasInput = {
    id_producto?: number;
    codigo_barras?: string | null;
    nombre_producto: string;
    precio_compra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    id_categoria: number;
    detalle_factura?: Prisma.detalle_facturaUncheckedCreateNestedManyWithoutProductosInput;
};
export type productosCreateOrConnectWithoutTiendasInput = {
    where: Prisma.productosWhereUniqueInput;
    create: Prisma.XOR<Prisma.productosCreateWithoutTiendasInput, Prisma.productosUncheckedCreateWithoutTiendasInput>;
};
export type productosCreateManyTiendasInputEnvelope = {
    data: Prisma.productosCreateManyTiendasInput | Prisma.productosCreateManyTiendasInput[];
    skipDuplicates?: boolean;
};
export type productosUpsertWithWhereUniqueWithoutTiendasInput = {
    where: Prisma.productosWhereUniqueInput;
    update: Prisma.XOR<Prisma.productosUpdateWithoutTiendasInput, Prisma.productosUncheckedUpdateWithoutTiendasInput>;
    create: Prisma.XOR<Prisma.productosCreateWithoutTiendasInput, Prisma.productosUncheckedCreateWithoutTiendasInput>;
};
export type productosUpdateWithWhereUniqueWithoutTiendasInput = {
    where: Prisma.productosWhereUniqueInput;
    data: Prisma.XOR<Prisma.productosUpdateWithoutTiendasInput, Prisma.productosUncheckedUpdateWithoutTiendasInput>;
};
export type productosUpdateManyWithWhereWithoutTiendasInput = {
    where: Prisma.productosScalarWhereInput;
    data: Prisma.XOR<Prisma.productosUpdateManyMutationInput, Prisma.productosUncheckedUpdateManyWithoutTiendasInput>;
};
export type productosCreateManyCategoriasInput = {
    id_producto?: number;
    codigo_barras?: string | null;
    nombre_producto: string;
    precio_compra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    id_tienda: number;
};
export type productosUpdateWithoutCategoriasInput = {
    codigo_barras?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_producto?: Prisma.StringFieldUpdateOperationsInput | string;
    precio_compra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    detalle_factura?: Prisma.detalle_facturaUpdateManyWithoutProductosNestedInput;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutProductosNestedInput;
};
export type productosUncheckedUpdateWithoutCategoriasInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_barras?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_producto?: Prisma.StringFieldUpdateOperationsInput | string;
    precio_compra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    detalle_factura?: Prisma.detalle_facturaUncheckedUpdateManyWithoutProductosNestedInput;
};
export type productosUncheckedUpdateManyWithoutCategoriasInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_barras?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_producto?: Prisma.StringFieldUpdateOperationsInput | string;
    precio_compra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type productosCreateManyTiendasInput = {
    id_producto?: number;
    codigo_barras?: string | null;
    nombre_producto: string;
    precio_compra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    id_categoria: number;
};
export type productosUpdateWithoutTiendasInput = {
    codigo_barras?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_producto?: Prisma.StringFieldUpdateOperationsInput | string;
    precio_compra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    detalle_factura?: Prisma.detalle_facturaUpdateManyWithoutProductosNestedInput;
    categorias?: Prisma.categoriasUpdateOneRequiredWithoutProductosNestedInput;
};
export type productosUncheckedUpdateWithoutTiendasInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_barras?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_producto?: Prisma.StringFieldUpdateOperationsInput | string;
    precio_compra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    detalle_factura?: Prisma.detalle_facturaUncheckedUpdateManyWithoutProductosNestedInput;
};
export type productosUncheckedUpdateManyWithoutTiendasInput = {
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_barras?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_producto?: Prisma.StringFieldUpdateOperationsInput | string;
    precio_compra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_venta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductosCountOutputType = {
    detalle_factura: number;
};
export type ProductosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalle_factura?: boolean | ProductosCountOutputTypeCountDetalle_facturaArgs;
};
export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductosCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductosCountOutputTypeCountDetalle_facturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_facturaWhereInput;
};
export type productosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_producto?: boolean;
    codigo_barras?: boolean;
    nombre_producto?: boolean;
    precio_compra?: boolean;
    precio_venta?: boolean;
    stock?: boolean;
    estado?: boolean;
    id_categoria?: boolean;
    id_tienda?: boolean;
    detalle_factura?: boolean | Prisma.productos$detalle_facturaArgs<ExtArgs>;
    categorias?: boolean | Prisma.categoriasDefaultArgs<ExtArgs>;
    tiendas?: boolean | Prisma.tiendasDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productos"]>;
export type productosSelectScalar = {
    id_producto?: boolean;
    codigo_barras?: boolean;
    nombre_producto?: boolean;
    precio_compra?: boolean;
    precio_venta?: boolean;
    stock?: boolean;
    estado?: boolean;
    id_categoria?: boolean;
    id_tienda?: boolean;
};
export type productosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_producto" | "codigo_barras" | "nombre_producto" | "precio_compra" | "precio_venta" | "stock" | "estado" | "id_categoria" | "id_tienda", ExtArgs["result"]["productos"]>;
export type productosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalle_factura?: boolean | Prisma.productos$detalle_facturaArgs<ExtArgs>;
    categorias?: boolean | Prisma.categoriasDefaultArgs<ExtArgs>;
    tiendas?: boolean | Prisma.tiendasDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $productosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "productos";
    objects: {
        detalle_factura: Prisma.$detalle_facturaPayload<ExtArgs>[];
        categorias: Prisma.$categoriasPayload<ExtArgs>;
        tiendas: Prisma.$tiendasPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_producto: number;
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: runtime.Decimal;
        precio_venta: runtime.Decimal;
        stock: runtime.Decimal;
        estado: boolean;
        id_categoria: number;
        id_tienda: number;
    }, ExtArgs["result"]["productos"]>;
    composites: {};
};
export type productosGetPayload<S extends boolean | null | undefined | productosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$productosPayload, S>;
export type productosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<productosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductosCountAggregateInputType | true;
};
export interface productosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['productos'];
        meta: {
            name: 'productos';
        };
    };
    findUnique<T extends productosFindUniqueArgs>(args: Prisma.SelectSubset<T, productosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__productosClient<runtime.Types.Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends productosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__productosClient<runtime.Types.Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends productosFindFirstArgs>(args?: Prisma.SelectSubset<T, productosFindFirstArgs<ExtArgs>>): Prisma.Prisma__productosClient<runtime.Types.Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends productosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, productosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__productosClient<runtime.Types.Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends productosFindManyArgs>(args?: Prisma.SelectSubset<T, productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends productosCreateArgs>(args: Prisma.SelectSubset<T, productosCreateArgs<ExtArgs>>): Prisma.Prisma__productosClient<runtime.Types.Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends productosCreateManyArgs>(args?: Prisma.SelectSubset<T, productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends productosDeleteArgs>(args: Prisma.SelectSubset<T, productosDeleteArgs<ExtArgs>>): Prisma.Prisma__productosClient<runtime.Types.Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends productosUpdateArgs>(args: Prisma.SelectSubset<T, productosUpdateArgs<ExtArgs>>): Prisma.Prisma__productosClient<runtime.Types.Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends productosDeleteManyArgs>(args?: Prisma.SelectSubset<T, productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends productosUpdateManyArgs>(args: Prisma.SelectSubset<T, productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends productosUpsertArgs>(args: Prisma.SelectSubset<T, productosUpsertArgs<ExtArgs>>): Prisma.Prisma__productosClient<runtime.Types.Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends productosCountArgs>(args?: Prisma.Subset<T, productosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductosCountAggregateOutputType> : number>;
    aggregate<T extends ProductosAggregateArgs>(args: Prisma.Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>;
    groupBy<T extends productosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: productosGroupByArgs['orderBy'];
    } : {
        orderBy?: productosGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: productosFieldRefs;
}
export interface Prisma__productosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    detalle_factura<T extends Prisma.productos$detalle_facturaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.productos$detalle_facturaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    categorias<T extends Prisma.categoriasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categoriasDefaultArgs<ExtArgs>>): Prisma.Prisma__categoriasClient<runtime.Types.Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tiendas<T extends Prisma.tiendasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tiendasDefaultArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface productosFieldRefs {
    readonly id_producto: Prisma.FieldRef<"productos", 'Int'>;
    readonly codigo_barras: Prisma.FieldRef<"productos", 'String'>;
    readonly nombre_producto: Prisma.FieldRef<"productos", 'String'>;
    readonly precio_compra: Prisma.FieldRef<"productos", 'Decimal'>;
    readonly precio_venta: Prisma.FieldRef<"productos", 'Decimal'>;
    readonly stock: Prisma.FieldRef<"productos", 'Decimal'>;
    readonly estado: Prisma.FieldRef<"productos", 'Boolean'>;
    readonly id_categoria: Prisma.FieldRef<"productos", 'Int'>;
    readonly id_tienda: Prisma.FieldRef<"productos", 'Int'>;
}
export type productosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productosSelect<ExtArgs> | null;
    omit?: Prisma.productosOmit<ExtArgs> | null;
    include?: Prisma.productosInclude<ExtArgs> | null;
    where: Prisma.productosWhereUniqueInput;
};
export type productosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productosSelect<ExtArgs> | null;
    omit?: Prisma.productosOmit<ExtArgs> | null;
    include?: Prisma.productosInclude<ExtArgs> | null;
    where: Prisma.productosWhereUniqueInput;
};
export type productosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productosSelect<ExtArgs> | null;
    omit?: Prisma.productosOmit<ExtArgs> | null;
    include?: Prisma.productosInclude<ExtArgs> | null;
    where?: Prisma.productosWhereInput;
    orderBy?: Prisma.productosOrderByWithRelationInput | Prisma.productosOrderByWithRelationInput[];
    cursor?: Prisma.productosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductosScalarFieldEnum | Prisma.ProductosScalarFieldEnum[];
};
export type productosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productosSelect<ExtArgs> | null;
    omit?: Prisma.productosOmit<ExtArgs> | null;
    include?: Prisma.productosInclude<ExtArgs> | null;
    where?: Prisma.productosWhereInput;
    orderBy?: Prisma.productosOrderByWithRelationInput | Prisma.productosOrderByWithRelationInput[];
    cursor?: Prisma.productosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductosScalarFieldEnum | Prisma.ProductosScalarFieldEnum[];
};
export type productosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productosSelect<ExtArgs> | null;
    omit?: Prisma.productosOmit<ExtArgs> | null;
    include?: Prisma.productosInclude<ExtArgs> | null;
    where?: Prisma.productosWhereInput;
    orderBy?: Prisma.productosOrderByWithRelationInput | Prisma.productosOrderByWithRelationInput[];
    cursor?: Prisma.productosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductosScalarFieldEnum | Prisma.ProductosScalarFieldEnum[];
};
export type productosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productosSelect<ExtArgs> | null;
    omit?: Prisma.productosOmit<ExtArgs> | null;
    include?: Prisma.productosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productosCreateInput, Prisma.productosUncheckedCreateInput>;
};
export type productosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.productosCreateManyInput | Prisma.productosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type productosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productosSelect<ExtArgs> | null;
    omit?: Prisma.productosOmit<ExtArgs> | null;
    include?: Prisma.productosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productosUpdateInput, Prisma.productosUncheckedUpdateInput>;
    where: Prisma.productosWhereUniqueInput;
};
export type productosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.productosUpdateManyMutationInput, Prisma.productosUncheckedUpdateManyInput>;
    where?: Prisma.productosWhereInput;
    limit?: number;
};
export type productosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productosSelect<ExtArgs> | null;
    omit?: Prisma.productosOmit<ExtArgs> | null;
    include?: Prisma.productosInclude<ExtArgs> | null;
    where: Prisma.productosWhereUniqueInput;
    create: Prisma.XOR<Prisma.productosCreateInput, Prisma.productosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.productosUpdateInput, Prisma.productosUncheckedUpdateInput>;
};
export type productosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productosSelect<ExtArgs> | null;
    omit?: Prisma.productosOmit<ExtArgs> | null;
    include?: Prisma.productosInclude<ExtArgs> | null;
    where: Prisma.productosWhereUniqueInput;
};
export type productosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productosWhereInput;
    limit?: number;
};
export type productos$detalle_facturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_facturaSelect<ExtArgs> | null;
    omit?: Prisma.detalle_facturaOmit<ExtArgs> | null;
    include?: Prisma.detalle_facturaInclude<ExtArgs> | null;
    where?: Prisma.detalle_facturaWhereInput;
    orderBy?: Prisma.detalle_facturaOrderByWithRelationInput | Prisma.detalle_facturaOrderByWithRelationInput[];
    cursor?: Prisma.detalle_facturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Detalle_facturaScalarFieldEnum | Prisma.Detalle_facturaScalarFieldEnum[];
};
export type productosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productosSelect<ExtArgs> | null;
    omit?: Prisma.productosOmit<ExtArgs> | null;
    include?: Prisma.productosInclude<ExtArgs> | null;
};
