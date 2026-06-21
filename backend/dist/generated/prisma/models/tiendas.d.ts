import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type tiendasModel = runtime.Types.Result.DefaultSelection<Prisma.$tiendasPayload>;
export type AggregateTiendas = {
    _count: TiendasCountAggregateOutputType | null;
    _avg: TiendasAvgAggregateOutputType | null;
    _sum: TiendasSumAggregateOutputType | null;
    _min: TiendasMinAggregateOutputType | null;
    _max: TiendasMaxAggregateOutputType | null;
};
export type TiendasAvgAggregateOutputType = {
    id_tienda: number | null;
};
export type TiendasSumAggregateOutputType = {
    id_tienda: number | null;
};
export type TiendasMinAggregateOutputType = {
    id_tienda: number | null;
    nombre_tienda: string | null;
    direccion_tienda: string | null;
    telefono_tienda: string | null;
    correo: string | null;
    nit: string | null;
};
export type TiendasMaxAggregateOutputType = {
    id_tienda: number | null;
    nombre_tienda: string | null;
    direccion_tienda: string | null;
    telefono_tienda: string | null;
    correo: string | null;
    nit: string | null;
};
export type TiendasCountAggregateOutputType = {
    id_tienda: number;
    nombre_tienda: number;
    direccion_tienda: number;
    telefono_tienda: number;
    correo: number;
    nit: number;
    _all: number;
};
export type TiendasAvgAggregateInputType = {
    id_tienda?: true;
};
export type TiendasSumAggregateInputType = {
    id_tienda?: true;
};
export type TiendasMinAggregateInputType = {
    id_tienda?: true;
    nombre_tienda?: true;
    direccion_tienda?: true;
    telefono_tienda?: true;
    correo?: true;
    nit?: true;
};
export type TiendasMaxAggregateInputType = {
    id_tienda?: true;
    nombre_tienda?: true;
    direccion_tienda?: true;
    telefono_tienda?: true;
    correo?: true;
    nit?: true;
};
export type TiendasCountAggregateInputType = {
    id_tienda?: true;
    nombre_tienda?: true;
    direccion_tienda?: true;
    telefono_tienda?: true;
    correo?: true;
    nit?: true;
    _all?: true;
};
export type TiendasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tiendasWhereInput;
    orderBy?: Prisma.tiendasOrderByWithRelationInput | Prisma.tiendasOrderByWithRelationInput[];
    cursor?: Prisma.tiendasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TiendasCountAggregateInputType;
    _avg?: TiendasAvgAggregateInputType;
    _sum?: TiendasSumAggregateInputType;
    _min?: TiendasMinAggregateInputType;
    _max?: TiendasMaxAggregateInputType;
};
export type GetTiendasAggregateType<T extends TiendasAggregateArgs> = {
    [P in keyof T & keyof AggregateTiendas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTiendas[P]> : Prisma.GetScalarType<T[P], AggregateTiendas[P]>;
};
export type tiendasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tiendasWhereInput;
    orderBy?: Prisma.tiendasOrderByWithAggregationInput | Prisma.tiendasOrderByWithAggregationInput[];
    by: Prisma.TiendasScalarFieldEnum[] | Prisma.TiendasScalarFieldEnum;
    having?: Prisma.tiendasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TiendasCountAggregateInputType | true;
    _avg?: TiendasAvgAggregateInputType;
    _sum?: TiendasSumAggregateInputType;
    _min?: TiendasMinAggregateInputType;
    _max?: TiendasMaxAggregateInputType;
};
export type TiendasGroupByOutputType = {
    id_tienda: number;
    nombre_tienda: string;
    direccion_tienda: string | null;
    telefono_tienda: string | null;
    correo: string;
    nit: string;
    _count: TiendasCountAggregateOutputType | null;
    _avg: TiendasAvgAggregateOutputType | null;
    _sum: TiendasSumAggregateOutputType | null;
    _min: TiendasMinAggregateOutputType | null;
    _max: TiendasMaxAggregateOutputType | null;
};
export type GetTiendasGroupByPayload<T extends tiendasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TiendasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TiendasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TiendasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TiendasGroupByOutputType[P]>;
}>>;
export type tiendasWhereInput = {
    AND?: Prisma.tiendasWhereInput | Prisma.tiendasWhereInput[];
    OR?: Prisma.tiendasWhereInput[];
    NOT?: Prisma.tiendasWhereInput | Prisma.tiendasWhereInput[];
    id_tienda?: Prisma.IntFilter<"tiendas"> | number;
    nombre_tienda?: Prisma.StringFilter<"tiendas"> | string;
    direccion_tienda?: Prisma.StringNullableFilter<"tiendas"> | string | null;
    telefono_tienda?: Prisma.StringNullableFilter<"tiendas"> | string | null;
    correo?: Prisma.StringFilter<"tiendas"> | string;
    nit?: Prisma.StringFilter<"tiendas"> | string;
    categorias?: Prisma.CategoriasListRelationFilter;
    clientes?: Prisma.ClientesListRelationFilter;
    factura?: Prisma.FacturaListRelationFilter;
    productos?: Prisma.ProductosListRelationFilter;
    usuarios?: Prisma.UsuariosListRelationFilter;
};
export type tiendasOrderByWithRelationInput = {
    id_tienda?: Prisma.SortOrder;
    nombre_tienda?: Prisma.SortOrder;
    direccion_tienda?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono_tienda?: Prisma.SortOrderInput | Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    nit?: Prisma.SortOrder;
    categorias?: Prisma.categoriasOrderByRelationAggregateInput;
    clientes?: Prisma.clientesOrderByRelationAggregateInput;
    factura?: Prisma.facturaOrderByRelationAggregateInput;
    productos?: Prisma.productosOrderByRelationAggregateInput;
    usuarios?: Prisma.usuariosOrderByRelationAggregateInput;
    _relevance?: Prisma.tiendasOrderByRelevanceInput;
};
export type tiendasWhereUniqueInput = Prisma.AtLeast<{
    id_tienda?: number;
    nit?: string;
    AND?: Prisma.tiendasWhereInput | Prisma.tiendasWhereInput[];
    OR?: Prisma.tiendasWhereInput[];
    NOT?: Prisma.tiendasWhereInput | Prisma.tiendasWhereInput[];
    nombre_tienda?: Prisma.StringFilter<"tiendas"> | string;
    direccion_tienda?: Prisma.StringNullableFilter<"tiendas"> | string | null;
    telefono_tienda?: Prisma.StringNullableFilter<"tiendas"> | string | null;
    correo?: Prisma.StringFilter<"tiendas"> | string;
    categorias?: Prisma.CategoriasListRelationFilter;
    clientes?: Prisma.ClientesListRelationFilter;
    factura?: Prisma.FacturaListRelationFilter;
    productos?: Prisma.ProductosListRelationFilter;
    usuarios?: Prisma.UsuariosListRelationFilter;
}, "id_tienda" | "nit">;
export type tiendasOrderByWithAggregationInput = {
    id_tienda?: Prisma.SortOrder;
    nombre_tienda?: Prisma.SortOrder;
    direccion_tienda?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono_tienda?: Prisma.SortOrderInput | Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    nit?: Prisma.SortOrder;
    _count?: Prisma.tiendasCountOrderByAggregateInput;
    _avg?: Prisma.tiendasAvgOrderByAggregateInput;
    _max?: Prisma.tiendasMaxOrderByAggregateInput;
    _min?: Prisma.tiendasMinOrderByAggregateInput;
    _sum?: Prisma.tiendasSumOrderByAggregateInput;
};
export type tiendasScalarWhereWithAggregatesInput = {
    AND?: Prisma.tiendasScalarWhereWithAggregatesInput | Prisma.tiendasScalarWhereWithAggregatesInput[];
    OR?: Prisma.tiendasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tiendasScalarWhereWithAggregatesInput | Prisma.tiendasScalarWhereWithAggregatesInput[];
    id_tienda?: Prisma.IntWithAggregatesFilter<"tiendas"> | number;
    nombre_tienda?: Prisma.StringWithAggregatesFilter<"tiendas"> | string;
    direccion_tienda?: Prisma.StringNullableWithAggregatesFilter<"tiendas"> | string | null;
    telefono_tienda?: Prisma.StringNullableWithAggregatesFilter<"tiendas"> | string | null;
    correo?: Prisma.StringWithAggregatesFilter<"tiendas"> | string;
    nit?: Prisma.StringWithAggregatesFilter<"tiendas"> | string;
};
export type tiendasCreateInput = {
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
    categorias?: Prisma.categoriasCreateNestedManyWithoutTiendasInput;
    clientes?: Prisma.clientesCreateNestedManyWithoutTiendasInput;
    factura?: Prisma.facturaCreateNestedManyWithoutTiendasInput;
    productos?: Prisma.productosCreateNestedManyWithoutTiendasInput;
    usuarios?: Prisma.usuariosCreateNestedManyWithoutTiendasInput;
};
export type tiendasUncheckedCreateInput = {
    id_tienda?: number;
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
    categorias?: Prisma.categoriasUncheckedCreateNestedManyWithoutTiendasInput;
    clientes?: Prisma.clientesUncheckedCreateNestedManyWithoutTiendasInput;
    factura?: Prisma.facturaUncheckedCreateNestedManyWithoutTiendasInput;
    productos?: Prisma.productosUncheckedCreateNestedManyWithoutTiendasInput;
    usuarios?: Prisma.usuariosUncheckedCreateNestedManyWithoutTiendasInput;
};
export type tiendasUpdateInput = {
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    categorias?: Prisma.categoriasUpdateManyWithoutTiendasNestedInput;
    clientes?: Prisma.clientesUpdateManyWithoutTiendasNestedInput;
    factura?: Prisma.facturaUpdateManyWithoutTiendasNestedInput;
    productos?: Prisma.productosUpdateManyWithoutTiendasNestedInput;
    usuarios?: Prisma.usuariosUpdateManyWithoutTiendasNestedInput;
};
export type tiendasUncheckedUpdateInput = {
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    categorias?: Prisma.categoriasUncheckedUpdateManyWithoutTiendasNestedInput;
    clientes?: Prisma.clientesUncheckedUpdateManyWithoutTiendasNestedInput;
    factura?: Prisma.facturaUncheckedUpdateManyWithoutTiendasNestedInput;
    productos?: Prisma.productosUncheckedUpdateManyWithoutTiendasNestedInput;
    usuarios?: Prisma.usuariosUncheckedUpdateManyWithoutTiendasNestedInput;
};
export type tiendasCreateManyInput = {
    id_tienda?: number;
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
};
export type tiendasUpdateManyMutationInput = {
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tiendasUncheckedUpdateManyInput = {
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TiendasScalarRelationFilter = {
    is?: Prisma.tiendasWhereInput;
    isNot?: Prisma.tiendasWhereInput;
};
export type tiendasOrderByRelevanceInput = {
    fields: Prisma.tiendasOrderByRelevanceFieldEnum | Prisma.tiendasOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type tiendasCountOrderByAggregateInput = {
    id_tienda?: Prisma.SortOrder;
    nombre_tienda?: Prisma.SortOrder;
    direccion_tienda?: Prisma.SortOrder;
    telefono_tienda?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    nit?: Prisma.SortOrder;
};
export type tiendasAvgOrderByAggregateInput = {
    id_tienda?: Prisma.SortOrder;
};
export type tiendasMaxOrderByAggregateInput = {
    id_tienda?: Prisma.SortOrder;
    nombre_tienda?: Prisma.SortOrder;
    direccion_tienda?: Prisma.SortOrder;
    telefono_tienda?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    nit?: Prisma.SortOrder;
};
export type tiendasMinOrderByAggregateInput = {
    id_tienda?: Prisma.SortOrder;
    nombre_tienda?: Prisma.SortOrder;
    direccion_tienda?: Prisma.SortOrder;
    telefono_tienda?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    nit?: Prisma.SortOrder;
};
export type tiendasSumOrderByAggregateInput = {
    id_tienda?: Prisma.SortOrder;
};
export type tiendasCreateNestedOneWithoutCategoriasInput = {
    create?: Prisma.XOR<Prisma.tiendasCreateWithoutCategoriasInput, Prisma.tiendasUncheckedCreateWithoutCategoriasInput>;
    connectOrCreate?: Prisma.tiendasCreateOrConnectWithoutCategoriasInput;
    connect?: Prisma.tiendasWhereUniqueInput;
};
export type tiendasUpdateOneRequiredWithoutCategoriasNestedInput = {
    create?: Prisma.XOR<Prisma.tiendasCreateWithoutCategoriasInput, Prisma.tiendasUncheckedCreateWithoutCategoriasInput>;
    connectOrCreate?: Prisma.tiendasCreateOrConnectWithoutCategoriasInput;
    upsert?: Prisma.tiendasUpsertWithoutCategoriasInput;
    connect?: Prisma.tiendasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tiendasUpdateToOneWithWhereWithoutCategoriasInput, Prisma.tiendasUpdateWithoutCategoriasInput>, Prisma.tiendasUncheckedUpdateWithoutCategoriasInput>;
};
export type tiendasCreateNestedOneWithoutClientesInput = {
    create?: Prisma.XOR<Prisma.tiendasCreateWithoutClientesInput, Prisma.tiendasUncheckedCreateWithoutClientesInput>;
    connectOrCreate?: Prisma.tiendasCreateOrConnectWithoutClientesInput;
    connect?: Prisma.tiendasWhereUniqueInput;
};
export type tiendasUpdateOneRequiredWithoutClientesNestedInput = {
    create?: Prisma.XOR<Prisma.tiendasCreateWithoutClientesInput, Prisma.tiendasUncheckedCreateWithoutClientesInput>;
    connectOrCreate?: Prisma.tiendasCreateOrConnectWithoutClientesInput;
    upsert?: Prisma.tiendasUpsertWithoutClientesInput;
    connect?: Prisma.tiendasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tiendasUpdateToOneWithWhereWithoutClientesInput, Prisma.tiendasUpdateWithoutClientesInput>, Prisma.tiendasUncheckedUpdateWithoutClientesInput>;
};
export type tiendasCreateNestedOneWithoutFacturaInput = {
    create?: Prisma.XOR<Prisma.tiendasCreateWithoutFacturaInput, Prisma.tiendasUncheckedCreateWithoutFacturaInput>;
    connectOrCreate?: Prisma.tiendasCreateOrConnectWithoutFacturaInput;
    connect?: Prisma.tiendasWhereUniqueInput;
};
export type tiendasUpdateOneRequiredWithoutFacturaNestedInput = {
    create?: Prisma.XOR<Prisma.tiendasCreateWithoutFacturaInput, Prisma.tiendasUncheckedCreateWithoutFacturaInput>;
    connectOrCreate?: Prisma.tiendasCreateOrConnectWithoutFacturaInput;
    upsert?: Prisma.tiendasUpsertWithoutFacturaInput;
    connect?: Prisma.tiendasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tiendasUpdateToOneWithWhereWithoutFacturaInput, Prisma.tiendasUpdateWithoutFacturaInput>, Prisma.tiendasUncheckedUpdateWithoutFacturaInput>;
};
export type tiendasCreateNestedOneWithoutProductosInput = {
    create?: Prisma.XOR<Prisma.tiendasCreateWithoutProductosInput, Prisma.tiendasUncheckedCreateWithoutProductosInput>;
    connectOrCreate?: Prisma.tiendasCreateOrConnectWithoutProductosInput;
    connect?: Prisma.tiendasWhereUniqueInput;
};
export type tiendasUpdateOneRequiredWithoutProductosNestedInput = {
    create?: Prisma.XOR<Prisma.tiendasCreateWithoutProductosInput, Prisma.tiendasUncheckedCreateWithoutProductosInput>;
    connectOrCreate?: Prisma.tiendasCreateOrConnectWithoutProductosInput;
    upsert?: Prisma.tiendasUpsertWithoutProductosInput;
    connect?: Prisma.tiendasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tiendasUpdateToOneWithWhereWithoutProductosInput, Prisma.tiendasUpdateWithoutProductosInput>, Prisma.tiendasUncheckedUpdateWithoutProductosInput>;
};
export type tiendasCreateNestedOneWithoutUsuariosInput = {
    create?: Prisma.XOR<Prisma.tiendasCreateWithoutUsuariosInput, Prisma.tiendasUncheckedCreateWithoutUsuariosInput>;
    connectOrCreate?: Prisma.tiendasCreateOrConnectWithoutUsuariosInput;
    connect?: Prisma.tiendasWhereUniqueInput;
};
export type tiendasUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.tiendasCreateWithoutUsuariosInput, Prisma.tiendasUncheckedCreateWithoutUsuariosInput>;
    connectOrCreate?: Prisma.tiendasCreateOrConnectWithoutUsuariosInput;
    upsert?: Prisma.tiendasUpsertWithoutUsuariosInput;
    connect?: Prisma.tiendasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tiendasUpdateToOneWithWhereWithoutUsuariosInput, Prisma.tiendasUpdateWithoutUsuariosInput>, Prisma.tiendasUncheckedUpdateWithoutUsuariosInput>;
};
export type tiendasCreateWithoutCategoriasInput = {
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
    clientes?: Prisma.clientesCreateNestedManyWithoutTiendasInput;
    factura?: Prisma.facturaCreateNestedManyWithoutTiendasInput;
    productos?: Prisma.productosCreateNestedManyWithoutTiendasInput;
    usuarios?: Prisma.usuariosCreateNestedManyWithoutTiendasInput;
};
export type tiendasUncheckedCreateWithoutCategoriasInput = {
    id_tienda?: number;
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
    clientes?: Prisma.clientesUncheckedCreateNestedManyWithoutTiendasInput;
    factura?: Prisma.facturaUncheckedCreateNestedManyWithoutTiendasInput;
    productos?: Prisma.productosUncheckedCreateNestedManyWithoutTiendasInput;
    usuarios?: Prisma.usuariosUncheckedCreateNestedManyWithoutTiendasInput;
};
export type tiendasCreateOrConnectWithoutCategoriasInput = {
    where: Prisma.tiendasWhereUniqueInput;
    create: Prisma.XOR<Prisma.tiendasCreateWithoutCategoriasInput, Prisma.tiendasUncheckedCreateWithoutCategoriasInput>;
};
export type tiendasUpsertWithoutCategoriasInput = {
    update: Prisma.XOR<Prisma.tiendasUpdateWithoutCategoriasInput, Prisma.tiendasUncheckedUpdateWithoutCategoriasInput>;
    create: Prisma.XOR<Prisma.tiendasCreateWithoutCategoriasInput, Prisma.tiendasUncheckedCreateWithoutCategoriasInput>;
    where?: Prisma.tiendasWhereInput;
};
export type tiendasUpdateToOneWithWhereWithoutCategoriasInput = {
    where?: Prisma.tiendasWhereInput;
    data: Prisma.XOR<Prisma.tiendasUpdateWithoutCategoriasInput, Prisma.tiendasUncheckedUpdateWithoutCategoriasInput>;
};
export type tiendasUpdateWithoutCategoriasInput = {
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    clientes?: Prisma.clientesUpdateManyWithoutTiendasNestedInput;
    factura?: Prisma.facturaUpdateManyWithoutTiendasNestedInput;
    productos?: Prisma.productosUpdateManyWithoutTiendasNestedInput;
    usuarios?: Prisma.usuariosUpdateManyWithoutTiendasNestedInput;
};
export type tiendasUncheckedUpdateWithoutCategoriasInput = {
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    clientes?: Prisma.clientesUncheckedUpdateManyWithoutTiendasNestedInput;
    factura?: Prisma.facturaUncheckedUpdateManyWithoutTiendasNestedInput;
    productos?: Prisma.productosUncheckedUpdateManyWithoutTiendasNestedInput;
    usuarios?: Prisma.usuariosUncheckedUpdateManyWithoutTiendasNestedInput;
};
export type tiendasCreateWithoutClientesInput = {
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
    categorias?: Prisma.categoriasCreateNestedManyWithoutTiendasInput;
    factura?: Prisma.facturaCreateNestedManyWithoutTiendasInput;
    productos?: Prisma.productosCreateNestedManyWithoutTiendasInput;
    usuarios?: Prisma.usuariosCreateNestedManyWithoutTiendasInput;
};
export type tiendasUncheckedCreateWithoutClientesInput = {
    id_tienda?: number;
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
    categorias?: Prisma.categoriasUncheckedCreateNestedManyWithoutTiendasInput;
    factura?: Prisma.facturaUncheckedCreateNestedManyWithoutTiendasInput;
    productos?: Prisma.productosUncheckedCreateNestedManyWithoutTiendasInput;
    usuarios?: Prisma.usuariosUncheckedCreateNestedManyWithoutTiendasInput;
};
export type tiendasCreateOrConnectWithoutClientesInput = {
    where: Prisma.tiendasWhereUniqueInput;
    create: Prisma.XOR<Prisma.tiendasCreateWithoutClientesInput, Prisma.tiendasUncheckedCreateWithoutClientesInput>;
};
export type tiendasUpsertWithoutClientesInput = {
    update: Prisma.XOR<Prisma.tiendasUpdateWithoutClientesInput, Prisma.tiendasUncheckedUpdateWithoutClientesInput>;
    create: Prisma.XOR<Prisma.tiendasCreateWithoutClientesInput, Prisma.tiendasUncheckedCreateWithoutClientesInput>;
    where?: Prisma.tiendasWhereInput;
};
export type tiendasUpdateToOneWithWhereWithoutClientesInput = {
    where?: Prisma.tiendasWhereInput;
    data: Prisma.XOR<Prisma.tiendasUpdateWithoutClientesInput, Prisma.tiendasUncheckedUpdateWithoutClientesInput>;
};
export type tiendasUpdateWithoutClientesInput = {
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    categorias?: Prisma.categoriasUpdateManyWithoutTiendasNestedInput;
    factura?: Prisma.facturaUpdateManyWithoutTiendasNestedInput;
    productos?: Prisma.productosUpdateManyWithoutTiendasNestedInput;
    usuarios?: Prisma.usuariosUpdateManyWithoutTiendasNestedInput;
};
export type tiendasUncheckedUpdateWithoutClientesInput = {
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    categorias?: Prisma.categoriasUncheckedUpdateManyWithoutTiendasNestedInput;
    factura?: Prisma.facturaUncheckedUpdateManyWithoutTiendasNestedInput;
    productos?: Prisma.productosUncheckedUpdateManyWithoutTiendasNestedInput;
    usuarios?: Prisma.usuariosUncheckedUpdateManyWithoutTiendasNestedInput;
};
export type tiendasCreateWithoutFacturaInput = {
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
    categorias?: Prisma.categoriasCreateNestedManyWithoutTiendasInput;
    clientes?: Prisma.clientesCreateNestedManyWithoutTiendasInput;
    productos?: Prisma.productosCreateNestedManyWithoutTiendasInput;
    usuarios?: Prisma.usuariosCreateNestedManyWithoutTiendasInput;
};
export type tiendasUncheckedCreateWithoutFacturaInput = {
    id_tienda?: number;
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
    categorias?: Prisma.categoriasUncheckedCreateNestedManyWithoutTiendasInput;
    clientes?: Prisma.clientesUncheckedCreateNestedManyWithoutTiendasInput;
    productos?: Prisma.productosUncheckedCreateNestedManyWithoutTiendasInput;
    usuarios?: Prisma.usuariosUncheckedCreateNestedManyWithoutTiendasInput;
};
export type tiendasCreateOrConnectWithoutFacturaInput = {
    where: Prisma.tiendasWhereUniqueInput;
    create: Prisma.XOR<Prisma.tiendasCreateWithoutFacturaInput, Prisma.tiendasUncheckedCreateWithoutFacturaInput>;
};
export type tiendasUpsertWithoutFacturaInput = {
    update: Prisma.XOR<Prisma.tiendasUpdateWithoutFacturaInput, Prisma.tiendasUncheckedUpdateWithoutFacturaInput>;
    create: Prisma.XOR<Prisma.tiendasCreateWithoutFacturaInput, Prisma.tiendasUncheckedCreateWithoutFacturaInput>;
    where?: Prisma.tiendasWhereInput;
};
export type tiendasUpdateToOneWithWhereWithoutFacturaInput = {
    where?: Prisma.tiendasWhereInput;
    data: Prisma.XOR<Prisma.tiendasUpdateWithoutFacturaInput, Prisma.tiendasUncheckedUpdateWithoutFacturaInput>;
};
export type tiendasUpdateWithoutFacturaInput = {
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    categorias?: Prisma.categoriasUpdateManyWithoutTiendasNestedInput;
    clientes?: Prisma.clientesUpdateManyWithoutTiendasNestedInput;
    productos?: Prisma.productosUpdateManyWithoutTiendasNestedInput;
    usuarios?: Prisma.usuariosUpdateManyWithoutTiendasNestedInput;
};
export type tiendasUncheckedUpdateWithoutFacturaInput = {
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    categorias?: Prisma.categoriasUncheckedUpdateManyWithoutTiendasNestedInput;
    clientes?: Prisma.clientesUncheckedUpdateManyWithoutTiendasNestedInput;
    productos?: Prisma.productosUncheckedUpdateManyWithoutTiendasNestedInput;
    usuarios?: Prisma.usuariosUncheckedUpdateManyWithoutTiendasNestedInput;
};
export type tiendasCreateWithoutProductosInput = {
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
    categorias?: Prisma.categoriasCreateNestedManyWithoutTiendasInput;
    clientes?: Prisma.clientesCreateNestedManyWithoutTiendasInput;
    factura?: Prisma.facturaCreateNestedManyWithoutTiendasInput;
    usuarios?: Prisma.usuariosCreateNestedManyWithoutTiendasInput;
};
export type tiendasUncheckedCreateWithoutProductosInput = {
    id_tienda?: number;
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
    categorias?: Prisma.categoriasUncheckedCreateNestedManyWithoutTiendasInput;
    clientes?: Prisma.clientesUncheckedCreateNestedManyWithoutTiendasInput;
    factura?: Prisma.facturaUncheckedCreateNestedManyWithoutTiendasInput;
    usuarios?: Prisma.usuariosUncheckedCreateNestedManyWithoutTiendasInput;
};
export type tiendasCreateOrConnectWithoutProductosInput = {
    where: Prisma.tiendasWhereUniqueInput;
    create: Prisma.XOR<Prisma.tiendasCreateWithoutProductosInput, Prisma.tiendasUncheckedCreateWithoutProductosInput>;
};
export type tiendasUpsertWithoutProductosInput = {
    update: Prisma.XOR<Prisma.tiendasUpdateWithoutProductosInput, Prisma.tiendasUncheckedUpdateWithoutProductosInput>;
    create: Prisma.XOR<Prisma.tiendasCreateWithoutProductosInput, Prisma.tiendasUncheckedCreateWithoutProductosInput>;
    where?: Prisma.tiendasWhereInput;
};
export type tiendasUpdateToOneWithWhereWithoutProductosInput = {
    where?: Prisma.tiendasWhereInput;
    data: Prisma.XOR<Prisma.tiendasUpdateWithoutProductosInput, Prisma.tiendasUncheckedUpdateWithoutProductosInput>;
};
export type tiendasUpdateWithoutProductosInput = {
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    categorias?: Prisma.categoriasUpdateManyWithoutTiendasNestedInput;
    clientes?: Prisma.clientesUpdateManyWithoutTiendasNestedInput;
    factura?: Prisma.facturaUpdateManyWithoutTiendasNestedInput;
    usuarios?: Prisma.usuariosUpdateManyWithoutTiendasNestedInput;
};
export type tiendasUncheckedUpdateWithoutProductosInput = {
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    categorias?: Prisma.categoriasUncheckedUpdateManyWithoutTiendasNestedInput;
    clientes?: Prisma.clientesUncheckedUpdateManyWithoutTiendasNestedInput;
    factura?: Prisma.facturaUncheckedUpdateManyWithoutTiendasNestedInput;
    usuarios?: Prisma.usuariosUncheckedUpdateManyWithoutTiendasNestedInput;
};
export type tiendasCreateWithoutUsuariosInput = {
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
    categorias?: Prisma.categoriasCreateNestedManyWithoutTiendasInput;
    clientes?: Prisma.clientesCreateNestedManyWithoutTiendasInput;
    factura?: Prisma.facturaCreateNestedManyWithoutTiendasInput;
    productos?: Prisma.productosCreateNestedManyWithoutTiendasInput;
};
export type tiendasUncheckedCreateWithoutUsuariosInput = {
    id_tienda?: number;
    nombre_tienda: string;
    direccion_tienda?: string | null;
    telefono_tienda?: string | null;
    correo: string;
    nit: string;
    categorias?: Prisma.categoriasUncheckedCreateNestedManyWithoutTiendasInput;
    clientes?: Prisma.clientesUncheckedCreateNestedManyWithoutTiendasInput;
    factura?: Prisma.facturaUncheckedCreateNestedManyWithoutTiendasInput;
    productos?: Prisma.productosUncheckedCreateNestedManyWithoutTiendasInput;
};
export type tiendasCreateOrConnectWithoutUsuariosInput = {
    where: Prisma.tiendasWhereUniqueInput;
    create: Prisma.XOR<Prisma.tiendasCreateWithoutUsuariosInput, Prisma.tiendasUncheckedCreateWithoutUsuariosInput>;
};
export type tiendasUpsertWithoutUsuariosInput = {
    update: Prisma.XOR<Prisma.tiendasUpdateWithoutUsuariosInput, Prisma.tiendasUncheckedUpdateWithoutUsuariosInput>;
    create: Prisma.XOR<Prisma.tiendasCreateWithoutUsuariosInput, Prisma.tiendasUncheckedCreateWithoutUsuariosInput>;
    where?: Prisma.tiendasWhereInput;
};
export type tiendasUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: Prisma.tiendasWhereInput;
    data: Prisma.XOR<Prisma.tiendasUpdateWithoutUsuariosInput, Prisma.tiendasUncheckedUpdateWithoutUsuariosInput>;
};
export type tiendasUpdateWithoutUsuariosInput = {
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    categorias?: Prisma.categoriasUpdateManyWithoutTiendasNestedInput;
    clientes?: Prisma.clientesUpdateManyWithoutTiendasNestedInput;
    factura?: Prisma.facturaUpdateManyWithoutTiendasNestedInput;
    productos?: Prisma.productosUpdateManyWithoutTiendasNestedInput;
};
export type tiendasUncheckedUpdateWithoutUsuariosInput = {
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_tienda?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono_tienda?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    categorias?: Prisma.categoriasUncheckedUpdateManyWithoutTiendasNestedInput;
    clientes?: Prisma.clientesUncheckedUpdateManyWithoutTiendasNestedInput;
    factura?: Prisma.facturaUncheckedUpdateManyWithoutTiendasNestedInput;
    productos?: Prisma.productosUncheckedUpdateManyWithoutTiendasNestedInput;
};
export type TiendasCountOutputType = {
    categorias: number;
    clientes: number;
    factura: number;
    productos: number;
    usuarios: number;
};
export type TiendasCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categorias?: boolean | TiendasCountOutputTypeCountCategoriasArgs;
    clientes?: boolean | TiendasCountOutputTypeCountClientesArgs;
    factura?: boolean | TiendasCountOutputTypeCountFacturaArgs;
    productos?: boolean | TiendasCountOutputTypeCountProductosArgs;
    usuarios?: boolean | TiendasCountOutputTypeCountUsuariosArgs;
};
export type TiendasCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TiendasCountOutputTypeSelect<ExtArgs> | null;
};
export type TiendasCountOutputTypeCountCategoriasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriasWhereInput;
};
export type TiendasCountOutputTypeCountClientesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.clientesWhereInput;
};
export type TiendasCountOutputTypeCountFacturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaWhereInput;
};
export type TiendasCountOutputTypeCountProductosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productosWhereInput;
};
export type TiendasCountOutputTypeCountUsuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuariosWhereInput;
};
export type tiendasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_tienda?: boolean;
    nombre_tienda?: boolean;
    direccion_tienda?: boolean;
    telefono_tienda?: boolean;
    correo?: boolean;
    nit?: boolean;
    categorias?: boolean | Prisma.tiendas$categoriasArgs<ExtArgs>;
    clientes?: boolean | Prisma.tiendas$clientesArgs<ExtArgs>;
    factura?: boolean | Prisma.tiendas$facturaArgs<ExtArgs>;
    productos?: boolean | Prisma.tiendas$productosArgs<ExtArgs>;
    usuarios?: boolean | Prisma.tiendas$usuariosArgs<ExtArgs>;
    _count?: boolean | Prisma.TiendasCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tiendas"]>;
export type tiendasSelectScalar = {
    id_tienda?: boolean;
    nombre_tienda?: boolean;
    direccion_tienda?: boolean;
    telefono_tienda?: boolean;
    correo?: boolean;
    nit?: boolean;
};
export type tiendasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_tienda" | "nombre_tienda" | "direccion_tienda" | "telefono_tienda" | "correo" | "nit", ExtArgs["result"]["tiendas"]>;
export type tiendasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categorias?: boolean | Prisma.tiendas$categoriasArgs<ExtArgs>;
    clientes?: boolean | Prisma.tiendas$clientesArgs<ExtArgs>;
    factura?: boolean | Prisma.tiendas$facturaArgs<ExtArgs>;
    productos?: boolean | Prisma.tiendas$productosArgs<ExtArgs>;
    usuarios?: boolean | Prisma.tiendas$usuariosArgs<ExtArgs>;
    _count?: boolean | Prisma.TiendasCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $tiendasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tiendas";
    objects: {
        categorias: Prisma.$categoriasPayload<ExtArgs>[];
        clientes: Prisma.$clientesPayload<ExtArgs>[];
        factura: Prisma.$facturaPayload<ExtArgs>[];
        productos: Prisma.$productosPayload<ExtArgs>[];
        usuarios: Prisma.$usuariosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_tienda: number;
        nombre_tienda: string;
        direccion_tienda: string | null;
        telefono_tienda: string | null;
        correo: string;
        nit: string;
    }, ExtArgs["result"]["tiendas"]>;
    composites: {};
};
export type tiendasGetPayload<S extends boolean | null | undefined | tiendasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tiendasPayload, S>;
export type tiendasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tiendasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TiendasCountAggregateInputType | true;
};
export interface tiendasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tiendas'];
        meta: {
            name: 'tiendas';
        };
    };
    findUnique<T extends tiendasFindUniqueArgs>(args: Prisma.SelectSubset<T, tiendasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends tiendasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tiendasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends tiendasFindFirstArgs>(args?: Prisma.SelectSubset<T, tiendasFindFirstArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends tiendasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tiendasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends tiendasFindManyArgs>(args?: Prisma.SelectSubset<T, tiendasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends tiendasCreateArgs>(args: Prisma.SelectSubset<T, tiendasCreateArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends tiendasCreateManyArgs>(args?: Prisma.SelectSubset<T, tiendasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends tiendasDeleteArgs>(args: Prisma.SelectSubset<T, tiendasDeleteArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends tiendasUpdateArgs>(args: Prisma.SelectSubset<T, tiendasUpdateArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends tiendasDeleteManyArgs>(args?: Prisma.SelectSubset<T, tiendasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends tiendasUpdateManyArgs>(args: Prisma.SelectSubset<T, tiendasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends tiendasUpsertArgs>(args: Prisma.SelectSubset<T, tiendasUpsertArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends tiendasCountArgs>(args?: Prisma.Subset<T, tiendasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TiendasCountAggregateOutputType> : number>;
    aggregate<T extends TiendasAggregateArgs>(args: Prisma.Subset<T, TiendasAggregateArgs>): Prisma.PrismaPromise<GetTiendasAggregateType<T>>;
    groupBy<T extends tiendasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tiendasGroupByArgs['orderBy'];
    } : {
        orderBy?: tiendasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tiendasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiendasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: tiendasFieldRefs;
}
export interface Prisma__tiendasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categorias<T extends Prisma.tiendas$categoriasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tiendas$categoriasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    clientes<T extends Prisma.tiendas$clientesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tiendas$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    factura<T extends Prisma.tiendas$facturaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tiendas$facturaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    productos<T extends Prisma.tiendas$productosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tiendas$productosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    usuarios<T extends Prisma.tiendas$usuariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tiendas$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface tiendasFieldRefs {
    readonly id_tienda: Prisma.FieldRef<"tiendas", 'Int'>;
    readonly nombre_tienda: Prisma.FieldRef<"tiendas", 'String'>;
    readonly direccion_tienda: Prisma.FieldRef<"tiendas", 'String'>;
    readonly telefono_tienda: Prisma.FieldRef<"tiendas", 'String'>;
    readonly correo: Prisma.FieldRef<"tiendas", 'String'>;
    readonly nit: Prisma.FieldRef<"tiendas", 'String'>;
}
export type tiendasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tiendasSelect<ExtArgs> | null;
    omit?: Prisma.tiendasOmit<ExtArgs> | null;
    include?: Prisma.tiendasInclude<ExtArgs> | null;
    where: Prisma.tiendasWhereUniqueInput;
};
export type tiendasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tiendasSelect<ExtArgs> | null;
    omit?: Prisma.tiendasOmit<ExtArgs> | null;
    include?: Prisma.tiendasInclude<ExtArgs> | null;
    where: Prisma.tiendasWhereUniqueInput;
};
export type tiendasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tiendasSelect<ExtArgs> | null;
    omit?: Prisma.tiendasOmit<ExtArgs> | null;
    include?: Prisma.tiendasInclude<ExtArgs> | null;
    where?: Prisma.tiendasWhereInput;
    orderBy?: Prisma.tiendasOrderByWithRelationInput | Prisma.tiendasOrderByWithRelationInput[];
    cursor?: Prisma.tiendasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TiendasScalarFieldEnum | Prisma.TiendasScalarFieldEnum[];
};
export type tiendasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tiendasSelect<ExtArgs> | null;
    omit?: Prisma.tiendasOmit<ExtArgs> | null;
    include?: Prisma.tiendasInclude<ExtArgs> | null;
    where?: Prisma.tiendasWhereInput;
    orderBy?: Prisma.tiendasOrderByWithRelationInput | Prisma.tiendasOrderByWithRelationInput[];
    cursor?: Prisma.tiendasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TiendasScalarFieldEnum | Prisma.TiendasScalarFieldEnum[];
};
export type tiendasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tiendasSelect<ExtArgs> | null;
    omit?: Prisma.tiendasOmit<ExtArgs> | null;
    include?: Prisma.tiendasInclude<ExtArgs> | null;
    where?: Prisma.tiendasWhereInput;
    orderBy?: Prisma.tiendasOrderByWithRelationInput | Prisma.tiendasOrderByWithRelationInput[];
    cursor?: Prisma.tiendasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TiendasScalarFieldEnum | Prisma.TiendasScalarFieldEnum[];
};
export type tiendasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tiendasSelect<ExtArgs> | null;
    omit?: Prisma.tiendasOmit<ExtArgs> | null;
    include?: Prisma.tiendasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tiendasCreateInput, Prisma.tiendasUncheckedCreateInput>;
};
export type tiendasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.tiendasCreateManyInput | Prisma.tiendasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type tiendasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tiendasSelect<ExtArgs> | null;
    omit?: Prisma.tiendasOmit<ExtArgs> | null;
    include?: Prisma.tiendasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tiendasUpdateInput, Prisma.tiendasUncheckedUpdateInput>;
    where: Prisma.tiendasWhereUniqueInput;
};
export type tiendasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.tiendasUpdateManyMutationInput, Prisma.tiendasUncheckedUpdateManyInput>;
    where?: Prisma.tiendasWhereInput;
    limit?: number;
};
export type tiendasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tiendasSelect<ExtArgs> | null;
    omit?: Prisma.tiendasOmit<ExtArgs> | null;
    include?: Prisma.tiendasInclude<ExtArgs> | null;
    where: Prisma.tiendasWhereUniqueInput;
    create: Prisma.XOR<Prisma.tiendasCreateInput, Prisma.tiendasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.tiendasUpdateInput, Prisma.tiendasUncheckedUpdateInput>;
};
export type tiendasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tiendasSelect<ExtArgs> | null;
    omit?: Prisma.tiendasOmit<ExtArgs> | null;
    include?: Prisma.tiendasInclude<ExtArgs> | null;
    where: Prisma.tiendasWhereUniqueInput;
};
export type tiendasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tiendasWhereInput;
    limit?: number;
};
export type tiendas$categoriasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriasSelect<ExtArgs> | null;
    omit?: Prisma.categoriasOmit<ExtArgs> | null;
    include?: Prisma.categoriasInclude<ExtArgs> | null;
    where?: Prisma.categoriasWhereInput;
    orderBy?: Prisma.categoriasOrderByWithRelationInput | Prisma.categoriasOrderByWithRelationInput[];
    cursor?: Prisma.categoriasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriasScalarFieldEnum | Prisma.CategoriasScalarFieldEnum[];
};
export type tiendas$clientesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type tiendas$facturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type tiendas$productosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type tiendas$usuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where?: Prisma.usuariosWhereInput;
    orderBy?: Prisma.usuariosOrderByWithRelationInput | Prisma.usuariosOrderByWithRelationInput[];
    cursor?: Prisma.usuariosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuariosScalarFieldEnum | Prisma.UsuariosScalarFieldEnum[];
};
export type tiendasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tiendasSelect<ExtArgs> | null;
    omit?: Prisma.tiendasOmit<ExtArgs> | null;
    include?: Prisma.tiendasInclude<ExtArgs> | null;
};
