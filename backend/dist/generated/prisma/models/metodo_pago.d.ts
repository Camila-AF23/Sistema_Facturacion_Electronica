import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type metodo_pagoModel = runtime.Types.Result.DefaultSelection<Prisma.$metodo_pagoPayload>;
export type AggregateMetodo_pago = {
    _count: Metodo_pagoCountAggregateOutputType | null;
    _avg: Metodo_pagoAvgAggregateOutputType | null;
    _sum: Metodo_pagoSumAggregateOutputType | null;
    _min: Metodo_pagoMinAggregateOutputType | null;
    _max: Metodo_pagoMaxAggregateOutputType | null;
};
export type Metodo_pagoAvgAggregateOutputType = {
    id_pago: number | null;
};
export type Metodo_pagoSumAggregateOutputType = {
    id_pago: number | null;
};
export type Metodo_pagoMinAggregateOutputType = {
    id_pago: number | null;
    tipo_pago: string | null;
};
export type Metodo_pagoMaxAggregateOutputType = {
    id_pago: number | null;
    tipo_pago: string | null;
};
export type Metodo_pagoCountAggregateOutputType = {
    id_pago: number;
    tipo_pago: number;
    _all: number;
};
export type Metodo_pagoAvgAggregateInputType = {
    id_pago?: true;
};
export type Metodo_pagoSumAggregateInputType = {
    id_pago?: true;
};
export type Metodo_pagoMinAggregateInputType = {
    id_pago?: true;
    tipo_pago?: true;
};
export type Metodo_pagoMaxAggregateInputType = {
    id_pago?: true;
    tipo_pago?: true;
};
export type Metodo_pagoCountAggregateInputType = {
    id_pago?: true;
    tipo_pago?: true;
    _all?: true;
};
export type Metodo_pagoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.metodo_pagoWhereInput;
    orderBy?: Prisma.metodo_pagoOrderByWithRelationInput | Prisma.metodo_pagoOrderByWithRelationInput[];
    cursor?: Prisma.metodo_pagoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Metodo_pagoCountAggregateInputType;
    _avg?: Metodo_pagoAvgAggregateInputType;
    _sum?: Metodo_pagoSumAggregateInputType;
    _min?: Metodo_pagoMinAggregateInputType;
    _max?: Metodo_pagoMaxAggregateInputType;
};
export type GetMetodo_pagoAggregateType<T extends Metodo_pagoAggregateArgs> = {
    [P in keyof T & keyof AggregateMetodo_pago]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMetodo_pago[P]> : Prisma.GetScalarType<T[P], AggregateMetodo_pago[P]>;
};
export type metodo_pagoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.metodo_pagoWhereInput;
    orderBy?: Prisma.metodo_pagoOrderByWithAggregationInput | Prisma.metodo_pagoOrderByWithAggregationInput[];
    by: Prisma.Metodo_pagoScalarFieldEnum[] | Prisma.Metodo_pagoScalarFieldEnum;
    having?: Prisma.metodo_pagoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Metodo_pagoCountAggregateInputType | true;
    _avg?: Metodo_pagoAvgAggregateInputType;
    _sum?: Metodo_pagoSumAggregateInputType;
    _min?: Metodo_pagoMinAggregateInputType;
    _max?: Metodo_pagoMaxAggregateInputType;
};
export type Metodo_pagoGroupByOutputType = {
    id_pago: number;
    tipo_pago: string;
    _count: Metodo_pagoCountAggregateOutputType | null;
    _avg: Metodo_pagoAvgAggregateOutputType | null;
    _sum: Metodo_pagoSumAggregateOutputType | null;
    _min: Metodo_pagoMinAggregateOutputType | null;
    _max: Metodo_pagoMaxAggregateOutputType | null;
};
export type GetMetodo_pagoGroupByPayload<T extends metodo_pagoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Metodo_pagoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Metodo_pagoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Metodo_pagoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Metodo_pagoGroupByOutputType[P]>;
}>>;
export type metodo_pagoWhereInput = {
    AND?: Prisma.metodo_pagoWhereInput | Prisma.metodo_pagoWhereInput[];
    OR?: Prisma.metodo_pagoWhereInput[];
    NOT?: Prisma.metodo_pagoWhereInput | Prisma.metodo_pagoWhereInput[];
    id_pago?: Prisma.IntFilter<"metodo_pago"> | number;
    tipo_pago?: Prisma.StringFilter<"metodo_pago"> | string;
    factura?: Prisma.FacturaListRelationFilter;
};
export type metodo_pagoOrderByWithRelationInput = {
    id_pago?: Prisma.SortOrder;
    tipo_pago?: Prisma.SortOrder;
    factura?: Prisma.facturaOrderByRelationAggregateInput;
    _relevance?: Prisma.metodo_pagoOrderByRelevanceInput;
};
export type metodo_pagoWhereUniqueInput = Prisma.AtLeast<{
    id_pago?: number;
    AND?: Prisma.metodo_pagoWhereInput | Prisma.metodo_pagoWhereInput[];
    OR?: Prisma.metodo_pagoWhereInput[];
    NOT?: Prisma.metodo_pagoWhereInput | Prisma.metodo_pagoWhereInput[];
    tipo_pago?: Prisma.StringFilter<"metodo_pago"> | string;
    factura?: Prisma.FacturaListRelationFilter;
}, "id_pago">;
export type metodo_pagoOrderByWithAggregationInput = {
    id_pago?: Prisma.SortOrder;
    tipo_pago?: Prisma.SortOrder;
    _count?: Prisma.metodo_pagoCountOrderByAggregateInput;
    _avg?: Prisma.metodo_pagoAvgOrderByAggregateInput;
    _max?: Prisma.metodo_pagoMaxOrderByAggregateInput;
    _min?: Prisma.metodo_pagoMinOrderByAggregateInput;
    _sum?: Prisma.metodo_pagoSumOrderByAggregateInput;
};
export type metodo_pagoScalarWhereWithAggregatesInput = {
    AND?: Prisma.metodo_pagoScalarWhereWithAggregatesInput | Prisma.metodo_pagoScalarWhereWithAggregatesInput[];
    OR?: Prisma.metodo_pagoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.metodo_pagoScalarWhereWithAggregatesInput | Prisma.metodo_pagoScalarWhereWithAggregatesInput[];
    id_pago?: Prisma.IntWithAggregatesFilter<"metodo_pago"> | number;
    tipo_pago?: Prisma.StringWithAggregatesFilter<"metodo_pago"> | string;
};
export type metodo_pagoCreateInput = {
    tipo_pago: string;
    factura?: Prisma.facturaCreateNestedManyWithoutMetodo_pagoInput;
};
export type metodo_pagoUncheckedCreateInput = {
    id_pago?: number;
    tipo_pago: string;
    factura?: Prisma.facturaUncheckedCreateNestedManyWithoutMetodo_pagoInput;
};
export type metodo_pagoUpdateInput = {
    tipo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
    factura?: Prisma.facturaUpdateManyWithoutMetodo_pagoNestedInput;
};
export type metodo_pagoUncheckedUpdateInput = {
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
    factura?: Prisma.facturaUncheckedUpdateManyWithoutMetodo_pagoNestedInput;
};
export type metodo_pagoCreateManyInput = {
    id_pago?: number;
    tipo_pago: string;
};
export type metodo_pagoUpdateManyMutationInput = {
    tipo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type metodo_pagoUncheckedUpdateManyInput = {
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Metodo_pagoScalarRelationFilter = {
    is?: Prisma.metodo_pagoWhereInput;
    isNot?: Prisma.metodo_pagoWhereInput;
};
export type metodo_pagoOrderByRelevanceInput = {
    fields: Prisma.metodo_pagoOrderByRelevanceFieldEnum | Prisma.metodo_pagoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type metodo_pagoCountOrderByAggregateInput = {
    id_pago?: Prisma.SortOrder;
    tipo_pago?: Prisma.SortOrder;
};
export type metodo_pagoAvgOrderByAggregateInput = {
    id_pago?: Prisma.SortOrder;
};
export type metodo_pagoMaxOrderByAggregateInput = {
    id_pago?: Prisma.SortOrder;
    tipo_pago?: Prisma.SortOrder;
};
export type metodo_pagoMinOrderByAggregateInput = {
    id_pago?: Prisma.SortOrder;
    tipo_pago?: Prisma.SortOrder;
};
export type metodo_pagoSumOrderByAggregateInput = {
    id_pago?: Prisma.SortOrder;
};
export type metodo_pagoCreateNestedOneWithoutFacturaInput = {
    create?: Prisma.XOR<Prisma.metodo_pagoCreateWithoutFacturaInput, Prisma.metodo_pagoUncheckedCreateWithoutFacturaInput>;
    connectOrCreate?: Prisma.metodo_pagoCreateOrConnectWithoutFacturaInput;
    connect?: Prisma.metodo_pagoWhereUniqueInput;
};
export type metodo_pagoUpdateOneRequiredWithoutFacturaNestedInput = {
    create?: Prisma.XOR<Prisma.metodo_pagoCreateWithoutFacturaInput, Prisma.metodo_pagoUncheckedCreateWithoutFacturaInput>;
    connectOrCreate?: Prisma.metodo_pagoCreateOrConnectWithoutFacturaInput;
    upsert?: Prisma.metodo_pagoUpsertWithoutFacturaInput;
    connect?: Prisma.metodo_pagoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.metodo_pagoUpdateToOneWithWhereWithoutFacturaInput, Prisma.metodo_pagoUpdateWithoutFacturaInput>, Prisma.metodo_pagoUncheckedUpdateWithoutFacturaInput>;
};
export type metodo_pagoCreateWithoutFacturaInput = {
    tipo_pago: string;
};
export type metodo_pagoUncheckedCreateWithoutFacturaInput = {
    id_pago?: number;
    tipo_pago: string;
};
export type metodo_pagoCreateOrConnectWithoutFacturaInput = {
    where: Prisma.metodo_pagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.metodo_pagoCreateWithoutFacturaInput, Prisma.metodo_pagoUncheckedCreateWithoutFacturaInput>;
};
export type metodo_pagoUpsertWithoutFacturaInput = {
    update: Prisma.XOR<Prisma.metodo_pagoUpdateWithoutFacturaInput, Prisma.metodo_pagoUncheckedUpdateWithoutFacturaInput>;
    create: Prisma.XOR<Prisma.metodo_pagoCreateWithoutFacturaInput, Prisma.metodo_pagoUncheckedCreateWithoutFacturaInput>;
    where?: Prisma.metodo_pagoWhereInput;
};
export type metodo_pagoUpdateToOneWithWhereWithoutFacturaInput = {
    where?: Prisma.metodo_pagoWhereInput;
    data: Prisma.XOR<Prisma.metodo_pagoUpdateWithoutFacturaInput, Prisma.metodo_pagoUncheckedUpdateWithoutFacturaInput>;
};
export type metodo_pagoUpdateWithoutFacturaInput = {
    tipo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type metodo_pagoUncheckedUpdateWithoutFacturaInput = {
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_pago?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Metodo_pagoCountOutputType = {
    factura: number;
};
export type Metodo_pagoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura?: boolean | Metodo_pagoCountOutputTypeCountFacturaArgs;
};
export type Metodo_pagoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Metodo_pagoCountOutputTypeSelect<ExtArgs> | null;
};
export type Metodo_pagoCountOutputTypeCountFacturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaWhereInput;
};
export type metodo_pagoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_pago?: boolean;
    tipo_pago?: boolean;
    factura?: boolean | Prisma.metodo_pago$facturaArgs<ExtArgs>;
    _count?: boolean | Prisma.Metodo_pagoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["metodo_pago"]>;
export type metodo_pagoSelectScalar = {
    id_pago?: boolean;
    tipo_pago?: boolean;
};
export type metodo_pagoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_pago" | "tipo_pago", ExtArgs["result"]["metodo_pago"]>;
export type metodo_pagoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura?: boolean | Prisma.metodo_pago$facturaArgs<ExtArgs>;
    _count?: boolean | Prisma.Metodo_pagoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $metodo_pagoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "metodo_pago";
    objects: {
        factura: Prisma.$facturaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_pago: number;
        tipo_pago: string;
    }, ExtArgs["result"]["metodo_pago"]>;
    composites: {};
};
export type metodo_pagoGetPayload<S extends boolean | null | undefined | metodo_pagoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$metodo_pagoPayload, S>;
export type metodo_pagoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<metodo_pagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Metodo_pagoCountAggregateInputType | true;
};
export interface metodo_pagoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['metodo_pago'];
        meta: {
            name: 'metodo_pago';
        };
    };
    findUnique<T extends metodo_pagoFindUniqueArgs>(args: Prisma.SelectSubset<T, metodo_pagoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__metodo_pagoClient<runtime.Types.Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends metodo_pagoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, metodo_pagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__metodo_pagoClient<runtime.Types.Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends metodo_pagoFindFirstArgs>(args?: Prisma.SelectSubset<T, metodo_pagoFindFirstArgs<ExtArgs>>): Prisma.Prisma__metodo_pagoClient<runtime.Types.Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends metodo_pagoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, metodo_pagoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__metodo_pagoClient<runtime.Types.Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends metodo_pagoFindManyArgs>(args?: Prisma.SelectSubset<T, metodo_pagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends metodo_pagoCreateArgs>(args: Prisma.SelectSubset<T, metodo_pagoCreateArgs<ExtArgs>>): Prisma.Prisma__metodo_pagoClient<runtime.Types.Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends metodo_pagoCreateManyArgs>(args?: Prisma.SelectSubset<T, metodo_pagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends metodo_pagoDeleteArgs>(args: Prisma.SelectSubset<T, metodo_pagoDeleteArgs<ExtArgs>>): Prisma.Prisma__metodo_pagoClient<runtime.Types.Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends metodo_pagoUpdateArgs>(args: Prisma.SelectSubset<T, metodo_pagoUpdateArgs<ExtArgs>>): Prisma.Prisma__metodo_pagoClient<runtime.Types.Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends metodo_pagoDeleteManyArgs>(args?: Prisma.SelectSubset<T, metodo_pagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends metodo_pagoUpdateManyArgs>(args: Prisma.SelectSubset<T, metodo_pagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends metodo_pagoUpsertArgs>(args: Prisma.SelectSubset<T, metodo_pagoUpsertArgs<ExtArgs>>): Prisma.Prisma__metodo_pagoClient<runtime.Types.Result.GetResult<Prisma.$metodo_pagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends metodo_pagoCountArgs>(args?: Prisma.Subset<T, metodo_pagoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Metodo_pagoCountAggregateOutputType> : number>;
    aggregate<T extends Metodo_pagoAggregateArgs>(args: Prisma.Subset<T, Metodo_pagoAggregateArgs>): Prisma.PrismaPromise<GetMetodo_pagoAggregateType<T>>;
    groupBy<T extends metodo_pagoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: metodo_pagoGroupByArgs['orderBy'];
    } : {
        orderBy?: metodo_pagoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, metodo_pagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetodo_pagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: metodo_pagoFieldRefs;
}
export interface Prisma__metodo_pagoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    factura<T extends Prisma.metodo_pago$facturaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.metodo_pago$facturaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface metodo_pagoFieldRefs {
    readonly id_pago: Prisma.FieldRef<"metodo_pago", 'Int'>;
    readonly tipo_pago: Prisma.FieldRef<"metodo_pago", 'String'>;
}
export type metodo_pagoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.metodo_pagoSelect<ExtArgs> | null;
    omit?: Prisma.metodo_pagoOmit<ExtArgs> | null;
    include?: Prisma.metodo_pagoInclude<ExtArgs> | null;
    where: Prisma.metodo_pagoWhereUniqueInput;
};
export type metodo_pagoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.metodo_pagoSelect<ExtArgs> | null;
    omit?: Prisma.metodo_pagoOmit<ExtArgs> | null;
    include?: Prisma.metodo_pagoInclude<ExtArgs> | null;
    where: Prisma.metodo_pagoWhereUniqueInput;
};
export type metodo_pagoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.metodo_pagoSelect<ExtArgs> | null;
    omit?: Prisma.metodo_pagoOmit<ExtArgs> | null;
    include?: Prisma.metodo_pagoInclude<ExtArgs> | null;
    where?: Prisma.metodo_pagoWhereInput;
    orderBy?: Prisma.metodo_pagoOrderByWithRelationInput | Prisma.metodo_pagoOrderByWithRelationInput[];
    cursor?: Prisma.metodo_pagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Metodo_pagoScalarFieldEnum | Prisma.Metodo_pagoScalarFieldEnum[];
};
export type metodo_pagoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.metodo_pagoSelect<ExtArgs> | null;
    omit?: Prisma.metodo_pagoOmit<ExtArgs> | null;
    include?: Prisma.metodo_pagoInclude<ExtArgs> | null;
    where?: Prisma.metodo_pagoWhereInput;
    orderBy?: Prisma.metodo_pagoOrderByWithRelationInput | Prisma.metodo_pagoOrderByWithRelationInput[];
    cursor?: Prisma.metodo_pagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Metodo_pagoScalarFieldEnum | Prisma.Metodo_pagoScalarFieldEnum[];
};
export type metodo_pagoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.metodo_pagoSelect<ExtArgs> | null;
    omit?: Prisma.metodo_pagoOmit<ExtArgs> | null;
    include?: Prisma.metodo_pagoInclude<ExtArgs> | null;
    where?: Prisma.metodo_pagoWhereInput;
    orderBy?: Prisma.metodo_pagoOrderByWithRelationInput | Prisma.metodo_pagoOrderByWithRelationInput[];
    cursor?: Prisma.metodo_pagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Metodo_pagoScalarFieldEnum | Prisma.Metodo_pagoScalarFieldEnum[];
};
export type metodo_pagoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.metodo_pagoSelect<ExtArgs> | null;
    omit?: Prisma.metodo_pagoOmit<ExtArgs> | null;
    include?: Prisma.metodo_pagoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.metodo_pagoCreateInput, Prisma.metodo_pagoUncheckedCreateInput>;
};
export type metodo_pagoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.metodo_pagoCreateManyInput | Prisma.metodo_pagoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type metodo_pagoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.metodo_pagoSelect<ExtArgs> | null;
    omit?: Prisma.metodo_pagoOmit<ExtArgs> | null;
    include?: Prisma.metodo_pagoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.metodo_pagoUpdateInput, Prisma.metodo_pagoUncheckedUpdateInput>;
    where: Prisma.metodo_pagoWhereUniqueInput;
};
export type metodo_pagoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.metodo_pagoUpdateManyMutationInput, Prisma.metodo_pagoUncheckedUpdateManyInput>;
    where?: Prisma.metodo_pagoWhereInput;
    limit?: number;
};
export type metodo_pagoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.metodo_pagoSelect<ExtArgs> | null;
    omit?: Prisma.metodo_pagoOmit<ExtArgs> | null;
    include?: Prisma.metodo_pagoInclude<ExtArgs> | null;
    where: Prisma.metodo_pagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.metodo_pagoCreateInput, Prisma.metodo_pagoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.metodo_pagoUpdateInput, Prisma.metodo_pagoUncheckedUpdateInput>;
};
export type metodo_pagoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.metodo_pagoSelect<ExtArgs> | null;
    omit?: Prisma.metodo_pagoOmit<ExtArgs> | null;
    include?: Prisma.metodo_pagoInclude<ExtArgs> | null;
    where: Prisma.metodo_pagoWhereUniqueInput;
};
export type metodo_pagoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.metodo_pagoWhereInput;
    limit?: number;
};
export type metodo_pago$facturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type metodo_pagoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.metodo_pagoSelect<ExtArgs> | null;
    omit?: Prisma.metodo_pagoOmit<ExtArgs> | null;
    include?: Prisma.metodo_pagoInclude<ExtArgs> | null;
};
