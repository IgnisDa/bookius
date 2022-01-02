import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ID } from '@nestjs/graphql';

export enum UserProfileScalarFieldEnum {
    id = "id",
    userId = "userId",
    bio = "bio",
    age = "age",
    username = "username",
    email = "email",
    updatedAt = "updatedAt",
    countryId = "countryId"
}

export enum UserScalarFieldEnum {
    id = "id",
    issuer = "issuer",
    createdAt = "createdAt"
}

export enum ShelfScalarFieldEnum {
    id = "id",
    name = "name",
    userId = "userId",
    description = "description",
    isPublic = "isPublic",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum ArchitectRole {
    AUTHOR = "AUTHOR",
    ILLUSTRATOR = "ILLUSTRATOR"
}

export enum BookProgressLogScalarFieldEnum {
    id = "id",
    bookId = "bookId",
    userId = "userId",
    percentage = "percentage",
    numPages = "numPages",
    startedOn = "startedOn",
    updatedOn = "updatedOn"
}

export enum BookScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    isbn = "isbn",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum AuthorScalarFieldEnum {
    id = "id",
    name = "name",
    bio = "bio",
    openLibraryKey = "openLibraryKey",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ArchitectsOnBooksScalarFieldEnum {
    bookId = "bookId",
    authorId = "authorId",
    role = "role"
}

registerEnumType(ArchitectsOnBooksScalarFieldEnum, { name: 'ArchitectsOnBooksScalarFieldEnum', description: undefined })
registerEnumType(AuthorScalarFieldEnum, { name: 'AuthorScalarFieldEnum', description: undefined })
registerEnumType(BookScalarFieldEnum, { name: 'BookScalarFieldEnum', description: undefined })
registerEnumType(BookProgressLogScalarFieldEnum, { name: 'BookProgressLogScalarFieldEnum', description: undefined })
registerEnumType(ArchitectRole, { name: 'ArchitectRole', description: "The role of a person in the complete production of a book" })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(ShelfScalarFieldEnum, { name: 'ShelfScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
registerEnumType(UserProfileScalarFieldEnum, { name: 'UserProfileScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateArchitectsOnBooks {
    @Field(() => ArchitectsOnBooksCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ArchitectsOnBooksCountAggregate>;
    @Field(() => ArchitectsOnBooksAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ArchitectsOnBooksAvgAggregate>;
    @Field(() => ArchitectsOnBooksSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ArchitectsOnBooksSumAggregate>;
    @Field(() => ArchitectsOnBooksMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ArchitectsOnBooksMinAggregate>;
    @Field(() => ArchitectsOnBooksMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ArchitectsOnBooksMaxAggregate>;
}

@ArgsType()
export class ArchitectsOnBooksAggregateArgs {
    @Field(() => ArchitectsOnBooksWhereInput, {nullable:true})
    where?: InstanceType<typeof ArchitectsOnBooksWhereInput>;
    @Field(() => [ArchitectsOnBooksOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ArchitectsOnBooksOrderByWithRelationInput>;
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ArchitectsOnBooksCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ArchitectsOnBooksCountAggregateInput>;
    @Field(() => ArchitectsOnBooksAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ArchitectsOnBooksAvgAggregateInput>;
    @Field(() => ArchitectsOnBooksSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ArchitectsOnBooksSumAggregateInput>;
    @Field(() => ArchitectsOnBooksMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ArchitectsOnBooksMinAggregateInput>;
    @Field(() => ArchitectsOnBooksMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ArchitectsOnBooksMaxAggregateInput>;
}

@InputType()
export class ArchitectsOnBooksAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
}

@ObjectType()
export class ArchitectsOnBooksAvgAggregate {
    @Field(() => Float, {nullable:true})
    bookId?: number;
    @Field(() => Float, {nullable:true})
    authorId?: number;
}

@InputType()
export class ArchitectsOnBooksAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
}

@InputType()
export class ArchitectsOnBooksBookIdAuthorIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => String, {nullable:false})
    authorId!: bigint | number;
}

@InputType()
export class ArchitectsOnBooksBookIdAuthorIdRoleCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => String, {nullable:false})
    authorId!: bigint | number;
    @Field(() => ArchitectRole, {nullable:false})
    role!: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ArchitectsOnBooksCountAggregate {
    @Field(() => Int, {nullable:false})
    bookId!: number;
    @Field(() => Int, {nullable:false})
    authorId!: number;
    @Field(() => Int, {nullable:false})
    role!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ArchitectsOnBooksCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
}

@InputType()
export class ArchitectsOnBooksCreateManyAuthorInputEnvelope {
    @Field(() => [ArchitectsOnBooksCreateManyAuthorInput], {nullable:false})
    data!: Array<ArchitectsOnBooksCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ArchitectsOnBooksCreateManyAuthorInput {
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => ArchitectRole, {nullable:false})
    role!: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksCreateManyBookInputEnvelope {
    @Field(() => [ArchitectsOnBooksCreateManyBookInput], {nullable:false})
    data!: Array<ArchitectsOnBooksCreateManyBookInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ArchitectsOnBooksCreateManyBookInput {
    @Field(() => String, {nullable:false})
    authorId!: bigint | number;
    @Field(() => ArchitectRole, {nullable:false})
    role!: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksCreateManyInput {
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => String, {nullable:false})
    authorId!: bigint | number;
    @Field(() => ArchitectRole, {nullable:false})
    role!: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksCreateNestedManyWithoutAuthorInput {
    @Field(() => [ArchitectsOnBooksCreateWithoutAuthorInput], {nullable:true})
    create?: Array<ArchitectsOnBooksCreateWithoutAuthorInput>;
    @Field(() => [ArchitectsOnBooksCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<ArchitectsOnBooksCreateOrConnectWithoutAuthorInput>;
    @Field(() => ArchitectsOnBooksCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ArchitectsOnBooksCreateManyAuthorInputEnvelope>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    connect?: Array<ArchitectsOnBooksWhereUniqueInput>;
}

@InputType()
export class ArchitectsOnBooksCreateNestedManyWithoutBookInput {
    @Field(() => [ArchitectsOnBooksCreateWithoutBookInput], {nullable:true})
    create?: Array<ArchitectsOnBooksCreateWithoutBookInput>;
    @Field(() => [ArchitectsOnBooksCreateOrConnectWithoutBookInput], {nullable:true})
    connectOrCreate?: Array<ArchitectsOnBooksCreateOrConnectWithoutBookInput>;
    @Field(() => ArchitectsOnBooksCreateManyBookInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ArchitectsOnBooksCreateManyBookInputEnvelope>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    connect?: Array<ArchitectsOnBooksWhereUniqueInput>;
}

@InputType()
export class ArchitectsOnBooksCreateOrConnectWithoutAuthorInput {
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => ArchitectsOnBooksCreateWithoutAuthorInput, {nullable:false})
    create!: InstanceType<typeof ArchitectsOnBooksCreateWithoutAuthorInput>;
}

@InputType()
export class ArchitectsOnBooksCreateOrConnectWithoutBookInput {
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => ArchitectsOnBooksCreateWithoutBookInput, {nullable:false})
    create!: InstanceType<typeof ArchitectsOnBooksCreateWithoutBookInput>;
}

@InputType()
export class ArchitectsOnBooksCreateWithoutAuthorInput {
    @Field(() => ArchitectRole, {nullable:false})
    role!: keyof typeof ArchitectRole;
    @Field(() => BookCreateNestedOneWithoutArchitectsInput, {nullable:false})
    book!: InstanceType<typeof BookCreateNestedOneWithoutArchitectsInput>;
}

@InputType()
export class ArchitectsOnBooksCreateWithoutBookInput {
    @Field(() => ArchitectRole, {nullable:false})
    role!: keyof typeof ArchitectRole;
    @Field(() => AuthorCreateNestedOneWithoutBooksInput, {nullable:false})
    author!: InstanceType<typeof AuthorCreateNestedOneWithoutBooksInput>;
}

@InputType()
export class ArchitectsOnBooksCreateInput {
    @Field(() => ArchitectRole, {nullable:false})
    role!: keyof typeof ArchitectRole;
    @Field(() => BookCreateNestedOneWithoutArchitectsInput, {nullable:false})
    book!: InstanceType<typeof BookCreateNestedOneWithoutArchitectsInput>;
    @Field(() => AuthorCreateNestedOneWithoutBooksInput, {nullable:false})
    author!: InstanceType<typeof AuthorCreateNestedOneWithoutBooksInput>;
}

@ArgsType()
export class ArchitectsOnBooksGroupByArgs {
    @Field(() => ArchitectsOnBooksWhereInput, {nullable:true})
    where?: InstanceType<typeof ArchitectsOnBooksWhereInput>;
    @Field(() => [ArchitectsOnBooksOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ArchitectsOnBooksOrderByWithAggregationInput>;
    @Field(() => [ArchitectsOnBooksScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ArchitectsOnBooksScalarFieldEnum>;
    @Field(() => ArchitectsOnBooksScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ArchitectsOnBooksScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ArchitectsOnBooksCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ArchitectsOnBooksCountAggregateInput>;
    @Field(() => ArchitectsOnBooksAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ArchitectsOnBooksAvgAggregateInput>;
    @Field(() => ArchitectsOnBooksSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ArchitectsOnBooksSumAggregateInput>;
    @Field(() => ArchitectsOnBooksMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ArchitectsOnBooksMinAggregateInput>;
    @Field(() => ArchitectsOnBooksMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ArchitectsOnBooksMaxAggregateInput>;
}

@ObjectType()
export class ArchitectsOnBooksGroupBy {
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => String, {nullable:false})
    authorId!: bigint | number;
    @Field(() => ArchitectRole, {nullable:false})
    role!: keyof typeof ArchitectRole;
    @Field(() => ArchitectsOnBooksCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ArchitectsOnBooksCountAggregate>;
    @Field(() => ArchitectsOnBooksAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ArchitectsOnBooksAvgAggregate>;
    @Field(() => ArchitectsOnBooksSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ArchitectsOnBooksSumAggregate>;
    @Field(() => ArchitectsOnBooksMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ArchitectsOnBooksMinAggregate>;
    @Field(() => ArchitectsOnBooksMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ArchitectsOnBooksMaxAggregate>;
}

@InputType()
export class ArchitectsOnBooksListRelationFilter {
    @Field(() => ArchitectsOnBooksWhereInput, {nullable:true})
    every?: InstanceType<typeof ArchitectsOnBooksWhereInput>;
    @Field(() => ArchitectsOnBooksWhereInput, {nullable:true})
    some?: InstanceType<typeof ArchitectsOnBooksWhereInput>;
    @Field(() => ArchitectsOnBooksWhereInput, {nullable:true})
    none?: InstanceType<typeof ArchitectsOnBooksWhereInput>;
}

@InputType()
export class ArchitectsOnBooksMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
}

@ObjectType()
export class ArchitectsOnBooksMaxAggregate {
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => String, {nullable:true})
    authorId?: bigint | number;
    @Field(() => ArchitectRole, {nullable:true})
    role?: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
}

@InputType()
export class ArchitectsOnBooksMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
}

@ObjectType()
export class ArchitectsOnBooksMinAggregate {
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => String, {nullable:true})
    authorId?: bigint | number;
    @Field(() => ArchitectRole, {nullable:true})
    role?: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
}

@InputType()
export class ArchitectsOnBooksOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ArchitectsOnBooksOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => ArchitectsOnBooksCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ArchitectsOnBooksCountOrderByAggregateInput>;
    @Field(() => ArchitectsOnBooksAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ArchitectsOnBooksAvgOrderByAggregateInput>;
    @Field(() => ArchitectsOnBooksMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ArchitectsOnBooksMaxOrderByAggregateInput>;
    @Field(() => ArchitectsOnBooksMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ArchitectsOnBooksMinOrderByAggregateInput>;
    @Field(() => ArchitectsOnBooksSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ArchitectsOnBooksSumOrderByAggregateInput>;
}

@InputType()
export class ArchitectsOnBooksOrderByWithRelationInput {
    @Field(() => BookOrderByWithRelationInput, {nullable:true})
    book?: InstanceType<typeof BookOrderByWithRelationInput>;
    @Field(() => AuthorOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof AuthorOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
}

@InputType()
export class ArchitectsOnBooksScalarWhereWithAggregatesInput {
    @Field(() => [ArchitectsOnBooksScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ArchitectsOnBooksScalarWhereWithAggregatesInput>;
    @Field(() => [ArchitectsOnBooksScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ArchitectsOnBooksScalarWhereWithAggregatesInput>;
    @Field(() => [ArchitectsOnBooksScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ArchitectsOnBooksScalarWhereWithAggregatesInput>;
    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    bookId?: InstanceType<typeof BigIntWithAggregatesFilter>;
    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    authorId?: InstanceType<typeof BigIntWithAggregatesFilter>;
    @Field(() => EnumArchitectRoleWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof EnumArchitectRoleWithAggregatesFilter>;
}

@InputType()
export class ArchitectsOnBooksScalarWhereInput {
    @Field(() => [ArchitectsOnBooksScalarWhereInput], {nullable:true})
    AND?: Array<ArchitectsOnBooksScalarWhereInput>;
    @Field(() => [ArchitectsOnBooksScalarWhereInput], {nullable:true})
    OR?: Array<ArchitectsOnBooksScalarWhereInput>;
    @Field(() => [ArchitectsOnBooksScalarWhereInput], {nullable:true})
    NOT?: Array<ArchitectsOnBooksScalarWhereInput>;
    @Field(() => BigIntFilter, {nullable:true})
    bookId?: InstanceType<typeof BigIntFilter>;
    @Field(() => BigIntFilter, {nullable:true})
    authorId?: InstanceType<typeof BigIntFilter>;
    @Field(() => EnumArchitectRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumArchitectRoleFilter>;
}

@InputType()
export class ArchitectsOnBooksSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
}

@ObjectType()
export class ArchitectsOnBooksSumAggregate {
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => String, {nullable:true})
    authorId?: bigint | number;
}

@InputType()
export class ArchitectsOnBooksSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
}

@InputType()
export class ArchitectsOnBooksUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [ArchitectsOnBooksCreateWithoutAuthorInput], {nullable:true})
    create?: Array<ArchitectsOnBooksCreateWithoutAuthorInput>;
    @Field(() => [ArchitectsOnBooksCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<ArchitectsOnBooksCreateOrConnectWithoutAuthorInput>;
    @Field(() => ArchitectsOnBooksCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ArchitectsOnBooksCreateManyAuthorInputEnvelope>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    connect?: Array<ArchitectsOnBooksWhereUniqueInput>;
}

@InputType()
export class ArchitectsOnBooksUncheckedCreateNestedManyWithoutBookInput {
    @Field(() => [ArchitectsOnBooksCreateWithoutBookInput], {nullable:true})
    create?: Array<ArchitectsOnBooksCreateWithoutBookInput>;
    @Field(() => [ArchitectsOnBooksCreateOrConnectWithoutBookInput], {nullable:true})
    connectOrCreate?: Array<ArchitectsOnBooksCreateOrConnectWithoutBookInput>;
    @Field(() => ArchitectsOnBooksCreateManyBookInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ArchitectsOnBooksCreateManyBookInputEnvelope>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    connect?: Array<ArchitectsOnBooksWhereUniqueInput>;
}

@InputType()
export class ArchitectsOnBooksUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => ArchitectRole, {nullable:false})
    role!: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksUncheckedCreateWithoutBookInput {
    @Field(() => String, {nullable:false})
    authorId!: bigint | number;
    @Field(() => ArchitectRole, {nullable:false})
    role!: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => String, {nullable:false})
    authorId!: bigint | number;
    @Field(() => ArchitectRole, {nullable:false})
    role!: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksUncheckedUpdateManyWithoutArchitectsInput {
    @Field(() => String, {nullable:true})
    authorId?: bigint | number;
    @Field(() => ArchitectRole, {nullable:true})
    role?: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksUncheckedUpdateManyWithoutAuthorInput {
    @Field(() => [ArchitectsOnBooksCreateWithoutAuthorInput], {nullable:true})
    create?: Array<ArchitectsOnBooksCreateWithoutAuthorInput>;
    @Field(() => [ArchitectsOnBooksCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<ArchitectsOnBooksCreateOrConnectWithoutAuthorInput>;
    @Field(() => [ArchitectsOnBooksUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<ArchitectsOnBooksUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => ArchitectsOnBooksCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ArchitectsOnBooksCreateManyAuthorInputEnvelope>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    set?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    disconnect?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    delete?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    connect?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<ArchitectsOnBooksUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [ArchitectsOnBooksUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<ArchitectsOnBooksUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [ArchitectsOnBooksScalarWhereInput], {nullable:true})
    deleteMany?: Array<ArchitectsOnBooksScalarWhereInput>;
}

@InputType()
export class ArchitectsOnBooksUncheckedUpdateManyWithoutBookInput {
    @Field(() => [ArchitectsOnBooksCreateWithoutBookInput], {nullable:true})
    create?: Array<ArchitectsOnBooksCreateWithoutBookInput>;
    @Field(() => [ArchitectsOnBooksCreateOrConnectWithoutBookInput], {nullable:true})
    connectOrCreate?: Array<ArchitectsOnBooksCreateOrConnectWithoutBookInput>;
    @Field(() => [ArchitectsOnBooksUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    upsert?: Array<ArchitectsOnBooksUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => ArchitectsOnBooksCreateManyBookInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ArchitectsOnBooksCreateManyBookInputEnvelope>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    set?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    disconnect?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    delete?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    connect?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    update?: Array<ArchitectsOnBooksUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [ArchitectsOnBooksUpdateManyWithWhereWithoutBookInput], {nullable:true})
    updateMany?: Array<ArchitectsOnBooksUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [ArchitectsOnBooksScalarWhereInput], {nullable:true})
    deleteMany?: Array<ArchitectsOnBooksScalarWhereInput>;
}

@InputType()
export class ArchitectsOnBooksUncheckedUpdateManyWithoutBooksInput {
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => ArchitectRole, {nullable:true})
    role?: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => String, {nullable:true})
    authorId?: bigint | number;
    @Field(() => ArchitectRole, {nullable:true})
    role?: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksUncheckedUpdateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => ArchitectRole, {nullable:true})
    role?: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksUncheckedUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    authorId?: bigint | number;
    @Field(() => ArchitectRole, {nullable:true})
    role?: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => String, {nullable:true})
    authorId?: bigint | number;
    @Field(() => ArchitectRole, {nullable:true})
    role?: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksUpdateManyMutationInput {
    @Field(() => ArchitectRole, {nullable:true})
    role?: keyof typeof ArchitectRole;
}

@InputType()
export class ArchitectsOnBooksUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => ArchitectsOnBooksScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ArchitectsOnBooksScalarWhereInput>;
    @Field(() => ArchitectsOnBooksUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ArchitectsOnBooksUpdateManyMutationInput>;
}

@InputType()
export class ArchitectsOnBooksUpdateManyWithWhereWithoutBookInput {
    @Field(() => ArchitectsOnBooksScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ArchitectsOnBooksScalarWhereInput>;
    @Field(() => ArchitectsOnBooksUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ArchitectsOnBooksUpdateManyMutationInput>;
}

@InputType()
export class ArchitectsOnBooksUpdateManyWithoutAuthorInput {
    @Field(() => [ArchitectsOnBooksCreateWithoutAuthorInput], {nullable:true})
    create?: Array<ArchitectsOnBooksCreateWithoutAuthorInput>;
    @Field(() => [ArchitectsOnBooksCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<ArchitectsOnBooksCreateOrConnectWithoutAuthorInput>;
    @Field(() => [ArchitectsOnBooksUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<ArchitectsOnBooksUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => ArchitectsOnBooksCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ArchitectsOnBooksCreateManyAuthorInputEnvelope>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    set?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    disconnect?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    delete?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    connect?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<ArchitectsOnBooksUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [ArchitectsOnBooksUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<ArchitectsOnBooksUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [ArchitectsOnBooksScalarWhereInput], {nullable:true})
    deleteMany?: Array<ArchitectsOnBooksScalarWhereInput>;
}

@InputType()
export class ArchitectsOnBooksUpdateManyWithoutBookInput {
    @Field(() => [ArchitectsOnBooksCreateWithoutBookInput], {nullable:true})
    create?: Array<ArchitectsOnBooksCreateWithoutBookInput>;
    @Field(() => [ArchitectsOnBooksCreateOrConnectWithoutBookInput], {nullable:true})
    connectOrCreate?: Array<ArchitectsOnBooksCreateOrConnectWithoutBookInput>;
    @Field(() => [ArchitectsOnBooksUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    upsert?: Array<ArchitectsOnBooksUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => ArchitectsOnBooksCreateManyBookInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ArchitectsOnBooksCreateManyBookInputEnvelope>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    set?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    disconnect?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    delete?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksWhereUniqueInput], {nullable:true})
    connect?: Array<ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => [ArchitectsOnBooksUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    update?: Array<ArchitectsOnBooksUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [ArchitectsOnBooksUpdateManyWithWhereWithoutBookInput], {nullable:true})
    updateMany?: Array<ArchitectsOnBooksUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [ArchitectsOnBooksScalarWhereInput], {nullable:true})
    deleteMany?: Array<ArchitectsOnBooksScalarWhereInput>;
}

@InputType()
export class ArchitectsOnBooksUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => ArchitectsOnBooksUpdateWithoutAuthorInput, {nullable:false})
    data!: InstanceType<typeof ArchitectsOnBooksUpdateWithoutAuthorInput>;
}

@InputType()
export class ArchitectsOnBooksUpdateWithWhereUniqueWithoutBookInput {
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => ArchitectsOnBooksUpdateWithoutBookInput, {nullable:false})
    data!: InstanceType<typeof ArchitectsOnBooksUpdateWithoutBookInput>;
}

@InputType()
export class ArchitectsOnBooksUpdateWithoutAuthorInput {
    @Field(() => ArchitectRole, {nullable:true})
    role?: keyof typeof ArchitectRole;
    @Field(() => BookUpdateOneRequiredWithoutArchitectsInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneRequiredWithoutArchitectsInput>;
}

@InputType()
export class ArchitectsOnBooksUpdateWithoutBookInput {
    @Field(() => ArchitectRole, {nullable:true})
    role?: keyof typeof ArchitectRole;
    @Field(() => AuthorUpdateOneRequiredWithoutBooksInput, {nullable:true})
    author?: InstanceType<typeof AuthorUpdateOneRequiredWithoutBooksInput>;
}

@InputType()
export class ArchitectsOnBooksUpdateInput {
    @Field(() => ArchitectRole, {nullable:true})
    role?: keyof typeof ArchitectRole;
    @Field(() => BookUpdateOneRequiredWithoutArchitectsInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneRequiredWithoutArchitectsInput>;
    @Field(() => AuthorUpdateOneRequiredWithoutBooksInput, {nullable:true})
    author?: InstanceType<typeof AuthorUpdateOneRequiredWithoutBooksInput>;
}

@InputType()
export class ArchitectsOnBooksUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => ArchitectsOnBooksUpdateWithoutAuthorInput, {nullable:false})
    update!: InstanceType<typeof ArchitectsOnBooksUpdateWithoutAuthorInput>;
    @Field(() => ArchitectsOnBooksCreateWithoutAuthorInput, {nullable:false})
    create!: InstanceType<typeof ArchitectsOnBooksCreateWithoutAuthorInput>;
}

@InputType()
export class ArchitectsOnBooksUpsertWithWhereUniqueWithoutBookInput {
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => ArchitectsOnBooksUpdateWithoutBookInput, {nullable:false})
    update!: InstanceType<typeof ArchitectsOnBooksUpdateWithoutBookInput>;
    @Field(() => ArchitectsOnBooksCreateWithoutBookInput, {nullable:false})
    create!: InstanceType<typeof ArchitectsOnBooksCreateWithoutBookInput>;
}

@InputType()
export class ArchitectsOnBooksWhereUniqueInput {
    @Field(() => ArchitectsOnBooksBookIdAuthorIdRoleCompoundUniqueInput, {nullable:true})
    bookId_authorId_role?: InstanceType<typeof ArchitectsOnBooksBookIdAuthorIdRoleCompoundUniqueInput>;
    @Field(() => ArchitectsOnBooksBookIdAuthorIdCompoundUniqueInput, {nullable:true})
    bookId_authorId?: InstanceType<typeof ArchitectsOnBooksBookIdAuthorIdCompoundUniqueInput>;
}

@InputType()
export class ArchitectsOnBooksWhereInput {
    @Field(() => [ArchitectsOnBooksWhereInput], {nullable:true})
    AND?: Array<ArchitectsOnBooksWhereInput>;
    @Field(() => [ArchitectsOnBooksWhereInput], {nullable:true})
    OR?: Array<ArchitectsOnBooksWhereInput>;
    @Field(() => [ArchitectsOnBooksWhereInput], {nullable:true})
    NOT?: Array<ArchitectsOnBooksWhereInput>;
    @Field(() => BookRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookRelationFilter>;
    @Field(() => AuthorRelationFilter, {nullable:true})
    author?: InstanceType<typeof AuthorRelationFilter>;
    @Field(() => BigIntFilter, {nullable:true})
    bookId?: InstanceType<typeof BigIntFilter>;
    @Field(() => BigIntFilter, {nullable:true})
    authorId?: InstanceType<typeof BigIntFilter>;
    @Field(() => EnumArchitectRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumArchitectRoleFilter>;
}

/** The people who have worked on a book */
@ObjectType({description:'The people who have worked on a book'})
export class ArchitectsOnBooks {
    @Field(() => Book, {nullable:false})
    book?: InstanceType<typeof Book>;
    @Field(() => Author, {nullable:false})
    author?: InstanceType<typeof Author>;
    @Field(() => String, {nullable:false})
    bookId!: bigint;
    @Field(() => String, {nullable:false})
    authorId!: bigint;
    @Field(() => ArchitectRole, {nullable:false})
    role!: keyof typeof ArchitectRole;
}

@ArgsType()
export class CreateManyArchitectsOnBooksArgs {
    @Field(() => [ArchitectsOnBooksCreateManyInput], {nullable:false})
    data!: Array<ArchitectsOnBooksCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneArchitectsOnBooksArgs {
    @Field(() => ArchitectsOnBooksCreateInput, {nullable:false})
    data!: InstanceType<typeof ArchitectsOnBooksCreateInput>;
}

@ArgsType()
export class DeleteManyArchitectsOnBooksArgs {
    @Field(() => ArchitectsOnBooksWhereInput, {nullable:true})
    where?: InstanceType<typeof ArchitectsOnBooksWhereInput>;
}

@ArgsType()
export class DeleteOneArchitectsOnBooksArgs {
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
}

@ArgsType()
export class FindFirstArchitectsOnBooksArgs {
    @Field(() => ArchitectsOnBooksWhereInput, {nullable:true})
    where?: InstanceType<typeof ArchitectsOnBooksWhereInput>;
    @Field(() => [ArchitectsOnBooksOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ArchitectsOnBooksOrderByWithRelationInput>;
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ArchitectsOnBooksScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ArchitectsOnBooksScalarFieldEnum>;
}

@ArgsType()
export class FindManyArchitectsOnBooksArgs {
    @Field(() => ArchitectsOnBooksWhereInput, {nullable:true})
    where?: InstanceType<typeof ArchitectsOnBooksWhereInput>;
    @Field(() => [ArchitectsOnBooksOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ArchitectsOnBooksOrderByWithRelationInput>;
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ArchitectsOnBooksScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ArchitectsOnBooksScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueArchitectsOnBooksArgs {
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyArchitectsOnBooksArgs {
    @Field(() => ArchitectsOnBooksUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ArchitectsOnBooksUpdateManyMutationInput>;
    @Field(() => ArchitectsOnBooksWhereInput, {nullable:true})
    where?: InstanceType<typeof ArchitectsOnBooksWhereInput>;
}

@ArgsType()
export class UpdateOneArchitectsOnBooksArgs {
    @Field(() => ArchitectsOnBooksUpdateInput, {nullable:false})
    data!: InstanceType<typeof ArchitectsOnBooksUpdateInput>;
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneArchitectsOnBooksArgs {
    @Field(() => ArchitectsOnBooksWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ArchitectsOnBooksWhereUniqueInput>;
    @Field(() => ArchitectsOnBooksCreateInput, {nullable:false})
    create!: InstanceType<typeof ArchitectsOnBooksCreateInput>;
    @Field(() => ArchitectsOnBooksUpdateInput, {nullable:false})
    update!: InstanceType<typeof ArchitectsOnBooksUpdateInput>;
}

@ObjectType()
export class AggregateAuthor {
    @Field(() => AuthorCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AuthorCountAggregate>;
    @Field(() => AuthorAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof AuthorAvgAggregate>;
    @Field(() => AuthorSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof AuthorSumAggregate>;
    @Field(() => AuthorMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AuthorMinAggregate>;
    @Field(() => AuthorMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AuthorMaxAggregate>;
}

@ArgsType()
export class AuthorAggregateArgs {
    @Field(() => AuthorWhereInput, {nullable:true})
    where?: InstanceType<typeof AuthorWhereInput>;
    @Field(() => [AuthorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthorOrderByWithRelationInput>;
    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AuthorWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AuthorCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AuthorCountAggregateInput>;
    @Field(() => AuthorAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof AuthorAvgAggregateInput>;
    @Field(() => AuthorSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof AuthorSumAggregateInput>;
    @Field(() => AuthorMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AuthorMinAggregateInput>;
    @Field(() => AuthorMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AuthorMaxAggregateInput>;
}

@InputType()
export class AuthorAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class AuthorAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class AuthorAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class AuthorCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    openLibraryKey?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class AuthorCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    bio!: number;
    @Field(() => Int, {nullable:false})
    openLibraryKey!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class AuthorCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    openLibraryKey?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class AuthorCount {
    @Field(() => Int, {nullable:false})
    books!: number;
}

@InputType()
export class AuthorCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:false})
    openLibraryKey!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class AuthorCreateNestedOneWithoutBooksInput {
    @Field(() => AuthorCreateWithoutBooksInput, {nullable:true})
    create?: InstanceType<typeof AuthorCreateWithoutBooksInput>;
    @Field(() => AuthorCreateOrConnectWithoutBooksInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof AuthorCreateOrConnectWithoutBooksInput>;
    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof AuthorWhereUniqueInput>;
}

@InputType()
export class AuthorCreateOrConnectWithoutBooksInput {
    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof AuthorWhereUniqueInput>;
    @Field(() => AuthorCreateWithoutBooksInput, {nullable:false})
    create!: InstanceType<typeof AuthorCreateWithoutBooksInput>;
}

@InputType()
export class AuthorCreateWithoutBooksInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:false})
    openLibraryKey!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class AuthorCreateInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:false})
    openLibraryKey!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksCreateNestedManyWithoutAuthorInput, {nullable:true})
    books?: InstanceType<typeof ArchitectsOnBooksCreateNestedManyWithoutAuthorInput>;
}

@ArgsType()
export class AuthorGroupByArgs {
    @Field(() => AuthorWhereInput, {nullable:true})
    where?: InstanceType<typeof AuthorWhereInput>;
    @Field(() => [AuthorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AuthorOrderByWithAggregationInput>;
    @Field(() => [AuthorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AuthorScalarFieldEnum>;
    @Field(() => AuthorScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof AuthorScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AuthorCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AuthorCountAggregateInput>;
    @Field(() => AuthorAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof AuthorAvgAggregateInput>;
    @Field(() => AuthorSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof AuthorSumAggregateInput>;
    @Field(() => AuthorMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AuthorMinAggregateInput>;
    @Field(() => AuthorMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AuthorMaxAggregateInput>;
}

@ObjectType()
export class AuthorGroupBy {
    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint | number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:false})
    openLibraryKey!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => AuthorCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AuthorCountAggregate>;
    @Field(() => AuthorAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof AuthorAvgAggregate>;
    @Field(() => AuthorSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof AuthorSumAggregate>;
    @Field(() => AuthorMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AuthorMinAggregate>;
    @Field(() => AuthorMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AuthorMaxAggregate>;
}

@InputType()
export class AuthorMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    openLibraryKey?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class AuthorMaxAggregate {
    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    openLibraryKey?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class AuthorMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    openLibraryKey?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class AuthorMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    openLibraryKey?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class AuthorMinAggregate {
    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    openLibraryKey?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class AuthorMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    openLibraryKey?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class AuthorOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    openLibraryKey?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => AuthorCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AuthorCountOrderByAggregateInput>;
    @Field(() => AuthorAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof AuthorAvgOrderByAggregateInput>;
    @Field(() => AuthorMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AuthorMaxOrderByAggregateInput>;
    @Field(() => AuthorMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AuthorMinOrderByAggregateInput>;
    @Field(() => AuthorSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof AuthorSumOrderByAggregateInput>;
}

@InputType()
export class AuthorOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    openLibraryKey?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ArchitectsOnBooksOrderByRelationAggregateInput, {nullable:true})
    books?: InstanceType<typeof ArchitectsOnBooksOrderByRelationAggregateInput>;
}

@InputType()
export class AuthorRelationFilter {
    @Field(() => AuthorWhereInput, {nullable:true})
    is?: InstanceType<typeof AuthorWhereInput>;
    @Field(() => AuthorWhereInput, {nullable:true})
    isNot?: InstanceType<typeof AuthorWhereInput>;
}

@InputType()
export class AuthorScalarWhereWithAggregatesInput {
    @Field(() => [AuthorScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuthorScalarWhereWithAggregatesInput>;
    @Field(() => [AuthorScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuthorScalarWhereWithAggregatesInput>;
    @Field(() => [AuthorScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuthorScalarWhereWithAggregatesInput>;
    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof BigIntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    bio?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    openLibraryKey?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class AuthorSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class AuthorSumAggregate {
    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;
}

@InputType()
export class AuthorSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class AuthorUncheckedCreateWithoutBooksInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:false})
    openLibraryKey!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class AuthorUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:false})
    openLibraryKey!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    books?: InstanceType<typeof ArchitectsOnBooksUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class AuthorUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    openLibraryKey?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class AuthorUncheckedUpdateWithoutBooksInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    openLibraryKey?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class AuthorUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    openLibraryKey?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    books?: InstanceType<typeof ArchitectsOnBooksUncheckedUpdateManyWithoutAuthorInput>;
}

@InputType()
export class AuthorUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    openLibraryKey?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class AuthorUpdateOneRequiredWithoutBooksInput {
    @Field(() => AuthorCreateWithoutBooksInput, {nullable:true})
    create?: InstanceType<typeof AuthorCreateWithoutBooksInput>;
    @Field(() => AuthorCreateOrConnectWithoutBooksInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof AuthorCreateOrConnectWithoutBooksInput>;
    @Field(() => AuthorUpsertWithoutBooksInput, {nullable:true})
    upsert?: InstanceType<typeof AuthorUpsertWithoutBooksInput>;
    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof AuthorWhereUniqueInput>;
    @Field(() => AuthorUpdateWithoutBooksInput, {nullable:true})
    update?: InstanceType<typeof AuthorUpdateWithoutBooksInput>;
}

@InputType()
export class AuthorUpdateWithoutBooksInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    openLibraryKey?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class AuthorUpdateInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    openLibraryKey?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksUpdateManyWithoutAuthorInput, {nullable:true})
    books?: InstanceType<typeof ArchitectsOnBooksUpdateManyWithoutAuthorInput>;
}

@InputType()
export class AuthorUpsertWithoutBooksInput {
    @Field(() => AuthorUpdateWithoutBooksInput, {nullable:false})
    update!: InstanceType<typeof AuthorUpdateWithoutBooksInput>;
    @Field(() => AuthorCreateWithoutBooksInput, {nullable:false})
    create!: InstanceType<typeof AuthorCreateWithoutBooksInput>;
}

@InputType()
export class AuthorWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
}

@InputType()
export class AuthorWhereInput {
    @Field(() => [AuthorWhereInput], {nullable:true})
    AND?: Array<AuthorWhereInput>;
    @Field(() => [AuthorWhereInput], {nullable:true})
    OR?: Array<AuthorWhereInput>;
    @Field(() => [AuthorWhereInput], {nullable:true})
    NOT?: Array<AuthorWhereInput>;
    @Field(() => BigIntFilter, {nullable:true})
    id?: InstanceType<typeof BigIntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    bio?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    openLibraryKey?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ArchitectsOnBooksListRelationFilter, {nullable:true})
    books?: InstanceType<typeof ArchitectsOnBooksListRelationFilter>;
}

/** This model will keep track of authors that will be made available to the users */
@ObjectType({description:'This model will keep track of authors that will be made available to the users'})
export class Author {
    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    bio!: string | null;
    @Field(() => String, {nullable:false})
    openLibraryKey!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [ArchitectsOnBooks], {nullable:true})
    books?: Array<ArchitectsOnBooks>;
    @Field(() => AuthorCount, {nullable:false})
    _count?: InstanceType<typeof AuthorCount>;
}

@ArgsType()
export class CreateManyAuthorArgs {
    @Field(() => [AuthorCreateManyInput], {nullable:false})
    data!: Array<AuthorCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneAuthorArgs {
    @Field(() => AuthorCreateInput, {nullable:false})
    data!: InstanceType<typeof AuthorCreateInput>;
}

@ArgsType()
export class DeleteManyAuthorArgs {
    @Field(() => AuthorWhereInput, {nullable:true})
    where?: InstanceType<typeof AuthorWhereInput>;
}

@ArgsType()
export class DeleteOneAuthorArgs {
    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof AuthorWhereUniqueInput>;
}

@ArgsType()
export class FindFirstAuthorArgs {
    @Field(() => AuthorWhereInput, {nullable:true})
    where?: InstanceType<typeof AuthorWhereInput>;
    @Field(() => [AuthorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthorOrderByWithRelationInput>;
    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AuthorWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AuthorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthorScalarFieldEnum>;
}

@ArgsType()
export class FindManyAuthorArgs {
    @Field(() => AuthorWhereInput, {nullable:true})
    where?: InstanceType<typeof AuthorWhereInput>;
    @Field(() => [AuthorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthorOrderByWithRelationInput>;
    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AuthorWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AuthorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthorScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueAuthorArgs {
    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof AuthorWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyAuthorArgs {
    @Field(() => AuthorUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof AuthorUpdateManyMutationInput>;
    @Field(() => AuthorWhereInput, {nullable:true})
    where?: InstanceType<typeof AuthorWhereInput>;
}

@ArgsType()
export class UpdateOneAuthorArgs {
    @Field(() => AuthorUpdateInput, {nullable:false})
    data!: InstanceType<typeof AuthorUpdateInput>;
    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof AuthorWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneAuthorArgs {
    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof AuthorWhereUniqueInput>;
    @Field(() => AuthorCreateInput, {nullable:false})
    create!: InstanceType<typeof AuthorCreateInput>;
    @Field(() => AuthorUpdateInput, {nullable:false})
    update!: InstanceType<typeof AuthorUpdateInput>;
}

@ObjectType()
export class AggregateBook {
    @Field(() => BookCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BookCountAggregate>;
    @Field(() => BookAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof BookAvgAggregate>;
    @Field(() => BookSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof BookSumAggregate>;
    @Field(() => BookMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BookMinAggregate>;
    @Field(() => BookMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BookMaxAggregate>;
}

@ArgsType()
export class BookAggregateArgs {
    @Field(() => BookWhereInput, {nullable:true})
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BookWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BookCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BookCountAggregateInput>;
    @Field(() => BookAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BookAvgAggregateInput>;
    @Field(() => BookSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BookSumAggregateInput>;
    @Field(() => BookMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BookMinAggregateInput>;
    @Field(() => BookMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BookMaxAggregateInput>;
}

@InputType()
export class BookAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class BookAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class BookAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class BookCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    isbn?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class BookCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    isbn!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class BookCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isbn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class BookCount {
    @Field(() => Int, {nullable:false})
    architects!: number;
    @Field(() => Int, {nullable:false})
    shelves!: number;
    @Field(() => Int, {nullable:false})
    BookProgressLog!: number;
}

@InputType()
export class BookCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookCreateNestedManyWithoutShelvesInput {
    @Field(() => [BookCreateWithoutShelvesInput], {nullable:true})
    create?: Array<BookCreateWithoutShelvesInput>;
    @Field(() => [BookCreateOrConnectWithoutShelvesInput], {nullable:true})
    connectOrCreate?: Array<BookCreateOrConnectWithoutShelvesInput>;
    @Field(() => [BookWhereUniqueInput], {nullable:true})
    connect?: Array<BookWhereUniqueInput>;
}

@InputType()
export class BookCreateNestedOneWithoutArchitectsInput {
    @Field(() => BookCreateWithoutArchitectsInput, {nullable:true})
    create?: InstanceType<typeof BookCreateWithoutArchitectsInput>;
    @Field(() => BookCreateOrConnectWithoutArchitectsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutArchitectsInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof BookWhereUniqueInput>;
}

@InputType()
export class BookCreateNestedOneWithoutBookProgressLogInput {
    @Field(() => BookCreateWithoutBookProgressLogInput, {nullable:true})
    create?: InstanceType<typeof BookCreateWithoutBookProgressLogInput>;
    @Field(() => BookCreateOrConnectWithoutBookProgressLogInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutBookProgressLogInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof BookWhereUniqueInput>;
}

@InputType()
export class BookCreateOrConnectWithoutArchitectsInput {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookWhereUniqueInput>;
    @Field(() => BookCreateWithoutArchitectsInput, {nullable:false})
    create!: InstanceType<typeof BookCreateWithoutArchitectsInput>;
}

@InputType()
export class BookCreateOrConnectWithoutBookProgressLogInput {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookWhereUniqueInput>;
    @Field(() => BookCreateWithoutBookProgressLogInput, {nullable:false})
    create!: InstanceType<typeof BookCreateWithoutBookProgressLogInput>;
}

@InputType()
export class BookCreateOrConnectWithoutShelvesInput {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookWhereUniqueInput>;
    @Field(() => BookCreateWithoutShelvesInput, {nullable:false})
    create!: InstanceType<typeof BookCreateWithoutShelvesInput>;
}

@InputType()
export class BookCreateWithoutArchitectsInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ShelfCreateNestedManyWithoutBooksInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutBooksInput>;
    @Field(() => BookProgressLogCreateNestedManyWithoutBookInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookCreateWithoutBookProgressLogInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksCreateNestedManyWithoutBookInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksCreateNestedManyWithoutBookInput>;
    @Field(() => ShelfCreateNestedManyWithoutBooksInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutBooksInput>;
}

@InputType()
export class BookCreateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksCreateNestedManyWithoutBookInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksCreateNestedManyWithoutBookInput>;
    @Field(() => BookProgressLogCreateNestedManyWithoutBookInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookCreateInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksCreateNestedManyWithoutBookInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksCreateNestedManyWithoutBookInput>;
    @Field(() => ShelfCreateNestedManyWithoutBooksInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutBooksInput>;
    @Field(() => BookProgressLogCreateNestedManyWithoutBookInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogCreateNestedManyWithoutBookInput>;
}

@ArgsType()
export class BookGroupByArgs {
    @Field(() => BookWhereInput, {nullable:true})
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithAggregationInput>;
    @Field(() => [BookScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BookScalarFieldEnum>;
    @Field(() => BookScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof BookScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BookCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BookCountAggregateInput>;
    @Field(() => BookAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BookAvgAggregateInput>;
    @Field(() => BookSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BookSumAggregateInput>;
    @Field(() => BookMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BookMinAggregateInput>;
    @Field(() => BookMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BookMaxAggregateInput>;
}

@ObjectType()
export class BookGroupBy {
    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint | number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => BookCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BookCountAggregate>;
    @Field(() => BookAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof BookAvgAggregate>;
    @Field(() => BookSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof BookSumAggregate>;
    @Field(() => BookMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BookMinAggregate>;
    @Field(() => BookMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BookMaxAggregate>;
}

@InputType()
export class BookListRelationFilter {
    @Field(() => BookWhereInput, {nullable:true})
    every?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereInput, {nullable:true})
    some?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereInput, {nullable:true})
    none?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    isbn?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class BookMaxAggregate {
    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isbn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BookMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    isbn?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class BookMinAggregate {
    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isbn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BookOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class BookOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isbn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => BookCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BookCountOrderByAggregateInput>;
    @Field(() => BookAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BookAvgOrderByAggregateInput>;
    @Field(() => BookMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BookMaxOrderByAggregateInput>;
    @Field(() => BookMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BookMinOrderByAggregateInput>;
    @Field(() => BookSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BookSumOrderByAggregateInput>;
}

@InputType()
export class BookOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isbn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ArchitectsOnBooksOrderByRelationAggregateInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksOrderByRelationAggregateInput>;
    @Field(() => ShelfOrderByRelationAggregateInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfOrderByRelationAggregateInput>;
    @Field(() => BookProgressLogOrderByRelationAggregateInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogOrderByRelationAggregateInput>;
}

@InputType()
export class BookRelationFilter {
    @Field(() => BookWhereInput, {nullable:true})
    is?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereInput, {nullable:true})
    isNot?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookScalarWhereWithAggregatesInput {
    @Field(() => [BookScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BookScalarWhereWithAggregatesInput>;
    @Field(() => [BookScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BookScalarWhereWithAggregatesInput>;
    @Field(() => [BookScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BookScalarWhereWithAggregatesInput>;
    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof BigIntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    isbn?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class BookScalarWhereInput {
    @Field(() => [BookScalarWhereInput], {nullable:true})
    AND?: Array<BookScalarWhereInput>;
    @Field(() => [BookScalarWhereInput], {nullable:true})
    OR?: Array<BookScalarWhereInput>;
    @Field(() => [BookScalarWhereInput], {nullable:true})
    NOT?: Array<BookScalarWhereInput>;
    @Field(() => BigIntFilter, {nullable:true})
    id?: InstanceType<typeof BigIntFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    isbn?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class BookSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class BookSumAggregate {
    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;
}

@InputType()
export class BookSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class BookUncheckedCreateWithoutArchitectsInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => BookProgressLogUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateWithoutBookProgressLogInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksUncheckedCreateNestedManyWithoutBookInput>;
    @Field(() => BookProgressLogUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksUncheckedCreateNestedManyWithoutBookInput>;
    @Field(() => BookProgressLogUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedUpdateManyWithoutBooksInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookUncheckedUpdateWithoutArchitectsInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => BookProgressLogUncheckedUpdateManyWithoutBookInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUncheckedUpdateManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedUpdateWithoutBookProgressLogInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksUncheckedUpdateManyWithoutBookInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksUncheckedUpdateManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedUpdateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksUncheckedUpdateManyWithoutBookInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksUncheckedUpdateManyWithoutBookInput>;
    @Field(() => BookProgressLogUncheckedUpdateManyWithoutBookInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUncheckedUpdateManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksUncheckedUpdateManyWithoutBookInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksUncheckedUpdateManyWithoutBookInput>;
    @Field(() => BookProgressLogUncheckedUpdateManyWithoutBookInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUncheckedUpdateManyWithoutBookInput>;
}

@InputType()
export class BookUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BookUpdateManyWithWhereWithoutShelvesInput {
    @Field(() => BookScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof BookScalarWhereInput>;
    @Field(() => BookUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof BookUpdateManyMutationInput>;
}

@InputType()
export class BookUpdateManyWithoutShelvesInput {
    @Field(() => [BookCreateWithoutShelvesInput], {nullable:true})
    create?: Array<BookCreateWithoutShelvesInput>;
    @Field(() => [BookCreateOrConnectWithoutShelvesInput], {nullable:true})
    connectOrCreate?: Array<BookCreateOrConnectWithoutShelvesInput>;
    @Field(() => [BookUpsertWithWhereUniqueWithoutShelvesInput], {nullable:true})
    upsert?: Array<BookUpsertWithWhereUniqueWithoutShelvesInput>;
    @Field(() => [BookWhereUniqueInput], {nullable:true})
    set?: Array<BookWhereUniqueInput>;
    @Field(() => [BookWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookWhereUniqueInput>;
    @Field(() => [BookWhereUniqueInput], {nullable:true})
    delete?: Array<BookWhereUniqueInput>;
    @Field(() => [BookWhereUniqueInput], {nullable:true})
    connect?: Array<BookWhereUniqueInput>;
    @Field(() => [BookUpdateWithWhereUniqueWithoutShelvesInput], {nullable:true})
    update?: Array<BookUpdateWithWhereUniqueWithoutShelvesInput>;
    @Field(() => [BookUpdateManyWithWhereWithoutShelvesInput], {nullable:true})
    updateMany?: Array<BookUpdateManyWithWhereWithoutShelvesInput>;
    @Field(() => [BookScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookScalarWhereInput>;
}

@InputType()
export class BookUpdateOneRequiredWithoutArchitectsInput {
    @Field(() => BookCreateWithoutArchitectsInput, {nullable:true})
    create?: InstanceType<typeof BookCreateWithoutArchitectsInput>;
    @Field(() => BookCreateOrConnectWithoutArchitectsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutArchitectsInput>;
    @Field(() => BookUpsertWithoutArchitectsInput, {nullable:true})
    upsert?: InstanceType<typeof BookUpsertWithoutArchitectsInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof BookWhereUniqueInput>;
    @Field(() => BookUpdateWithoutArchitectsInput, {nullable:true})
    update?: InstanceType<typeof BookUpdateWithoutArchitectsInput>;
}

@InputType()
export class BookUpdateOneRequiredWithoutBookProgressLogInput {
    @Field(() => BookCreateWithoutBookProgressLogInput, {nullable:true})
    create?: InstanceType<typeof BookCreateWithoutBookProgressLogInput>;
    @Field(() => BookCreateOrConnectWithoutBookProgressLogInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutBookProgressLogInput>;
    @Field(() => BookUpsertWithoutBookProgressLogInput, {nullable:true})
    upsert?: InstanceType<typeof BookUpsertWithoutBookProgressLogInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof BookWhereUniqueInput>;
    @Field(() => BookUpdateWithoutBookProgressLogInput, {nullable:true})
    update?: InstanceType<typeof BookUpdateWithoutBookProgressLogInput>;
}

@InputType()
export class BookUpdateWithWhereUniqueWithoutShelvesInput {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookWhereUniqueInput>;
    @Field(() => BookUpdateWithoutShelvesInput, {nullable:false})
    data!: InstanceType<typeof BookUpdateWithoutShelvesInput>;
}

@InputType()
export class BookUpdateWithoutArchitectsInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ShelfUpdateManyWithoutBooksInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutBooksInput>;
    @Field(() => BookProgressLogUpdateManyWithoutBookInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUpdateManyWithoutBookInput>;
}

@InputType()
export class BookUpdateWithoutBookProgressLogInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksUpdateManyWithoutBookInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksUpdateManyWithoutBookInput>;
    @Field(() => ShelfUpdateManyWithoutBooksInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutBooksInput>;
}

@InputType()
export class BookUpdateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksUpdateManyWithoutBookInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksUpdateManyWithoutBookInput>;
    @Field(() => BookProgressLogUpdateManyWithoutBookInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUpdateManyWithoutBookInput>;
}

@InputType()
export class BookUpdateInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    isbn?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ArchitectsOnBooksUpdateManyWithoutBookInput, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksUpdateManyWithoutBookInput>;
    @Field(() => ShelfUpdateManyWithoutBooksInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutBooksInput>;
    @Field(() => BookProgressLogUpdateManyWithoutBookInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUpdateManyWithoutBookInput>;
}

@InputType()
export class BookUpsertWithWhereUniqueWithoutShelvesInput {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookWhereUniqueInput>;
    @Field(() => BookUpdateWithoutShelvesInput, {nullable:false})
    update!: InstanceType<typeof BookUpdateWithoutShelvesInput>;
    @Field(() => BookCreateWithoutShelvesInput, {nullable:false})
    create!: InstanceType<typeof BookCreateWithoutShelvesInput>;
}

@InputType()
export class BookUpsertWithoutArchitectsInput {
    @Field(() => BookUpdateWithoutArchitectsInput, {nullable:false})
    update!: InstanceType<typeof BookUpdateWithoutArchitectsInput>;
    @Field(() => BookCreateWithoutArchitectsInput, {nullable:false})
    create!: InstanceType<typeof BookCreateWithoutArchitectsInput>;
}

@InputType()
export class BookUpsertWithoutBookProgressLogInput {
    @Field(() => BookUpdateWithoutBookProgressLogInput, {nullable:false})
    update!: InstanceType<typeof BookUpdateWithoutBookProgressLogInput>;
    @Field(() => BookCreateWithoutBookProgressLogInput, {nullable:false})
    create!: InstanceType<typeof BookCreateWithoutBookProgressLogInput>;
}

@InputType()
export class BookWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
}

@InputType()
export class BookWhereInput {
    @Field(() => [BookWhereInput], {nullable:true})
    AND?: Array<BookWhereInput>;
    @Field(() => [BookWhereInput], {nullable:true})
    OR?: Array<BookWhereInput>;
    @Field(() => [BookWhereInput], {nullable:true})
    NOT?: Array<BookWhereInput>;
    @Field(() => BigIntFilter, {nullable:true})
    id?: InstanceType<typeof BigIntFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    isbn?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ArchitectsOnBooksListRelationFilter, {nullable:true})
    architects?: InstanceType<typeof ArchitectsOnBooksListRelationFilter>;
    @Field(() => ShelfListRelationFilter, {nullable:true})
    shelves?: InstanceType<typeof ShelfListRelationFilter>;
    @Field(() => BookProgressLogListRelationFilter, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogListRelationFilter>;
}

/** This model will keep track of books that will be made available to the users */
@ObjectType({description:'This model will keep track of books that will be made available to the users'})
export class Book {
    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => String, {nullable:false})
    isbn!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [ArchitectsOnBooks], {nullable:true})
    architects?: Array<ArchitectsOnBooks>;
    @Field(() => [Shelf], {nullable:true})
    shelves?: Array<Shelf>;
    @Field(() => [BookProgressLog], {nullable:true})
    BookProgressLog?: Array<BookProgressLog>;
    @Field(() => BookCount, {nullable:false})
    _count?: InstanceType<typeof BookCount>;
}

@ArgsType()
export class CreateManyBookArgs {
    @Field(() => [BookCreateManyInput], {nullable:false})
    data!: Array<BookCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneBookArgs {
    @Field(() => BookCreateInput, {nullable:false})
    data!: InstanceType<typeof BookCreateInput>;
}

@ArgsType()
export class DeleteManyBookArgs {
    @Field(() => BookWhereInput, {nullable:true})
    where?: InstanceType<typeof BookWhereInput>;
}

@ArgsType()
export class DeleteOneBookArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookWhereUniqueInput>;
}

@ArgsType()
export class FindFirstBookArgs {
    @Field(() => BookWhereInput, {nullable:true})
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BookWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookScalarFieldEnum>;
}

@ArgsType()
export class FindManyBookArgs {
    @Field(() => BookWhereInput, {nullable:true})
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BookWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueBookArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyBookArgs {
    @Field(() => BookUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof BookUpdateManyMutationInput>;
    @Field(() => BookWhereInput, {nullable:true})
    where?: InstanceType<typeof BookWhereInput>;
}

@ArgsType()
export class UpdateOneBookArgs {
    @Field(() => BookUpdateInput, {nullable:false})
    data!: InstanceType<typeof BookUpdateInput>;
    @Field(() => BookWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneBookArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookWhereUniqueInput>;
    @Field(() => BookCreateInput, {nullable:false})
    create!: InstanceType<typeof BookCreateInput>;
    @Field(() => BookUpdateInput, {nullable:false})
    update!: InstanceType<typeof BookUpdateInput>;
}

@ObjectType()
export class AggregateBookProgressLog {
    @Field(() => BookProgressLogCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BookProgressLogCountAggregate>;
    @Field(() => BookProgressLogAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof BookProgressLogAvgAggregate>;
    @Field(() => BookProgressLogSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof BookProgressLogSumAggregate>;
    @Field(() => BookProgressLogMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BookProgressLogMinAggregate>;
    @Field(() => BookProgressLogMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BookProgressLogMaxAggregate>;
}

@ArgsType()
export class BookProgressLogAggregateArgs {
    @Field(() => BookProgressLogWhereInput, {nullable:true})
    where?: InstanceType<typeof BookProgressLogWhereInput>;
    @Field(() => [BookProgressLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookProgressLogOrderByWithRelationInput>;
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BookProgressLogWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BookProgressLogCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BookProgressLogCountAggregateInput>;
    @Field(() => BookProgressLogAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BookProgressLogAvgAggregateInput>;
    @Field(() => BookProgressLogSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BookProgressLogSumAggregateInput>;
    @Field(() => BookProgressLogMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BookProgressLogMinAggregateInput>;
    @Field(() => BookProgressLogMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BookProgressLogMaxAggregateInput>;
}

@InputType()
export class BookProgressLogAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Boolean, {nullable:true})
    numPages?: true;
}

@ObjectType()
export class BookProgressLogAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    bookId?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Float, {nullable:true})
    numPages?: number;
}

@InputType()
export class BookProgressLogAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => SortOrder, {nullable:true})
    numPages?: keyof typeof SortOrder;
}

@InputType()
export class BookProgressLogBookIdUserIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => String, {nullable:false})
    userId!: string;
}

@InputType()
export class BookProgressLogCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Boolean, {nullable:true})
    numPages?: true;
    @Field(() => Boolean, {nullable:true})
    startedOn?: true;
    @Field(() => Boolean, {nullable:true})
    updatedOn?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class BookProgressLogCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    bookId!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    percentage!: Prisma.Decimal;
    @Field(() => Int, {nullable:false})
    numPages!: number;
    @Field(() => Int, {nullable:false})
    startedOn!: number;
    @Field(() => Int, {nullable:false})
    updatedOn!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class BookProgressLogCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => SortOrder, {nullable:true})
    numPages?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startedOn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedOn?: keyof typeof SortOrder;
}

@InputType()
export class BookProgressLogCreateManyBookInputEnvelope {
    @Field(() => [BookProgressLogCreateManyBookInput], {nullable:false})
    data!: Array<BookProgressLogCreateManyBookInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class BookProgressLogCreateManyBookInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:false})
    numPages!: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogCreateManyUserInputEnvelope {
    @Field(() => [BookProgressLogCreateManyUserInput], {nullable:false})
    data!: Array<BookProgressLogCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class BookProgressLogCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:false})
    numPages!: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:false})
    numPages!: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogCreateNestedManyWithoutBookInput {
    @Field(() => [BookProgressLogCreateWithoutBookInput], {nullable:true})
    create?: Array<BookProgressLogCreateWithoutBookInput>;
    @Field(() => [BookProgressLogCreateOrConnectWithoutBookInput], {nullable:true})
    connectOrCreate?: Array<BookProgressLogCreateOrConnectWithoutBookInput>;
    @Field(() => BookProgressLogCreateManyBookInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof BookProgressLogCreateManyBookInputEnvelope>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    connect?: Array<BookProgressLogWhereUniqueInput>;
}

@InputType()
export class BookProgressLogCreateNestedManyWithoutUserInput {
    @Field(() => [BookProgressLogCreateWithoutUserInput], {nullable:true})
    create?: Array<BookProgressLogCreateWithoutUserInput>;
    @Field(() => [BookProgressLogCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<BookProgressLogCreateOrConnectWithoutUserInput>;
    @Field(() => BookProgressLogCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof BookProgressLogCreateManyUserInputEnvelope>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    connect?: Array<BookProgressLogWhereUniqueInput>;
}

@InputType()
export class BookProgressLogCreateOrConnectWithoutBookInput {
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookProgressLogWhereUniqueInput>;
    @Field(() => BookProgressLogCreateWithoutBookInput, {nullable:false})
    create!: InstanceType<typeof BookProgressLogCreateWithoutBookInput>;
}

@InputType()
export class BookProgressLogCreateOrConnectWithoutUserInput {
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookProgressLogWhereUniqueInput>;
    @Field(() => BookProgressLogCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof BookProgressLogCreateWithoutUserInput>;
}

@InputType()
export class BookProgressLogCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:false})
    numPages!: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
    @Field(() => UserCreateNestedOneWithoutBookProgressLogInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutBookProgressLogInput>;
}

@InputType()
export class BookProgressLogCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:false})
    numPages!: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
    @Field(() => BookCreateNestedOneWithoutBookProgressLogInput, {nullable:false})
    book!: InstanceType<typeof BookCreateNestedOneWithoutBookProgressLogInput>;
}

@InputType()
export class BookProgressLogCreateInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:false})
    numPages!: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
    @Field(() => BookCreateNestedOneWithoutBookProgressLogInput, {nullable:false})
    book!: InstanceType<typeof BookCreateNestedOneWithoutBookProgressLogInput>;
    @Field(() => UserCreateNestedOneWithoutBookProgressLogInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutBookProgressLogInput>;
}

@ArgsType()
export class BookProgressLogGroupByArgs {
    @Field(() => BookProgressLogWhereInput, {nullable:true})
    where?: InstanceType<typeof BookProgressLogWhereInput>;
    @Field(() => [BookProgressLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BookProgressLogOrderByWithAggregationInput>;
    @Field(() => [BookProgressLogScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BookProgressLogScalarFieldEnum>;
    @Field(() => BookProgressLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof BookProgressLogScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BookProgressLogCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BookProgressLogCountAggregateInput>;
    @Field(() => BookProgressLogAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BookProgressLogAvgAggregateInput>;
    @Field(() => BookProgressLogSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BookProgressLogSumAggregateInput>;
    @Field(() => BookProgressLogMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BookProgressLogMinAggregateInput>;
    @Field(() => BookProgressLogMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BookProgressLogMaxAggregateInput>;
}

@ObjectType()
export class BookProgressLogGroupBy {
    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint | number;
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => GraphQLDecimal, {nullable:false})
    percentage!: Prisma.Decimal;
    @Field(() => Int, {nullable:false})
    numPages!: number;
    @Field(() => Date, {nullable:false})
    startedOn!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedOn!: Date | string;
    @Field(() => BookProgressLogCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BookProgressLogCountAggregate>;
    @Field(() => BookProgressLogAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof BookProgressLogAvgAggregate>;
    @Field(() => BookProgressLogSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof BookProgressLogSumAggregate>;
    @Field(() => BookProgressLogMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BookProgressLogMinAggregate>;
    @Field(() => BookProgressLogMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BookProgressLogMaxAggregate>;
}

@InputType()
export class BookProgressLogListRelationFilter {
    @Field(() => BookProgressLogWhereInput, {nullable:true})
    every?: InstanceType<typeof BookProgressLogWhereInput>;
    @Field(() => BookProgressLogWhereInput, {nullable:true})
    some?: InstanceType<typeof BookProgressLogWhereInput>;
    @Field(() => BookProgressLogWhereInput, {nullable:true})
    none?: InstanceType<typeof BookProgressLogWhereInput>;
}

@InputType()
export class BookProgressLogMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Boolean, {nullable:true})
    numPages?: true;
    @Field(() => Boolean, {nullable:true})
    startedOn?: true;
    @Field(() => Boolean, {nullable:true})
    updatedOn?: true;
}

@ObjectType()
export class BookProgressLogMaxAggregate {
    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:true})
    numPages?: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => SortOrder, {nullable:true})
    numPages?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startedOn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedOn?: keyof typeof SortOrder;
}

@InputType()
export class BookProgressLogMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Boolean, {nullable:true})
    numPages?: true;
    @Field(() => Boolean, {nullable:true})
    startedOn?: true;
    @Field(() => Boolean, {nullable:true})
    updatedOn?: true;
}

@ObjectType()
export class BookProgressLogMinAggregate {
    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:true})
    numPages?: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => SortOrder, {nullable:true})
    numPages?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startedOn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedOn?: keyof typeof SortOrder;
}

@InputType()
export class BookProgressLogOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class BookProgressLogOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => SortOrder, {nullable:true})
    numPages?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startedOn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedOn?: keyof typeof SortOrder;
    @Field(() => BookProgressLogCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BookProgressLogCountOrderByAggregateInput>;
    @Field(() => BookProgressLogAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BookProgressLogAvgOrderByAggregateInput>;
    @Field(() => BookProgressLogMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BookProgressLogMaxOrderByAggregateInput>;
    @Field(() => BookProgressLogMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BookProgressLogMinOrderByAggregateInput>;
    @Field(() => BookProgressLogSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BookProgressLogSumOrderByAggregateInput>;
}

@InputType()
export class BookProgressLogOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => BookOrderByWithRelationInput, {nullable:true})
    book?: InstanceType<typeof BookOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => SortOrder, {nullable:true})
    numPages?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startedOn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedOn?: keyof typeof SortOrder;
}

@InputType()
export class BookProgressLogScalarWhereWithAggregatesInput {
    @Field(() => [BookProgressLogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BookProgressLogScalarWhereWithAggregatesInput>;
    @Field(() => [BookProgressLogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BookProgressLogScalarWhereWithAggregatesInput>;
    @Field(() => [BookProgressLogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BookProgressLogScalarWhereWithAggregatesInput>;
    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof BigIntWithAggregatesFilter>;
    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    bookId?: InstanceType<typeof BigIntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    percentage?: InstanceType<typeof Prisma.Decimal>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    numPages?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startedOn?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedOn?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class BookProgressLogScalarWhereInput {
    @Field(() => [BookProgressLogScalarWhereInput], {nullable:true})
    AND?: Array<BookProgressLogScalarWhereInput>;
    @Field(() => [BookProgressLogScalarWhereInput], {nullable:true})
    OR?: Array<BookProgressLogScalarWhereInput>;
    @Field(() => [BookProgressLogScalarWhereInput], {nullable:true})
    NOT?: Array<BookProgressLogScalarWhereInput>;
    @Field(() => BigIntFilter, {nullable:true})
    id?: InstanceType<typeof BigIntFilter>;
    @Field(() => BigIntFilter, {nullable:true})
    bookId?: InstanceType<typeof BigIntFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    percentage?: InstanceType<typeof Prisma.Decimal>;
    @Field(() => IntFilter, {nullable:true})
    numPages?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    startedOn?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedOn?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class BookProgressLogSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Boolean, {nullable:true})
    numPages?: true;
}

@ObjectType()
export class BookProgressLogSumAggregate {
    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:true})
    numPages?: number;
}

@InputType()
export class BookProgressLogSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => SortOrder, {nullable:true})
    numPages?: keyof typeof SortOrder;
}

@InputType()
export class BookProgressLogUncheckedCreateNestedManyWithoutBookInput {
    @Field(() => [BookProgressLogCreateWithoutBookInput], {nullable:true})
    create?: Array<BookProgressLogCreateWithoutBookInput>;
    @Field(() => [BookProgressLogCreateOrConnectWithoutBookInput], {nullable:true})
    connectOrCreate?: Array<BookProgressLogCreateOrConnectWithoutBookInput>;
    @Field(() => BookProgressLogCreateManyBookInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof BookProgressLogCreateManyBookInputEnvelope>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    connect?: Array<BookProgressLogWhereUniqueInput>;
}

@InputType()
export class BookProgressLogUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [BookProgressLogCreateWithoutUserInput], {nullable:true})
    create?: Array<BookProgressLogCreateWithoutUserInput>;
    @Field(() => [BookProgressLogCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<BookProgressLogCreateOrConnectWithoutUserInput>;
    @Field(() => BookProgressLogCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof BookProgressLogCreateManyUserInputEnvelope>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    connect?: Array<BookProgressLogWhereUniqueInput>;
}

@InputType()
export class BookProgressLogUncheckedCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:false})
    numPages!: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:false})
    numPages!: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:false})
    bookId!: bigint | number;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:false})
    numPages!: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogUncheckedUpdateManyWithoutBookProgressLogInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:true})
    numPages?: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogUncheckedUpdateManyWithoutBookInput {
    @Field(() => [BookProgressLogCreateWithoutBookInput], {nullable:true})
    create?: Array<BookProgressLogCreateWithoutBookInput>;
    @Field(() => [BookProgressLogCreateOrConnectWithoutBookInput], {nullable:true})
    connectOrCreate?: Array<BookProgressLogCreateOrConnectWithoutBookInput>;
    @Field(() => [BookProgressLogUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    upsert?: Array<BookProgressLogUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => BookProgressLogCreateManyBookInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof BookProgressLogCreateManyBookInputEnvelope>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    set?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    delete?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    connect?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    update?: Array<BookProgressLogUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [BookProgressLogUpdateManyWithWhereWithoutBookInput], {nullable:true})
    updateMany?: Array<BookProgressLogUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [BookProgressLogScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookProgressLogScalarWhereInput>;
}

@InputType()
export class BookProgressLogUncheckedUpdateManyWithoutUserInput {
    @Field(() => [BookProgressLogCreateWithoutUserInput], {nullable:true})
    create?: Array<BookProgressLogCreateWithoutUserInput>;
    @Field(() => [BookProgressLogCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<BookProgressLogCreateOrConnectWithoutUserInput>;
    @Field(() => [BookProgressLogUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<BookProgressLogUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => BookProgressLogCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof BookProgressLogCreateManyUserInputEnvelope>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    set?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    delete?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    connect?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<BookProgressLogUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [BookProgressLogUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<BookProgressLogUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [BookProgressLogScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookProgressLogScalarWhereInput>;
}

@InputType()
export class BookProgressLogUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:true})
    numPages?: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogUncheckedUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:true})
    numPages?: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:true})
    numPages?: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => String, {nullable:true})
    bookId?: bigint | number;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:true})
    numPages?: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:true})
    numPages?: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
}

@InputType()
export class BookProgressLogUpdateManyWithWhereWithoutBookInput {
    @Field(() => BookProgressLogScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof BookProgressLogScalarWhereInput>;
    @Field(() => BookProgressLogUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof BookProgressLogUpdateManyMutationInput>;
}

@InputType()
export class BookProgressLogUpdateManyWithWhereWithoutUserInput {
    @Field(() => BookProgressLogScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof BookProgressLogScalarWhereInput>;
    @Field(() => BookProgressLogUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof BookProgressLogUpdateManyMutationInput>;
}

@InputType()
export class BookProgressLogUpdateManyWithoutBookInput {
    @Field(() => [BookProgressLogCreateWithoutBookInput], {nullable:true})
    create?: Array<BookProgressLogCreateWithoutBookInput>;
    @Field(() => [BookProgressLogCreateOrConnectWithoutBookInput], {nullable:true})
    connectOrCreate?: Array<BookProgressLogCreateOrConnectWithoutBookInput>;
    @Field(() => [BookProgressLogUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    upsert?: Array<BookProgressLogUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => BookProgressLogCreateManyBookInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof BookProgressLogCreateManyBookInputEnvelope>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    set?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    delete?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    connect?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    update?: Array<BookProgressLogUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [BookProgressLogUpdateManyWithWhereWithoutBookInput], {nullable:true})
    updateMany?: Array<BookProgressLogUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [BookProgressLogScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookProgressLogScalarWhereInput>;
}

@InputType()
export class BookProgressLogUpdateManyWithoutUserInput {
    @Field(() => [BookProgressLogCreateWithoutUserInput], {nullable:true})
    create?: Array<BookProgressLogCreateWithoutUserInput>;
    @Field(() => [BookProgressLogCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<BookProgressLogCreateOrConnectWithoutUserInput>;
    @Field(() => [BookProgressLogUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<BookProgressLogUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => BookProgressLogCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof BookProgressLogCreateManyUserInputEnvelope>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    set?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    delete?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogWhereUniqueInput], {nullable:true})
    connect?: Array<BookProgressLogWhereUniqueInput>;
    @Field(() => [BookProgressLogUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<BookProgressLogUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [BookProgressLogUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<BookProgressLogUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [BookProgressLogScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookProgressLogScalarWhereInput>;
}

@InputType()
export class BookProgressLogUpdateWithWhereUniqueWithoutBookInput {
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookProgressLogWhereUniqueInput>;
    @Field(() => BookProgressLogUpdateWithoutBookInput, {nullable:false})
    data!: InstanceType<typeof BookProgressLogUpdateWithoutBookInput>;
}

@InputType()
export class BookProgressLogUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookProgressLogWhereUniqueInput>;
    @Field(() => BookProgressLogUpdateWithoutUserInput, {nullable:false})
    data!: InstanceType<typeof BookProgressLogUpdateWithoutUserInput>;
}

@InputType()
export class BookProgressLogUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:true})
    numPages?: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutBookProgressLogInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutBookProgressLogInput>;
}

@InputType()
export class BookProgressLogUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:true})
    numPages?: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
    @Field(() => BookUpdateOneRequiredWithoutBookProgressLogInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneRequiredWithoutBookProgressLogInput>;
}

@InputType()
export class BookProgressLogUpdateInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => GraphQLDecimal, {nullable:true})
    percentage?: Prisma.Decimal;
    @Field(() => Int, {nullable:true})
    numPages?: number;
    @Field(() => Date, {nullable:true})
    startedOn?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedOn?: Date | string;
    @Field(() => BookUpdateOneRequiredWithoutBookProgressLogInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneRequiredWithoutBookProgressLogInput>;
    @Field(() => UserUpdateOneRequiredWithoutBookProgressLogInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutBookProgressLogInput>;
}

@InputType()
export class BookProgressLogUpsertWithWhereUniqueWithoutBookInput {
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookProgressLogWhereUniqueInput>;
    @Field(() => BookProgressLogUpdateWithoutBookInput, {nullable:false})
    update!: InstanceType<typeof BookProgressLogUpdateWithoutBookInput>;
    @Field(() => BookProgressLogCreateWithoutBookInput, {nullable:false})
    create!: InstanceType<typeof BookProgressLogCreateWithoutBookInput>;
}

@InputType()
export class BookProgressLogUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookProgressLogWhereUniqueInput>;
    @Field(() => BookProgressLogUpdateWithoutUserInput, {nullable:false})
    update!: InstanceType<typeof BookProgressLogUpdateWithoutUserInput>;
    @Field(() => BookProgressLogCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof BookProgressLogCreateWithoutUserInput>;
}

@InputType()
export class BookProgressLogWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: bigint | number;
    @Field(() => BookProgressLogBookIdUserIdCompoundUniqueInput, {nullable:true})
    bookId_userId?: InstanceType<typeof BookProgressLogBookIdUserIdCompoundUniqueInput>;
}

@InputType()
export class BookProgressLogWhereInput {
    @Field(() => [BookProgressLogWhereInput], {nullable:true})
    AND?: Array<BookProgressLogWhereInput>;
    @Field(() => [BookProgressLogWhereInput], {nullable:true})
    OR?: Array<BookProgressLogWhereInput>;
    @Field(() => [BookProgressLogWhereInput], {nullable:true})
    NOT?: Array<BookProgressLogWhereInput>;
    @Field(() => BigIntFilter, {nullable:true})
    id?: InstanceType<typeof BigIntFilter>;
    @Field(() => BookRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookRelationFilter>;
    @Field(() => BigIntFilter, {nullable:true})
    bookId?: InstanceType<typeof BigIntFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    percentage?: InstanceType<typeof Prisma.Decimal>;
    @Field(() => IntFilter, {nullable:true})
    numPages?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    startedOn?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedOn?: InstanceType<typeof DateTimeFilter>;
}

/** Model to track a user's reading progress with a particular book */
@ObjectType({description:"Model to track a user's reading progress with a particular book"})
export class BookProgressLog {
    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;
    @Field(() => Book, {nullable:false})
    book?: InstanceType<typeof Book>;
    @Field(() => String, {nullable:false})
    bookId!: bigint;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => String, {nullable:false})
    userId!: string;
    /** Face value, so if a book is 82% complete, this value will be `82.00` */
    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0,description:'Face value, so if a book is 82% complete, this value will be `82.00`'})
    percentage!: Prisma.Decimal;
    @Field(() => Int, {nullable:false})
    numPages!: number;
    @Field(() => Date, {nullable:false})
    startedOn!: Date;
    @Field(() => Date, {nullable:false})
    updatedOn!: Date;
}

@ArgsType()
export class CreateManyBookProgressLogArgs {
    @Field(() => [BookProgressLogCreateManyInput], {nullable:false})
    data!: Array<BookProgressLogCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneBookProgressLogArgs {
    @Field(() => BookProgressLogCreateInput, {nullable:false})
    data!: InstanceType<typeof BookProgressLogCreateInput>;
}

@ArgsType()
export class DeleteManyBookProgressLogArgs {
    @Field(() => BookProgressLogWhereInput, {nullable:true})
    where?: InstanceType<typeof BookProgressLogWhereInput>;
}

@ArgsType()
export class DeleteOneBookProgressLogArgs {
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookProgressLogWhereUniqueInput>;
}

@ArgsType()
export class FindFirstBookProgressLogArgs {
    @Field(() => BookProgressLogWhereInput, {nullable:true})
    where?: InstanceType<typeof BookProgressLogWhereInput>;
    @Field(() => [BookProgressLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookProgressLogOrderByWithRelationInput>;
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BookProgressLogWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookProgressLogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookProgressLogScalarFieldEnum>;
}

@ArgsType()
export class FindManyBookProgressLogArgs {
    @Field(() => BookProgressLogWhereInput, {nullable:true})
    where?: InstanceType<typeof BookProgressLogWhereInput>;
    @Field(() => [BookProgressLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookProgressLogOrderByWithRelationInput>;
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BookProgressLogWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookProgressLogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookProgressLogScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueBookProgressLogArgs {
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookProgressLogWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyBookProgressLogArgs {
    @Field(() => BookProgressLogUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof BookProgressLogUpdateManyMutationInput>;
    @Field(() => BookProgressLogWhereInput, {nullable:true})
    where?: InstanceType<typeof BookProgressLogWhereInput>;
}

@ArgsType()
export class UpdateOneBookProgressLogArgs {
    @Field(() => BookProgressLogUpdateInput, {nullable:false})
    data!: InstanceType<typeof BookProgressLogUpdateInput>;
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookProgressLogWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneBookProgressLogArgs {
    @Field(() => BookProgressLogWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BookProgressLogWhereUniqueInput>;
    @Field(() => BookProgressLogCreateInput, {nullable:false})
    create!: InstanceType<typeof BookProgressLogCreateInput>;
    @Field(() => BookProgressLogUpdateInput, {nullable:false})
    update!: InstanceType<typeof BookProgressLogUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BigIntFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: bigint | number;
    @Field(() => String, {nullable:true})
    increment?: bigint | number;
    @Field(() => String, {nullable:true})
    decrement?: bigint | number;
    @Field(() => String, {nullable:true})
    multiply?: bigint | number;
    @Field(() => String, {nullable:true})
    divide?: bigint | number;
}

@InputType()
export class BigIntFilter {
    @Field(() => String, {nullable:true})
    equals?: bigint | number;
    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;
    @Field(() => String, {nullable:true})
    lt?: bigint | number;
    @Field(() => String, {nullable:true})
    lte?: bigint | number;
    @Field(() => String, {nullable:true})
    gt?: bigint | number;
    @Field(() => String, {nullable:true})
    gte?: bigint | number;
    @Field(() => NestedBigIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedBigIntFilter>;
}

@InputType()
export class BigIntWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: bigint | number;
    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;
    @Field(() => String, {nullable:true})
    lt?: bigint | number;
    @Field(() => String, {nullable:true})
    lte?: bigint | number;
    @Field(() => String, {nullable:true})
    gt?: bigint | number;
    @Field(() => String, {nullable:true})
    gte?: bigint | number;
    @Field(() => NestedBigIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBigIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedBigIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedBigIntFilter>;
    @Field(() => NestedBigIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBigIntFilter>;
    @Field(() => NestedBigIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBigIntFilter>;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DecimalFieldUpdateOperationsInput {
    @Field(() => GraphQLDecimal, {nullable:true})
    set?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    increment?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    decrement?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    multiply?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    divide?: any;
}

@InputType()
export class DecimalFilter {
    @Field(() => GraphQLDecimal, {nullable:true})
    equals?: any;
    @Field(() => [GraphQLDecimal], {nullable:true})
    in?: Array<any>;
    @Field(() => [GraphQLDecimal], {nullable:true})
    notIn?: Array<any>;
    @Field(() => GraphQLDecimal, {nullable:true})
    lt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    lte?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gte?: any;
    @Field(() => NestedDecimalFilter, {nullable:true})
    not?: InstanceType<typeof NestedDecimalFilter>;
}

@InputType()
export class DecimalWithAggregatesFilter {
    @Field(() => GraphQLDecimal, {nullable:true})
    equals?: any;
    @Field(() => [GraphQLDecimal], {nullable:true})
    in?: Array<any>;
    @Field(() => [GraphQLDecimal], {nullable:true})
    notIn?: Array<any>;
    @Field(() => GraphQLDecimal, {nullable:true})
    lt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    lte?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gte?: any;
    @Field(() => NestedDecimalWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDecimalWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDecimalFilter>;
}

@InputType()
export class EnumArchitectRoleFieldUpdateOperationsInput {
    @Field(() => ArchitectRole, {nullable:true})
    set?: keyof typeof ArchitectRole;
}

@InputType()
export class EnumArchitectRoleFilter {
    @Field(() => ArchitectRole, {nullable:true})
    equals?: keyof typeof ArchitectRole;
    @Field(() => [ArchitectRole], {nullable:true})
    in?: Array<keyof typeof ArchitectRole>;
    @Field(() => [ArchitectRole], {nullable:true})
    notIn?: Array<keyof typeof ArchitectRole>;
    @Field(() => NestedEnumArchitectRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumArchitectRoleFilter>;
}

@InputType()
export class EnumArchitectRoleWithAggregatesFilter {
    @Field(() => ArchitectRole, {nullable:true})
    equals?: keyof typeof ArchitectRole;
    @Field(() => [ArchitectRole], {nullable:true})
    in?: Array<keyof typeof ArchitectRole>;
    @Field(() => [ArchitectRole], {nullable:true})
    notIn?: Array<keyof typeof ArchitectRole>;
    @Field(() => NestedEnumArchitectRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumArchitectRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumArchitectRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumArchitectRoleFilter>;
    @Field(() => NestedEnumArchitectRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumArchitectRoleFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedBigIntFilter {
    @Field(() => String, {nullable:true})
    equals?: bigint | number;
    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;
    @Field(() => String, {nullable:true})
    lt?: bigint | number;
    @Field(() => String, {nullable:true})
    lte?: bigint | number;
    @Field(() => String, {nullable:true})
    gt?: bigint | number;
    @Field(() => String, {nullable:true})
    gte?: bigint | number;
    @Field(() => NestedBigIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedBigIntFilter>;
}

@InputType()
export class NestedBigIntWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: bigint | number;
    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;
    @Field(() => String, {nullable:true})
    lt?: bigint | number;
    @Field(() => String, {nullable:true})
    lte?: bigint | number;
    @Field(() => String, {nullable:true})
    gt?: bigint | number;
    @Field(() => String, {nullable:true})
    gte?: bigint | number;
    @Field(() => NestedBigIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBigIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedBigIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedBigIntFilter>;
    @Field(() => NestedBigIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBigIntFilter>;
    @Field(() => NestedBigIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBigIntFilter>;
}

@InputType()
export class NestedBoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDecimalFilter {
    @Field(() => GraphQLDecimal, {nullable:true})
    equals?: any;
    @Field(() => [GraphQLDecimal], {nullable:true})
    in?: Array<any>;
    @Field(() => [GraphQLDecimal], {nullable:true})
    notIn?: Array<any>;
    @Field(() => GraphQLDecimal, {nullable:true})
    lt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    lte?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gte?: any;
    @Field(() => NestedDecimalFilter, {nullable:true})
    not?: InstanceType<typeof NestedDecimalFilter>;
}

@InputType()
export class NestedDecimalWithAggregatesFilter {
    @Field(() => GraphQLDecimal, {nullable:true})
    equals?: any;
    @Field(() => [GraphQLDecimal], {nullable:true})
    in?: Array<any>;
    @Field(() => [GraphQLDecimal], {nullable:true})
    notIn?: Array<any>;
    @Field(() => GraphQLDecimal, {nullable:true})
    lt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    lte?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gte?: any;
    @Field(() => NestedDecimalWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDecimalWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDecimalFilter>;
}

@InputType()
export class NestedEnumArchitectRoleFilter {
    @Field(() => ArchitectRole, {nullable:true})
    equals?: keyof typeof ArchitectRole;
    @Field(() => [ArchitectRole], {nullable:true})
    in?: Array<keyof typeof ArchitectRole>;
    @Field(() => [ArchitectRole], {nullable:true})
    notIn?: Array<keyof typeof ArchitectRole>;
    @Field(() => NestedEnumArchitectRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumArchitectRoleFilter>;
}

@InputType()
export class NestedEnumArchitectRoleWithAggregatesFilter {
    @Field(() => ArchitectRole, {nullable:true})
    equals?: keyof typeof ArchitectRole;
    @Field(() => [ArchitectRole], {nullable:true})
    in?: Array<keyof typeof ArchitectRole>;
    @Field(() => [ArchitectRole], {nullable:true})
    notIn?: Array<keyof typeof ArchitectRole>;
    @Field(() => NestedEnumArchitectRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumArchitectRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumArchitectRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumArchitectRoleFilter>;
    @Field(() => NestedEnumArchitectRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumArchitectRoleFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatNullableFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableIntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateShelf {
    @Field(() => ShelfCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ShelfCountAggregate>;
    @Field(() => ShelfMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ShelfMinAggregate>;
    @Field(() => ShelfMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ShelfMaxAggregate>;
}

@ArgsType()
export class CreateManyShelfArgs {
    @Field(() => [ShelfCreateManyInput], {nullable:false})
    data!: Array<ShelfCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneShelfArgs {
    @Field(() => ShelfCreateInput, {nullable:false})
    data!: InstanceType<typeof ShelfCreateInput>;
}

@ArgsType()
export class DeleteManyShelfArgs {
    @Field(() => ShelfWhereInput, {nullable:true})
    where?: InstanceType<typeof ShelfWhereInput>;
}

@ArgsType()
export class DeleteOneShelfArgs {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ShelfWhereUniqueInput>;
}

@ArgsType()
export class FindFirstShelfArgs {
    @Field(() => ShelfWhereInput, {nullable:true})
    where?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => [ShelfOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShelfOrderByWithRelationInput>;
    @Field(() => ShelfWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ShelfWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ShelfScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShelfScalarFieldEnum>;
}

@ArgsType()
export class FindManyShelfArgs {
    @Field(() => ShelfWhereInput, {nullable:true})
    where?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => [ShelfOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShelfOrderByWithRelationInput>;
    @Field(() => ShelfWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ShelfWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ShelfScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShelfScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueShelfArgs {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ShelfWhereUniqueInput>;
}

@ArgsType()
export class ShelfAggregateArgs {
    @Field(() => ShelfWhereInput, {nullable:true})
    where?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => [ShelfOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShelfOrderByWithRelationInput>;
    @Field(() => ShelfWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ShelfWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ShelfCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ShelfCountAggregateInput>;
    @Field(() => ShelfMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ShelfMinAggregateInput>;
    @Field(() => ShelfMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ShelfMaxAggregateInput>;
}

@InputType()
export class ShelfCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    isPublic?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ShelfCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    isPublic!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ShelfCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isPublic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class ShelfCount {
    @Field(() => Int, {nullable:false})
    books!: number;
}

@InputType()
export class ShelfCreateManyUserInputEnvelope {
    @Field(() => [ShelfCreateManyUserInput], {nullable:false})
    data!: Array<ShelfCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ShelfCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfCreateNestedManyWithoutBooksInput {
    @Field(() => [ShelfCreateWithoutBooksInput], {nullable:true})
    create?: Array<ShelfCreateWithoutBooksInput>;
    @Field(() => [ShelfCreateOrConnectWithoutBooksInput], {nullable:true})
    connectOrCreate?: Array<ShelfCreateOrConnectWithoutBooksInput>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    connect?: Array<ShelfWhereUniqueInput>;
}

@InputType()
export class ShelfCreateNestedManyWithoutUserInput {
    @Field(() => [ShelfCreateWithoutUserInput], {nullable:true})
    create?: Array<ShelfCreateWithoutUserInput>;
    @Field(() => [ShelfCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ShelfCreateOrConnectWithoutUserInput>;
    @Field(() => ShelfCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ShelfCreateManyUserInputEnvelope>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    connect?: Array<ShelfWhereUniqueInput>;
}

@InputType()
export class ShelfCreateOrConnectWithoutBooksInput {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ShelfWhereUniqueInput>;
    @Field(() => ShelfCreateWithoutBooksInput, {nullable:false})
    create!: InstanceType<typeof ShelfCreateWithoutBooksInput>;
}

@InputType()
export class ShelfCreateOrConnectWithoutUserInput {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ShelfWhereUniqueInput>;
    @Field(() => ShelfCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof ShelfCreateWithoutUserInput>;
}

@InputType()
export class ShelfCreateWithoutBooksInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutShelvesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutShelvesInput>;
}

@InputType()
export class ShelfCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => BookCreateNestedManyWithoutShelvesInput, {nullable:true})
    books?: InstanceType<typeof BookCreateNestedManyWithoutShelvesInput>;
}

@InputType()
export class ShelfCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutShelvesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutShelvesInput>;
    @Field(() => BookCreateNestedManyWithoutShelvesInput, {nullable:true})
    books?: InstanceType<typeof BookCreateNestedManyWithoutShelvesInput>;
}

@ArgsType()
export class ShelfGroupByArgs {
    @Field(() => ShelfWhereInput, {nullable:true})
    where?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => [ShelfOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ShelfOrderByWithAggregationInput>;
    @Field(() => [ShelfScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ShelfScalarFieldEnum>;
    @Field(() => ShelfScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ShelfScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ShelfCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ShelfCountAggregateInput>;
    @Field(() => ShelfMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ShelfMinAggregateInput>;
    @Field(() => ShelfMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ShelfMaxAggregateInput>;
}

@ObjectType()
export class ShelfGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:false})
    isPublic!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => ShelfCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ShelfCountAggregate>;
    @Field(() => ShelfMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ShelfMinAggregate>;
    @Field(() => ShelfMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ShelfMaxAggregate>;
}

@InputType()
export class ShelfListRelationFilter {
    @Field(() => ShelfWhereInput, {nullable:true})
    every?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => ShelfWhereInput, {nullable:true})
    some?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => ShelfWhereInput, {nullable:true})
    none?: InstanceType<typeof ShelfWhereInput>;
}

@InputType()
export class ShelfMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    isPublic?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ShelfMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isPublic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ShelfMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    isPublic?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ShelfMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isPublic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ShelfOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ShelfOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isPublic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ShelfCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ShelfCountOrderByAggregateInput>;
    @Field(() => ShelfMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ShelfMaxOrderByAggregateInput>;
    @Field(() => ShelfMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ShelfMinOrderByAggregateInput>;
}

@InputType()
export class ShelfOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isPublic?: keyof typeof SortOrder;
    @Field(() => BookOrderByRelationAggregateInput, {nullable:true})
    books?: InstanceType<typeof BookOrderByRelationAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ShelfScalarWhereWithAggregatesInput {
    @Field(() => [ShelfScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShelfScalarWhereWithAggregatesInput>;
    @Field(() => [ShelfScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShelfScalarWhereWithAggregatesInput>;
    @Field(() => [ShelfScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShelfScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isPublic?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ShelfScalarWhereInput {
    @Field(() => [ShelfScalarWhereInput], {nullable:true})
    AND?: Array<ShelfScalarWhereInput>;
    @Field(() => [ShelfScalarWhereInput], {nullable:true})
    OR?: Array<ShelfScalarWhereInput>;
    @Field(() => [ShelfScalarWhereInput], {nullable:true})
    NOT?: Array<ShelfScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isPublic?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class ShelfUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [ShelfCreateWithoutUserInput], {nullable:true})
    create?: Array<ShelfCreateWithoutUserInput>;
    @Field(() => [ShelfCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ShelfCreateOrConnectWithoutUserInput>;
    @Field(() => ShelfCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ShelfCreateManyUserInputEnvelope>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    connect?: Array<ShelfWhereUniqueInput>;
}

@InputType()
export class ShelfUncheckedCreateWithoutBooksInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfUncheckedUpdateManyWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfUncheckedUpdateManyWithoutUserInput {
    @Field(() => [ShelfCreateWithoutUserInput], {nullable:true})
    create?: Array<ShelfCreateWithoutUserInput>;
    @Field(() => [ShelfCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ShelfCreateOrConnectWithoutUserInput>;
    @Field(() => [ShelfUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ShelfUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => ShelfCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ShelfCreateManyUserInputEnvelope>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    set?: Array<ShelfWhereUniqueInput>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    disconnect?: Array<ShelfWhereUniqueInput>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    delete?: Array<ShelfWhereUniqueInput>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    connect?: Array<ShelfWhereUniqueInput>;
    @Field(() => [ShelfUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ShelfUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [ShelfUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ShelfUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [ShelfScalarWhereInput], {nullable:true})
    deleteMany?: Array<ShelfScalarWhereInput>;
}

@InputType()
export class ShelfUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfUncheckedUpdateWithoutBooksInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ShelfUpdateManyWithWhereWithoutBooksInput {
    @Field(() => ShelfScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ShelfScalarWhereInput>;
    @Field(() => ShelfUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ShelfUpdateManyMutationInput>;
}

@InputType()
export class ShelfUpdateManyWithWhereWithoutUserInput {
    @Field(() => ShelfScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ShelfScalarWhereInput>;
    @Field(() => ShelfUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ShelfUpdateManyMutationInput>;
}

@InputType()
export class ShelfUpdateManyWithoutBooksInput {
    @Field(() => [ShelfCreateWithoutBooksInput], {nullable:true})
    create?: Array<ShelfCreateWithoutBooksInput>;
    @Field(() => [ShelfCreateOrConnectWithoutBooksInput], {nullable:true})
    connectOrCreate?: Array<ShelfCreateOrConnectWithoutBooksInput>;
    @Field(() => [ShelfUpsertWithWhereUniqueWithoutBooksInput], {nullable:true})
    upsert?: Array<ShelfUpsertWithWhereUniqueWithoutBooksInput>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    set?: Array<ShelfWhereUniqueInput>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    disconnect?: Array<ShelfWhereUniqueInput>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    delete?: Array<ShelfWhereUniqueInput>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    connect?: Array<ShelfWhereUniqueInput>;
    @Field(() => [ShelfUpdateWithWhereUniqueWithoutBooksInput], {nullable:true})
    update?: Array<ShelfUpdateWithWhereUniqueWithoutBooksInput>;
    @Field(() => [ShelfUpdateManyWithWhereWithoutBooksInput], {nullable:true})
    updateMany?: Array<ShelfUpdateManyWithWhereWithoutBooksInput>;
    @Field(() => [ShelfScalarWhereInput], {nullable:true})
    deleteMany?: Array<ShelfScalarWhereInput>;
}

@InputType()
export class ShelfUpdateManyWithoutUserInput {
    @Field(() => [ShelfCreateWithoutUserInput], {nullable:true})
    create?: Array<ShelfCreateWithoutUserInput>;
    @Field(() => [ShelfCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ShelfCreateOrConnectWithoutUserInput>;
    @Field(() => [ShelfUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ShelfUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => ShelfCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ShelfCreateManyUserInputEnvelope>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    set?: Array<ShelfWhereUniqueInput>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    disconnect?: Array<ShelfWhereUniqueInput>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    delete?: Array<ShelfWhereUniqueInput>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    connect?: Array<ShelfWhereUniqueInput>;
    @Field(() => [ShelfUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ShelfUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [ShelfUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ShelfUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [ShelfScalarWhereInput], {nullable:true})
    deleteMany?: Array<ShelfScalarWhereInput>;
}

@InputType()
export class ShelfUpdateWithWhereUniqueWithoutBooksInput {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ShelfWhereUniqueInput>;
    @Field(() => ShelfUpdateWithoutBooksInput, {nullable:false})
    data!: InstanceType<typeof ShelfUpdateWithoutBooksInput>;
}

@InputType()
export class ShelfUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ShelfWhereUniqueInput>;
    @Field(() => ShelfUpdateWithoutUserInput, {nullable:false})
    data!: InstanceType<typeof ShelfUpdateWithoutUserInput>;
}

@InputType()
export class ShelfUpdateWithoutBooksInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutShelvesInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutShelvesInput>;
}

@InputType()
export class ShelfUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => BookUpdateManyWithoutShelvesInput, {nullable:true})
    books?: InstanceType<typeof BookUpdateManyWithoutShelvesInput>;
}

@InputType()
export class ShelfUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutShelvesInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutShelvesInput>;
    @Field(() => BookUpdateManyWithoutShelvesInput, {nullable:true})
    books?: InstanceType<typeof BookUpdateManyWithoutShelvesInput>;
}

@InputType()
export class ShelfUpsertWithWhereUniqueWithoutBooksInput {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ShelfWhereUniqueInput>;
    @Field(() => ShelfUpdateWithoutBooksInput, {nullable:false})
    update!: InstanceType<typeof ShelfUpdateWithoutBooksInput>;
    @Field(() => ShelfCreateWithoutBooksInput, {nullable:false})
    create!: InstanceType<typeof ShelfCreateWithoutBooksInput>;
}

@InputType()
export class ShelfUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ShelfWhereUniqueInput>;
    @Field(() => ShelfUpdateWithoutUserInput, {nullable:false})
    update!: InstanceType<typeof ShelfUpdateWithoutUserInput>;
    @Field(() => ShelfCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof ShelfCreateWithoutUserInput>;
}

@InputType()
export class ShelfWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class ShelfWhereInput {
    @Field(() => [ShelfWhereInput], {nullable:true})
    AND?: Array<ShelfWhereInput>;
    @Field(() => [ShelfWhereInput], {nullable:true})
    OR?: Array<ShelfWhereInput>;
    @Field(() => [ShelfWhereInput], {nullable:true})
    NOT?: Array<ShelfWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isPublic?: InstanceType<typeof BoolFilter>;
    @Field(() => BookListRelationFilter, {nullable:true})
    books?: InstanceType<typeof BookListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

/** A shelf is created by users to collect a number of books together */
@ObjectType({description:'A shelf is created by users to collect a number of books together'})
export class Shelf {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPublic!: boolean;
    @Field(() => [Book], {nullable:true})
    books?: Array<Book>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => ShelfCount, {nullable:false})
    _count?: InstanceType<typeof ShelfCount>;
}

@ArgsType()
export class UpdateManyShelfArgs {
    @Field(() => ShelfUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ShelfUpdateManyMutationInput>;
    @Field(() => ShelfWhereInput, {nullable:true})
    where?: InstanceType<typeof ShelfWhereInput>;
}

@ArgsType()
export class UpdateOneShelfArgs {
    @Field(() => ShelfUpdateInput, {nullable:false})
    data!: InstanceType<typeof ShelfUpdateInput>;
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ShelfWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneShelfArgs {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ShelfWhereUniqueInput>;
    @Field(() => ShelfCreateInput, {nullable:false})
    create!: InstanceType<typeof ShelfCreateInput>;
    @Field(() => ShelfUpdateInput, {nullable:false})
    update!: InstanceType<typeof ShelfUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    issuer?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    issuer!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issuer?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    shelves!: number;
    @Field(() => Int, {nullable:false})
    BookProgressLog!: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    issuer!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutBookProgressLogInput {
    @Field(() => UserCreateWithoutBookProgressLogInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutBookProgressLogInput>;
    @Field(() => UserCreateOrConnectWithoutBookProgressLogInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutBookProgressLogInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutShelvesInput {
    @Field(() => UserCreateWithoutShelvesInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutShelvesInput>;
    @Field(() => UserCreateOrConnectWithoutShelvesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutShelvesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutBookProgressLogInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutBookProgressLogInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutBookProgressLogInput>;
}

@InputType()
export class UserCreateOrConnectWithoutProfileInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutProfileInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutProfileInput>;
}

@InputType()
export class UserCreateOrConnectWithoutShelvesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutShelvesInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutShelvesInput>;
}

@InputType()
export class UserCreateWithoutBookProgressLogInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    issuer!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileCreateNestedOneWithoutUserInput>;
    @Field(() => ShelfCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutProfileInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    issuer!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ShelfCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
    @Field(() => BookProgressLogCreateNestedManyWithoutUserInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    issuer!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileCreateNestedOneWithoutUserInput>;
    @Field(() => BookProgressLogCreateNestedManyWithoutUserInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    issuer!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileCreateNestedOneWithoutUserInput>;
    @Field(() => ShelfCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
    @Field(() => BookProgressLogCreateNestedManyWithoutUserInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogCreateNestedManyWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    issuer!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    issuer?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issuer?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    issuer?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issuer?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issuer?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issuer?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => UserProfileOrderByWithRelationInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileOrderByWithRelationInput>;
    @Field(() => ShelfOrderByRelationAggregateInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfOrderByRelationAggregateInput>;
    @Field(() => BookProgressLogOrderByRelationAggregateInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    issuer?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutBookProgressLogInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    issuer!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileUncheckedCreateNestedOneWithoutUserInput>;
    @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutProfileInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    issuer!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => BookProgressLogUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    issuer!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileUncheckedCreateNestedOneWithoutUserInput>;
    @Field(() => BookProgressLogUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    issuer!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileUncheckedCreateNestedOneWithoutUserInput>;
    @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => BookProgressLogUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateWithoutBookProgressLogInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserProfileUncheckedUpdateOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileUncheckedUpdateOneWithoutUserInput>;
    @Field(() => ShelfUncheckedUpdateManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutProfileInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ShelfUncheckedUpdateManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserInput>;
    @Field(() => BookProgressLogUncheckedUpdateManyWithoutUserInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserProfileUncheckedUpdateOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileUncheckedUpdateOneWithoutUserInput>;
    @Field(() => BookProgressLogUncheckedUpdateManyWithoutUserInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserProfileUncheckedUpdateOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileUncheckedUpdateOneWithoutUserInput>;
    @Field(() => ShelfUncheckedUpdateManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserInput>;
    @Field(() => BookProgressLogUncheckedUpdateManyWithoutUserInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserUpdateOneRequiredWithoutBookProgressLogInput {
    @Field(() => UserCreateWithoutBookProgressLogInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutBookProgressLogInput>;
    @Field(() => UserCreateOrConnectWithoutBookProgressLogInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutBookProgressLogInput>;
    @Field(() => UserUpsertWithoutBookProgressLogInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutBookProgressLogInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutBookProgressLogInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutBookProgressLogInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserUpsertWithoutProfileInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutProfileInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutProfileInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutProfileInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutShelvesInput {
    @Field(() => UserCreateWithoutShelvesInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutShelvesInput>;
    @Field(() => UserCreateOrConnectWithoutShelvesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutShelvesInput>;
    @Field(() => UserUpsertWithoutShelvesInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutShelvesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutShelvesInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutShelvesInput>;
}

@InputType()
export class UserUpdateWithoutBookProgressLogInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserProfileUpdateOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileUpdateOneWithoutUserInput>;
    @Field(() => ShelfUpdateManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateWithoutProfileInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ShelfUpdateManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserInput>;
    @Field(() => BookProgressLogUpdateManyWithoutUserInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserProfileUpdateOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileUpdateOneWithoutUserInput>;
    @Field(() => BookProgressLogUpdateManyWithoutUserInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserProfileUpdateOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof UserProfileUpdateOneWithoutUserInput>;
    @Field(() => ShelfUpdateManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserInput>;
    @Field(() => BookProgressLogUpdateManyWithoutUserInput, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpsertWithoutBookProgressLogInput {
    @Field(() => UserUpdateWithoutBookProgressLogInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutBookProgressLogInput>;
    @Field(() => UserCreateWithoutBookProgressLogInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutBookProgressLogInput>;
}

@InputType()
export class UserUpsertWithoutProfileInput {
    @Field(() => UserUpdateWithoutProfileInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutProfileInput>;
    @Field(() => UserCreateWithoutProfileInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutProfileInput>;
}

@InputType()
export class UserUpsertWithoutShelvesInput {
    @Field(() => UserUpdateWithoutShelvesInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutShelvesInput>;
    @Field(() => UserCreateWithoutShelvesInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutShelvesInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    issuer?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    issuer?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserProfileRelationFilter, {nullable:true})
    profile?: InstanceType<typeof UserProfileRelationFilter>;
    @Field(() => ShelfListRelationFilter, {nullable:true})
    shelves?: InstanceType<typeof ShelfListRelationFilter>;
    @Field(() => BookProgressLogListRelationFilter, {nullable:true})
    BookProgressLog?: InstanceType<typeof BookProgressLogListRelationFilter>;
}

/** This model will represent a user of the service. */
@ObjectType({description:'This model will represent a user of the service.'})
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    issuer!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => UserProfile, {nullable:true})
    profile?: InstanceType<typeof UserProfile> | null;
    @Field(() => [Shelf], {nullable:true})
    shelves?: Array<Shelf>;
    @Field(() => [BookProgressLog], {nullable:true})
    BookProgressLog?: Array<BookProgressLog>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}

@ObjectType()
export class AggregateUserProfile {
    @Field(() => UserProfileCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserProfileCountAggregate>;
    @Field(() => UserProfileAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserProfileAvgAggregate>;
    @Field(() => UserProfileSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserProfileSumAggregate>;
    @Field(() => UserProfileMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserProfileMinAggregate>;
    @Field(() => UserProfileMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserProfileMaxAggregate>;
}

@ArgsType()
export class CreateManyUserProfileArgs {
    @Field(() => [UserProfileCreateManyInput], {nullable:false})
    data!: Array<UserProfileCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserProfileArgs {
    @Field(() => UserProfileCreateInput, {nullable:false})
    data!: InstanceType<typeof UserProfileCreateInput>;
}

@ArgsType()
export class DeleteManyUserProfileArgs {
    @Field(() => UserProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof UserProfileWhereInput>;
}

@ArgsType()
export class DeleteOneUserProfileArgs {
    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserProfileWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserProfileArgs {
    @Field(() => UserProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof UserProfileWhereInput>;
    @Field(() => [UserProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserProfileOrderByWithRelationInput>;
    @Field(() => UserProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserProfileScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserProfileArgs {
    @Field(() => UserProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof UserProfileWhereInput>;
    @Field(() => [UserProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserProfileOrderByWithRelationInput>;
    @Field(() => UserProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserProfileScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserProfileArgs {
    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserProfileWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserProfileArgs {
    @Field(() => UserProfileUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof UserProfileUpdateManyMutationInput>;
    @Field(() => UserProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof UserProfileWhereInput>;
}

@ArgsType()
export class UpdateOneUserProfileArgs {
    @Field(() => UserProfileUpdateInput, {nullable:false})
    data!: InstanceType<typeof UserProfileUpdateInput>;
    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserProfileWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserProfileArgs {
    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserProfileWhereUniqueInput>;
    @Field(() => UserProfileCreateInput, {nullable:false})
    create!: InstanceType<typeof UserProfileCreateInput>;
    @Field(() => UserProfileUpdateInput, {nullable:false})
    update!: InstanceType<typeof UserProfileUpdateInput>;
}

@ArgsType()
export class UserProfileAggregateArgs {
    @Field(() => UserProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof UserProfileWhereInput>;
    @Field(() => [UserProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserProfileOrderByWithRelationInput>;
    @Field(() => UserProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserProfileCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserProfileCountAggregateInput>;
    @Field(() => UserProfileAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserProfileAvgAggregateInput>;
    @Field(() => UserProfileSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserProfileSumAggregateInput>;
    @Field(() => UserProfileMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserProfileMinAggregateInput>;
    @Field(() => UserProfileMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserProfileMaxAggregateInput>;
}

@InputType()
export class UserProfileAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    age?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
}

@ObjectType()
export class UserProfileAvgAggregate {
    @Field(() => Float, {nullable:true})
    age?: number;
    @Field(() => Float, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
}

@InputType()
export class UserProfileCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    age?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserProfileCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    bio!: number;
    @Field(() => Int, {nullable:false})
    age!: number;
    @Field(() => Int, {nullable:false})
    username!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserProfileCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
}

@InputType()
export class UserProfileCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileCreateNestedOneWithoutUserInput {
    @Field(() => UserProfileCreateWithoutUserInput, {nullable:true})
    create?: InstanceType<typeof UserProfileCreateWithoutUserInput>;
    @Field(() => UserProfileCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserProfileCreateOrConnectWithoutUserInput>;
    @Field(() => UserProfileWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserProfileWhereUniqueInput>;
}

@InputType()
export class UserProfileCreateOrConnectWithoutUserInput {
    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserProfileWhereUniqueInput>;
    @Field(() => UserProfileCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof UserProfileCreateWithoutUserInput>;
}

@InputType()
export class UserProfileCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutProfileInput>;
}

@ArgsType()
export class UserProfileGroupByArgs {
    @Field(() => UserProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof UserProfileWhereInput>;
    @Field(() => [UserProfileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserProfileOrderByWithAggregationInput>;
    @Field(() => [UserProfileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserProfileScalarFieldEnum>;
    @Field(() => UserProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserProfileScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserProfileCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserProfileCountAggregateInput>;
    @Field(() => UserProfileAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserProfileAvgAggregateInput>;
    @Field(() => UserProfileSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserProfileSumAggregateInput>;
    @Field(() => UserProfileMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserProfileMinAggregateInput>;
    @Field(() => UserProfileMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserProfileMaxAggregateInput>;
}

@ObjectType()
export class UserProfileGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => UserProfileCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserProfileCountAggregate>;
    @Field(() => UserProfileAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserProfileAvgAggregate>;
    @Field(() => UserProfileSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserProfileSumAggregate>;
    @Field(() => UserProfileMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserProfileMinAggregate>;
    @Field(() => UserProfileMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserProfileMaxAggregate>;
}

@InputType()
export class UserProfileMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    age?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
}

@ObjectType()
export class UserProfileMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
}

@InputType()
export class UserProfileMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    age?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
}

@ObjectType()
export class UserProfileMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
}

@InputType()
export class UserProfileOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => UserProfileCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserProfileCountOrderByAggregateInput>;
    @Field(() => UserProfileAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserProfileAvgOrderByAggregateInput>;
    @Field(() => UserProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserProfileMaxOrderByAggregateInput>;
    @Field(() => UserProfileMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserProfileMinOrderByAggregateInput>;
    @Field(() => UserProfileSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserProfileSumOrderByAggregateInput>;
}

@InputType()
export class UserProfileOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
}

@InputType()
export class UserProfileRelationFilter {
    @Field(() => UserProfileWhereInput, {nullable:true})
    is?: InstanceType<typeof UserProfileWhereInput>;
    @Field(() => UserProfileWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserProfileWhereInput>;
}

@InputType()
export class UserProfileScalarWhereWithAggregatesInput {
    @Field(() => [UserProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserProfileScalarWhereWithAggregatesInput>;
    @Field(() => [UserProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserProfileScalarWhereWithAggregatesInput>;
    @Field(() => [UserProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserProfileScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    bio?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    age?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    username?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    countryId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
}

@InputType()
export class UserProfileSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    age?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
}

@ObjectType()
export class UserProfileSumAggregate {
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
}

@InputType()
export class UserProfileUncheckedCreateNestedOneWithoutUserInput {
    @Field(() => UserProfileCreateWithoutUserInput, {nullable:true})
    create?: InstanceType<typeof UserProfileCreateWithoutUserInput>;
    @Field(() => UserProfileCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserProfileCreateOrConnectWithoutUserInput>;
    @Field(() => UserProfileWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserProfileWhereUniqueInput>;
}

@InputType()
export class UserProfileUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileUncheckedUpdateOneWithoutUserInput {
    @Field(() => UserProfileCreateWithoutUserInput, {nullable:true})
    create?: InstanceType<typeof UserProfileCreateWithoutUserInput>;
    @Field(() => UserProfileCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserProfileCreateOrConnectWithoutUserInput>;
    @Field(() => UserProfileUpsertWithoutUserInput, {nullable:true})
    upsert?: InstanceType<typeof UserProfileUpsertWithoutUserInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => UserProfileWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserProfileWhereUniqueInput>;
    @Field(() => UserProfileUpdateWithoutUserInput, {nullable:true})
    update?: InstanceType<typeof UserProfileUpdateWithoutUserInput>;
}

@InputType()
export class UserProfileUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileUpdateOneWithoutUserInput {
    @Field(() => UserProfileCreateWithoutUserInput, {nullable:true})
    create?: InstanceType<typeof UserProfileCreateWithoutUserInput>;
    @Field(() => UserProfileCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserProfileCreateOrConnectWithoutUserInput>;
    @Field(() => UserProfileUpsertWithoutUserInput, {nullable:true})
    upsert?: InstanceType<typeof UserProfileUpsertWithoutUserInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => UserProfileWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserProfileWhereUniqueInput>;
    @Field(() => UserProfileUpdateWithoutUserInput, {nullable:true})
    update?: InstanceType<typeof UserProfileUpdateWithoutUserInput>;
}

@InputType()
export class UserProfileUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class UserProfileUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => UserUpdateOneRequiredWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutProfileInput>;
}

@InputType()
export class UserProfileUpsertWithoutUserInput {
    @Field(() => UserProfileUpdateWithoutUserInput, {nullable:false})
    update!: InstanceType<typeof UserProfileUpdateWithoutUserInput>;
    @Field(() => UserProfileCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof UserProfileCreateWithoutUserInput>;
}

@InputType()
export class UserProfileWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
}

@InputType()
export class UserProfileWhereInput {
    @Field(() => [UserProfileWhereInput], {nullable:true})
    AND?: Array<UserProfileWhereInput>;
    @Field(() => [UserProfileWhereInput], {nullable:true})
    OR?: Array<UserProfileWhereInput>;
    @Field(() => [UserProfileWhereInput], {nullable:true})
    NOT?: Array<UserProfileWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    bio?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    age?: InstanceType<typeof IntNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    username?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    countryId?: InstanceType<typeof IntNullableFilter>;
}

/** This model will track profile information about the user */
@ObjectType({description:'This model will track profile information about the user'})
export class UserProfile {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    bio!: string | null;
    @Field(() => Int, {nullable:true})
    age!: number | null;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Int, {nullable:true})
    countryId!: number | null;
}
