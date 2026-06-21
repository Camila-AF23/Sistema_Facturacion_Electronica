import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type clientesModel = runtime.Types.Result.DefaultSelection<Prisma.$clientesPayload>;
export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null;
    _avg: ClientesAvgAggregateOutputType | null;
    _sum: ClientesSumAggregateOutputType | null;
    _min: ClientesMinAggregateOutputType | null;
    _max: ClientesMaxAggregateOutputType | null;
};
export type ClientesAvgAggregateOutputType = {
    id_cliente: number | null;
    id_tienda: number | null;
};
export type ClientesSumAggregateOutputType = {
    id_cliente: number | null;
    id_tienda: number | null;
};
export type ClientesMinAggregateOutputType = {
    id_cliente: number | null;
    documento_cliente: string | null;
    nombre_cliente: string | null;
    telefono_cliente: string | null;
    correo_cliente: string | null;
    id_tienda: number | null;
};
export type ClientesMaxAggregateOutputType = {
    id_cliente: number | null;
    documento_cliente: string | null;
    nombre_cliente: string | null;
    telefono_cliente: string | null;
    correo_cliente: string | null;
    id_tienda: number | null;
};
export type ClientesCountAggregateOutputType = {
    id_cliente: number;
    documento_cliente: number;
    nombre_cliente: number;
    telefono_cliente: number;
    correo_cliente: number;
    id_tienda: number;
    _all: number;
};
export type ClientesAvgAggregateInputType = {
    id_cliente?: true;
    id_tienda?: true;
};
export type ClientesSumAggregateInputType = {
    id_cliente?: true;
    id_tienda?: true;
};
export type ClientesMinAggregateInputType = {
    id_cliente?: true;
    documento_cliente?: true;
    nombre_cliente?: true;
    telefono_cliente?: true;
    correo_cliente?: true;
    id_tienda?: true;
};
export type ClientesMaxAggregateInputType = {
    id_cliente?: true;
    documento_cliente?: true;
    nombre_cliente?: true;
    telefono_cliente?: true;
    correo_cliente?: true;
    id_tienda?: true;
};
export type ClientesCountAggregateInputType = {
    id_cliente?: true;
    documento_cliente?: true;
    nombre_cliente?: true;
    telefono_cliente?: true;
    correo_cliente?: true;
    id_tienda?: true;
    _all?: true;
};
export type ClientesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.clientesWhereInput;
    orderBy?: Prisma.clientesOrderByWithRelationInput | Prisma.clientesOrderByWithRelationInput[];
    cursor?: Prisma.clientesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClientesCountAggregateInputType;
    _avg?: ClientesAvgAggregateInputType;
    _sum?: ClientesSumAggregateInputType;
    _min?: ClientesMinAggregateInputType;
    _max?: ClientesMaxAggregateInputType;
};
export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
    [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClientes[P]> : Prisma.GetScalarType<T[P], AggregateClientes[P]>;
};
export type clientesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.clientesWhereInput;
    orderBy?: Prisma.clientesOrderByWithAggregationInput | Prisma.clientesOrderByWithAggregationInput[];
    by: Prisma.ClientesScalarFieldEnum[] | Prisma.ClientesScalarFieldEnum;
    having?: Prisma.clientesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientesCountAggregateInputType | true;
    _avg?: ClientesAvgAggregateInputType;
    _sum?: ClientesSumAggregateInputType;
    _min?: ClientesMinAggregateInputType;
    _max?: ClientesMaxAggregateInputType;
};
export type ClientesGroupByOutputType = {
    id_cliente: number;
    documento_cliente: string;
    nombre_cliente: string;
    telefono_cliente: string | null;
    correo_cliente: string;
    id_tienda: number;
    _count: ClientesCountAggregateOutputType | null;
    _avg: ClientesAvgAggregateOutputType | null;
    _sum: ClientesSumAggregateOutputType | null;
    _min: ClientesMinAggregateOutputType | null;
    _max: ClientesMaxAggregateOutputType | null;
};
export type GetClientesGroupByPayload<T extends clientesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClientesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClientesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClientesGroupByOutputType[P]>;
}>>;
export type clientesWhereInput = {
    AND?: Prisma.clientesWhereInput | Prisma.clientesWhereInput[];
    OR?: Prisma.clientesWhereInput[];
    NOT?: Prisma.clientesWhereInput | Prisma.clientesWhereInput[];
    id_cliente?: Prisma.IntFilter<"clientes"> | number;
    documento_cliente?: Prisma.StringFilter<"clientes"> | string;
    nombre_cliente?: Prisma.StringFilter<"clientes"> | string;
    telefono_cliente?: Prisma.StringNullableFilter<"clientes"> | string | null;
    correo_cliente?: Prisma.StringFilter<"clientes"> | string;
    id_tienda?: Prisma.IntFilter<"clientes"> | number;
    tiendas?: Prisma.XOR<Prisma.TiendasScalarRelationFilter, Prisma.tiendasWhereInput>;
    factura?: Prisma.FacturaListRelationFilter;
};
export type clientesOrderByWithRelationInput = {
    id_cliente?: Prisma.SortOrder;
    documento_cliente?: Prisma.SortOrder;
    nombre_cliente?: Prisma.SortOrder;
    telefono_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    correo_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    tiendas?: Prisma.tiendasOrderByWithRelationInput;
    factura?: Prisma.facturaOrderByRelationAggregateInput;
    _relevance?: Prisma.clientesOrderByRelevanceInput;
};
export type clientesWhereUniqueInput = Prisma.AtLeast<{
    id_cliente?: number;
    documento_cliente?: string;
    AND?: Prisma.clientesWhereInput | Prisma.clientesWhereInput[];
    OR?: Prisma.clientesWhereInput[];
    NOT?: Prisma.clientesWhereInput | Prisma.clientesWhereInput[];
    nombre_cliente?: Prisma.StringFilter<"clientes"> | string;
    telefono_cliente?: Prisma.StringNullableFilter<"clientes"> | string | null;
    correo_cliente?: Prisma.StringFilter<"clientes"> | string;
    id_tienda?: Prisma.IntFilter<"clientes"> | number;
    tiendas?: Prisma.XOR<Prisma.TiendasScalarRelationFilter, Prisma.tiendasWhereInput>;
    factura?: Prisma.FacturaListRelationFilter;
}, "id_cliente" | "documento_cliente">;
export type clientesOrderByWithAggregationInput = {
    id_cliente?: Prisma.SortOrder;
    documento_cliente?: Prisma.SortOrder;
    nombre_cliente?: Prisma.SortOrder;
    telefono_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    correo_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    _count?: Prisma.clientesCountOrderByAggregateInput;
    _avg?: Prisma.clientesAvgOrderByAggregateInput;
    _max?: Prisma.clientesMaxOrderByAggregateInput;
    _min?: Prisma.clientesMinOrderByAggregateInput;
    _sum?: Prisma.clientesSumOrderByAggregateInput;
};
export type clientesScalarWhereWithAggregatesInput = {
    AND?: Prisma.clientesScalarWhereWithAggregatesInput | Prisma.clientesScalarWhereWithAggregatesInput[];
    OR?: Prisma.clientesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.clientesScalarWhereWithAggregatesInput | Prisma.clientesScalarWhereWithAggregatesInput[];
    id_cliente?: Prisma.IntWithAggregatesFilter<"clientes"> | number;
    documento_cliente?: Prisma.StringWithAggregatesFilter<"clientes"> | string;
    nombre_cliente?: Prisma.StringWithAggregatesFilter<"clientes"> | string;
    telefono_cliente?: Prisma.StringNullableWithAggregatesFilter<"clientes"> | string | null;
    correo_cliente?: Prisma.StringWithAggregatesFilter<"clientes"> | string;
    id_tienda?: Prisma.IntWithAggregatesFilter<"clientes"> | number;
};
export type clientesCreateInput = {
    documento_cliente: string;
    nombre_cliente: string;
    telefono_cliente?: string | null;
    correo_cliente: string;
    tiendas: Prisma.tiendasCreateNestedOneWithoutClientesInput;
    factura?: Prisma.facturaCreateNestedManyWithoutClientesInput;
};
export type clientesUncheckedCreateInput = {
    id_cliente?: number;
    documento_cliente: string;
    nombre_cliente: string;
    telefono_cliente?: string | null;
    correo_cliente: string;
    id_tienda: number;
    factura?: Prisma.facturaUncheckedCreateNestedManyWithoutClientesInput;
};
export type clientesUpdateInput = {
    documento_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono_cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutClientesNestedInput;
    factura?: Prisma.facturaUpdateManyWithoutClientesNestedInput;
};
export type clientesUncheckedUpdateInput = {
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    documento_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono_cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    factura?: Prisma.facturaUncheckedUpdateManyWithoutClientesNestedInput;
};
export type clientesCreateManyInput = {
    id_cliente?: number;
    documento_cliente: string;
    nombre_cliente: string;
    telefono_cliente?: string | null;
    correo_cliente: string;
    id_tienda: number;
};
export type clientesUpdateManyMutationInput = {
    documento_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono_cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type clientesUncheckedUpdateManyInput = {
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    documento_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono_cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type clientesOrderByRelevanceInput = {
    fields: Prisma.clientesOrderByRelevanceFieldEnum | Prisma.clientesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type clientesCountOrderByAggregateInput = {
    id_cliente?: Prisma.SortOrder;
    documento_cliente?: Prisma.SortOrder;
    nombre_cliente?: Prisma.SortOrder;
    telefono_cliente?: Prisma.SortOrder;
    correo_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type clientesAvgOrderByAggregateInput = {
    id_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type clientesMaxOrderByAggregateInput = {
    id_cliente?: Prisma.SortOrder;
    documento_cliente?: Prisma.SortOrder;
    nombre_cliente?: Prisma.SortOrder;
    telefono_cliente?: Prisma.SortOrder;
    correo_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type clientesMinOrderByAggregateInput = {
    id_cliente?: Prisma.SortOrder;
    documento_cliente?: Prisma.SortOrder;
    nombre_cliente?: Prisma.SortOrder;
    telefono_cliente?: Prisma.SortOrder;
    correo_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type clientesSumOrderByAggregateInput = {
    id_cliente?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type ClientesScalarRelationFilter = {
    is?: Prisma.clientesWhereInput;
    isNot?: Prisma.clientesWhereInput;
};
export type ClientesListRelationFilter = {
    every?: Prisma.clientesWhereInput;
    some?: Prisma.clientesWhereInput;
    none?: Prisma.clientesWhereInput;
};
export type clientesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type clientesCreateNestedOneWithoutFacturaInput = {
    create?: Prisma.XOR<Prisma.clientesCreateWithoutFacturaInput, Prisma.clientesUncheckedCreateWithoutFacturaInput>;
    connectOrCreate?: Prisma.clientesCreateOrConnectWithoutFacturaInput;
    connect?: Prisma.clientesWhereUniqueInput;
};
export type clientesUpdateOneRequiredWithoutFacturaNestedInput = {
    create?: Prisma.XOR<Prisma.clientesCreateWithoutFacturaInput, Prisma.clientesUncheckedCreateWithoutFacturaInput>;
    connectOrCreate?: Prisma.clientesCreateOrConnectWithoutFacturaInput;
    upsert?: Prisma.clientesUpsertWithoutFacturaInput;
    connect?: Prisma.clientesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.clientesUpdateToOneWithWhereWithoutFacturaInput, Prisma.clientesUpdateWithoutFacturaInput>, Prisma.clientesUncheckedUpdateWithoutFacturaInput>;
};
export type clientesCreateNestedManyWithoutTiendasInput = {
    create?: Prisma.XOR<Prisma.clientesCreateWithoutTiendasInput, Prisma.clientesUncheckedCreateWithoutTiendasInput> | Prisma.clientesCreateWithoutTiendasInput[] | Prisma.clientesUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.clientesCreateOrConnectWithoutTiendasInput | Prisma.clientesCreateOrConnectWithoutTiendasInput[];
    createMany?: Prisma.clientesCreateManyTiendasInputEnvelope;
    connect?: Prisma.clientesWhereUniqueInput | Prisma.clientesWhereUniqueInput[];
};
export type clientesUncheckedCreateNestedManyWithoutTiendasInput = {
    create?: Prisma.XOR<Prisma.clientesCreateWithoutTiendasInput, Prisma.clientesUncheckedCreateWithoutTiendasInput> | Prisma.clientesCreateWithoutTiendasInput[] | Prisma.clientesUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.clientesCreateOrConnectWithoutTiendasInput | Prisma.clientesCreateOrConnectWithoutTiendasInput[];
    createMany?: Prisma.clientesCreateManyTiendasInputEnvelope;
    connect?: Prisma.clientesWhereUniqueInput | Prisma.clientesWhereUniqueInput[];
};
export type clientesUpdateManyWithoutTiendasNestedInput = {
    create?: Prisma.XOR<Prisma.clientesCreateWithoutTiendasInput, Prisma.clientesUncheckedCreateWithoutTiendasInput> | Prisma.clientesCreateWithoutTiendasInput[] | Prisma.clientesUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.clientesCreateOrConnectWithoutTiendasInput | Prisma.clientesCreateOrConnectWithoutTiendasInput[];
    upsert?: Prisma.clientesUpsertWithWhereUniqueWithoutTiendasInput | Prisma.clientesUpsertWithWhereUniqueWithoutTiendasInput[];
    createMany?: Prisma.clientesCreateManyTiendasInputEnvelope;
    set?: Prisma.clientesWhereUniqueInput | Prisma.clientesWhereUniqueInput[];
    disconnect?: Prisma.clientesWhereUniqueInput | Prisma.clientesWhereUniqueInput[];
    delete?: Prisma.clientesWhereUniqueInput | Prisma.clientesWhereUniqueInput[];
    connect?: Prisma.clientesWhereUniqueInput | Prisma.clientesWhereUniqueInput[];
    update?: Prisma.clientesUpdateWithWhereUniqueWithoutTiendasInput | Prisma.clientesUpdateWithWhereUniqueWithoutTiendasInput[];
    updateMany?: Prisma.clientesUpdateManyWithWhereWithoutTiendasInput | Prisma.clientesUpdateManyWithWhereWithoutTiendasInput[];
    deleteMany?: Prisma.clientesScalarWhereInput | Prisma.clientesScalarWhereInput[];
};
export type clientesUncheckedUpdateManyWithoutTiendasNestedInput = {
    create?: Prisma.XOR<Prisma.clientesCreateWithoutTiendasInput, Prisma.clientesUncheckedCreateWithoutTiendasInput> | Prisma.clientesCreateWithoutTiendasInput[] | Prisma.clientesUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.clientesCreateOrConnectWithoutTiendasInput | Prisma.clientesCreateOrConnectWithoutTiendasInput[];
    upsert?: Prisma.clientesUpsertWithWhereUniqueWithoutTiendasInput | Prisma.clientesUpsertWithWhereUniqueWithoutTiendasInput[];
    createMany?: Prisma.clientesCreateManyTiendasInputEnvelope;
    set?: Prisma.clientesWhereUniqueInput | Prisma.clientesWhereUniqueInput[];
    disconnect?: Prisma.clientesWhereUniqueInput | Prisma.clientesWhereUniqueInput[];
    delete?: Prisma.clientesWhereUniqueInput | Prisma.clientesWhereUniqueInput[];
    connect?: Prisma.clientesWhereUniqueInput | Prisma.clientesWhereUniqueInput[];
    update?: Prisma.clientesUpdateWithWhereUniqueWithoutTiendasInput | Prisma.clientesUpdateWithWhereUniqueWithoutTiendasInput[];
    updateMany?: Prisma.clientesUpdateManyWithWhereWithoutTiendasInput | Prisma.clientesUpdateManyWithWhereWithoutTiendasInput[];
    deleteMany?: Prisma.clientesScalarWhereInput | Prisma.clientesScalarWhereInput[];
};
export type clientesCreateWithoutFacturaInput = {
    documento_cliente: string;
    nombre_cliente: string;
    telefono_cliente?: string | null;
    correo_cliente: string;
    tiendas: Prisma.tiendasCreateNestedOneWithoutClientesInput;
};
export type clientesUncheckedCreateWithoutFacturaInput = {
    id_cliente?: number;
    documento_cliente: string;
    nombre_cliente: string;
    telefono_cliente?: string | null;
    correo_cliente: string;
    id_tienda: number;
};
export type clientesCreateOrConnectWithoutFacturaInput = {
    where: Prisma.clientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.clientesCreateWithoutFacturaInput, Prisma.clientesUncheckedCreateWithoutFacturaInput>;
};
export type clientesUpsertWithoutFacturaInput = {
    update: Prisma.XOR<Prisma.clientesUpdateWithoutFacturaInput, Prisma.clientesUncheckedUpdateWithoutFacturaInput>;
    create: Prisma.XOR<Prisma.clientesCreateWithoutFacturaInput, Prisma.clientesUncheckedCreateWithoutFacturaInput>;
    where?: Prisma.clientesWhereInput;
};
export type clientesUpdateToOneWithWhereWithoutFacturaInput = {
    where?: Prisma.clientesWhereInput;
    data: Prisma.XOR<Prisma.clientesUpdateWithoutFacturaInput, Prisma.clientesUncheckedUpdateWithoutFacturaInput>;
};
export type clientesUpdateWithoutFacturaInput = {
    documento_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono_cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutClientesNestedInput;
};
export type clientesUncheckedUpdateWithoutFacturaInput = {
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    documento_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono_cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type clientesCreateWithoutTiendasInput = {
    documento_cliente: string;
    nombre_cliente: string;
    telefono_cliente?: string | null;
    correo_cliente: string;
    factura?: Prisma.facturaCreateNestedManyWithoutClientesInput;
};
export type clientesUncheckedCreateWithoutTiendasInput = {
    id_cliente?: number;
    documento_cliente: string;
    nombre_cliente: string;
    telefono_cliente?: string | null;
    correo_cliente: string;
    factura?: Prisma.facturaUncheckedCreateNestedManyWithoutClientesInput;
};
export type clientesCreateOrConnectWithoutTiendasInput = {
    where: Prisma.clientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.clientesCreateWithoutTiendasInput, Prisma.clientesUncheckedCreateWithoutTiendasInput>;
};
export type clientesCreateManyTiendasInputEnvelope = {
    data: Prisma.clientesCreateManyTiendasInput | Prisma.clientesCreateManyTiendasInput[];
    skipDuplicates?: boolean;
};
export type clientesUpsertWithWhereUniqueWithoutTiendasInput = {
    where: Prisma.clientesWhereUniqueInput;
    update: Prisma.XOR<Prisma.clientesUpdateWithoutTiendasInput, Prisma.clientesUncheckedUpdateWithoutTiendasInput>;
    create: Prisma.XOR<Prisma.clientesCreateWithoutTiendasInput, Prisma.clientesUncheckedCreateWithoutTiendasInput>;
};
export type clientesUpdateWithWhereUniqueWithoutTiendasInput = {
    where: Prisma.clientesWhereUniqueInput;
    data: Prisma.XOR<Prisma.clientesUpdateWithoutTiendasInput, Prisma.clientesUncheckedUpdateWithoutTiendasInput>;
};
export type clientesUpdateManyWithWhereWithoutTiendasInput = {
    where: Prisma.clientesScalarWhereInput;
    data: Prisma.XOR<Prisma.clientesUpdateManyMutationInput, Prisma.clientesUncheckedUpdateManyWithoutTiendasInput>;
};
export type clientesScalarWhereInput = {
    AND?: Prisma.clientesScalarWhereInput | Prisma.clientesScalarWhereInput[];
    OR?: Prisma.clientesScalarWhereInput[];
    NOT?: Prisma.clientesScalarWhereInput | Prisma.clientesScalarWhereInput[];
    id_cliente?: Prisma.IntFilter<"clientes"> | number;
    documento_cliente?: Prisma.StringFilter<"clientes"> | string;
    nombre_cliente?: Prisma.StringFilter<"clientes"> | string;
    telefono_cliente?: Prisma.StringNullableFilter<"clientes"> | string | null;
    correo_cliente?: Prisma.StringFilter<"clientes"> | string;
    id_tienda?: Prisma.IntFilter<"clientes"> | number;
};
export type clientesCreateManyTiendasInput = {
    id_cliente?: number;
    documento_cliente: string;
    nombre_cliente: string;
    telefono_cliente?: string | null;
    correo_cliente: string;
};
export type clientesUpdateWithoutTiendasInput = {
    documento_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono_cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    factura?: Prisma.facturaUpdateManyWithoutClientesNestedInput;
};
export type clientesUncheckedUpdateWithoutTiendasInput = {
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    documento_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono_cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    factura?: Prisma.facturaUncheckedUpdateManyWithoutClientesNestedInput;
};
export type clientesUncheckedUpdateManyWithoutTiendasInput = {
    id_cliente?: Prisma.IntFieldUpdateOperationsInput | number;
    documento_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono_cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClientesCountOutputType = {
    factura: number;
};
export type ClientesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura?: boolean | ClientesCountOutputTypeCountFacturaArgs;
};
export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesCountOutputTypeSelect<ExtArgs> | null;
};
export type ClientesCountOutputTypeCountFacturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaWhereInput;
};
export type clientesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_cliente?: boolean;
    documento_cliente?: boolean;
    nombre_cliente?: boolean;
    telefono_cliente?: boolean;
    correo_cliente?: boolean;
    id_tienda?: boolean;
    tiendas?: boolean | Prisma.tiendasDefaultArgs<ExtArgs>;
    factura?: boolean | Prisma.clientes$facturaArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clientes"]>;
export type clientesSelectScalar = {
    id_cliente?: boolean;
    documento_cliente?: boolean;
    nombre_cliente?: boolean;
    telefono_cliente?: boolean;
    correo_cliente?: boolean;
    id_tienda?: boolean;
};
export type clientesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_cliente" | "documento_cliente" | "nombre_cliente" | "telefono_cliente" | "correo_cliente" | "id_tienda", ExtArgs["result"]["clientes"]>;
export type clientesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tiendas?: boolean | Prisma.tiendasDefaultArgs<ExtArgs>;
    factura?: boolean | Prisma.clientes$facturaArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $clientesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "clientes";
    objects: {
        tiendas: Prisma.$tiendasPayload<ExtArgs>;
        factura: Prisma.$facturaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_cliente: number;
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
        id_tienda: number;
    }, ExtArgs["result"]["clientes"]>;
    composites: {};
};
export type clientesGetPayload<S extends boolean | null | undefined | clientesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$clientesPayload, S>;
export type clientesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<clientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientesCountAggregateInputType | true;
};
export interface clientesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['clientes'];
        meta: {
            name: 'clientes';
        };
    };
    findUnique<T extends clientesFindUniqueArgs>(args: Prisma.SelectSubset<T, clientesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__clientesClient<runtime.Types.Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends clientesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, clientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__clientesClient<runtime.Types.Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends clientesFindFirstArgs>(args?: Prisma.SelectSubset<T, clientesFindFirstArgs<ExtArgs>>): Prisma.Prisma__clientesClient<runtime.Types.Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends clientesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, clientesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__clientesClient<runtime.Types.Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends clientesFindManyArgs>(args?: Prisma.SelectSubset<T, clientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends clientesCreateArgs>(args: Prisma.SelectSubset<T, clientesCreateArgs<ExtArgs>>): Prisma.Prisma__clientesClient<runtime.Types.Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends clientesCreateManyArgs>(args?: Prisma.SelectSubset<T, clientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends clientesDeleteArgs>(args: Prisma.SelectSubset<T, clientesDeleteArgs<ExtArgs>>): Prisma.Prisma__clientesClient<runtime.Types.Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends clientesUpdateArgs>(args: Prisma.SelectSubset<T, clientesUpdateArgs<ExtArgs>>): Prisma.Prisma__clientesClient<runtime.Types.Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends clientesDeleteManyArgs>(args?: Prisma.SelectSubset<T, clientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends clientesUpdateManyArgs>(args: Prisma.SelectSubset<T, clientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends clientesUpsertArgs>(args: Prisma.SelectSubset<T, clientesUpsertArgs<ExtArgs>>): Prisma.Prisma__clientesClient<runtime.Types.Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends clientesCountArgs>(args?: Prisma.Subset<T, clientesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClientesCountAggregateOutputType> : number>;
    aggregate<T extends ClientesAggregateArgs>(args: Prisma.Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>;
    groupBy<T extends clientesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: clientesGroupByArgs['orderBy'];
    } : {
        orderBy?: clientesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, clientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: clientesFieldRefs;
}
export interface Prisma__clientesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tiendas<T extends Prisma.tiendasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tiendasDefaultArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    factura<T extends Prisma.clientes$facturaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.clientes$facturaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface clientesFieldRefs {
    readonly id_cliente: Prisma.FieldRef<"clientes", 'Int'>;
    readonly documento_cliente: Prisma.FieldRef<"clientes", 'String'>;
    readonly nombre_cliente: Prisma.FieldRef<"clientes", 'String'>;
    readonly telefono_cliente: Prisma.FieldRef<"clientes", 'String'>;
    readonly correo_cliente: Prisma.FieldRef<"clientes", 'String'>;
    readonly id_tienda: Prisma.FieldRef<"clientes", 'Int'>;
}
export type clientesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clientesSelect<ExtArgs> | null;
    omit?: Prisma.clientesOmit<ExtArgs> | null;
    include?: Prisma.clientesInclude<ExtArgs> | null;
    where: Prisma.clientesWhereUniqueInput;
};
export type clientesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clientesSelect<ExtArgs> | null;
    omit?: Prisma.clientesOmit<ExtArgs> | null;
    include?: Prisma.clientesInclude<ExtArgs> | null;
    where: Prisma.clientesWhereUniqueInput;
};
export type clientesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clientesSelect<ExtArgs> | null;
    omit?: Prisma.clientesOmit<ExtArgs> | null;
    include?: Prisma.clientesInclude<ExtArgs> | null;
    where?: Prisma.clientesWhereInput;
    orderBy?: Prisma.clientesOrderByWithRelationInput | Prisma.clientesOrderByWithRelationInput[];
    cursor?: Prisma.clientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientesScalarFieldEnum | Prisma.ClientesScalarFieldEnum[];
};
export type clientesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clientesSelect<ExtArgs> | null;
    omit?: Prisma.clientesOmit<ExtArgs> | null;
    include?: Prisma.clientesInclude<ExtArgs> | null;
    where?: Prisma.clientesWhereInput;
    orderBy?: Prisma.clientesOrderByWithRelationInput | Prisma.clientesOrderByWithRelationInput[];
    cursor?: Prisma.clientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientesScalarFieldEnum | Prisma.ClientesScalarFieldEnum[];
};
export type clientesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clientesSelect<ExtArgs> | null;
    omit?: Prisma.clientesOmit<ExtArgs> | null;
    include?: Prisma.clientesInclude<ExtArgs> | null;
    where?: Prisma.clientesWhereInput;
    orderBy?: Prisma.clientesOrderByWithRelationInput | Prisma.clientesOrderByWithRelationInput[];
    cursor?: Prisma.clientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientesScalarFieldEnum | Prisma.ClientesScalarFieldEnum[];
};
export type clientesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clientesSelect<ExtArgs> | null;
    omit?: Prisma.clientesOmit<ExtArgs> | null;
    include?: Prisma.clientesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.clientesCreateInput, Prisma.clientesUncheckedCreateInput>;
};
export type clientesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.clientesCreateManyInput | Prisma.clientesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type clientesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clientesSelect<ExtArgs> | null;
    omit?: Prisma.clientesOmit<ExtArgs> | null;
    include?: Prisma.clientesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.clientesUpdateInput, Prisma.clientesUncheckedUpdateInput>;
    where: Prisma.clientesWhereUniqueInput;
};
export type clientesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.clientesUpdateManyMutationInput, Prisma.clientesUncheckedUpdateManyInput>;
    where?: Prisma.clientesWhereInput;
    limit?: number;
};
export type clientesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clientesSelect<ExtArgs> | null;
    omit?: Prisma.clientesOmit<ExtArgs> | null;
    include?: Prisma.clientesInclude<ExtArgs> | null;
    where: Prisma.clientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.clientesCreateInput, Prisma.clientesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.clientesUpdateInput, Prisma.clientesUncheckedUpdateInput>;
};
export type clientesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clientesSelect<ExtArgs> | null;
    omit?: Prisma.clientesOmit<ExtArgs> | null;
    include?: Prisma.clientesInclude<ExtArgs> | null;
    where: Prisma.clientesWhereUniqueInput;
};
export type clientesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.clientesWhereInput;
    limit?: number;
};
export type clientes$facturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type clientesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clientesSelect<ExtArgs> | null;
    omit?: Prisma.clientesOmit<ExtArgs> | null;
    include?: Prisma.clientesInclude<ExtArgs> | null;
};
