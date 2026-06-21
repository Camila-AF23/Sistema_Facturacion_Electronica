import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type facturaModel = runtime.Types.Result.DefaultSelection<Prisma.$facturaPayload>;
export type AggregateFactura = {
    _count: FacturaCountAggregateOutputType | null;
    _avg: FacturaAvgAggregateOutputType | null;
    _sum: FacturaSumAggregateOutputType | null;
    _min: FacturaMinAggregateOutputType | null;
    _max: FacturaMaxAggregateOutputType | null;
};
export type FacturaAvgAggregateOutputType = {
    id_factura: number | null;
    total: runtime.Decimal | null;
    id_usuario: number | null;
    id_cliente: number | null;
    id_tienda: number | null;
    id_pago: number | null;
};
export type FacturaSumAggregateOutputType = {
    id_factura: number | null;
    total: runtime.Decimal | null;
    id_usuario: number | null;
    id_cliente: number | null;
    id_tienda: number | null;
    id_pago: number | null;
};
export type FacturaMinAggregateOutputType = {
    id_factura: number | null;
    numero_factura: string | null;
    fecha: Date | null;
    total: runtime.Decimal | null;
    id_usuario: number | null;
    id_cliente: number | null;
    id_tienda: number | null;
    id_pago: number | null;
};
export type FacturaMaxAggregateOutputType = {
    id_factura: number | null;
    numero_factura: string | null;
    fecha: Date | null;
    total: runtime.Decimal | null;
    id_usuario: number | null;
    id_cliente: number | null;
    id_tienda: number | null;
    id_pago: number | null;
};
export type FacturaCountAggregateOutputType = {
    id_factura: number;
    numero_factura: number;
    fecha: number;
    total: number;
    id_usuario: number;
    id_cliente: number;
    id_tienda: number;
    id_pago: number;
    _all: number;
};
export type FacturaAvgAggregateInputType = {
    id_factura?: true;
    total?: true;
    id_usuario?: true;
    id_cliente?: true;
    id_tienda?: true;
    id_pago?: true;
};
export type FacturaSumAggregateInputType = {
    id_factura?: true;
    total?: true;
    id_usuario?: true;
    id_cliente?: true;
    id_tienda?: true;
    id_pago?: true;
};
export type FacturaMinAggregateInputType = {
    id_factura?: true;
    numero_factura?: true;
    fecha?: true;
    total?: true;
    id_usuario?: true;
    id_cliente?: true;
    id_tienda?: true;
    id_pago?: true;
};
export type FacturaMaxAggregateInputType = {
    id_factura?: true;
    numero_factura?: true;
    fecha?: true;
    total?: true;
    id_usuario?: true;
    id_cliente?: true;
    id_tienda?: true;
    id_pago?: true;
};
export type FacturaCountAggregateInputType = {
    id_factura?: true;
    numero_factura?: true;
    fecha?: true;
    total?: true;
    id_usuario?: true;
    id_cliente?: true;
    id_tienda?: true;
    id_pago?: true;
    _all?: true;
};
export type FacturaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaWhereInput;
    orderBy?: Prisma.facturaOrderByWithRelationInput | Prisma.facturaOrderByWithRelationInput[];
    cursor?: Prisma.facturaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FacturaCountAggregateInputType;
    _avg?: FacturaAvgAggregateInputType;
    _sum?: FacturaSumAggregateInputType;
    _min?: FacturaMinAggregateInputType;
    _max?: FacturaMaxAggregateInputType;
};
export type GetFacturaAggregateType<T extends FacturaAggregateArgs> = {
    [P in keyof T & keyof AggregateFactura]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFactura[P]> : Prisma.GetScalarType<T[P], AggregateFactura[P]>;
};
export type facturaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaWhereInput;
    orderBy?: Prisma.facturaOrderByWithAggregationInput | Prisma.facturaOrderByWithAggregationInput[];
    by: Prisma.FacturaScalarFieldEnum[] | Prisma.FacturaScalarFieldEnum;
    having?: Prisma.facturaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacturaCountAggregateInputType | true;
    _avg?: FacturaAvgAggregateInputType;
    _sum?: FacturaSumAggregateInputType;
    _min?: FacturaMinAggregateInputType;
    _max?: FacturaMaxAggregateInputType;
};
export type FacturaGroupByOutputType = {
    id_factura: number;
    numero_factura: string;
    fecha: Date;
    total: runtime.Decimal;
    id_usuario: number;
    id_cliente: number;
    id_tienda: number;
    id_pago: number;
    _count: FacturaCountAggregateOutputType | null;
    _avg: FacturaAvgAggregateOutputType | null;
    _sum: FacturaSumAggregateOutputType | null;
    _min: FacturaMinAggregateOutputType | null;
    _max: FacturaMaxAggregateOutputType | null;
};
export type GetFacturaGroupByPayload<T extends facturaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FacturaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FacturaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FacturaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FacturaGroupByOutputType[P]>;
}>>;
export type facturaWhereInput = {
    AND?: Prisma.facturaWhereInput | Prisma.facturaWhereInput[];
    OR?: Prisma.facturaWhereInput[];
    NOT?: Prisma.facturaWhereInput | Prisma.facturaWhereInput[];
    id_factura?: Prisma.IntFilter<"factura"> | number;
    numero_factura?: Prisma.StringFilter<"factura"> | string;
    fecha?: Prisma.DateTimeFilter<"factura"> | Date | string;
    total?: Prisma.DecimalFilter<"factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntFilter<"factura"> | number;
    id_cliente?: Prisma.IntFilter<"factura"> | number;
    id_tienda?: Prisma.IntFilter<"factura"> | number;
    id_pago?: Prisma.IntFilter<"factura"> | number;
    detalle_factura?: Prisma.Detalle_facturaListRelationFilter;
    clientes?: Prisma.XOR<Prisma.ClientesScalarRelationFilter, Prisma.clientesWhereInput>;
    metodo_pago?: Prisma.XOR<Prisma.Metodo_pagoScalarRelationFilter, Prisma.metodo_pagoWhereInput>;
    tiendas?: Prisma.XOR<Prisma.TiendasScalarRelationFilter, Prisma.tiendasWhereInput>;
    usuarios?: Prisma.XOR<Prisma.UsuariosScalarRelationFilter, Prisma.usuariosWhereInput>;
};
export type facturaOrderByWithRelationInput = {
    id_factura?: Prisma.SortOrder;
    numero_factura?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    id_pago?: Prisma.SortOrder;
    detalle_factura?: Prisma.detalle_facturaOrderByRelationAggregateInput;
    clientes?: Prisma.clientesOrderByWithRelationInput;
    metodo_pago?: Prisma.metodo_pagoOrderByWithRelationInput;
    tiendas?: Prisma.tiendasOrderByWithRelationInput;
    usuarios?: Prisma.usuariosOrderByWithRelationInput;
    _relevance?: Prisma.facturaOrderByRelevanceInput;
};
export type facturaWhereUniqueInput = Prisma.AtLeast<{
    id_factura?: number;
    numero_factura?: string;
    AND?: Prisma.facturaWhereInput | Prisma.facturaWhereInput[];
    OR?: Prisma.facturaWhereInput[];
    NOT?: Prisma.facturaWhereInput | Prisma.facturaWhereInput[];
    fecha?: Prisma.DateTimeFilter<"factura"> | Date | string;
    total?: Prisma.DecimalFilter<"factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntFilter<"factura"> | number;
    id_cliente?: Prisma.IntFilter<"factura"> | number;
    id_tienda?: Prisma.IntFilter<"factura"> | number;
    id_pago?: Prisma.IntFilter<"factura"> | number;
    detalle_factura?: Prisma.Detalle_facturaListRelationFilter;
    clientes?: Prisma.XOR<Prisma.ClientesScalarRelationFilter, Prisma.clientesWhereInput>;
    metodo_pago?: Prisma.XOR<Prisma.Metodo_pagoScalarRelationFilter, Prisma.metodo_pagoWhereInput>;
    tiendas?: Prisma.XOR<Prisma.TiendasScalarRelationFilter, Prisma.tiendasWhereInput>;
    usuarios?: Prisma.XOR<Prisma.UsuariosScalarRelationFilter, Prisma.usuariosWhereInput>;
}, "id_factura" | "numero_factura">;
export type facturaOrderByWithAggregationInput = {
    id_factura?: Prisma.SortOrder;
    numero_factura?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    id_pago?: Prisma.SortOrder;
    _count?: Prisma.facturaCountOrderByAggregateInput;
    _avg?: Prisma.facturaAvgOrderByAggregateInput;
    _max?: Prisma.facturaMaxOrderByAggregateInput;
    _min?: Prisma.facturaMinOrderByAggregateInput;
    _sum?: Prisma.facturaSumOrderByAggregateInput;
};
export type facturaScalarWhereWithAggregatesInput = {
    AND?: Prisma.facturaScalarWhereWithAggregatesInput | Prisma.facturaScalarWhereWithAggregatesInput[];
    OR?: Prisma.facturaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.facturaScalarWhereWithAggregatesInput | Prisma.facturaScalarWhereWithAggregatesInput[];
    id_factura?: Prisma.IntWithAggregatesFilter<"factura"> | number;
    numero_factura?: Prisma.StringWithAggregatesFilter<"factura"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"factura"> | Date | string;
    total?: Prisma.DecimalWithAggregatesFilter<"factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntWithAggregatesFilter<"factura"> | number;
    id_cliente?: Prisma.IntWithAggregatesFilter<"factura"> | number;
    id_tienda?: Prisma.IntWithAggregatesFilter<"factura"> | number;
    id_pago?: Prisma.IntWithAggregatesFilter<"factura"> | number;
};
export type facturaCreateInput = {
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    detalle_factura?: Prisma.detalle_facturaCreateNestedManyWithoutFacturaInput;
    clientes: Prisma.clientesCreateNestedOneWithoutFacturaInput;
    metodo_pago: Prisma.metodo_pagoCreateNestedOneWithoutFacturaInput;
    tiendas: Prisma.tiendasCreateNestedOneWithoutFacturaInput;
    usuarios: Prisma.usuariosCreateNestedOneWithoutFacturaInput;
};
export type facturaUncheckedCreateInput = {
    id_factura?: number;
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario: number;
    id_cliente: number;
    id_tienda: number;
    id_pago: number;
    detalle_factura?: Prisma.detalle_facturaUncheckedCreateNestedManyWithoutFacturaInput;
};
export type facturaUpdateInput = {
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    detalle_factura?: Prisma.detalle_facturaUpdateManyWithoutFacturaNestedInput;
    clientes?: Prisma.clientesUpdateOneRequiredWithoutFacturaNestedInput;
    metodo_pago?: Prisma.metodo_pagoUpdateOneRequiredWithoutFacturaNestedInput;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutFacturaNestedInput;
    usuarios?: Prisma.usuariosUpdateOneRequiredWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    detalle_factura?: Prisma.detalle_facturaUncheckedUpdateManyWithoutFacturaNestedInput;
};
export type facturaCreateManyInput = {
    id_factura?: number;
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario: number;
    id_cliente: number;
    id_tienda: number;
    id_pago: number;
};
export type facturaUpdateManyMutationInput = {
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type facturaUncheckedUpdateManyInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FacturaListRelationFilter = {
    every?: Prisma.facturaWhereInput;
    some?: Prisma.facturaWhereInput;
    none?: Prisma.facturaWhereInput;
};
export type facturaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FacturaScalarRelationFilter = {
    is?: Prisma.facturaWhereInput;
    isNot?: Prisma.facturaWhereInput;
};
export type facturaOrderByRelevanceInput = {
    fields: Prisma.facturaOrderByRelevanceFieldEnum | Prisma.facturaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type facturaCountOrderByAggregateInput = {
    id_factura?: Prisma.SortOrder;
    numero_factura?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    id_pago?: Prisma.SortOrder;
};
export type facturaAvgOrderByAggregateInput = {
    id_factura?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    id_pago?: Prisma.SortOrder;
};
export type facturaMaxOrderByAggregateInput = {
    id_factura?: Prisma.SortOrder;
    numero_factura?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    id_pago?: Prisma.SortOrder;
};
export type facturaMinOrderByAggregateInput = {
    id_factura?: Prisma.SortOrder;
    numero_factura?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    id_pago?: Prisma.SortOrder;
};
export type facturaSumOrderByAggregateInput = {
    id_factura?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    id_pago?: Prisma.SortOrder;
};
export type facturaCreateNestedManyWithoutClientesInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutClientesInput, Prisma.facturaUncheckedCreateWithoutClientesInput> | Prisma.facturaCreateWithoutClientesInput[] | Prisma.facturaUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutClientesInput | Prisma.facturaCreateOrConnectWithoutClientesInput[];
    createMany?: Prisma.facturaCreateManyClientesInputEnvelope;
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
};
export type facturaUncheckedCreateNestedManyWithoutClientesInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutClientesInput, Prisma.facturaUncheckedCreateWithoutClientesInput> | Prisma.facturaCreateWithoutClientesInput[] | Prisma.facturaUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutClientesInput | Prisma.facturaCreateOrConnectWithoutClientesInput[];
    createMany?: Prisma.facturaCreateManyClientesInputEnvelope;
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
};
export type facturaUpdateManyWithoutClientesNestedInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutClientesInput, Prisma.facturaUncheckedCreateWithoutClientesInput> | Prisma.facturaCreateWithoutClientesInput[] | Prisma.facturaUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutClientesInput | Prisma.facturaCreateOrConnectWithoutClientesInput[];
    upsert?: Prisma.facturaUpsertWithWhereUniqueWithoutClientesInput | Prisma.facturaUpsertWithWhereUniqueWithoutClientesInput[];
    createMany?: Prisma.facturaCreateManyClientesInputEnvelope;
    set?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    disconnect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    delete?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    update?: Prisma.facturaUpdateWithWhereUniqueWithoutClientesInput | Prisma.facturaUpdateWithWhereUniqueWithoutClientesInput[];
    updateMany?: Prisma.facturaUpdateManyWithWhereWithoutClientesInput | Prisma.facturaUpdateManyWithWhereWithoutClientesInput[];
    deleteMany?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
};
export type facturaUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutClientesInput, Prisma.facturaUncheckedCreateWithoutClientesInput> | Prisma.facturaCreateWithoutClientesInput[] | Prisma.facturaUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutClientesInput | Prisma.facturaCreateOrConnectWithoutClientesInput[];
    upsert?: Prisma.facturaUpsertWithWhereUniqueWithoutClientesInput | Prisma.facturaUpsertWithWhereUniqueWithoutClientesInput[];
    createMany?: Prisma.facturaCreateManyClientesInputEnvelope;
    set?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    disconnect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    delete?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    update?: Prisma.facturaUpdateWithWhereUniqueWithoutClientesInput | Prisma.facturaUpdateWithWhereUniqueWithoutClientesInput[];
    updateMany?: Prisma.facturaUpdateManyWithWhereWithoutClientesInput | Prisma.facturaUpdateManyWithWhereWithoutClientesInput[];
    deleteMany?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
};
export type facturaCreateNestedOneWithoutDetalle_facturaInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutDetalle_facturaInput, Prisma.facturaUncheckedCreateWithoutDetalle_facturaInput>;
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutDetalle_facturaInput;
    connect?: Prisma.facturaWhereUniqueInput;
};
export type facturaUpdateOneRequiredWithoutDetalle_facturaNestedInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutDetalle_facturaInput, Prisma.facturaUncheckedCreateWithoutDetalle_facturaInput>;
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutDetalle_facturaInput;
    upsert?: Prisma.facturaUpsertWithoutDetalle_facturaInput;
    connect?: Prisma.facturaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.facturaUpdateToOneWithWhereWithoutDetalle_facturaInput, Prisma.facturaUpdateWithoutDetalle_facturaInput>, Prisma.facturaUncheckedUpdateWithoutDetalle_facturaInput>;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type facturaCreateNestedManyWithoutMetodo_pagoInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutMetodo_pagoInput, Prisma.facturaUncheckedCreateWithoutMetodo_pagoInput> | Prisma.facturaCreateWithoutMetodo_pagoInput[] | Prisma.facturaUncheckedCreateWithoutMetodo_pagoInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutMetodo_pagoInput | Prisma.facturaCreateOrConnectWithoutMetodo_pagoInput[];
    createMany?: Prisma.facturaCreateManyMetodo_pagoInputEnvelope;
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
};
export type facturaUncheckedCreateNestedManyWithoutMetodo_pagoInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutMetodo_pagoInput, Prisma.facturaUncheckedCreateWithoutMetodo_pagoInput> | Prisma.facturaCreateWithoutMetodo_pagoInput[] | Prisma.facturaUncheckedCreateWithoutMetodo_pagoInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutMetodo_pagoInput | Prisma.facturaCreateOrConnectWithoutMetodo_pagoInput[];
    createMany?: Prisma.facturaCreateManyMetodo_pagoInputEnvelope;
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
};
export type facturaUpdateManyWithoutMetodo_pagoNestedInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutMetodo_pagoInput, Prisma.facturaUncheckedCreateWithoutMetodo_pagoInput> | Prisma.facturaCreateWithoutMetodo_pagoInput[] | Prisma.facturaUncheckedCreateWithoutMetodo_pagoInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutMetodo_pagoInput | Prisma.facturaCreateOrConnectWithoutMetodo_pagoInput[];
    upsert?: Prisma.facturaUpsertWithWhereUniqueWithoutMetodo_pagoInput | Prisma.facturaUpsertWithWhereUniqueWithoutMetodo_pagoInput[];
    createMany?: Prisma.facturaCreateManyMetodo_pagoInputEnvelope;
    set?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    disconnect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    delete?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    update?: Prisma.facturaUpdateWithWhereUniqueWithoutMetodo_pagoInput | Prisma.facturaUpdateWithWhereUniqueWithoutMetodo_pagoInput[];
    updateMany?: Prisma.facturaUpdateManyWithWhereWithoutMetodo_pagoInput | Prisma.facturaUpdateManyWithWhereWithoutMetodo_pagoInput[];
    deleteMany?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
};
export type facturaUncheckedUpdateManyWithoutMetodo_pagoNestedInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutMetodo_pagoInput, Prisma.facturaUncheckedCreateWithoutMetodo_pagoInput> | Prisma.facturaCreateWithoutMetodo_pagoInput[] | Prisma.facturaUncheckedCreateWithoutMetodo_pagoInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutMetodo_pagoInput | Prisma.facturaCreateOrConnectWithoutMetodo_pagoInput[];
    upsert?: Prisma.facturaUpsertWithWhereUniqueWithoutMetodo_pagoInput | Prisma.facturaUpsertWithWhereUniqueWithoutMetodo_pagoInput[];
    createMany?: Prisma.facturaCreateManyMetodo_pagoInputEnvelope;
    set?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    disconnect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    delete?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    update?: Prisma.facturaUpdateWithWhereUniqueWithoutMetodo_pagoInput | Prisma.facturaUpdateWithWhereUniqueWithoutMetodo_pagoInput[];
    updateMany?: Prisma.facturaUpdateManyWithWhereWithoutMetodo_pagoInput | Prisma.facturaUpdateManyWithWhereWithoutMetodo_pagoInput[];
    deleteMany?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
};
export type facturaCreateNestedManyWithoutTiendasInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutTiendasInput, Prisma.facturaUncheckedCreateWithoutTiendasInput> | Prisma.facturaCreateWithoutTiendasInput[] | Prisma.facturaUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutTiendasInput | Prisma.facturaCreateOrConnectWithoutTiendasInput[];
    createMany?: Prisma.facturaCreateManyTiendasInputEnvelope;
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
};
export type facturaUncheckedCreateNestedManyWithoutTiendasInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutTiendasInput, Prisma.facturaUncheckedCreateWithoutTiendasInput> | Prisma.facturaCreateWithoutTiendasInput[] | Prisma.facturaUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutTiendasInput | Prisma.facturaCreateOrConnectWithoutTiendasInput[];
    createMany?: Prisma.facturaCreateManyTiendasInputEnvelope;
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
};
export type facturaUpdateManyWithoutTiendasNestedInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutTiendasInput, Prisma.facturaUncheckedCreateWithoutTiendasInput> | Prisma.facturaCreateWithoutTiendasInput[] | Prisma.facturaUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutTiendasInput | Prisma.facturaCreateOrConnectWithoutTiendasInput[];
    upsert?: Prisma.facturaUpsertWithWhereUniqueWithoutTiendasInput | Prisma.facturaUpsertWithWhereUniqueWithoutTiendasInput[];
    createMany?: Prisma.facturaCreateManyTiendasInputEnvelope;
    set?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    disconnect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    delete?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    update?: Prisma.facturaUpdateWithWhereUniqueWithoutTiendasInput | Prisma.facturaUpdateWithWhereUniqueWithoutTiendasInput[];
    updateMany?: Prisma.facturaUpdateManyWithWhereWithoutTiendasInput | Prisma.facturaUpdateManyWithWhereWithoutTiendasInput[];
    deleteMany?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
};
export type facturaUncheckedUpdateManyWithoutTiendasNestedInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutTiendasInput, Prisma.facturaUncheckedCreateWithoutTiendasInput> | Prisma.facturaCreateWithoutTiendasInput[] | Prisma.facturaUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutTiendasInput | Prisma.facturaCreateOrConnectWithoutTiendasInput[];
    upsert?: Prisma.facturaUpsertWithWhereUniqueWithoutTiendasInput | Prisma.facturaUpsertWithWhereUniqueWithoutTiendasInput[];
    createMany?: Prisma.facturaCreateManyTiendasInputEnvelope;
    set?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    disconnect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    delete?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    update?: Prisma.facturaUpdateWithWhereUniqueWithoutTiendasInput | Prisma.facturaUpdateWithWhereUniqueWithoutTiendasInput[];
    updateMany?: Prisma.facturaUpdateManyWithWhereWithoutTiendasInput | Prisma.facturaUpdateManyWithWhereWithoutTiendasInput[];
    deleteMany?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
};
export type facturaCreateNestedManyWithoutUsuariosInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutUsuariosInput, Prisma.facturaUncheckedCreateWithoutUsuariosInput> | Prisma.facturaCreateWithoutUsuariosInput[] | Prisma.facturaUncheckedCreateWithoutUsuariosInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutUsuariosInput | Prisma.facturaCreateOrConnectWithoutUsuariosInput[];
    createMany?: Prisma.facturaCreateManyUsuariosInputEnvelope;
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
};
export type facturaUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutUsuariosInput, Prisma.facturaUncheckedCreateWithoutUsuariosInput> | Prisma.facturaCreateWithoutUsuariosInput[] | Prisma.facturaUncheckedCreateWithoutUsuariosInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutUsuariosInput | Prisma.facturaCreateOrConnectWithoutUsuariosInput[];
    createMany?: Prisma.facturaCreateManyUsuariosInputEnvelope;
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
};
export type facturaUpdateManyWithoutUsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutUsuariosInput, Prisma.facturaUncheckedCreateWithoutUsuariosInput> | Prisma.facturaCreateWithoutUsuariosInput[] | Prisma.facturaUncheckedCreateWithoutUsuariosInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutUsuariosInput | Prisma.facturaCreateOrConnectWithoutUsuariosInput[];
    upsert?: Prisma.facturaUpsertWithWhereUniqueWithoutUsuariosInput | Prisma.facturaUpsertWithWhereUniqueWithoutUsuariosInput[];
    createMany?: Prisma.facturaCreateManyUsuariosInputEnvelope;
    set?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    disconnect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    delete?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    update?: Prisma.facturaUpdateWithWhereUniqueWithoutUsuariosInput | Prisma.facturaUpdateWithWhereUniqueWithoutUsuariosInput[];
    updateMany?: Prisma.facturaUpdateManyWithWhereWithoutUsuariosInput | Prisma.facturaUpdateManyWithWhereWithoutUsuariosInput[];
    deleteMany?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
};
export type facturaUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutUsuariosInput, Prisma.facturaUncheckedCreateWithoutUsuariosInput> | Prisma.facturaCreateWithoutUsuariosInput[] | Prisma.facturaUncheckedCreateWithoutUsuariosInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutUsuariosInput | Prisma.facturaCreateOrConnectWithoutUsuariosInput[];
    upsert?: Prisma.facturaUpsertWithWhereUniqueWithoutUsuariosInput | Prisma.facturaUpsertWithWhereUniqueWithoutUsuariosInput[];
    createMany?: Prisma.facturaCreateManyUsuariosInputEnvelope;
    set?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    disconnect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    delete?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    update?: Prisma.facturaUpdateWithWhereUniqueWithoutUsuariosInput | Prisma.facturaUpdateWithWhereUniqueWithoutUsuariosInput[];
    updateMany?: Prisma.facturaUpdateManyWithWhereWithoutUsuariosInput | Prisma.facturaUpdateManyWithWhereWithoutUsuariosInput[];
    deleteMany?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
};
export type facturaCreateWithoutClientesInput = {
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    detalle_factura?: Prisma.detalle_facturaCreateNestedManyWithoutFacturaInput;
    metodo_pago: Prisma.metodo_pagoCreateNestedOneWithoutFacturaInput;
    tiendas: Prisma.tiendasCreateNestedOneWithoutFacturaInput;
    usuarios: Prisma.usuariosCreateNestedOneWithoutFacturaInput;
};
export type facturaUncheckedCreateWithoutClientesInput = {
    id_factura?: number;
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario: number;
    id_tienda: number;
    id_pago: number;
    detalle_factura?: Prisma.detalle_facturaUncheckedCreateNestedManyWithoutFacturaInput;
};
export type facturaCreateOrConnectWithoutClientesInput = {
    where: Prisma.facturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaCreateWithoutClientesInput, Prisma.facturaUncheckedCreateWithoutClientesInput>;
};
export type facturaCreateManyClientesInputEnvelope = {
    data: Prisma.facturaCreateManyClientesInput | Prisma.facturaCreateManyClientesInput[];
    skipDuplicates?: boolean;
};
export type facturaUpsertWithWhereUniqueWithoutClientesInput = {
    where: Prisma.facturaWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaUpdateWithoutClientesInput, Prisma.facturaUncheckedUpdateWithoutClientesInput>;
    create: Prisma.XOR<Prisma.facturaCreateWithoutClientesInput, Prisma.facturaUncheckedCreateWithoutClientesInput>;
};
export type facturaUpdateWithWhereUniqueWithoutClientesInput = {
    where: Prisma.facturaWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaUpdateWithoutClientesInput, Prisma.facturaUncheckedUpdateWithoutClientesInput>;
};
export type facturaUpdateManyWithWhereWithoutClientesInput = {
    where: Prisma.facturaScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaUpdateManyMutationInput, Prisma.facturaUncheckedUpdateManyWithoutClientesInput>;
};
export type facturaScalarWhereInput = {
    AND?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
    OR?: Prisma.facturaScalarWhereInput[];
    NOT?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
    id_factura?: Prisma.IntFilter<"factura"> | number;
    numero_factura?: Prisma.StringFilter<"factura"> | string;
    fecha?: Prisma.DateTimeFilter<"factura"> | Date | string;
    total?: Prisma.DecimalFilter<"factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntFilter<"factura"> | number;
    id_cliente?: Prisma.IntFilter<"factura"> | number;
    id_tienda?: Prisma.IntFilter<"factura"> | number;
    id_pago?: Prisma.IntFilter<"factura"> | number;
};
export type facturaCreateWithoutDetalle_facturaInput = {
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    clientes: Prisma.clientesCreateNestedOneWithoutFacturaInput;
    metodo_pago: Prisma.metodo_pagoCreateNestedOneWithoutFacturaInput;
    tiendas: Prisma.tiendasCreateNestedOneWithoutFacturaInput;
    usuarios: Prisma.usuariosCreateNestedOneWithoutFacturaInput;
};
export type facturaUncheckedCreateWithoutDetalle_facturaInput = {
    id_factura?: number;
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario: number;
    id_cliente: number;
    id_tienda: number;
    id_pago: number;
};
export type facturaCreateOrConnectWithoutDetalle_facturaInput = {
    where: Prisma.facturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaCreateWithoutDetalle_facturaInput, Prisma.facturaUncheckedCreateWithoutDetalle_facturaInput>;
};
export type facturaUpsertWithoutDetalle_facturaInput = {
    update: Prisma.XOR<Prisma.facturaUpdateWithoutDetalle_facturaInput, Prisma.facturaUncheckedUpdateWithoutDetalle_facturaInput>;
    create: Prisma.XOR<Prisma.facturaCreateWithoutDetalle_facturaInput, Prisma.facturaUncheckedCreateWithoutDetalle_facturaInput>;
    where?: Prisma.facturaWhereInput;
};
export type facturaUpdateToOneWithWhereWithoutDetalle_facturaInput = {
    where?: Prisma.facturaWhereInput;
    data: Prisma.XOR<Prisma.facturaUpdateWithoutDetalle_facturaInput, Prisma.facturaUncheckedUpdateWithoutDetalle_facturaInput>;
};
export type facturaUpdateWithoutDetalle_facturaInput = {
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    clientes?: Prisma.clientesUpdateOneRequiredWithoutFacturaNestedInput;
    metodo_pago?: Prisma.metodo_pagoUpdateOneRequiredWithoutFacturaNestedInput;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutFacturaNestedInput;
    usuarios?: Prisma.usuariosUpdateOneRequiredWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateWithoutDetalle_facturaInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type facturaCreateWithoutMetodo_pagoInput = {
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    detalle_factura?: Prisma.detalle_facturaCreateNestedManyWithoutFacturaInput;
    clientes: Prisma.clientesCreateNestedOneWithoutFacturaInput;
    tiendas: Prisma.tiendasCreateNestedOneWithoutFacturaInput;
    usuarios: Prisma.usuariosCreateNestedOneWithoutFacturaInput;
};
export type facturaUncheckedCreateWithoutMetodo_pagoInput = {
    id_factura?: number;
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario: number;
    id_cliente: number;
    id_tienda: number;
    detalle_factura?: Prisma.detalle_facturaUncheckedCreateNestedManyWithoutFacturaInput;
};
export type facturaCreateOrConnectWithoutMetodo_pagoInput = {
    where: Prisma.facturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaCreateWithoutMetodo_pagoInput, Prisma.facturaUncheckedCreateWithoutMetodo_pagoInput>;
};
export type facturaCreateManyMetodo_pagoInputEnvelope = {
    data: Prisma.facturaCreateManyMetodo_pagoInput | Prisma.facturaCreateManyMetodo_pagoInput[];
    skipDuplicates?: boolean;
};
export type facturaUpsertWithWhereUniqueWithoutMetodo_pagoInput = {
    where: Prisma.facturaWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaUpdateWithoutMetodo_pagoInput, Prisma.facturaUncheckedUpdateWithoutMetodo_pagoInput>;
    create: Prisma.XOR<Prisma.facturaCreateWithoutMetodo_pagoInput, Prisma.facturaUncheckedCreateWithoutMetodo_pagoInput>;
};
export type facturaUpdateWithWhereUniqueWithoutMetodo_pagoInput = {
    where: Prisma.facturaWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaUpdateWithoutMetodo_pagoInput, Prisma.facturaUncheckedUpdateWithoutMetodo_pagoInput>;
};
export type facturaUpdateManyWithWhereWithoutMetodo_pagoInput = {
    where: Prisma.facturaScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaUpdateManyMutationInput, Prisma.facturaUncheckedUpdateManyWithoutMetodo_pagoInput>;
};
export type facturaCreateWithoutTiendasInput = {
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    detalle_factura?: Prisma.detalle_facturaCreateNestedManyWithoutFacturaInput;
    clientes: Prisma.clientesCreateNestedOneWithoutFacturaInput;
    metodo_pago: Prisma.metodo_pagoCreateNestedOneWithoutFacturaInput;
    usuarios: Prisma.usuariosCreateNestedOneWithoutFacturaInput;
};
export type facturaUncheckedCreateWithoutTiendasInput = {
    id_factura?: number;
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario: number;
    id_cliente: number;
    id_pago: number;
    detalle_factura?: Prisma.detalle_facturaUncheckedCreateNestedManyWithoutFacturaInput;
};
export type facturaCreateOrConnectWithoutTiendasInput = {
    where: Prisma.facturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaCreateWithoutTiendasInput, Prisma.facturaUncheckedCreateWithoutTiendasInput>;
};
export type facturaCreateManyTiendasInputEnvelope = {
    data: Prisma.facturaCreateManyTiendasInput | Prisma.facturaCreateManyTiendasInput[];
    skipDuplicates?: boolean;
};
export type facturaUpsertWithWhereUniqueWithoutTiendasInput = {
    where: Prisma.facturaWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaUpdateWithoutTiendasInput, Prisma.facturaUncheckedUpdateWithoutTiendasInput>;
    create: Prisma.XOR<Prisma.facturaCreateWithoutTiendasInput, Prisma.facturaUncheckedCreateWithoutTiendasInput>;
};
export type facturaUpdateWithWhereUniqueWithoutTiendasInput = {
    where: Prisma.facturaWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaUpdateWithoutTiendasInput, Prisma.facturaUncheckedUpdateWithoutTiendasInput>;
};
export type facturaUpdateManyWithWhereWithoutTiendasInput = {
    where: Prisma.facturaScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaUpdateManyMutationInput, Prisma.facturaUncheckedUpdateManyWithoutTiendasInput>;
};
export type facturaCreateWithoutUsuariosInput = {
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    detalle_factura?: Prisma.detalle_facturaCreateNestedManyWithoutFacturaInput;
    clientes: Prisma.clientesCreateNestedOneWithoutFacturaInput;
    metodo_pago: Prisma.metodo_pagoCreateNestedOneWithoutFacturaInput;
    tiendas: Prisma.tiendasCreateNestedOneWithoutFacturaInput;
};
export type facturaUncheckedCreateWithoutUsuariosInput = {
    id_factura?: number;
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_cliente: number;
    id_tienda: number;
    id_pago: number;
    detalle_factura?: Prisma.detalle_facturaUncheckedCreateNestedManyWithoutFacturaInput;
};
export type facturaCreateOrConnectWithoutUsuariosInput = {
    where: Prisma.facturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaCreateWithoutUsuariosInput, Prisma.facturaUncheckedCreateWithoutUsuariosInput>;
};
export type facturaCreateManyUsuariosInputEnvelope = {
    data: Prisma.facturaCreateManyUsuariosInput | Prisma.facturaCreateManyUsuariosInput[];
    skipDuplicates?: boolean;
};
export type facturaUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: Prisma.facturaWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaUpdateWithoutUsuariosInput, Prisma.facturaUncheckedUpdateWithoutUsuariosInput>;
    create: Prisma.XOR<Prisma.facturaCreateWithoutUsuariosInput, Prisma.facturaUncheckedCreateWithoutUsuariosInput>;
};
export type facturaUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: Prisma.facturaWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaUpdateWithoutUsuariosInput, Prisma.facturaUncheckedUpdateWithoutUsuariosInput>;
};
export type facturaUpdateManyWithWhereWithoutUsuariosInput = {
    where: Prisma.facturaScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaUpdateManyMutationInput, Prisma.facturaUncheckedUpdateManyWithoutUsuariosInput>;
};
export type facturaCreateManyClientesInput = {
    id_factura?: number;
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario: number;
    id_tienda: number;
    id_pago: number;
};
export type facturaUpdateWithoutClientesInput = {
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    detalle_factura?: Prisma.detalle_facturaUpdateManyWithoutFacturaNestedInput;
    metodo_pago?: Prisma.metodo_pagoUpdateOneRequiredWithoutFacturaNestedInput;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutFacturaNestedInput;
    usuarios?: Prisma.usuariosUpdateOneRequiredWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateWithoutClientesInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    detalle_factura?: Prisma.detalle_facturaUncheckedUpdateManyWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateManyWithoutClientesInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type facturaCreateManyMetodo_pagoInput = {
    id_factura?: number;
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario: number;
    id_cliente: number;
    id_tienda: number;
};
export type facturaUpdateWithoutMetodo_pagoInput = {
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    detalle_factura?: Prisma.detalle_facturaUpdateManyWithoutFacturaNestedInput;
    clientes?: Prisma.clientesUpdateOneRequiredWithoutFacturaNestedInput;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutFacturaNestedInput;
    usuarios?: Prisma.usuariosUpdateOneRequiredWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateWithoutMetodo_pagoInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    detalle_factura?: Prisma.detalle_facturaUncheckedUpdateManyWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateManyWithoutMetodo_pagoInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type facturaCreateManyTiendasInput = {
    id_factura?: number;
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario: number;
    id_cliente: number;
    id_pago: number;
};
export type facturaUpdateWithoutTiendasInput = {
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    detalle_factura?: Prisma.detalle_facturaUpdateManyWithoutFacturaNestedInput;
    clientes?: Prisma.clientesUpdateOneRequiredWithoutFacturaNestedInput;
    metodo_pago?: Prisma.metodo_pagoUpdateOneRequiredWithoutFacturaNestedInput;
    usuarios?: Prisma.usuariosUpdateOneRequiredWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateWithoutTiendasInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    detalle_factura?: Prisma.detalle_facturaUncheckedUpdateManyWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateManyWithoutTiendasInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type facturaCreateManyUsuariosInput = {
    id_factura?: number;
    numero_factura: string;
    fecha: Date | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_cliente: number;
    id_tienda: number;
    id_pago: number;
};
export type facturaUpdateWithoutUsuariosInput = {
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    detalle_factura?: Prisma.detalle_facturaUpdateManyWithoutFacturaNestedInput;
    clientes?: Prisma.clientesUpdateOneRequiredWithoutFacturaNestedInput;
    metodo_pago?: Prisma.metodo_pagoUpdateOneRequiredWithoutFacturaNestedInput;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateWithoutUsuariosInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    detalle_factura?: Prisma.detalle_facturaUncheckedUpdateManyWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateManyWithoutUsuariosInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_factura?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FacturaCountOutputType = {
    detalle_factura: number;
};
export type FacturaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalle_factura?: boolean | FacturaCountOutputTypeCountDetalle_facturaArgs;
};
export type FacturaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaCountOutputTypeSelect<ExtArgs> | null;
};
export type FacturaCountOutputTypeCountDetalle_facturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_facturaWhereInput;
};
export type facturaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_factura?: boolean;
    numero_factura?: boolean;
    fecha?: boolean;
    total?: boolean;
    id_usuario?: boolean;
    id_cliente?: boolean;
    id_tienda?: boolean;
    id_pago?: boolean;
    detalle_factura?: boolean | Prisma.factura$detalle_facturaArgs<ExtArgs>;
    clientes?: boolean | Prisma.clientesDefaultArgs<ExtArgs>;
    metodo_pago?: boolean | Prisma.metodo_pagoDefaultArgs<ExtArgs>;
    tiendas?: boolean | Prisma.tiendasDefaultArgs<ExtArgs>;
    usuarios?: boolean | Prisma.usuariosDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.FacturaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["factura"]>;
export type facturaSelectScalar = {
    id_factura?: boolean;
    numero_factura?: boolean;
    fecha?: boolean;
    total?: boolean;
    id_usuario?: boolean;
    id_cliente?: boolean;
    id_tienda?: boolean;
    id_pago?: boolean;
};
export type facturaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_factura" | "numero_factura" | "fecha" | "total" | "id_usuario" | "id_cliente" | "id_tienda" | "id_pago", ExtArgs["result"]["factura"]>;
export type facturaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalle_factura?: boolean | Prisma.factura$detalle_facturaArgs<ExtArgs>;
    clientes?: boolean | Prisma.clientesDefaultArgs<ExtArgs>;
    metodo_pago?: boolean | Prisma.metodo_pagoDefaultArgs<ExtArgs>;
    tiendas?: boolean | Prisma.tiendasDefaultArgs<ExtArgs>;
    usuarios?: boolean | Prisma.usuariosDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.FacturaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $facturaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "factura";
    objects: {
        detalle_factura: Prisma.$detalle_facturaPayload<ExtArgs>[];
        clientes: Prisma.$clientesPayload<ExtArgs>;
        metodo_pago: Prisma.$metodo_pagoPayload<ExtArgs>;
        tiendas: Prisma.$tiendasPayload<ExtArgs>;
        usuarios: Prisma.$usuariosPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_factura: number;
        numero_factura: string;
        fecha: Date;
        total: runtime.Decimal;
        id_usuario: number;
        id_cliente: number;
        id_tienda: number;
        id_pago: number;
    }, ExtArgs["result"]["factura"]>;
    composites: {};
};
export type facturaGetPayload<S extends boolean | null | undefined | facturaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$facturaPayload, S>;
export type facturaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<facturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FacturaCountAggregateInputType | true;
};
export interface facturaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['factura'];
        meta: {
            name: 'factura';
        };
    };
    findUnique<T extends facturaFindUniqueArgs>(args: Prisma.SelectSubset<T, facturaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends facturaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, facturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends facturaFindFirstArgs>(args?: Prisma.SelectSubset<T, facturaFindFirstArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends facturaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, facturaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends facturaFindManyArgs>(args?: Prisma.SelectSubset<T, facturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends facturaCreateArgs>(args: Prisma.SelectSubset<T, facturaCreateArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends facturaCreateManyArgs>(args?: Prisma.SelectSubset<T, facturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends facturaDeleteArgs>(args: Prisma.SelectSubset<T, facturaDeleteArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends facturaUpdateArgs>(args: Prisma.SelectSubset<T, facturaUpdateArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends facturaDeleteManyArgs>(args?: Prisma.SelectSubset<T, facturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends facturaUpdateManyArgs>(args: Prisma.SelectSubset<T, facturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends facturaUpsertArgs>(args: Prisma.SelectSubset<T, facturaUpsertArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends facturaCountArgs>(args?: Prisma.Subset<T, facturaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FacturaCountAggregateOutputType> : number>;
    aggregate<T extends FacturaAggregateArgs>(args: Prisma.Subset<T, FacturaAggregateArgs>): Prisma.PrismaPromise<GetFacturaAggregateType<T>>;
    groupBy<T extends facturaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: facturaGroupByArgs['orderBy'];
    } : {
        orderBy?: facturaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, facturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: facturaFieldRefs;
}
export interface Prisma__facturaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    detalle_factura<T extends Prisma.factura$detalle_facturaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.factura$detalle_facturaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    clientes<T extends Prisma.clientesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.clientesDefaultArgs<ExtArgs>>): Prisma.Prisma__clientesClient<runtime.Types.Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    metodo_pago<T extends Prisma.metodo_pagoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.metodo_pagoDefaultArgs<ExtArgs>>): Prisma.Prisma__metodo_pagoClient<runtime.Types.Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tiendas<T extends Prisma.tiendasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tiendasDefaultArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    usuarios<T extends Prisma.usuariosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuariosDefaultArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface facturaFieldRefs {
    readonly id_factura: Prisma.FieldRef<"factura", 'Int'>;
    readonly numero_factura: Prisma.FieldRef<"factura", 'String'>;
    readonly fecha: Prisma.FieldRef<"factura", 'DateTime'>;
    readonly total: Prisma.FieldRef<"factura", 'Decimal'>;
    readonly id_usuario: Prisma.FieldRef<"factura", 'Int'>;
    readonly id_cliente: Prisma.FieldRef<"factura", 'Int'>;
    readonly id_tienda: Prisma.FieldRef<"factura", 'Int'>;
    readonly id_pago: Prisma.FieldRef<"factura", 'Int'>;
}
export type facturaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where: Prisma.facturaWhereUniqueInput;
};
export type facturaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where: Prisma.facturaWhereUniqueInput;
};
export type facturaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where?: Prisma.facturaWhereInput;
    orderBy?: Prisma.facturaOrderByWithRelationInput | Prisma.facturaOrderByWithRelationInput[];
    cursor?: Prisma.facturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacturaScalarFieldEnum | Prisma.FacturaScalarFieldEnum[];
};
export type facturaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where?: Prisma.facturaWhereInput;
    orderBy?: Prisma.facturaOrderByWithRelationInput | Prisma.facturaOrderByWithRelationInput[];
    cursor?: Prisma.facturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacturaScalarFieldEnum | Prisma.FacturaScalarFieldEnum[];
};
export type facturaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where?: Prisma.facturaWhereInput;
    orderBy?: Prisma.facturaOrderByWithRelationInput | Prisma.facturaOrderByWithRelationInput[];
    cursor?: Prisma.facturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacturaScalarFieldEnum | Prisma.FacturaScalarFieldEnum[];
};
export type facturaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.facturaCreateInput, Prisma.facturaUncheckedCreateInput>;
};
export type facturaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.facturaCreateManyInput | Prisma.facturaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type facturaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.facturaUpdateInput, Prisma.facturaUncheckedUpdateInput>;
    where: Prisma.facturaWhereUniqueInput;
};
export type facturaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.facturaUpdateManyMutationInput, Prisma.facturaUncheckedUpdateManyInput>;
    where?: Prisma.facturaWhereInput;
    limit?: number;
};
export type facturaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where: Prisma.facturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaCreateInput, Prisma.facturaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.facturaUpdateInput, Prisma.facturaUncheckedUpdateInput>;
};
export type facturaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where: Prisma.facturaWhereUniqueInput;
};
export type facturaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaWhereInput;
    limit?: number;
};
export type factura$detalle_facturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type facturaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
};
