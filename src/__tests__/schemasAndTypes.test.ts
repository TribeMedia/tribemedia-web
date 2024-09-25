import { z } from 'zod';
import * as nodeSchemas from '../types/nodeSchemas';
import * as inputSchemas from '../types/inputSchemas';
import * as commonSchemas from '../types/commonSchemas';
import * as nodeTypes from '../types/nodeTypes';
import * as inputTypes from '../types/inputTypes';
import * as commonTypes from '../types/commonTypes';

describe('Schema and Type Validation', () => {
  describe('Application', () => {
    test('ApplicationSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationSchema || inputSchemas.ApplicationSchema || commonSchemas.ApplicationSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationInterface and Application should be defined', () => {
      const interfaceType = nodeTypes.ApplicationInterface || inputTypes.ApplicationInterface || commonTypes.ApplicationInterface;
      const classType = nodeTypes.Application || inputTypes.Application || commonTypes.Application;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationFeature', () => {
    test('ApplicationFeatureSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationFeatureSchema || inputSchemas.ApplicationFeatureSchema || commonSchemas.ApplicationFeatureSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationFeatureInterface and ApplicationFeature should be defined', () => {
      const interfaceType = nodeTypes.ApplicationFeatureInterface || inputTypes.ApplicationFeatureInterface || commonTypes.ApplicationFeatureInterface;
      const classType = nodeTypes.ApplicationFeature || inputTypes.ApplicationFeature || commonTypes.ApplicationFeature;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationType', () => {
    test('ApplicationTypeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationTypeSchema || inputSchemas.ApplicationTypeSchema || commonSchemas.ApplicationTypeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationTypeInterface and ApplicationType should be defined', () => {
      const interfaceType = nodeTypes.ApplicationTypeInterface || inputTypes.ApplicationTypeInterface || commonTypes.ApplicationTypeInterface;
      const classType = nodeTypes.ApplicationType || inputTypes.ApplicationType || commonTypes.ApplicationType;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('Asset', () => {
    test('AssetSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetSchema || inputSchemas.AssetSchema || commonSchemas.AssetSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetInterface and Asset should be defined', () => {
      const interfaceType = nodeTypes.AssetInterface || inputTypes.AssetInterface || commonTypes.AssetInterface;
      const classType = nodeTypes.Asset || inputTypes.Asset || commonTypes.Asset;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetCategory', () => {
    test('AssetCategorySchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetCategorySchema || inputSchemas.AssetCategorySchema || commonSchemas.AssetCategorySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetCategoryInterface and AssetCategory should be defined', () => {
      const interfaceType = nodeTypes.AssetCategoryInterface || inputTypes.AssetCategoryInterface || commonTypes.AssetCategoryInterface;
      const classType = nodeTypes.AssetCategory || inputTypes.AssetCategory || commonTypes.AssetCategory;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetStatus', () => {
    test('AssetStatusSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetStatusSchema || inputSchemas.AssetStatusSchema || commonSchemas.AssetStatusSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetStatusInterface and AssetStatus should be defined', () => {
      const interfaceType = nodeTypes.AssetStatusInterface || inputTypes.AssetStatusInterface || commonTypes.AssetStatusInterface;
      const classType = nodeTypes.AssetStatus || inputTypes.AssetStatus || commonTypes.AssetStatus;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetType', () => {
    test('AssetTypeSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetTypeSchema || inputSchemas.AssetTypeSchema || commonSchemas.AssetTypeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetTypeInterface and AssetType should be defined', () => {
      const interfaceType = nodeTypes.AssetTypeInterface || inputTypes.AssetTypeInterface || commonTypes.AssetTypeInterface;
      const classType = nodeTypes.AssetType || inputTypes.AssetType || commonTypes.AssetType;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BillingPeriod', () => {
    test('BillingPeriodSchema should be defined and valid', () => {
      const schema = nodeSchemas.BillingPeriodSchema || inputSchemas.BillingPeriodSchema || commonSchemas.BillingPeriodSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BillingPeriodInterface and BillingPeriod should be defined', () => {
      const interfaceType = nodeTypes.BillingPeriodInterface || inputTypes.BillingPeriodInterface || commonTypes.BillingPeriodInterface;
      const classType = nodeTypes.BillingPeriod || inputTypes.BillingPeriod || commonTypes.BillingPeriod;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('Category', () => {
    test('CategorySchema should be defined and valid', () => {
      const schema = nodeSchemas.CategorySchema || inputSchemas.CategorySchema || commonSchemas.CategorySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CategoryInterface and Category should be defined', () => {
      const interfaceType = nodeTypes.CategoryInterface || inputTypes.CategoryInterface || commonTypes.CategoryInterface;
      const classType = nodeTypes.Category || inputTypes.Category || commonTypes.Category;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatMessage', () => {
    test('ChatMessageSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatMessageSchema || inputSchemas.ChatMessageSchema || commonSchemas.ChatMessageSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatMessageInterface and ChatMessage should be defined', () => {
      const interfaceType = nodeTypes.ChatMessageInterface || inputTypes.ChatMessageInterface || commonTypes.ChatMessageInterface;
      const classType = nodeTypes.ChatMessage || inputTypes.ChatMessage || commonTypes.ChatMessage;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatRole', () => {
    test('ChatRoleSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatRoleSchema || inputSchemas.ChatRoleSchema || commonSchemas.ChatRoleSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatRoleInterface and ChatRole should be defined', () => {
      const interfaceType = nodeTypes.ChatRoleInterface || inputTypes.ChatRoleInterface || commonTypes.ChatRoleInterface;
      const classType = nodeTypes.ChatRole || inputTypes.ChatRole || commonTypes.ChatRole;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatSession', () => {
    test('ChatSessionSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatSessionSchema || inputSchemas.ChatSessionSchema || commonSchemas.ChatSessionSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatSessionInterface and ChatSession should be defined', () => {
      const interfaceType = nodeTypes.ChatSessionInterface || inputTypes.ChatSessionInterface || commonTypes.ChatSessionInterface;
      const classType = nodeTypes.ChatSession || inputTypes.ChatSession || commonTypes.ChatSession;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('Content', () => {
    test('ContentSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentSchema || inputSchemas.ContentSchema || commonSchemas.ContentSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentInterface and Content should be defined', () => {
      const interfaceType = nodeTypes.ContentInterface || inputTypes.ContentInterface || commonTypes.ContentInterface;
      const classType = nodeTypes.Content || inputTypes.Content || commonTypes.Content;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentContentPart', () => {
    test('ContentContentPartSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentContentPartSchema || inputSchemas.ContentContentPartSchema || commonSchemas.ContentContentPartSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentContentPartInterface and ContentContentPart should be defined', () => {
      const interfaceType = nodeTypes.ContentContentPartInterface || inputTypes.ContentContentPartInterface || commonTypes.ContentContentPartInterface;
      const classType = nodeTypes.ContentContentPart || inputTypes.ContentContentPart || commonTypes.ContentContentPart;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPart', () => {
    test('ContentPartSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartSchema || inputSchemas.ContentPartSchema || commonSchemas.ContentPartSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartInterface and ContentPart should be defined', () => {
      const interfaceType = nodeTypes.ContentPartInterface || inputTypes.ContentPartInterface || commonTypes.ContentPartInterface;
      const classType = nodeTypes.ContentPart || inputTypes.ContentPart || commonTypes.ContentPart;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartContentPart', () => {
    test('ContentPartContentPartSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartContentPartSchema || inputSchemas.ContentPartContentPartSchema || commonSchemas.ContentPartContentPartSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartContentPartInterface and ContentPartContentPart should be defined', () => {
      const interfaceType = nodeTypes.ContentPartContentPartInterface || inputTypes.ContentPartContentPartInterface || commonTypes.ContentPartContentPartInterface;
      const classType = nodeTypes.ContentPartContentPart || inputTypes.ContentPartContentPart || commonTypes.ContentPartContentPart;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplate', () => {
    test('ContentTemplateSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateSchema || inputSchemas.ContentTemplateSchema || commonSchemas.ContentTemplateSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateInterface and ContentTemplate should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateInterface || inputTypes.ContentTemplateInterface || commonTypes.ContentTemplateInterface;
      const classType = nodeTypes.ContentTemplate || inputTypes.ContentTemplate || commonTypes.ContentTemplate;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariable', () => {
    test('ContentTemplateVariableSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableSchema || inputSchemas.ContentTemplateVariableSchema || commonSchemas.ContentTemplateVariableSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableInterface and ContentTemplateVariable should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableInterface || inputTypes.ContentTemplateVariableInterface || commonTypes.ContentTemplateVariableInterface;
      const classType = nodeTypes.ContentTemplateVariable || inputTypes.ContentTemplateVariable || commonTypes.ContentTemplateVariable;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableValue', () => {
    test('ContentTemplateVariableValueSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableValueSchema || inputSchemas.ContentTemplateVariableValueSchema || commonSchemas.ContentTemplateVariableValueSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableValueInterface and ContentTemplateVariableValue should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableValueInterface || inputTypes.ContentTemplateVariableValueInterface || commonTypes.ContentTemplateVariableValueInterface;
      const classType = nodeTypes.ContentTemplateVariableValue || inputTypes.ContentTemplateVariableValue || commonTypes.ContentTemplateVariableValue;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentType', () => {
    test('ContentTypeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTypeSchema || inputSchemas.ContentTypeSchema || commonSchemas.ContentTypeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTypeInterface and ContentType should be defined', () => {
      const interfaceType = nodeTypes.ContentTypeInterface || inputTypes.ContentTypeInterface || commonTypes.ContentTypeInterface;
      const classType = nodeTypes.ContentType || inputTypes.ContentType || commonTypes.ContentType;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentVectorDatabase', () => {
    test('ContentVectorDatabaseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentVectorDatabaseSchema || inputSchemas.ContentVectorDatabaseSchema || commonSchemas.ContentVectorDatabaseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentVectorDatabaseInterface and ContentVectorDatabase should be defined', () => {
      const interfaceType = nodeTypes.ContentVectorDatabaseInterface || inputTypes.ContentVectorDatabaseInterface || commonTypes.ContentVectorDatabaseInterface;
      const classType = nodeTypes.ContentVectorDatabase || inputTypes.ContentVectorDatabase || commonTypes.ContentVectorDatabase;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CreationType', () => {
    test('CreationTypeSchema should be defined and valid', () => {
      const schema = nodeSchemas.CreationTypeSchema || inputSchemas.CreationTypeSchema || commonSchemas.CreationTypeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CreationTypeInterface and CreationType should be defined', () => {
      const interfaceType = nodeTypes.CreationTypeInterface || inputTypes.CreationTypeInterface || commonTypes.CreationTypeInterface;
      const classType = nodeTypes.CreationType || inputTypes.CreationType || commonTypes.CreationType;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('Document', () => {
    test('DocumentSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentSchema || inputSchemas.DocumentSchema || commonSchemas.DocumentSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentInterface and Document should be defined', () => {
      const interfaceType = nodeTypes.DocumentInterface || inputTypes.DocumentInterface || commonTypes.DocumentInterface;
      const classType = nodeTypes.Document || inputTypes.Document || commonTypes.Document;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentVectorDatabase', () => {
    test('DocumentVectorDatabaseSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentVectorDatabaseSchema || inputSchemas.DocumentVectorDatabaseSchema || commonSchemas.DocumentVectorDatabaseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentVectorDatabaseInterface and DocumentVectorDatabase should be defined', () => {
      const interfaceType = nodeTypes.DocumentVectorDatabaseInterface || inputTypes.DocumentVectorDatabaseInterface || commonTypes.DocumentVectorDatabaseInterface;
      const classType = nodeTypes.DocumentVectorDatabase || inputTypes.DocumentVectorDatabase || commonTypes.DocumentVectorDatabase;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('Feature', () => {
    test('FeatureSchema should be defined and valid', () => {
      const schema = nodeSchemas.FeatureSchema || inputSchemas.FeatureSchema || commonSchemas.FeatureSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('FeatureInterface and Feature should be defined', () => {
      const interfaceType = nodeTypes.FeatureInterface || inputTypes.FeatureInterface || commonTypes.FeatureInterface;
      const classType = nodeTypes.Feature || inputTypes.Feature || commonTypes.Feature;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('MimeType', () => {
    test('MimeTypeSchema should be defined and valid', () => {
      const schema = nodeSchemas.MimeTypeSchema || inputSchemas.MimeTypeSchema || commonSchemas.MimeTypeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('MimeTypeInterface and MimeType should be defined', () => {
      const interfaceType = nodeTypes.MimeTypeInterface || inputTypes.MimeTypeInterface || commonTypes.MimeTypeInterface;
      const classType = nodeTypes.MimeType || inputTypes.MimeType || commonTypes.MimeType;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlan', () => {
    test('PricingPlanSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanSchema || inputSchemas.PricingPlanSchema || commonSchemas.PricingPlanSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanInterface and PricingPlan should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanInterface || inputTypes.PricingPlanInterface || commonTypes.PricingPlanInterface;
      const classType = nodeTypes.PricingPlan || inputTypes.PricingPlan || commonTypes.PricingPlan;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanFeature', () => {
    test('PricingPlanFeatureSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanFeatureSchema || inputSchemas.PricingPlanFeatureSchema || commonSchemas.PricingPlanFeatureSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanFeatureInterface and PricingPlanFeature should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanFeatureInterface || inputTypes.PricingPlanFeatureInterface || commonTypes.PricingPlanFeatureInterface;
      const classType = nodeTypes.PricingPlanFeature || inputTypes.PricingPlanFeature || commonTypes.PricingPlanFeature;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('Prompt', () => {
    test('PromptSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptSchema || inputSchemas.PromptSchema || commonSchemas.PromptSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptInterface and Prompt should be defined', () => {
      const interfaceType = nodeTypes.PromptInterface || inputTypes.PromptInterface || commonTypes.PromptInterface;
      const classType = nodeTypes.Prompt || inputTypes.Prompt || commonTypes.Prompt;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplate', () => {
    test('PromptTemplateSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateSchema || inputSchemas.PromptTemplateSchema || commonSchemas.PromptTemplateSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateInterface and PromptTemplate should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateInterface || inputTypes.PromptTemplateInterface || commonTypes.PromptTemplateInterface;
      const classType = nodeTypes.PromptTemplate || inputTypes.PromptTemplate || commonTypes.PromptTemplate;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateVariable', () => {
    test('PromptTemplateVariableSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateVariableSchema || inputSchemas.PromptTemplateVariableSchema || commonSchemas.PromptTemplateVariableSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateVariableInterface and PromptTemplateVariable should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateVariableInterface || inputTypes.PromptTemplateVariableInterface || commonTypes.PromptTemplateVariableInterface;
      const classType = nodeTypes.PromptTemplateVariable || inputTypes.PromptTemplateVariable || commonTypes.PromptTemplateVariable;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptVariableValue', () => {
    test('PromptVariableValueSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptVariableValueSchema || inputSchemas.PromptVariableValueSchema || commonSchemas.PromptVariableValueSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptVariableValueInterface and PromptVariableValue should be defined', () => {
      const interfaceType = nodeTypes.PromptVariableValueInterface || inputTypes.PromptVariableValueInterface || commonTypes.PromptVariableValueInterface;
      const classType = nodeTypes.PromptVariableValue || inputTypes.PromptVariableValue || commonTypes.PromptVariableValue;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('Role', () => {
    test('RoleSchema should be defined and valid', () => {
      const schema = nodeSchemas.RoleSchema || inputSchemas.RoleSchema || commonSchemas.RoleSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('RoleInterface and Role should be defined', () => {
      const interfaceType = nodeTypes.RoleInterface || inputTypes.RoleInterface || commonTypes.RoleInterface;
      const classType = nodeTypes.Role || inputTypes.Role || commonTypes.Role;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariable', () => {
    test('TemplateVariableSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableSchema || inputSchemas.TemplateVariableSchema || commonSchemas.TemplateVariableSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableInterface and TemplateVariable should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableInterface || inputTypes.TemplateVariableInterface || commonTypes.TemplateVariableInterface;
      const classType = nodeTypes.TemplateVariable || inputTypes.TemplateVariable || commonTypes.TemplateVariable;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableType', () => {
    test('TemplateVariableTypeSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableTypeSchema || inputSchemas.TemplateVariableTypeSchema || commonSchemas.TemplateVariableTypeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableTypeInterface and TemplateVariableType should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableTypeInterface || inputTypes.TemplateVariableTypeInterface || commonTypes.TemplateVariableTypeInterface;
      const classType = nodeTypes.TemplateVariableType || inputTypes.TemplateVariableType || commonTypes.TemplateVariableType;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('User', () => {
    test('UserSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserSchema || inputSchemas.UserSchema || commonSchemas.UserSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserInterface and User should be defined', () => {
      const interfaceType = nodeTypes.UserInterface || inputTypes.UserInterface || commonTypes.UserInterface;
      const classType = nodeTypes.User || inputTypes.User || commonTypes.User;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserRole', () => {
    test('UserRoleSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserRoleSchema || inputSchemas.UserRoleSchema || commonSchemas.UserRoleSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserRoleInterface and UserRole should be defined', () => {
      const interfaceType = nodeTypes.UserRoleInterface || inputTypes.UserRoleInterface || commonTypes.UserRoleInterface;
      const classType = nodeTypes.UserRole || inputTypes.UserRole || commonTypes.UserRole;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('VectorDatabase', () => {
    test('VectorDatabaseSchema should be defined and valid', () => {
      const schema = nodeSchemas.VectorDatabaseSchema || inputSchemas.VectorDatabaseSchema || commonSchemas.VectorDatabaseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('VectorDatabaseInterface and VectorDatabase should be defined', () => {
      const interfaceType = nodeTypes.VectorDatabaseInterface || inputTypes.VectorDatabaseInterface || commonTypes.VectorDatabaseInterface;
      const classType = nodeTypes.VectorDatabase || inputTypes.VectorDatabase || commonTypes.VectorDatabase;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationFeatureFilter', () => {
    test('ApplicationFeatureFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationFeatureFilterSchema || inputSchemas.ApplicationFeatureFilterSchema || commonSchemas.ApplicationFeatureFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationFeatureFilterInterface and ApplicationFeatureFilter should be defined', () => {
      const interfaceType = nodeTypes.ApplicationFeatureFilterInterface || inputTypes.ApplicationFeatureFilterInterface || commonTypes.ApplicationFeatureFilterInterface;
      const classType = nodeTypes.ApplicationFeatureFilter || inputTypes.ApplicationFeatureFilter || commonTypes.ApplicationFeatureFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationFeatureInsertInput', () => {
    test('ApplicationFeatureInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationFeatureInsertInputSchema || inputSchemas.ApplicationFeatureInsertInputSchema || commonSchemas.ApplicationFeatureInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationFeatureInsertInputInterface and ApplicationFeatureInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ApplicationFeatureInsertInputInterface || inputTypes.ApplicationFeatureInsertInputInterface || commonTypes.ApplicationFeatureInsertInputInterface;
      const classType = nodeTypes.ApplicationFeatureInsertInput || inputTypes.ApplicationFeatureInsertInput || commonTypes.ApplicationFeatureInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationFeatureOrderBy', () => {
    test('ApplicationFeatureOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationFeatureOrderBySchema || inputSchemas.ApplicationFeatureOrderBySchema || commonSchemas.ApplicationFeatureOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationFeatureOrderByInterface and ApplicationFeatureOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ApplicationFeatureOrderByInterface || inputTypes.ApplicationFeatureOrderByInterface || commonTypes.ApplicationFeatureOrderByInterface;
      const classType = nodeTypes.ApplicationFeatureOrderBy || inputTypes.ApplicationFeatureOrderBy || commonTypes.ApplicationFeatureOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationFeatureUpdateInput', () => {
    test('ApplicationFeatureUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationFeatureUpdateInputSchema || inputSchemas.ApplicationFeatureUpdateInputSchema || commonSchemas.ApplicationFeatureUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationFeatureUpdateInputInterface and ApplicationFeatureUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ApplicationFeatureUpdateInputInterface || inputTypes.ApplicationFeatureUpdateInputInterface || commonTypes.ApplicationFeatureUpdateInputInterface;
      const classType = nodeTypes.ApplicationFeatureUpdateInput || inputTypes.ApplicationFeatureUpdateInput || commonTypes.ApplicationFeatureUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationFilter', () => {
    test('ApplicationFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationFilterSchema || inputSchemas.ApplicationFilterSchema || commonSchemas.ApplicationFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationFilterInterface and ApplicationFilter should be defined', () => {
      const interfaceType = nodeTypes.ApplicationFilterInterface || inputTypes.ApplicationFilterInterface || commonTypes.ApplicationFilterInterface;
      const classType = nodeTypes.ApplicationFilter || inputTypes.ApplicationFilter || commonTypes.ApplicationFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationInsertInput', () => {
    test('ApplicationInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationInsertInputSchema || inputSchemas.ApplicationInsertInputSchema || commonSchemas.ApplicationInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationInsertInputInterface and ApplicationInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ApplicationInsertInputInterface || inputTypes.ApplicationInsertInputInterface || commonTypes.ApplicationInsertInputInterface;
      const classType = nodeTypes.ApplicationInsertInput || inputTypes.ApplicationInsertInput || commonTypes.ApplicationInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationOrderBy', () => {
    test('ApplicationOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationOrderBySchema || inputSchemas.ApplicationOrderBySchema || commonSchemas.ApplicationOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationOrderByInterface and ApplicationOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ApplicationOrderByInterface || inputTypes.ApplicationOrderByInterface || commonTypes.ApplicationOrderByInterface;
      const classType = nodeTypes.ApplicationOrderBy || inputTypes.ApplicationOrderBy || commonTypes.ApplicationOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationTypeFilter', () => {
    test('ApplicationTypeFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationTypeFilterSchema || inputSchemas.ApplicationTypeFilterSchema || commonSchemas.ApplicationTypeFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationTypeFilterInterface and ApplicationTypeFilter should be defined', () => {
      const interfaceType = nodeTypes.ApplicationTypeFilterInterface || inputTypes.ApplicationTypeFilterInterface || commonTypes.ApplicationTypeFilterInterface;
      const classType = nodeTypes.ApplicationTypeFilter || inputTypes.ApplicationTypeFilter || commonTypes.ApplicationTypeFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationTypeInsertInput', () => {
    test('ApplicationTypeInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationTypeInsertInputSchema || inputSchemas.ApplicationTypeInsertInputSchema || commonSchemas.ApplicationTypeInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationTypeInsertInputInterface and ApplicationTypeInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ApplicationTypeInsertInputInterface || inputTypes.ApplicationTypeInsertInputInterface || commonTypes.ApplicationTypeInsertInputInterface;
      const classType = nodeTypes.ApplicationTypeInsertInput || inputTypes.ApplicationTypeInsertInput || commonTypes.ApplicationTypeInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationTypeOrderBy', () => {
    test('ApplicationTypeOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationTypeOrderBySchema || inputSchemas.ApplicationTypeOrderBySchema || commonSchemas.ApplicationTypeOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationTypeOrderByInterface and ApplicationTypeOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ApplicationTypeOrderByInterface || inputTypes.ApplicationTypeOrderByInterface || commonTypes.ApplicationTypeOrderByInterface;
      const classType = nodeTypes.ApplicationTypeOrderBy || inputTypes.ApplicationTypeOrderBy || commonTypes.ApplicationTypeOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationTypeUpdateInput', () => {
    test('ApplicationTypeUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationTypeUpdateInputSchema || inputSchemas.ApplicationTypeUpdateInputSchema || commonSchemas.ApplicationTypeUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationTypeUpdateInputInterface and ApplicationTypeUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ApplicationTypeUpdateInputInterface || inputTypes.ApplicationTypeUpdateInputInterface || commonTypes.ApplicationTypeUpdateInputInterface;
      const classType = nodeTypes.ApplicationTypeUpdateInput || inputTypes.ApplicationTypeUpdateInput || commonTypes.ApplicationTypeUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationUpdateInput', () => {
    test('ApplicationUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationUpdateInputSchema || inputSchemas.ApplicationUpdateInputSchema || commonSchemas.ApplicationUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationUpdateInputInterface and ApplicationUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ApplicationUpdateInputInterface || inputTypes.ApplicationUpdateInputInterface || commonTypes.ApplicationUpdateInputInterface;
      const classType = nodeTypes.ApplicationUpdateInput || inputTypes.ApplicationUpdateInput || commonTypes.ApplicationUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetCategoryFilter', () => {
    test('AssetCategoryFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetCategoryFilterSchema || inputSchemas.AssetCategoryFilterSchema || commonSchemas.AssetCategoryFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetCategoryFilterInterface and AssetCategoryFilter should be defined', () => {
      const interfaceType = nodeTypes.AssetCategoryFilterInterface || inputTypes.AssetCategoryFilterInterface || commonTypes.AssetCategoryFilterInterface;
      const classType = nodeTypes.AssetCategoryFilter || inputTypes.AssetCategoryFilter || commonTypes.AssetCategoryFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetCategoryInsertInput', () => {
    test('AssetCategoryInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetCategoryInsertInputSchema || inputSchemas.AssetCategoryInsertInputSchema || commonSchemas.AssetCategoryInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetCategoryInsertInputInterface and AssetCategoryInsertInput should be defined', () => {
      const interfaceType = nodeTypes.AssetCategoryInsertInputInterface || inputTypes.AssetCategoryInsertInputInterface || commonTypes.AssetCategoryInsertInputInterface;
      const classType = nodeTypes.AssetCategoryInsertInput || inputTypes.AssetCategoryInsertInput || commonTypes.AssetCategoryInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetCategoryOrderBy', () => {
    test('AssetCategoryOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetCategoryOrderBySchema || inputSchemas.AssetCategoryOrderBySchema || commonSchemas.AssetCategoryOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetCategoryOrderByInterface and AssetCategoryOrderBy should be defined', () => {
      const interfaceType = nodeTypes.AssetCategoryOrderByInterface || inputTypes.AssetCategoryOrderByInterface || commonTypes.AssetCategoryOrderByInterface;
      const classType = nodeTypes.AssetCategoryOrderBy || inputTypes.AssetCategoryOrderBy || commonTypes.AssetCategoryOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetCategoryUpdateInput', () => {
    test('AssetCategoryUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetCategoryUpdateInputSchema || inputSchemas.AssetCategoryUpdateInputSchema || commonSchemas.AssetCategoryUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetCategoryUpdateInputInterface and AssetCategoryUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.AssetCategoryUpdateInputInterface || inputTypes.AssetCategoryUpdateInputInterface || commonTypes.AssetCategoryUpdateInputInterface;
      const classType = nodeTypes.AssetCategoryUpdateInput || inputTypes.AssetCategoryUpdateInput || commonTypes.AssetCategoryUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetFilter', () => {
    test('AssetFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetFilterSchema || inputSchemas.AssetFilterSchema || commonSchemas.AssetFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetFilterInterface and AssetFilter should be defined', () => {
      const interfaceType = nodeTypes.AssetFilterInterface || inputTypes.AssetFilterInterface || commonTypes.AssetFilterInterface;
      const classType = nodeTypes.AssetFilter || inputTypes.AssetFilter || commonTypes.AssetFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetInsertInput', () => {
    test('AssetInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetInsertInputSchema || inputSchemas.AssetInsertInputSchema || commonSchemas.AssetInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetInsertInputInterface and AssetInsertInput should be defined', () => {
      const interfaceType = nodeTypes.AssetInsertInputInterface || inputTypes.AssetInsertInputInterface || commonTypes.AssetInsertInputInterface;
      const classType = nodeTypes.AssetInsertInput || inputTypes.AssetInsertInput || commonTypes.AssetInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetOrderBy', () => {
    test('AssetOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetOrderBySchema || inputSchemas.AssetOrderBySchema || commonSchemas.AssetOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetOrderByInterface and AssetOrderBy should be defined', () => {
      const interfaceType = nodeTypes.AssetOrderByInterface || inputTypes.AssetOrderByInterface || commonTypes.AssetOrderByInterface;
      const classType = nodeTypes.AssetOrderBy || inputTypes.AssetOrderBy || commonTypes.AssetOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetStatusFilter', () => {
    test('AssetStatusFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetStatusFilterSchema || inputSchemas.AssetStatusFilterSchema || commonSchemas.AssetStatusFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetStatusFilterInterface and AssetStatusFilter should be defined', () => {
      const interfaceType = nodeTypes.AssetStatusFilterInterface || inputTypes.AssetStatusFilterInterface || commonTypes.AssetStatusFilterInterface;
      const classType = nodeTypes.AssetStatusFilter || inputTypes.AssetStatusFilter || commonTypes.AssetStatusFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetStatusInsertInput', () => {
    test('AssetStatusInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetStatusInsertInputSchema || inputSchemas.AssetStatusInsertInputSchema || commonSchemas.AssetStatusInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetStatusInsertInputInterface and AssetStatusInsertInput should be defined', () => {
      const interfaceType = nodeTypes.AssetStatusInsertInputInterface || inputTypes.AssetStatusInsertInputInterface || commonTypes.AssetStatusInsertInputInterface;
      const classType = nodeTypes.AssetStatusInsertInput || inputTypes.AssetStatusInsertInput || commonTypes.AssetStatusInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetStatusOrderBy', () => {
    test('AssetStatusOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetStatusOrderBySchema || inputSchemas.AssetStatusOrderBySchema || commonSchemas.AssetStatusOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetStatusOrderByInterface and AssetStatusOrderBy should be defined', () => {
      const interfaceType = nodeTypes.AssetStatusOrderByInterface || inputTypes.AssetStatusOrderByInterface || commonTypes.AssetStatusOrderByInterface;
      const classType = nodeTypes.AssetStatusOrderBy || inputTypes.AssetStatusOrderBy || commonTypes.AssetStatusOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetStatusUpdateInput', () => {
    test('AssetStatusUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetStatusUpdateInputSchema || inputSchemas.AssetStatusUpdateInputSchema || commonSchemas.AssetStatusUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetStatusUpdateInputInterface and AssetStatusUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.AssetStatusUpdateInputInterface || inputTypes.AssetStatusUpdateInputInterface || commonTypes.AssetStatusUpdateInputInterface;
      const classType = nodeTypes.AssetStatusUpdateInput || inputTypes.AssetStatusUpdateInput || commonTypes.AssetStatusUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetTypeFilter', () => {
    test('AssetTypeFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetTypeFilterSchema || inputSchemas.AssetTypeFilterSchema || commonSchemas.AssetTypeFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetTypeFilterInterface and AssetTypeFilter should be defined', () => {
      const interfaceType = nodeTypes.AssetTypeFilterInterface || inputTypes.AssetTypeFilterInterface || commonTypes.AssetTypeFilterInterface;
      const classType = nodeTypes.AssetTypeFilter || inputTypes.AssetTypeFilter || commonTypes.AssetTypeFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetTypeInsertInput', () => {
    test('AssetTypeInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetTypeInsertInputSchema || inputSchemas.AssetTypeInsertInputSchema || commonSchemas.AssetTypeInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetTypeInsertInputInterface and AssetTypeInsertInput should be defined', () => {
      const interfaceType = nodeTypes.AssetTypeInsertInputInterface || inputTypes.AssetTypeInsertInputInterface || commonTypes.AssetTypeInsertInputInterface;
      const classType = nodeTypes.AssetTypeInsertInput || inputTypes.AssetTypeInsertInput || commonTypes.AssetTypeInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetTypeOrderBy', () => {
    test('AssetTypeOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetTypeOrderBySchema || inputSchemas.AssetTypeOrderBySchema || commonSchemas.AssetTypeOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetTypeOrderByInterface and AssetTypeOrderBy should be defined', () => {
      const interfaceType = nodeTypes.AssetTypeOrderByInterface || inputTypes.AssetTypeOrderByInterface || commonTypes.AssetTypeOrderByInterface;
      const classType = nodeTypes.AssetTypeOrderBy || inputTypes.AssetTypeOrderBy || commonTypes.AssetTypeOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetTypeUpdateInput', () => {
    test('AssetTypeUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetTypeUpdateInputSchema || inputSchemas.AssetTypeUpdateInputSchema || commonSchemas.AssetTypeUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetTypeUpdateInputInterface and AssetTypeUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.AssetTypeUpdateInputInterface || inputTypes.AssetTypeUpdateInputInterface || commonTypes.AssetTypeUpdateInputInterface;
      const classType = nodeTypes.AssetTypeUpdateInput || inputTypes.AssetTypeUpdateInput || commonTypes.AssetTypeUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetUpdateInput', () => {
    test('AssetUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetUpdateInputSchema || inputSchemas.AssetUpdateInputSchema || commonSchemas.AssetUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetUpdateInputInterface and AssetUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.AssetUpdateInputInterface || inputTypes.AssetUpdateInputInterface || commonTypes.AssetUpdateInputInterface;
      const classType = nodeTypes.AssetUpdateInput || inputTypes.AssetUpdateInput || commonTypes.AssetUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BigFloatFilter', () => {
    test('BigFloatFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.BigFloatFilterSchema || inputSchemas.BigFloatFilterSchema || commonSchemas.BigFloatFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BigFloatFilterInterface and BigFloatFilter should be defined', () => {
      const interfaceType = nodeTypes.BigFloatFilterInterface || inputTypes.BigFloatFilterInterface || commonTypes.BigFloatFilterInterface;
      const classType = nodeTypes.BigFloatFilter || inputTypes.BigFloatFilter || commonTypes.BigFloatFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BigFloatListFilter', () => {
    test('BigFloatListFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.BigFloatListFilterSchema || inputSchemas.BigFloatListFilterSchema || commonSchemas.BigFloatListFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BigFloatListFilterInterface and BigFloatListFilter should be defined', () => {
      const interfaceType = nodeTypes.BigFloatListFilterInterface || inputTypes.BigFloatListFilterInterface || commonTypes.BigFloatListFilterInterface;
      const classType = nodeTypes.BigFloatListFilter || inputTypes.BigFloatListFilter || commonTypes.BigFloatListFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BigIntFilter', () => {
    test('BigIntFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.BigIntFilterSchema || inputSchemas.BigIntFilterSchema || commonSchemas.BigIntFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BigIntFilterInterface and BigIntFilter should be defined', () => {
      const interfaceType = nodeTypes.BigIntFilterInterface || inputTypes.BigIntFilterInterface || commonTypes.BigIntFilterInterface;
      const classType = nodeTypes.BigIntFilter || inputTypes.BigIntFilter || commonTypes.BigIntFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BigIntListFilter', () => {
    test('BigIntListFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.BigIntListFilterSchema || inputSchemas.BigIntListFilterSchema || commonSchemas.BigIntListFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BigIntListFilterInterface and BigIntListFilter should be defined', () => {
      const interfaceType = nodeTypes.BigIntListFilterInterface || inputTypes.BigIntListFilterInterface || commonTypes.BigIntListFilterInterface;
      const classType = nodeTypes.BigIntListFilter || inputTypes.BigIntListFilter || commonTypes.BigIntListFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BillingPeriodFilter', () => {
    test('BillingPeriodFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.BillingPeriodFilterSchema || inputSchemas.BillingPeriodFilterSchema || commonSchemas.BillingPeriodFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BillingPeriodFilterInterface and BillingPeriodFilter should be defined', () => {
      const interfaceType = nodeTypes.BillingPeriodFilterInterface || inputTypes.BillingPeriodFilterInterface || commonTypes.BillingPeriodFilterInterface;
      const classType = nodeTypes.BillingPeriodFilter || inputTypes.BillingPeriodFilter || commonTypes.BillingPeriodFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BillingPeriodInsertInput', () => {
    test('BillingPeriodInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.BillingPeriodInsertInputSchema || inputSchemas.BillingPeriodInsertInputSchema || commonSchemas.BillingPeriodInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BillingPeriodInsertInputInterface and BillingPeriodInsertInput should be defined', () => {
      const interfaceType = nodeTypes.BillingPeriodInsertInputInterface || inputTypes.BillingPeriodInsertInputInterface || commonTypes.BillingPeriodInsertInputInterface;
      const classType = nodeTypes.BillingPeriodInsertInput || inputTypes.BillingPeriodInsertInput || commonTypes.BillingPeriodInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BillingPeriodOrderBy', () => {
    test('BillingPeriodOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.BillingPeriodOrderBySchema || inputSchemas.BillingPeriodOrderBySchema || commonSchemas.BillingPeriodOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BillingPeriodOrderByInterface and BillingPeriodOrderBy should be defined', () => {
      const interfaceType = nodeTypes.BillingPeriodOrderByInterface || inputTypes.BillingPeriodOrderByInterface || commonTypes.BillingPeriodOrderByInterface;
      const classType = nodeTypes.BillingPeriodOrderBy || inputTypes.BillingPeriodOrderBy || commonTypes.BillingPeriodOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BillingPeriodUpdateInput', () => {
    test('BillingPeriodUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.BillingPeriodUpdateInputSchema || inputSchemas.BillingPeriodUpdateInputSchema || commonSchemas.BillingPeriodUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BillingPeriodUpdateInputInterface and BillingPeriodUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.BillingPeriodUpdateInputInterface || inputTypes.BillingPeriodUpdateInputInterface || commonTypes.BillingPeriodUpdateInputInterface;
      const classType = nodeTypes.BillingPeriodUpdateInput || inputTypes.BillingPeriodUpdateInput || commonTypes.BillingPeriodUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BooleanFilter', () => {
    test('BooleanFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.BooleanFilterSchema || inputSchemas.BooleanFilterSchema || commonSchemas.BooleanFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BooleanFilterInterface and BooleanFilter should be defined', () => {
      const interfaceType = nodeTypes.BooleanFilterInterface || inputTypes.BooleanFilterInterface || commonTypes.BooleanFilterInterface;
      const classType = nodeTypes.BooleanFilter || inputTypes.BooleanFilter || commonTypes.BooleanFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BooleanListFilter', () => {
    test('BooleanListFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.BooleanListFilterSchema || inputSchemas.BooleanListFilterSchema || commonSchemas.BooleanListFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BooleanListFilterInterface and BooleanListFilter should be defined', () => {
      const interfaceType = nodeTypes.BooleanListFilterInterface || inputTypes.BooleanListFilterInterface || commonTypes.BooleanListFilterInterface;
      const classType = nodeTypes.BooleanListFilter || inputTypes.BooleanListFilter || commonTypes.BooleanListFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CategoryFilter', () => {
    test('CategoryFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.CategoryFilterSchema || inputSchemas.CategoryFilterSchema || commonSchemas.CategoryFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CategoryFilterInterface and CategoryFilter should be defined', () => {
      const interfaceType = nodeTypes.CategoryFilterInterface || inputTypes.CategoryFilterInterface || commonTypes.CategoryFilterInterface;
      const classType = nodeTypes.CategoryFilter || inputTypes.CategoryFilter || commonTypes.CategoryFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CategoryInsertInput', () => {
    test('CategoryInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.CategoryInsertInputSchema || inputSchemas.CategoryInsertInputSchema || commonSchemas.CategoryInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CategoryInsertInputInterface and CategoryInsertInput should be defined', () => {
      const interfaceType = nodeTypes.CategoryInsertInputInterface || inputTypes.CategoryInsertInputInterface || commonTypes.CategoryInsertInputInterface;
      const classType = nodeTypes.CategoryInsertInput || inputTypes.CategoryInsertInput || commonTypes.CategoryInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CategoryOrderBy', () => {
    test('CategoryOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.CategoryOrderBySchema || inputSchemas.CategoryOrderBySchema || commonSchemas.CategoryOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CategoryOrderByInterface and CategoryOrderBy should be defined', () => {
      const interfaceType = nodeTypes.CategoryOrderByInterface || inputTypes.CategoryOrderByInterface || commonTypes.CategoryOrderByInterface;
      const classType = nodeTypes.CategoryOrderBy || inputTypes.CategoryOrderBy || commonTypes.CategoryOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CategoryUpdateInput', () => {
    test('CategoryUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.CategoryUpdateInputSchema || inputSchemas.CategoryUpdateInputSchema || commonSchemas.CategoryUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CategoryUpdateInputInterface and CategoryUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.CategoryUpdateInputInterface || inputTypes.CategoryUpdateInputInterface || commonTypes.CategoryUpdateInputInterface;
      const classType = nodeTypes.CategoryUpdateInput || inputTypes.CategoryUpdateInput || commonTypes.CategoryUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatMessageFilter', () => {
    test('ChatMessageFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatMessageFilterSchema || inputSchemas.ChatMessageFilterSchema || commonSchemas.ChatMessageFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatMessageFilterInterface and ChatMessageFilter should be defined', () => {
      const interfaceType = nodeTypes.ChatMessageFilterInterface || inputTypes.ChatMessageFilterInterface || commonTypes.ChatMessageFilterInterface;
      const classType = nodeTypes.ChatMessageFilter || inputTypes.ChatMessageFilter || commonTypes.ChatMessageFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatMessageInsertInput', () => {
    test('ChatMessageInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatMessageInsertInputSchema || inputSchemas.ChatMessageInsertInputSchema || commonSchemas.ChatMessageInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatMessageInsertInputInterface and ChatMessageInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ChatMessageInsertInputInterface || inputTypes.ChatMessageInsertInputInterface || commonTypes.ChatMessageInsertInputInterface;
      const classType = nodeTypes.ChatMessageInsertInput || inputTypes.ChatMessageInsertInput || commonTypes.ChatMessageInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatMessageOrderBy', () => {
    test('ChatMessageOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatMessageOrderBySchema || inputSchemas.ChatMessageOrderBySchema || commonSchemas.ChatMessageOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatMessageOrderByInterface and ChatMessageOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ChatMessageOrderByInterface || inputTypes.ChatMessageOrderByInterface || commonTypes.ChatMessageOrderByInterface;
      const classType = nodeTypes.ChatMessageOrderBy || inputTypes.ChatMessageOrderBy || commonTypes.ChatMessageOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatMessageUpdateInput', () => {
    test('ChatMessageUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatMessageUpdateInputSchema || inputSchemas.ChatMessageUpdateInputSchema || commonSchemas.ChatMessageUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatMessageUpdateInputInterface and ChatMessageUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ChatMessageUpdateInputInterface || inputTypes.ChatMessageUpdateInputInterface || commonTypes.ChatMessageUpdateInputInterface;
      const classType = nodeTypes.ChatMessageUpdateInput || inputTypes.ChatMessageUpdateInput || commonTypes.ChatMessageUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatRoleFilter', () => {
    test('ChatRoleFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatRoleFilterSchema || inputSchemas.ChatRoleFilterSchema || commonSchemas.ChatRoleFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatRoleFilterInterface and ChatRoleFilter should be defined', () => {
      const interfaceType = nodeTypes.ChatRoleFilterInterface || inputTypes.ChatRoleFilterInterface || commonTypes.ChatRoleFilterInterface;
      const classType = nodeTypes.ChatRoleFilter || inputTypes.ChatRoleFilter || commonTypes.ChatRoleFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatRoleInsertInput', () => {
    test('ChatRoleInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatRoleInsertInputSchema || inputSchemas.ChatRoleInsertInputSchema || commonSchemas.ChatRoleInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatRoleInsertInputInterface and ChatRoleInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ChatRoleInsertInputInterface || inputTypes.ChatRoleInsertInputInterface || commonTypes.ChatRoleInsertInputInterface;
      const classType = nodeTypes.ChatRoleInsertInput || inputTypes.ChatRoleInsertInput || commonTypes.ChatRoleInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatRoleOrderBy', () => {
    test('ChatRoleOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatRoleOrderBySchema || inputSchemas.ChatRoleOrderBySchema || commonSchemas.ChatRoleOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatRoleOrderByInterface and ChatRoleOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ChatRoleOrderByInterface || inputTypes.ChatRoleOrderByInterface || commonTypes.ChatRoleOrderByInterface;
      const classType = nodeTypes.ChatRoleOrderBy || inputTypes.ChatRoleOrderBy || commonTypes.ChatRoleOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatRoleUpdateInput', () => {
    test('ChatRoleUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatRoleUpdateInputSchema || inputSchemas.ChatRoleUpdateInputSchema || commonSchemas.ChatRoleUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatRoleUpdateInputInterface and ChatRoleUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ChatRoleUpdateInputInterface || inputTypes.ChatRoleUpdateInputInterface || commonTypes.ChatRoleUpdateInputInterface;
      const classType = nodeTypes.ChatRoleUpdateInput || inputTypes.ChatRoleUpdateInput || commonTypes.ChatRoleUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatSessionFilter', () => {
    test('ChatSessionFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatSessionFilterSchema || inputSchemas.ChatSessionFilterSchema || commonSchemas.ChatSessionFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatSessionFilterInterface and ChatSessionFilter should be defined', () => {
      const interfaceType = nodeTypes.ChatSessionFilterInterface || inputTypes.ChatSessionFilterInterface || commonTypes.ChatSessionFilterInterface;
      const classType = nodeTypes.ChatSessionFilter || inputTypes.ChatSessionFilter || commonTypes.ChatSessionFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatSessionInsertInput', () => {
    test('ChatSessionInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatSessionInsertInputSchema || inputSchemas.ChatSessionInsertInputSchema || commonSchemas.ChatSessionInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatSessionInsertInputInterface and ChatSessionInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ChatSessionInsertInputInterface || inputTypes.ChatSessionInsertInputInterface || commonTypes.ChatSessionInsertInputInterface;
      const classType = nodeTypes.ChatSessionInsertInput || inputTypes.ChatSessionInsertInput || commonTypes.ChatSessionInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatSessionOrderBy', () => {
    test('ChatSessionOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatSessionOrderBySchema || inputSchemas.ChatSessionOrderBySchema || commonSchemas.ChatSessionOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatSessionOrderByInterface and ChatSessionOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ChatSessionOrderByInterface || inputTypes.ChatSessionOrderByInterface || commonTypes.ChatSessionOrderByInterface;
      const classType = nodeTypes.ChatSessionOrderBy || inputTypes.ChatSessionOrderBy || commonTypes.ChatSessionOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatSessionUpdateInput', () => {
    test('ChatSessionUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatSessionUpdateInputSchema || inputSchemas.ChatSessionUpdateInputSchema || commonSchemas.ChatSessionUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatSessionUpdateInputInterface and ChatSessionUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ChatSessionUpdateInputInterface || inputTypes.ChatSessionUpdateInputInterface || commonTypes.ChatSessionUpdateInputInterface;
      const classType = nodeTypes.ChatSessionUpdateInput || inputTypes.ChatSessionUpdateInput || commonTypes.ChatSessionUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentContentPartFilter', () => {
    test('ContentContentPartFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentContentPartFilterSchema || inputSchemas.ContentContentPartFilterSchema || commonSchemas.ContentContentPartFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentContentPartFilterInterface and ContentContentPartFilter should be defined', () => {
      const interfaceType = nodeTypes.ContentContentPartFilterInterface || inputTypes.ContentContentPartFilterInterface || commonTypes.ContentContentPartFilterInterface;
      const classType = nodeTypes.ContentContentPartFilter || inputTypes.ContentContentPartFilter || commonTypes.ContentContentPartFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentContentPartInsertInput', () => {
    test('ContentContentPartInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentContentPartInsertInputSchema || inputSchemas.ContentContentPartInsertInputSchema || commonSchemas.ContentContentPartInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentContentPartInsertInputInterface and ContentContentPartInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ContentContentPartInsertInputInterface || inputTypes.ContentContentPartInsertInputInterface || commonTypes.ContentContentPartInsertInputInterface;
      const classType = nodeTypes.ContentContentPartInsertInput || inputTypes.ContentContentPartInsertInput || commonTypes.ContentContentPartInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentContentPartOrderBy', () => {
    test('ContentContentPartOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentContentPartOrderBySchema || inputSchemas.ContentContentPartOrderBySchema || commonSchemas.ContentContentPartOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentContentPartOrderByInterface and ContentContentPartOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ContentContentPartOrderByInterface || inputTypes.ContentContentPartOrderByInterface || commonTypes.ContentContentPartOrderByInterface;
      const classType = nodeTypes.ContentContentPartOrderBy || inputTypes.ContentContentPartOrderBy || commonTypes.ContentContentPartOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentContentPartUpdateInput', () => {
    test('ContentContentPartUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentContentPartUpdateInputSchema || inputSchemas.ContentContentPartUpdateInputSchema || commonSchemas.ContentContentPartUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentContentPartUpdateInputInterface and ContentContentPartUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ContentContentPartUpdateInputInterface || inputTypes.ContentContentPartUpdateInputInterface || commonTypes.ContentContentPartUpdateInputInterface;
      const classType = nodeTypes.ContentContentPartUpdateInput || inputTypes.ContentContentPartUpdateInput || commonTypes.ContentContentPartUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentFilter', () => {
    test('ContentFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentFilterSchema || inputSchemas.ContentFilterSchema || commonSchemas.ContentFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentFilterInterface and ContentFilter should be defined', () => {
      const interfaceType = nodeTypes.ContentFilterInterface || inputTypes.ContentFilterInterface || commonTypes.ContentFilterInterface;
      const classType = nodeTypes.ContentFilter || inputTypes.ContentFilter || commonTypes.ContentFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentInsertInput', () => {
    test('ContentInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentInsertInputSchema || inputSchemas.ContentInsertInputSchema || commonSchemas.ContentInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentInsertInputInterface and ContentInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ContentInsertInputInterface || inputTypes.ContentInsertInputInterface || commonTypes.ContentInsertInputInterface;
      const classType = nodeTypes.ContentInsertInput || inputTypes.ContentInsertInput || commonTypes.ContentInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentOrderBy', () => {
    test('ContentOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentOrderBySchema || inputSchemas.ContentOrderBySchema || commonSchemas.ContentOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentOrderByInterface and ContentOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ContentOrderByInterface || inputTypes.ContentOrderByInterface || commonTypes.ContentOrderByInterface;
      const classType = nodeTypes.ContentOrderBy || inputTypes.ContentOrderBy || commonTypes.ContentOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartContentPartFilter', () => {
    test('ContentPartContentPartFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartContentPartFilterSchema || inputSchemas.ContentPartContentPartFilterSchema || commonSchemas.ContentPartContentPartFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartContentPartFilterInterface and ContentPartContentPartFilter should be defined', () => {
      const interfaceType = nodeTypes.ContentPartContentPartFilterInterface || inputTypes.ContentPartContentPartFilterInterface || commonTypes.ContentPartContentPartFilterInterface;
      const classType = nodeTypes.ContentPartContentPartFilter || inputTypes.ContentPartContentPartFilter || commonTypes.ContentPartContentPartFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartContentPartInsertInput', () => {
    test('ContentPartContentPartInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartContentPartInsertInputSchema || inputSchemas.ContentPartContentPartInsertInputSchema || commonSchemas.ContentPartContentPartInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartContentPartInsertInputInterface and ContentPartContentPartInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ContentPartContentPartInsertInputInterface || inputTypes.ContentPartContentPartInsertInputInterface || commonTypes.ContentPartContentPartInsertInputInterface;
      const classType = nodeTypes.ContentPartContentPartInsertInput || inputTypes.ContentPartContentPartInsertInput || commonTypes.ContentPartContentPartInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartContentPartOrderBy', () => {
    test('ContentPartContentPartOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartContentPartOrderBySchema || inputSchemas.ContentPartContentPartOrderBySchema || commonSchemas.ContentPartContentPartOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartContentPartOrderByInterface and ContentPartContentPartOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ContentPartContentPartOrderByInterface || inputTypes.ContentPartContentPartOrderByInterface || commonTypes.ContentPartContentPartOrderByInterface;
      const classType = nodeTypes.ContentPartContentPartOrderBy || inputTypes.ContentPartContentPartOrderBy || commonTypes.ContentPartContentPartOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartContentPartUpdateInput', () => {
    test('ContentPartContentPartUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartContentPartUpdateInputSchema || inputSchemas.ContentPartContentPartUpdateInputSchema || commonSchemas.ContentPartContentPartUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartContentPartUpdateInputInterface and ContentPartContentPartUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ContentPartContentPartUpdateInputInterface || inputTypes.ContentPartContentPartUpdateInputInterface || commonTypes.ContentPartContentPartUpdateInputInterface;
      const classType = nodeTypes.ContentPartContentPartUpdateInput || inputTypes.ContentPartContentPartUpdateInput || commonTypes.ContentPartContentPartUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartFilter', () => {
    test('ContentPartFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartFilterSchema || inputSchemas.ContentPartFilterSchema || commonSchemas.ContentPartFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartFilterInterface and ContentPartFilter should be defined', () => {
      const interfaceType = nodeTypes.ContentPartFilterInterface || inputTypes.ContentPartFilterInterface || commonTypes.ContentPartFilterInterface;
      const classType = nodeTypes.ContentPartFilter || inputTypes.ContentPartFilter || commonTypes.ContentPartFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartInsertInput', () => {
    test('ContentPartInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartInsertInputSchema || inputSchemas.ContentPartInsertInputSchema || commonSchemas.ContentPartInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartInsertInputInterface and ContentPartInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ContentPartInsertInputInterface || inputTypes.ContentPartInsertInputInterface || commonTypes.ContentPartInsertInputInterface;
      const classType = nodeTypes.ContentPartInsertInput || inputTypes.ContentPartInsertInput || commonTypes.ContentPartInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartOrderBy', () => {
    test('ContentPartOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartOrderBySchema || inputSchemas.ContentPartOrderBySchema || commonSchemas.ContentPartOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartOrderByInterface and ContentPartOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ContentPartOrderByInterface || inputTypes.ContentPartOrderByInterface || commonTypes.ContentPartOrderByInterface;
      const classType = nodeTypes.ContentPartOrderBy || inputTypes.ContentPartOrderBy || commonTypes.ContentPartOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartUpdateInput', () => {
    test('ContentPartUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartUpdateInputSchema || inputSchemas.ContentPartUpdateInputSchema || commonSchemas.ContentPartUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartUpdateInputInterface and ContentPartUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ContentPartUpdateInputInterface || inputTypes.ContentPartUpdateInputInterface || commonTypes.ContentPartUpdateInputInterface;
      const classType = nodeTypes.ContentPartUpdateInput || inputTypes.ContentPartUpdateInput || commonTypes.ContentPartUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateFilter', () => {
    test('ContentTemplateFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateFilterSchema || inputSchemas.ContentTemplateFilterSchema || commonSchemas.ContentTemplateFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateFilterInterface and ContentTemplateFilter should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateFilterInterface || inputTypes.ContentTemplateFilterInterface || commonTypes.ContentTemplateFilterInterface;
      const classType = nodeTypes.ContentTemplateFilter || inputTypes.ContentTemplateFilter || commonTypes.ContentTemplateFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateInsertInput', () => {
    test('ContentTemplateInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateInsertInputSchema || inputSchemas.ContentTemplateInsertInputSchema || commonSchemas.ContentTemplateInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateInsertInputInterface and ContentTemplateInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateInsertInputInterface || inputTypes.ContentTemplateInsertInputInterface || commonTypes.ContentTemplateInsertInputInterface;
      const classType = nodeTypes.ContentTemplateInsertInput || inputTypes.ContentTemplateInsertInput || commonTypes.ContentTemplateInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateOrderBy', () => {
    test('ContentTemplateOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateOrderBySchema || inputSchemas.ContentTemplateOrderBySchema || commonSchemas.ContentTemplateOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateOrderByInterface and ContentTemplateOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateOrderByInterface || inputTypes.ContentTemplateOrderByInterface || commonTypes.ContentTemplateOrderByInterface;
      const classType = nodeTypes.ContentTemplateOrderBy || inputTypes.ContentTemplateOrderBy || commonTypes.ContentTemplateOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateUpdateInput', () => {
    test('ContentTemplateUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateUpdateInputSchema || inputSchemas.ContentTemplateUpdateInputSchema || commonSchemas.ContentTemplateUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateUpdateInputInterface and ContentTemplateUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateUpdateInputInterface || inputTypes.ContentTemplateUpdateInputInterface || commonTypes.ContentTemplateUpdateInputInterface;
      const classType = nodeTypes.ContentTemplateUpdateInput || inputTypes.ContentTemplateUpdateInput || commonTypes.ContentTemplateUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableFilter', () => {
    test('ContentTemplateVariableFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableFilterSchema || inputSchemas.ContentTemplateVariableFilterSchema || commonSchemas.ContentTemplateVariableFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableFilterInterface and ContentTemplateVariableFilter should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableFilterInterface || inputTypes.ContentTemplateVariableFilterInterface || commonTypes.ContentTemplateVariableFilterInterface;
      const classType = nodeTypes.ContentTemplateVariableFilter || inputTypes.ContentTemplateVariableFilter || commonTypes.ContentTemplateVariableFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableInsertInput', () => {
    test('ContentTemplateVariableInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableInsertInputSchema || inputSchemas.ContentTemplateVariableInsertInputSchema || commonSchemas.ContentTemplateVariableInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableInsertInputInterface and ContentTemplateVariableInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableInsertInputInterface || inputTypes.ContentTemplateVariableInsertInputInterface || commonTypes.ContentTemplateVariableInsertInputInterface;
      const classType = nodeTypes.ContentTemplateVariableInsertInput || inputTypes.ContentTemplateVariableInsertInput || commonTypes.ContentTemplateVariableInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableOrderBy', () => {
    test('ContentTemplateVariableOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableOrderBySchema || inputSchemas.ContentTemplateVariableOrderBySchema || commonSchemas.ContentTemplateVariableOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableOrderByInterface and ContentTemplateVariableOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableOrderByInterface || inputTypes.ContentTemplateVariableOrderByInterface || commonTypes.ContentTemplateVariableOrderByInterface;
      const classType = nodeTypes.ContentTemplateVariableOrderBy || inputTypes.ContentTemplateVariableOrderBy || commonTypes.ContentTemplateVariableOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableUpdateInput', () => {
    test('ContentTemplateVariableUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableUpdateInputSchema || inputSchemas.ContentTemplateVariableUpdateInputSchema || commonSchemas.ContentTemplateVariableUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableUpdateInputInterface and ContentTemplateVariableUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableUpdateInputInterface || inputTypes.ContentTemplateVariableUpdateInputInterface || commonTypes.ContentTemplateVariableUpdateInputInterface;
      const classType = nodeTypes.ContentTemplateVariableUpdateInput || inputTypes.ContentTemplateVariableUpdateInput || commonTypes.ContentTemplateVariableUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableValueFilter', () => {
    test('ContentTemplateVariableValueFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableValueFilterSchema || inputSchemas.ContentTemplateVariableValueFilterSchema || commonSchemas.ContentTemplateVariableValueFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableValueFilterInterface and ContentTemplateVariableValueFilter should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableValueFilterInterface || inputTypes.ContentTemplateVariableValueFilterInterface || commonTypes.ContentTemplateVariableValueFilterInterface;
      const classType = nodeTypes.ContentTemplateVariableValueFilter || inputTypes.ContentTemplateVariableValueFilter || commonTypes.ContentTemplateVariableValueFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableValueInsertInput', () => {
    test('ContentTemplateVariableValueInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableValueInsertInputSchema || inputSchemas.ContentTemplateVariableValueInsertInputSchema || commonSchemas.ContentTemplateVariableValueInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableValueInsertInputInterface and ContentTemplateVariableValueInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableValueInsertInputInterface || inputTypes.ContentTemplateVariableValueInsertInputInterface || commonTypes.ContentTemplateVariableValueInsertInputInterface;
      const classType = nodeTypes.ContentTemplateVariableValueInsertInput || inputTypes.ContentTemplateVariableValueInsertInput || commonTypes.ContentTemplateVariableValueInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableValueOrderBy', () => {
    test('ContentTemplateVariableValueOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableValueOrderBySchema || inputSchemas.ContentTemplateVariableValueOrderBySchema || commonSchemas.ContentTemplateVariableValueOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableValueOrderByInterface and ContentTemplateVariableValueOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableValueOrderByInterface || inputTypes.ContentTemplateVariableValueOrderByInterface || commonTypes.ContentTemplateVariableValueOrderByInterface;
      const classType = nodeTypes.ContentTemplateVariableValueOrderBy || inputTypes.ContentTemplateVariableValueOrderBy || commonTypes.ContentTemplateVariableValueOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableValueUpdateInput', () => {
    test('ContentTemplateVariableValueUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableValueUpdateInputSchema || inputSchemas.ContentTemplateVariableValueUpdateInputSchema || commonSchemas.ContentTemplateVariableValueUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableValueUpdateInputInterface and ContentTemplateVariableValueUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableValueUpdateInputInterface || inputTypes.ContentTemplateVariableValueUpdateInputInterface || commonTypes.ContentTemplateVariableValueUpdateInputInterface;
      const classType = nodeTypes.ContentTemplateVariableValueUpdateInput || inputTypes.ContentTemplateVariableValueUpdateInput || commonTypes.ContentTemplateVariableValueUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTypeFilter', () => {
    test('ContentTypeFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTypeFilterSchema || inputSchemas.ContentTypeFilterSchema || commonSchemas.ContentTypeFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTypeFilterInterface and ContentTypeFilter should be defined', () => {
      const interfaceType = nodeTypes.ContentTypeFilterInterface || inputTypes.ContentTypeFilterInterface || commonTypes.ContentTypeFilterInterface;
      const classType = nodeTypes.ContentTypeFilter || inputTypes.ContentTypeFilter || commonTypes.ContentTypeFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTypeInsertInput', () => {
    test('ContentTypeInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTypeInsertInputSchema || inputSchemas.ContentTypeInsertInputSchema || commonSchemas.ContentTypeInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTypeInsertInputInterface and ContentTypeInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ContentTypeInsertInputInterface || inputTypes.ContentTypeInsertInputInterface || commonTypes.ContentTypeInsertInputInterface;
      const classType = nodeTypes.ContentTypeInsertInput || inputTypes.ContentTypeInsertInput || commonTypes.ContentTypeInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTypeOrderBy', () => {
    test('ContentTypeOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTypeOrderBySchema || inputSchemas.ContentTypeOrderBySchema || commonSchemas.ContentTypeOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTypeOrderByInterface and ContentTypeOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ContentTypeOrderByInterface || inputTypes.ContentTypeOrderByInterface || commonTypes.ContentTypeOrderByInterface;
      const classType = nodeTypes.ContentTypeOrderBy || inputTypes.ContentTypeOrderBy || commonTypes.ContentTypeOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTypeUpdateInput', () => {
    test('ContentTypeUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTypeUpdateInputSchema || inputSchemas.ContentTypeUpdateInputSchema || commonSchemas.ContentTypeUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTypeUpdateInputInterface and ContentTypeUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ContentTypeUpdateInputInterface || inputTypes.ContentTypeUpdateInputInterface || commonTypes.ContentTypeUpdateInputInterface;
      const classType = nodeTypes.ContentTypeUpdateInput || inputTypes.ContentTypeUpdateInput || commonTypes.ContentTypeUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentUpdateInput', () => {
    test('ContentUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentUpdateInputSchema || inputSchemas.ContentUpdateInputSchema || commonSchemas.ContentUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentUpdateInputInterface and ContentUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ContentUpdateInputInterface || inputTypes.ContentUpdateInputInterface || commonTypes.ContentUpdateInputInterface;
      const classType = nodeTypes.ContentUpdateInput || inputTypes.ContentUpdateInput || commonTypes.ContentUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentVectorDatabaseFilter', () => {
    test('ContentVectorDatabaseFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentVectorDatabaseFilterSchema || inputSchemas.ContentVectorDatabaseFilterSchema || commonSchemas.ContentVectorDatabaseFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentVectorDatabaseFilterInterface and ContentVectorDatabaseFilter should be defined', () => {
      const interfaceType = nodeTypes.ContentVectorDatabaseFilterInterface || inputTypes.ContentVectorDatabaseFilterInterface || commonTypes.ContentVectorDatabaseFilterInterface;
      const classType = nodeTypes.ContentVectorDatabaseFilter || inputTypes.ContentVectorDatabaseFilter || commonTypes.ContentVectorDatabaseFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentVectorDatabaseInsertInput', () => {
    test('ContentVectorDatabaseInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentVectorDatabaseInsertInputSchema || inputSchemas.ContentVectorDatabaseInsertInputSchema || commonSchemas.ContentVectorDatabaseInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentVectorDatabaseInsertInputInterface and ContentVectorDatabaseInsertInput should be defined', () => {
      const interfaceType = nodeTypes.ContentVectorDatabaseInsertInputInterface || inputTypes.ContentVectorDatabaseInsertInputInterface || commonTypes.ContentVectorDatabaseInsertInputInterface;
      const classType = nodeTypes.ContentVectorDatabaseInsertInput || inputTypes.ContentVectorDatabaseInsertInput || commonTypes.ContentVectorDatabaseInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentVectorDatabaseOrderBy', () => {
    test('ContentVectorDatabaseOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentVectorDatabaseOrderBySchema || inputSchemas.ContentVectorDatabaseOrderBySchema || commonSchemas.ContentVectorDatabaseOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentVectorDatabaseOrderByInterface and ContentVectorDatabaseOrderBy should be defined', () => {
      const interfaceType = nodeTypes.ContentVectorDatabaseOrderByInterface || inputTypes.ContentVectorDatabaseOrderByInterface || commonTypes.ContentVectorDatabaseOrderByInterface;
      const classType = nodeTypes.ContentVectorDatabaseOrderBy || inputTypes.ContentVectorDatabaseOrderBy || commonTypes.ContentVectorDatabaseOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentVectorDatabaseUpdateInput', () => {
    test('ContentVectorDatabaseUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentVectorDatabaseUpdateInputSchema || inputSchemas.ContentVectorDatabaseUpdateInputSchema || commonSchemas.ContentVectorDatabaseUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentVectorDatabaseUpdateInputInterface and ContentVectorDatabaseUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.ContentVectorDatabaseUpdateInputInterface || inputTypes.ContentVectorDatabaseUpdateInputInterface || commonTypes.ContentVectorDatabaseUpdateInputInterface;
      const classType = nodeTypes.ContentVectorDatabaseUpdateInput || inputTypes.ContentVectorDatabaseUpdateInput || commonTypes.ContentVectorDatabaseUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CreationTypeFilter', () => {
    test('CreationTypeFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.CreationTypeFilterSchema || inputSchemas.CreationTypeFilterSchema || commonSchemas.CreationTypeFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CreationTypeFilterInterface and CreationTypeFilter should be defined', () => {
      const interfaceType = nodeTypes.CreationTypeFilterInterface || inputTypes.CreationTypeFilterInterface || commonTypes.CreationTypeFilterInterface;
      const classType = nodeTypes.CreationTypeFilter || inputTypes.CreationTypeFilter || commonTypes.CreationTypeFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CreationTypeInsertInput', () => {
    test('CreationTypeInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.CreationTypeInsertInputSchema || inputSchemas.CreationTypeInsertInputSchema || commonSchemas.CreationTypeInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CreationTypeInsertInputInterface and CreationTypeInsertInput should be defined', () => {
      const interfaceType = nodeTypes.CreationTypeInsertInputInterface || inputTypes.CreationTypeInsertInputInterface || commonTypes.CreationTypeInsertInputInterface;
      const classType = nodeTypes.CreationTypeInsertInput || inputTypes.CreationTypeInsertInput || commonTypes.CreationTypeInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CreationTypeOrderBy', () => {
    test('CreationTypeOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.CreationTypeOrderBySchema || inputSchemas.CreationTypeOrderBySchema || commonSchemas.CreationTypeOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CreationTypeOrderByInterface and CreationTypeOrderBy should be defined', () => {
      const interfaceType = nodeTypes.CreationTypeOrderByInterface || inputTypes.CreationTypeOrderByInterface || commonTypes.CreationTypeOrderByInterface;
      const classType = nodeTypes.CreationTypeOrderBy || inputTypes.CreationTypeOrderBy || commonTypes.CreationTypeOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CreationTypeUpdateInput', () => {
    test('CreationTypeUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.CreationTypeUpdateInputSchema || inputSchemas.CreationTypeUpdateInputSchema || commonSchemas.CreationTypeUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CreationTypeUpdateInputInterface and CreationTypeUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.CreationTypeUpdateInputInterface || inputTypes.CreationTypeUpdateInputInterface || commonTypes.CreationTypeUpdateInputInterface;
      const classType = nodeTypes.CreationTypeUpdateInput || inputTypes.CreationTypeUpdateInput || commonTypes.CreationTypeUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DateFilter', () => {
    test('DateFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.DateFilterSchema || inputSchemas.DateFilterSchema || commonSchemas.DateFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DateFilterInterface and DateFilter should be defined', () => {
      const interfaceType = nodeTypes.DateFilterInterface || inputTypes.DateFilterInterface || commonTypes.DateFilterInterface;
      const classType = nodeTypes.DateFilter || inputTypes.DateFilter || commonTypes.DateFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DateListFilter', () => {
    test('DateListFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.DateListFilterSchema || inputSchemas.DateListFilterSchema || commonSchemas.DateListFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DateListFilterInterface and DateListFilter should be defined', () => {
      const interfaceType = nodeTypes.DateListFilterInterface || inputTypes.DateListFilterInterface || commonTypes.DateListFilterInterface;
      const classType = nodeTypes.DateListFilter || inputTypes.DateListFilter || commonTypes.DateListFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DatetimeFilter', () => {
    test('DatetimeFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.DatetimeFilterSchema || inputSchemas.DatetimeFilterSchema || commonSchemas.DatetimeFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DatetimeFilterInterface and DatetimeFilter should be defined', () => {
      const interfaceType = nodeTypes.DatetimeFilterInterface || inputTypes.DatetimeFilterInterface || commonTypes.DatetimeFilterInterface;
      const classType = nodeTypes.DatetimeFilter || inputTypes.DatetimeFilter || commonTypes.DatetimeFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DatetimeListFilter', () => {
    test('DatetimeListFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.DatetimeListFilterSchema || inputSchemas.DatetimeListFilterSchema || commonSchemas.DatetimeListFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DatetimeListFilterInterface and DatetimeListFilter should be defined', () => {
      const interfaceType = nodeTypes.DatetimeListFilterInterface || inputTypes.DatetimeListFilterInterface || commonTypes.DatetimeListFilterInterface;
      const classType = nodeTypes.DatetimeListFilter || inputTypes.DatetimeListFilter || commonTypes.DatetimeListFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentFilter', () => {
    test('DocumentFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentFilterSchema || inputSchemas.DocumentFilterSchema || commonSchemas.DocumentFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentFilterInterface and DocumentFilter should be defined', () => {
      const interfaceType = nodeTypes.DocumentFilterInterface || inputTypes.DocumentFilterInterface || commonTypes.DocumentFilterInterface;
      const classType = nodeTypes.DocumentFilter || inputTypes.DocumentFilter || commonTypes.DocumentFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentInsertInput', () => {
    test('DocumentInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentInsertInputSchema || inputSchemas.DocumentInsertInputSchema || commonSchemas.DocumentInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentInsertInputInterface and DocumentInsertInput should be defined', () => {
      const interfaceType = nodeTypes.DocumentInsertInputInterface || inputTypes.DocumentInsertInputInterface || commonTypes.DocumentInsertInputInterface;
      const classType = nodeTypes.DocumentInsertInput || inputTypes.DocumentInsertInput || commonTypes.DocumentInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentOrderBy', () => {
    test('DocumentOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentOrderBySchema || inputSchemas.DocumentOrderBySchema || commonSchemas.DocumentOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentOrderByInterface and DocumentOrderBy should be defined', () => {
      const interfaceType = nodeTypes.DocumentOrderByInterface || inputTypes.DocumentOrderByInterface || commonTypes.DocumentOrderByInterface;
      const classType = nodeTypes.DocumentOrderBy || inputTypes.DocumentOrderBy || commonTypes.DocumentOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentUpdateInput', () => {
    test('DocumentUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentUpdateInputSchema || inputSchemas.DocumentUpdateInputSchema || commonSchemas.DocumentUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentUpdateInputInterface and DocumentUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.DocumentUpdateInputInterface || inputTypes.DocumentUpdateInputInterface || commonTypes.DocumentUpdateInputInterface;
      const classType = nodeTypes.DocumentUpdateInput || inputTypes.DocumentUpdateInput || commonTypes.DocumentUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentVectorDatabaseFilter', () => {
    test('DocumentVectorDatabaseFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentVectorDatabaseFilterSchema || inputSchemas.DocumentVectorDatabaseFilterSchema || commonSchemas.DocumentVectorDatabaseFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentVectorDatabaseFilterInterface and DocumentVectorDatabaseFilter should be defined', () => {
      const interfaceType = nodeTypes.DocumentVectorDatabaseFilterInterface || inputTypes.DocumentVectorDatabaseFilterInterface || commonTypes.DocumentVectorDatabaseFilterInterface;
      const classType = nodeTypes.DocumentVectorDatabaseFilter || inputTypes.DocumentVectorDatabaseFilter || commonTypes.DocumentVectorDatabaseFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentVectorDatabaseInsertInput', () => {
    test('DocumentVectorDatabaseInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentVectorDatabaseInsertInputSchema || inputSchemas.DocumentVectorDatabaseInsertInputSchema || commonSchemas.DocumentVectorDatabaseInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentVectorDatabaseInsertInputInterface and DocumentVectorDatabaseInsertInput should be defined', () => {
      const interfaceType = nodeTypes.DocumentVectorDatabaseInsertInputInterface || inputTypes.DocumentVectorDatabaseInsertInputInterface || commonTypes.DocumentVectorDatabaseInsertInputInterface;
      const classType = nodeTypes.DocumentVectorDatabaseInsertInput || inputTypes.DocumentVectorDatabaseInsertInput || commonTypes.DocumentVectorDatabaseInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentVectorDatabaseOrderBy', () => {
    test('DocumentVectorDatabaseOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentVectorDatabaseOrderBySchema || inputSchemas.DocumentVectorDatabaseOrderBySchema || commonSchemas.DocumentVectorDatabaseOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentVectorDatabaseOrderByInterface and DocumentVectorDatabaseOrderBy should be defined', () => {
      const interfaceType = nodeTypes.DocumentVectorDatabaseOrderByInterface || inputTypes.DocumentVectorDatabaseOrderByInterface || commonTypes.DocumentVectorDatabaseOrderByInterface;
      const classType = nodeTypes.DocumentVectorDatabaseOrderBy || inputTypes.DocumentVectorDatabaseOrderBy || commonTypes.DocumentVectorDatabaseOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentVectorDatabaseUpdateInput', () => {
    test('DocumentVectorDatabaseUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentVectorDatabaseUpdateInputSchema || inputSchemas.DocumentVectorDatabaseUpdateInputSchema || commonSchemas.DocumentVectorDatabaseUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentVectorDatabaseUpdateInputInterface and DocumentVectorDatabaseUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.DocumentVectorDatabaseUpdateInputInterface || inputTypes.DocumentVectorDatabaseUpdateInputInterface || commonTypes.DocumentVectorDatabaseUpdateInputInterface;
      const classType = nodeTypes.DocumentVectorDatabaseUpdateInput || inputTypes.DocumentVectorDatabaseUpdateInput || commonTypes.DocumentVectorDatabaseUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('FeatureFilter', () => {
    test('FeatureFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.FeatureFilterSchema || inputSchemas.FeatureFilterSchema || commonSchemas.FeatureFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('FeatureFilterInterface and FeatureFilter should be defined', () => {
      const interfaceType = nodeTypes.FeatureFilterInterface || inputTypes.FeatureFilterInterface || commonTypes.FeatureFilterInterface;
      const classType = nodeTypes.FeatureFilter || inputTypes.FeatureFilter || commonTypes.FeatureFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('FeatureInsertInput', () => {
    test('FeatureInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.FeatureInsertInputSchema || inputSchemas.FeatureInsertInputSchema || commonSchemas.FeatureInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('FeatureInsertInputInterface and FeatureInsertInput should be defined', () => {
      const interfaceType = nodeTypes.FeatureInsertInputInterface || inputTypes.FeatureInsertInputInterface || commonTypes.FeatureInsertInputInterface;
      const classType = nodeTypes.FeatureInsertInput || inputTypes.FeatureInsertInput || commonTypes.FeatureInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('FeatureOrderBy', () => {
    test('FeatureOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.FeatureOrderBySchema || inputSchemas.FeatureOrderBySchema || commonSchemas.FeatureOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('FeatureOrderByInterface and FeatureOrderBy should be defined', () => {
      const interfaceType = nodeTypes.FeatureOrderByInterface || inputTypes.FeatureOrderByInterface || commonTypes.FeatureOrderByInterface;
      const classType = nodeTypes.FeatureOrderBy || inputTypes.FeatureOrderBy || commonTypes.FeatureOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('FeatureUpdateInput', () => {
    test('FeatureUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.FeatureUpdateInputSchema || inputSchemas.FeatureUpdateInputSchema || commonSchemas.FeatureUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('FeatureUpdateInputInterface and FeatureUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.FeatureUpdateInputInterface || inputTypes.FeatureUpdateInputInterface || commonTypes.FeatureUpdateInputInterface;
      const classType = nodeTypes.FeatureUpdateInput || inputTypes.FeatureUpdateInput || commonTypes.FeatureUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('FloatFilter', () => {
    test('FloatFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.FloatFilterSchema || inputSchemas.FloatFilterSchema || commonSchemas.FloatFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('FloatFilterInterface and FloatFilter should be defined', () => {
      const interfaceType = nodeTypes.FloatFilterInterface || inputTypes.FloatFilterInterface || commonTypes.FloatFilterInterface;
      const classType = nodeTypes.FloatFilter || inputTypes.FloatFilter || commonTypes.FloatFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('FloatListFilter', () => {
    test('FloatListFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.FloatListFilterSchema || inputSchemas.FloatListFilterSchema || commonSchemas.FloatListFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('FloatListFilterInterface and FloatListFilter should be defined', () => {
      const interfaceType = nodeTypes.FloatListFilterInterface || inputTypes.FloatListFilterInterface || commonTypes.FloatListFilterInterface;
      const classType = nodeTypes.FloatListFilter || inputTypes.FloatListFilter || commonTypes.FloatListFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('IDFilter', () => {
    test('IDFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.IDFilterSchema || inputSchemas.IDFilterSchema || commonSchemas.IDFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('IDFilterInterface and IDFilter should be defined', () => {
      const interfaceType = nodeTypes.IDFilterInterface || inputTypes.IDFilterInterface || commonTypes.IDFilterInterface;
      const classType = nodeTypes.IDFilter || inputTypes.IDFilter || commonTypes.IDFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('IntFilter', () => {
    test('IntFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.IntFilterSchema || inputSchemas.IntFilterSchema || commonSchemas.IntFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('IntFilterInterface and IntFilter should be defined', () => {
      const interfaceType = nodeTypes.IntFilterInterface || inputTypes.IntFilterInterface || commonTypes.IntFilterInterface;
      const classType = nodeTypes.IntFilter || inputTypes.IntFilter || commonTypes.IntFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('IntListFilter', () => {
    test('IntListFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.IntListFilterSchema || inputSchemas.IntListFilterSchema || commonSchemas.IntListFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('IntListFilterInterface and IntListFilter should be defined', () => {
      const interfaceType = nodeTypes.IntListFilterInterface || inputTypes.IntListFilterInterface || commonTypes.IntListFilterInterface;
      const classType = nodeTypes.IntListFilter || inputTypes.IntListFilter || commonTypes.IntListFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('MimeTypeFilter', () => {
    test('MimeTypeFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.MimeTypeFilterSchema || inputSchemas.MimeTypeFilterSchema || commonSchemas.MimeTypeFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('MimeTypeFilterInterface and MimeTypeFilter should be defined', () => {
      const interfaceType = nodeTypes.MimeTypeFilterInterface || inputTypes.MimeTypeFilterInterface || commonTypes.MimeTypeFilterInterface;
      const classType = nodeTypes.MimeTypeFilter || inputTypes.MimeTypeFilter || commonTypes.MimeTypeFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('MimeTypeInsertInput', () => {
    test('MimeTypeInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.MimeTypeInsertInputSchema || inputSchemas.MimeTypeInsertInputSchema || commonSchemas.MimeTypeInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('MimeTypeInsertInputInterface and MimeTypeInsertInput should be defined', () => {
      const interfaceType = nodeTypes.MimeTypeInsertInputInterface || inputTypes.MimeTypeInsertInputInterface || commonTypes.MimeTypeInsertInputInterface;
      const classType = nodeTypes.MimeTypeInsertInput || inputTypes.MimeTypeInsertInput || commonTypes.MimeTypeInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('MimeTypeOrderBy', () => {
    test('MimeTypeOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.MimeTypeOrderBySchema || inputSchemas.MimeTypeOrderBySchema || commonSchemas.MimeTypeOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('MimeTypeOrderByInterface and MimeTypeOrderBy should be defined', () => {
      const interfaceType = nodeTypes.MimeTypeOrderByInterface || inputTypes.MimeTypeOrderByInterface || commonTypes.MimeTypeOrderByInterface;
      const classType = nodeTypes.MimeTypeOrderBy || inputTypes.MimeTypeOrderBy || commonTypes.MimeTypeOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('MimeTypeUpdateInput', () => {
    test('MimeTypeUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.MimeTypeUpdateInputSchema || inputSchemas.MimeTypeUpdateInputSchema || commonSchemas.MimeTypeUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('MimeTypeUpdateInputInterface and MimeTypeUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.MimeTypeUpdateInputInterface || inputTypes.MimeTypeUpdateInputInterface || commonTypes.MimeTypeUpdateInputInterface;
      const classType = nodeTypes.MimeTypeUpdateInput || inputTypes.MimeTypeUpdateInput || commonTypes.MimeTypeUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('OpaqueFilter', () => {
    test('OpaqueFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.OpaqueFilterSchema || inputSchemas.OpaqueFilterSchema || commonSchemas.OpaqueFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('OpaqueFilterInterface and OpaqueFilter should be defined', () => {
      const interfaceType = nodeTypes.OpaqueFilterInterface || inputTypes.OpaqueFilterInterface || commonTypes.OpaqueFilterInterface;
      const classType = nodeTypes.OpaqueFilter || inputTypes.OpaqueFilter || commonTypes.OpaqueFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanFeatureFilter', () => {
    test('PricingPlanFeatureFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanFeatureFilterSchema || inputSchemas.PricingPlanFeatureFilterSchema || commonSchemas.PricingPlanFeatureFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanFeatureFilterInterface and PricingPlanFeatureFilter should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanFeatureFilterInterface || inputTypes.PricingPlanFeatureFilterInterface || commonTypes.PricingPlanFeatureFilterInterface;
      const classType = nodeTypes.PricingPlanFeatureFilter || inputTypes.PricingPlanFeatureFilter || commonTypes.PricingPlanFeatureFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanFeatureInsertInput', () => {
    test('PricingPlanFeatureInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanFeatureInsertInputSchema || inputSchemas.PricingPlanFeatureInsertInputSchema || commonSchemas.PricingPlanFeatureInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanFeatureInsertInputInterface and PricingPlanFeatureInsertInput should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanFeatureInsertInputInterface || inputTypes.PricingPlanFeatureInsertInputInterface || commonTypes.PricingPlanFeatureInsertInputInterface;
      const classType = nodeTypes.PricingPlanFeatureInsertInput || inputTypes.PricingPlanFeatureInsertInput || commonTypes.PricingPlanFeatureInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanFeatureOrderBy', () => {
    test('PricingPlanFeatureOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanFeatureOrderBySchema || inputSchemas.PricingPlanFeatureOrderBySchema || commonSchemas.PricingPlanFeatureOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanFeatureOrderByInterface and PricingPlanFeatureOrderBy should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanFeatureOrderByInterface || inputTypes.PricingPlanFeatureOrderByInterface || commonTypes.PricingPlanFeatureOrderByInterface;
      const classType = nodeTypes.PricingPlanFeatureOrderBy || inputTypes.PricingPlanFeatureOrderBy || commonTypes.PricingPlanFeatureOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanFeatureUpdateInput', () => {
    test('PricingPlanFeatureUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanFeatureUpdateInputSchema || inputSchemas.PricingPlanFeatureUpdateInputSchema || commonSchemas.PricingPlanFeatureUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanFeatureUpdateInputInterface and PricingPlanFeatureUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanFeatureUpdateInputInterface || inputTypes.PricingPlanFeatureUpdateInputInterface || commonTypes.PricingPlanFeatureUpdateInputInterface;
      const classType = nodeTypes.PricingPlanFeatureUpdateInput || inputTypes.PricingPlanFeatureUpdateInput || commonTypes.PricingPlanFeatureUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanFilter', () => {
    test('PricingPlanFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanFilterSchema || inputSchemas.PricingPlanFilterSchema || commonSchemas.PricingPlanFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanFilterInterface and PricingPlanFilter should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanFilterInterface || inputTypes.PricingPlanFilterInterface || commonTypes.PricingPlanFilterInterface;
      const classType = nodeTypes.PricingPlanFilter || inputTypes.PricingPlanFilter || commonTypes.PricingPlanFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanInsertInput', () => {
    test('PricingPlanInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanInsertInputSchema || inputSchemas.PricingPlanInsertInputSchema || commonSchemas.PricingPlanInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanInsertInputInterface and PricingPlanInsertInput should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanInsertInputInterface || inputTypes.PricingPlanInsertInputInterface || commonTypes.PricingPlanInsertInputInterface;
      const classType = nodeTypes.PricingPlanInsertInput || inputTypes.PricingPlanInsertInput || commonTypes.PricingPlanInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanOrderBy', () => {
    test('PricingPlanOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanOrderBySchema || inputSchemas.PricingPlanOrderBySchema || commonSchemas.PricingPlanOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanOrderByInterface and PricingPlanOrderBy should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanOrderByInterface || inputTypes.PricingPlanOrderByInterface || commonTypes.PricingPlanOrderByInterface;
      const classType = nodeTypes.PricingPlanOrderBy || inputTypes.PricingPlanOrderBy || commonTypes.PricingPlanOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanUpdateInput', () => {
    test('PricingPlanUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanUpdateInputSchema || inputSchemas.PricingPlanUpdateInputSchema || commonSchemas.PricingPlanUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanUpdateInputInterface and PricingPlanUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanUpdateInputInterface || inputTypes.PricingPlanUpdateInputInterface || commonTypes.PricingPlanUpdateInputInterface;
      const classType = nodeTypes.PricingPlanUpdateInput || inputTypes.PricingPlanUpdateInput || commonTypes.PricingPlanUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptFilter', () => {
    test('PromptFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptFilterSchema || inputSchemas.PromptFilterSchema || commonSchemas.PromptFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptFilterInterface and PromptFilter should be defined', () => {
      const interfaceType = nodeTypes.PromptFilterInterface || inputTypes.PromptFilterInterface || commonTypes.PromptFilterInterface;
      const classType = nodeTypes.PromptFilter || inputTypes.PromptFilter || commonTypes.PromptFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptInsertInput', () => {
    test('PromptInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptInsertInputSchema || inputSchemas.PromptInsertInputSchema || commonSchemas.PromptInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptInsertInputInterface and PromptInsertInput should be defined', () => {
      const interfaceType = nodeTypes.PromptInsertInputInterface || inputTypes.PromptInsertInputInterface || commonTypes.PromptInsertInputInterface;
      const classType = nodeTypes.PromptInsertInput || inputTypes.PromptInsertInput || commonTypes.PromptInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptOrderBy', () => {
    test('PromptOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptOrderBySchema || inputSchemas.PromptOrderBySchema || commonSchemas.PromptOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptOrderByInterface and PromptOrderBy should be defined', () => {
      const interfaceType = nodeTypes.PromptOrderByInterface || inputTypes.PromptOrderByInterface || commonTypes.PromptOrderByInterface;
      const classType = nodeTypes.PromptOrderBy || inputTypes.PromptOrderBy || commonTypes.PromptOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateFilter', () => {
    test('PromptTemplateFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateFilterSchema || inputSchemas.PromptTemplateFilterSchema || commonSchemas.PromptTemplateFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateFilterInterface and PromptTemplateFilter should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateFilterInterface || inputTypes.PromptTemplateFilterInterface || commonTypes.PromptTemplateFilterInterface;
      const classType = nodeTypes.PromptTemplateFilter || inputTypes.PromptTemplateFilter || commonTypes.PromptTemplateFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateInsertInput', () => {
    test('PromptTemplateInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateInsertInputSchema || inputSchemas.PromptTemplateInsertInputSchema || commonSchemas.PromptTemplateInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateInsertInputInterface and PromptTemplateInsertInput should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateInsertInputInterface || inputTypes.PromptTemplateInsertInputInterface || commonTypes.PromptTemplateInsertInputInterface;
      const classType = nodeTypes.PromptTemplateInsertInput || inputTypes.PromptTemplateInsertInput || commonTypes.PromptTemplateInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateOrderBy', () => {
    test('PromptTemplateOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateOrderBySchema || inputSchemas.PromptTemplateOrderBySchema || commonSchemas.PromptTemplateOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateOrderByInterface and PromptTemplateOrderBy should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateOrderByInterface || inputTypes.PromptTemplateOrderByInterface || commonTypes.PromptTemplateOrderByInterface;
      const classType = nodeTypes.PromptTemplateOrderBy || inputTypes.PromptTemplateOrderBy || commonTypes.PromptTemplateOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateUpdateInput', () => {
    test('PromptTemplateUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateUpdateInputSchema || inputSchemas.PromptTemplateUpdateInputSchema || commonSchemas.PromptTemplateUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateUpdateInputInterface and PromptTemplateUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateUpdateInputInterface || inputTypes.PromptTemplateUpdateInputInterface || commonTypes.PromptTemplateUpdateInputInterface;
      const classType = nodeTypes.PromptTemplateUpdateInput || inputTypes.PromptTemplateUpdateInput || commonTypes.PromptTemplateUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateVariableFilter', () => {
    test('PromptTemplateVariableFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateVariableFilterSchema || inputSchemas.PromptTemplateVariableFilterSchema || commonSchemas.PromptTemplateVariableFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateVariableFilterInterface and PromptTemplateVariableFilter should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateVariableFilterInterface || inputTypes.PromptTemplateVariableFilterInterface || commonTypes.PromptTemplateVariableFilterInterface;
      const classType = nodeTypes.PromptTemplateVariableFilter || inputTypes.PromptTemplateVariableFilter || commonTypes.PromptTemplateVariableFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateVariableInsertInput', () => {
    test('PromptTemplateVariableInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateVariableInsertInputSchema || inputSchemas.PromptTemplateVariableInsertInputSchema || commonSchemas.PromptTemplateVariableInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateVariableInsertInputInterface and PromptTemplateVariableInsertInput should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateVariableInsertInputInterface || inputTypes.PromptTemplateVariableInsertInputInterface || commonTypes.PromptTemplateVariableInsertInputInterface;
      const classType = nodeTypes.PromptTemplateVariableInsertInput || inputTypes.PromptTemplateVariableInsertInput || commonTypes.PromptTemplateVariableInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateVariableOrderBy', () => {
    test('PromptTemplateVariableOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateVariableOrderBySchema || inputSchemas.PromptTemplateVariableOrderBySchema || commonSchemas.PromptTemplateVariableOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateVariableOrderByInterface and PromptTemplateVariableOrderBy should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateVariableOrderByInterface || inputTypes.PromptTemplateVariableOrderByInterface || commonTypes.PromptTemplateVariableOrderByInterface;
      const classType = nodeTypes.PromptTemplateVariableOrderBy || inputTypes.PromptTemplateVariableOrderBy || commonTypes.PromptTemplateVariableOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateVariableUpdateInput', () => {
    test('PromptTemplateVariableUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateVariableUpdateInputSchema || inputSchemas.PromptTemplateVariableUpdateInputSchema || commonSchemas.PromptTemplateVariableUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateVariableUpdateInputInterface and PromptTemplateVariableUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateVariableUpdateInputInterface || inputTypes.PromptTemplateVariableUpdateInputInterface || commonTypes.PromptTemplateVariableUpdateInputInterface;
      const classType = nodeTypes.PromptTemplateVariableUpdateInput || inputTypes.PromptTemplateVariableUpdateInput || commonTypes.PromptTemplateVariableUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptUpdateInput', () => {
    test('PromptUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptUpdateInputSchema || inputSchemas.PromptUpdateInputSchema || commonSchemas.PromptUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptUpdateInputInterface and PromptUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.PromptUpdateInputInterface || inputTypes.PromptUpdateInputInterface || commonTypes.PromptUpdateInputInterface;
      const classType = nodeTypes.PromptUpdateInput || inputTypes.PromptUpdateInput || commonTypes.PromptUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptVariableValueFilter', () => {
    test('PromptVariableValueFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptVariableValueFilterSchema || inputSchemas.PromptVariableValueFilterSchema || commonSchemas.PromptVariableValueFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptVariableValueFilterInterface and PromptVariableValueFilter should be defined', () => {
      const interfaceType = nodeTypes.PromptVariableValueFilterInterface || inputTypes.PromptVariableValueFilterInterface || commonTypes.PromptVariableValueFilterInterface;
      const classType = nodeTypes.PromptVariableValueFilter || inputTypes.PromptVariableValueFilter || commonTypes.PromptVariableValueFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptVariableValueInsertInput', () => {
    test('PromptVariableValueInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptVariableValueInsertInputSchema || inputSchemas.PromptVariableValueInsertInputSchema || commonSchemas.PromptVariableValueInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptVariableValueInsertInputInterface and PromptVariableValueInsertInput should be defined', () => {
      const interfaceType = nodeTypes.PromptVariableValueInsertInputInterface || inputTypes.PromptVariableValueInsertInputInterface || commonTypes.PromptVariableValueInsertInputInterface;
      const classType = nodeTypes.PromptVariableValueInsertInput || inputTypes.PromptVariableValueInsertInput || commonTypes.PromptVariableValueInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptVariableValueOrderBy', () => {
    test('PromptVariableValueOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptVariableValueOrderBySchema || inputSchemas.PromptVariableValueOrderBySchema || commonSchemas.PromptVariableValueOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptVariableValueOrderByInterface and PromptVariableValueOrderBy should be defined', () => {
      const interfaceType = nodeTypes.PromptVariableValueOrderByInterface || inputTypes.PromptVariableValueOrderByInterface || commonTypes.PromptVariableValueOrderByInterface;
      const classType = nodeTypes.PromptVariableValueOrderBy || inputTypes.PromptVariableValueOrderBy || commonTypes.PromptVariableValueOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptVariableValueUpdateInput', () => {
    test('PromptVariableValueUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptVariableValueUpdateInputSchema || inputSchemas.PromptVariableValueUpdateInputSchema || commonSchemas.PromptVariableValueUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptVariableValueUpdateInputInterface and PromptVariableValueUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.PromptVariableValueUpdateInputInterface || inputTypes.PromptVariableValueUpdateInputInterface || commonTypes.PromptVariableValueUpdateInputInterface;
      const classType = nodeTypes.PromptVariableValueUpdateInput || inputTypes.PromptVariableValueUpdateInput || commonTypes.PromptVariableValueUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('RoleFilter', () => {
    test('RoleFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.RoleFilterSchema || inputSchemas.RoleFilterSchema || commonSchemas.RoleFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('RoleFilterInterface and RoleFilter should be defined', () => {
      const interfaceType = nodeTypes.RoleFilterInterface || inputTypes.RoleFilterInterface || commonTypes.RoleFilterInterface;
      const classType = nodeTypes.RoleFilter || inputTypes.RoleFilter || commonTypes.RoleFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('RoleInsertInput', () => {
    test('RoleInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.RoleInsertInputSchema || inputSchemas.RoleInsertInputSchema || commonSchemas.RoleInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('RoleInsertInputInterface and RoleInsertInput should be defined', () => {
      const interfaceType = nodeTypes.RoleInsertInputInterface || inputTypes.RoleInsertInputInterface || commonTypes.RoleInsertInputInterface;
      const classType = nodeTypes.RoleInsertInput || inputTypes.RoleInsertInput || commonTypes.RoleInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('RoleOrderBy', () => {
    test('RoleOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.RoleOrderBySchema || inputSchemas.RoleOrderBySchema || commonSchemas.RoleOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('RoleOrderByInterface and RoleOrderBy should be defined', () => {
      const interfaceType = nodeTypes.RoleOrderByInterface || inputTypes.RoleOrderByInterface || commonTypes.RoleOrderByInterface;
      const classType = nodeTypes.RoleOrderBy || inputTypes.RoleOrderBy || commonTypes.RoleOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('RoleUpdateInput', () => {
    test('RoleUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.RoleUpdateInputSchema || inputSchemas.RoleUpdateInputSchema || commonSchemas.RoleUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('RoleUpdateInputInterface and RoleUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.RoleUpdateInputInterface || inputTypes.RoleUpdateInputInterface || commonTypes.RoleUpdateInputInterface;
      const classType = nodeTypes.RoleUpdateInput || inputTypes.RoleUpdateInput || commonTypes.RoleUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('StringFilter', () => {
    test('StringFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.StringFilterSchema || inputSchemas.StringFilterSchema || commonSchemas.StringFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('StringFilterInterface and StringFilter should be defined', () => {
      const interfaceType = nodeTypes.StringFilterInterface || inputTypes.StringFilterInterface || commonTypes.StringFilterInterface;
      const classType = nodeTypes.StringFilter || inputTypes.StringFilter || commonTypes.StringFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('StringListFilter', () => {
    test('StringListFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.StringListFilterSchema || inputSchemas.StringListFilterSchema || commonSchemas.StringListFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('StringListFilterInterface and StringListFilter should be defined', () => {
      const interfaceType = nodeTypes.StringListFilterInterface || inputTypes.StringListFilterInterface || commonTypes.StringListFilterInterface;
      const classType = nodeTypes.StringListFilter || inputTypes.StringListFilter || commonTypes.StringListFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableFilter', () => {
    test('TemplateVariableFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableFilterSchema || inputSchemas.TemplateVariableFilterSchema || commonSchemas.TemplateVariableFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableFilterInterface and TemplateVariableFilter should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableFilterInterface || inputTypes.TemplateVariableFilterInterface || commonTypes.TemplateVariableFilterInterface;
      const classType = nodeTypes.TemplateVariableFilter || inputTypes.TemplateVariableFilter || commonTypes.TemplateVariableFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableInsertInput', () => {
    test('TemplateVariableInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableInsertInputSchema || inputSchemas.TemplateVariableInsertInputSchema || commonSchemas.TemplateVariableInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableInsertInputInterface and TemplateVariableInsertInput should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableInsertInputInterface || inputTypes.TemplateVariableInsertInputInterface || commonTypes.TemplateVariableInsertInputInterface;
      const classType = nodeTypes.TemplateVariableInsertInput || inputTypes.TemplateVariableInsertInput || commonTypes.TemplateVariableInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableOrderBy', () => {
    test('TemplateVariableOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableOrderBySchema || inputSchemas.TemplateVariableOrderBySchema || commonSchemas.TemplateVariableOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableOrderByInterface and TemplateVariableOrderBy should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableOrderByInterface || inputTypes.TemplateVariableOrderByInterface || commonTypes.TemplateVariableOrderByInterface;
      const classType = nodeTypes.TemplateVariableOrderBy || inputTypes.TemplateVariableOrderBy || commonTypes.TemplateVariableOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableTypeFilter', () => {
    test('TemplateVariableTypeFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableTypeFilterSchema || inputSchemas.TemplateVariableTypeFilterSchema || commonSchemas.TemplateVariableTypeFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableTypeFilterInterface and TemplateVariableTypeFilter should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableTypeFilterInterface || inputTypes.TemplateVariableTypeFilterInterface || commonTypes.TemplateVariableTypeFilterInterface;
      const classType = nodeTypes.TemplateVariableTypeFilter || inputTypes.TemplateVariableTypeFilter || commonTypes.TemplateVariableTypeFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableTypeInsertInput', () => {
    test('TemplateVariableTypeInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableTypeInsertInputSchema || inputSchemas.TemplateVariableTypeInsertInputSchema || commonSchemas.TemplateVariableTypeInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableTypeInsertInputInterface and TemplateVariableTypeInsertInput should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableTypeInsertInputInterface || inputTypes.TemplateVariableTypeInsertInputInterface || commonTypes.TemplateVariableTypeInsertInputInterface;
      const classType = nodeTypes.TemplateVariableTypeInsertInput || inputTypes.TemplateVariableTypeInsertInput || commonTypes.TemplateVariableTypeInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableTypeOrderBy', () => {
    test('TemplateVariableTypeOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableTypeOrderBySchema || inputSchemas.TemplateVariableTypeOrderBySchema || commonSchemas.TemplateVariableTypeOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableTypeOrderByInterface and TemplateVariableTypeOrderBy should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableTypeOrderByInterface || inputTypes.TemplateVariableTypeOrderByInterface || commonTypes.TemplateVariableTypeOrderByInterface;
      const classType = nodeTypes.TemplateVariableTypeOrderBy || inputTypes.TemplateVariableTypeOrderBy || commonTypes.TemplateVariableTypeOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableTypeUpdateInput', () => {
    test('TemplateVariableTypeUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableTypeUpdateInputSchema || inputSchemas.TemplateVariableTypeUpdateInputSchema || commonSchemas.TemplateVariableTypeUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableTypeUpdateInputInterface and TemplateVariableTypeUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableTypeUpdateInputInterface || inputTypes.TemplateVariableTypeUpdateInputInterface || commonTypes.TemplateVariableTypeUpdateInputInterface;
      const classType = nodeTypes.TemplateVariableTypeUpdateInput || inputTypes.TemplateVariableTypeUpdateInput || commonTypes.TemplateVariableTypeUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableUpdateInput', () => {
    test('TemplateVariableUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableUpdateInputSchema || inputSchemas.TemplateVariableUpdateInputSchema || commonSchemas.TemplateVariableUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableUpdateInputInterface and TemplateVariableUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableUpdateInputInterface || inputTypes.TemplateVariableUpdateInputInterface || commonTypes.TemplateVariableUpdateInputInterface;
      const classType = nodeTypes.TemplateVariableUpdateInput || inputTypes.TemplateVariableUpdateInput || commonTypes.TemplateVariableUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TimeFilter', () => {
    test('TimeFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.TimeFilterSchema || inputSchemas.TimeFilterSchema || commonSchemas.TimeFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TimeFilterInterface and TimeFilter should be defined', () => {
      const interfaceType = nodeTypes.TimeFilterInterface || inputTypes.TimeFilterInterface || commonTypes.TimeFilterInterface;
      const classType = nodeTypes.TimeFilter || inputTypes.TimeFilter || commonTypes.TimeFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TimeListFilter', () => {
    test('TimeListFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.TimeListFilterSchema || inputSchemas.TimeListFilterSchema || commonSchemas.TimeListFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TimeListFilterInterface and TimeListFilter should be defined', () => {
      const interfaceType = nodeTypes.TimeListFilterInterface || inputTypes.TimeListFilterInterface || commonTypes.TimeListFilterInterface;
      const classType = nodeTypes.TimeListFilter || inputTypes.TimeListFilter || commonTypes.TimeListFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserFilter', () => {
    test('UserFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserFilterSchema || inputSchemas.UserFilterSchema || commonSchemas.UserFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserFilterInterface and UserFilter should be defined', () => {
      const interfaceType = nodeTypes.UserFilterInterface || inputTypes.UserFilterInterface || commonTypes.UserFilterInterface;
      const classType = nodeTypes.UserFilter || inputTypes.UserFilter || commonTypes.UserFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserInsertInput', () => {
    test('UserInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserInsertInputSchema || inputSchemas.UserInsertInputSchema || commonSchemas.UserInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserInsertInputInterface and UserInsertInput should be defined', () => {
      const interfaceType = nodeTypes.UserInsertInputInterface || inputTypes.UserInsertInputInterface || commonTypes.UserInsertInputInterface;
      const classType = nodeTypes.UserInsertInput || inputTypes.UserInsertInput || commonTypes.UserInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserOrderBy', () => {
    test('UserOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.UserOrderBySchema || inputSchemas.UserOrderBySchema || commonSchemas.UserOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserOrderByInterface and UserOrderBy should be defined', () => {
      const interfaceType = nodeTypes.UserOrderByInterface || inputTypes.UserOrderByInterface || commonTypes.UserOrderByInterface;
      const classType = nodeTypes.UserOrderBy || inputTypes.UserOrderBy || commonTypes.UserOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserRoleFilter', () => {
    test('UserRoleFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserRoleFilterSchema || inputSchemas.UserRoleFilterSchema || commonSchemas.UserRoleFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserRoleFilterInterface and UserRoleFilter should be defined', () => {
      const interfaceType = nodeTypes.UserRoleFilterInterface || inputTypes.UserRoleFilterInterface || commonTypes.UserRoleFilterInterface;
      const classType = nodeTypes.UserRoleFilter || inputTypes.UserRoleFilter || commonTypes.UserRoleFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserRoleInsertInput', () => {
    test('UserRoleInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserRoleInsertInputSchema || inputSchemas.UserRoleInsertInputSchema || commonSchemas.UserRoleInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserRoleInsertInputInterface and UserRoleInsertInput should be defined', () => {
      const interfaceType = nodeTypes.UserRoleInsertInputInterface || inputTypes.UserRoleInsertInputInterface || commonTypes.UserRoleInsertInputInterface;
      const classType = nodeTypes.UserRoleInsertInput || inputTypes.UserRoleInsertInput || commonTypes.UserRoleInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserRoleOrderBy', () => {
    test('UserRoleOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.UserRoleOrderBySchema || inputSchemas.UserRoleOrderBySchema || commonSchemas.UserRoleOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserRoleOrderByInterface and UserRoleOrderBy should be defined', () => {
      const interfaceType = nodeTypes.UserRoleOrderByInterface || inputTypes.UserRoleOrderByInterface || commonTypes.UserRoleOrderByInterface;
      const classType = nodeTypes.UserRoleOrderBy || inputTypes.UserRoleOrderBy || commonTypes.UserRoleOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserRoleUpdateInput', () => {
    test('UserRoleUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserRoleUpdateInputSchema || inputSchemas.UserRoleUpdateInputSchema || commonSchemas.UserRoleUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserRoleUpdateInputInterface and UserRoleUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.UserRoleUpdateInputInterface || inputTypes.UserRoleUpdateInputInterface || commonTypes.UserRoleUpdateInputInterface;
      const classType = nodeTypes.UserRoleUpdateInput || inputTypes.UserRoleUpdateInput || commonTypes.UserRoleUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserUpdateInput', () => {
    test('UserUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserUpdateInputSchema || inputSchemas.UserUpdateInputSchema || commonSchemas.UserUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserUpdateInputInterface and UserUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.UserUpdateInputInterface || inputTypes.UserUpdateInputInterface || commonTypes.UserUpdateInputInterface;
      const classType = nodeTypes.UserUpdateInput || inputTypes.UserUpdateInput || commonTypes.UserUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UUIDFilter', () => {
    test('UUIDFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.UUIDFilterSchema || inputSchemas.UUIDFilterSchema || commonSchemas.UUIDFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UUIDFilterInterface and UUIDFilter should be defined', () => {
      const interfaceType = nodeTypes.UUIDFilterInterface || inputTypes.UUIDFilterInterface || commonTypes.UUIDFilterInterface;
      const classType = nodeTypes.UUIDFilter || inputTypes.UUIDFilter || commonTypes.UUIDFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UUIDListFilter', () => {
    test('UUIDListFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.UUIDListFilterSchema || inputSchemas.UUIDListFilterSchema || commonSchemas.UUIDListFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UUIDListFilterInterface and UUIDListFilter should be defined', () => {
      const interfaceType = nodeTypes.UUIDListFilterInterface || inputTypes.UUIDListFilterInterface || commonTypes.UUIDListFilterInterface;
      const classType = nodeTypes.UUIDListFilter || inputTypes.UUIDListFilter || commonTypes.UUIDListFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('VectorDatabaseFilter', () => {
    test('VectorDatabaseFilterSchema should be defined and valid', () => {
      const schema = nodeSchemas.VectorDatabaseFilterSchema || inputSchemas.VectorDatabaseFilterSchema || commonSchemas.VectorDatabaseFilterSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('VectorDatabaseFilterInterface and VectorDatabaseFilter should be defined', () => {
      const interfaceType = nodeTypes.VectorDatabaseFilterInterface || inputTypes.VectorDatabaseFilterInterface || commonTypes.VectorDatabaseFilterInterface;
      const classType = nodeTypes.VectorDatabaseFilter || inputTypes.VectorDatabaseFilter || commonTypes.VectorDatabaseFilter;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('VectorDatabaseInsertInput', () => {
    test('VectorDatabaseInsertInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.VectorDatabaseInsertInputSchema || inputSchemas.VectorDatabaseInsertInputSchema || commonSchemas.VectorDatabaseInsertInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('VectorDatabaseInsertInputInterface and VectorDatabaseInsertInput should be defined', () => {
      const interfaceType = nodeTypes.VectorDatabaseInsertInputInterface || inputTypes.VectorDatabaseInsertInputInterface || commonTypes.VectorDatabaseInsertInputInterface;
      const classType = nodeTypes.VectorDatabaseInsertInput || inputTypes.VectorDatabaseInsertInput || commonTypes.VectorDatabaseInsertInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('VectorDatabaseOrderBy', () => {
    test('VectorDatabaseOrderBySchema should be defined and valid', () => {
      const schema = nodeSchemas.VectorDatabaseOrderBySchema || inputSchemas.VectorDatabaseOrderBySchema || commonSchemas.VectorDatabaseOrderBySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('VectorDatabaseOrderByInterface and VectorDatabaseOrderBy should be defined', () => {
      const interfaceType = nodeTypes.VectorDatabaseOrderByInterface || inputTypes.VectorDatabaseOrderByInterface || commonTypes.VectorDatabaseOrderByInterface;
      const classType = nodeTypes.VectorDatabaseOrderBy || inputTypes.VectorDatabaseOrderBy || commonTypes.VectorDatabaseOrderBy;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('VectorDatabaseUpdateInput', () => {
    test('VectorDatabaseUpdateInputSchema should be defined and valid', () => {
      const schema = nodeSchemas.VectorDatabaseUpdateInputSchema || inputSchemas.VectorDatabaseUpdateInputSchema || commonSchemas.VectorDatabaseUpdateInputSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('VectorDatabaseUpdateInputInterface and VectorDatabaseUpdateInput should be defined', () => {
      const interfaceType = nodeTypes.VectorDatabaseUpdateInputInterface || inputTypes.VectorDatabaseUpdateInputInterface || commonTypes.VectorDatabaseUpdateInputInterface;
      const classType = nodeTypes.VectorDatabaseUpdateInput || inputTypes.VectorDatabaseUpdateInput || commonTypes.VectorDatabaseUpdateInput;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationDeleteResponse', () => {
    test('ApplicationDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationDeleteResponseSchema || inputSchemas.ApplicationDeleteResponseSchema || commonSchemas.ApplicationDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationDeleteResponseInterface and ApplicationDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ApplicationDeleteResponseInterface || inputTypes.ApplicationDeleteResponseInterface || commonTypes.ApplicationDeleteResponseInterface;
      const classType = nodeTypes.ApplicationDeleteResponse || inputTypes.ApplicationDeleteResponse || commonTypes.ApplicationDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationEdge', () => {
    test('ApplicationEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationEdgeSchema || inputSchemas.ApplicationEdgeSchema || commonSchemas.ApplicationEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationEdgeInterface and ApplicationEdge should be defined', () => {
      const interfaceType = nodeTypes.ApplicationEdgeInterface || inputTypes.ApplicationEdgeInterface || commonTypes.ApplicationEdgeInterface;
      const classType = nodeTypes.ApplicationEdge || inputTypes.ApplicationEdge || commonTypes.ApplicationEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationFeatureDeleteResponse', () => {
    test('ApplicationFeatureDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationFeatureDeleteResponseSchema || inputSchemas.ApplicationFeatureDeleteResponseSchema || commonSchemas.ApplicationFeatureDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationFeatureDeleteResponseInterface and ApplicationFeatureDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ApplicationFeatureDeleteResponseInterface || inputTypes.ApplicationFeatureDeleteResponseInterface || commonTypes.ApplicationFeatureDeleteResponseInterface;
      const classType = nodeTypes.ApplicationFeatureDeleteResponse || inputTypes.ApplicationFeatureDeleteResponse || commonTypes.ApplicationFeatureDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationFeatureEdge', () => {
    test('ApplicationFeatureEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationFeatureEdgeSchema || inputSchemas.ApplicationFeatureEdgeSchema || commonSchemas.ApplicationFeatureEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationFeatureEdgeInterface and ApplicationFeatureEdge should be defined', () => {
      const interfaceType = nodeTypes.ApplicationFeatureEdgeInterface || inputTypes.ApplicationFeatureEdgeInterface || commonTypes.ApplicationFeatureEdgeInterface;
      const classType = nodeTypes.ApplicationFeatureEdge || inputTypes.ApplicationFeatureEdge || commonTypes.ApplicationFeatureEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationFeatureInsertResponse', () => {
    test('ApplicationFeatureInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationFeatureInsertResponseSchema || inputSchemas.ApplicationFeatureInsertResponseSchema || commonSchemas.ApplicationFeatureInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationFeatureInsertResponseInterface and ApplicationFeatureInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ApplicationFeatureInsertResponseInterface || inputTypes.ApplicationFeatureInsertResponseInterface || commonTypes.ApplicationFeatureInsertResponseInterface;
      const classType = nodeTypes.ApplicationFeatureInsertResponse || inputTypes.ApplicationFeatureInsertResponse || commonTypes.ApplicationFeatureInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationFeatureUpdateResponse', () => {
    test('ApplicationFeatureUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationFeatureUpdateResponseSchema || inputSchemas.ApplicationFeatureUpdateResponseSchema || commonSchemas.ApplicationFeatureUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationFeatureUpdateResponseInterface and ApplicationFeatureUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ApplicationFeatureUpdateResponseInterface || inputTypes.ApplicationFeatureUpdateResponseInterface || commonTypes.ApplicationFeatureUpdateResponseInterface;
      const classType = nodeTypes.ApplicationFeatureUpdateResponse || inputTypes.ApplicationFeatureUpdateResponse || commonTypes.ApplicationFeatureUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationInsertResponse', () => {
    test('ApplicationInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationInsertResponseSchema || inputSchemas.ApplicationInsertResponseSchema || commonSchemas.ApplicationInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationInsertResponseInterface and ApplicationInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ApplicationInsertResponseInterface || inputTypes.ApplicationInsertResponseInterface || commonTypes.ApplicationInsertResponseInterface;
      const classType = nodeTypes.ApplicationInsertResponse || inputTypes.ApplicationInsertResponse || commonTypes.ApplicationInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationTypeDeleteResponse', () => {
    test('ApplicationTypeDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationTypeDeleteResponseSchema || inputSchemas.ApplicationTypeDeleteResponseSchema || commonSchemas.ApplicationTypeDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationTypeDeleteResponseInterface and ApplicationTypeDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ApplicationTypeDeleteResponseInterface || inputTypes.ApplicationTypeDeleteResponseInterface || commonTypes.ApplicationTypeDeleteResponseInterface;
      const classType = nodeTypes.ApplicationTypeDeleteResponse || inputTypes.ApplicationTypeDeleteResponse || commonTypes.ApplicationTypeDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationTypeEdge', () => {
    test('ApplicationTypeEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationTypeEdgeSchema || inputSchemas.ApplicationTypeEdgeSchema || commonSchemas.ApplicationTypeEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationTypeEdgeInterface and ApplicationTypeEdge should be defined', () => {
      const interfaceType = nodeTypes.ApplicationTypeEdgeInterface || inputTypes.ApplicationTypeEdgeInterface || commonTypes.ApplicationTypeEdgeInterface;
      const classType = nodeTypes.ApplicationTypeEdge || inputTypes.ApplicationTypeEdge || commonTypes.ApplicationTypeEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationTypeInsertResponse', () => {
    test('ApplicationTypeInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationTypeInsertResponseSchema || inputSchemas.ApplicationTypeInsertResponseSchema || commonSchemas.ApplicationTypeInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationTypeInsertResponseInterface and ApplicationTypeInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ApplicationTypeInsertResponseInterface || inputTypes.ApplicationTypeInsertResponseInterface || commonTypes.ApplicationTypeInsertResponseInterface;
      const classType = nodeTypes.ApplicationTypeInsertResponse || inputTypes.ApplicationTypeInsertResponse || commonTypes.ApplicationTypeInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationTypeUpdateResponse', () => {
    test('ApplicationTypeUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationTypeUpdateResponseSchema || inputSchemas.ApplicationTypeUpdateResponseSchema || commonSchemas.ApplicationTypeUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationTypeUpdateResponseInterface and ApplicationTypeUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ApplicationTypeUpdateResponseInterface || inputTypes.ApplicationTypeUpdateResponseInterface || commonTypes.ApplicationTypeUpdateResponseInterface;
      const classType = nodeTypes.ApplicationTypeUpdateResponse || inputTypes.ApplicationTypeUpdateResponse || commonTypes.ApplicationTypeUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ApplicationUpdateResponse', () => {
    test('ApplicationUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ApplicationUpdateResponseSchema || inputSchemas.ApplicationUpdateResponseSchema || commonSchemas.ApplicationUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ApplicationUpdateResponseInterface and ApplicationUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ApplicationUpdateResponseInterface || inputTypes.ApplicationUpdateResponseInterface || commonTypes.ApplicationUpdateResponseInterface;
      const classType = nodeTypes.ApplicationUpdateResponse || inputTypes.ApplicationUpdateResponse || commonTypes.ApplicationUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetCategoryDeleteResponse', () => {
    test('AssetCategoryDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetCategoryDeleteResponseSchema || inputSchemas.AssetCategoryDeleteResponseSchema || commonSchemas.AssetCategoryDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetCategoryDeleteResponseInterface and AssetCategoryDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.AssetCategoryDeleteResponseInterface || inputTypes.AssetCategoryDeleteResponseInterface || commonTypes.AssetCategoryDeleteResponseInterface;
      const classType = nodeTypes.AssetCategoryDeleteResponse || inputTypes.AssetCategoryDeleteResponse || commonTypes.AssetCategoryDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetCategoryEdge', () => {
    test('AssetCategoryEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetCategoryEdgeSchema || inputSchemas.AssetCategoryEdgeSchema || commonSchemas.AssetCategoryEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetCategoryEdgeInterface and AssetCategoryEdge should be defined', () => {
      const interfaceType = nodeTypes.AssetCategoryEdgeInterface || inputTypes.AssetCategoryEdgeInterface || commonTypes.AssetCategoryEdgeInterface;
      const classType = nodeTypes.AssetCategoryEdge || inputTypes.AssetCategoryEdge || commonTypes.AssetCategoryEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetCategoryInsertResponse', () => {
    test('AssetCategoryInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetCategoryInsertResponseSchema || inputSchemas.AssetCategoryInsertResponseSchema || commonSchemas.AssetCategoryInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetCategoryInsertResponseInterface and AssetCategoryInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.AssetCategoryInsertResponseInterface || inputTypes.AssetCategoryInsertResponseInterface || commonTypes.AssetCategoryInsertResponseInterface;
      const classType = nodeTypes.AssetCategoryInsertResponse || inputTypes.AssetCategoryInsertResponse || commonTypes.AssetCategoryInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetCategoryUpdateResponse', () => {
    test('AssetCategoryUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetCategoryUpdateResponseSchema || inputSchemas.AssetCategoryUpdateResponseSchema || commonSchemas.AssetCategoryUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetCategoryUpdateResponseInterface and AssetCategoryUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.AssetCategoryUpdateResponseInterface || inputTypes.AssetCategoryUpdateResponseInterface || commonTypes.AssetCategoryUpdateResponseInterface;
      const classType = nodeTypes.AssetCategoryUpdateResponse || inputTypes.AssetCategoryUpdateResponse || commonTypes.AssetCategoryUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetDeleteResponse', () => {
    test('AssetDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetDeleteResponseSchema || inputSchemas.AssetDeleteResponseSchema || commonSchemas.AssetDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetDeleteResponseInterface and AssetDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.AssetDeleteResponseInterface || inputTypes.AssetDeleteResponseInterface || commonTypes.AssetDeleteResponseInterface;
      const classType = nodeTypes.AssetDeleteResponse || inputTypes.AssetDeleteResponse || commonTypes.AssetDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetEdge', () => {
    test('AssetEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetEdgeSchema || inputSchemas.AssetEdgeSchema || commonSchemas.AssetEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetEdgeInterface and AssetEdge should be defined', () => {
      const interfaceType = nodeTypes.AssetEdgeInterface || inputTypes.AssetEdgeInterface || commonTypes.AssetEdgeInterface;
      const classType = nodeTypes.AssetEdge || inputTypes.AssetEdge || commonTypes.AssetEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetInsertResponse', () => {
    test('AssetInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetInsertResponseSchema || inputSchemas.AssetInsertResponseSchema || commonSchemas.AssetInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetInsertResponseInterface and AssetInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.AssetInsertResponseInterface || inputTypes.AssetInsertResponseInterface || commonTypes.AssetInsertResponseInterface;
      const classType = nodeTypes.AssetInsertResponse || inputTypes.AssetInsertResponse || commonTypes.AssetInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetStatusDeleteResponse', () => {
    test('AssetStatusDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetStatusDeleteResponseSchema || inputSchemas.AssetStatusDeleteResponseSchema || commonSchemas.AssetStatusDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetStatusDeleteResponseInterface and AssetStatusDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.AssetStatusDeleteResponseInterface || inputTypes.AssetStatusDeleteResponseInterface || commonTypes.AssetStatusDeleteResponseInterface;
      const classType = nodeTypes.AssetStatusDeleteResponse || inputTypes.AssetStatusDeleteResponse || commonTypes.AssetStatusDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetStatusEdge', () => {
    test('AssetStatusEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetStatusEdgeSchema || inputSchemas.AssetStatusEdgeSchema || commonSchemas.AssetStatusEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetStatusEdgeInterface and AssetStatusEdge should be defined', () => {
      const interfaceType = nodeTypes.AssetStatusEdgeInterface || inputTypes.AssetStatusEdgeInterface || commonTypes.AssetStatusEdgeInterface;
      const classType = nodeTypes.AssetStatusEdge || inputTypes.AssetStatusEdge || commonTypes.AssetStatusEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetStatusInsertResponse', () => {
    test('AssetStatusInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetStatusInsertResponseSchema || inputSchemas.AssetStatusInsertResponseSchema || commonSchemas.AssetStatusInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetStatusInsertResponseInterface and AssetStatusInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.AssetStatusInsertResponseInterface || inputTypes.AssetStatusInsertResponseInterface || commonTypes.AssetStatusInsertResponseInterface;
      const classType = nodeTypes.AssetStatusInsertResponse || inputTypes.AssetStatusInsertResponse || commonTypes.AssetStatusInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetStatusUpdateResponse', () => {
    test('AssetStatusUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetStatusUpdateResponseSchema || inputSchemas.AssetStatusUpdateResponseSchema || commonSchemas.AssetStatusUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetStatusUpdateResponseInterface and AssetStatusUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.AssetStatusUpdateResponseInterface || inputTypes.AssetStatusUpdateResponseInterface || commonTypes.AssetStatusUpdateResponseInterface;
      const classType = nodeTypes.AssetStatusUpdateResponse || inputTypes.AssetStatusUpdateResponse || commonTypes.AssetStatusUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetTypeDeleteResponse', () => {
    test('AssetTypeDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetTypeDeleteResponseSchema || inputSchemas.AssetTypeDeleteResponseSchema || commonSchemas.AssetTypeDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetTypeDeleteResponseInterface and AssetTypeDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.AssetTypeDeleteResponseInterface || inputTypes.AssetTypeDeleteResponseInterface || commonTypes.AssetTypeDeleteResponseInterface;
      const classType = nodeTypes.AssetTypeDeleteResponse || inputTypes.AssetTypeDeleteResponse || commonTypes.AssetTypeDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetTypeEdge', () => {
    test('AssetTypeEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetTypeEdgeSchema || inputSchemas.AssetTypeEdgeSchema || commonSchemas.AssetTypeEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetTypeEdgeInterface and AssetTypeEdge should be defined', () => {
      const interfaceType = nodeTypes.AssetTypeEdgeInterface || inputTypes.AssetTypeEdgeInterface || commonTypes.AssetTypeEdgeInterface;
      const classType = nodeTypes.AssetTypeEdge || inputTypes.AssetTypeEdge || commonTypes.AssetTypeEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetTypeInsertResponse', () => {
    test('AssetTypeInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetTypeInsertResponseSchema || inputSchemas.AssetTypeInsertResponseSchema || commonSchemas.AssetTypeInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetTypeInsertResponseInterface and AssetTypeInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.AssetTypeInsertResponseInterface || inputTypes.AssetTypeInsertResponseInterface || commonTypes.AssetTypeInsertResponseInterface;
      const classType = nodeTypes.AssetTypeInsertResponse || inputTypes.AssetTypeInsertResponse || commonTypes.AssetTypeInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetTypeUpdateResponse', () => {
    test('AssetTypeUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetTypeUpdateResponseSchema || inputSchemas.AssetTypeUpdateResponseSchema || commonSchemas.AssetTypeUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetTypeUpdateResponseInterface and AssetTypeUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.AssetTypeUpdateResponseInterface || inputTypes.AssetTypeUpdateResponseInterface || commonTypes.AssetTypeUpdateResponseInterface;
      const classType = nodeTypes.AssetTypeUpdateResponse || inputTypes.AssetTypeUpdateResponse || commonTypes.AssetTypeUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('AssetUpdateResponse', () => {
    test('AssetUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.AssetUpdateResponseSchema || inputSchemas.AssetUpdateResponseSchema || commonSchemas.AssetUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('AssetUpdateResponseInterface and AssetUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.AssetUpdateResponseInterface || inputTypes.AssetUpdateResponseInterface || commonTypes.AssetUpdateResponseInterface;
      const classType = nodeTypes.AssetUpdateResponse || inputTypes.AssetUpdateResponse || commonTypes.AssetUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BillingPeriodDeleteResponse', () => {
    test('BillingPeriodDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.BillingPeriodDeleteResponseSchema || inputSchemas.BillingPeriodDeleteResponseSchema || commonSchemas.BillingPeriodDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BillingPeriodDeleteResponseInterface and BillingPeriodDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.BillingPeriodDeleteResponseInterface || inputTypes.BillingPeriodDeleteResponseInterface || commonTypes.BillingPeriodDeleteResponseInterface;
      const classType = nodeTypes.BillingPeriodDeleteResponse || inputTypes.BillingPeriodDeleteResponse || commonTypes.BillingPeriodDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BillingPeriodEdge', () => {
    test('BillingPeriodEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.BillingPeriodEdgeSchema || inputSchemas.BillingPeriodEdgeSchema || commonSchemas.BillingPeriodEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BillingPeriodEdgeInterface and BillingPeriodEdge should be defined', () => {
      const interfaceType = nodeTypes.BillingPeriodEdgeInterface || inputTypes.BillingPeriodEdgeInterface || commonTypes.BillingPeriodEdgeInterface;
      const classType = nodeTypes.BillingPeriodEdge || inputTypes.BillingPeriodEdge || commonTypes.BillingPeriodEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BillingPeriodInsertResponse', () => {
    test('BillingPeriodInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.BillingPeriodInsertResponseSchema || inputSchemas.BillingPeriodInsertResponseSchema || commonSchemas.BillingPeriodInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BillingPeriodInsertResponseInterface and BillingPeriodInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.BillingPeriodInsertResponseInterface || inputTypes.BillingPeriodInsertResponseInterface || commonTypes.BillingPeriodInsertResponseInterface;
      const classType = nodeTypes.BillingPeriodInsertResponse || inputTypes.BillingPeriodInsertResponse || commonTypes.BillingPeriodInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('BillingPeriodUpdateResponse', () => {
    test('BillingPeriodUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.BillingPeriodUpdateResponseSchema || inputSchemas.BillingPeriodUpdateResponseSchema || commonSchemas.BillingPeriodUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('BillingPeriodUpdateResponseInterface and BillingPeriodUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.BillingPeriodUpdateResponseInterface || inputTypes.BillingPeriodUpdateResponseInterface || commonTypes.BillingPeriodUpdateResponseInterface;
      const classType = nodeTypes.BillingPeriodUpdateResponse || inputTypes.BillingPeriodUpdateResponse || commonTypes.BillingPeriodUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CategoryDeleteResponse', () => {
    test('CategoryDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.CategoryDeleteResponseSchema || inputSchemas.CategoryDeleteResponseSchema || commonSchemas.CategoryDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CategoryDeleteResponseInterface and CategoryDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.CategoryDeleteResponseInterface || inputTypes.CategoryDeleteResponseInterface || commonTypes.CategoryDeleteResponseInterface;
      const classType = nodeTypes.CategoryDeleteResponse || inputTypes.CategoryDeleteResponse || commonTypes.CategoryDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CategoryEdge', () => {
    test('CategoryEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.CategoryEdgeSchema || inputSchemas.CategoryEdgeSchema || commonSchemas.CategoryEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CategoryEdgeInterface and CategoryEdge should be defined', () => {
      const interfaceType = nodeTypes.CategoryEdgeInterface || inputTypes.CategoryEdgeInterface || commonTypes.CategoryEdgeInterface;
      const classType = nodeTypes.CategoryEdge || inputTypes.CategoryEdge || commonTypes.CategoryEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CategoryInsertResponse', () => {
    test('CategoryInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.CategoryInsertResponseSchema || inputSchemas.CategoryInsertResponseSchema || commonSchemas.CategoryInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CategoryInsertResponseInterface and CategoryInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.CategoryInsertResponseInterface || inputTypes.CategoryInsertResponseInterface || commonTypes.CategoryInsertResponseInterface;
      const classType = nodeTypes.CategoryInsertResponse || inputTypes.CategoryInsertResponse || commonTypes.CategoryInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CategoryUpdateResponse', () => {
    test('CategoryUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.CategoryUpdateResponseSchema || inputSchemas.CategoryUpdateResponseSchema || commonSchemas.CategoryUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CategoryUpdateResponseInterface and CategoryUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.CategoryUpdateResponseInterface || inputTypes.CategoryUpdateResponseInterface || commonTypes.CategoryUpdateResponseInterface;
      const classType = nodeTypes.CategoryUpdateResponse || inputTypes.CategoryUpdateResponse || commonTypes.CategoryUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatMessageDeleteResponse', () => {
    test('ChatMessageDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatMessageDeleteResponseSchema || inputSchemas.ChatMessageDeleteResponseSchema || commonSchemas.ChatMessageDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatMessageDeleteResponseInterface and ChatMessageDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ChatMessageDeleteResponseInterface || inputTypes.ChatMessageDeleteResponseInterface || commonTypes.ChatMessageDeleteResponseInterface;
      const classType = nodeTypes.ChatMessageDeleteResponse || inputTypes.ChatMessageDeleteResponse || commonTypes.ChatMessageDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatMessageEdge', () => {
    test('ChatMessageEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatMessageEdgeSchema || inputSchemas.ChatMessageEdgeSchema || commonSchemas.ChatMessageEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatMessageEdgeInterface and ChatMessageEdge should be defined', () => {
      const interfaceType = nodeTypes.ChatMessageEdgeInterface || inputTypes.ChatMessageEdgeInterface || commonTypes.ChatMessageEdgeInterface;
      const classType = nodeTypes.ChatMessageEdge || inputTypes.ChatMessageEdge || commonTypes.ChatMessageEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatMessageInsertResponse', () => {
    test('ChatMessageInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatMessageInsertResponseSchema || inputSchemas.ChatMessageInsertResponseSchema || commonSchemas.ChatMessageInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatMessageInsertResponseInterface and ChatMessageInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ChatMessageInsertResponseInterface || inputTypes.ChatMessageInsertResponseInterface || commonTypes.ChatMessageInsertResponseInterface;
      const classType = nodeTypes.ChatMessageInsertResponse || inputTypes.ChatMessageInsertResponse || commonTypes.ChatMessageInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatMessageUpdateResponse', () => {
    test('ChatMessageUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatMessageUpdateResponseSchema || inputSchemas.ChatMessageUpdateResponseSchema || commonSchemas.ChatMessageUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatMessageUpdateResponseInterface and ChatMessageUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ChatMessageUpdateResponseInterface || inputTypes.ChatMessageUpdateResponseInterface || commonTypes.ChatMessageUpdateResponseInterface;
      const classType = nodeTypes.ChatMessageUpdateResponse || inputTypes.ChatMessageUpdateResponse || commonTypes.ChatMessageUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatRoleDeleteResponse', () => {
    test('ChatRoleDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatRoleDeleteResponseSchema || inputSchemas.ChatRoleDeleteResponseSchema || commonSchemas.ChatRoleDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatRoleDeleteResponseInterface and ChatRoleDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ChatRoleDeleteResponseInterface || inputTypes.ChatRoleDeleteResponseInterface || commonTypes.ChatRoleDeleteResponseInterface;
      const classType = nodeTypes.ChatRoleDeleteResponse || inputTypes.ChatRoleDeleteResponse || commonTypes.ChatRoleDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatRoleEdge', () => {
    test('ChatRoleEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatRoleEdgeSchema || inputSchemas.ChatRoleEdgeSchema || commonSchemas.ChatRoleEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatRoleEdgeInterface and ChatRoleEdge should be defined', () => {
      const interfaceType = nodeTypes.ChatRoleEdgeInterface || inputTypes.ChatRoleEdgeInterface || commonTypes.ChatRoleEdgeInterface;
      const classType = nodeTypes.ChatRoleEdge || inputTypes.ChatRoleEdge || commonTypes.ChatRoleEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatRoleInsertResponse', () => {
    test('ChatRoleInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatRoleInsertResponseSchema || inputSchemas.ChatRoleInsertResponseSchema || commonSchemas.ChatRoleInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatRoleInsertResponseInterface and ChatRoleInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ChatRoleInsertResponseInterface || inputTypes.ChatRoleInsertResponseInterface || commonTypes.ChatRoleInsertResponseInterface;
      const classType = nodeTypes.ChatRoleInsertResponse || inputTypes.ChatRoleInsertResponse || commonTypes.ChatRoleInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatRoleUpdateResponse', () => {
    test('ChatRoleUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatRoleUpdateResponseSchema || inputSchemas.ChatRoleUpdateResponseSchema || commonSchemas.ChatRoleUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatRoleUpdateResponseInterface and ChatRoleUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ChatRoleUpdateResponseInterface || inputTypes.ChatRoleUpdateResponseInterface || commonTypes.ChatRoleUpdateResponseInterface;
      const classType = nodeTypes.ChatRoleUpdateResponse || inputTypes.ChatRoleUpdateResponse || commonTypes.ChatRoleUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatSessionDeleteResponse', () => {
    test('ChatSessionDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatSessionDeleteResponseSchema || inputSchemas.ChatSessionDeleteResponseSchema || commonSchemas.ChatSessionDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatSessionDeleteResponseInterface and ChatSessionDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ChatSessionDeleteResponseInterface || inputTypes.ChatSessionDeleteResponseInterface || commonTypes.ChatSessionDeleteResponseInterface;
      const classType = nodeTypes.ChatSessionDeleteResponse || inputTypes.ChatSessionDeleteResponse || commonTypes.ChatSessionDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatSessionEdge', () => {
    test('ChatSessionEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatSessionEdgeSchema || inputSchemas.ChatSessionEdgeSchema || commonSchemas.ChatSessionEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatSessionEdgeInterface and ChatSessionEdge should be defined', () => {
      const interfaceType = nodeTypes.ChatSessionEdgeInterface || inputTypes.ChatSessionEdgeInterface || commonTypes.ChatSessionEdgeInterface;
      const classType = nodeTypes.ChatSessionEdge || inputTypes.ChatSessionEdge || commonTypes.ChatSessionEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatSessionInsertResponse', () => {
    test('ChatSessionInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatSessionInsertResponseSchema || inputSchemas.ChatSessionInsertResponseSchema || commonSchemas.ChatSessionInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatSessionInsertResponseInterface and ChatSessionInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ChatSessionInsertResponseInterface || inputTypes.ChatSessionInsertResponseInterface || commonTypes.ChatSessionInsertResponseInterface;
      const classType = nodeTypes.ChatSessionInsertResponse || inputTypes.ChatSessionInsertResponse || commonTypes.ChatSessionInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ChatSessionUpdateResponse', () => {
    test('ChatSessionUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ChatSessionUpdateResponseSchema || inputSchemas.ChatSessionUpdateResponseSchema || commonSchemas.ChatSessionUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ChatSessionUpdateResponseInterface and ChatSessionUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ChatSessionUpdateResponseInterface || inputTypes.ChatSessionUpdateResponseInterface || commonTypes.ChatSessionUpdateResponseInterface;
      const classType = nodeTypes.ChatSessionUpdateResponse || inputTypes.ChatSessionUpdateResponse || commonTypes.ChatSessionUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentContentPartDeleteResponse', () => {
    test('ContentContentPartDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentContentPartDeleteResponseSchema || inputSchemas.ContentContentPartDeleteResponseSchema || commonSchemas.ContentContentPartDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentContentPartDeleteResponseInterface and ContentContentPartDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentContentPartDeleteResponseInterface || inputTypes.ContentContentPartDeleteResponseInterface || commonTypes.ContentContentPartDeleteResponseInterface;
      const classType = nodeTypes.ContentContentPartDeleteResponse || inputTypes.ContentContentPartDeleteResponse || commonTypes.ContentContentPartDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentContentPartEdge', () => {
    test('ContentContentPartEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentContentPartEdgeSchema || inputSchemas.ContentContentPartEdgeSchema || commonSchemas.ContentContentPartEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentContentPartEdgeInterface and ContentContentPartEdge should be defined', () => {
      const interfaceType = nodeTypes.ContentContentPartEdgeInterface || inputTypes.ContentContentPartEdgeInterface || commonTypes.ContentContentPartEdgeInterface;
      const classType = nodeTypes.ContentContentPartEdge || inputTypes.ContentContentPartEdge || commonTypes.ContentContentPartEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentContentPartInsertResponse', () => {
    test('ContentContentPartInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentContentPartInsertResponseSchema || inputSchemas.ContentContentPartInsertResponseSchema || commonSchemas.ContentContentPartInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentContentPartInsertResponseInterface and ContentContentPartInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentContentPartInsertResponseInterface || inputTypes.ContentContentPartInsertResponseInterface || commonTypes.ContentContentPartInsertResponseInterface;
      const classType = nodeTypes.ContentContentPartInsertResponse || inputTypes.ContentContentPartInsertResponse || commonTypes.ContentContentPartInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentContentPartUpdateResponse', () => {
    test('ContentContentPartUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentContentPartUpdateResponseSchema || inputSchemas.ContentContentPartUpdateResponseSchema || commonSchemas.ContentContentPartUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentContentPartUpdateResponseInterface and ContentContentPartUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentContentPartUpdateResponseInterface || inputTypes.ContentContentPartUpdateResponseInterface || commonTypes.ContentContentPartUpdateResponseInterface;
      const classType = nodeTypes.ContentContentPartUpdateResponse || inputTypes.ContentContentPartUpdateResponse || commonTypes.ContentContentPartUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentDeleteResponse', () => {
    test('ContentDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentDeleteResponseSchema || inputSchemas.ContentDeleteResponseSchema || commonSchemas.ContentDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentDeleteResponseInterface and ContentDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentDeleteResponseInterface || inputTypes.ContentDeleteResponseInterface || commonTypes.ContentDeleteResponseInterface;
      const classType = nodeTypes.ContentDeleteResponse || inputTypes.ContentDeleteResponse || commonTypes.ContentDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentEdge', () => {
    test('ContentEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentEdgeSchema || inputSchemas.ContentEdgeSchema || commonSchemas.ContentEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentEdgeInterface and ContentEdge should be defined', () => {
      const interfaceType = nodeTypes.ContentEdgeInterface || inputTypes.ContentEdgeInterface || commonTypes.ContentEdgeInterface;
      const classType = nodeTypes.ContentEdge || inputTypes.ContentEdge || commonTypes.ContentEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentInsertResponse', () => {
    test('ContentInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentInsertResponseSchema || inputSchemas.ContentInsertResponseSchema || commonSchemas.ContentInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentInsertResponseInterface and ContentInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentInsertResponseInterface || inputTypes.ContentInsertResponseInterface || commonTypes.ContentInsertResponseInterface;
      const classType = nodeTypes.ContentInsertResponse || inputTypes.ContentInsertResponse || commonTypes.ContentInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartContentPartDeleteResponse', () => {
    test('ContentPartContentPartDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartContentPartDeleteResponseSchema || inputSchemas.ContentPartContentPartDeleteResponseSchema || commonSchemas.ContentPartContentPartDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartContentPartDeleteResponseInterface and ContentPartContentPartDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentPartContentPartDeleteResponseInterface || inputTypes.ContentPartContentPartDeleteResponseInterface || commonTypes.ContentPartContentPartDeleteResponseInterface;
      const classType = nodeTypes.ContentPartContentPartDeleteResponse || inputTypes.ContentPartContentPartDeleteResponse || commonTypes.ContentPartContentPartDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartContentPartEdge', () => {
    test('ContentPartContentPartEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartContentPartEdgeSchema || inputSchemas.ContentPartContentPartEdgeSchema || commonSchemas.ContentPartContentPartEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartContentPartEdgeInterface and ContentPartContentPartEdge should be defined', () => {
      const interfaceType = nodeTypes.ContentPartContentPartEdgeInterface || inputTypes.ContentPartContentPartEdgeInterface || commonTypes.ContentPartContentPartEdgeInterface;
      const classType = nodeTypes.ContentPartContentPartEdge || inputTypes.ContentPartContentPartEdge || commonTypes.ContentPartContentPartEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartContentPartInsertResponse', () => {
    test('ContentPartContentPartInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartContentPartInsertResponseSchema || inputSchemas.ContentPartContentPartInsertResponseSchema || commonSchemas.ContentPartContentPartInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartContentPartInsertResponseInterface and ContentPartContentPartInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentPartContentPartInsertResponseInterface || inputTypes.ContentPartContentPartInsertResponseInterface || commonTypes.ContentPartContentPartInsertResponseInterface;
      const classType = nodeTypes.ContentPartContentPartInsertResponse || inputTypes.ContentPartContentPartInsertResponse || commonTypes.ContentPartContentPartInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartContentPartUpdateResponse', () => {
    test('ContentPartContentPartUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartContentPartUpdateResponseSchema || inputSchemas.ContentPartContentPartUpdateResponseSchema || commonSchemas.ContentPartContentPartUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartContentPartUpdateResponseInterface and ContentPartContentPartUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentPartContentPartUpdateResponseInterface || inputTypes.ContentPartContentPartUpdateResponseInterface || commonTypes.ContentPartContentPartUpdateResponseInterface;
      const classType = nodeTypes.ContentPartContentPartUpdateResponse || inputTypes.ContentPartContentPartUpdateResponse || commonTypes.ContentPartContentPartUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartDeleteResponse', () => {
    test('ContentPartDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartDeleteResponseSchema || inputSchemas.ContentPartDeleteResponseSchema || commonSchemas.ContentPartDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartDeleteResponseInterface and ContentPartDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentPartDeleteResponseInterface || inputTypes.ContentPartDeleteResponseInterface || commonTypes.ContentPartDeleteResponseInterface;
      const classType = nodeTypes.ContentPartDeleteResponse || inputTypes.ContentPartDeleteResponse || commonTypes.ContentPartDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartEdge', () => {
    test('ContentPartEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartEdgeSchema || inputSchemas.ContentPartEdgeSchema || commonSchemas.ContentPartEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartEdgeInterface and ContentPartEdge should be defined', () => {
      const interfaceType = nodeTypes.ContentPartEdgeInterface || inputTypes.ContentPartEdgeInterface || commonTypes.ContentPartEdgeInterface;
      const classType = nodeTypes.ContentPartEdge || inputTypes.ContentPartEdge || commonTypes.ContentPartEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartInsertResponse', () => {
    test('ContentPartInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartInsertResponseSchema || inputSchemas.ContentPartInsertResponseSchema || commonSchemas.ContentPartInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartInsertResponseInterface and ContentPartInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentPartInsertResponseInterface || inputTypes.ContentPartInsertResponseInterface || commonTypes.ContentPartInsertResponseInterface;
      const classType = nodeTypes.ContentPartInsertResponse || inputTypes.ContentPartInsertResponse || commonTypes.ContentPartInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentPartUpdateResponse', () => {
    test('ContentPartUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentPartUpdateResponseSchema || inputSchemas.ContentPartUpdateResponseSchema || commonSchemas.ContentPartUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentPartUpdateResponseInterface and ContentPartUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentPartUpdateResponseInterface || inputTypes.ContentPartUpdateResponseInterface || commonTypes.ContentPartUpdateResponseInterface;
      const classType = nodeTypes.ContentPartUpdateResponse || inputTypes.ContentPartUpdateResponse || commonTypes.ContentPartUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateDeleteResponse', () => {
    test('ContentTemplateDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateDeleteResponseSchema || inputSchemas.ContentTemplateDeleteResponseSchema || commonSchemas.ContentTemplateDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateDeleteResponseInterface and ContentTemplateDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateDeleteResponseInterface || inputTypes.ContentTemplateDeleteResponseInterface || commonTypes.ContentTemplateDeleteResponseInterface;
      const classType = nodeTypes.ContentTemplateDeleteResponse || inputTypes.ContentTemplateDeleteResponse || commonTypes.ContentTemplateDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateEdge', () => {
    test('ContentTemplateEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateEdgeSchema || inputSchemas.ContentTemplateEdgeSchema || commonSchemas.ContentTemplateEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateEdgeInterface and ContentTemplateEdge should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateEdgeInterface || inputTypes.ContentTemplateEdgeInterface || commonTypes.ContentTemplateEdgeInterface;
      const classType = nodeTypes.ContentTemplateEdge || inputTypes.ContentTemplateEdge || commonTypes.ContentTemplateEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateInsertResponse', () => {
    test('ContentTemplateInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateInsertResponseSchema || inputSchemas.ContentTemplateInsertResponseSchema || commonSchemas.ContentTemplateInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateInsertResponseInterface and ContentTemplateInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateInsertResponseInterface || inputTypes.ContentTemplateInsertResponseInterface || commonTypes.ContentTemplateInsertResponseInterface;
      const classType = nodeTypes.ContentTemplateInsertResponse || inputTypes.ContentTemplateInsertResponse || commonTypes.ContentTemplateInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateUpdateResponse', () => {
    test('ContentTemplateUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateUpdateResponseSchema || inputSchemas.ContentTemplateUpdateResponseSchema || commonSchemas.ContentTemplateUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateUpdateResponseInterface and ContentTemplateUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateUpdateResponseInterface || inputTypes.ContentTemplateUpdateResponseInterface || commonTypes.ContentTemplateUpdateResponseInterface;
      const classType = nodeTypes.ContentTemplateUpdateResponse || inputTypes.ContentTemplateUpdateResponse || commonTypes.ContentTemplateUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableDeleteResponse', () => {
    test('ContentTemplateVariableDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableDeleteResponseSchema || inputSchemas.ContentTemplateVariableDeleteResponseSchema || commonSchemas.ContentTemplateVariableDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableDeleteResponseInterface and ContentTemplateVariableDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableDeleteResponseInterface || inputTypes.ContentTemplateVariableDeleteResponseInterface || commonTypes.ContentTemplateVariableDeleteResponseInterface;
      const classType = nodeTypes.ContentTemplateVariableDeleteResponse || inputTypes.ContentTemplateVariableDeleteResponse || commonTypes.ContentTemplateVariableDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableEdge', () => {
    test('ContentTemplateVariableEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableEdgeSchema || inputSchemas.ContentTemplateVariableEdgeSchema || commonSchemas.ContentTemplateVariableEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableEdgeInterface and ContentTemplateVariableEdge should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableEdgeInterface || inputTypes.ContentTemplateVariableEdgeInterface || commonTypes.ContentTemplateVariableEdgeInterface;
      const classType = nodeTypes.ContentTemplateVariableEdge || inputTypes.ContentTemplateVariableEdge || commonTypes.ContentTemplateVariableEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableInsertResponse', () => {
    test('ContentTemplateVariableInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableInsertResponseSchema || inputSchemas.ContentTemplateVariableInsertResponseSchema || commonSchemas.ContentTemplateVariableInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableInsertResponseInterface and ContentTemplateVariableInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableInsertResponseInterface || inputTypes.ContentTemplateVariableInsertResponseInterface || commonTypes.ContentTemplateVariableInsertResponseInterface;
      const classType = nodeTypes.ContentTemplateVariableInsertResponse || inputTypes.ContentTemplateVariableInsertResponse || commonTypes.ContentTemplateVariableInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableUpdateResponse', () => {
    test('ContentTemplateVariableUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableUpdateResponseSchema || inputSchemas.ContentTemplateVariableUpdateResponseSchema || commonSchemas.ContentTemplateVariableUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableUpdateResponseInterface and ContentTemplateVariableUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableUpdateResponseInterface || inputTypes.ContentTemplateVariableUpdateResponseInterface || commonTypes.ContentTemplateVariableUpdateResponseInterface;
      const classType = nodeTypes.ContentTemplateVariableUpdateResponse || inputTypes.ContentTemplateVariableUpdateResponse || commonTypes.ContentTemplateVariableUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableValueDeleteResponse', () => {
    test('ContentTemplateVariableValueDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableValueDeleteResponseSchema || inputSchemas.ContentTemplateVariableValueDeleteResponseSchema || commonSchemas.ContentTemplateVariableValueDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableValueDeleteResponseInterface and ContentTemplateVariableValueDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableValueDeleteResponseInterface || inputTypes.ContentTemplateVariableValueDeleteResponseInterface || commonTypes.ContentTemplateVariableValueDeleteResponseInterface;
      const classType = nodeTypes.ContentTemplateVariableValueDeleteResponse || inputTypes.ContentTemplateVariableValueDeleteResponse || commonTypes.ContentTemplateVariableValueDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableValueEdge', () => {
    test('ContentTemplateVariableValueEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableValueEdgeSchema || inputSchemas.ContentTemplateVariableValueEdgeSchema || commonSchemas.ContentTemplateVariableValueEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableValueEdgeInterface and ContentTemplateVariableValueEdge should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableValueEdgeInterface || inputTypes.ContentTemplateVariableValueEdgeInterface || commonTypes.ContentTemplateVariableValueEdgeInterface;
      const classType = nodeTypes.ContentTemplateVariableValueEdge || inputTypes.ContentTemplateVariableValueEdge || commonTypes.ContentTemplateVariableValueEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableValueInsertResponse', () => {
    test('ContentTemplateVariableValueInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableValueInsertResponseSchema || inputSchemas.ContentTemplateVariableValueInsertResponseSchema || commonSchemas.ContentTemplateVariableValueInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableValueInsertResponseInterface and ContentTemplateVariableValueInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableValueInsertResponseInterface || inputTypes.ContentTemplateVariableValueInsertResponseInterface || commonTypes.ContentTemplateVariableValueInsertResponseInterface;
      const classType = nodeTypes.ContentTemplateVariableValueInsertResponse || inputTypes.ContentTemplateVariableValueInsertResponse || commonTypes.ContentTemplateVariableValueInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTemplateVariableValueUpdateResponse', () => {
    test('ContentTemplateVariableValueUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTemplateVariableValueUpdateResponseSchema || inputSchemas.ContentTemplateVariableValueUpdateResponseSchema || commonSchemas.ContentTemplateVariableValueUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTemplateVariableValueUpdateResponseInterface and ContentTemplateVariableValueUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentTemplateVariableValueUpdateResponseInterface || inputTypes.ContentTemplateVariableValueUpdateResponseInterface || commonTypes.ContentTemplateVariableValueUpdateResponseInterface;
      const classType = nodeTypes.ContentTemplateVariableValueUpdateResponse || inputTypes.ContentTemplateVariableValueUpdateResponse || commonTypes.ContentTemplateVariableValueUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTypeDeleteResponse', () => {
    test('ContentTypeDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTypeDeleteResponseSchema || inputSchemas.ContentTypeDeleteResponseSchema || commonSchemas.ContentTypeDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTypeDeleteResponseInterface and ContentTypeDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentTypeDeleteResponseInterface || inputTypes.ContentTypeDeleteResponseInterface || commonTypes.ContentTypeDeleteResponseInterface;
      const classType = nodeTypes.ContentTypeDeleteResponse || inputTypes.ContentTypeDeleteResponse || commonTypes.ContentTypeDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTypeEdge', () => {
    test('ContentTypeEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTypeEdgeSchema || inputSchemas.ContentTypeEdgeSchema || commonSchemas.ContentTypeEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTypeEdgeInterface and ContentTypeEdge should be defined', () => {
      const interfaceType = nodeTypes.ContentTypeEdgeInterface || inputTypes.ContentTypeEdgeInterface || commonTypes.ContentTypeEdgeInterface;
      const classType = nodeTypes.ContentTypeEdge || inputTypes.ContentTypeEdge || commonTypes.ContentTypeEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTypeInsertResponse', () => {
    test('ContentTypeInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTypeInsertResponseSchema || inputSchemas.ContentTypeInsertResponseSchema || commonSchemas.ContentTypeInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTypeInsertResponseInterface and ContentTypeInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentTypeInsertResponseInterface || inputTypes.ContentTypeInsertResponseInterface || commonTypes.ContentTypeInsertResponseInterface;
      const classType = nodeTypes.ContentTypeInsertResponse || inputTypes.ContentTypeInsertResponse || commonTypes.ContentTypeInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentTypeUpdateResponse', () => {
    test('ContentTypeUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentTypeUpdateResponseSchema || inputSchemas.ContentTypeUpdateResponseSchema || commonSchemas.ContentTypeUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentTypeUpdateResponseInterface and ContentTypeUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentTypeUpdateResponseInterface || inputTypes.ContentTypeUpdateResponseInterface || commonTypes.ContentTypeUpdateResponseInterface;
      const classType = nodeTypes.ContentTypeUpdateResponse || inputTypes.ContentTypeUpdateResponse || commonTypes.ContentTypeUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentUpdateResponse', () => {
    test('ContentUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentUpdateResponseSchema || inputSchemas.ContentUpdateResponseSchema || commonSchemas.ContentUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentUpdateResponseInterface and ContentUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentUpdateResponseInterface || inputTypes.ContentUpdateResponseInterface || commonTypes.ContentUpdateResponseInterface;
      const classType = nodeTypes.ContentUpdateResponse || inputTypes.ContentUpdateResponse || commonTypes.ContentUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentVectorDatabaseDeleteResponse', () => {
    test('ContentVectorDatabaseDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentVectorDatabaseDeleteResponseSchema || inputSchemas.ContentVectorDatabaseDeleteResponseSchema || commonSchemas.ContentVectorDatabaseDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentVectorDatabaseDeleteResponseInterface and ContentVectorDatabaseDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentVectorDatabaseDeleteResponseInterface || inputTypes.ContentVectorDatabaseDeleteResponseInterface || commonTypes.ContentVectorDatabaseDeleteResponseInterface;
      const classType = nodeTypes.ContentVectorDatabaseDeleteResponse || inputTypes.ContentVectorDatabaseDeleteResponse || commonTypes.ContentVectorDatabaseDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentVectorDatabaseEdge', () => {
    test('ContentVectorDatabaseEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentVectorDatabaseEdgeSchema || inputSchemas.ContentVectorDatabaseEdgeSchema || commonSchemas.ContentVectorDatabaseEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentVectorDatabaseEdgeInterface and ContentVectorDatabaseEdge should be defined', () => {
      const interfaceType = nodeTypes.ContentVectorDatabaseEdgeInterface || inputTypes.ContentVectorDatabaseEdgeInterface || commonTypes.ContentVectorDatabaseEdgeInterface;
      const classType = nodeTypes.ContentVectorDatabaseEdge || inputTypes.ContentVectorDatabaseEdge || commonTypes.ContentVectorDatabaseEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentVectorDatabaseInsertResponse', () => {
    test('ContentVectorDatabaseInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentVectorDatabaseInsertResponseSchema || inputSchemas.ContentVectorDatabaseInsertResponseSchema || commonSchemas.ContentVectorDatabaseInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentVectorDatabaseInsertResponseInterface and ContentVectorDatabaseInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentVectorDatabaseInsertResponseInterface || inputTypes.ContentVectorDatabaseInsertResponseInterface || commonTypes.ContentVectorDatabaseInsertResponseInterface;
      const classType = nodeTypes.ContentVectorDatabaseInsertResponse || inputTypes.ContentVectorDatabaseInsertResponse || commonTypes.ContentVectorDatabaseInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('ContentVectorDatabaseUpdateResponse', () => {
    test('ContentVectorDatabaseUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.ContentVectorDatabaseUpdateResponseSchema || inputSchemas.ContentVectorDatabaseUpdateResponseSchema || commonSchemas.ContentVectorDatabaseUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('ContentVectorDatabaseUpdateResponseInterface and ContentVectorDatabaseUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.ContentVectorDatabaseUpdateResponseInterface || inputTypes.ContentVectorDatabaseUpdateResponseInterface || commonTypes.ContentVectorDatabaseUpdateResponseInterface;
      const classType = nodeTypes.ContentVectorDatabaseUpdateResponse || inputTypes.ContentVectorDatabaseUpdateResponse || commonTypes.ContentVectorDatabaseUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CreationTypeDeleteResponse', () => {
    test('CreationTypeDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.CreationTypeDeleteResponseSchema || inputSchemas.CreationTypeDeleteResponseSchema || commonSchemas.CreationTypeDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CreationTypeDeleteResponseInterface and CreationTypeDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.CreationTypeDeleteResponseInterface || inputTypes.CreationTypeDeleteResponseInterface || commonTypes.CreationTypeDeleteResponseInterface;
      const classType = nodeTypes.CreationTypeDeleteResponse || inputTypes.CreationTypeDeleteResponse || commonTypes.CreationTypeDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CreationTypeEdge', () => {
    test('CreationTypeEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.CreationTypeEdgeSchema || inputSchemas.CreationTypeEdgeSchema || commonSchemas.CreationTypeEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CreationTypeEdgeInterface and CreationTypeEdge should be defined', () => {
      const interfaceType = nodeTypes.CreationTypeEdgeInterface || inputTypes.CreationTypeEdgeInterface || commonTypes.CreationTypeEdgeInterface;
      const classType = nodeTypes.CreationTypeEdge || inputTypes.CreationTypeEdge || commonTypes.CreationTypeEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CreationTypeInsertResponse', () => {
    test('CreationTypeInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.CreationTypeInsertResponseSchema || inputSchemas.CreationTypeInsertResponseSchema || commonSchemas.CreationTypeInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CreationTypeInsertResponseInterface and CreationTypeInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.CreationTypeInsertResponseInterface || inputTypes.CreationTypeInsertResponseInterface || commonTypes.CreationTypeInsertResponseInterface;
      const classType = nodeTypes.CreationTypeInsertResponse || inputTypes.CreationTypeInsertResponse || commonTypes.CreationTypeInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('CreationTypeUpdateResponse', () => {
    test('CreationTypeUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.CreationTypeUpdateResponseSchema || inputSchemas.CreationTypeUpdateResponseSchema || commonSchemas.CreationTypeUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('CreationTypeUpdateResponseInterface and CreationTypeUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.CreationTypeUpdateResponseInterface || inputTypes.CreationTypeUpdateResponseInterface || commonTypes.CreationTypeUpdateResponseInterface;
      const classType = nodeTypes.CreationTypeUpdateResponse || inputTypes.CreationTypeUpdateResponse || commonTypes.CreationTypeUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentDeleteResponse', () => {
    test('DocumentDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentDeleteResponseSchema || inputSchemas.DocumentDeleteResponseSchema || commonSchemas.DocumentDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentDeleteResponseInterface and DocumentDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.DocumentDeleteResponseInterface || inputTypes.DocumentDeleteResponseInterface || commonTypes.DocumentDeleteResponseInterface;
      const classType = nodeTypes.DocumentDeleteResponse || inputTypes.DocumentDeleteResponse || commonTypes.DocumentDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentEdge', () => {
    test('DocumentEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentEdgeSchema || inputSchemas.DocumentEdgeSchema || commonSchemas.DocumentEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentEdgeInterface and DocumentEdge should be defined', () => {
      const interfaceType = nodeTypes.DocumentEdgeInterface || inputTypes.DocumentEdgeInterface || commonTypes.DocumentEdgeInterface;
      const classType = nodeTypes.DocumentEdge || inputTypes.DocumentEdge || commonTypes.DocumentEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentInsertResponse', () => {
    test('DocumentInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentInsertResponseSchema || inputSchemas.DocumentInsertResponseSchema || commonSchemas.DocumentInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentInsertResponseInterface and DocumentInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.DocumentInsertResponseInterface || inputTypes.DocumentInsertResponseInterface || commonTypes.DocumentInsertResponseInterface;
      const classType = nodeTypes.DocumentInsertResponse || inputTypes.DocumentInsertResponse || commonTypes.DocumentInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentUpdateResponse', () => {
    test('DocumentUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentUpdateResponseSchema || inputSchemas.DocumentUpdateResponseSchema || commonSchemas.DocumentUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentUpdateResponseInterface and DocumentUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.DocumentUpdateResponseInterface || inputTypes.DocumentUpdateResponseInterface || commonTypes.DocumentUpdateResponseInterface;
      const classType = nodeTypes.DocumentUpdateResponse || inputTypes.DocumentUpdateResponse || commonTypes.DocumentUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentVectorDatabaseDeleteResponse', () => {
    test('DocumentVectorDatabaseDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentVectorDatabaseDeleteResponseSchema || inputSchemas.DocumentVectorDatabaseDeleteResponseSchema || commonSchemas.DocumentVectorDatabaseDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentVectorDatabaseDeleteResponseInterface and DocumentVectorDatabaseDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.DocumentVectorDatabaseDeleteResponseInterface || inputTypes.DocumentVectorDatabaseDeleteResponseInterface || commonTypes.DocumentVectorDatabaseDeleteResponseInterface;
      const classType = nodeTypes.DocumentVectorDatabaseDeleteResponse || inputTypes.DocumentVectorDatabaseDeleteResponse || commonTypes.DocumentVectorDatabaseDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentVectorDatabaseEdge', () => {
    test('DocumentVectorDatabaseEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentVectorDatabaseEdgeSchema || inputSchemas.DocumentVectorDatabaseEdgeSchema || commonSchemas.DocumentVectorDatabaseEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentVectorDatabaseEdgeInterface and DocumentVectorDatabaseEdge should be defined', () => {
      const interfaceType = nodeTypes.DocumentVectorDatabaseEdgeInterface || inputTypes.DocumentVectorDatabaseEdgeInterface || commonTypes.DocumentVectorDatabaseEdgeInterface;
      const classType = nodeTypes.DocumentVectorDatabaseEdge || inputTypes.DocumentVectorDatabaseEdge || commonTypes.DocumentVectorDatabaseEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentVectorDatabaseInsertResponse', () => {
    test('DocumentVectorDatabaseInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentVectorDatabaseInsertResponseSchema || inputSchemas.DocumentVectorDatabaseInsertResponseSchema || commonSchemas.DocumentVectorDatabaseInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentVectorDatabaseInsertResponseInterface and DocumentVectorDatabaseInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.DocumentVectorDatabaseInsertResponseInterface || inputTypes.DocumentVectorDatabaseInsertResponseInterface || commonTypes.DocumentVectorDatabaseInsertResponseInterface;
      const classType = nodeTypes.DocumentVectorDatabaseInsertResponse || inputTypes.DocumentVectorDatabaseInsertResponse || commonTypes.DocumentVectorDatabaseInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('DocumentVectorDatabaseUpdateResponse', () => {
    test('DocumentVectorDatabaseUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.DocumentVectorDatabaseUpdateResponseSchema || inputSchemas.DocumentVectorDatabaseUpdateResponseSchema || commonSchemas.DocumentVectorDatabaseUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('DocumentVectorDatabaseUpdateResponseInterface and DocumentVectorDatabaseUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.DocumentVectorDatabaseUpdateResponseInterface || inputTypes.DocumentVectorDatabaseUpdateResponseInterface || commonTypes.DocumentVectorDatabaseUpdateResponseInterface;
      const classType = nodeTypes.DocumentVectorDatabaseUpdateResponse || inputTypes.DocumentVectorDatabaseUpdateResponse || commonTypes.DocumentVectorDatabaseUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('FeatureDeleteResponse', () => {
    test('FeatureDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.FeatureDeleteResponseSchema || inputSchemas.FeatureDeleteResponseSchema || commonSchemas.FeatureDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('FeatureDeleteResponseInterface and FeatureDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.FeatureDeleteResponseInterface || inputTypes.FeatureDeleteResponseInterface || commonTypes.FeatureDeleteResponseInterface;
      const classType = nodeTypes.FeatureDeleteResponse || inputTypes.FeatureDeleteResponse || commonTypes.FeatureDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('FeatureEdge', () => {
    test('FeatureEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.FeatureEdgeSchema || inputSchemas.FeatureEdgeSchema || commonSchemas.FeatureEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('FeatureEdgeInterface and FeatureEdge should be defined', () => {
      const interfaceType = nodeTypes.FeatureEdgeInterface || inputTypes.FeatureEdgeInterface || commonTypes.FeatureEdgeInterface;
      const classType = nodeTypes.FeatureEdge || inputTypes.FeatureEdge || commonTypes.FeatureEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('FeatureInsertResponse', () => {
    test('FeatureInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.FeatureInsertResponseSchema || inputSchemas.FeatureInsertResponseSchema || commonSchemas.FeatureInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('FeatureInsertResponseInterface and FeatureInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.FeatureInsertResponseInterface || inputTypes.FeatureInsertResponseInterface || commonTypes.FeatureInsertResponseInterface;
      const classType = nodeTypes.FeatureInsertResponse || inputTypes.FeatureInsertResponse || commonTypes.FeatureInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('FeatureUpdateResponse', () => {
    test('FeatureUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.FeatureUpdateResponseSchema || inputSchemas.FeatureUpdateResponseSchema || commonSchemas.FeatureUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('FeatureUpdateResponseInterface and FeatureUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.FeatureUpdateResponseInterface || inputTypes.FeatureUpdateResponseInterface || commonTypes.FeatureUpdateResponseInterface;
      const classType = nodeTypes.FeatureUpdateResponse || inputTypes.FeatureUpdateResponse || commonTypes.FeatureUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('MimeTypeDeleteResponse', () => {
    test('MimeTypeDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.MimeTypeDeleteResponseSchema || inputSchemas.MimeTypeDeleteResponseSchema || commonSchemas.MimeTypeDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('MimeTypeDeleteResponseInterface and MimeTypeDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.MimeTypeDeleteResponseInterface || inputTypes.MimeTypeDeleteResponseInterface || commonTypes.MimeTypeDeleteResponseInterface;
      const classType = nodeTypes.MimeTypeDeleteResponse || inputTypes.MimeTypeDeleteResponse || commonTypes.MimeTypeDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('MimeTypeEdge', () => {
    test('MimeTypeEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.MimeTypeEdgeSchema || inputSchemas.MimeTypeEdgeSchema || commonSchemas.MimeTypeEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('MimeTypeEdgeInterface and MimeTypeEdge should be defined', () => {
      const interfaceType = nodeTypes.MimeTypeEdgeInterface || inputTypes.MimeTypeEdgeInterface || commonTypes.MimeTypeEdgeInterface;
      const classType = nodeTypes.MimeTypeEdge || inputTypes.MimeTypeEdge || commonTypes.MimeTypeEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('MimeTypeInsertResponse', () => {
    test('MimeTypeInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.MimeTypeInsertResponseSchema || inputSchemas.MimeTypeInsertResponseSchema || commonSchemas.MimeTypeInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('MimeTypeInsertResponseInterface and MimeTypeInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.MimeTypeInsertResponseInterface || inputTypes.MimeTypeInsertResponseInterface || commonTypes.MimeTypeInsertResponseInterface;
      const classType = nodeTypes.MimeTypeInsertResponse || inputTypes.MimeTypeInsertResponse || commonTypes.MimeTypeInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('MimeTypeUpdateResponse', () => {
    test('MimeTypeUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.MimeTypeUpdateResponseSchema || inputSchemas.MimeTypeUpdateResponseSchema || commonSchemas.MimeTypeUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('MimeTypeUpdateResponseInterface and MimeTypeUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.MimeTypeUpdateResponseInterface || inputTypes.MimeTypeUpdateResponseInterface || commonTypes.MimeTypeUpdateResponseInterface;
      const classType = nodeTypes.MimeTypeUpdateResponse || inputTypes.MimeTypeUpdateResponse || commonTypes.MimeTypeUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('Mutation', () => {
    test('MutationSchema should be defined and valid', () => {
      const schema = nodeSchemas.MutationSchema || inputSchemas.MutationSchema || commonSchemas.MutationSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('MutationInterface and Mutation should be defined', () => {
      const interfaceType = nodeTypes.MutationInterface || inputTypes.MutationInterface || commonTypes.MutationInterface;
      const classType = nodeTypes.Mutation || inputTypes.Mutation || commonTypes.Mutation;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PageInfo', () => {
    test('PageInfoSchema should be defined and valid', () => {
      const schema = nodeSchemas.PageInfoSchema || inputSchemas.PageInfoSchema || commonSchemas.PageInfoSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PageInfoInterface and PageInfo should be defined', () => {
      const interfaceType = nodeTypes.PageInfoInterface || inputTypes.PageInfoInterface || commonTypes.PageInfoInterface;
      const classType = nodeTypes.PageInfo || inputTypes.PageInfo || commonTypes.PageInfo;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanDeleteResponse', () => {
    test('PricingPlanDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanDeleteResponseSchema || inputSchemas.PricingPlanDeleteResponseSchema || commonSchemas.PricingPlanDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanDeleteResponseInterface and PricingPlanDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanDeleteResponseInterface || inputTypes.PricingPlanDeleteResponseInterface || commonTypes.PricingPlanDeleteResponseInterface;
      const classType = nodeTypes.PricingPlanDeleteResponse || inputTypes.PricingPlanDeleteResponse || commonTypes.PricingPlanDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanEdge', () => {
    test('PricingPlanEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanEdgeSchema || inputSchemas.PricingPlanEdgeSchema || commonSchemas.PricingPlanEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanEdgeInterface and PricingPlanEdge should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanEdgeInterface || inputTypes.PricingPlanEdgeInterface || commonTypes.PricingPlanEdgeInterface;
      const classType = nodeTypes.PricingPlanEdge || inputTypes.PricingPlanEdge || commonTypes.PricingPlanEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanFeatureDeleteResponse', () => {
    test('PricingPlanFeatureDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanFeatureDeleteResponseSchema || inputSchemas.PricingPlanFeatureDeleteResponseSchema || commonSchemas.PricingPlanFeatureDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanFeatureDeleteResponseInterface and PricingPlanFeatureDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanFeatureDeleteResponseInterface || inputTypes.PricingPlanFeatureDeleteResponseInterface || commonTypes.PricingPlanFeatureDeleteResponseInterface;
      const classType = nodeTypes.PricingPlanFeatureDeleteResponse || inputTypes.PricingPlanFeatureDeleteResponse || commonTypes.PricingPlanFeatureDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanFeatureEdge', () => {
    test('PricingPlanFeatureEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanFeatureEdgeSchema || inputSchemas.PricingPlanFeatureEdgeSchema || commonSchemas.PricingPlanFeatureEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanFeatureEdgeInterface and PricingPlanFeatureEdge should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanFeatureEdgeInterface || inputTypes.PricingPlanFeatureEdgeInterface || commonTypes.PricingPlanFeatureEdgeInterface;
      const classType = nodeTypes.PricingPlanFeatureEdge || inputTypes.PricingPlanFeatureEdge || commonTypes.PricingPlanFeatureEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanFeatureInsertResponse', () => {
    test('PricingPlanFeatureInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanFeatureInsertResponseSchema || inputSchemas.PricingPlanFeatureInsertResponseSchema || commonSchemas.PricingPlanFeatureInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanFeatureInsertResponseInterface and PricingPlanFeatureInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanFeatureInsertResponseInterface || inputTypes.PricingPlanFeatureInsertResponseInterface || commonTypes.PricingPlanFeatureInsertResponseInterface;
      const classType = nodeTypes.PricingPlanFeatureInsertResponse || inputTypes.PricingPlanFeatureInsertResponse || commonTypes.PricingPlanFeatureInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanFeatureUpdateResponse', () => {
    test('PricingPlanFeatureUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanFeatureUpdateResponseSchema || inputSchemas.PricingPlanFeatureUpdateResponseSchema || commonSchemas.PricingPlanFeatureUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanFeatureUpdateResponseInterface and PricingPlanFeatureUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanFeatureUpdateResponseInterface || inputTypes.PricingPlanFeatureUpdateResponseInterface || commonTypes.PricingPlanFeatureUpdateResponseInterface;
      const classType = nodeTypes.PricingPlanFeatureUpdateResponse || inputTypes.PricingPlanFeatureUpdateResponse || commonTypes.PricingPlanFeatureUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanInsertResponse', () => {
    test('PricingPlanInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanInsertResponseSchema || inputSchemas.PricingPlanInsertResponseSchema || commonSchemas.PricingPlanInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanInsertResponseInterface and PricingPlanInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanInsertResponseInterface || inputTypes.PricingPlanInsertResponseInterface || commonTypes.PricingPlanInsertResponseInterface;
      const classType = nodeTypes.PricingPlanInsertResponse || inputTypes.PricingPlanInsertResponse || commonTypes.PricingPlanInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PricingPlanUpdateResponse', () => {
    test('PricingPlanUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PricingPlanUpdateResponseSchema || inputSchemas.PricingPlanUpdateResponseSchema || commonSchemas.PricingPlanUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PricingPlanUpdateResponseInterface and PricingPlanUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.PricingPlanUpdateResponseInterface || inputTypes.PricingPlanUpdateResponseInterface || commonTypes.PricingPlanUpdateResponseInterface;
      const classType = nodeTypes.PricingPlanUpdateResponse || inputTypes.PricingPlanUpdateResponse || commonTypes.PricingPlanUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptDeleteResponse', () => {
    test('PromptDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptDeleteResponseSchema || inputSchemas.PromptDeleteResponseSchema || commonSchemas.PromptDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptDeleteResponseInterface and PromptDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.PromptDeleteResponseInterface || inputTypes.PromptDeleteResponseInterface || commonTypes.PromptDeleteResponseInterface;
      const classType = nodeTypes.PromptDeleteResponse || inputTypes.PromptDeleteResponse || commonTypes.PromptDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptEdge', () => {
    test('PromptEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptEdgeSchema || inputSchemas.PromptEdgeSchema || commonSchemas.PromptEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptEdgeInterface and PromptEdge should be defined', () => {
      const interfaceType = nodeTypes.PromptEdgeInterface || inputTypes.PromptEdgeInterface || commonTypes.PromptEdgeInterface;
      const classType = nodeTypes.PromptEdge || inputTypes.PromptEdge || commonTypes.PromptEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptInsertResponse', () => {
    test('PromptInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptInsertResponseSchema || inputSchemas.PromptInsertResponseSchema || commonSchemas.PromptInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptInsertResponseInterface and PromptInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.PromptInsertResponseInterface || inputTypes.PromptInsertResponseInterface || commonTypes.PromptInsertResponseInterface;
      const classType = nodeTypes.PromptInsertResponse || inputTypes.PromptInsertResponse || commonTypes.PromptInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateDeleteResponse', () => {
    test('PromptTemplateDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateDeleteResponseSchema || inputSchemas.PromptTemplateDeleteResponseSchema || commonSchemas.PromptTemplateDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateDeleteResponseInterface and PromptTemplateDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateDeleteResponseInterface || inputTypes.PromptTemplateDeleteResponseInterface || commonTypes.PromptTemplateDeleteResponseInterface;
      const classType = nodeTypes.PromptTemplateDeleteResponse || inputTypes.PromptTemplateDeleteResponse || commonTypes.PromptTemplateDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateEdge', () => {
    test('PromptTemplateEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateEdgeSchema || inputSchemas.PromptTemplateEdgeSchema || commonSchemas.PromptTemplateEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateEdgeInterface and PromptTemplateEdge should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateEdgeInterface || inputTypes.PromptTemplateEdgeInterface || commonTypes.PromptTemplateEdgeInterface;
      const classType = nodeTypes.PromptTemplateEdge || inputTypes.PromptTemplateEdge || commonTypes.PromptTemplateEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateInsertResponse', () => {
    test('PromptTemplateInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateInsertResponseSchema || inputSchemas.PromptTemplateInsertResponseSchema || commonSchemas.PromptTemplateInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateInsertResponseInterface and PromptTemplateInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateInsertResponseInterface || inputTypes.PromptTemplateInsertResponseInterface || commonTypes.PromptTemplateInsertResponseInterface;
      const classType = nodeTypes.PromptTemplateInsertResponse || inputTypes.PromptTemplateInsertResponse || commonTypes.PromptTemplateInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateUpdateResponse', () => {
    test('PromptTemplateUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateUpdateResponseSchema || inputSchemas.PromptTemplateUpdateResponseSchema || commonSchemas.PromptTemplateUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateUpdateResponseInterface and PromptTemplateUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateUpdateResponseInterface || inputTypes.PromptTemplateUpdateResponseInterface || commonTypes.PromptTemplateUpdateResponseInterface;
      const classType = nodeTypes.PromptTemplateUpdateResponse || inputTypes.PromptTemplateUpdateResponse || commonTypes.PromptTemplateUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateVariableDeleteResponse', () => {
    test('PromptTemplateVariableDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateVariableDeleteResponseSchema || inputSchemas.PromptTemplateVariableDeleteResponseSchema || commonSchemas.PromptTemplateVariableDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateVariableDeleteResponseInterface and PromptTemplateVariableDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateVariableDeleteResponseInterface || inputTypes.PromptTemplateVariableDeleteResponseInterface || commonTypes.PromptTemplateVariableDeleteResponseInterface;
      const classType = nodeTypes.PromptTemplateVariableDeleteResponse || inputTypes.PromptTemplateVariableDeleteResponse || commonTypes.PromptTemplateVariableDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateVariableEdge', () => {
    test('PromptTemplateVariableEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateVariableEdgeSchema || inputSchemas.PromptTemplateVariableEdgeSchema || commonSchemas.PromptTemplateVariableEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateVariableEdgeInterface and PromptTemplateVariableEdge should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateVariableEdgeInterface || inputTypes.PromptTemplateVariableEdgeInterface || commonTypes.PromptTemplateVariableEdgeInterface;
      const classType = nodeTypes.PromptTemplateVariableEdge || inputTypes.PromptTemplateVariableEdge || commonTypes.PromptTemplateVariableEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateVariableInsertResponse', () => {
    test('PromptTemplateVariableInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateVariableInsertResponseSchema || inputSchemas.PromptTemplateVariableInsertResponseSchema || commonSchemas.PromptTemplateVariableInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateVariableInsertResponseInterface and PromptTemplateVariableInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateVariableInsertResponseInterface || inputTypes.PromptTemplateVariableInsertResponseInterface || commonTypes.PromptTemplateVariableInsertResponseInterface;
      const classType = nodeTypes.PromptTemplateVariableInsertResponse || inputTypes.PromptTemplateVariableInsertResponse || commonTypes.PromptTemplateVariableInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptTemplateVariableUpdateResponse', () => {
    test('PromptTemplateVariableUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptTemplateVariableUpdateResponseSchema || inputSchemas.PromptTemplateVariableUpdateResponseSchema || commonSchemas.PromptTemplateVariableUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptTemplateVariableUpdateResponseInterface and PromptTemplateVariableUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.PromptTemplateVariableUpdateResponseInterface || inputTypes.PromptTemplateVariableUpdateResponseInterface || commonTypes.PromptTemplateVariableUpdateResponseInterface;
      const classType = nodeTypes.PromptTemplateVariableUpdateResponse || inputTypes.PromptTemplateVariableUpdateResponse || commonTypes.PromptTemplateVariableUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptUpdateResponse', () => {
    test('PromptUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptUpdateResponseSchema || inputSchemas.PromptUpdateResponseSchema || commonSchemas.PromptUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptUpdateResponseInterface and PromptUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.PromptUpdateResponseInterface || inputTypes.PromptUpdateResponseInterface || commonTypes.PromptUpdateResponseInterface;
      const classType = nodeTypes.PromptUpdateResponse || inputTypes.PromptUpdateResponse || commonTypes.PromptUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptVariableValueDeleteResponse', () => {
    test('PromptVariableValueDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptVariableValueDeleteResponseSchema || inputSchemas.PromptVariableValueDeleteResponseSchema || commonSchemas.PromptVariableValueDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptVariableValueDeleteResponseInterface and PromptVariableValueDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.PromptVariableValueDeleteResponseInterface || inputTypes.PromptVariableValueDeleteResponseInterface || commonTypes.PromptVariableValueDeleteResponseInterface;
      const classType = nodeTypes.PromptVariableValueDeleteResponse || inputTypes.PromptVariableValueDeleteResponse || commonTypes.PromptVariableValueDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptVariableValueEdge', () => {
    test('PromptVariableValueEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptVariableValueEdgeSchema || inputSchemas.PromptVariableValueEdgeSchema || commonSchemas.PromptVariableValueEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptVariableValueEdgeInterface and PromptVariableValueEdge should be defined', () => {
      const interfaceType = nodeTypes.PromptVariableValueEdgeInterface || inputTypes.PromptVariableValueEdgeInterface || commonTypes.PromptVariableValueEdgeInterface;
      const classType = nodeTypes.PromptVariableValueEdge || inputTypes.PromptVariableValueEdge || commonTypes.PromptVariableValueEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptVariableValueInsertResponse', () => {
    test('PromptVariableValueInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptVariableValueInsertResponseSchema || inputSchemas.PromptVariableValueInsertResponseSchema || commonSchemas.PromptVariableValueInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptVariableValueInsertResponseInterface and PromptVariableValueInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.PromptVariableValueInsertResponseInterface || inputTypes.PromptVariableValueInsertResponseInterface || commonTypes.PromptVariableValueInsertResponseInterface;
      const classType = nodeTypes.PromptVariableValueInsertResponse || inputTypes.PromptVariableValueInsertResponse || commonTypes.PromptVariableValueInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('PromptVariableValueUpdateResponse', () => {
    test('PromptVariableValueUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.PromptVariableValueUpdateResponseSchema || inputSchemas.PromptVariableValueUpdateResponseSchema || commonSchemas.PromptVariableValueUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('PromptVariableValueUpdateResponseInterface and PromptVariableValueUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.PromptVariableValueUpdateResponseInterface || inputTypes.PromptVariableValueUpdateResponseInterface || commonTypes.PromptVariableValueUpdateResponseInterface;
      const classType = nodeTypes.PromptVariableValueUpdateResponse || inputTypes.PromptVariableValueUpdateResponse || commonTypes.PromptVariableValueUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('Query', () => {
    test('QuerySchema should be defined and valid', () => {
      const schema = nodeSchemas.QuerySchema || inputSchemas.QuerySchema || commonSchemas.QuerySchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('QueryInterface and Query should be defined', () => {
      const interfaceType = nodeTypes.QueryInterface || inputTypes.QueryInterface || commonTypes.QueryInterface;
      const classType = nodeTypes.Query || inputTypes.Query || commonTypes.Query;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('RoleDeleteResponse', () => {
    test('RoleDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.RoleDeleteResponseSchema || inputSchemas.RoleDeleteResponseSchema || commonSchemas.RoleDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('RoleDeleteResponseInterface and RoleDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.RoleDeleteResponseInterface || inputTypes.RoleDeleteResponseInterface || commonTypes.RoleDeleteResponseInterface;
      const classType = nodeTypes.RoleDeleteResponse || inputTypes.RoleDeleteResponse || commonTypes.RoleDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('RoleEdge', () => {
    test('RoleEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.RoleEdgeSchema || inputSchemas.RoleEdgeSchema || commonSchemas.RoleEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('RoleEdgeInterface and RoleEdge should be defined', () => {
      const interfaceType = nodeTypes.RoleEdgeInterface || inputTypes.RoleEdgeInterface || commonTypes.RoleEdgeInterface;
      const classType = nodeTypes.RoleEdge || inputTypes.RoleEdge || commonTypes.RoleEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('RoleInsertResponse', () => {
    test('RoleInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.RoleInsertResponseSchema || inputSchemas.RoleInsertResponseSchema || commonSchemas.RoleInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('RoleInsertResponseInterface and RoleInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.RoleInsertResponseInterface || inputTypes.RoleInsertResponseInterface || commonTypes.RoleInsertResponseInterface;
      const classType = nodeTypes.RoleInsertResponse || inputTypes.RoleInsertResponse || commonTypes.RoleInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('RoleUpdateResponse', () => {
    test('RoleUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.RoleUpdateResponseSchema || inputSchemas.RoleUpdateResponseSchema || commonSchemas.RoleUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('RoleUpdateResponseInterface and RoleUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.RoleUpdateResponseInterface || inputTypes.RoleUpdateResponseInterface || commonTypes.RoleUpdateResponseInterface;
      const classType = nodeTypes.RoleUpdateResponse || inputTypes.RoleUpdateResponse || commonTypes.RoleUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableDeleteResponse', () => {
    test('TemplateVariableDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableDeleteResponseSchema || inputSchemas.TemplateVariableDeleteResponseSchema || commonSchemas.TemplateVariableDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableDeleteResponseInterface and TemplateVariableDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableDeleteResponseInterface || inputTypes.TemplateVariableDeleteResponseInterface || commonTypes.TemplateVariableDeleteResponseInterface;
      const classType = nodeTypes.TemplateVariableDeleteResponse || inputTypes.TemplateVariableDeleteResponse || commonTypes.TemplateVariableDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableEdge', () => {
    test('TemplateVariableEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableEdgeSchema || inputSchemas.TemplateVariableEdgeSchema || commonSchemas.TemplateVariableEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableEdgeInterface and TemplateVariableEdge should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableEdgeInterface || inputTypes.TemplateVariableEdgeInterface || commonTypes.TemplateVariableEdgeInterface;
      const classType = nodeTypes.TemplateVariableEdge || inputTypes.TemplateVariableEdge || commonTypes.TemplateVariableEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableInsertResponse', () => {
    test('TemplateVariableInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableInsertResponseSchema || inputSchemas.TemplateVariableInsertResponseSchema || commonSchemas.TemplateVariableInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableInsertResponseInterface and TemplateVariableInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableInsertResponseInterface || inputTypes.TemplateVariableInsertResponseInterface || commonTypes.TemplateVariableInsertResponseInterface;
      const classType = nodeTypes.TemplateVariableInsertResponse || inputTypes.TemplateVariableInsertResponse || commonTypes.TemplateVariableInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableTypeDeleteResponse', () => {
    test('TemplateVariableTypeDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableTypeDeleteResponseSchema || inputSchemas.TemplateVariableTypeDeleteResponseSchema || commonSchemas.TemplateVariableTypeDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableTypeDeleteResponseInterface and TemplateVariableTypeDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableTypeDeleteResponseInterface || inputTypes.TemplateVariableTypeDeleteResponseInterface || commonTypes.TemplateVariableTypeDeleteResponseInterface;
      const classType = nodeTypes.TemplateVariableTypeDeleteResponse || inputTypes.TemplateVariableTypeDeleteResponse || commonTypes.TemplateVariableTypeDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableTypeEdge', () => {
    test('TemplateVariableTypeEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableTypeEdgeSchema || inputSchemas.TemplateVariableTypeEdgeSchema || commonSchemas.TemplateVariableTypeEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableTypeEdgeInterface and TemplateVariableTypeEdge should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableTypeEdgeInterface || inputTypes.TemplateVariableTypeEdgeInterface || commonTypes.TemplateVariableTypeEdgeInterface;
      const classType = nodeTypes.TemplateVariableTypeEdge || inputTypes.TemplateVariableTypeEdge || commonTypes.TemplateVariableTypeEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableTypeInsertResponse', () => {
    test('TemplateVariableTypeInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableTypeInsertResponseSchema || inputSchemas.TemplateVariableTypeInsertResponseSchema || commonSchemas.TemplateVariableTypeInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableTypeInsertResponseInterface and TemplateVariableTypeInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableTypeInsertResponseInterface || inputTypes.TemplateVariableTypeInsertResponseInterface || commonTypes.TemplateVariableTypeInsertResponseInterface;
      const classType = nodeTypes.TemplateVariableTypeInsertResponse || inputTypes.TemplateVariableTypeInsertResponse || commonTypes.TemplateVariableTypeInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableTypeUpdateResponse', () => {
    test('TemplateVariableTypeUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableTypeUpdateResponseSchema || inputSchemas.TemplateVariableTypeUpdateResponseSchema || commonSchemas.TemplateVariableTypeUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableTypeUpdateResponseInterface and TemplateVariableTypeUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableTypeUpdateResponseInterface || inputTypes.TemplateVariableTypeUpdateResponseInterface || commonTypes.TemplateVariableTypeUpdateResponseInterface;
      const classType = nodeTypes.TemplateVariableTypeUpdateResponse || inputTypes.TemplateVariableTypeUpdateResponse || commonTypes.TemplateVariableTypeUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('TemplateVariableUpdateResponse', () => {
    test('TemplateVariableUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.TemplateVariableUpdateResponseSchema || inputSchemas.TemplateVariableUpdateResponseSchema || commonSchemas.TemplateVariableUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('TemplateVariableUpdateResponseInterface and TemplateVariableUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.TemplateVariableUpdateResponseInterface || inputTypes.TemplateVariableUpdateResponseInterface || commonTypes.TemplateVariableUpdateResponseInterface;
      const classType = nodeTypes.TemplateVariableUpdateResponse || inputTypes.TemplateVariableUpdateResponse || commonTypes.TemplateVariableUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserDeleteResponse', () => {
    test('UserDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserDeleteResponseSchema || inputSchemas.UserDeleteResponseSchema || commonSchemas.UserDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserDeleteResponseInterface and UserDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.UserDeleteResponseInterface || inputTypes.UserDeleteResponseInterface || commonTypes.UserDeleteResponseInterface;
      const classType = nodeTypes.UserDeleteResponse || inputTypes.UserDeleteResponse || commonTypes.UserDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserEdge', () => {
    test('UserEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserEdgeSchema || inputSchemas.UserEdgeSchema || commonSchemas.UserEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserEdgeInterface and UserEdge should be defined', () => {
      const interfaceType = nodeTypes.UserEdgeInterface || inputTypes.UserEdgeInterface || commonTypes.UserEdgeInterface;
      const classType = nodeTypes.UserEdge || inputTypes.UserEdge || commonTypes.UserEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserInsertResponse', () => {
    test('UserInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserInsertResponseSchema || inputSchemas.UserInsertResponseSchema || commonSchemas.UserInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserInsertResponseInterface and UserInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.UserInsertResponseInterface || inputTypes.UserInsertResponseInterface || commonTypes.UserInsertResponseInterface;
      const classType = nodeTypes.UserInsertResponse || inputTypes.UserInsertResponse || commonTypes.UserInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserRoleDeleteResponse', () => {
    test('UserRoleDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserRoleDeleteResponseSchema || inputSchemas.UserRoleDeleteResponseSchema || commonSchemas.UserRoleDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserRoleDeleteResponseInterface and UserRoleDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.UserRoleDeleteResponseInterface || inputTypes.UserRoleDeleteResponseInterface || commonTypes.UserRoleDeleteResponseInterface;
      const classType = nodeTypes.UserRoleDeleteResponse || inputTypes.UserRoleDeleteResponse || commonTypes.UserRoleDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserRoleEdge', () => {
    test('UserRoleEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserRoleEdgeSchema || inputSchemas.UserRoleEdgeSchema || commonSchemas.UserRoleEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserRoleEdgeInterface and UserRoleEdge should be defined', () => {
      const interfaceType = nodeTypes.UserRoleEdgeInterface || inputTypes.UserRoleEdgeInterface || commonTypes.UserRoleEdgeInterface;
      const classType = nodeTypes.UserRoleEdge || inputTypes.UserRoleEdge || commonTypes.UserRoleEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserRoleInsertResponse', () => {
    test('UserRoleInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserRoleInsertResponseSchema || inputSchemas.UserRoleInsertResponseSchema || commonSchemas.UserRoleInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserRoleInsertResponseInterface and UserRoleInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.UserRoleInsertResponseInterface || inputTypes.UserRoleInsertResponseInterface || commonTypes.UserRoleInsertResponseInterface;
      const classType = nodeTypes.UserRoleInsertResponse || inputTypes.UserRoleInsertResponse || commonTypes.UserRoleInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserRoleUpdateResponse', () => {
    test('UserRoleUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserRoleUpdateResponseSchema || inputSchemas.UserRoleUpdateResponseSchema || commonSchemas.UserRoleUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserRoleUpdateResponseInterface and UserRoleUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.UserRoleUpdateResponseInterface || inputTypes.UserRoleUpdateResponseInterface || commonTypes.UserRoleUpdateResponseInterface;
      const classType = nodeTypes.UserRoleUpdateResponse || inputTypes.UserRoleUpdateResponse || commonTypes.UserRoleUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('UserUpdateResponse', () => {
    test('UserUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.UserUpdateResponseSchema || inputSchemas.UserUpdateResponseSchema || commonSchemas.UserUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('UserUpdateResponseInterface and UserUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.UserUpdateResponseInterface || inputTypes.UserUpdateResponseInterface || commonTypes.UserUpdateResponseInterface;
      const classType = nodeTypes.UserUpdateResponse || inputTypes.UserUpdateResponse || commonTypes.UserUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('VectorDatabaseDeleteResponse', () => {
    test('VectorDatabaseDeleteResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.VectorDatabaseDeleteResponseSchema || inputSchemas.VectorDatabaseDeleteResponseSchema || commonSchemas.VectorDatabaseDeleteResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('VectorDatabaseDeleteResponseInterface and VectorDatabaseDeleteResponse should be defined', () => {
      const interfaceType = nodeTypes.VectorDatabaseDeleteResponseInterface || inputTypes.VectorDatabaseDeleteResponseInterface || commonTypes.VectorDatabaseDeleteResponseInterface;
      const classType = nodeTypes.VectorDatabaseDeleteResponse || inputTypes.VectorDatabaseDeleteResponse || commonTypes.VectorDatabaseDeleteResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('VectorDatabaseEdge', () => {
    test('VectorDatabaseEdgeSchema should be defined and valid', () => {
      const schema = nodeSchemas.VectorDatabaseEdgeSchema || inputSchemas.VectorDatabaseEdgeSchema || commonSchemas.VectorDatabaseEdgeSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('VectorDatabaseEdgeInterface and VectorDatabaseEdge should be defined', () => {
      const interfaceType = nodeTypes.VectorDatabaseEdgeInterface || inputTypes.VectorDatabaseEdgeInterface || commonTypes.VectorDatabaseEdgeInterface;
      const classType = nodeTypes.VectorDatabaseEdge || inputTypes.VectorDatabaseEdge || commonTypes.VectorDatabaseEdge;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('VectorDatabaseInsertResponse', () => {
    test('VectorDatabaseInsertResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.VectorDatabaseInsertResponseSchema || inputSchemas.VectorDatabaseInsertResponseSchema || commonSchemas.VectorDatabaseInsertResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('VectorDatabaseInsertResponseInterface and VectorDatabaseInsertResponse should be defined', () => {
      const interfaceType = nodeTypes.VectorDatabaseInsertResponseInterface || inputTypes.VectorDatabaseInsertResponseInterface || commonTypes.VectorDatabaseInsertResponseInterface;
      const classType = nodeTypes.VectorDatabaseInsertResponse || inputTypes.VectorDatabaseInsertResponse || commonTypes.VectorDatabaseInsertResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

  describe('VectorDatabaseUpdateResponse', () => {
    test('VectorDatabaseUpdateResponseSchema should be defined and valid', () => {
      const schema = nodeSchemas.VectorDatabaseUpdateResponseSchema || inputSchemas.VectorDatabaseUpdateResponseSchema || commonSchemas.VectorDatabaseUpdateResponseSchema;
      expect(schema).toBeDefined();
      expect(schema instanceof z.ZodType).toBe(true);
    });

    test('VectorDatabaseUpdateResponseInterface and VectorDatabaseUpdateResponse should be defined', () => {
      const interfaceType = nodeTypes.VectorDatabaseUpdateResponseInterface || inputTypes.VectorDatabaseUpdateResponseInterface || commonTypes.VectorDatabaseUpdateResponseInterface;
      const classType = nodeTypes.VectorDatabaseUpdateResponse || inputTypes.VectorDatabaseUpdateResponse || commonTypes.VectorDatabaseUpdateResponse;
      expect(interfaceType).toBeDefined();
      expect(classType).toBeDefined();
    });
  });

});
