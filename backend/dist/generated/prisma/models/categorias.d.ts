import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type categoriasModel = runtime.Types.Result.DefaultSelection<Prisma.$categoriasPayload>;
export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null;
    _avg: CategoriasAvgAggregateOutputType | null;
    _sum: CategoriasSumAggregateOutputType | null;
    _min: CategoriasMinAggregateOutputType | null;
    _max: CategoriasMaxAggregateOutputType | null;
};
export type CategoriasAvgAggregateOutputType = {
    id_categoria: number | null;
    id_tienda: number | null;
};
export type CategoriasSumAggregateOutputType = {
    id_categoria: number | null;
    id_tienda: number | null;
};
export type CategoriasMinAggregateOutputType = {
    id_categoria: number | null;
    nombre_categoria: string | null;
    id_tienda: number | null;
};
export type CategoriasMaxAggregateOutputType = {
    id_categoria: number | null;
    nombre_categoria: string | null;
    id_tienda: number | null;
};
export type CategoriasCountAggregateOutputType = {
    id_categoria: number;
    nombre_categoria: number;
    id_tienda: number;
    _all: number;
};
export type CategoriasAvgAggregateInputType = {
    id_categoria?: true;
    id_tienda?: true;
};
export type CategoriasSumAggregateInputType = {
    id_categoria?: true;
    id_tienda?: true;
};
export type CategoriasMinAggregateInputType = {
    id_categoria?: true;
    nombre_categoria?: true;
    id_tienda?: true;
};
export type CategoriasMaxAggregateInputType = {
    id_categoria?: true;
    nombre_categoria?: true;
    id_tienda?: true;
};
export type CategoriasCountAggregateInputType = {
    id_categoria?: true;
    nombre_categoria?: true;
    id_tienda?: true;
    _all?: true;
};
export type CategoriasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriasWhereInput;
    orderBy?: Prisma.categoriasOrderByWithRelationInput | Prisma.categoriasOrderByWithRelationInput[];
    cursor?: Prisma.categoriasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoriasCountAggregateInputType;
    _avg?: CategoriasAvgAggregateInputType;
    _sum?: CategoriasSumAggregateInputType;
    _min?: CategoriasMinAggregateInputType;
    _max?: CategoriasMaxAggregateInputType;
};
export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
    [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategorias[P]> : Prisma.GetScalarType<T[P], AggregateCategorias[P]>;
};
export type categoriasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriasWhereInput;
    orderBy?: Prisma.categoriasOrderByWithAggregationInput | Prisma.categoriasOrderByWithAggregationInput[];
    by: Prisma.CategoriasScalarFieldEnum[] | Prisma.CategoriasScalarFieldEnum;
    having?: Prisma.categoriasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriasCountAggregateInputType | true;
    _avg?: CategoriasAvgAggregateInputType;
    _sum?: CategoriasSumAggregateInputType;
    _min?: CategoriasMinAggregateInputType;
    _max?: CategoriasMaxAggregateInputType;
};
export type CategoriasGroupByOutputType = {
    id_categoria: number;
    nombre_categoria: string;
    id_tienda: number;
    _count: CategoriasCountAggregateOutputType | null;
    _avg: CategoriasAvgAggregateOutputType | null;
    _sum: CategoriasSumAggregateOutputType | null;
    _min: CategoriasMinAggregateOutputType | null;
    _max: CategoriasMaxAggregateOutputType | null;
};
export type GetCategoriasGroupByPayload<T extends categoriasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoriasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoriasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoriasGroupByOutputType[P]>;
}>>;
export type categoriasWhereInput = {
    AND?: Prisma.categoriasWhereInput | Prisma.categoriasWhereInput[];
    OR?: Prisma.categoriasWhereInput[];
    NOT?: Prisma.categoriasWhereInput | Prisma.categoriasWhereInput[];
    id_categoria?: Prisma.IntFilter<"categorias"> | number;
    nombre_categoria?: Prisma.StringFilter<"categorias"> | string;
    id_tienda?: Prisma.IntFilter<"categorias"> | number;
    tiendas?: Prisma.XOR<Prisma.TiendasScalarRelationFilter, Prisma.tiendasWhereInput>;
    productos?: Prisma.ProductosListRelationFilter;
};
export type categoriasOrderByWithRelationInput = {
    id_categoria?: Prisma.SortOrder;
    nombre_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    tiendas?: Prisma.tiendasOrderByWithRelationInput;
    productos?: Prisma.productosOrderByRelationAggregateInput;
    _relevance?: Prisma.categoriasOrderByRelevanceInput;
};
export type categoriasWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number;
    AND?: Prisma.categoriasWhereInput | Prisma.categoriasWhereInput[];
    OR?: Prisma.categoriasWhereInput[];
    NOT?: Prisma.categoriasWhereInput | Prisma.categoriasWhereInput[];
    nombre_categoria?: Prisma.StringFilter<"categorias"> | string;
    id_tienda?: Prisma.IntFilter<"categorias"> | number;
    tiendas?: Prisma.XOR<Prisma.TiendasScalarRelationFilter, Prisma.tiendasWhereInput>;
    productos?: Prisma.ProductosListRelationFilter;
}, "id_categoria">;
export type categoriasOrderByWithAggregationInput = {
    id_categoria?: Prisma.SortOrder;
    nombre_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
    _count?: Prisma.categoriasCountOrderByAggregateInput;
    _avg?: Prisma.categoriasAvgOrderByAggregateInput;
    _max?: Prisma.categoriasMaxOrderByAggregateInput;
    _min?: Prisma.categoriasMinOrderByAggregateInput;
    _sum?: Prisma.categoriasSumOrderByAggregateInput;
};
export type categoriasScalarWhereWithAggregatesInput = {
    AND?: Prisma.categoriasScalarWhereWithAggregatesInput | Prisma.categoriasScalarWhereWithAggregatesInput[];
    OR?: Prisma.categoriasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.categoriasScalarWhereWithAggregatesInput | Prisma.categoriasScalarWhereWithAggregatesInput[];
    id_categoria?: Prisma.IntWithAggregatesFilter<"categorias"> | number;
    nombre_categoria?: Prisma.StringWithAggregatesFilter<"categorias"> | string;
    id_tienda?: Prisma.IntWithAggregatesFilter<"categorias"> | number;
};
export type categoriasCreateInput = {
    nombre_categoria: string;
    tiendas: Prisma.tiendasCreateNestedOneWithoutCategoriasInput;
    productos?: Prisma.productosCreateNestedManyWithoutCategoriasInput;
};
export type categoriasUncheckedCreateInput = {
    id_categoria?: number;
    nombre_categoria: string;
    id_tienda: number;
    productos?: Prisma.productosUncheckedCreateNestedManyWithoutCategoriasInput;
};
export type categoriasUpdateInput = {
    nombre_categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutCategoriasNestedInput;
    productos?: Prisma.productosUpdateManyWithoutCategoriasNestedInput;
};
export type categoriasUncheckedUpdateInput = {
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
    productos?: Prisma.productosUncheckedUpdateManyWithoutCategoriasNestedInput;
};
export type categoriasCreateManyInput = {
    id_categoria?: number;
    nombre_categoria: string;
    id_tienda: number;
};
export type categoriasUpdateManyMutationInput = {
    nombre_categoria?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type categoriasUncheckedUpdateManyInput = {
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type categoriasOrderByRelevanceInput = {
    fields: Prisma.categoriasOrderByRelevanceFieldEnum | Prisma.categoriasOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type categoriasCountOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    nombre_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type categoriasAvgOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type categoriasMaxOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    nombre_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type categoriasMinOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    nombre_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type categoriasSumOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    id_tienda?: Prisma.SortOrder;
};
export type CategoriasScalarRelationFilter = {
    is?: Prisma.categoriasWhereInput;
    isNot?: Prisma.categoriasWhereInput;
};
export type CategoriasListRelationFilter = {
    every?: Prisma.categoriasWhereInput;
    some?: Prisma.categoriasWhereInput;
    none?: Prisma.categoriasWhereInput;
};
export type categoriasOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type categoriasCreateNestedOneWithoutProductosInput = {
    create?: Prisma.XOR<Prisma.categoriasCreateWithoutProductosInput, Prisma.categoriasUncheckedCreateWithoutProductosInput>;
    connectOrCreate?: Prisma.categoriasCreateOrConnectWithoutProductosInput;
    connect?: Prisma.categoriasWhereUniqueInput;
};
export type categoriasUpdateOneRequiredWithoutProductosNestedInput = {
    create?: Prisma.XOR<Prisma.categoriasCreateWithoutProductosInput, Prisma.categoriasUncheckedCreateWithoutProductosInput>;
    connectOrCreate?: Prisma.categoriasCreateOrConnectWithoutProductosInput;
    upsert?: Prisma.categoriasUpsertWithoutProductosInput;
    connect?: Prisma.categoriasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoriasUpdateToOneWithWhereWithoutProductosInput, Prisma.categoriasUpdateWithoutProductosInput>, Prisma.categoriasUncheckedUpdateWithoutProductosInput>;
};
export type categoriasCreateNestedManyWithoutTiendasInput = {
    create?: Prisma.XOR<Prisma.categoriasCreateWithoutTiendasInput, Prisma.categoriasUncheckedCreateWithoutTiendasInput> | Prisma.categoriasCreateWithoutTiendasInput[] | Prisma.categoriasUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.categoriasCreateOrConnectWithoutTiendasInput | Prisma.categoriasCreateOrConnectWithoutTiendasInput[];
    createMany?: Prisma.categoriasCreateManyTiendasInputEnvelope;
    connect?: Prisma.categoriasWhereUniqueInput | Prisma.categoriasWhereUniqueInput[];
};
export type categoriasUncheckedCreateNestedManyWithoutTiendasInput = {
    create?: Prisma.XOR<Prisma.categoriasCreateWithoutTiendasInput, Prisma.categoriasUncheckedCreateWithoutTiendasInput> | Prisma.categoriasCreateWithoutTiendasInput[] | Prisma.categoriasUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.categoriasCreateOrConnectWithoutTiendasInput | Prisma.categoriasCreateOrConnectWithoutTiendasInput[];
    createMany?: Prisma.categoriasCreateManyTiendasInputEnvelope;
    connect?: Prisma.categoriasWhereUniqueInput | Prisma.categoriasWhereUniqueInput[];
};
export type categoriasUpdateManyWithoutTiendasNestedInput = {
    create?: Prisma.XOR<Prisma.categoriasCreateWithoutTiendasInput, Prisma.categoriasUncheckedCreateWithoutTiendasInput> | Prisma.categoriasCreateWithoutTiendasInput[] | Prisma.categoriasUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.categoriasCreateOrConnectWithoutTiendasInput | Prisma.categoriasCreateOrConnectWithoutTiendasInput[];
    upsert?: Prisma.categoriasUpsertWithWhereUniqueWithoutTiendasInput | Prisma.categoriasUpsertWithWhereUniqueWithoutTiendasInput[];
    createMany?: Prisma.categoriasCreateManyTiendasInputEnvelope;
    set?: Prisma.categoriasWhereUniqueInput | Prisma.categoriasWhereUniqueInput[];
    disconnect?: Prisma.categoriasWhereUniqueInput | Prisma.categoriasWhereUniqueInput[];
    delete?: Prisma.categoriasWhereUniqueInput | Prisma.categoriasWhereUniqueInput[];
    connect?: Prisma.categoriasWhereUniqueInput | Prisma.categoriasWhereUniqueInput[];
    update?: Prisma.categoriasUpdateWithWhereUniqueWithoutTiendasInput | Prisma.categoriasUpdateWithWhereUniqueWithoutTiendasInput[];
    updateMany?: Prisma.categoriasUpdateManyWithWhereWithoutTiendasInput | Prisma.categoriasUpdateManyWithWhereWithoutTiendasInput[];
    deleteMany?: Prisma.categoriasScalarWhereInput | Prisma.categoriasScalarWhereInput[];
};
export type categoriasUncheckedUpdateManyWithoutTiendasNestedInput = {
    create?: Prisma.XOR<Prisma.categoriasCreateWithoutTiendasInput, Prisma.categoriasUncheckedCreateWithoutTiendasInput> | Prisma.categoriasCreateWithoutTiendasInput[] | Prisma.categoriasUncheckedCreateWithoutTiendasInput[];
    connectOrCreate?: Prisma.categoriasCreateOrConnectWithoutTiendasInput | Prisma.categoriasCreateOrConnectWithoutTiendasInput[];
    upsert?: Prisma.categoriasUpsertWithWhereUniqueWithoutTiendasInput | Prisma.categoriasUpsertWithWhereUniqueWithoutTiendasInput[];
    createMany?: Prisma.categoriasCreateManyTiendasInputEnvelope;
    set?: Prisma.categoriasWhereUniqueInput | Prisma.categoriasWhereUniqueInput[];
    disconnect?: Prisma.categoriasWhereUniqueInput | Prisma.categoriasWhereUniqueInput[];
    delete?: Prisma.categoriasWhereUniqueInput | Prisma.categoriasWhereUniqueInput[];
    connect?: Prisma.categoriasWhereUniqueInput | Prisma.categoriasWhereUniqueInput[];
    update?: Prisma.categoriasUpdateWithWhereUniqueWithoutTiendasInput | Prisma.categoriasUpdateWithWhereUniqueWithoutTiendasInput[];
    updateMany?: Prisma.categoriasUpdateManyWithWhereWithoutTiendasInput | Prisma.categoriasUpdateManyWithWhereWithoutTiendasInput[];
    deleteMany?: Prisma.categoriasScalarWhereInput | Prisma.categoriasScalarWhereInput[];
};
export type categoriasCreateWithoutProductosInput = {
    nombre_categoria: string;
    tiendas: Prisma.tiendasCreateNestedOneWithoutCategoriasInput;
};
export type categoriasUncheckedCreateWithoutProductosInput = {
    id_categoria?: number;
    nombre_categoria: string;
    id_tienda: number;
};
export type categoriasCreateOrConnectWithoutProductosInput = {
    where: Prisma.categoriasWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriasCreateWithoutProductosInput, Prisma.categoriasUncheckedCreateWithoutProductosInput>;
};
export type categoriasUpsertWithoutProductosInput = {
    update: Prisma.XOR<Prisma.categoriasUpdateWithoutProductosInput, Prisma.categoriasUncheckedUpdateWithoutProductosInput>;
    create: Prisma.XOR<Prisma.categoriasCreateWithoutProductosInput, Prisma.categoriasUncheckedCreateWithoutProductosInput>;
    where?: Prisma.categoriasWhereInput;
};
export type categoriasUpdateToOneWithWhereWithoutProductosInput = {
    where?: Prisma.categoriasWhereInput;
    data: Prisma.XOR<Prisma.categoriasUpdateWithoutProductosInput, Prisma.categoriasUncheckedUpdateWithoutProductosInput>;
};
export type categoriasUpdateWithoutProductosInput = {
    nombre_categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tiendas?: Prisma.tiendasUpdateOneRequiredWithoutCategoriasNestedInput;
};
export type categoriasUncheckedUpdateWithoutProductosInput = {
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    id_tienda?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type categoriasCreateWithoutTiendasInput = {
    nombre_categoria: string;
    productos?: Prisma.productosCreateNestedManyWithoutCategoriasInput;
};
export type categoriasUncheckedCreateWithoutTiendasInput = {
    id_categoria?: number;
    nombre_categoria: string;
    productos?: Prisma.productosUncheckedCreateNestedManyWithoutCategoriasInput;
};
export type categoriasCreateOrConnectWithoutTiendasInput = {
    where: Prisma.categoriasWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriasCreateWithoutTiendasInput, Prisma.categoriasUncheckedCreateWithoutTiendasInput>;
};
export type categoriasCreateManyTiendasInputEnvelope = {
    data: Prisma.categoriasCreateManyTiendasInput | Prisma.categoriasCreateManyTiendasInput[];
    skipDuplicates?: boolean;
};
export type categoriasUpsertWithWhereUniqueWithoutTiendasInput = {
    where: Prisma.categoriasWhereUniqueInput;
    update: Prisma.XOR<Prisma.categoriasUpdateWithoutTiendasInput, Prisma.categoriasUncheckedUpdateWithoutTiendasInput>;
    create: Prisma.XOR<Prisma.categoriasCreateWithoutTiendasInput, Prisma.categoriasUncheckedCreateWithoutTiendasInput>;
};
export type categoriasUpdateWithWhereUniqueWithoutTiendasInput = {
    where: Prisma.categoriasWhereUniqueInput;
    data: Prisma.XOR<Prisma.categoriasUpdateWithoutTiendasInput, Prisma.categoriasUncheckedUpdateWithoutTiendasInput>;
};
export type categoriasUpdateManyWithWhereWithoutTiendasInput = {
    where: Prisma.categoriasScalarWhereInput;
    data: Prisma.XOR<Prisma.categoriasUpdateManyMutationInput, Prisma.categoriasUncheckedUpdateManyWithoutTiendasInput>;
};
export type categoriasScalarWhereInput = {
    AND?: Prisma.categoriasScalarWhereInput | Prisma.categoriasScalarWhereInput[];
    OR?: Prisma.categoriasScalarWhereInput[];
    NOT?: Prisma.categoriasScalarWhereInput | Prisma.categoriasScalarWhereInput[];
    id_categoria?: Prisma.IntFilter<"categorias"> | number;
    nombre_categoria?: Prisma.StringFilter<"categorias"> | string;
    id_tienda?: Prisma.IntFilter<"categorias"> | number;
};
export type categoriasCreateManyTiendasInput = {
    id_categoria?: number;
    nombre_categoria: string;
};
export type categoriasUpdateWithoutTiendasInput = {
    nombre_categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    productos?: Prisma.productosUpdateManyWithoutCategoriasNestedInput;
};
export type categoriasUncheckedUpdateWithoutTiendasInput = {
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    productos?: Prisma.productosUncheckedUpdateManyWithoutCategoriasNestedInput;
};
export type categoriasUncheckedUpdateManyWithoutTiendasInput = {
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_categoria?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CategoriasCountOutputType = {
    productos: number;
};
export type CategoriasCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productos?: boolean | CategoriasCountOutputTypeCountProductosArgs;
};
export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoriasCountOutputTypeCountProductosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productosWhereInput;
};
export type categoriasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_categoria?: boolean;
    nombre_categoria?: boolean;
    id_tienda?: boolean;
    tiendas?: boolean | Prisma.tiendasDefaultArgs<ExtArgs>;
    productos?: boolean | Prisma.categorias$productosArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriasCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categorias"]>;
export type categoriasSelectScalar = {
    id_categoria?: boolean;
    nombre_categoria?: boolean;
    id_tienda?: boolean;
};
export type categoriasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_categoria" | "nombre_categoria" | "id_tienda", ExtArgs["result"]["categorias"]>;
export type categoriasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tiendas?: boolean | Prisma.tiendasDefaultArgs<ExtArgs>;
    productos?: boolean | Prisma.categorias$productosArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriasCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $categoriasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "categorias";
    objects: {
        tiendas: Prisma.$tiendasPayload<ExtArgs>;
        productos: Prisma.$productosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_categoria: number;
        nombre_categoria: string;
        id_tienda: number;
    }, ExtArgs["result"]["categorias"]>;
    composites: {};
};
export type categoriasGetPayload<S extends boolean | null | undefined | categoriasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$categoriasPayload, S>;
export type categoriasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<categoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoriasCountAggregateInputType | true;
};
export interface categoriasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['categorias'];
        meta: {
            name: 'categorias';
        };
    };
    findUnique<T extends categoriasFindUniqueArgs>(args: Prisma.SelectSubset<T, categoriasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__categoriasClient<runtime.Types.Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoriasClient<runtime.Types.Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends categoriasFindFirstArgs>(args?: Prisma.SelectSubset<T, categoriasFindFirstArgs<ExtArgs>>): Prisma.Prisma__categoriasClient<runtime.Types.Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoriasClient<runtime.Types.Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends categoriasFindManyArgs>(args?: Prisma.SelectSubset<T, categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends categoriasCreateArgs>(args: Prisma.SelectSubset<T, categoriasCreateArgs<ExtArgs>>): Prisma.Prisma__categoriasClient<runtime.Types.Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends categoriasCreateManyArgs>(args?: Prisma.SelectSubset<T, categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends categoriasDeleteArgs>(args: Prisma.SelectSubset<T, categoriasDeleteArgs<ExtArgs>>): Prisma.Prisma__categoriasClient<runtime.Types.Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends categoriasUpdateArgs>(args: Prisma.SelectSubset<T, categoriasUpdateArgs<ExtArgs>>): Prisma.Prisma__categoriasClient<runtime.Types.Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends categoriasDeleteManyArgs>(args?: Prisma.SelectSubset<T, categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends categoriasUpdateManyArgs>(args: Prisma.SelectSubset<T, categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends categoriasUpsertArgs>(args: Prisma.SelectSubset<T, categoriasUpsertArgs<ExtArgs>>): Prisma.Prisma__categoriasClient<runtime.Types.Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends categoriasCountArgs>(args?: Prisma.Subset<T, categoriasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoriasCountAggregateOutputType> : number>;
    aggregate<T extends CategoriasAggregateArgs>(args: Prisma.Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>;
    groupBy<T extends categoriasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: categoriasGroupByArgs['orderBy'];
    } : {
        orderBy?: categoriasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: categoriasFieldRefs;
}
export interface Prisma__categoriasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tiendas<T extends Prisma.tiendasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tiendasDefaultArgs<ExtArgs>>): Prisma.Prisma__tiendasClient<runtime.Types.Result.GetResult<Prisma.$tiendasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    productos<T extends Prisma.categorias$productosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categorias$productosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface categoriasFieldRefs {
    readonly id_categoria: Prisma.FieldRef<"categorias", 'Int'>;
    readonly nombre_categoria: Prisma.FieldRef<"categorias", 'String'>;
    readonly id_tienda: Prisma.FieldRef<"categorias", 'Int'>;
}
export type categoriasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriasSelect<ExtArgs> | null;
    omit?: Prisma.categoriasOmit<ExtArgs> | null;
    include?: Prisma.categoriasInclude<ExtArgs> | null;
    where: Prisma.categoriasWhereUniqueInput;
};
export type categoriasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriasSelect<ExtArgs> | null;
    omit?: Prisma.categoriasOmit<ExtArgs> | null;
    include?: Prisma.categoriasInclude<ExtArgs> | null;
    where: Prisma.categoriasWhereUniqueInput;
};
export type categoriasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type categoriasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type categoriasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type categoriasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriasSelect<ExtArgs> | null;
    omit?: Prisma.categoriasOmit<ExtArgs> | null;
    include?: Prisma.categoriasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriasCreateInput, Prisma.categoriasUncheckedCreateInput>;
};
export type categoriasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.categoriasCreateManyInput | Prisma.categoriasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type categoriasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriasSelect<ExtArgs> | null;
    omit?: Prisma.categoriasOmit<ExtArgs> | null;
    include?: Prisma.categoriasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriasUpdateInput, Prisma.categoriasUncheckedUpdateInput>;
    where: Prisma.categoriasWhereUniqueInput;
};
export type categoriasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.categoriasUpdateManyMutationInput, Prisma.categoriasUncheckedUpdateManyInput>;
    where?: Prisma.categoriasWhereInput;
    limit?: number;
};
export type categoriasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriasSelect<ExtArgs> | null;
    omit?: Prisma.categoriasOmit<ExtArgs> | null;
    include?: Prisma.categoriasInclude<ExtArgs> | null;
    where: Prisma.categoriasWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriasCreateInput, Prisma.categoriasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.categoriasUpdateInput, Prisma.categoriasUncheckedUpdateInput>;
};
export type categoriasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriasSelect<ExtArgs> | null;
    omit?: Prisma.categoriasOmit<ExtArgs> | null;
    include?: Prisma.categoriasInclude<ExtArgs> | null;
    where: Prisma.categoriasWhereUniqueInput;
};
export type categoriasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriasWhereInput;
    limit?: number;
};
export type categorias$productosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type categoriasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriasSelect<ExtArgs> | null;
    omit?: Prisma.categoriasOmit<ExtArgs> | null;
    include?: Prisma.categoriasInclude<ExtArgs> | null;
};
