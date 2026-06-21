import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type detalle_facturaModel = runtime.Types.Result.DefaultSelection<Prisma.$detalle_facturaPayload>;
export type AggregateDetalle_factura = {
    _count: Detalle_facturaCountAggregateOutputType | null;
    _avg: Detalle_facturaAvgAggregateOutputType | null;
    _sum: Detalle_facturaSumAggregateOutputType | null;
    _min: Detalle_facturaMinAggregateOutputType | null;
    _max: Detalle_facturaMaxAggregateOutputType | null;
};
export type Detalle_facturaAvgAggregateOutputType = {
    id_detalle: number | null;
    cantidad: runtime.Decimal | null;
    precio_unitario: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
    id_factura: number | null;
    id_producto: number | null;
};
export type Detalle_facturaSumAggregateOutputType = {
    id_detalle: number | null;
    cantidad: runtime.Decimal | null;
    precio_unitario: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
    id_factura: number | null;
    id_producto: number | null;
};
export type Detalle_facturaMinAggregateOutputType = {
    id_detalle: number | null;
    cantidad: runtime.Decimal | null;
    precio_unitario: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
    id_factura: number | null;
    id_producto: number | null;
};
export type Detalle_facturaMaxAggregateOutputType = {
    id_detalle: number | null;
    cantidad: runtime.Decimal | null;
    precio_unitario: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
    id_factura: number | null;
    id_producto: number | null;
};
export type Detalle_facturaCountAggregateOutputType = {
    id_detalle: number;
    cantidad: number;
    precio_unitario: number;
    subtotal: number;
    id_factura: number;
    id_producto: number;
    _all: number;
};
export type Detalle_facturaAvgAggregateInputType = {
    id_detalle?: true;
    cantidad?: true;
    precio_unitario?: true;
    subtotal?: true;
    id_factura?: true;
    id_producto?: true;
};
export type Detalle_facturaSumAggregateInputType = {
    id_detalle?: true;
    cantidad?: true;
    precio_unitario?: true;
    subtotal?: true;
    id_factura?: true;
    id_producto?: true;
};
export type Detalle_facturaMinAggregateInputType = {
    id_detalle?: true;
    cantidad?: true;
    precio_unitario?: true;
    subtotal?: true;
    id_factura?: true;
    id_producto?: true;
};
export type Detalle_facturaMaxAggregateInputType = {
    id_detalle?: true;
    cantidad?: true;
    precio_unitario?: true;
    subtotal?: true;
    id_factura?: true;
    id_producto?: true;
};
export type Detalle_facturaCountAggregateInputType = {
    id_detalle?: true;
    cantidad?: true;
    precio_unitario?: true;
    subtotal?: true;
    id_factura?: true;
    id_producto?: true;
    _all?: true;
};
export type Detalle_facturaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_facturaWhereInput;
    orderBy?: Prisma.detalle_facturaOrderByWithRelationInput | Prisma.detalle_facturaOrderByWithRelationInput[];
    cursor?: Prisma.detalle_facturaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Detalle_facturaCountAggregateInputType;
    _avg?: Detalle_facturaAvgAggregateInputType;
    _sum?: Detalle_facturaSumAggregateInputType;
    _min?: Detalle_facturaMinAggregateInputType;
    _max?: Detalle_facturaMaxAggregateInputType;
};
export type GetDetalle_facturaAggregateType<T extends Detalle_facturaAggregateArgs> = {
    [P in keyof T & keyof AggregateDetalle_factura]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDetalle_factura[P]> : Prisma.GetScalarType<T[P], AggregateDetalle_factura[P]>;
};
export type detalle_facturaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_facturaWhereInput;
    orderBy?: Prisma.detalle_facturaOrderByWithAggregationInput | Prisma.detalle_facturaOrderByWithAggregationInput[];
    by: Prisma.Detalle_facturaScalarFieldEnum[] | Prisma.Detalle_facturaScalarFieldEnum;
    having?: Prisma.detalle_facturaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Detalle_facturaCountAggregateInputType | true;
    _avg?: Detalle_facturaAvgAggregateInputType;
    _sum?: Detalle_facturaSumAggregateInputType;
    _min?: Detalle_facturaMinAggregateInputType;
    _max?: Detalle_facturaMaxAggregateInputType;
};
export type Detalle_facturaGroupByOutputType = {
    id_detalle: number;
    cantidad: runtime.Decimal;
    precio_unitario: runtime.Decimal;
    subtotal: runtime.Decimal;
    id_factura: number;
    id_producto: number;
    _count: Detalle_facturaCountAggregateOutputType | null;
    _avg: Detalle_facturaAvgAggregateOutputType | null;
    _sum: Detalle_facturaSumAggregateOutputType | null;
    _min: Detalle_facturaMinAggregateOutputType | null;
    _max: Detalle_facturaMaxAggregateOutputType | null;
};
export type GetDetalle_facturaGroupByPayload<T extends detalle_facturaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Detalle_facturaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Detalle_facturaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Detalle_facturaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Detalle_facturaGroupByOutputType[P]>;
}>>;
export type detalle_facturaWhereInput = {
    AND?: Prisma.detalle_facturaWhereInput | Prisma.detalle_facturaWhereInput[];
    OR?: Prisma.detalle_facturaWhereInput[];
    NOT?: Prisma.detalle_facturaWhereInput | Prisma.detalle_facturaWhereInput[];
    id_detalle?: Prisma.IntFilter<"detalle_factura"> | number;
    cantidad?: Prisma.DecimalFilter<"detalle_factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFilter<"detalle_factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"detalle_factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_factura?: Prisma.IntFilter<"detalle_factura"> | number;
    id_producto?: Prisma.IntFilter<"detalle_factura"> | number;
    factura?: Prisma.XOR<Prisma.FacturaScalarRelationFilter, Prisma.facturaWhereInput>;
    productos?: Prisma.XOR<Prisma.ProductosScalarRelationFilter, Prisma.productosWhereInput>;
};
export type detalle_facturaOrderByWithRelationInput = {
    id_detalle?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    factura?: Prisma.facturaOrderByWithRelationInput;
    productos?: Prisma.productosOrderByWithRelationInput;
};
export type detalle_facturaWhereUniqueInput = Prisma.AtLeast<{
    id_detalle?: number;
    AND?: Prisma.detalle_facturaWhereInput | Prisma.detalle_facturaWhereInput[];
    OR?: Prisma.detalle_facturaWhereInput[];
    NOT?: Prisma.detalle_facturaWhereInput | Prisma.detalle_facturaWhereInput[];
    cantidad?: Prisma.DecimalFilter<"detalle_factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFilter<"detalle_factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"detalle_factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_factura?: Prisma.IntFilter<"detalle_factura"> | number;
    id_producto?: Prisma.IntFilter<"detalle_factura"> | number;
    factura?: Prisma.XOR<Prisma.FacturaScalarRelationFilter, Prisma.facturaWhereInput>;
    productos?: Prisma.XOR<Prisma.ProductosScalarRelationFilter, Prisma.productosWhereInput>;
}, "id_detalle">;
export type detalle_facturaOrderByWithAggregationInput = {
    id_detalle?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
    _count?: Prisma.detalle_facturaCountOrderByAggregateInput;
    _avg?: Prisma.detalle_facturaAvgOrderByAggregateInput;
    _max?: Prisma.detalle_facturaMaxOrderByAggregateInput;
    _min?: Prisma.detalle_facturaMinOrderByAggregateInput;
    _sum?: Prisma.detalle_facturaSumOrderByAggregateInput;
};
export type detalle_facturaScalarWhereWithAggregatesInput = {
    AND?: Prisma.detalle_facturaScalarWhereWithAggregatesInput | Prisma.detalle_facturaScalarWhereWithAggregatesInput[];
    OR?: Prisma.detalle_facturaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.detalle_facturaScalarWhereWithAggregatesInput | Prisma.detalle_facturaScalarWhereWithAggregatesInput[];
    id_detalle?: Prisma.IntWithAggregatesFilter<"detalle_factura"> | number;
    cantidad?: Prisma.DecimalWithAggregatesFilter<"detalle_factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalWithAggregatesFilter<"detalle_factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"detalle_factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_factura?: Prisma.IntWithAggregatesFilter<"detalle_factura"> | number;
    id_producto?: Prisma.IntWithAggregatesFilter<"detalle_factura"> | number;
};
export type detalle_facturaCreateInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    factura: Prisma.facturaCreateNestedOneWithoutDetalle_facturaInput;
    productos: Prisma.productosCreateNestedOneWithoutDetalle_facturaInput;
};
export type detalle_facturaUncheckedCreateInput = {
    id_detalle?: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_factura: number;
    id_producto: number;
};
export type detalle_facturaUpdateInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    factura?: Prisma.facturaUpdateOneRequiredWithoutDetalle_facturaNestedInput;
    productos?: Prisma.productosUpdateOneRequiredWithoutDetalle_facturaNestedInput;
};
export type detalle_facturaUncheckedUpdateInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detalle_facturaCreateManyInput = {
    id_detalle?: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_factura: number;
    id_producto: number;
};
export type detalle_facturaUpdateManyMutationInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type detalle_facturaUncheckedUpdateManyInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detalle_facturaCountOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
};
export type detalle_facturaAvgOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
};
export type detalle_facturaMaxOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
};
export type detalle_facturaMinOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
};
export type detalle_facturaSumOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precio_unitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrder;
    id_producto?: Prisma.SortOrder;
};
export type Detalle_facturaListRelationFilter = {
    every?: Prisma.detalle_facturaWhereInput;
    some?: Prisma.detalle_facturaWhereInput;
    none?: Prisma.detalle_facturaWhereInput;
};
export type detalle_facturaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type detalle_facturaCreateNestedManyWithoutFacturaInput = {
    create?: Prisma.XOR<Prisma.detalle_facturaCreateWithoutFacturaInput, Prisma.detalle_facturaUncheckedCreateWithoutFacturaInput> | Prisma.detalle_facturaCreateWithoutFacturaInput[] | Prisma.detalle_facturaUncheckedCreateWithoutFacturaInput[];
    connectOrCreate?: Prisma.detalle_facturaCreateOrConnectWithoutFacturaInput | Prisma.detalle_facturaCreateOrConnectWithoutFacturaInput[];
    createMany?: Prisma.detalle_facturaCreateManyFacturaInputEnvelope;
    connect?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
};
export type detalle_facturaUncheckedCreateNestedManyWithoutFacturaInput = {
    create?: Prisma.XOR<Prisma.detalle_facturaCreateWithoutFacturaInput, Prisma.detalle_facturaUncheckedCreateWithoutFacturaInput> | Prisma.detalle_facturaCreateWithoutFacturaInput[] | Prisma.detalle_facturaUncheckedCreateWithoutFacturaInput[];
    connectOrCreate?: Prisma.detalle_facturaCreateOrConnectWithoutFacturaInput | Prisma.detalle_facturaCreateOrConnectWithoutFacturaInput[];
    createMany?: Prisma.detalle_facturaCreateManyFacturaInputEnvelope;
    connect?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
};
export type detalle_facturaUpdateManyWithoutFacturaNestedInput = {
    create?: Prisma.XOR<Prisma.detalle_facturaCreateWithoutFacturaInput, Prisma.detalle_facturaUncheckedCreateWithoutFacturaInput> | Prisma.detalle_facturaCreateWithoutFacturaInput[] | Prisma.detalle_facturaUncheckedCreateWithoutFacturaInput[];
    connectOrCreate?: Prisma.detalle_facturaCreateOrConnectWithoutFacturaInput | Prisma.detalle_facturaCreateOrConnectWithoutFacturaInput[];
    upsert?: Prisma.detalle_facturaUpsertWithWhereUniqueWithoutFacturaInput | Prisma.detalle_facturaUpsertWithWhereUniqueWithoutFacturaInput[];
    createMany?: Prisma.detalle_facturaCreateManyFacturaInputEnvelope;
    set?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    disconnect?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    delete?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    connect?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    update?: Prisma.detalle_facturaUpdateWithWhereUniqueWithoutFacturaInput | Prisma.detalle_facturaUpdateWithWhereUniqueWithoutFacturaInput[];
    updateMany?: Prisma.detalle_facturaUpdateManyWithWhereWithoutFacturaInput | Prisma.detalle_facturaUpdateManyWithWhereWithoutFacturaInput[];
    deleteMany?: Prisma.detalle_facturaScalarWhereInput | Prisma.detalle_facturaScalarWhereInput[];
};
export type detalle_facturaUncheckedUpdateManyWithoutFacturaNestedInput = {
    create?: Prisma.XOR<Prisma.detalle_facturaCreateWithoutFacturaInput, Prisma.detalle_facturaUncheckedCreateWithoutFacturaInput> | Prisma.detalle_facturaCreateWithoutFacturaInput[] | Prisma.detalle_facturaUncheckedCreateWithoutFacturaInput[];
    connectOrCreate?: Prisma.detalle_facturaCreateOrConnectWithoutFacturaInput | Prisma.detalle_facturaCreateOrConnectWithoutFacturaInput[];
    upsert?: Prisma.detalle_facturaUpsertWithWhereUniqueWithoutFacturaInput | Prisma.detalle_facturaUpsertWithWhereUniqueWithoutFacturaInput[];
    createMany?: Prisma.detalle_facturaCreateManyFacturaInputEnvelope;
    set?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    disconnect?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    delete?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    connect?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    update?: Prisma.detalle_facturaUpdateWithWhereUniqueWithoutFacturaInput | Prisma.detalle_facturaUpdateWithWhereUniqueWithoutFacturaInput[];
    updateMany?: Prisma.detalle_facturaUpdateManyWithWhereWithoutFacturaInput | Prisma.detalle_facturaUpdateManyWithWhereWithoutFacturaInput[];
    deleteMany?: Prisma.detalle_facturaScalarWhereInput | Prisma.detalle_facturaScalarWhereInput[];
};
export type detalle_facturaCreateNestedManyWithoutProductosInput = {
    create?: Prisma.XOR<Prisma.detalle_facturaCreateWithoutProductosInput, Prisma.detalle_facturaUncheckedCreateWithoutProductosInput> | Prisma.detalle_facturaCreateWithoutProductosInput[] | Prisma.detalle_facturaUncheckedCreateWithoutProductosInput[];
    connectOrCreate?: Prisma.detalle_facturaCreateOrConnectWithoutProductosInput | Prisma.detalle_facturaCreateOrConnectWithoutProductosInput[];
    createMany?: Prisma.detalle_facturaCreateManyProductosInputEnvelope;
    connect?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
};
export type detalle_facturaUncheckedCreateNestedManyWithoutProductosInput = {
    create?: Prisma.XOR<Prisma.detalle_facturaCreateWithoutProductosInput, Prisma.detalle_facturaUncheckedCreateWithoutProductosInput> | Prisma.detalle_facturaCreateWithoutProductosInput[] | Prisma.detalle_facturaUncheckedCreateWithoutProductosInput[];
    connectOrCreate?: Prisma.detalle_facturaCreateOrConnectWithoutProductosInput | Prisma.detalle_facturaCreateOrConnectWithoutProductosInput[];
    createMany?: Prisma.detalle_facturaCreateManyProductosInputEnvelope;
    connect?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
};
export type detalle_facturaUpdateManyWithoutProductosNestedInput = {
    create?: Prisma.XOR<Prisma.detalle_facturaCreateWithoutProductosInput, Prisma.detalle_facturaUncheckedCreateWithoutProductosInput> | Prisma.detalle_facturaCreateWithoutProductosInput[] | Prisma.detalle_facturaUncheckedCreateWithoutProductosInput[];
    connectOrCreate?: Prisma.detalle_facturaCreateOrConnectWithoutProductosInput | Prisma.detalle_facturaCreateOrConnectWithoutProductosInput[];
    upsert?: Prisma.detalle_facturaUpsertWithWhereUniqueWithoutProductosInput | Prisma.detalle_facturaUpsertWithWhereUniqueWithoutProductosInput[];
    createMany?: Prisma.detalle_facturaCreateManyProductosInputEnvelope;
    set?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    disconnect?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    delete?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    connect?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    update?: Prisma.detalle_facturaUpdateWithWhereUniqueWithoutProductosInput | Prisma.detalle_facturaUpdateWithWhereUniqueWithoutProductosInput[];
    updateMany?: Prisma.detalle_facturaUpdateManyWithWhereWithoutProductosInput | Prisma.detalle_facturaUpdateManyWithWhereWithoutProductosInput[];
    deleteMany?: Prisma.detalle_facturaScalarWhereInput | Prisma.detalle_facturaScalarWhereInput[];
};
export type detalle_facturaUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: Prisma.XOR<Prisma.detalle_facturaCreateWithoutProductosInput, Prisma.detalle_facturaUncheckedCreateWithoutProductosInput> | Prisma.detalle_facturaCreateWithoutProductosInput[] | Prisma.detalle_facturaUncheckedCreateWithoutProductosInput[];
    connectOrCreate?: Prisma.detalle_facturaCreateOrConnectWithoutProductosInput | Prisma.detalle_facturaCreateOrConnectWithoutProductosInput[];
    upsert?: Prisma.detalle_facturaUpsertWithWhereUniqueWithoutProductosInput | Prisma.detalle_facturaUpsertWithWhereUniqueWithoutProductosInput[];
    createMany?: Prisma.detalle_facturaCreateManyProductosInputEnvelope;
    set?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    disconnect?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    delete?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    connect?: Prisma.detalle_facturaWhereUniqueInput | Prisma.detalle_facturaWhereUniqueInput[];
    update?: Prisma.detalle_facturaUpdateWithWhereUniqueWithoutProductosInput | Prisma.detalle_facturaUpdateWithWhereUniqueWithoutProductosInput[];
    updateMany?: Prisma.detalle_facturaUpdateManyWithWhereWithoutProductosInput | Prisma.detalle_facturaUpdateManyWithWhereWithoutProductosInput[];
    deleteMany?: Prisma.detalle_facturaScalarWhereInput | Prisma.detalle_facturaScalarWhereInput[];
};
export type detalle_facturaCreateWithoutFacturaInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    productos: Prisma.productosCreateNestedOneWithoutDetalle_facturaInput;
};
export type detalle_facturaUncheckedCreateWithoutFacturaInput = {
    id_detalle?: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_producto: number;
};
export type detalle_facturaCreateOrConnectWithoutFacturaInput = {
    where: Prisma.detalle_facturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.detalle_facturaCreateWithoutFacturaInput, Prisma.detalle_facturaUncheckedCreateWithoutFacturaInput>;
};
export type detalle_facturaCreateManyFacturaInputEnvelope = {
    data: Prisma.detalle_facturaCreateManyFacturaInput | Prisma.detalle_facturaCreateManyFacturaInput[];
    skipDuplicates?: boolean;
};
export type detalle_facturaUpsertWithWhereUniqueWithoutFacturaInput = {
    where: Prisma.detalle_facturaWhereUniqueInput;
    update: Prisma.XOR<Prisma.detalle_facturaUpdateWithoutFacturaInput, Prisma.detalle_facturaUncheckedUpdateWithoutFacturaInput>;
    create: Prisma.XOR<Prisma.detalle_facturaCreateWithoutFacturaInput, Prisma.detalle_facturaUncheckedCreateWithoutFacturaInput>;
};
export type detalle_facturaUpdateWithWhereUniqueWithoutFacturaInput = {
    where: Prisma.detalle_facturaWhereUniqueInput;
    data: Prisma.XOR<Prisma.detalle_facturaUpdateWithoutFacturaInput, Prisma.detalle_facturaUncheckedUpdateWithoutFacturaInput>;
};
export type detalle_facturaUpdateManyWithWhereWithoutFacturaInput = {
    where: Prisma.detalle_facturaScalarWhereInput;
    data: Prisma.XOR<Prisma.detalle_facturaUpdateManyMutationInput, Prisma.detalle_facturaUncheckedUpdateManyWithoutFacturaInput>;
};
export type detalle_facturaScalarWhereInput = {
    AND?: Prisma.detalle_facturaScalarWhereInput | Prisma.detalle_facturaScalarWhereInput[];
    OR?: Prisma.detalle_facturaScalarWhereInput[];
    NOT?: Prisma.detalle_facturaScalarWhereInput | Prisma.detalle_facturaScalarWhereInput[];
    id_detalle?: Prisma.IntFilter<"detalle_factura"> | number;
    cantidad?: Prisma.DecimalFilter<"detalle_factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFilter<"detalle_factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"detalle_factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_factura?: Prisma.IntFilter<"detalle_factura"> | number;
    id_producto?: Prisma.IntFilter<"detalle_factura"> | number;
};
export type detalle_facturaCreateWithoutProductosInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    factura: Prisma.facturaCreateNestedOneWithoutDetalle_facturaInput;
};
export type detalle_facturaUncheckedCreateWithoutProductosInput = {
    id_detalle?: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_factura: number;
};
export type detalle_facturaCreateOrConnectWithoutProductosInput = {
    where: Prisma.detalle_facturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.detalle_facturaCreateWithoutProductosInput, Prisma.detalle_facturaUncheckedCreateWithoutProductosInput>;
};
export type detalle_facturaCreateManyProductosInputEnvelope = {
    data: Prisma.detalle_facturaCreateManyProductosInput | Prisma.detalle_facturaCreateManyProductosInput[];
    skipDuplicates?: boolean;
};
export type detalle_facturaUpsertWithWhereUniqueWithoutProductosInput = {
    where: Prisma.detalle_facturaWhereUniqueInput;
    update: Prisma.XOR<Prisma.detalle_facturaUpdateWithoutProductosInput, Prisma.detalle_facturaUncheckedUpdateWithoutProductosInput>;
    create: Prisma.XOR<Prisma.detalle_facturaCreateWithoutProductosInput, Prisma.detalle_facturaUncheckedCreateWithoutProductosInput>;
};
export type detalle_facturaUpdateWithWhereUniqueWithoutProductosInput = {
    where: Prisma.detalle_facturaWhereUniqueInput;
    data: Prisma.XOR<Prisma.detalle_facturaUpdateWithoutProductosInput, Prisma.detalle_facturaUncheckedUpdateWithoutProductosInput>;
};
export type detalle_facturaUpdateManyWithWhereWithoutProductosInput = {
    where: Prisma.detalle_facturaScalarWhereInput;
    data: Prisma.XOR<Prisma.detalle_facturaUpdateManyMutationInput, Prisma.detalle_facturaUncheckedUpdateManyWithoutProductosInput>;
};
export type detalle_facturaCreateManyFacturaInput = {
    id_detalle?: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_producto: number;
};
export type detalle_facturaUpdateWithoutFacturaInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    productos?: Prisma.productosUpdateOneRequiredWithoutDetalle_facturaNestedInput;
};
export type detalle_facturaUncheckedUpdateWithoutFacturaInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detalle_facturaUncheckedUpdateManyWithoutFacturaInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_producto?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detalle_facturaCreateManyProductosInput = {
    id_detalle?: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_factura: number;
};
export type detalle_facturaUpdateWithoutProductosInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    factura?: Prisma.facturaUpdateOneRequiredWithoutDetalle_facturaNestedInput;
};
export type detalle_facturaUncheckedUpdateWithoutProductosInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detalle_facturaUncheckedUpdateManyWithoutProductosInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precio_unitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detalle_facturaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_detalle?: boolean;
    cantidad?: boolean;
    precio_unitario?: boolean;
    subtotal?: boolean;
    id_factura?: boolean;
    id_producto?: boolean;
    factura?: boolean | Prisma.facturaDefaultArgs<ExtArgs>;
    productos?: boolean | Prisma.productosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalle_factura"]>;
export type detalle_facturaSelectScalar = {
    id_detalle?: boolean;
    cantidad?: boolean;
    precio_unitario?: boolean;
    subtotal?: boolean;
    id_factura?: boolean;
    id_producto?: boolean;
};
export type detalle_facturaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_detalle" | "cantidad" | "precio_unitario" | "subtotal" | "id_factura" | "id_producto", ExtArgs["result"]["detalle_factura"]>;
export type detalle_facturaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura?: boolean | Prisma.facturaDefaultArgs<ExtArgs>;
    productos?: boolean | Prisma.productosDefaultArgs<ExtArgs>;
};
export type $detalle_facturaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "detalle_factura";
    objects: {
        factura: Prisma.$facturaPayload<ExtArgs>;
        productos: Prisma.$productosPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_detalle: number;
        cantidad: runtime.Decimal;
        precio_unitario: runtime.Decimal;
        subtotal: runtime.Decimal;
        id_factura: number;
        id_producto: number;
    }, ExtArgs["result"]["detalle_factura"]>;
    composites: {};
};
export type detalle_facturaGetPayload<S extends boolean | null | undefined | detalle_facturaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$detalle_facturaPayload, S>;
export type detalle_facturaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<detalle_facturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Detalle_facturaCountAggregateInputType | true;
};
export interface detalle_facturaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['detalle_factura'];
        meta: {
            name: 'detalle_factura';
        };
    };
    findUnique<T extends detalle_facturaFindUniqueArgs>(args: Prisma.SelectSubset<T, detalle_facturaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__detalle_facturaClient<runtime.Types.Result.GetResult<Prisma.$detalle_facturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends detalle_facturaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, detalle_facturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__detalle_facturaClient<runtime.Types.Result.GetResult<Prisma.$detalle_facturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends detalle_facturaFindFirstArgs>(args?: Prisma.SelectSubset<T, detalle_facturaFindFirstArgs<ExtArgs>>): Prisma.Prisma__detalle_facturaClient<runtime.Types.Result.GetResult<Prisma.$detalle_facturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends detalle_facturaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, detalle_facturaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__detalle_facturaClient<runtime.Types.Result.GetResult<Prisma.$detalle_facturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends detalle_facturaFindManyArgs>(args?: Prisma.SelectSubset<T, detalle_facturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends detalle_facturaCreateArgs>(args: Prisma.SelectSubset<T, detalle_facturaCreateArgs<ExtArgs>>): Prisma.Prisma__detalle_facturaClient<runtime.Types.Result.GetResult<Prisma.$detalle_facturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends detalle_facturaCreateManyArgs>(args?: Prisma.SelectSubset<T, detalle_facturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends detalle_facturaDeleteArgs>(args: Prisma.SelectSubset<T, detalle_facturaDeleteArgs<ExtArgs>>): Prisma.Prisma__detalle_facturaClient<runtime.Types.Result.GetResult<Prisma.$detalle_facturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends detalle_facturaUpdateArgs>(args: Prisma.SelectSubset<T, detalle_facturaUpdateArgs<ExtArgs>>): Prisma.Prisma__detalle_facturaClient<runtime.Types.Result.GetResult<Prisma.$detalle_facturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends detalle_facturaDeleteManyArgs>(args?: Prisma.SelectSubset<T, detalle_facturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends detalle_facturaUpdateManyArgs>(args: Prisma.SelectSubset<T, detalle_facturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends detalle_facturaUpsertArgs>(args: Prisma.SelectSubset<T, detalle_facturaUpsertArgs<ExtArgs>>): Prisma.Prisma__detalle_facturaClient<runtime.Types.Result.GetResult<Prisma.$detalle_facturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends detalle_facturaCountArgs>(args?: Prisma.Subset<T, detalle_facturaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Detalle_facturaCountAggregateOutputType> : number>;
    aggregate<T extends Detalle_facturaAggregateArgs>(args: Prisma.Subset<T, Detalle_facturaAggregateArgs>): Prisma.PrismaPromise<GetDetalle_facturaAggregateType<T>>;
    groupBy<T extends detalle_facturaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: detalle_facturaGroupByArgs['orderBy'];
    } : {
        orderBy?: detalle_facturaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, detalle_facturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_facturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: detalle_facturaFieldRefs;
}
export interface Prisma__detalle_facturaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    factura<T extends Prisma.facturaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturaDefaultArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    productos<T extends Prisma.productosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.productosDefaultArgs<ExtArgs>>): Prisma.Prisma__productosClient<runtime.Types.Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface detalle_facturaFieldRefs {
    readonly id_detalle: Prisma.FieldRef<"detalle_factura", 'Int'>;
    readonly cantidad: Prisma.FieldRef<"detalle_factura", 'Decimal'>;
    readonly precio_unitario: Prisma.FieldRef<"detalle_factura", 'Decimal'>;
    readonly subtotal: Prisma.FieldRef<"detalle_factura", 'Decimal'>;
    readonly id_factura: Prisma.FieldRef<"detalle_factura", 'Int'>;
    readonly id_producto: Prisma.FieldRef<"detalle_factura", 'Int'>;
}
export type detalle_facturaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_facturaSelect<ExtArgs> | null;
    omit?: Prisma.detalle_facturaOmit<ExtArgs> | null;
    include?: Prisma.detalle_facturaInclude<ExtArgs> | null;
    where: Prisma.detalle_facturaWhereUniqueInput;
};
export type detalle_facturaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_facturaSelect<ExtArgs> | null;
    omit?: Prisma.detalle_facturaOmit<ExtArgs> | null;
    include?: Prisma.detalle_facturaInclude<ExtArgs> | null;
    where: Prisma.detalle_facturaWhereUniqueInput;
};
export type detalle_facturaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type detalle_facturaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type detalle_facturaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type detalle_facturaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_facturaSelect<ExtArgs> | null;
    omit?: Prisma.detalle_facturaOmit<ExtArgs> | null;
    include?: Prisma.detalle_facturaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.detalle_facturaCreateInput, Prisma.detalle_facturaUncheckedCreateInput>;
};
export type detalle_facturaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.detalle_facturaCreateManyInput | Prisma.detalle_facturaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type detalle_facturaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_facturaSelect<ExtArgs> | null;
    omit?: Prisma.detalle_facturaOmit<ExtArgs> | null;
    include?: Prisma.detalle_facturaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.detalle_facturaUpdateInput, Prisma.detalle_facturaUncheckedUpdateInput>;
    where: Prisma.detalle_facturaWhereUniqueInput;
};
export type detalle_facturaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.detalle_facturaUpdateManyMutationInput, Prisma.detalle_facturaUncheckedUpdateManyInput>;
    where?: Prisma.detalle_facturaWhereInput;
    limit?: number;
};
export type detalle_facturaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_facturaSelect<ExtArgs> | null;
    omit?: Prisma.detalle_facturaOmit<ExtArgs> | null;
    include?: Prisma.detalle_facturaInclude<ExtArgs> | null;
    where: Prisma.detalle_facturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.detalle_facturaCreateInput, Prisma.detalle_facturaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.detalle_facturaUpdateInput, Prisma.detalle_facturaUncheckedUpdateInput>;
};
export type detalle_facturaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_facturaSelect<ExtArgs> | null;
    omit?: Prisma.detalle_facturaOmit<ExtArgs> | null;
    include?: Prisma.detalle_facturaInclude<ExtArgs> | null;
    where: Prisma.detalle_facturaWhereUniqueInput;
};
export type detalle_facturaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_facturaWhereInput;
    limit?: number;
};
export type detalle_facturaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_facturaSelect<ExtArgs> | null;
    omit?: Prisma.detalle_facturaOmit<ExtArgs> | null;
    include?: Prisma.detalle_facturaInclude<ExtArgs> | null;
};
