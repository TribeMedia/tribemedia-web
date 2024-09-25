export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Opaque: { input: any; output: any; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type Application = Node & {
  __typename?: 'Application';
  aiContext?: Maybe<Scalars['String']['output']>;
  applicationFeatureCollection?: Maybe<ApplicationFeatureConnection>;
  applicationType?: Maybe<ApplicationType>;
  applicationTypeId?: Maybe<Scalars['UUID']['output']>;
  coverUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  iconUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  systemMessage?: Maybe<ChatMessage>;
  systemMessageId?: Maybe<Scalars['UUID']['output']>;
};


export type ApplicationApplicationFeatureCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ApplicationFeatureFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationFeatureOrderBy>>;
};

export type ApplicationConnection = {
  __typename?: 'ApplicationConnection';
  edges: Array<ApplicationEdge>;
  pageInfo: PageInfo;
};

export type ApplicationDeleteResponse = {
  __typename?: 'ApplicationDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Application>;
};

export type ApplicationEdge = {
  __typename?: 'ApplicationEdge';
  cursor: Scalars['String']['output'];
  node: Application;
};

export type ApplicationFeature = Node & {
  __typename?: 'ApplicationFeature';
  application: Application;
  applicationId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  feature: Feature;
  featureId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
};

export type ApplicationFeatureConnection = {
  __typename?: 'ApplicationFeatureConnection';
  edges: Array<ApplicationFeatureEdge>;
  pageInfo: PageInfo;
};

export type ApplicationFeatureDeleteResponse = {
  __typename?: 'ApplicationFeatureDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ApplicationFeature>;
};

export type ApplicationFeatureEdge = {
  __typename?: 'ApplicationFeatureEdge';
  cursor: Scalars['String']['output'];
  node: ApplicationFeature;
};

export type ApplicationFeatureFilter = {
  and?: InputMaybe<Array<ApplicationFeatureFilter>>;
  applicationId?: InputMaybe<UuidFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  featureId?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ApplicationFeatureFilter>;
  or?: InputMaybe<Array<ApplicationFeatureFilter>>;
};

export type ApplicationFeatureInsertInput = {
  applicationId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  featureId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ApplicationFeatureInsertResponse = {
  __typename?: 'ApplicationFeatureInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ApplicationFeature>;
};

export type ApplicationFeatureOrderBy = {
  applicationId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  featureId?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type ApplicationFeatureUpdateInput = {
  applicationId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  featureId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ApplicationFeatureUpdateResponse = {
  __typename?: 'ApplicationFeatureUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ApplicationFeature>;
};

export type ApplicationFilter = {
  aiContext?: InputMaybe<StringFilter>;
  and?: InputMaybe<Array<ApplicationFilter>>;
  applicationTypeId?: InputMaybe<UuidFilter>;
  coverUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  iconUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ApplicationFilter>;
  or?: InputMaybe<Array<ApplicationFilter>>;
  systemMessageId?: InputMaybe<UuidFilter>;
};

export type ApplicationInsertInput = {
  aiContext?: InputMaybe<Scalars['String']['input']>;
  applicationTypeId?: InputMaybe<Scalars['UUID']['input']>;
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  systemMessageId?: InputMaybe<Scalars['UUID']['input']>;
};

export type ApplicationInsertResponse = {
  __typename?: 'ApplicationInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Application>;
};

export type ApplicationOrderBy = {
  aiContext?: InputMaybe<OrderByDirection>;
  applicationTypeId?: InputMaybe<OrderByDirection>;
  coverUrl?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  iconUrl?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  systemMessageId?: InputMaybe<OrderByDirection>;
};

export type ApplicationType = Node & {
  __typename?: 'ApplicationType';
  applicationCollection?: Maybe<ApplicationConnection>;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  schema?: Maybe<Scalars['JSON']['output']>;
};


export type ApplicationTypeApplicationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ApplicationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationOrderBy>>;
};

export type ApplicationTypeConnection = {
  __typename?: 'ApplicationTypeConnection';
  edges: Array<ApplicationTypeEdge>;
  pageInfo: PageInfo;
};

export type ApplicationTypeDeleteResponse = {
  __typename?: 'ApplicationTypeDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ApplicationType>;
};

export type ApplicationTypeEdge = {
  __typename?: 'ApplicationTypeEdge';
  cursor: Scalars['String']['output'];
  node: ApplicationType;
};

export type ApplicationTypeFilter = {
  and?: InputMaybe<Array<ApplicationTypeFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ApplicationTypeFilter>;
  or?: InputMaybe<Array<ApplicationTypeFilter>>;
};

export type ApplicationTypeInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Scalars['JSON']['input']>;
};

export type ApplicationTypeInsertResponse = {
  __typename?: 'ApplicationTypeInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ApplicationType>;
};

export type ApplicationTypeOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type ApplicationTypeUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Scalars['JSON']['input']>;
};

export type ApplicationTypeUpdateResponse = {
  __typename?: 'ApplicationTypeUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ApplicationType>;
};

export type ApplicationUpdateInput = {
  aiContext?: InputMaybe<Scalars['String']['input']>;
  applicationTypeId?: InputMaybe<Scalars['UUID']['input']>;
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  systemMessageId?: InputMaybe<Scalars['UUID']['input']>;
};

export type ApplicationUpdateResponse = {
  __typename?: 'ApplicationUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Application>;
};

export type Asset = Node & {
  __typename?: 'Asset';
  approvedAt?: Maybe<Scalars['Datetime']['output']>;
  archivedAt?: Maybe<Scalars['Datetime']['output']>;
  assetCategoryCollection?: Maybe<AssetCategoryConnection>;
  assetType: AssetType;
  assetTypeId: Scalars['UUID']['output'];
  coverUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  creationType?: Maybe<CreationType>;
  creationTypeId?: Maybe<Scalars['UUID']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fileName: Scalars['String']['output'];
  fileSize?: Maybe<Scalars['Float']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isApproved: Scalars['Boolean']['output'];
  isArchived: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  mimeType: MimeType;
  mimeTypeId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['UUID']['output']>;
  prompt?: Maybe<Prompt>;
  promptId?: Maybe<Scalars['UUID']['output']>;
  publicationUrl?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['Datetime']['output']>;
  status: AssetStatus;
  statusId: Scalars['UUID']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type AssetAssetCategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetCategoryOrderBy>>;
};

export type AssetCategory = Node & {
  __typename?: 'AssetCategory';
  asset: Asset;
  assetId: Scalars['UUID']['output'];
  category: Category;
  categoryId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
};

export type AssetCategoryConnection = {
  __typename?: 'AssetCategoryConnection';
  edges: Array<AssetCategoryEdge>;
  pageInfo: PageInfo;
};

export type AssetCategoryDeleteResponse = {
  __typename?: 'AssetCategoryDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<AssetCategory>;
};

export type AssetCategoryEdge = {
  __typename?: 'AssetCategoryEdge';
  cursor: Scalars['String']['output'];
  node: AssetCategory;
};

export type AssetCategoryFilter = {
  and?: InputMaybe<Array<AssetCategoryFilter>>;
  assetId?: InputMaybe<UuidFilter>;
  categoryId?: InputMaybe<UuidFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<AssetCategoryFilter>;
  or?: InputMaybe<Array<AssetCategoryFilter>>;
};

export type AssetCategoryInsertInput = {
  assetId?: InputMaybe<Scalars['UUID']['input']>;
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type AssetCategoryInsertResponse = {
  __typename?: 'AssetCategoryInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<AssetCategory>;
};

export type AssetCategoryOrderBy = {
  assetId?: InputMaybe<OrderByDirection>;
  categoryId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type AssetCategoryUpdateInput = {
  assetId?: InputMaybe<Scalars['UUID']['input']>;
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type AssetCategoryUpdateResponse = {
  __typename?: 'AssetCategoryUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<AssetCategory>;
};

export type AssetConnection = {
  __typename?: 'AssetConnection';
  edges: Array<AssetEdge>;
  pageInfo: PageInfo;
};

export type AssetDeleteResponse = {
  __typename?: 'AssetDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Asset>;
};

export type AssetEdge = {
  __typename?: 'AssetEdge';
  cursor: Scalars['String']['output'];
  node: Asset;
};

export type AssetFilter = {
  and?: InputMaybe<Array<AssetFilter>>;
  approvedAt?: InputMaybe<DatetimeFilter>;
  archivedAt?: InputMaybe<DatetimeFilter>;
  assetTypeId?: InputMaybe<UuidFilter>;
  coverUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  creationTypeId?: InputMaybe<UuidFilter>;
  description?: InputMaybe<StringFilter>;
  fileName?: InputMaybe<StringFilter>;
  fileSize?: InputMaybe<FloatFilter>;
  hash?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  isApproved?: InputMaybe<BooleanFilter>;
  isArchived?: InputMaybe<BooleanFilter>;
  isPublished?: InputMaybe<BooleanFilter>;
  mimeTypeId?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<AssetFilter>;
  or?: InputMaybe<Array<AssetFilter>>;
  ownerId?: InputMaybe<UuidFilter>;
  promptId?: InputMaybe<UuidFilter>;
  publicationUrl?: InputMaybe<StringFilter>;
  publishedAt?: InputMaybe<DatetimeFilter>;
  statusId?: InputMaybe<UuidFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type AssetInsertInput = {
  approvedAt?: InputMaybe<Scalars['Datetime']['input']>;
  archivedAt?: InputMaybe<Scalars['Datetime']['input']>;
  assetTypeId?: InputMaybe<Scalars['UUID']['input']>;
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  creationTypeId?: InputMaybe<Scalars['UUID']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileSize?: InputMaybe<Scalars['Float']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  mimeTypeId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  promptId?: InputMaybe<Scalars['UUID']['input']>;
  publicationUrl?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Datetime']['input']>;
  statusId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type AssetInsertResponse = {
  __typename?: 'AssetInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Asset>;
};

export type AssetOrderBy = {
  approvedAt?: InputMaybe<OrderByDirection>;
  archivedAt?: InputMaybe<OrderByDirection>;
  assetTypeId?: InputMaybe<OrderByDirection>;
  coverUrl?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  creationTypeId?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  fileName?: InputMaybe<OrderByDirection>;
  fileSize?: InputMaybe<OrderByDirection>;
  hash?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  isApproved?: InputMaybe<OrderByDirection>;
  isArchived?: InputMaybe<OrderByDirection>;
  isPublished?: InputMaybe<OrderByDirection>;
  mimeTypeId?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  ownerId?: InputMaybe<OrderByDirection>;
  promptId?: InputMaybe<OrderByDirection>;
  publicationUrl?: InputMaybe<OrderByDirection>;
  publishedAt?: InputMaybe<OrderByDirection>;
  statusId?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
};

export type AssetStatus = Node & {
  __typename?: 'AssetStatus';
  assetCollection?: Maybe<AssetConnection>;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
};


export type AssetStatusAssetCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetOrderBy>>;
};

export type AssetStatusConnection = {
  __typename?: 'AssetStatusConnection';
  edges: Array<AssetStatusEdge>;
  pageInfo: PageInfo;
};

export type AssetStatusDeleteResponse = {
  __typename?: 'AssetStatusDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<AssetStatus>;
};

export type AssetStatusEdge = {
  __typename?: 'AssetStatusEdge';
  cursor: Scalars['String']['output'];
  node: AssetStatus;
};

export type AssetStatusFilter = {
  and?: InputMaybe<Array<AssetStatusFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<AssetStatusFilter>;
  or?: InputMaybe<Array<AssetStatusFilter>>;
};

export type AssetStatusInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AssetStatusInsertResponse = {
  __typename?: 'AssetStatusInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<AssetStatus>;
};

export type AssetStatusOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type AssetStatusUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AssetStatusUpdateResponse = {
  __typename?: 'AssetStatusUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<AssetStatus>;
};

export type AssetType = Node & {
  __typename?: 'AssetType';
  assetCollection?: Maybe<AssetConnection>;
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  schema?: Maybe<Scalars['JSON']['output']>;
};


export type AssetTypeAssetCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetOrderBy>>;
};

export type AssetTypeConnection = {
  __typename?: 'AssetTypeConnection';
  edges: Array<AssetTypeEdge>;
  pageInfo: PageInfo;
};

export type AssetTypeDeleteResponse = {
  __typename?: 'AssetTypeDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<AssetType>;
};

export type AssetTypeEdge = {
  __typename?: 'AssetTypeEdge';
  cursor: Scalars['String']['output'];
  node: AssetType;
};

export type AssetTypeFilter = {
  and?: InputMaybe<Array<AssetTypeFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<AssetTypeFilter>;
  or?: InputMaybe<Array<AssetTypeFilter>>;
};

export type AssetTypeInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Scalars['JSON']['input']>;
};

export type AssetTypeInsertResponse = {
  __typename?: 'AssetTypeInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<AssetType>;
};

export type AssetTypeOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type AssetTypeUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Scalars['JSON']['input']>;
};

export type AssetTypeUpdateResponse = {
  __typename?: 'AssetTypeUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<AssetType>;
};

export type AssetUpdateInput = {
  approvedAt?: InputMaybe<Scalars['Datetime']['input']>;
  archivedAt?: InputMaybe<Scalars['Datetime']['input']>;
  assetTypeId?: InputMaybe<Scalars['UUID']['input']>;
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  creationTypeId?: InputMaybe<Scalars['UUID']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileSize?: InputMaybe<Scalars['Float']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  mimeTypeId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  promptId?: InputMaybe<Scalars['UUID']['input']>;
  publicationUrl?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Datetime']['input']>;
  statusId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateResponse = {
  __typename?: 'AssetUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Asset>;
};

export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BillingPeriod = Node & {
  __typename?: 'BillingPeriod';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
};

export type BillingPeriodConnection = {
  __typename?: 'BillingPeriodConnection';
  edges: Array<BillingPeriodEdge>;
  pageInfo: PageInfo;
};

export type BillingPeriodDeleteResponse = {
  __typename?: 'BillingPeriodDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<BillingPeriod>;
};

export type BillingPeriodEdge = {
  __typename?: 'BillingPeriodEdge';
  cursor: Scalars['String']['output'];
  node: BillingPeriod;
};

export type BillingPeriodFilter = {
  and?: InputMaybe<Array<BillingPeriodFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<BillingPeriodFilter>;
  or?: InputMaybe<Array<BillingPeriodFilter>>;
};

export type BillingPeriodInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BillingPeriodInsertResponse = {
  __typename?: 'BillingPeriodInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<BillingPeriod>;
};

export type BillingPeriodOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type BillingPeriodUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BillingPeriodUpdateResponse = {
  __typename?: 'BillingPeriodUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<BillingPeriod>;
};

export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type Category = Node & {
  __typename?: 'Category';
  assetCategoryCollection?: Maybe<AssetCategoryConnection>;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  likes: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
};


export type CategoryAssetCategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetCategoryOrderBy>>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  edges: Array<CategoryEdge>;
  pageInfo: PageInfo;
};

export type CategoryDeleteResponse = {
  __typename?: 'CategoryDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Category>;
};

export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  cursor: Scalars['String']['output'];
  node: Category;
};

export type CategoryFilter = {
  and?: InputMaybe<Array<CategoryFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  likes?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<CategoryFilter>;
  or?: InputMaybe<Array<CategoryFilter>>;
};

export type CategoryInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryInsertResponse = {
  __typename?: 'CategoryInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Category>;
};

export type CategoryOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  likes?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type CategoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryUpdateResponse = {
  __typename?: 'CategoryUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Category>;
};

export type ChatMessage = Node & {
  __typename?: 'ChatMessage';
  applicationCollection?: Maybe<ApplicationConnection>;
  chatMessageCollection?: Maybe<ChatMessageConnection>;
  chatSession?: Maybe<ChatSession>;
  chatSessionId?: Maybe<Scalars['UUID']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['UUID']['output'];
  index: Scalars['BigInt']['output'];
  nodeId: Scalars['ID']['output'];
  previousMessage?: Maybe<ChatMessage>;
  previousMessageId?: Maybe<Scalars['UUID']['output']>;
  role?: Maybe<ChatRole>;
  roleId?: Maybe<Scalars['UUID']['output']>;
};


export type ChatMessageApplicationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ApplicationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationOrderBy>>;
};


export type ChatMessageChatMessageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ChatMessageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessageOrderBy>>;
};

export type ChatMessageConnection = {
  __typename?: 'ChatMessageConnection';
  edges: Array<ChatMessageEdge>;
  pageInfo: PageInfo;
};

export type ChatMessageDeleteResponse = {
  __typename?: 'ChatMessageDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ChatMessage>;
};

export type ChatMessageEdge = {
  __typename?: 'ChatMessageEdge';
  cursor: Scalars['String']['output'];
  node: ChatMessage;
};

export type ChatMessageFilter = {
  and?: InputMaybe<Array<ChatMessageFilter>>;
  chatSessionId?: InputMaybe<UuidFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  index?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ChatMessageFilter>;
  or?: InputMaybe<Array<ChatMessageFilter>>;
  previousMessageId?: InputMaybe<UuidFilter>;
  roleId?: InputMaybe<UuidFilter>;
};

export type ChatMessageInsertInput = {
  chatSessionId?: InputMaybe<Scalars['UUID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  index?: InputMaybe<Scalars['BigInt']['input']>;
  previousMessageId?: InputMaybe<Scalars['UUID']['input']>;
  roleId?: InputMaybe<Scalars['UUID']['input']>;
};

export type ChatMessageInsertResponse = {
  __typename?: 'ChatMessageInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ChatMessage>;
};

export type ChatMessageOrderBy = {
  chatSessionId?: InputMaybe<OrderByDirection>;
  content?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  index?: InputMaybe<OrderByDirection>;
  previousMessageId?: InputMaybe<OrderByDirection>;
  roleId?: InputMaybe<OrderByDirection>;
};

export type ChatMessageUpdateInput = {
  chatSessionId?: InputMaybe<Scalars['UUID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  index?: InputMaybe<Scalars['BigInt']['input']>;
  previousMessageId?: InputMaybe<Scalars['UUID']['input']>;
  roleId?: InputMaybe<Scalars['UUID']['input']>;
};

export type ChatMessageUpdateResponse = {
  __typename?: 'ChatMessageUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ChatMessage>;
};

export type ChatRole = Node & {
  __typename?: 'ChatRole';
  chatMessageCollection?: Maybe<ChatMessageConnection>;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  promptTemplateCollection?: Maybe<PromptTemplateConnection>;
};


export type ChatRoleChatMessageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ChatMessageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessageOrderBy>>;
};


export type ChatRolePromptTemplateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromptTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PromptTemplateOrderBy>>;
};

export type ChatRoleConnection = {
  __typename?: 'ChatRoleConnection';
  edges: Array<ChatRoleEdge>;
  pageInfo: PageInfo;
};

export type ChatRoleDeleteResponse = {
  __typename?: 'ChatRoleDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ChatRole>;
};

export type ChatRoleEdge = {
  __typename?: 'ChatRoleEdge';
  cursor: Scalars['String']['output'];
  node: ChatRole;
};

export type ChatRoleFilter = {
  and?: InputMaybe<Array<ChatRoleFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ChatRoleFilter>;
  or?: InputMaybe<Array<ChatRoleFilter>>;
};

export type ChatRoleInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ChatRoleInsertResponse = {
  __typename?: 'ChatRoleInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ChatRole>;
};

export type ChatRoleOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type ChatRoleUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ChatRoleUpdateResponse = {
  __typename?: 'ChatRoleUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ChatRole>;
};

export type ChatSession = Node & {
  __typename?: 'ChatSession';
  chatMessageCollection?: Maybe<ChatMessageConnection>;
  createdAt: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  endedAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  lastActiveAt?: Maybe<Scalars['Datetime']['output']>;
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['Datetime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['UUID']['output']>;
};


export type ChatSessionChatMessageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ChatMessageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessageOrderBy>>;
};

export type ChatSessionConnection = {
  __typename?: 'ChatSessionConnection';
  edges: Array<ChatSessionEdge>;
  pageInfo: PageInfo;
};

export type ChatSessionDeleteResponse = {
  __typename?: 'ChatSessionDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ChatSession>;
};

export type ChatSessionEdge = {
  __typename?: 'ChatSessionEdge';
  cursor: Scalars['String']['output'];
  node: ChatSession;
};

export type ChatSessionFilter = {
  and?: InputMaybe<Array<ChatSessionFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  endedAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  lastActiveAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ChatSessionFilter>;
  notes?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<ChatSessionFilter>>;
  startedAt?: InputMaybe<DatetimeFilter>;
  title?: InputMaybe<StringFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type ChatSessionInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  endedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastActiveAt?: InputMaybe<Scalars['Datetime']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  startedAt?: InputMaybe<Scalars['Datetime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type ChatSessionInsertResponse = {
  __typename?: 'ChatSessionInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ChatSession>;
};

export type ChatSessionOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  endedAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  lastActiveAt?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  startedAt?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type ChatSessionUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  endedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastActiveAt?: InputMaybe<Scalars['Datetime']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  startedAt?: InputMaybe<Scalars['Datetime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type ChatSessionUpdateResponse = {
  __typename?: 'ChatSessionUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ChatSession>;
};

export type Content = Node & {
  __typename?: 'Content';
  aiContext?: Maybe<Scalars['String']['output']>;
  approvedAt?: Maybe<Scalars['Datetime']['output']>;
  archivedAt?: Maybe<Scalars['Datetime']['output']>;
  body: Scalars['String']['output'];
  contentContentPartCollection?: Maybe<ContentContentPartConnection>;
  contentTemplate?: Maybe<ContentTemplate>;
  contentTemplateId?: Maybe<Scalars['UUID']['output']>;
  contentTemplateVariableValueCollection?: Maybe<ContentTemplateVariableValueConnection>;
  contentType: ContentType;
  contentTypeId: Scalars['UUID']['output'];
  contentVectorDatabaseCollection?: Maybe<ContentVectorDatabaseConnection>;
  coverUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  creationType?: Maybe<CreationType>;
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['UUID']['output'];
  isApproved: Scalars['Boolean']['output'];
  isArchived: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  nodeId: Scalars['ID']['output'];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['UUID']['output']>;
  publicationUrl?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['Datetime']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  version: Scalars['Int']['output'];
};


export type ContentContentContentPartCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentContentPartFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentContentPartOrderBy>>;
};


export type ContentContentTemplateVariableValueCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentTemplateVariableValueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentTemplateVariableValueOrderBy>>;
};


export type ContentContentVectorDatabaseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentVectorDatabaseFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentVectorDatabaseOrderBy>>;
};

export type ContentConnection = {
  __typename?: 'ContentConnection';
  edges: Array<ContentEdge>;
  pageInfo: PageInfo;
};

export type ContentContentPart = Node & {
  __typename?: 'ContentContentPart';
  content: Content;
  contentId: Scalars['UUID']['output'];
  contentPart: ContentPart;
  contentPartId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  index: Scalars['Int']['output'];
  nodeId: Scalars['ID']['output'];
};

export type ContentContentPartConnection = {
  __typename?: 'ContentContentPartConnection';
  edges: Array<ContentContentPartEdge>;
  pageInfo: PageInfo;
};

export type ContentContentPartDeleteResponse = {
  __typename?: 'ContentContentPartDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentContentPart>;
};

export type ContentContentPartEdge = {
  __typename?: 'ContentContentPartEdge';
  cursor: Scalars['String']['output'];
  node: ContentContentPart;
};

export type ContentContentPartFilter = {
  and?: InputMaybe<Array<ContentContentPartFilter>>;
  contentId?: InputMaybe<UuidFilter>;
  contentPartId?: InputMaybe<UuidFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  index?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ContentContentPartFilter>;
  or?: InputMaybe<Array<ContentContentPartFilter>>;
};

export type ContentContentPartInsertInput = {
  contentId?: InputMaybe<Scalars['UUID']['input']>;
  contentPartId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentContentPartInsertResponse = {
  __typename?: 'ContentContentPartInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentContentPart>;
};

export type ContentContentPartOrderBy = {
  contentId?: InputMaybe<OrderByDirection>;
  contentPartId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  index?: InputMaybe<OrderByDirection>;
};

export type ContentContentPartUpdateInput = {
  contentId?: InputMaybe<Scalars['UUID']['input']>;
  contentPartId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentContentPartUpdateResponse = {
  __typename?: 'ContentContentPartUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentContentPart>;
};

export type ContentDeleteResponse = {
  __typename?: 'ContentDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Content>;
};

export type ContentEdge = {
  __typename?: 'ContentEdge';
  cursor: Scalars['String']['output'];
  node: Content;
};

export type ContentFilter = {
  aiContext?: InputMaybe<StringFilter>;
  and?: InputMaybe<Array<ContentFilter>>;
  approvedAt?: InputMaybe<DatetimeFilter>;
  archivedAt?: InputMaybe<DatetimeFilter>;
  body?: InputMaybe<StringFilter>;
  contentTemplateId?: InputMaybe<UuidFilter>;
  contentTypeId?: InputMaybe<UuidFilter>;
  coverUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  creationType?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  isApproved?: InputMaybe<BooleanFilter>;
  isArchived?: InputMaybe<BooleanFilter>;
  isPublished?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ContentFilter>;
  or?: InputMaybe<Array<ContentFilter>>;
  ownerId?: InputMaybe<UuidFilter>;
  publicationUrl?: InputMaybe<StringFilter>;
  publishedAt?: InputMaybe<DatetimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  version?: InputMaybe<IntFilter>;
};

export type ContentInsertInput = {
  aiContext?: InputMaybe<Scalars['String']['input']>;
  approvedAt?: InputMaybe<Scalars['Datetime']['input']>;
  archivedAt?: InputMaybe<Scalars['Datetime']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  contentTemplateId?: InputMaybe<Scalars['UUID']['input']>;
  contentTypeId?: InputMaybe<Scalars['UUID']['input']>;
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  creationType?: InputMaybe<Scalars['UUID']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  publicationUrl?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Datetime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentInsertResponse = {
  __typename?: 'ContentInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Content>;
};

export type ContentOrderBy = {
  aiContext?: InputMaybe<OrderByDirection>;
  approvedAt?: InputMaybe<OrderByDirection>;
  archivedAt?: InputMaybe<OrderByDirection>;
  body?: InputMaybe<OrderByDirection>;
  contentTemplateId?: InputMaybe<OrderByDirection>;
  contentTypeId?: InputMaybe<OrderByDirection>;
  coverUrl?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  creationType?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  isApproved?: InputMaybe<OrderByDirection>;
  isArchived?: InputMaybe<OrderByDirection>;
  isPublished?: InputMaybe<OrderByDirection>;
  ownerId?: InputMaybe<OrderByDirection>;
  publicationUrl?: InputMaybe<OrderByDirection>;
  publishedAt?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  version?: InputMaybe<OrderByDirection>;
};

export type ContentPart = Node & {
  __typename?: 'ContentPart';
  aiContext?: Maybe<Scalars['String']['output']>;
  body: Scalars['String']['output'];
  contentContentPartCollection?: Maybe<ContentContentPartConnection>;
  contentPartContentPartCollection?: Maybe<ContentPartContentPartConnection>;
  contentType: ContentType;
  contentTypeId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  version: Scalars['Int']['output'];
};


export type ContentPartContentContentPartCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentContentPartFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentContentPartOrderBy>>;
};


export type ContentPartContentPartContentPartCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentPartContentPartFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentPartContentPartOrderBy>>;
};

export type ContentPartConnection = {
  __typename?: 'ContentPartConnection';
  edges: Array<ContentPartEdge>;
  pageInfo: PageInfo;
};

export type ContentPartContentPart = Node & {
  __typename?: 'ContentPartContentPart';
  childContentPart: ContentPart;
  childContentPartId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  index: Scalars['Int']['output'];
  nodeId: Scalars['ID']['output'];
  parentContentPart: ContentPart;
  parentContentPartId: Scalars['UUID']['output'];
};

export type ContentPartContentPartConnection = {
  __typename?: 'ContentPartContentPartConnection';
  edges: Array<ContentPartContentPartEdge>;
  pageInfo: PageInfo;
};

export type ContentPartContentPartDeleteResponse = {
  __typename?: 'ContentPartContentPartDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentPartContentPart>;
};

export type ContentPartContentPartEdge = {
  __typename?: 'ContentPartContentPartEdge';
  cursor: Scalars['String']['output'];
  node: ContentPartContentPart;
};

export type ContentPartContentPartFilter = {
  and?: InputMaybe<Array<ContentPartContentPartFilter>>;
  childContentPartId?: InputMaybe<UuidFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  index?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ContentPartContentPartFilter>;
  or?: InputMaybe<Array<ContentPartContentPartFilter>>;
  parentContentPartId?: InputMaybe<UuidFilter>;
};

export type ContentPartContentPartInsertInput = {
  childContentPartId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  parentContentPartId?: InputMaybe<Scalars['UUID']['input']>;
};

export type ContentPartContentPartInsertResponse = {
  __typename?: 'ContentPartContentPartInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentPartContentPart>;
};

export type ContentPartContentPartOrderBy = {
  childContentPartId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  index?: InputMaybe<OrderByDirection>;
  parentContentPartId?: InputMaybe<OrderByDirection>;
};

export type ContentPartContentPartUpdateInput = {
  childContentPartId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  parentContentPartId?: InputMaybe<Scalars['UUID']['input']>;
};

export type ContentPartContentPartUpdateResponse = {
  __typename?: 'ContentPartContentPartUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentPartContentPart>;
};

export type ContentPartDeleteResponse = {
  __typename?: 'ContentPartDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentPart>;
};

export type ContentPartEdge = {
  __typename?: 'ContentPartEdge';
  cursor: Scalars['String']['output'];
  node: ContentPart;
};

export type ContentPartFilter = {
  aiContext?: InputMaybe<StringFilter>;
  and?: InputMaybe<Array<ContentPartFilter>>;
  body?: InputMaybe<StringFilter>;
  contentTypeId?: InputMaybe<UuidFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ContentPartFilter>;
  or?: InputMaybe<Array<ContentPartFilter>>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  version?: InputMaybe<IntFilter>;
};

export type ContentPartInsertInput = {
  aiContext?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  contentTypeId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentPartInsertResponse = {
  __typename?: 'ContentPartInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentPart>;
};

export type ContentPartOrderBy = {
  aiContext?: InputMaybe<OrderByDirection>;
  body?: InputMaybe<OrderByDirection>;
  contentTypeId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  version?: InputMaybe<OrderByDirection>;
};

export type ContentPartUpdateInput = {
  aiContext?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  contentTypeId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentPartUpdateResponse = {
  __typename?: 'ContentPartUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentPart>;
};

export type ContentTemplate = Node & {
  __typename?: 'ContentTemplate';
  activatedAt?: Maybe<Scalars['Datetime']['output']>;
  archivedAt?: Maybe<Scalars['Datetime']['output']>;
  body: Scalars['String']['output'];
  contentCollection?: Maybe<ContentConnection>;
  contentTemplateVariableCollection?: Maybe<ContentTemplateVariableConnection>;
  contentType: ContentType;
  contentTypeId: Scalars['UUID']['output'];
  coverUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  deactivatedAt?: Maybe<Scalars['Datetime']['output']>;
  iconUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  isArchived?: Maybe<Scalars['Boolean']['output']>;
  nodeId: Scalars['ID']['output'];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['UUID']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};


export type ContentTemplateContentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentOrderBy>>;
};


export type ContentTemplateContentTemplateVariableCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentTemplateVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentTemplateVariableOrderBy>>;
};

export type ContentTemplateConnection = {
  __typename?: 'ContentTemplateConnection';
  edges: Array<ContentTemplateEdge>;
  pageInfo: PageInfo;
};

export type ContentTemplateDeleteResponse = {
  __typename?: 'ContentTemplateDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentTemplate>;
};

export type ContentTemplateEdge = {
  __typename?: 'ContentTemplateEdge';
  cursor: Scalars['String']['output'];
  node: ContentTemplate;
};

export type ContentTemplateFilter = {
  activatedAt?: InputMaybe<DatetimeFilter>;
  and?: InputMaybe<Array<ContentTemplateFilter>>;
  archivedAt?: InputMaybe<DatetimeFilter>;
  body?: InputMaybe<StringFilter>;
  contentTypeId?: InputMaybe<UuidFilter>;
  coverUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  deactivatedAt?: InputMaybe<DatetimeFilter>;
  iconUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  isArchived?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ContentTemplateFilter>;
  or?: InputMaybe<Array<ContentTemplateFilter>>;
  ownerId?: InputMaybe<UuidFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type ContentTemplateInsertInput = {
  activatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  archivedAt?: InputMaybe<Scalars['Datetime']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  contentTypeId?: InputMaybe<Scalars['UUID']['input']>;
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  deactivatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ContentTemplateInsertResponse = {
  __typename?: 'ContentTemplateInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentTemplate>;
};

export type ContentTemplateOrderBy = {
  activatedAt?: InputMaybe<OrderByDirection>;
  archivedAt?: InputMaybe<OrderByDirection>;
  body?: InputMaybe<OrderByDirection>;
  contentTypeId?: InputMaybe<OrderByDirection>;
  coverUrl?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  deactivatedAt?: InputMaybe<OrderByDirection>;
  iconUrl?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  isActive?: InputMaybe<OrderByDirection>;
  isArchived?: InputMaybe<OrderByDirection>;
  ownerId?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type ContentTemplateUpdateInput = {
  activatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  archivedAt?: InputMaybe<Scalars['Datetime']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  contentTypeId?: InputMaybe<Scalars['UUID']['input']>;
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  deactivatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ContentTemplateUpdateResponse = {
  __typename?: 'ContentTemplateUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentTemplate>;
};

export type ContentTemplateVariable = Node & {
  __typename?: 'ContentTemplateVariable';
  contentTemplate: ContentTemplate;
  contentTemplateId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
  templateVariableType?: Maybe<TemplateVariableType>;
  templateVariableTypeId?: Maybe<Scalars['UUID']['output']>;
};

export type ContentTemplateVariableConnection = {
  __typename?: 'ContentTemplateVariableConnection';
  edges: Array<ContentTemplateVariableEdge>;
  pageInfo: PageInfo;
};

export type ContentTemplateVariableDeleteResponse = {
  __typename?: 'ContentTemplateVariableDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentTemplateVariable>;
};

export type ContentTemplateVariableEdge = {
  __typename?: 'ContentTemplateVariableEdge';
  cursor: Scalars['String']['output'];
  node: ContentTemplateVariable;
};

export type ContentTemplateVariableFilter = {
  and?: InputMaybe<Array<ContentTemplateVariableFilter>>;
  contentTemplateId?: InputMaybe<UuidFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ContentTemplateVariableFilter>;
  or?: InputMaybe<Array<ContentTemplateVariableFilter>>;
  templateVariableTypeId?: InputMaybe<UuidFilter>;
};

export type ContentTemplateVariableInsertInput = {
  contentTemplateId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  templateVariableTypeId?: InputMaybe<Scalars['UUID']['input']>;
};

export type ContentTemplateVariableInsertResponse = {
  __typename?: 'ContentTemplateVariableInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentTemplateVariable>;
};

export type ContentTemplateVariableOrderBy = {
  contentTemplateId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  templateVariableTypeId?: InputMaybe<OrderByDirection>;
};

export type ContentTemplateVariableUpdateInput = {
  contentTemplateId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  templateVariableTypeId?: InputMaybe<Scalars['UUID']['input']>;
};

export type ContentTemplateVariableUpdateResponse = {
  __typename?: 'ContentTemplateVariableUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentTemplateVariable>;
};

export type ContentTemplateVariableValue = Node & {
  __typename?: 'ContentTemplateVariableValue';
  content?: Maybe<Content>;
  contentId?: Maybe<Scalars['UUID']['output']>;
  createdAt: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  valueBool?: Maybe<Scalars['Boolean']['output']>;
  valueDate?: Maybe<Scalars['Datetime']['output']>;
  valueNumber?: Maybe<Scalars['BigFloat']['output']>;
  valueString?: Maybe<Scalars['String']['output']>;
};

export type ContentTemplateVariableValueConnection = {
  __typename?: 'ContentTemplateVariableValueConnection';
  edges: Array<ContentTemplateVariableValueEdge>;
  pageInfo: PageInfo;
};

export type ContentTemplateVariableValueDeleteResponse = {
  __typename?: 'ContentTemplateVariableValueDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentTemplateVariableValue>;
};

export type ContentTemplateVariableValueEdge = {
  __typename?: 'ContentTemplateVariableValueEdge';
  cursor: Scalars['String']['output'];
  node: ContentTemplateVariableValue;
};

export type ContentTemplateVariableValueFilter = {
  and?: InputMaybe<Array<ContentTemplateVariableValueFilter>>;
  contentId?: InputMaybe<UuidFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ContentTemplateVariableValueFilter>;
  or?: InputMaybe<Array<ContentTemplateVariableValueFilter>>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  valueBool?: InputMaybe<BooleanFilter>;
  valueDate?: InputMaybe<DatetimeFilter>;
  valueNumber?: InputMaybe<BigFloatFilter>;
  valueString?: InputMaybe<StringFilter>;
};

export type ContentTemplateVariableValueInsertInput = {
  contentId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  valueBool?: InputMaybe<Scalars['Boolean']['input']>;
  valueDate?: InputMaybe<Scalars['Datetime']['input']>;
  valueNumber?: InputMaybe<Scalars['BigFloat']['input']>;
  valueString?: InputMaybe<Scalars['String']['input']>;
};

export type ContentTemplateVariableValueInsertResponse = {
  __typename?: 'ContentTemplateVariableValueInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentTemplateVariableValue>;
};

export type ContentTemplateVariableValueOrderBy = {
  contentId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  valueBool?: InputMaybe<OrderByDirection>;
  valueDate?: InputMaybe<OrderByDirection>;
  valueNumber?: InputMaybe<OrderByDirection>;
  valueString?: InputMaybe<OrderByDirection>;
};

export type ContentTemplateVariableValueUpdateInput = {
  contentId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  valueBool?: InputMaybe<Scalars['Boolean']['input']>;
  valueDate?: InputMaybe<Scalars['Datetime']['input']>;
  valueNumber?: InputMaybe<Scalars['BigFloat']['input']>;
  valueString?: InputMaybe<Scalars['String']['input']>;
};

export type ContentTemplateVariableValueUpdateResponse = {
  __typename?: 'ContentTemplateVariableValueUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentTemplateVariableValue>;
};

export type ContentType = Node & {
  __typename?: 'ContentType';
  aiContext?: Maybe<Scalars['String']['output']>;
  contentCollection?: Maybe<ContentConnection>;
  contentPartCollection?: Maybe<ContentPartConnection>;
  contentTemplateCollection?: Maybe<ContentTemplateConnection>;
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  schema?: Maybe<Scalars['JSON']['output']>;
  version: Scalars['Int']['output'];
};


export type ContentTypeContentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentOrderBy>>;
};


export type ContentTypeContentPartCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentPartFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentPartOrderBy>>;
};


export type ContentTypeContentTemplateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentTemplateOrderBy>>;
};

export type ContentTypeConnection = {
  __typename?: 'ContentTypeConnection';
  edges: Array<ContentTypeEdge>;
  pageInfo: PageInfo;
};

export type ContentTypeDeleteResponse = {
  __typename?: 'ContentTypeDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentType>;
};

export type ContentTypeEdge = {
  __typename?: 'ContentTypeEdge';
  cursor: Scalars['String']['output'];
  node: ContentType;
};

export type ContentTypeFilter = {
  aiContext?: InputMaybe<StringFilter>;
  and?: InputMaybe<Array<ContentTypeFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ContentTypeFilter>;
  or?: InputMaybe<Array<ContentTypeFilter>>;
  version?: InputMaybe<IntFilter>;
};

export type ContentTypeInsertInput = {
  aiContext?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentTypeInsertResponse = {
  __typename?: 'ContentTypeInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentType>;
};

export type ContentTypeOrderBy = {
  aiContext?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  version?: InputMaybe<OrderByDirection>;
};

export type ContentTypeUpdateInput = {
  aiContext?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentTypeUpdateResponse = {
  __typename?: 'ContentTypeUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentType>;
};

export type ContentUpdateInput = {
  aiContext?: InputMaybe<Scalars['String']['input']>;
  approvedAt?: InputMaybe<Scalars['Datetime']['input']>;
  archivedAt?: InputMaybe<Scalars['Datetime']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  contentTemplateId?: InputMaybe<Scalars['UUID']['input']>;
  contentTypeId?: InputMaybe<Scalars['UUID']['input']>;
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  creationType?: InputMaybe<Scalars['UUID']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  publicationUrl?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Datetime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentUpdateResponse = {
  __typename?: 'ContentUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Content>;
};

export type ContentVectorDatabase = Node & {
  __typename?: 'ContentVectorDatabase';
  content: Content;
  contentId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
  vectorDatabase: VectorDatabase;
  vectorDatabaseId: Scalars['UUID']['output'];
};

export type ContentVectorDatabaseConnection = {
  __typename?: 'ContentVectorDatabaseConnection';
  edges: Array<ContentVectorDatabaseEdge>;
  pageInfo: PageInfo;
};

export type ContentVectorDatabaseDeleteResponse = {
  __typename?: 'ContentVectorDatabaseDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentVectorDatabase>;
};

export type ContentVectorDatabaseEdge = {
  __typename?: 'ContentVectorDatabaseEdge';
  cursor: Scalars['String']['output'];
  node: ContentVectorDatabase;
};

export type ContentVectorDatabaseFilter = {
  and?: InputMaybe<Array<ContentVectorDatabaseFilter>>;
  contentId?: InputMaybe<UuidFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<ContentVectorDatabaseFilter>;
  or?: InputMaybe<Array<ContentVectorDatabaseFilter>>;
  vectorDatabaseId?: InputMaybe<UuidFilter>;
};

export type ContentVectorDatabaseInsertInput = {
  contentId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  vectorDatabaseId?: InputMaybe<Scalars['UUID']['input']>;
};

export type ContentVectorDatabaseInsertResponse = {
  __typename?: 'ContentVectorDatabaseInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentVectorDatabase>;
};

export type ContentVectorDatabaseOrderBy = {
  contentId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  vectorDatabaseId?: InputMaybe<OrderByDirection>;
};

export type ContentVectorDatabaseUpdateInput = {
  contentId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  vectorDatabaseId?: InputMaybe<Scalars['UUID']['input']>;
};

export type ContentVectorDatabaseUpdateResponse = {
  __typename?: 'ContentVectorDatabaseUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<ContentVectorDatabase>;
};

export type CreationType = Node & {
  __typename?: 'CreationType';
  assetCollection?: Maybe<AssetConnection>;
  contentCollection?: Maybe<ContentConnection>;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
};


export type CreationTypeAssetCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetOrderBy>>;
};


export type CreationTypeContentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentOrderBy>>;
};

export type CreationTypeConnection = {
  __typename?: 'CreationTypeConnection';
  edges: Array<CreationTypeEdge>;
  pageInfo: PageInfo;
};

export type CreationTypeDeleteResponse = {
  __typename?: 'CreationTypeDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<CreationType>;
};

export type CreationTypeEdge = {
  __typename?: 'CreationTypeEdge';
  cursor: Scalars['String']['output'];
  node: CreationType;
};

export type CreationTypeFilter = {
  and?: InputMaybe<Array<CreationTypeFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<CreationTypeFilter>;
  or?: InputMaybe<Array<CreationTypeFilter>>;
};

export type CreationTypeInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreationTypeInsertResponse = {
  __typename?: 'CreationTypeInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<CreationType>;
};

export type CreationTypeOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type CreationTypeUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreationTypeUpdateResponse = {
  __typename?: 'CreationTypeUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<CreationType>;
};

export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export type Document = Node & {
  __typename?: 'Document';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  documentVectorDatabaseCollection?: Maybe<DocumentVectorDatabaseConnection>;
  fileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  mimeType: MimeType;
  mimeTypeId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  originalFileUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['UUID']['output']>;
};


export type DocumentDocumentVectorDatabaseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DocumentVectorDatabaseFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentVectorDatabaseOrderBy>>;
};

export type DocumentConnection = {
  __typename?: 'DocumentConnection';
  edges: Array<DocumentEdge>;
  pageInfo: PageInfo;
};

export type DocumentDeleteResponse = {
  __typename?: 'DocumentDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Document>;
};

export type DocumentEdge = {
  __typename?: 'DocumentEdge';
  cursor: Scalars['String']['output'];
  node: Document;
};

export type DocumentFilter = {
  and?: InputMaybe<Array<DocumentFilter>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  fileName?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  mimeTypeId?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<DocumentFilter>;
  or?: InputMaybe<Array<DocumentFilter>>;
  originalFileUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type DocumentInsertInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  mimeTypeId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  originalFileUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type DocumentInsertResponse = {
  __typename?: 'DocumentInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Document>;
};

export type DocumentOrderBy = {
  content?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  fileName?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  mimeTypeId?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  originalFileUrl?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type DocumentUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  mimeTypeId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  originalFileUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type DocumentUpdateResponse = {
  __typename?: 'DocumentUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Document>;
};

export type DocumentVectorDatabase = Node & {
  __typename?: 'DocumentVectorDatabase';
  createdAt: Scalars['Datetime']['output'];
  document: Document;
  documentId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
  vectorDatabase: VectorDatabase;
  vectorDatabaseId: Scalars['UUID']['output'];
};

export type DocumentVectorDatabaseConnection = {
  __typename?: 'DocumentVectorDatabaseConnection';
  edges: Array<DocumentVectorDatabaseEdge>;
  pageInfo: PageInfo;
};

export type DocumentVectorDatabaseDeleteResponse = {
  __typename?: 'DocumentVectorDatabaseDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<DocumentVectorDatabase>;
};

export type DocumentVectorDatabaseEdge = {
  __typename?: 'DocumentVectorDatabaseEdge';
  cursor: Scalars['String']['output'];
  node: DocumentVectorDatabase;
};

export type DocumentVectorDatabaseFilter = {
  and?: InputMaybe<Array<DocumentVectorDatabaseFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  documentId?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<DocumentVectorDatabaseFilter>;
  or?: InputMaybe<Array<DocumentVectorDatabaseFilter>>;
  vectorDatabaseId?: InputMaybe<UuidFilter>;
};

export type DocumentVectorDatabaseInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  documentId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  vectorDatabaseId?: InputMaybe<Scalars['UUID']['input']>;
};

export type DocumentVectorDatabaseInsertResponse = {
  __typename?: 'DocumentVectorDatabaseInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<DocumentVectorDatabase>;
};

export type DocumentVectorDatabaseOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  documentId?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  vectorDatabaseId?: InputMaybe<OrderByDirection>;
};

export type DocumentVectorDatabaseUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  documentId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  vectorDatabaseId?: InputMaybe<Scalars['UUID']['input']>;
};

export type DocumentVectorDatabaseUpdateResponse = {
  __typename?: 'DocumentVectorDatabaseUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<DocumentVectorDatabase>;
};

export type Feature = Node & {
  __typename?: 'Feature';
  applicationFeatureCollection?: Maybe<ApplicationFeatureConnection>;
  createdAt: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  iconUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  markdownBody?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  pricingPlanFeatureCollection?: Maybe<PricingPlanFeatureConnection>;
};


export type FeatureApplicationFeatureCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ApplicationFeatureFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationFeatureOrderBy>>;
};


export type FeaturePricingPlanFeatureCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PricingPlanFeatureFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PricingPlanFeatureOrderBy>>;
};

export type FeatureConnection = {
  __typename?: 'FeatureConnection';
  edges: Array<FeatureEdge>;
  pageInfo: PageInfo;
};

export type FeatureDeleteResponse = {
  __typename?: 'FeatureDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Feature>;
};

export type FeatureEdge = {
  __typename?: 'FeatureEdge';
  cursor: Scalars['String']['output'];
  node: Feature;
};

export type FeatureFilter = {
  and?: InputMaybe<Array<FeatureFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  iconUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  markdownBody?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<FeatureFilter>;
  or?: InputMaybe<Array<FeatureFilter>>;
};

export type FeatureInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  markdownBody?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureInsertResponse = {
  __typename?: 'FeatureInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Feature>;
};

export type FeatureOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  iconUrl?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  markdownBody?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type FeatureUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  markdownBody?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureUpdateResponse = {
  __typename?: 'FeatureUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Feature>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type MimeType = Node & {
  __typename?: 'MimeType';
  assetCollection?: Maybe<AssetConnection>;
  createdAt: Scalars['Datetime']['output'];
  documentCollection?: Maybe<DocumentConnection>;
  extensions: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['UUID']['output'];
  mime: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  nodeId: Scalars['ID']['output'];
};


export type MimeTypeAssetCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetOrderBy>>;
};


export type MimeTypeDocumentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentOrderBy>>;
};

export type MimeTypeConnection = {
  __typename?: 'MimeTypeConnection';
  edges: Array<MimeTypeEdge>;
  pageInfo: PageInfo;
};

export type MimeTypeDeleteResponse = {
  __typename?: 'MimeTypeDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<MimeType>;
};

export type MimeTypeEdge = {
  __typename?: 'MimeTypeEdge';
  cursor: Scalars['String']['output'];
  node: MimeType;
};

export type MimeTypeFilter = {
  and?: InputMaybe<Array<MimeTypeFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  extensions?: InputMaybe<StringListFilter>;
  id?: InputMaybe<UuidFilter>;
  mime?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<MimeTypeFilter>;
  or?: InputMaybe<Array<MimeTypeFilter>>;
};

export type MimeTypeInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  extensions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MimeTypeInsertResponse = {
  __typename?: 'MimeTypeInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<MimeType>;
};

export type MimeTypeOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  mime?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type MimeTypeUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  extensions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MimeTypeUpdateResponse = {
  __typename?: 'MimeTypeUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<MimeType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteFromApplicationCollection: ApplicationDeleteResponse;
  deleteFromApplicationFeatureCollection: ApplicationFeatureDeleteResponse;
  deleteFromApplicationTypeCollection: ApplicationTypeDeleteResponse;
  deleteFromAssetCategoryCollection: AssetCategoryDeleteResponse;
  deleteFromAssetCollection: AssetDeleteResponse;
  deleteFromAssetStatusCollection: AssetStatusDeleteResponse;
  deleteFromAssetTypeCollection: AssetTypeDeleteResponse;
  deleteFromBillingPeriodCollection: BillingPeriodDeleteResponse;
  deleteFromCategoryCollection: CategoryDeleteResponse;
  deleteFromChatMessageCollection: ChatMessageDeleteResponse;
  deleteFromChatRoleCollection: ChatRoleDeleteResponse;
  deleteFromChatSessionCollection: ChatSessionDeleteResponse;
  deleteFromContentCollection: ContentDeleteResponse;
  deleteFromContentContentPartCollection: ContentContentPartDeleteResponse;
  deleteFromContentPartCollection: ContentPartDeleteResponse;
  deleteFromContentPartContentPartCollection: ContentPartContentPartDeleteResponse;
  deleteFromContentTemplateCollection: ContentTemplateDeleteResponse;
  deleteFromContentTemplateVariableCollection: ContentTemplateVariableDeleteResponse;
  deleteFromContentTemplateVariableValueCollection: ContentTemplateVariableValueDeleteResponse;
  deleteFromContentTypeCollection: ContentTypeDeleteResponse;
  deleteFromContentVectorDatabaseCollection: ContentVectorDatabaseDeleteResponse;
  deleteFromCreationTypeCollection: CreationTypeDeleteResponse;
  deleteFromDocumentCollection: DocumentDeleteResponse;
  deleteFromDocumentVectorDatabaseCollection: DocumentVectorDatabaseDeleteResponse;
  deleteFromFeatureCollection: FeatureDeleteResponse;
  deleteFromMimeTypeCollection: MimeTypeDeleteResponse;
  deleteFromPricingPlanCollection: PricingPlanDeleteResponse;
  deleteFromPricingPlanFeatureCollection: PricingPlanFeatureDeleteResponse;
  deleteFromPromptCollection: PromptDeleteResponse;
  deleteFromPromptTemplateCollection: PromptTemplateDeleteResponse;
  deleteFromPromptTemplateVariableCollection: PromptTemplateVariableDeleteResponse;
  deleteFromPromptVariableValueCollection: PromptVariableValueDeleteResponse;
  deleteFromRoleCollection: RoleDeleteResponse;
  deleteFromTemplateVariableCollection: TemplateVariableDeleteResponse;
  deleteFromTemplateVariableTypeCollection: TemplateVariableTypeDeleteResponse;
  deleteFromUserCollection: UserDeleteResponse;
  deleteFromUserRoleCollection: UserRoleDeleteResponse;
  deleteFromVectorDatabaseCollection: VectorDatabaseDeleteResponse;
  insertIntoApplicationCollection?: Maybe<ApplicationInsertResponse>;
  insertIntoApplicationFeatureCollection?: Maybe<ApplicationFeatureInsertResponse>;
  insertIntoApplicationTypeCollection?: Maybe<ApplicationTypeInsertResponse>;
  insertIntoAssetCategoryCollection?: Maybe<AssetCategoryInsertResponse>;
  insertIntoAssetCollection?: Maybe<AssetInsertResponse>;
  insertIntoAssetStatusCollection?: Maybe<AssetStatusInsertResponse>;
  insertIntoAssetTypeCollection?: Maybe<AssetTypeInsertResponse>;
  insertIntoBillingPeriodCollection?: Maybe<BillingPeriodInsertResponse>;
  insertIntoCategoryCollection?: Maybe<CategoryInsertResponse>;
  insertIntoChatMessageCollection?: Maybe<ChatMessageInsertResponse>;
  insertIntoChatRoleCollection?: Maybe<ChatRoleInsertResponse>;
  insertIntoChatSessionCollection?: Maybe<ChatSessionInsertResponse>;
  insertIntoContentCollection?: Maybe<ContentInsertResponse>;
  insertIntoContentContentPartCollection?: Maybe<ContentContentPartInsertResponse>;
  insertIntoContentPartCollection?: Maybe<ContentPartInsertResponse>;
  insertIntoContentPartContentPartCollection?: Maybe<ContentPartContentPartInsertResponse>;
  insertIntoContentTemplateCollection?: Maybe<ContentTemplateInsertResponse>;
  insertIntoContentTemplateVariableCollection?: Maybe<ContentTemplateVariableInsertResponse>;
  insertIntoContentTemplateVariableValueCollection?: Maybe<ContentTemplateVariableValueInsertResponse>;
  insertIntoContentTypeCollection?: Maybe<ContentTypeInsertResponse>;
  insertIntoContentVectorDatabaseCollection?: Maybe<ContentVectorDatabaseInsertResponse>;
  insertIntoCreationTypeCollection?: Maybe<CreationTypeInsertResponse>;
  insertIntoDocumentCollection?: Maybe<DocumentInsertResponse>;
  insertIntoDocumentVectorDatabaseCollection?: Maybe<DocumentVectorDatabaseInsertResponse>;
  insertIntoFeatureCollection?: Maybe<FeatureInsertResponse>;
  insertIntoMimeTypeCollection?: Maybe<MimeTypeInsertResponse>;
  insertIntoPricingPlanCollection?: Maybe<PricingPlanInsertResponse>;
  insertIntoPricingPlanFeatureCollection?: Maybe<PricingPlanFeatureInsertResponse>;
  insertIntoPromptCollection?: Maybe<PromptInsertResponse>;
  insertIntoPromptTemplateCollection?: Maybe<PromptTemplateInsertResponse>;
  insertIntoPromptTemplateVariableCollection?: Maybe<PromptTemplateVariableInsertResponse>;
  insertIntoPromptVariableValueCollection?: Maybe<PromptVariableValueInsertResponse>;
  insertIntoRoleCollection?: Maybe<RoleInsertResponse>;
  insertIntoTemplateVariableCollection?: Maybe<TemplateVariableInsertResponse>;
  insertIntoTemplateVariableTypeCollection?: Maybe<TemplateVariableTypeInsertResponse>;
  insertIntoUserCollection?: Maybe<UserInsertResponse>;
  insertIntoUserRoleCollection?: Maybe<UserRoleInsertResponse>;
  insertIntoVectorDatabaseCollection?: Maybe<VectorDatabaseInsertResponse>;
  updateApplicationCollection: ApplicationUpdateResponse;
  updateApplicationFeatureCollection: ApplicationFeatureUpdateResponse;
  updateApplicationTypeCollection: ApplicationTypeUpdateResponse;
  updateAssetCategoryCollection: AssetCategoryUpdateResponse;
  updateAssetCollection: AssetUpdateResponse;
  updateAssetStatusCollection: AssetStatusUpdateResponse;
  updateAssetTypeCollection: AssetTypeUpdateResponse;
  updateBillingPeriodCollection: BillingPeriodUpdateResponse;
  updateCategoryCollection: CategoryUpdateResponse;
  updateChatMessageCollection: ChatMessageUpdateResponse;
  updateChatRoleCollection: ChatRoleUpdateResponse;
  updateChatSessionCollection: ChatSessionUpdateResponse;
  updateContentCollection: ContentUpdateResponse;
  updateContentContentPartCollection: ContentContentPartUpdateResponse;
  updateContentPartCollection: ContentPartUpdateResponse;
  updateContentPartContentPartCollection: ContentPartContentPartUpdateResponse;
  updateContentTemplateCollection: ContentTemplateUpdateResponse;
  updateContentTemplateVariableCollection: ContentTemplateVariableUpdateResponse;
  updateContentTemplateVariableValueCollection: ContentTemplateVariableValueUpdateResponse;
  updateContentTypeCollection: ContentTypeUpdateResponse;
  updateContentVectorDatabaseCollection: ContentVectorDatabaseUpdateResponse;
  updateCreationTypeCollection: CreationTypeUpdateResponse;
  updateDocumentCollection: DocumentUpdateResponse;
  updateDocumentVectorDatabaseCollection: DocumentVectorDatabaseUpdateResponse;
  updateFeatureCollection: FeatureUpdateResponse;
  updateMimeTypeCollection: MimeTypeUpdateResponse;
  updatePricingPlanCollection: PricingPlanUpdateResponse;
  updatePricingPlanFeatureCollection: PricingPlanFeatureUpdateResponse;
  updatePromptCollection: PromptUpdateResponse;
  updatePromptTemplateCollection: PromptTemplateUpdateResponse;
  updatePromptTemplateVariableCollection: PromptTemplateVariableUpdateResponse;
  updatePromptVariableValueCollection: PromptVariableValueUpdateResponse;
  updateRoleCollection: RoleUpdateResponse;
  updateTemplateVariableCollection: TemplateVariableUpdateResponse;
  updateTemplateVariableTypeCollection: TemplateVariableTypeUpdateResponse;
  updateUserCollection: UserUpdateResponse;
  updateUserRoleCollection: UserRoleUpdateResponse;
  updateVectorDatabaseCollection: VectorDatabaseUpdateResponse;
};


export type MutationDeleteFromApplicationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ApplicationFilter>;
};


export type MutationDeleteFromApplicationFeatureCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ApplicationFeatureFilter>;
};


export type MutationDeleteFromApplicationTypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ApplicationTypeFilter>;
};


export type MutationDeleteFromAssetCategoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AssetCategoryFilter>;
};


export type MutationDeleteFromAssetCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AssetFilter>;
};


export type MutationDeleteFromAssetStatusCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AssetStatusFilter>;
};


export type MutationDeleteFromAssetTypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AssetTypeFilter>;
};


export type MutationDeleteFromBillingPeriodCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BillingPeriodFilter>;
};


export type MutationDeleteFromCategoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CategoryFilter>;
};


export type MutationDeleteFromChatMessageCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ChatMessageFilter>;
};


export type MutationDeleteFromChatRoleCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ChatRoleFilter>;
};


export type MutationDeleteFromChatSessionCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ChatSessionFilter>;
};


export type MutationDeleteFromContentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentFilter>;
};


export type MutationDeleteFromContentContentPartCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentContentPartFilter>;
};


export type MutationDeleteFromContentPartCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentPartFilter>;
};


export type MutationDeleteFromContentPartContentPartCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentPartContentPartFilter>;
};


export type MutationDeleteFromContentTemplateCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentTemplateFilter>;
};


export type MutationDeleteFromContentTemplateVariableCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentTemplateVariableFilter>;
};


export type MutationDeleteFromContentTemplateVariableValueCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentTemplateVariableValueFilter>;
};


export type MutationDeleteFromContentTypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentTypeFilter>;
};


export type MutationDeleteFromContentVectorDatabaseCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentVectorDatabaseFilter>;
};


export type MutationDeleteFromCreationTypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CreationTypeFilter>;
};


export type MutationDeleteFromDocumentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<DocumentFilter>;
};


export type MutationDeleteFromDocumentVectorDatabaseCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<DocumentVectorDatabaseFilter>;
};


export type MutationDeleteFromFeatureCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<FeatureFilter>;
};


export type MutationDeleteFromMimeTypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MimeTypeFilter>;
};


export type MutationDeleteFromPricingPlanCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PricingPlanFilter>;
};


export type MutationDeleteFromPricingPlanFeatureCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PricingPlanFeatureFilter>;
};


export type MutationDeleteFromPromptCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PromptFilter>;
};


export type MutationDeleteFromPromptTemplateCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PromptTemplateFilter>;
};


export type MutationDeleteFromPromptTemplateVariableCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PromptTemplateVariableFilter>;
};


export type MutationDeleteFromPromptVariableValueCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PromptVariableValueFilter>;
};


export type MutationDeleteFromRoleCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RoleFilter>;
};


export type MutationDeleteFromTemplateVariableCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TemplateVariableFilter>;
};


export type MutationDeleteFromTemplateVariableTypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TemplateVariableTypeFilter>;
};


export type MutationDeleteFromUserCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserFilter>;
};


export type MutationDeleteFromUserRoleCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserRoleFilter>;
};


export type MutationDeleteFromVectorDatabaseCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<VectorDatabaseFilter>;
};


export type MutationInsertIntoApplicationCollectionArgs = {
  objects: Array<ApplicationInsertInput>;
};


export type MutationInsertIntoApplicationFeatureCollectionArgs = {
  objects: Array<ApplicationFeatureInsertInput>;
};


export type MutationInsertIntoApplicationTypeCollectionArgs = {
  objects: Array<ApplicationTypeInsertInput>;
};


export type MutationInsertIntoAssetCategoryCollectionArgs = {
  objects: Array<AssetCategoryInsertInput>;
};


export type MutationInsertIntoAssetCollectionArgs = {
  objects: Array<AssetInsertInput>;
};


export type MutationInsertIntoAssetStatusCollectionArgs = {
  objects: Array<AssetStatusInsertInput>;
};


export type MutationInsertIntoAssetTypeCollectionArgs = {
  objects: Array<AssetTypeInsertInput>;
};


export type MutationInsertIntoBillingPeriodCollectionArgs = {
  objects: Array<BillingPeriodInsertInput>;
};


export type MutationInsertIntoCategoryCollectionArgs = {
  objects: Array<CategoryInsertInput>;
};


export type MutationInsertIntoChatMessageCollectionArgs = {
  objects: Array<ChatMessageInsertInput>;
};


export type MutationInsertIntoChatRoleCollectionArgs = {
  objects: Array<ChatRoleInsertInput>;
};


export type MutationInsertIntoChatSessionCollectionArgs = {
  objects: Array<ChatSessionInsertInput>;
};


export type MutationInsertIntoContentCollectionArgs = {
  objects: Array<ContentInsertInput>;
};


export type MutationInsertIntoContentContentPartCollectionArgs = {
  objects: Array<ContentContentPartInsertInput>;
};


export type MutationInsertIntoContentPartCollectionArgs = {
  objects: Array<ContentPartInsertInput>;
};


export type MutationInsertIntoContentPartContentPartCollectionArgs = {
  objects: Array<ContentPartContentPartInsertInput>;
};


export type MutationInsertIntoContentTemplateCollectionArgs = {
  objects: Array<ContentTemplateInsertInput>;
};


export type MutationInsertIntoContentTemplateVariableCollectionArgs = {
  objects: Array<ContentTemplateVariableInsertInput>;
};


export type MutationInsertIntoContentTemplateVariableValueCollectionArgs = {
  objects: Array<ContentTemplateVariableValueInsertInput>;
};


export type MutationInsertIntoContentTypeCollectionArgs = {
  objects: Array<ContentTypeInsertInput>;
};


export type MutationInsertIntoContentVectorDatabaseCollectionArgs = {
  objects: Array<ContentVectorDatabaseInsertInput>;
};


export type MutationInsertIntoCreationTypeCollectionArgs = {
  objects: Array<CreationTypeInsertInput>;
};


export type MutationInsertIntoDocumentCollectionArgs = {
  objects: Array<DocumentInsertInput>;
};


export type MutationInsertIntoDocumentVectorDatabaseCollectionArgs = {
  objects: Array<DocumentVectorDatabaseInsertInput>;
};


export type MutationInsertIntoFeatureCollectionArgs = {
  objects: Array<FeatureInsertInput>;
};


export type MutationInsertIntoMimeTypeCollectionArgs = {
  objects: Array<MimeTypeInsertInput>;
};


export type MutationInsertIntoPricingPlanCollectionArgs = {
  objects: Array<PricingPlanInsertInput>;
};


export type MutationInsertIntoPricingPlanFeatureCollectionArgs = {
  objects: Array<PricingPlanFeatureInsertInput>;
};


export type MutationInsertIntoPromptCollectionArgs = {
  objects: Array<PromptInsertInput>;
};


export type MutationInsertIntoPromptTemplateCollectionArgs = {
  objects: Array<PromptTemplateInsertInput>;
};


export type MutationInsertIntoPromptTemplateVariableCollectionArgs = {
  objects: Array<PromptTemplateVariableInsertInput>;
};


export type MutationInsertIntoPromptVariableValueCollectionArgs = {
  objects: Array<PromptVariableValueInsertInput>;
};


export type MutationInsertIntoRoleCollectionArgs = {
  objects: Array<RoleInsertInput>;
};


export type MutationInsertIntoTemplateVariableCollectionArgs = {
  objects: Array<TemplateVariableInsertInput>;
};


export type MutationInsertIntoTemplateVariableTypeCollectionArgs = {
  objects: Array<TemplateVariableTypeInsertInput>;
};


export type MutationInsertIntoUserCollectionArgs = {
  objects: Array<UserInsertInput>;
};


export type MutationInsertIntoUserRoleCollectionArgs = {
  objects: Array<UserRoleInsertInput>;
};


export type MutationInsertIntoVectorDatabaseCollectionArgs = {
  objects: Array<VectorDatabaseInsertInput>;
};


export type MutationUpdateApplicationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ApplicationFilter>;
  set: ApplicationUpdateInput;
};


export type MutationUpdateApplicationFeatureCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ApplicationFeatureFilter>;
  set: ApplicationFeatureUpdateInput;
};


export type MutationUpdateApplicationTypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ApplicationTypeFilter>;
  set: ApplicationTypeUpdateInput;
};


export type MutationUpdateAssetCategoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AssetCategoryFilter>;
  set: AssetCategoryUpdateInput;
};


export type MutationUpdateAssetCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AssetFilter>;
  set: AssetUpdateInput;
};


export type MutationUpdateAssetStatusCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AssetStatusFilter>;
  set: AssetStatusUpdateInput;
};


export type MutationUpdateAssetTypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AssetTypeFilter>;
  set: AssetTypeUpdateInput;
};


export type MutationUpdateBillingPeriodCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BillingPeriodFilter>;
  set: BillingPeriodUpdateInput;
};


export type MutationUpdateCategoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CategoryFilter>;
  set: CategoryUpdateInput;
};


export type MutationUpdateChatMessageCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ChatMessageFilter>;
  set: ChatMessageUpdateInput;
};


export type MutationUpdateChatRoleCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ChatRoleFilter>;
  set: ChatRoleUpdateInput;
};


export type MutationUpdateChatSessionCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ChatSessionFilter>;
  set: ChatSessionUpdateInput;
};


export type MutationUpdateContentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentFilter>;
  set: ContentUpdateInput;
};


export type MutationUpdateContentContentPartCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentContentPartFilter>;
  set: ContentContentPartUpdateInput;
};


export type MutationUpdateContentPartCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentPartFilter>;
  set: ContentPartUpdateInput;
};


export type MutationUpdateContentPartContentPartCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentPartContentPartFilter>;
  set: ContentPartContentPartUpdateInput;
};


export type MutationUpdateContentTemplateCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentTemplateFilter>;
  set: ContentTemplateUpdateInput;
};


export type MutationUpdateContentTemplateVariableCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentTemplateVariableFilter>;
  set: ContentTemplateVariableUpdateInput;
};


export type MutationUpdateContentTemplateVariableValueCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentTemplateVariableValueFilter>;
  set: ContentTemplateVariableValueUpdateInput;
};


export type MutationUpdateContentTypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentTypeFilter>;
  set: ContentTypeUpdateInput;
};


export type MutationUpdateContentVectorDatabaseCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContentVectorDatabaseFilter>;
  set: ContentVectorDatabaseUpdateInput;
};


export type MutationUpdateCreationTypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CreationTypeFilter>;
  set: CreationTypeUpdateInput;
};


export type MutationUpdateDocumentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<DocumentFilter>;
  set: DocumentUpdateInput;
};


export type MutationUpdateDocumentVectorDatabaseCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<DocumentVectorDatabaseFilter>;
  set: DocumentVectorDatabaseUpdateInput;
};


export type MutationUpdateFeatureCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<FeatureFilter>;
  set: FeatureUpdateInput;
};


export type MutationUpdateMimeTypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MimeTypeFilter>;
  set: MimeTypeUpdateInput;
};


export type MutationUpdatePricingPlanCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PricingPlanFilter>;
  set: PricingPlanUpdateInput;
};


export type MutationUpdatePricingPlanFeatureCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PricingPlanFeatureFilter>;
  set: PricingPlanFeatureUpdateInput;
};


export type MutationUpdatePromptCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PromptFilter>;
  set: PromptUpdateInput;
};


export type MutationUpdatePromptTemplateCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PromptTemplateFilter>;
  set: PromptTemplateUpdateInput;
};


export type MutationUpdatePromptTemplateVariableCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PromptTemplateVariableFilter>;
  set: PromptTemplateVariableUpdateInput;
};


export type MutationUpdatePromptVariableValueCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PromptVariableValueFilter>;
  set: PromptVariableValueUpdateInput;
};


export type MutationUpdateRoleCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RoleFilter>;
  set: RoleUpdateInput;
};


export type MutationUpdateTemplateVariableCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TemplateVariableFilter>;
  set: TemplateVariableUpdateInput;
};


export type MutationUpdateTemplateVariableTypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TemplateVariableTypeFilter>;
  set: TemplateVariableTypeUpdateInput;
};


export type MutationUpdateUserCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserFilter>;
  set: UserUpdateInput;
};


export type MutationUpdateUserRoleCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserRoleFilter>;
  set: UserRoleUpdateInput;
};


export type MutationUpdateVectorDatabaseCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<VectorDatabaseFilter>;
  set: VectorDatabaseUpdateInput;
};

export type Node = {
  nodeId: Scalars['ID']['output'];
};

export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

export enum OrderByDirection {
  AscNullsFirst = 'AscNullsFirst',
  AscNullsLast = 'AscNullsLast',
  DescNullsFirst = 'DescNullsFirst',
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PricingPlan = Node & {
  __typename?: 'PricingPlan';
  createdAt: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  markdownBody?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  pricingPlanFeatureCollection?: Maybe<PricingPlanFeatureConnection>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};


export type PricingPlanPricingPlanFeatureCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PricingPlanFeatureFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PricingPlanFeatureOrderBy>>;
};

export type PricingPlanConnection = {
  __typename?: 'PricingPlanConnection';
  edges: Array<PricingPlanEdge>;
  pageInfo: PageInfo;
};

export type PricingPlanDeleteResponse = {
  __typename?: 'PricingPlanDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PricingPlan>;
};

export type PricingPlanEdge = {
  __typename?: 'PricingPlanEdge';
  cursor: Scalars['String']['output'];
  node: PricingPlan;
};

export type PricingPlanFeature = Node & {
  __typename?: 'PricingPlanFeature';
  createdAt: Scalars['Datetime']['output'];
  feature: Feature;
  featureId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  pricingPlan: PricingPlan;
  pricingPlanId: Scalars['UUID']['output'];
};

export type PricingPlanFeatureConnection = {
  __typename?: 'PricingPlanFeatureConnection';
  edges: Array<PricingPlanFeatureEdge>;
  pageInfo: PageInfo;
};

export type PricingPlanFeatureDeleteResponse = {
  __typename?: 'PricingPlanFeatureDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PricingPlanFeature>;
};

export type PricingPlanFeatureEdge = {
  __typename?: 'PricingPlanFeatureEdge';
  cursor: Scalars['String']['output'];
  node: PricingPlanFeature;
};

export type PricingPlanFeatureFilter = {
  and?: InputMaybe<Array<PricingPlanFeatureFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  featureId?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<PricingPlanFeatureFilter>;
  notes?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<PricingPlanFeatureFilter>>;
  pricingPlanId?: InputMaybe<UuidFilter>;
};

export type PricingPlanFeatureInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  featureId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  pricingPlanId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PricingPlanFeatureInsertResponse = {
  __typename?: 'PricingPlanFeatureInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PricingPlanFeature>;
};

export type PricingPlanFeatureOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  featureId?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  pricingPlanId?: InputMaybe<OrderByDirection>;
};

export type PricingPlanFeatureUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  featureId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  pricingPlanId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PricingPlanFeatureUpdateResponse = {
  __typename?: 'PricingPlanFeatureUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PricingPlanFeature>;
};

export type PricingPlanFilter = {
  and?: InputMaybe<Array<PricingPlanFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  markdownBody?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<PricingPlanFilter>;
  or?: InputMaybe<Array<PricingPlanFilter>>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type PricingPlanInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  markdownBody?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PricingPlanInsertResponse = {
  __typename?: 'PricingPlanInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PricingPlan>;
};

export type PricingPlanOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  markdownBody?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type PricingPlanUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  markdownBody?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PricingPlanUpdateResponse = {
  __typename?: 'PricingPlanUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PricingPlan>;
};

export type Prompt = Node & {
  __typename?: 'Prompt';
  assetCollection?: Maybe<AssetConnection>;
  content: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['UUID']['output']>;
  promptTemplate?: Maybe<PromptTemplate>;
  promptTemplateId?: Maybe<Scalars['UUID']['output']>;
  promptVariableValueCollection?: Maybe<PromptVariableValueConnection>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};


export type PromptAssetCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetOrderBy>>;
};


export type PromptPromptVariableValueCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromptVariableValueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PromptVariableValueOrderBy>>;
};

export type PromptConnection = {
  __typename?: 'PromptConnection';
  edges: Array<PromptEdge>;
  pageInfo: PageInfo;
};

export type PromptDeleteResponse = {
  __typename?: 'PromptDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Prompt>;
};

export type PromptEdge = {
  __typename?: 'PromptEdge';
  cursor: Scalars['String']['output'];
  node: Prompt;
};

export type PromptFilter = {
  and?: InputMaybe<Array<PromptFilter>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<PromptFilter>;
  or?: InputMaybe<Array<PromptFilter>>;
  ownerId?: InputMaybe<UuidFilter>;
  promptTemplateId?: InputMaybe<UuidFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type PromptInsertInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  promptTemplateId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PromptInsertResponse = {
  __typename?: 'PromptInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Prompt>;
};

export type PromptOrderBy = {
  content?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  ownerId?: InputMaybe<OrderByDirection>;
  promptTemplateId?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type PromptTemplate = Node & {
  __typename?: 'PromptTemplate';
  content: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['UUID']['output']>;
  promptCollection?: Maybe<PromptConnection>;
  promptTemplateVariableCollection?: Maybe<PromptTemplateVariableConnection>;
  role?: Maybe<ChatRole>;
  roleId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};


export type PromptTemplatePromptCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PromptOrderBy>>;
};


export type PromptTemplatePromptTemplateVariableCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromptTemplateVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PromptTemplateVariableOrderBy>>;
};

export type PromptTemplateConnection = {
  __typename?: 'PromptTemplateConnection';
  edges: Array<PromptTemplateEdge>;
  pageInfo: PageInfo;
};

export type PromptTemplateDeleteResponse = {
  __typename?: 'PromptTemplateDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PromptTemplate>;
};

export type PromptTemplateEdge = {
  __typename?: 'PromptTemplateEdge';
  cursor: Scalars['String']['output'];
  node: PromptTemplate;
};

export type PromptTemplateFilter = {
  and?: InputMaybe<Array<PromptTemplateFilter>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<PromptTemplateFilter>;
  or?: InputMaybe<Array<PromptTemplateFilter>>;
  ownerId?: InputMaybe<UuidFilter>;
  roleId?: InputMaybe<UuidFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type PromptTemplateInsertInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  roleId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PromptTemplateInsertResponse = {
  __typename?: 'PromptTemplateInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PromptTemplate>;
};

export type PromptTemplateOrderBy = {
  content?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  ownerId?: InputMaybe<OrderByDirection>;
  roleId?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type PromptTemplateUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  roleId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PromptTemplateUpdateResponse = {
  __typename?: 'PromptTemplateUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PromptTemplate>;
};

export type PromptTemplateVariable = Node & {
  __typename?: 'PromptTemplateVariable';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
  promptTemplate: PromptTemplate;
  promptTemplateId: Scalars['UUID']['output'];
  templateVariable: TemplateVariable;
  templateVariableId: Scalars['UUID']['output'];
};

export type PromptTemplateVariableConnection = {
  __typename?: 'PromptTemplateVariableConnection';
  edges: Array<PromptTemplateVariableEdge>;
  pageInfo: PageInfo;
};

export type PromptTemplateVariableDeleteResponse = {
  __typename?: 'PromptTemplateVariableDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PromptTemplateVariable>;
};

export type PromptTemplateVariableEdge = {
  __typename?: 'PromptTemplateVariableEdge';
  cursor: Scalars['String']['output'];
  node: PromptTemplateVariable;
};

export type PromptTemplateVariableFilter = {
  and?: InputMaybe<Array<PromptTemplateVariableFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<PromptTemplateVariableFilter>;
  or?: InputMaybe<Array<PromptTemplateVariableFilter>>;
  promptTemplateId?: InputMaybe<UuidFilter>;
  templateVariableId?: InputMaybe<UuidFilter>;
};

export type PromptTemplateVariableInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  promptTemplateId?: InputMaybe<Scalars['UUID']['input']>;
  templateVariableId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PromptTemplateVariableInsertResponse = {
  __typename?: 'PromptTemplateVariableInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PromptTemplateVariable>;
};

export type PromptTemplateVariableOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  promptTemplateId?: InputMaybe<OrderByDirection>;
  templateVariableId?: InputMaybe<OrderByDirection>;
};

export type PromptTemplateVariableUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  promptTemplateId?: InputMaybe<Scalars['UUID']['input']>;
  templateVariableId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PromptTemplateVariableUpdateResponse = {
  __typename?: 'PromptTemplateVariableUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PromptTemplateVariable>;
};

export type PromptUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  promptTemplateId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PromptUpdateResponse = {
  __typename?: 'PromptUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Prompt>;
};

export type PromptVariableValue = Node & {
  __typename?: 'PromptVariableValue';
  boolValue?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  dateValue?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
  numberValue?: Maybe<Scalars['BigFloat']['output']>;
  prompt?: Maybe<Prompt>;
  promptId?: Maybe<Scalars['UUID']['output']>;
  stringValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};

export type PromptVariableValueConnection = {
  __typename?: 'PromptVariableValueConnection';
  edges: Array<PromptVariableValueEdge>;
  pageInfo: PageInfo;
};

export type PromptVariableValueDeleteResponse = {
  __typename?: 'PromptVariableValueDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PromptVariableValue>;
};

export type PromptVariableValueEdge = {
  __typename?: 'PromptVariableValueEdge';
  cursor: Scalars['String']['output'];
  node: PromptVariableValue;
};

export type PromptVariableValueFilter = {
  and?: InputMaybe<Array<PromptVariableValueFilter>>;
  boolValue?: InputMaybe<BooleanFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  dateValue?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<PromptVariableValueFilter>;
  numberValue?: InputMaybe<BigFloatFilter>;
  or?: InputMaybe<Array<PromptVariableValueFilter>>;
  promptId?: InputMaybe<UuidFilter>;
  stringValue?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type PromptVariableValueInsertInput = {
  boolValue?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  dateValue?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  numberValue?: InputMaybe<Scalars['BigFloat']['input']>;
  promptId?: InputMaybe<Scalars['UUID']['input']>;
  stringValue?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PromptVariableValueInsertResponse = {
  __typename?: 'PromptVariableValueInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PromptVariableValue>;
};

export type PromptVariableValueOrderBy = {
  boolValue?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  dateValue?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  numberValue?: InputMaybe<OrderByDirection>;
  promptId?: InputMaybe<OrderByDirection>;
  stringValue?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type PromptVariableValueUpdateInput = {
  boolValue?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  dateValue?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  numberValue?: InputMaybe<Scalars['BigFloat']['input']>;
  promptId?: InputMaybe<Scalars['UUID']['input']>;
  stringValue?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PromptVariableValueUpdateResponse = {
  __typename?: 'PromptVariableValueUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<PromptVariableValue>;
};

export type Query = {
  __typename?: 'Query';
  applicationCollection?: Maybe<ApplicationConnection>;
  applicationFeatureCollection?: Maybe<ApplicationFeatureConnection>;
  applicationTypeCollection?: Maybe<ApplicationTypeConnection>;
  assetCategoryCollection?: Maybe<AssetCategoryConnection>;
  assetCollection?: Maybe<AssetConnection>;
  assetStatusCollection?: Maybe<AssetStatusConnection>;
  assetTypeCollection?: Maybe<AssetTypeConnection>;
  billingPeriodCollection?: Maybe<BillingPeriodConnection>;
  categoryCollection?: Maybe<CategoryConnection>;
  chatMessageCollection?: Maybe<ChatMessageConnection>;
  chatRoleCollection?: Maybe<ChatRoleConnection>;
  chatSessionCollection?: Maybe<ChatSessionConnection>;
  contentCollection?: Maybe<ContentConnection>;
  contentContentPartCollection?: Maybe<ContentContentPartConnection>;
  contentPartCollection?: Maybe<ContentPartConnection>;
  contentPartContentPartCollection?: Maybe<ContentPartContentPartConnection>;
  contentTemplateCollection?: Maybe<ContentTemplateConnection>;
  contentTemplateVariableCollection?: Maybe<ContentTemplateVariableConnection>;
  contentTemplateVariableValueCollection?: Maybe<ContentTemplateVariableValueConnection>;
  contentTypeCollection?: Maybe<ContentTypeConnection>;
  contentVectorDatabaseCollection?: Maybe<ContentVectorDatabaseConnection>;
  creationTypeCollection?: Maybe<CreationTypeConnection>;
  documentCollection?: Maybe<DocumentConnection>;
  documentVectorDatabaseCollection?: Maybe<DocumentVectorDatabaseConnection>;
  featureCollection?: Maybe<FeatureConnection>;
  mimeTypeCollection?: Maybe<MimeTypeConnection>;
  node?: Maybe<Node>;
  pricingPlanCollection?: Maybe<PricingPlanConnection>;
  pricingPlanFeatureCollection?: Maybe<PricingPlanFeatureConnection>;
  promptCollection?: Maybe<PromptConnection>;
  promptTemplateCollection?: Maybe<PromptTemplateConnection>;
  promptTemplateVariableCollection?: Maybe<PromptTemplateVariableConnection>;
  promptVariableValueCollection?: Maybe<PromptVariableValueConnection>;
  roleCollection?: Maybe<RoleConnection>;
  templateVariableCollection?: Maybe<TemplateVariableConnection>;
  templateVariableTypeCollection?: Maybe<TemplateVariableTypeConnection>;
  userCollection?: Maybe<UserConnection>;
  userRoleCollection?: Maybe<UserRoleConnection>;
  vectorDatabaseCollection?: Maybe<VectorDatabaseConnection>;
};


export type QueryApplicationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ApplicationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationOrderBy>>;
};


export type QueryApplicationFeatureCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ApplicationFeatureFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationFeatureOrderBy>>;
};


export type QueryApplicationTypeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ApplicationTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationTypeOrderBy>>;
};


export type QueryAssetCategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetCategoryOrderBy>>;
};


export type QueryAssetCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetOrderBy>>;
};


export type QueryAssetStatusCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetStatusFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetStatusOrderBy>>;
};


export type QueryAssetTypeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetTypeOrderBy>>;
};


export type QueryBillingPeriodCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BillingPeriodFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BillingPeriodOrderBy>>;
};


export type QueryCategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
};


export type QueryChatMessageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ChatMessageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessageOrderBy>>;
};


export type QueryChatRoleCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ChatRoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatRoleOrderBy>>;
};


export type QueryChatSessionCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ChatSessionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatSessionOrderBy>>;
};


export type QueryContentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentOrderBy>>;
};


export type QueryContentContentPartCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentContentPartFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentContentPartOrderBy>>;
};


export type QueryContentPartCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentPartFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentPartOrderBy>>;
};


export type QueryContentPartContentPartCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentPartContentPartFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentPartContentPartOrderBy>>;
};


export type QueryContentTemplateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentTemplateOrderBy>>;
};


export type QueryContentTemplateVariableCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentTemplateVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentTemplateVariableOrderBy>>;
};


export type QueryContentTemplateVariableValueCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentTemplateVariableValueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentTemplateVariableValueOrderBy>>;
};


export type QueryContentTypeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentTypeOrderBy>>;
};


export type QueryContentVectorDatabaseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentVectorDatabaseFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentVectorDatabaseOrderBy>>;
};


export type QueryCreationTypeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CreationTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CreationTypeOrderBy>>;
};


export type QueryDocumentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentOrderBy>>;
};


export type QueryDocumentVectorDatabaseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DocumentVectorDatabaseFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentVectorDatabaseOrderBy>>;
};


export type QueryFeatureCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FeatureFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeatureOrderBy>>;
};


export type QueryMimeTypeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MimeTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MimeTypeOrderBy>>;
};


export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


export type QueryPricingPlanCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PricingPlanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PricingPlanOrderBy>>;
};


export type QueryPricingPlanFeatureCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PricingPlanFeatureFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PricingPlanFeatureOrderBy>>;
};


export type QueryPromptCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PromptOrderBy>>;
};


export type QueryPromptTemplateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromptTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PromptTemplateOrderBy>>;
};


export type QueryPromptTemplateVariableCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromptTemplateVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PromptTemplateVariableOrderBy>>;
};


export type QueryPromptVariableValueCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromptVariableValueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PromptVariableValueOrderBy>>;
};


export type QueryRoleCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleOrderBy>>;
};


export type QueryTemplateVariableCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TemplateVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TemplateVariableOrderBy>>;
};


export type QueryTemplateVariableTypeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TemplateVariableTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TemplateVariableTypeOrderBy>>;
};


export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
};


export type QueryUserRoleCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UserRoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserRoleOrderBy>>;
};


export type QueryVectorDatabaseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<VectorDatabaseFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VectorDatabaseOrderBy>>;
};

export type Role = Node & {
  __typename?: 'Role';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  userRoleCollection?: Maybe<UserRoleConnection>;
};


export type RoleUserRoleCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UserRoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserRoleOrderBy>>;
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  edges: Array<RoleEdge>;
  pageInfo: PageInfo;
};

export type RoleDeleteResponse = {
  __typename?: 'RoleDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Role>;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor: Scalars['String']['output'];
  node: Role;
};

export type RoleFilter = {
  and?: InputMaybe<Array<RoleFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<RoleFilter>;
  or?: InputMaybe<Array<RoleFilter>>;
};

export type RoleInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type RoleInsertResponse = {
  __typename?: 'RoleInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Role>;
};

export type RoleOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type RoleUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type RoleUpdateResponse = {
  __typename?: 'RoleUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<Role>;
};

export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TemplateVariable = Node & {
  __typename?: 'TemplateVariable';
  contentTemplateVariableCollection?: Maybe<ContentTemplateVariableConnection>;
  createdAt: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['UUID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  promptTemplateVariableCollection?: Maybe<PromptTemplateVariableConnection>;
  stringValue?: Maybe<Scalars['String']['output']>;
  templateVariableType?: Maybe<TemplateVariableType>;
  templateVariableTypeId?: Maybe<Scalars['UUID']['output']>;
  usage?: Maybe<Scalars['String']['output']>;
};


export type TemplateVariableContentTemplateVariableCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentTemplateVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentTemplateVariableOrderBy>>;
};


export type TemplateVariablePromptTemplateVariableCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromptTemplateVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PromptTemplateVariableOrderBy>>;
};

export type TemplateVariableConnection = {
  __typename?: 'TemplateVariableConnection';
  edges: Array<TemplateVariableEdge>;
  pageInfo: PageInfo;
};

export type TemplateVariableDeleteResponse = {
  __typename?: 'TemplateVariableDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<TemplateVariable>;
};

export type TemplateVariableEdge = {
  __typename?: 'TemplateVariableEdge';
  cursor: Scalars['String']['output'];
  node: TemplateVariable;
};

export type TemplateVariableFilter = {
  and?: InputMaybe<Array<TemplateVariableFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<TemplateVariableFilter>;
  or?: InputMaybe<Array<TemplateVariableFilter>>;
  stringValue?: InputMaybe<StringFilter>;
  templateVariableTypeId?: InputMaybe<UuidFilter>;
  usage?: InputMaybe<StringFilter>;
};

export type TemplateVariableInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stringValue?: InputMaybe<Scalars['String']['input']>;
  templateVariableTypeId?: InputMaybe<Scalars['UUID']['input']>;
  usage?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateVariableInsertResponse = {
  __typename?: 'TemplateVariableInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<TemplateVariable>;
};

export type TemplateVariableOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  stringValue?: InputMaybe<OrderByDirection>;
  templateVariableTypeId?: InputMaybe<OrderByDirection>;
  usage?: InputMaybe<OrderByDirection>;
};

export type TemplateVariableType = Node & {
  __typename?: 'TemplateVariableType';
  contentTemplateVariableCollection?: Maybe<ContentTemplateVariableConnection>;
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isBool: Scalars['Boolean']['output'];
  isDate: Scalars['Boolean']['output'];
  isNumeric: Scalars['Boolean']['output'];
  isObject: Scalars['Boolean']['output'];
  isPrimitive: Scalars['Boolean']['output'];
  isString: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  schema?: Maybe<Scalars['JSON']['output']>;
  templateVariableCollection?: Maybe<TemplateVariableConnection>;
};


export type TemplateVariableTypeContentTemplateVariableCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentTemplateVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentTemplateVariableOrderBy>>;
};


export type TemplateVariableTypeTemplateVariableCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TemplateVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TemplateVariableOrderBy>>;
};

export type TemplateVariableTypeConnection = {
  __typename?: 'TemplateVariableTypeConnection';
  edges: Array<TemplateVariableTypeEdge>;
  pageInfo: PageInfo;
};

export type TemplateVariableTypeDeleteResponse = {
  __typename?: 'TemplateVariableTypeDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<TemplateVariableType>;
};

export type TemplateVariableTypeEdge = {
  __typename?: 'TemplateVariableTypeEdge';
  cursor: Scalars['String']['output'];
  node: TemplateVariableType;
};

export type TemplateVariableTypeFilter = {
  and?: InputMaybe<Array<TemplateVariableTypeFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  isBool?: InputMaybe<BooleanFilter>;
  isDate?: InputMaybe<BooleanFilter>;
  isNumeric?: InputMaybe<BooleanFilter>;
  isObject?: InputMaybe<BooleanFilter>;
  isPrimitive?: InputMaybe<BooleanFilter>;
  isString?: InputMaybe<BooleanFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<TemplateVariableTypeFilter>;
  or?: InputMaybe<Array<TemplateVariableTypeFilter>>;
};

export type TemplateVariableTypeInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isBool?: InputMaybe<Scalars['Boolean']['input']>;
  isDate?: InputMaybe<Scalars['Boolean']['input']>;
  isNumeric?: InputMaybe<Scalars['Boolean']['input']>;
  isObject?: InputMaybe<Scalars['Boolean']['input']>;
  isPrimitive?: InputMaybe<Scalars['Boolean']['input']>;
  isString?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Scalars['JSON']['input']>;
};

export type TemplateVariableTypeInsertResponse = {
  __typename?: 'TemplateVariableTypeInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<TemplateVariableType>;
};

export type TemplateVariableTypeOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  isBool?: InputMaybe<OrderByDirection>;
  isDate?: InputMaybe<OrderByDirection>;
  isNumeric?: InputMaybe<OrderByDirection>;
  isObject?: InputMaybe<OrderByDirection>;
  isPrimitive?: InputMaybe<OrderByDirection>;
  isString?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type TemplateVariableTypeUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isBool?: InputMaybe<Scalars['Boolean']['input']>;
  isDate?: InputMaybe<Scalars['Boolean']['input']>;
  isNumeric?: InputMaybe<Scalars['Boolean']['input']>;
  isObject?: InputMaybe<Scalars['Boolean']['input']>;
  isPrimitive?: InputMaybe<Scalars['Boolean']['input']>;
  isString?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Scalars['JSON']['input']>;
};

export type TemplateVariableTypeUpdateResponse = {
  __typename?: 'TemplateVariableTypeUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<TemplateVariableType>;
};

export type TemplateVariableUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stringValue?: InputMaybe<Scalars['String']['input']>;
  templateVariableTypeId?: InputMaybe<Scalars['UUID']['input']>;
  usage?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateVariableUpdateResponse = {
  __typename?: 'TemplateVariableUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<TemplateVariable>;
};

export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type User = Node & {
  __typename?: 'User';
  assetCollection?: Maybe<AssetConnection>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  chatSessionCollection?: Maybe<ChatSessionConnection>;
  contentCollection?: Maybe<ContentConnection>;
  contentTemplateCollection?: Maybe<ContentTemplateConnection>;
  createdAt: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  documentCollection?: Maybe<DocumentConnection>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  nodeId: Scalars['ID']['output'];
  promptCollection?: Maybe<PromptConnection>;
  promptTemplateCollection?: Maybe<PromptTemplateConnection>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  userRoleCollection?: Maybe<UserRoleConnection>;
};


export type UserAssetCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetOrderBy>>;
};


export type UserChatSessionCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ChatSessionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatSessionOrderBy>>;
};


export type UserContentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentOrderBy>>;
};


export type UserContentTemplateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentTemplateOrderBy>>;
};


export type UserDocumentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentOrderBy>>;
};


export type UserPromptCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PromptOrderBy>>;
};


export type UserPromptTemplateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromptTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PromptTemplateOrderBy>>;
};


export type UserUserRoleCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UserRoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserRoleOrderBy>>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<User>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  avatarUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  displayName?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  lastName?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<UserFilter>;
  or?: InputMaybe<Array<UserFilter>>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type UserInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type UserInsertResponse = {
  __typename?: 'UserInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<User>;
};

export type UserOrderBy = {
  avatarUrl?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  displayName?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  firstName?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  lastName?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type UserRole = Node & {
  __typename?: 'UserRole';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  nodeId: Scalars['ID']['output'];
  role: Role;
  roleId: Scalars['UUID']['output'];
  user: User;
  userId: Scalars['UUID']['output'];
};

export type UserRoleConnection = {
  __typename?: 'UserRoleConnection';
  edges: Array<UserRoleEdge>;
  pageInfo: PageInfo;
};

export type UserRoleDeleteResponse = {
  __typename?: 'UserRoleDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<UserRole>;
};

export type UserRoleEdge = {
  __typename?: 'UserRoleEdge';
  cursor: Scalars['String']['output'];
  node: UserRole;
};

export type UserRoleFilter = {
  and?: InputMaybe<Array<UserRoleFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<UserRoleFilter>;
  or?: InputMaybe<Array<UserRoleFilter>>;
  roleId?: InputMaybe<UuidFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type UserRoleInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  roleId?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type UserRoleInsertResponse = {
  __typename?: 'UserRoleInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<UserRole>;
};

export type UserRoleOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  roleId?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type UserRoleUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  roleId?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type UserRoleUpdateResponse = {
  __typename?: 'UserRoleUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<UserRole>;
};

export type UserUpdateInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type UserUpdateResponse = {
  __typename?: 'UserUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<User>;
};

export type VectorDatabase = Node & {
  __typename?: 'VectorDatabase';
  contentVectorDatabaseCollection?: Maybe<ContentVectorDatabaseConnection>;
  createdAt: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  documentVectorDatabaseCollection?: Maybe<DocumentVectorDatabaseConnection>;
  iconUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};


export type VectorDatabaseContentVectorDatabaseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentVectorDatabaseFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentVectorDatabaseOrderBy>>;
};


export type VectorDatabaseDocumentVectorDatabaseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DocumentVectorDatabaseFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentVectorDatabaseOrderBy>>;
};

export type VectorDatabaseConnection = {
  __typename?: 'VectorDatabaseConnection';
  edges: Array<VectorDatabaseEdge>;
  pageInfo: PageInfo;
};

export type VectorDatabaseDeleteResponse = {
  __typename?: 'VectorDatabaseDeleteResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<VectorDatabase>;
};

export type VectorDatabaseEdge = {
  __typename?: 'VectorDatabaseEdge';
  cursor: Scalars['String']['output'];
  node: VectorDatabase;
};

export type VectorDatabaseFilter = {
  and?: InputMaybe<Array<VectorDatabaseFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  iconUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  not?: InputMaybe<VectorDatabaseFilter>;
  or?: InputMaybe<Array<VectorDatabaseFilter>>;
  url?: InputMaybe<StringFilter>;
};

export type VectorDatabaseInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type VectorDatabaseInsertResponse = {
  __typename?: 'VectorDatabaseInsertResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<VectorDatabase>;
};

export type VectorDatabaseOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  iconUrl?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
};

export type VectorDatabaseUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type VectorDatabaseUpdateResponse = {
  __typename?: 'VectorDatabaseUpdateResponse';
  affectedCount: Scalars['Int']['output'];
  records: Array<VectorDatabase>;
};
