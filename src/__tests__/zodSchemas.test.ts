import { z } from 'zod';
import * as nodeSchemas from '../types/nodeSchemas';
import * as inputSchemas from '../types/inputSchemas';

describe('Zod Schema Validation', () => {
  test('ApplicationSchema should be defined and valid', () => {
    const schema = nodeSchemas.ApplicationSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationSchema should have correct property types', () => {
    const schema = nodeSchemas.ApplicationSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.applicationTypeId).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.systemMessageId).toBeDefined();
    expect(schema.shape.applicationType).toBeDefined();
    expect(schema.shape.systemMessage).toBeDefined();
    expect(schema.shape.applicationFeatures).toBeInstanceOf(z.ZodArray);
  });

  test('ApplicationFeatureSchema should be defined and valid', () => {
    const schema = nodeSchemas.ApplicationFeatureSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationFeatureSchema should have correct property types', () => {
    const schema = nodeSchemas.ApplicationFeatureSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.featureId).toBeDefined();
    expect(schema.shape.applicationId).toBeDefined();
    expect(schema.shape.feature).toBeDefined();
    expect(schema.shape.application).toBeDefined();
  });

  test('ApplicationTypeSchema should be defined and valid', () => {
    const schema = nodeSchemas.ApplicationTypeSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationTypeSchema should have correct property types', () => {
    const schema = nodeSchemas.ApplicationTypeSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.schema).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.applications).toBeInstanceOf(z.ZodArray);
  });

  test('AssetSchema should be defined and valid', () => {
    const schema = nodeSchemas.AssetSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetSchema should have correct property types', () => {
    const schema = nodeSchemas.AssetSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.fileName).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.fileSize).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.hash).toBeDefined();
    expect(schema.shape.url).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.mimeTypeId).toBeDefined();
    expect(schema.shape.assetTypeId).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.isApproved).toBeDefined();
    expect(schema.shape.isPublished).toBeDefined();
    expect(schema.shape.approvedAt).toBeDefined();
    expect(schema.shape.publishedAt).toBeDefined();
    expect(schema.shape.publicationUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.statusId).toBeDefined();
    expect(schema.shape.creationTypeId).toBeDefined();
    expect(schema.shape.promptId).toBeDefined();
    expect(schema.shape.assetType).toBeDefined();
    expect(schema.shape.mimeType).toBeDefined();
    expect(schema.shape.owner).toBeDefined();
    expect(schema.shape.status).toBeDefined();
    expect(schema.shape.creationType).toBeDefined();
    expect(schema.shape.prompt).toBeDefined();
    expect(schema.shape.assetCategorys).toBeInstanceOf(z.ZodArray);
  });

  test('AssetCategorySchema should be defined and valid', () => {
    const schema = nodeSchemas.AssetCategorySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetCategorySchema should have correct property types', () => {
    const schema = nodeSchemas.AssetCategorySchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.assetId).toBeDefined();
    expect(schema.shape.categoryId).toBeDefined();
    expect(schema.shape.asset).toBeDefined();
    expect(schema.shape.category).toBeDefined();
  });

  test('AssetStatusSchema should be defined and valid', () => {
    const schema = nodeSchemas.AssetStatusSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetStatusSchema should have correct property types', () => {
    const schema = nodeSchemas.AssetStatusSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.assets).toBeInstanceOf(z.ZodArray);
  });

  test('AssetTypeSchema should be defined and valid', () => {
    const schema = nodeSchemas.AssetTypeSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetTypeSchema should have correct property types', () => {
    const schema = nodeSchemas.AssetTypeSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.schema).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.assets).toBeInstanceOf(z.ZodArray);
  });

  test('BillingPeriodSchema should be defined and valid', () => {
    const schema = nodeSchemas.BillingPeriodSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('BillingPeriodSchema should have correct property types', () => {
    const schema = nodeSchemas.BillingPeriodSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
  });

  test('CategorySchema should be defined and valid', () => {
    const schema = nodeSchemas.CategorySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('CategorySchema should have correct property types', () => {
    const schema = nodeSchemas.CategorySchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.likes).toBeDefined();
    expect(schema.shape.assetCategorys).toBeInstanceOf(z.ZodArray);
  });

  test('ChatMessageSchema should be defined and valid', () => {
    const schema = nodeSchemas.ChatMessageSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatMessageSchema should have correct property types', () => {
    const schema = nodeSchemas.ChatMessageSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.chatSessionId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.previousMessageId).toBeDefined();
    expect(schema.shape.role).toBeDefined();
    expect(schema.shape.chatSession).toBeDefined();
    expect(schema.shape.previousMessage).toBeDefined();
    expect(schema.shape.chatMessages).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.applications).toBeInstanceOf(z.ZodArray);
  });

  test('ChatRoleSchema should be defined and valid', () => {
    const schema = nodeSchemas.ChatRoleSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatRoleSchema should have correct property types', () => {
    const schema = nodeSchemas.ChatRoleSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.chatMessages).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.promptTemplates).toBeInstanceOf(z.ZodArray);
  });

  test('ChatSessionSchema should be defined and valid', () => {
    const schema = nodeSchemas.ChatSessionSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatSessionSchema should have correct property types', () => {
    const schema = nodeSchemas.ChatSessionSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.startedAt).toBeDefined();
    expect(schema.shape.endedAt).toBeDefined();
    expect(schema.shape.lastActiveAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.notes).toBeDefined();
    expect(schema.shape.user).toBeDefined();
    expect(schema.shape.chatMessages).toBeInstanceOf(z.ZodArray);
  });

  test('ContentSchema should be defined and valid', () => {
    const schema = nodeSchemas.ContentSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentSchema should have correct property types', () => {
    const schema = nodeSchemas.ContentSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.isApproved).toBeDefined();
    expect(schema.shape.isPublished).toBeDefined();
    expect(schema.shape.approvedAt).toBeDefined();
    expect(schema.shape.publishedAt).toBeDefined();
    expect(schema.shape.publicationUrl).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.creationType).toBeDefined();
    expect(schema.shape.contentTemplateId).toBeDefined();
    expect(schema.shape.contentType).toBeDefined();
    expect(schema.shape.owner).toBeDefined();
    expect(schema.shape.contentTemplate).toBeDefined();
    expect(schema.shape.contentTemplateVariableValues).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.contentContentParts).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.contentVectorDatabases).toBeInstanceOf(z.ZodArray);
  });

  test('ContentContentPartSchema should be defined and valid', () => {
    const schema = nodeSchemas.ContentContentPartSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentContentPartSchema should have correct property types', () => {
    const schema = nodeSchemas.ContentContentPartSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.contentPartId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.contentPart).toBeDefined();
  });

  test('ContentPartSchema should be defined and valid', () => {
    const schema = nodeSchemas.ContentPartSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentPartSchema should have correct property types', () => {
    const schema = nodeSchemas.ContentPartSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.contentType).toBeDefined();
    expect(schema.shape.contentContentParts).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.contentPartContentParts).toBeInstanceOf(z.ZodArray);
  });

  test('ContentPartContentPartSchema should be defined and valid', () => {
    const schema = nodeSchemas.ContentPartContentPartSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentPartContentPartSchema should have correct property types', () => {
    const schema = nodeSchemas.ContentPartContentPartSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.parentContentPartId).toBeDefined();
    expect(schema.shape.childContentPartId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.childContentPart).toBeDefined();
    expect(schema.shape.parentContentPart).toBeDefined();
  });

  test('ContentTemplateSchema should be defined and valid', () => {
    const schema = nodeSchemas.ContentTemplateSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateSchema should have correct property types', () => {
    const schema = nodeSchemas.ContentTemplateSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.isActive).toBeDefined();
    expect(schema.shape.activatedAt).toBeDefined();
    expect(schema.shape.deactivatedAt).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.contentType).toBeDefined();
    expect(schema.shape.owner).toBeDefined();
    expect(schema.shape.contents).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.contentTemplateVariables).toBeInstanceOf(z.ZodArray);
  });

  test('ContentTemplateVariableSchema should be defined and valid', () => {
    const schema = nodeSchemas.ContentTemplateVariableSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateVariableSchema should have correct property types', () => {
    const schema = nodeSchemas.ContentTemplateVariableSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.templateVariableTypeId).toBeDefined();
    expect(schema.shape.contentTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.templateVariableType).toBeDefined();
    expect(schema.shape.contentTemplate).toBeDefined();
  });

  test('ContentTemplateVariableValueSchema should be defined and valid', () => {
    const schema = nodeSchemas.ContentTemplateVariableValueSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateVariableValueSchema should have correct property types', () => {
    const schema = nodeSchemas.ContentTemplateVariableValueSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.valueString).toBeDefined();
    expect(schema.shape.valueNumber).toBeDefined();
    expect(schema.shape.valueDate).toBeDefined();
    expect(schema.shape.valueBool).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.content).toBeDefined();
  });

  test('ContentTypeSchema should be defined and valid', () => {
    const schema = nodeSchemas.ContentTypeSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTypeSchema should have correct property types', () => {
    const schema = nodeSchemas.ContentTypeSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.schema).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.contentTemplates).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.contents).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.contentParts).toBeInstanceOf(z.ZodArray);
  });

  test('ContentVectorDatabaseSchema should be defined and valid', () => {
    const schema = nodeSchemas.ContentVectorDatabaseSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentVectorDatabaseSchema should have correct property types', () => {
    const schema = nodeSchemas.ContentVectorDatabaseSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.vectorDatabaseId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.vectorDatabase).toBeDefined();
  });

  test('CreationTypeSchema should be defined and valid', () => {
    const schema = nodeSchemas.CreationTypeSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('CreationTypeSchema should have correct property types', () => {
    const schema = nodeSchemas.CreationTypeSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.assets).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.contents).toBeInstanceOf(z.ZodArray);
  });

  test('DocumentSchema should be defined and valid', () => {
    const schema = nodeSchemas.DocumentSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DocumentSchema should have correct property types', () => {
    const schema = nodeSchemas.DocumentSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.mimeTypeId).toBeDefined();
    expect(schema.shape.fileName).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.originalFileUrl).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
    expect(schema.shape.mimeType).toBeDefined();
    expect(schema.shape.user).toBeDefined();
    expect(schema.shape.documentVectorDatabases).toBeInstanceOf(z.ZodArray);
  });

  test('DocumentVectorDatabaseSchema should be defined and valid', () => {
    const schema = nodeSchemas.DocumentVectorDatabaseSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DocumentVectorDatabaseSchema should have correct property types', () => {
    const schema = nodeSchemas.DocumentVectorDatabaseSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.documentId).toBeDefined();
    expect(schema.shape.vectorDatabaseId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.document).toBeDefined();
    expect(schema.shape.vectorDatabase).toBeDefined();
  });

  test('FeatureSchema should be defined and valid', () => {
    const schema = nodeSchemas.FeatureSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('FeatureSchema should have correct property types', () => {
    const schema = nodeSchemas.FeatureSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.markdownBody).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.applicationFeatures).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.pricingPlanFeatures).toBeInstanceOf(z.ZodArray);
  });

  test('MimeTypeSchema should be defined and valid', () => {
    const schema = nodeSchemas.MimeTypeSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('MimeTypeSchema should have correct property types', () => {
    const schema = nodeSchemas.MimeTypeSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.mime).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.extensions).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.documents).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.assets).toBeInstanceOf(z.ZodArray);
  });

  test('PricingPlanSchema should be defined and valid', () => {
    const schema = nodeSchemas.PricingPlanSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PricingPlanSchema should have correct property types', () => {
    const schema = nodeSchemas.PricingPlanSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.markdownBody).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.pricingPlanFeatures).toBeInstanceOf(z.ZodArray);
  });

  test('PricingPlanFeatureSchema should be defined and valid', () => {
    const schema = nodeSchemas.PricingPlanFeatureSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PricingPlanFeatureSchema should have correct property types', () => {
    const schema = nodeSchemas.PricingPlanFeatureSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.pricingPlanId).toBeDefined();
    expect(schema.shape.featureId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.notes).toBeDefined();
    expect(schema.shape.pricingPlan).toBeDefined();
    expect(schema.shape.feature).toBeDefined();
  });

  test('PromptSchema should be defined and valid', () => {
    const schema = nodeSchemas.PromptSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptSchema should have correct property types', () => {
    const schema = nodeSchemas.PromptSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.promptTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.promptTemplate).toBeDefined();
    expect(schema.shape.owner).toBeDefined();
    expect(schema.shape.promptVariableValues).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.assets).toBeInstanceOf(z.ZodArray);
  });

  test('PromptTemplateSchema should be defined and valid', () => {
    const schema = nodeSchemas.PromptTemplateSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptTemplateSchema should have correct property types', () => {
    const schema = nodeSchemas.PromptTemplateSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.role).toBeDefined();
    expect(schema.shape.owner).toBeDefined();
    expect(schema.shape.prompts).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.promptTemplateVariables).toBeInstanceOf(z.ZodArray);
  });

  test('PromptTemplateVariableSchema should be defined and valid', () => {
    const schema = nodeSchemas.PromptTemplateVariableSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptTemplateVariableSchema should have correct property types', () => {
    const schema = nodeSchemas.PromptTemplateVariableSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.templateVariableId).toBeDefined();
    expect(schema.shape.promptTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.templateVariable).toBeDefined();
    expect(schema.shape.promptTemplate).toBeDefined();
  });

  test('PromptVariableValueSchema should be defined and valid', () => {
    const schema = nodeSchemas.PromptVariableValueSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptVariableValueSchema should have correct property types', () => {
    const schema = nodeSchemas.PromptVariableValueSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.stringValue).toBeDefined();
    expect(schema.shape.boolValue).toBeDefined();
    expect(schema.shape.numberValue).toBeDefined();
    expect(schema.shape.dateValue).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.promptId).toBeDefined();
    expect(schema.shape.prompt).toBeDefined();
  });

  test('RoleSchema should be defined and valid', () => {
    const schema = nodeSchemas.RoleSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('RoleSchema should have correct property types', () => {
    const schema = nodeSchemas.RoleSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.userRoles).toBeInstanceOf(z.ZodArray);
  });

  test('TemplateVariableSchema should be defined and valid', () => {
    const schema = nodeSchemas.TemplateVariableSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('TemplateVariableSchema should have correct property types', () => {
    const schema = nodeSchemas.TemplateVariableSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.stringValue).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.templateVariableTypeId).toBeDefined();
    expect(schema.shape.usage).toBeDefined();
    expect(schema.shape.templateVariableType).toBeDefined();
    expect(schema.shape.promptTemplateVariables).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.contentTemplateVariables).toBeInstanceOf(z.ZodArray);
  });

  test('TemplateVariableTypeSchema should be defined and valid', () => {
    const schema = nodeSchemas.TemplateVariableTypeSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('TemplateVariableTypeSchema should have correct property types', () => {
    const schema = nodeSchemas.TemplateVariableTypeSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.schema).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.isPrimitive).toBeDefined();
    expect(schema.shape.isString).toBeDefined();
    expect(schema.shape.isNumeric).toBeDefined();
    expect(schema.shape.isDate).toBeDefined();
    expect(schema.shape.isBool).toBeDefined();
    expect(schema.shape.isObject).toBeDefined();
    expect(schema.shape.templateVariables).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.contentTemplateVariables).toBeInstanceOf(z.ZodArray);
  });

  test('UserSchema should be defined and valid', () => {
    const schema = nodeSchemas.UserSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('UserSchema should have correct property types', () => {
    const schema = nodeSchemas.UserSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.email).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.lastName).toBeDefined();
    expect(schema.shape.firstName).toBeDefined();
    expect(schema.shape.avatarUrl).toBeDefined();
    expect(schema.shape.displayName).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.userRoles).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.chatSessions).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.promptTemplates).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.prompts).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.documents).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.assets).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.contentTemplates).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.contents).toBeInstanceOf(z.ZodArray);
  });

  test('UserRoleSchema should be defined and valid', () => {
    const schema = nodeSchemas.UserRoleSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('UserRoleSchema should have correct property types', () => {
    const schema = nodeSchemas.UserRoleSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
    expect(schema.shape.user).toBeDefined();
    expect(schema.shape.role).toBeDefined();
  });

  test('VectorDatabaseSchema should be defined and valid', () => {
    const schema = nodeSchemas.VectorDatabaseSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('VectorDatabaseSchema should have correct property types', () => {
    const schema = nodeSchemas.VectorDatabaseSchema;
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.url).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.contentVectorDatabases).toBeInstanceOf(z.ZodArray);
    expect(schema.shape.documentVectorDatabases).toBeInstanceOf(z.ZodArray);
  });

  test('ApplicationFeatureFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ApplicationFeatureFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationFeatureFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ApplicationFeatureFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.featureId).toBeDefined();
    expect(schema.shape.applicationId).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ApplicationFeatureInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ApplicationFeatureInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationFeatureInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ApplicationFeatureInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.featureId).toBeDefined();
    expect(schema.shape.applicationId).toBeDefined();
  });

  test('ApplicationFeatureOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ApplicationFeatureOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationFeatureOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ApplicationFeatureOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.featureId).toBeDefined();
    expect(schema.shape.applicationId).toBeDefined();
  });

  test('ApplicationFeatureUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ApplicationFeatureUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationFeatureUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ApplicationFeatureUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.featureId).toBeDefined();
    expect(schema.shape.applicationId).toBeDefined();
  });

  test('ApplicationFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ApplicationFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ApplicationFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.applicationTypeId).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.systemMessageId).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ApplicationInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ApplicationInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ApplicationInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.applicationTypeId).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.systemMessageId).toBeDefined();
  });

  test('ApplicationOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ApplicationOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ApplicationOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.applicationTypeId).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.systemMessageId).toBeDefined();
  });

  test('ApplicationTypeFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ApplicationTypeFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationTypeFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ApplicationTypeFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ApplicationTypeInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ApplicationTypeInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationTypeInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ApplicationTypeInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.schema).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ApplicationTypeOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ApplicationTypeOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationTypeOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ApplicationTypeOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ApplicationTypeUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ApplicationTypeUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationTypeUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ApplicationTypeUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.schema).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ApplicationUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ApplicationUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ApplicationUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ApplicationUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.applicationTypeId).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.systemMessageId).toBeDefined();
  });

  test('AssetCategoryFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.AssetCategoryFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetCategoryFilterSchema should have correct property types', () => {
    const schema = inputSchemas.AssetCategoryFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.assetId).toBeDefined();
    expect(schema.shape.categoryId).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('AssetCategoryInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.AssetCategoryInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetCategoryInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.AssetCategoryInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.assetId).toBeDefined();
    expect(schema.shape.categoryId).toBeDefined();
  });

  test('AssetCategoryOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.AssetCategoryOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetCategoryOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.AssetCategoryOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.assetId).toBeDefined();
    expect(schema.shape.categoryId).toBeDefined();
  });

  test('AssetCategoryUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.AssetCategoryUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetCategoryUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.AssetCategoryUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.assetId).toBeDefined();
    expect(schema.shape.categoryId).toBeDefined();
  });

  test('AssetFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.AssetFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetFilterSchema should have correct property types', () => {
    const schema = inputSchemas.AssetFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.fileName).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.fileSize).toBeDefined();
    expect(schema.shape.hash).toBeDefined();
    expect(schema.shape.url).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.mimeTypeId).toBeDefined();
    expect(schema.shape.assetTypeId).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.isApproved).toBeDefined();
    expect(schema.shape.isPublished).toBeDefined();
    expect(schema.shape.approvedAt).toBeDefined();
    expect(schema.shape.publishedAt).toBeDefined();
    expect(schema.shape.publicationUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.statusId).toBeDefined();
    expect(schema.shape.creationTypeId).toBeDefined();
    expect(schema.shape.promptId).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('AssetInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.AssetInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.AssetInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.fileName).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.fileSize).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.hash).toBeDefined();
    expect(schema.shape.url).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.mimeTypeId).toBeDefined();
    expect(schema.shape.assetTypeId).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.isApproved).toBeDefined();
    expect(schema.shape.isPublished).toBeDefined();
    expect(schema.shape.approvedAt).toBeDefined();
    expect(schema.shape.publishedAt).toBeDefined();
    expect(schema.shape.publicationUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.statusId).toBeDefined();
    expect(schema.shape.creationTypeId).toBeDefined();
    expect(schema.shape.promptId).toBeDefined();
  });

  test('AssetOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.AssetOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.AssetOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.fileName).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.fileSize).toBeDefined();
    expect(schema.shape.hash).toBeDefined();
    expect(schema.shape.url).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.mimeTypeId).toBeDefined();
    expect(schema.shape.assetTypeId).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.isApproved).toBeDefined();
    expect(schema.shape.isPublished).toBeDefined();
    expect(schema.shape.approvedAt).toBeDefined();
    expect(schema.shape.publishedAt).toBeDefined();
    expect(schema.shape.publicationUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.statusId).toBeDefined();
    expect(schema.shape.creationTypeId).toBeDefined();
    expect(schema.shape.promptId).toBeDefined();
  });

  test('AssetStatusFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.AssetStatusFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetStatusFilterSchema should have correct property types', () => {
    const schema = inputSchemas.AssetStatusFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('AssetStatusInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.AssetStatusInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetStatusInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.AssetStatusInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('AssetStatusOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.AssetStatusOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetStatusOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.AssetStatusOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('AssetStatusUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.AssetStatusUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetStatusUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.AssetStatusUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('AssetTypeFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.AssetTypeFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetTypeFilterSchema should have correct property types', () => {
    const schema = inputSchemas.AssetTypeFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('AssetTypeInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.AssetTypeInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetTypeInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.AssetTypeInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.schema).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('AssetTypeOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.AssetTypeOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetTypeOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.AssetTypeOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('AssetTypeUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.AssetTypeUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetTypeUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.AssetTypeUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.schema).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('AssetUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.AssetUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('AssetUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.AssetUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.fileName).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.fileSize).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.hash).toBeDefined();
    expect(schema.shape.url).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.mimeTypeId).toBeDefined();
    expect(schema.shape.assetTypeId).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.isApproved).toBeDefined();
    expect(schema.shape.isPublished).toBeDefined();
    expect(schema.shape.approvedAt).toBeDefined();
    expect(schema.shape.publishedAt).toBeDefined();
    expect(schema.shape.publicationUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.statusId).toBeDefined();
    expect(schema.shape.creationTypeId).toBeDefined();
    expect(schema.shape.promptId).toBeDefined();
  });

  test('BigFloatFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.BigFloatFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('BigFloatFilterSchema should have correct property types', () => {
    const schema = inputSchemas.BigFloatFilterSchema;
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.gt).toBeDefined();
    expect(schema.shape.gte).toBeDefined();
    expect(schema.shape.in).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.lt).toBeDefined();
    expect(schema.shape.lte).toBeDefined();
    expect(schema.shape.neq).toBeDefined();
  });

  test('BigFloatListFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.BigFloatListFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('BigFloatListFilterSchema should have correct property types', () => {
    const schema = inputSchemas.BigFloatListFilterSchema;
    expect(schema.shape.containedBy).toBeDefined();
    expect(schema.shape.contains).toBeDefined();
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.overlaps).toBeDefined();
  });

  test('BigIntFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.BigIntFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('BigIntFilterSchema should have correct property types', () => {
    const schema = inputSchemas.BigIntFilterSchema;
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.gt).toBeDefined();
    expect(schema.shape.gte).toBeDefined();
    expect(schema.shape.in).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.lt).toBeDefined();
    expect(schema.shape.lte).toBeDefined();
    expect(schema.shape.neq).toBeDefined();
  });

  test('BigIntListFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.BigIntListFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('BigIntListFilterSchema should have correct property types', () => {
    const schema = inputSchemas.BigIntListFilterSchema;
    expect(schema.shape.containedBy).toBeDefined();
    expect(schema.shape.contains).toBeDefined();
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.overlaps).toBeDefined();
  });

  test('BillingPeriodFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.BillingPeriodFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('BillingPeriodFilterSchema should have correct property types', () => {
    const schema = inputSchemas.BillingPeriodFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('BillingPeriodInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.BillingPeriodInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('BillingPeriodInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.BillingPeriodInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
  });

  test('BillingPeriodOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.BillingPeriodOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('BillingPeriodOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.BillingPeriodOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
  });

  test('BillingPeriodUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.BillingPeriodUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('BillingPeriodUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.BillingPeriodUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
  });

  test('BooleanFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.BooleanFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('BooleanFilterSchema should have correct property types', () => {
    const schema = inputSchemas.BooleanFilterSchema;
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.is).toBeDefined();
  });

  test('BooleanListFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.BooleanListFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('BooleanListFilterSchema should have correct property types', () => {
    const schema = inputSchemas.BooleanListFilterSchema;
    expect(schema.shape.containedBy).toBeDefined();
    expect(schema.shape.contains).toBeDefined();
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.overlaps).toBeDefined();
  });

  test('CategoryFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.CategoryFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('CategoryFilterSchema should have correct property types', () => {
    const schema = inputSchemas.CategoryFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.likes).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('CategoryInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.CategoryInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('CategoryInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.CategoryInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.likes).toBeDefined();
  });

  test('CategoryOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.CategoryOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('CategoryOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.CategoryOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.likes).toBeDefined();
  });

  test('CategoryUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.CategoryUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('CategoryUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.CategoryUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.likes).toBeDefined();
  });

  test('ChatMessageFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ChatMessageFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatMessageFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ChatMessageFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.chatSessionId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.previousMessageId).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ChatMessageInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ChatMessageInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatMessageInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ChatMessageInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.chatSessionId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.previousMessageId).toBeDefined();
  });

  test('ChatMessageOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ChatMessageOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatMessageOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ChatMessageOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.chatSessionId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.previousMessageId).toBeDefined();
  });

  test('ChatMessageUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ChatMessageUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatMessageUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ChatMessageUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.chatSessionId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.previousMessageId).toBeDefined();
  });

  test('ChatRoleFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ChatRoleFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatRoleFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ChatRoleFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ChatRoleInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ChatRoleInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatRoleInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ChatRoleInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ChatRoleOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ChatRoleOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatRoleOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ChatRoleOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ChatRoleUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ChatRoleUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatRoleUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ChatRoleUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ChatSessionFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ChatSessionFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatSessionFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ChatSessionFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.startedAt).toBeDefined();
    expect(schema.shape.endedAt).toBeDefined();
    expect(schema.shape.lastActiveAt).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.notes).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ChatSessionInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ChatSessionInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatSessionInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ChatSessionInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.startedAt).toBeDefined();
    expect(schema.shape.endedAt).toBeDefined();
    expect(schema.shape.lastActiveAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.notes).toBeDefined();
  });

  test('ChatSessionOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ChatSessionOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatSessionOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ChatSessionOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.startedAt).toBeDefined();
    expect(schema.shape.endedAt).toBeDefined();
    expect(schema.shape.lastActiveAt).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.notes).toBeDefined();
  });

  test('ChatSessionUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ChatSessionUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ChatSessionUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ChatSessionUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.startedAt).toBeDefined();
    expect(schema.shape.endedAt).toBeDefined();
    expect(schema.shape.lastActiveAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.notes).toBeDefined();
  });

  test('ContentContentPartFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentContentPartFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentContentPartFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ContentContentPartFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.contentPartId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ContentContentPartInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentContentPartInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentContentPartInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentContentPartInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.contentPartId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ContentContentPartOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ContentContentPartOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentContentPartOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ContentContentPartOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.contentPartId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ContentContentPartUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentContentPartUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentContentPartUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentContentPartUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.contentPartId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ContentFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ContentFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.isApproved).toBeDefined();
    expect(schema.shape.isPublished).toBeDefined();
    expect(schema.shape.approvedAt).toBeDefined();
    expect(schema.shape.publishedAt).toBeDefined();
    expect(schema.shape.publicationUrl).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.creationType).toBeDefined();
    expect(schema.shape.contentTemplateId).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ContentInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.isApproved).toBeDefined();
    expect(schema.shape.isPublished).toBeDefined();
    expect(schema.shape.approvedAt).toBeDefined();
    expect(schema.shape.publishedAt).toBeDefined();
    expect(schema.shape.publicationUrl).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.creationType).toBeDefined();
    expect(schema.shape.contentTemplateId).toBeDefined();
  });

  test('ContentOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ContentOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ContentOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.isApproved).toBeDefined();
    expect(schema.shape.isPublished).toBeDefined();
    expect(schema.shape.approvedAt).toBeDefined();
    expect(schema.shape.publishedAt).toBeDefined();
    expect(schema.shape.publicationUrl).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.creationType).toBeDefined();
    expect(schema.shape.contentTemplateId).toBeDefined();
  });

  test('ContentPartContentPartFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentPartContentPartFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentPartContentPartFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ContentPartContentPartFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.parentContentPartId).toBeDefined();
    expect(schema.shape.childContentPartId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ContentPartContentPartInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentPartContentPartInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentPartContentPartInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentPartContentPartInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.parentContentPartId).toBeDefined();
    expect(schema.shape.childContentPartId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ContentPartContentPartOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ContentPartContentPartOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentPartContentPartOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ContentPartContentPartOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.parentContentPartId).toBeDefined();
    expect(schema.shape.childContentPartId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ContentPartContentPartUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentPartContentPartUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentPartContentPartUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentPartContentPartUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.parentContentPartId).toBeDefined();
    expect(schema.shape.childContentPartId).toBeDefined();
    expect(schema.shape.index).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ContentPartFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentPartFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentPartFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ContentPartFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ContentPartInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentPartInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentPartInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentPartInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
  });

  test('ContentPartOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ContentPartOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentPartOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ContentPartOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
  });

  test('ContentPartUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentPartUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentPartUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentPartUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
  });

  test('ContentTemplateFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTemplateFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ContentTemplateFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.isActive).toBeDefined();
    expect(schema.shape.activatedAt).toBeDefined();
    expect(schema.shape.deactivatedAt).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ContentTemplateInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTemplateInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentTemplateInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.isActive).toBeDefined();
    expect(schema.shape.activatedAt).toBeDefined();
    expect(schema.shape.deactivatedAt).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
  });

  test('ContentTemplateOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTemplateOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ContentTemplateOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.isActive).toBeDefined();
    expect(schema.shape.activatedAt).toBeDefined();
    expect(schema.shape.deactivatedAt).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
  });

  test('ContentTemplateUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTemplateUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentTemplateUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.isActive).toBeDefined();
    expect(schema.shape.activatedAt).toBeDefined();
    expect(schema.shape.deactivatedAt).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
  });

  test('ContentTemplateVariableFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTemplateVariableFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateVariableFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ContentTemplateVariableFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.templateVariableTypeId).toBeDefined();
    expect(schema.shape.contentTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ContentTemplateVariableInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTemplateVariableInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateVariableInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentTemplateVariableInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.templateVariableTypeId).toBeDefined();
    expect(schema.shape.contentTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
  });

  test('ContentTemplateVariableOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTemplateVariableOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateVariableOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ContentTemplateVariableOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.templateVariableTypeId).toBeDefined();
    expect(schema.shape.contentTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ContentTemplateVariableUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTemplateVariableUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateVariableUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentTemplateVariableUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.templateVariableTypeId).toBeDefined();
    expect(schema.shape.contentTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
  });

  test('ContentTemplateVariableValueFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTemplateVariableValueFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateVariableValueFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ContentTemplateVariableValueFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.valueString).toBeDefined();
    expect(schema.shape.valueNumber).toBeDefined();
    expect(schema.shape.valueDate).toBeDefined();
    expect(schema.shape.valueBool).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ContentTemplateVariableValueInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTemplateVariableValueInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateVariableValueInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentTemplateVariableValueInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.valueString).toBeDefined();
    expect(schema.shape.valueNumber).toBeDefined();
    expect(schema.shape.valueDate).toBeDefined();
    expect(schema.shape.valueBool).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
  });

  test('ContentTemplateVariableValueOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTemplateVariableValueOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateVariableValueOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ContentTemplateVariableValueOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.valueString).toBeDefined();
    expect(schema.shape.valueNumber).toBeDefined();
    expect(schema.shape.valueDate).toBeDefined();
    expect(schema.shape.valueBool).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
  });

  test('ContentTemplateVariableValueUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTemplateVariableValueUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTemplateVariableValueUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentTemplateVariableValueUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.valueString).toBeDefined();
    expect(schema.shape.valueNumber).toBeDefined();
    expect(schema.shape.valueDate).toBeDefined();
    expect(schema.shape.valueBool).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
  });

  test('ContentTypeFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTypeFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTypeFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ContentTypeFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ContentTypeInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTypeInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTypeInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentTypeInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.schema).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
  });

  test('ContentTypeOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTypeOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTypeOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ContentTypeOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
  });

  test('ContentTypeUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentTypeUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentTypeUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentTypeUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.schema).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
  });

  test('ContentUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentTypeId).toBeDefined();
    expect(schema.shape.title).toBeDefined();
    expect(schema.shape.body).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.version).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.aiContext).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.isApproved).toBeDefined();
    expect(schema.shape.isPublished).toBeDefined();
    expect(schema.shape.approvedAt).toBeDefined();
    expect(schema.shape.publishedAt).toBeDefined();
    expect(schema.shape.publicationUrl).toBeDefined();
    expect(schema.shape.isArchived).toBeDefined();
    expect(schema.shape.archivedAt).toBeDefined();
    expect(schema.shape.coverUrl).toBeDefined();
    expect(schema.shape.creationType).toBeDefined();
    expect(schema.shape.contentTemplateId).toBeDefined();
  });

  test('ContentVectorDatabaseFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentVectorDatabaseFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentVectorDatabaseFilterSchema should have correct property types', () => {
    const schema = inputSchemas.ContentVectorDatabaseFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.vectorDatabaseId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('ContentVectorDatabaseInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentVectorDatabaseInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentVectorDatabaseInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentVectorDatabaseInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.vectorDatabaseId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ContentVectorDatabaseOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.ContentVectorDatabaseOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentVectorDatabaseOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.ContentVectorDatabaseOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.vectorDatabaseId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('ContentVectorDatabaseUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.ContentVectorDatabaseUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('ContentVectorDatabaseUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.ContentVectorDatabaseUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.contentId).toBeDefined();
    expect(schema.shape.vectorDatabaseId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('CreationTypeFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.CreationTypeFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('CreationTypeFilterSchema should have correct property types', () => {
    const schema = inputSchemas.CreationTypeFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('CreationTypeInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.CreationTypeInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('CreationTypeInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.CreationTypeInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('CreationTypeOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.CreationTypeOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('CreationTypeOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.CreationTypeOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('CreationTypeUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.CreationTypeUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('CreationTypeUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.CreationTypeUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('DateFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.DateFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DateFilterSchema should have correct property types', () => {
    const schema = inputSchemas.DateFilterSchema;
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.gt).toBeDefined();
    expect(schema.shape.gte).toBeDefined();
    expect(schema.shape.in).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.lt).toBeDefined();
    expect(schema.shape.lte).toBeDefined();
    expect(schema.shape.neq).toBeDefined();
  });

  test('DateListFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.DateListFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DateListFilterSchema should have correct property types', () => {
    const schema = inputSchemas.DateListFilterSchema;
    expect(schema.shape.containedBy).toBeDefined();
    expect(schema.shape.contains).toBeDefined();
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.overlaps).toBeDefined();
  });

  test('DatetimeFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.DatetimeFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DatetimeFilterSchema should have correct property types', () => {
    const schema = inputSchemas.DatetimeFilterSchema;
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.gt).toBeDefined();
    expect(schema.shape.gte).toBeDefined();
    expect(schema.shape.in).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.lt).toBeDefined();
    expect(schema.shape.lte).toBeDefined();
    expect(schema.shape.neq).toBeDefined();
  });

  test('DatetimeListFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.DatetimeListFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DatetimeListFilterSchema should have correct property types', () => {
    const schema = inputSchemas.DatetimeListFilterSchema;
    expect(schema.shape.containedBy).toBeDefined();
    expect(schema.shape.contains).toBeDefined();
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.overlaps).toBeDefined();
  });

  test('DocumentFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.DocumentFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DocumentFilterSchema should have correct property types', () => {
    const schema = inputSchemas.DocumentFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.mimeTypeId).toBeDefined();
    expect(schema.shape.fileName).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.originalFileUrl).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('DocumentInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.DocumentInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DocumentInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.DocumentInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.mimeTypeId).toBeDefined();
    expect(schema.shape.fileName).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.originalFileUrl).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
  });

  test('DocumentOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.DocumentOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DocumentOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.DocumentOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.mimeTypeId).toBeDefined();
    expect(schema.shape.fileName).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.originalFileUrl).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
  });

  test('DocumentUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.DocumentUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DocumentUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.DocumentUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.mimeTypeId).toBeDefined();
    expect(schema.shape.fileName).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.originalFileUrl).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
  });

  test('DocumentVectorDatabaseFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.DocumentVectorDatabaseFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DocumentVectorDatabaseFilterSchema should have correct property types', () => {
    const schema = inputSchemas.DocumentVectorDatabaseFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.documentId).toBeDefined();
    expect(schema.shape.vectorDatabaseId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('DocumentVectorDatabaseInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.DocumentVectorDatabaseInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DocumentVectorDatabaseInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.DocumentVectorDatabaseInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.documentId).toBeDefined();
    expect(schema.shape.vectorDatabaseId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('DocumentVectorDatabaseOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.DocumentVectorDatabaseOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DocumentVectorDatabaseOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.DocumentVectorDatabaseOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.documentId).toBeDefined();
    expect(schema.shape.vectorDatabaseId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('DocumentVectorDatabaseUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.DocumentVectorDatabaseUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('DocumentVectorDatabaseUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.DocumentVectorDatabaseUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.documentId).toBeDefined();
    expect(schema.shape.vectorDatabaseId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('FeatureFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.FeatureFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('FeatureFilterSchema should have correct property types', () => {
    const schema = inputSchemas.FeatureFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.markdownBody).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('FeatureInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.FeatureInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('FeatureInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.FeatureInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.markdownBody).toBeDefined();
    expect(schema.shape.data).toBeDefined();
  });

  test('FeatureOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.FeatureOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('FeatureOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.FeatureOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.markdownBody).toBeDefined();
  });

  test('FeatureUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.FeatureUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('FeatureUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.FeatureUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.markdownBody).toBeDefined();
    expect(schema.shape.data).toBeDefined();
  });

  test('FloatFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.FloatFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('FloatFilterSchema should have correct property types', () => {
    const schema = inputSchemas.FloatFilterSchema;
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.gt).toBeDefined();
    expect(schema.shape.gte).toBeDefined();
    expect(schema.shape.in).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.lt).toBeDefined();
    expect(schema.shape.lte).toBeDefined();
    expect(schema.shape.neq).toBeDefined();
  });

  test('FloatListFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.FloatListFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('FloatListFilterSchema should have correct property types', () => {
    const schema = inputSchemas.FloatListFilterSchema;
    expect(schema.shape.containedBy).toBeDefined();
    expect(schema.shape.contains).toBeDefined();
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.overlaps).toBeDefined();
  });

  test('IDFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.IDFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('IDFilterSchema should have correct property types', () => {
    const schema = inputSchemas.IDFilterSchema;
    expect(schema.shape.eq).toBeDefined();
  });

  test('IntFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.IntFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('IntFilterSchema should have correct property types', () => {
    const schema = inputSchemas.IntFilterSchema;
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.gt).toBeDefined();
    expect(schema.shape.gte).toBeDefined();
    expect(schema.shape.in).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.lt).toBeDefined();
    expect(schema.shape.lte).toBeDefined();
    expect(schema.shape.neq).toBeDefined();
  });

  test('IntListFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.IntListFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('IntListFilterSchema should have correct property types', () => {
    const schema = inputSchemas.IntListFilterSchema;
    expect(schema.shape.containedBy).toBeDefined();
    expect(schema.shape.contains).toBeDefined();
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.overlaps).toBeDefined();
  });

  test('MimeTypeFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.MimeTypeFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('MimeTypeFilterSchema should have correct property types', () => {
    const schema = inputSchemas.MimeTypeFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.mime).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.extensions).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('MimeTypeInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.MimeTypeInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('MimeTypeInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.MimeTypeInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.mime).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.extensions).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('MimeTypeOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.MimeTypeOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('MimeTypeOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.MimeTypeOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.mime).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('MimeTypeUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.MimeTypeUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('MimeTypeUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.MimeTypeUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.mime).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.extensions).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('OpaqueFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.OpaqueFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('OpaqueFilterSchema should have correct property types', () => {
    const schema = inputSchemas.OpaqueFilterSchema;
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.is).toBeDefined();
  });

  test('PricingPlanFeatureFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.PricingPlanFeatureFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PricingPlanFeatureFilterSchema should have correct property types', () => {
    const schema = inputSchemas.PricingPlanFeatureFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.pricingPlanId).toBeDefined();
    expect(schema.shape.featureId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.notes).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('PricingPlanFeatureInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.PricingPlanFeatureInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PricingPlanFeatureInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.PricingPlanFeatureInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.pricingPlanId).toBeDefined();
    expect(schema.shape.featureId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.notes).toBeDefined();
  });

  test('PricingPlanFeatureOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.PricingPlanFeatureOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PricingPlanFeatureOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.PricingPlanFeatureOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.pricingPlanId).toBeDefined();
    expect(schema.shape.featureId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.notes).toBeDefined();
  });

  test('PricingPlanFeatureUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.PricingPlanFeatureUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PricingPlanFeatureUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.PricingPlanFeatureUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.pricingPlanId).toBeDefined();
    expect(schema.shape.featureId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.notes).toBeDefined();
  });

  test('PricingPlanFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.PricingPlanFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PricingPlanFilterSchema should have correct property types', () => {
    const schema = inputSchemas.PricingPlanFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.markdownBody).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('PricingPlanInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.PricingPlanInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PricingPlanInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.PricingPlanInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.markdownBody).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
  });

  test('PricingPlanOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.PricingPlanOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PricingPlanOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.PricingPlanOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.markdownBody).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
  });

  test('PricingPlanUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.PricingPlanUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PricingPlanUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.PricingPlanUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.markdownBody).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
  });

  test('PromptFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.PromptFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptFilterSchema should have correct property types', () => {
    const schema = inputSchemas.PromptFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.promptTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('PromptInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.PromptInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.PromptInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.promptTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
  });

  test('PromptOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.PromptOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.PromptOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.promptTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
  });

  test('PromptTemplateFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.PromptTemplateFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptTemplateFilterSchema should have correct property types', () => {
    const schema = inputSchemas.PromptTemplateFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('PromptTemplateInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.PromptTemplateInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptTemplateInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.PromptTemplateInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
  });

  test('PromptTemplateOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.PromptTemplateOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptTemplateOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.PromptTemplateOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
  });

  test('PromptTemplateUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.PromptTemplateUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptTemplateUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.PromptTemplateUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
  });

  test('PromptTemplateVariableFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.PromptTemplateVariableFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptTemplateVariableFilterSchema should have correct property types', () => {
    const schema = inputSchemas.PromptTemplateVariableFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.templateVariableId).toBeDefined();
    expect(schema.shape.promptTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('PromptTemplateVariableInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.PromptTemplateVariableInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptTemplateVariableInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.PromptTemplateVariableInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.templateVariableId).toBeDefined();
    expect(schema.shape.promptTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('PromptTemplateVariableOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.PromptTemplateVariableOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptTemplateVariableOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.PromptTemplateVariableOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.templateVariableId).toBeDefined();
    expect(schema.shape.promptTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('PromptTemplateVariableUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.PromptTemplateVariableUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptTemplateVariableUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.PromptTemplateVariableUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.templateVariableId).toBeDefined();
    expect(schema.shape.promptTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
  });

  test('PromptUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.PromptUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.PromptUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.promptTemplateId).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.content).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.ownerId).toBeDefined();
  });

  test('PromptVariableValueFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.PromptVariableValueFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptVariableValueFilterSchema should have correct property types', () => {
    const schema = inputSchemas.PromptVariableValueFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.stringValue).toBeDefined();
    expect(schema.shape.boolValue).toBeDefined();
    expect(schema.shape.numberValue).toBeDefined();
    expect(schema.shape.dateValue).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.promptId).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('PromptVariableValueInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.PromptVariableValueInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptVariableValueInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.PromptVariableValueInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.stringValue).toBeDefined();
    expect(schema.shape.boolValue).toBeDefined();
    expect(schema.shape.numberValue).toBeDefined();
    expect(schema.shape.dateValue).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.promptId).toBeDefined();
  });

  test('PromptVariableValueOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.PromptVariableValueOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptVariableValueOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.PromptVariableValueOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.stringValue).toBeDefined();
    expect(schema.shape.boolValue).toBeDefined();
    expect(schema.shape.numberValue).toBeDefined();
    expect(schema.shape.dateValue).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.promptId).toBeDefined();
  });

  test('PromptVariableValueUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.PromptVariableValueUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('PromptVariableValueUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.PromptVariableValueUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.stringValue).toBeDefined();
    expect(schema.shape.boolValue).toBeDefined();
    expect(schema.shape.numberValue).toBeDefined();
    expect(schema.shape.dateValue).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.promptId).toBeDefined();
  });

  test('RoleFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.RoleFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('RoleFilterSchema should have correct property types', () => {
    const schema = inputSchemas.RoleFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('RoleInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.RoleInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('RoleInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.RoleInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
  });

  test('RoleOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.RoleOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('RoleOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.RoleOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
  });

  test('RoleUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.RoleUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('RoleUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.RoleUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
  });

  test('StringFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.StringFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('StringFilterSchema should have correct property types', () => {
    const schema = inputSchemas.StringFilterSchema;
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.gt).toBeDefined();
    expect(schema.shape.gte).toBeDefined();
    expect(schema.shape.ilike).toBeDefined();
    expect(schema.shape.in).toBeDefined();
    expect(schema.shape.iregex).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.like).toBeDefined();
    expect(schema.shape.lt).toBeDefined();
    expect(schema.shape.lte).toBeDefined();
    expect(schema.shape.neq).toBeDefined();
    expect(schema.shape.regex).toBeDefined();
    expect(schema.shape.startsWith).toBeDefined();
  });

  test('StringListFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.StringListFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('StringListFilterSchema should have correct property types', () => {
    const schema = inputSchemas.StringListFilterSchema;
    expect(schema.shape.containedBy).toBeDefined();
    expect(schema.shape.contains).toBeDefined();
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.overlaps).toBeDefined();
  });

  test('TemplateVariableFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.TemplateVariableFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('TemplateVariableFilterSchema should have correct property types', () => {
    const schema = inputSchemas.TemplateVariableFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.stringValue).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.templateVariableTypeId).toBeDefined();
    expect(schema.shape.usage).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('TemplateVariableInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.TemplateVariableInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('TemplateVariableInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.TemplateVariableInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.stringValue).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.templateVariableTypeId).toBeDefined();
    expect(schema.shape.usage).toBeDefined();
  });

  test('TemplateVariableOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.TemplateVariableOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('TemplateVariableOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.TemplateVariableOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.stringValue).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.templateVariableTypeId).toBeDefined();
    expect(schema.shape.usage).toBeDefined();
  });

  test('TemplateVariableTypeFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.TemplateVariableTypeFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('TemplateVariableTypeFilterSchema should have correct property types', () => {
    const schema = inputSchemas.TemplateVariableTypeFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.isPrimitive).toBeDefined();
    expect(schema.shape.isString).toBeDefined();
    expect(schema.shape.isNumeric).toBeDefined();
    expect(schema.shape.isDate).toBeDefined();
    expect(schema.shape.isBool).toBeDefined();
    expect(schema.shape.isObject).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('TemplateVariableTypeInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.TemplateVariableTypeInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('TemplateVariableTypeInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.TemplateVariableTypeInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.schema).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.isPrimitive).toBeDefined();
    expect(schema.shape.isString).toBeDefined();
    expect(schema.shape.isNumeric).toBeDefined();
    expect(schema.shape.isDate).toBeDefined();
    expect(schema.shape.isBool).toBeDefined();
    expect(schema.shape.isObject).toBeDefined();
  });

  test('TemplateVariableTypeOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.TemplateVariableTypeOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('TemplateVariableTypeOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.TemplateVariableTypeOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.isPrimitive).toBeDefined();
    expect(schema.shape.isString).toBeDefined();
    expect(schema.shape.isNumeric).toBeDefined();
    expect(schema.shape.isDate).toBeDefined();
    expect(schema.shape.isBool).toBeDefined();
    expect(schema.shape.isObject).toBeDefined();
  });

  test('TemplateVariableTypeUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.TemplateVariableTypeUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('TemplateVariableTypeUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.TemplateVariableTypeUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.schema).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.description).toBeDefined();
    expect(schema.shape.isPrimitive).toBeDefined();
    expect(schema.shape.isString).toBeDefined();
    expect(schema.shape.isNumeric).toBeDefined();
    expect(schema.shape.isDate).toBeDefined();
    expect(schema.shape.isBool).toBeDefined();
    expect(schema.shape.isObject).toBeDefined();
  });

  test('TemplateVariableUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.TemplateVariableUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('TemplateVariableUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.TemplateVariableUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.stringValue).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.templateVariableTypeId).toBeDefined();
    expect(schema.shape.usage).toBeDefined();
  });

  test('TimeFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.TimeFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('TimeFilterSchema should have correct property types', () => {
    const schema = inputSchemas.TimeFilterSchema;
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.gt).toBeDefined();
    expect(schema.shape.gte).toBeDefined();
    expect(schema.shape.in).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.lt).toBeDefined();
    expect(schema.shape.lte).toBeDefined();
    expect(schema.shape.neq).toBeDefined();
  });

  test('TimeListFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.TimeListFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('TimeListFilterSchema should have correct property types', () => {
    const schema = inputSchemas.TimeListFilterSchema;
    expect(schema.shape.containedBy).toBeDefined();
    expect(schema.shape.contains).toBeDefined();
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.overlaps).toBeDefined();
  });

  test('UserFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.UserFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('UserFilterSchema should have correct property types', () => {
    const schema = inputSchemas.UserFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.email).toBeDefined();
    expect(schema.shape.lastName).toBeDefined();
    expect(schema.shape.firstName).toBeDefined();
    expect(schema.shape.avatarUrl).toBeDefined();
    expect(schema.shape.displayName).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('UserInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.UserInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('UserInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.UserInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.email).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.lastName).toBeDefined();
    expect(schema.shape.firstName).toBeDefined();
    expect(schema.shape.avatarUrl).toBeDefined();
    expect(schema.shape.displayName).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
  });

  test('UserOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.UserOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('UserOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.UserOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.email).toBeDefined();
    expect(schema.shape.lastName).toBeDefined();
    expect(schema.shape.firstName).toBeDefined();
    expect(schema.shape.avatarUrl).toBeDefined();
    expect(schema.shape.displayName).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
  });

  test('UserRoleFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.UserRoleFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('UserRoleFilterSchema should have correct property types', () => {
    const schema = inputSchemas.UserRoleFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('UserRoleInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.UserRoleInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('UserRoleInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.UserRoleInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
  });

  test('UserRoleOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.UserRoleOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('UserRoleOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.UserRoleOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
  });

  test('UserRoleUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.UserRoleUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('UserRoleUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.UserRoleUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.userId).toBeDefined();
    expect(schema.shape.roleId).toBeDefined();
  });

  test('UserUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.UserUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('UserUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.UserUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.email).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.lastName).toBeDefined();
    expect(schema.shape.firstName).toBeDefined();
    expect(schema.shape.avatarUrl).toBeDefined();
    expect(schema.shape.displayName).toBeDefined();
    expect(schema.shape.updatedAt).toBeDefined();
  });

  test('UUIDFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.UUIDFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('UUIDFilterSchema should have correct property types', () => {
    const schema = inputSchemas.UUIDFilterSchema;
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.in).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.neq).toBeDefined();
  });

  test('UUIDListFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.UUIDListFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('UUIDListFilterSchema should have correct property types', () => {
    const schema = inputSchemas.UUIDListFilterSchema;
    expect(schema.shape.containedBy).toBeDefined();
    expect(schema.shape.contains).toBeDefined();
    expect(schema.shape.eq).toBeDefined();
    expect(schema.shape.is).toBeDefined();
    expect(schema.shape.overlaps).toBeDefined();
  });

  test('VectorDatabaseFilterSchema should be defined and valid', () => {
    const schema = inputSchemas.VectorDatabaseFilterSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('VectorDatabaseFilterSchema should have correct property types', () => {
    const schema = inputSchemas.VectorDatabaseFilterSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.url).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
    expect(schema.shape.nodeId).toBeDefined();
    expect(schema.shape.and).toBeDefined();
    expect(schema.shape.or).toBeDefined();
    expect(schema.shape.not).toBeDefined();
  });

  test('VectorDatabaseInsertInputSchema should be defined and valid', () => {
    const schema = inputSchemas.VectorDatabaseInsertInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('VectorDatabaseInsertInputSchema should have correct property types', () => {
    const schema = inputSchemas.VectorDatabaseInsertInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.url).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
  });

  test('VectorDatabaseOrderBySchema should be defined and valid', () => {
    const schema = inputSchemas.VectorDatabaseOrderBySchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('VectorDatabaseOrderBySchema should have correct property types', () => {
    const schema = inputSchemas.VectorDatabaseOrderBySchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.url).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
  });

  test('VectorDatabaseUpdateInputSchema should be defined and valid', () => {
    const schema = inputSchemas.VectorDatabaseUpdateInputSchema;
    expect(schema).toBeDefined();
    expect(schema instanceof z.ZodObject).toBe(true);
  });

  test('VectorDatabaseUpdateInputSchema should have correct property types', () => {
    const schema = inputSchemas.VectorDatabaseUpdateInputSchema;
    expect(schema.shape.id).toBeDefined();
    expect(schema.shape.name).toBeDefined();
    expect(schema.shape.key).toBeDefined();
    expect(schema.shape.url).toBeDefined();
    expect(schema.shape.data).toBeDefined();
    expect(schema.shape.createdAt).toBeDefined();
    expect(schema.shape.iconUrl).toBeDefined();
  });

});
