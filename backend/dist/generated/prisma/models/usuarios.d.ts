import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type usuariosModel = runtime.Types.Result.DefaultSelection<Prisma.$usuariosPayload>;
export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null;
    _avg: UsuariosAvgAggregateOutputType | null;
    _sum: UsuariosSumAggregateOutputType | null;
    _min: UsuariosMinAggregateOutputType | null;
    _max: UsuariosMaxAggregateOutputType | null;
};
export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null;
    id_rol: number | null;
    id_tienda: number | null;
};
export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null;
    id_rol: number | null;
    id_tienda: number | null;
};
export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null;
    nombre: string | null;
    documento: string | null;
    fecha_registro: Date | null;
    contrasena: string | null;
    estado: boolean | null;
    id_rol: number | null;
    id_tienda: number | null;
};
export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null;
    nombre: string | null;
    documento: string | null;
    fecha_registro: Date | null;
    contrasena: string | null;
    estado: boolean | null;
    id_rol: number | null;
    id_tienda: number | null;
};
export type UsuariosCountAggregateOutputType = {
    id_usuario: number;
    nombre: number;
    documento: number;
    fecha_registro: number;
    contrasena: number;
    estado: number;
    id_rol: number;
    id_tienda: number;
    _all: number;
};
export type UsuariosAvgAggregateInputType = {
    id_usuario?: true;
    id_rol?: true;
    id_tienda?: true;
};
export type UsuariosSumAggregateInputType = {
    id_usuario?: true;
    id_rol?: true;
    id_tienda?: true;
};
export type UsuariosMinAggregateInputType = {
    id_usuario?: true;
    nombre?: true;
    documento?: true;
    fecha_registro?: true;
    contrasena?: true;
    estado?: true;
    id_rol?: true;
    id_tienda?: true;
};
export type UsuariosMaxAggregateInputType = {
    id_usuario?: true;
    nombre?: true;
    documento?: true;
    fecha_registro?: true;
    contrasena?: true;
    estado?: true;
    id_rol?: true;
    id_tienda?: true;
};
export type UsuariosCountAggregateInputType = {
    id_usuario?: true;
    nombre?: true;
    documento?: true;
    fecha_registro?: true;
    contrasena?: true;
    estado?: true;
    id_rol?: true;
    id_tienda?: true;
    _all?: true;
};
export type UsuariosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuariosWhereInput;
    orderBy?: Prisma.usuariosOrderByWithRelationInput | Prisma.usuariosOrderByWithRelationInput[];
    cursor?: Prisma.usuariosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuariosCountAggregateInputType;
    _avg?: UsuariosAvgAggregateInputType;
    _sum?: UsuariosSumAggregateInputType;
    _min?: UsuariosMinAggregateInputType;
    _max?: UsuariosMaxAggregateInputType;
};
export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuarios[P]> : Prisma.GetScalarType<T[P], AggregateUsuarios[P]>;
};
export type usuariosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuariosWhereInput;
    orderBy?: Prisma.usuariosOrderByWithAggregationInput | Prisma.usuariosOrderByWithAggregationInput[];
    by: Prisma.UsuariosScalarFieldEnum[] | Prisma.UsuariosScalarFieldEnum;
    having?: Prisma.usuariosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuariosCountAggregateInputType | true;
    _avg?: UsuariosAvgAggregateInputType;
    _sum?: UsuariosSumAggregateInputType;
    _min?: UsuariosMinAggregateInputType;
    _max?: UsuariosMaxAggregateInputType;
};
export type UsuariosGroupByOutputType = {
    id_usuario: number;
    nombre: string;
    documento: string;
    fecha_registro: Date;
    contrasena: string;
    estado: boolean;
    id_rol: number;
    id_tienda: number;
    _count: UsuariosCountAggregateOutputType | null;
    _avg: UsuariosAvgAggregateOutputType | null;
    _sum: UsuariosSumAggregateOutputType | null;
    _min: UsuariosMinAggregateOutputType | null;
    _max: UsuariosMaxAggregateOutputType | null;
};
export type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuariosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuariosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuariosGroupByOutputType[P]>;
}>>;
export type usuariosWhereInput = {
    AND?: Prisma.usuariosWhereInput | Prisma.usuariosWhereInput[];
    OR?: Prisma.usuariosWhereInput[];
    NOT?: Prisma.usuariosWhereInput | Prisma.usuariosWhereInput[];
    id_usuario?: Prisma.IntFilter<"usuarios"> | number;
    nombre?: Prisma.StringFilter<"usuarios"> | string;
    documento?: Prisma.StringFilter<"usuarios"> | string;
    fecha_registro?: Prisma.DateTimeFilter<"usuarios"> | Date | string;
    contrasena?: Prisma.StringFilter<"usuarios"> | string;
    estado?: Prisma.BoolFilter<"usuarios"> | boolean;
    id_rol?: Prisma.IntFilter<"usuarios"> | number;
    id_tienda?: Prisma.IntFilter<"usuarios"> | number;
    factura?: Prisma.FacturaListRelationFilter;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.rolesWhereInput>;
    tiendas?: Prisma.XOR<Prisma.TiendasScalarRelationFilter, Prisma.tiendasWhereInput>;
};
export type usuariosOrderByWithRelationInput = {
    id_usuario?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    documento?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    factura?: Prisma.facturaOrderByRelationAggregateInput;
    roles?: Prisma.rolesOrderByWithRelationInput;
    tiendas?: Prisma.tiendasOrderByWithRelationInput;
    _relevance?: Prisma.usuariosOrderByRelevanceInput;
};
export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number;
    documento?: string;
    AND?: Prisma.usuariosWhereInput | Prisma.usuariosWhereInput[];
    OR?: Prisma.usuariosWhereInput[];
    NOT?: Prisma.usuariosWhereInput | Prisma.usuariosWhereInput[];
    nombre?: Prisma.StringFilter<"usuarios"> | string;
    fecha_registro?: Prisma.DateTimeFilter<"usuarios"> | Date | string;
    contrasena?: Prisma.StringFilter<"usuarios"> | string;
    estado?: Prisma.BoolFilter<"usuarios"> | boolean;
    id_rol?: Prisma.IntFilter<"usuarios"> | number;
    id_tienda?: Prisma.IntFilter<"usuarios"> | number;
    factura?: Prisma.FacturaListRelationFilter;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.rolesWhereInput>;
    tiendas?: Prisma.XOR<Prisma.TiendasScalarRelationFilter, Prisma.tiendasWhereInput>;
}, "id_usuario" | "documento">;
export type usuariosOrderByWithAggregationInput = {
    id_usuario?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    documento?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    _count?: Prisma.usuariosCountOrderByAggregateInput;
    _avg?: Prisma.usuariosAvgOrderByAggregateInput;
    _max?: Prisma.usuariosMaxOrderByAggregateInput;
    _min?: Prisma.usuariosMinOrderByAggregateInput;
    _sum?: Prisma.usuariosSumOrderByAggregateInput;
};
export type usuariosScalarWhereWithAggregatesInput = {
    AND?: Prisma.usuariosScalarWhereWithAggregatesInput | Prisma.usuariosScalarWhereWithAggregatesInput[];
    OR?: Prisma.usuariosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usuariosScalarWhereWithAggregatesInput | Prisma.usuariosScalarWhereWithAggregatesInput[];
    id_usuario?: Prisma.IntWithAggregatesFilter<"usuarios"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"usuarios"> | string;
    documento?: Prisma.StringWithAggregatesFilter<"usuarios"> | string;
    fecha_registro?: Prisma.DateTimeWithAggregatesFilter<"usuarios"> | Date | string;
    contrasena?: Prisma.StringWithAggregatesFilter<"usuarios"> | string;
    estado?: Prisma.BoolWithAggregatesFilter<"usuarios"> | boolean;
    id_rol?: Prisma.IntWithAggregatesFilter<"usuarios"> | number;
    id_tienda?: Prisma.IntWithAggregatesFilter<"usuarios"> | number;
};
export type usuariosCreateInput = {
    nombre: string;
    documento: string;
    fecha_registro: Date | string;
    contrasena: string;
    estado?: boolean;
    factura?: Prisma.facturaCreateNestedManyWithoutUsuariosInput;
    roles: Prisma.rolesCreateNestedOneWithoutUsuariosInput;
    tiendas: Prisma.tiendasCreateNestedOneWithoutUsuariosInput;
};
export type usuariosUncheckedCreateInput = {
    id_usuario?: number;
    nombre: string;
    documento: string;
    fecha_registro: Date | string;
    contrasena: string;
    estado?: boolean;
    id_rol: number;
    id_tienda: number;
    factura?: Prisma.facturaUncheckedCreateNestedManyWithoutUsuariosInput;
};
export type usuariosUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    factura?: Prisma.facturaUpdateManyWithoutUsuariosNestedInput;
    roles?: Prisma.rolesUpdateOneRequiredWithoutUsuariosNestedInput;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutUsuariosNestedInput;
};
export type usuariosUncheckedUpdateInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    factura?: Prisma.facturaUncheckedUpdateManyWithoutUsuariosNestedInput;
};
export type usuariosCreateManyInput = {
    id_usuario?: number;
    nombre: string;
    documento: string;
    fecha_registro: Date | string;
    contrasena: string;
    estado?: boolean;
    id_rol: number;
    id_tienda: number;
};
export type usuariosUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UsuariosScalarRelationFilter = {
    is?: Prisma.usuariosWhereInput;
    isNot?: Prisma.usuariosWhereInput;
};
export type UsuariosListRelationFilter = {
    every?: Prisma.usuariosWhereInput;
    some?: Prisma.usuariosWhereInput;
    none?: Prisma.usuariosWhereInput;
};
export type usuariosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type usuariosOrderByRelevanceInput = {
    fields: Prisma.usuariosOrderByRelevanceFieldEnum | Prisma.usuariosOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type usuariosCountOrderByAggregateInput = {
    id_usuario?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    documento?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    documento?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type usuariosMinOrderByAggregateInput = {
    id_usuario?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    documento?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type usuariosSumOrderByAggregateInput = {
    id_usuario?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type usuariosCreateNestedOneWithoutFacturaInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutFacturaInput, Prisma.usuariosUncheckedCreateWithoutFacturaInput>;
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutFacturaInput;
    connect?: Prisma.usuariosWhereUniqueInput;
};
export type usuariosUpdateOneRequiredWithoutFacturaNestedInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutFacturaInput, Prisma.usuariosUncheckedCreateWithoutFacturaInput>;
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutFacturaInput;
    upsert?: Prisma.usuariosUpsertWithoutFacturaInput;
    connect?: Prisma.usuariosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usuariosUpdateToOneWithWhereWithoutFacturaInput, Prisma.usuariosUpdateWithoutFacturaInput>, Prisma.usuariosUncheckedUpdateWithoutFacturaInput>;
};
export type usuariosCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutRolesInput, Prisma.usuariosUncheckedCreateWithoutRolesInput> | Prisma.usuariosCreateWithoutRolesInput[] | Prisma.usuariosUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutRolesInput | Prisma.usuariosCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.usuariosCreateManyRolesInputEnvelope;
    connect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
};
export type usuariosUncheckedCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutRolesInput, Prisma.usuariosUncheckedCreateWithoutRolesInput> | Prisma.usuariosCreateWithoutRolesInput[] | Prisma.usuariosUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutRolesInput | Prisma.usuariosCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.usuariosCreateManyRolesInputEnvelope;
    connect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
};
export type usuariosUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutRolesInput, Prisma.usuariosUncheckedCreateWithoutRolesInput> | Prisma.usuariosCreateWithoutRolesInput[] | Prisma.usuariosUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutRolesInput | Prisma.usuariosCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.usuariosUpsertWithWhereUniqueWithoutRolesInput | Prisma.usuariosUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.usuariosCreateManyRolesInputEnvelope;
    set?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    disconnect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    delete?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    connect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    update?: Prisma.usuariosUpdateWithWhereUniqueWithoutRolesInput | Prisma.usuariosUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.usuariosUpdateManyWithWhereWithoutRolesInput | Prisma.usuariosUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.usuariosScalarWhereInput | Prisma.usuariosScalarWhereInput[];
};
export type usuariosUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutRolesInput, Prisma.usuariosUncheckedCreateWithoutRolesInput> | Prisma.usuariosCreateWithoutRolesInput[] | Prisma.usuariosUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutRolesInput | Prisma.usuariosCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.usuariosUpsertWithWhereUniqueWithoutRolesInput | Prisma.usuariosUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.usuariosCreateManyRolesInputEnvelope;
    set?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    disconnect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    delete?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    connect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    update?: Prisma.usuariosUpdateWithWhereUniqueWithoutRolesInput | Prisma.usuariosUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.usuariosUpdateManyWithWhereWithoutRolesInput | Prisma.usuariosUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.usuariosScalarWhereInput | Prisma.usuariosScalarWhereInput[];
};
export type usuariosCreateNestedManyWithoutTiendasInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutTiendasInput, Prisma.usuariosUncheckedCreateWithoutTiendasInput> | Prisma.usuariosCreateWithoutTiendasInput[] | Prisma.usuariosUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutTiendasInput | Prisma.usuariosCreateOrConnectWithoutTiendasInput[];
    createMany?: Prisma.usuariosCreateManyTiendasInputEnvelope;
    connect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
};
export type usuariosUncheckedCreateNestedManyWithoutTiendasInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutTiendasInput, Prisma.usuariosUncheckedCreateWithoutTiendasInput> | Prisma.usuariosCreateWithoutTiendasInput[] | Prisma.usuariosUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutTiendasInput | Prisma.usuariosCreateOrConnectWithoutTiendasInput[];
    createMany?: Prisma.usuariosCreateManyTiendasInputEnvelope;
    connect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
};
export type usuariosUpdateManyWithoutTiendasNestedInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutTiendasInput, Prisma.usuariosUncheckedCreateWithoutTiendasInput> | Prisma.usuariosCreateWithoutTiendasInput[] | Prisma.usuariosUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutTiendasInput | Prisma.usuariosCreateOrConnectWithoutTiendasInput[];
    upsert?: Prisma.usuariosUpsertWithWhereUniqueWithoutTiendasInput | Prisma.usuariosUpsertWithWhereUniqueWithoutTiendasInput[];
    createMany?: Prisma.usuariosCreateManyTiendasInputEnvelope;
    set?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    disconnect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    delete?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    connect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    update?: Prisma.usuariosUpdateWithWhereUniqueWithoutTiendasInput | Prisma.usuariosUpdateWithWhereUniqueWithoutTiendasInput[];
    updateMany?: Prisma.usuariosUpdateManyWithWhereWithoutTiendasInput | Prisma.usuariosUpdateManyWithWhereWithoutTiendasInput[];
    deleteMany?: Prisma.usuariosScalarWhereInput | Prisma.usuariosScalarWhereInput[];
};
export type usuariosUncheckedUpdateManyWithoutTiendasNestedInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutTiendasInput, Prisma.usuariosUncheckedCreateWithoutTiendasInput> | Prisma.usuariosCreateWithoutTiendasInput[] | Prisma.usuariosUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutTiendasInput | Prisma.usuariosCreateOrConnectWithoutTiendasInput[];
    upsert?: Prisma.usuariosUpsertWithWhereUniqueWithoutTiendasInput | Prisma.usuariosUpsertWithWhereUniqueWithoutTiendasInput[];
    createMany?: Prisma.usuariosCreateManyTiendasInputEnvelope;
    set?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    disconnect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    delete?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    connect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    update?: Prisma.usuariosUpdateWithWhereUniqueWithoutTiendasInput | Prisma.usuariosUpdateWithWhereUniqueWithoutTiendasInput[];
    updateMany?: Prisma.usuariosUpdateManyWithWhereWithoutTiendasInput | Prisma.usuariosUpdateManyWithWhereWithoutTiendasInput[];
    deleteMany?: Prisma.usuariosScalarWhereInput | Prisma.usuariosScalarWhereInput[];
};
export type usuariosCreateWithoutFacturaInput = {
    nombre: string;
    documento: string;
    fecha_registro: Date | string;
    contrasena: string;
    estado?: boolean;
    roles: Prisma.rolesCreateNestedOneWithoutUsuariosInput;
    tiendas: Prisma.tiendasCreateNestedOneWithoutUsuariosInput;
};
export type usuariosUncheckedCreateWithoutFacturaInput = {
    id_usuario?: number;
    nombre: string;
    documento: string;
    fecha_registro: Date | string;
    contrasena: string;
    estado?: boolean;
    id_rol: number;
    id_tienda: number;
};
export type usuariosCreateOrConnectWithoutFacturaInput = {
    where: Prisma.usuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuariosCreateWithoutFacturaInput, Prisma.usuariosUncheckedCreateWithoutFacturaInput>;
};
export type usuariosUpsertWithoutFacturaInput = {
    update: Prisma.XOR<Prisma.usuariosUpdateWithoutFacturaInput, Prisma.usuariosUncheckedUpdateWithoutFacturaInput>;
    create: Prisma.XOR<Prisma.usuariosCreateWithoutFacturaInput, Prisma.usuariosUncheckedCreateWithoutFacturaInput>;
    where?: Prisma.usuariosWhereInput;
};
export type usuariosUpdateToOneWithWhereWithoutFacturaInput = {
    where?: Prisma.usuariosWhereInput;
    data: Prisma.XOR<Prisma.usuariosUpdateWithoutFacturaInput, Prisma.usuariosUncheckedUpdateWithoutFacturaInput>;
};
export type usuariosUpdateWithoutFacturaInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.rolesUpdateOneRequiredWithoutUsuariosNestedInput;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutUsuariosNestedInput;
};
export type usuariosUncheckedUpdateWithoutFacturaInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type usuariosCreateWithoutRolesInput = {
    nombre: string;
    documento: string;
    fecha_registro: Date | string;
    contrasena: string;
    estado?: boolean;
    factura?: Prisma.facturaCreateNestedManyWithoutUsuariosInput;
    tiendas: Prisma.tiendasCreateNestedOneWithoutUsuariosInput;
};
export type usuariosUncheckedCreateWithoutRolesInput = {
    id_usuario?: number;
    nombre: string;
    documento: string;
    fecha_registro: Date | string;
    contrasena: string;
    estado?: boolean;
    id_tienda: number;
    factura?: Prisma.facturaUncheckedCreateNestedManyWithoutUsuariosInput;
};
export type usuariosCreateOrConnectWithoutRolesInput = {
    where: Prisma.usuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuariosCreateWithoutRolesInput, Prisma.usuariosUncheckedCreateWithoutRolesInput>;
};
export type usuariosCreateManyRolesInputEnvelope = {
    data: Prisma.usuariosCreateManyRolesInput | Prisma.usuariosCreateManyRolesInput[];
    skipDuplicates?: boolean;
};
export type usuariosUpsertWithWhereUniqueWithoutRolesInput = {
    where: Prisma.usuariosWhereUniqueInput;
    update: Prisma.XOR<Prisma.usuariosUpdateWithoutRolesInput, Prisma.usuariosUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.usuariosCreateWithoutRolesInput, Prisma.usuariosUncheckedCreateWithoutRolesInput>;
};
export type usuariosUpdateWithWhereUniqueWithoutRolesInput = {
    where: Prisma.usuariosWhereUniqueInput;
    data: Prisma.XOR<Prisma.usuariosUpdateWithoutRolesInput, Prisma.usuariosUncheckedUpdateWithoutRolesInput>;
};
export type usuariosUpdateManyWithWhereWithoutRolesInput = {
    where: Prisma.usuariosScalarWhereInput;
    data: Prisma.XOR<Prisma.usuariosUpdateManyMutationInput, Prisma.usuariosUncheckedUpdateManyWithoutRolesInput>;
};
export type usuariosScalarWhereInput = {
    AND?: Prisma.usuariosScalarWhereInput | Prisma.usuariosScalarWhereInput[];
    OR?: Prisma.usuariosScalarWhereInput[];
    NOT?: Prisma.usuariosScalarWhereInput | Prisma.usuariosScalarWhereInput[];
    id_usuario?: Prisma.IntFilter<"usuarios"> | number;
    nombre?: Prisma.StringFilter<"usuarios"> | string;
    documento?: Prisma.StringFilter<"usuarios"> | string;
    fecha_registro?: Prisma.DateTimeFilter<"usuarios"> | Date | string;
    contrasena?: Prisma.StringFilter<"usuarios"> | string;
    estado?: Prisma.BoolFilter<"usuarios"> | boolean;
    id_rol?: Prisma.IntFilter<"usuarios"> | number;
    id_tienda?: Prisma.IntFilter<"usuarios"> | number;
};
export type usuariosCreateWithoutTiendasInput = {
    nombre: string;
    documento: string;
    fecha_registro: Date | string;
    contrasena: string;
    estado?: boolean;
    factura?: Prisma.facturaCreateNestedManyWithoutUsuariosInput;
    roles: Prisma.rolesCreateNestedOneWithoutUsuariosInput;
};
export type usuariosUncheckedCreateWithoutTiendasInput = {
    id_usuario?: number;
    nombre: string;
    documento: string;
    fecha_registro: Date | string;
    contrasena: string;
    estado?: boolean;
    id_rol: number;
    factura?: Prisma.facturaUncheckedCreateNestedManyWithoutUsuariosInput;
};
export type usuariosCreateOrConnectWithoutTiendasInput = {
    where: Prisma.usuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuariosCreateWithoutTiendasInput, Prisma.usuariosUncheckedCreateWithoutTiendasInput>;
};
export type usuariosCreateManyTiendasInputEnvelope = {
    data: Prisma.usuariosCreateManyTiendasInput | Prisma.usuariosCreateManyTiendasInput[];
    skipDuplicates?: boolean;
};
export type usuariosUpsertWithWhereUniqueWithoutTiendasInput = {
    where: Prisma.usuariosWhereUniqueInput;
    update: Prisma.XOR<Prisma.usuariosUpdateWithoutTiendasInput, Prisma.usuariosUncheckedUpdateWithoutTiendasInput>;
    create: Prisma.XOR<Prisma.usuariosCreateWithoutTiendasInput, Prisma.usuariosUncheckedCreateWithoutTiendasInput>;
};
export type usuariosUpdateWithWhereUniqueWithoutTiendasInput = {
    where: Prisma.usuariosWhereUniqueInput;
    data: Prisma.XOR<Prisma.usuariosUpdateWithoutTiendasInput, Prisma.usuariosUncheckedUpdateWithoutTiendasInput>;
};
export type usuariosUpdateManyWithWhereWithoutTiendasInput = {
    where: Prisma.usuariosScalarWhereInput;
    data: Prisma.XOR<Prisma.usuariosUpdateManyMutationInput, Prisma.usuariosUncheckedUpdateManyWithoutTiendasInput>;
};
export type usuariosCreateManyRolesInput = {
    id_usuario?: number;
    nombre: string;
    documento: string;
    fecha_registro: Date | string;
    contrasena: string;
    estado?: boolean;
    id_tienda: number;
};
export type usuariosUpdateWithoutRolesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    factura?: Prisma.facturaUpdateManyWithoutUsuariosNestedInput;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutUsuariosNestedInput;
};
export type usuariosUncheckedUpdateWithoutRolesInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    factura?: Prisma.facturaUncheckedUpdateManyWithoutUsuariosNestedInput;
};
export type usuariosUncheckedUpdateManyWithoutRolesInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type usuariosCreateManyTiendasInput = {
    id_usuario?: number;
    nombre: string;
    documento: string;
    fecha_registro: Date | string;
    contrasena: string;
    estado?: boolean;
    id_rol: number;
};
export type usuariosUpdateWithoutTiendasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    factura?: Prisma.facturaUpdateManyWithoutUsuariosNestedInput;
    roles?: Prisma.rolesUpdateOneRequiredWithoutUsuariosNestedInput;
};
export type usuariosUncheckedUpdateWithoutTiendasInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    factura?: Prisma.facturaUncheckedUpdateManyWithoutUsuariosNestedInput;
};
export type usuariosUncheckedUpdateManyWithoutTiendasInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UsuariosCountOutputType = {
    factura: number;
};
export type UsuariosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura?: boolean | UsuariosCountOutputTypeCountFacturaArgs;
};
export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuariosCountOutputTypeCountFacturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaWhereInput;
};
export type usuariosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_usuario?: boolean;
    nombre?: boolean;
    documento?: boolean;
    fecha_registro?: boolean;
    contrasena?: boolean;
    estado?: boolean;
    id_rol?: boolean;
    id_tienda?: boolean;
    factura?: boolean | Prisma.usuarios$facturaArgs<ExtArgs>;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
    tiendas?: boolean | Prisma.tiendasDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuariosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuarios"]>;
export type usuariosSelectScalar = {
    id_usuario?: boolean;
    nombre?: boolean;
    documento?: boolean;
    fecha_registro?: boolean;
    contrasena?: boolean;
    estado?: boolean;
    id_rol?: boolean;
    id_tienda?: boolean;
};
export type usuariosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_usuario" | "nombre" | "documento" | "fecha_registro" | "contrasena" | "estado" | "id_rol" | "id_tienda", ExtArgs["result"]["usuarios"]>;
export type usuariosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura?: boolean | Prisma.usuarios$facturaArgs<ExtArgs>;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
    tiendas?: boolean | Prisma.tiendasDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuariosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $usuariosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "usuarios";
    objects: {
        factura: Prisma.$facturaPayload<ExtArgs>[];
        roles: Prisma.$rolesPayload<ExtArgs>;
        tiendas: Prisma.$tiendasPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_usuario: number;
        nombre: string;
        documento: string;
        fecha_registro: Date;
        contrasena: string;
        estado: boolean;
        id_rol: number;
        id_tienda: number;
    }, ExtArgs["result"]["usuarios"]>;
    composites: {};
};
export type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usuariosPayload, S>;
export type usuariosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuariosCountAggregateInputType | true;
};
export interface usuariosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['usuarios'];
        meta: {
            name: 'usuarios';
        };
    };
    findUnique<T extends usuariosFindUniqueArgs>(args: Prisma.SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usuariosFindFirstArgs>(args?: Prisma.SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usuariosFindManyArgs>(args?: Prisma.SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usuariosCreateArgs>(args: Prisma.SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usuariosCreateManyArgs>(args?: Prisma.SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends usuariosDeleteArgs>(args: Prisma.SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usuariosUpdateArgs>(args: Prisma.SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usuariosDeleteManyArgs>(args?: Prisma.SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usuariosUpdateManyArgs>(args: Prisma.SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends usuariosUpsertArgs>(args: Prisma.SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usuariosCountArgs>(args?: Prisma.Subset<T, usuariosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuariosCountAggregateOutputType> : number>;
    aggregate<T extends UsuariosAggregateArgs>(args: Prisma.Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>;
    groupBy<T extends usuariosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usuariosGroupByArgs['orderBy'];
    } : {
        orderBy?: usuariosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usuariosFieldRefs;
}
export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    factura<T extends Prisma.usuarios$facturaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuarios$facturaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    roles<T extends Prisma.rolesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rolesDefaultArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tiendas<T extends Prisma.tiendasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tiendasDefaultArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usuariosFieldRefs {
    readonly id_usuario: Prisma.FieldRef<"usuarios", 'Int'>;
    readonly nombre: Prisma.FieldRef<"usuarios", 'String'>;
    readonly documento: Prisma.FieldRef<"usuarios", 'String'>;
    readonly fecha_registro: Prisma.FieldRef<"usuarios", 'DateTime'>;
    readonly contrasena: Prisma.FieldRef<"usuarios", 'String'>;
    readonly estado: Prisma.FieldRef<"usuarios", 'Boolean'>;
    readonly id_rol: Prisma.FieldRef<"usuarios", 'Int'>;
    readonly id_tienda: Prisma.FieldRef<"usuarios", 'Int'>;
}
export type usuariosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where: Prisma.usuariosWhereUniqueInput;
};
export type usuariosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where: Prisma.usuariosWhereUniqueInput;
};
export type usuariosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type usuariosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type usuariosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type usuariosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usuariosCreateInput, Prisma.usuariosUncheckedCreateInput>;
};
export type usuariosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usuariosCreateManyInput | Prisma.usuariosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usuariosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usuariosUpdateInput, Prisma.usuariosUncheckedUpdateInput>;
    where: Prisma.usuariosWhereUniqueInput;
};
export type usuariosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usuariosUpdateManyMutationInput, Prisma.usuariosUncheckedUpdateManyInput>;
    where?: Prisma.usuariosWhereInput;
    limit?: number;
};
export type usuariosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where: Prisma.usuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuariosCreateInput, Prisma.usuariosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usuariosUpdateInput, Prisma.usuariosUncheckedUpdateInput>;
};
export type usuariosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where: Prisma.usuariosWhereUniqueInput;
};
export type usuariosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuariosWhereInput;
    limit?: number;
};
export type usuarios$facturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type usuariosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
};
