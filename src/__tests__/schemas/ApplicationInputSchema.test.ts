import {
  ApplicationFilterSchema,
  ApplicationOrderBySchema,
  ApplicationInsertInputSchema,
  ApplicationUpdateInputSchema,
} from '../../types/schemas/ApplicationInputSchema';
import { z } from 'zod';

describe('ApplicationInputSchema Tests', () => {
  test('ApplicationFilterSchema should be defined and valid', () => {
    expect(ApplicationFilterSchema).toBeDefined();
    expect(ApplicationFilterSchema).toBeInstanceOf(z.ZodType);
  });

  test('ApplicationFilterSchema should parse valid data', () => {
    const validFilter = {
      id: { eq: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
      name: { ilike: '%app%' },
      and: [
        { key: { eq: 'my_app' } },
        {
          or: [
            { description: { ilike: '%test%' } },
            { aiContext: { is: 'NULL' } },
          ],
        },
      ],
    };

    expect(() => ApplicationFilterSchema.parse(validFilter)).not.toThrow();
  });

  test('ApplicationFilterSchema should reject invalid data', () => {
    const invalidFilter = {
      id: { eq: 'invalid_uuid' },
    };

    expect(() => ApplicationFilterSchema.parse(invalidFilter)).toThrow();
  });

  test('ApplicationOrderBySchema should be defined and valid', () => {
    expect(ApplicationOrderBySchema).toBeDefined();
    expect(ApplicationOrderBySchema).toBeInstanceOf(z.ZodType);
  });

  test('ApplicationOrderBySchema should parse valid data', () => {
    const validOrderBy = {
      name: 'ASC',
      createdAt: 'DESC',
    };

    expect(() => ApplicationOrderBySchema.parse(validOrderBy)).not.toThrow();
  });

  test('ApplicationOrderBySchema should reject invalid data', () => {
    const invalidOrderBy = {
      name: 'INVALID_DIRECTION',
    };

    expect(() => ApplicationOrderBySchema.parse(invalidOrderBy)).toThrow();
  });

  test('ApplicationInsertInputSchema should parse valid data', () => {
    const validInput = {
      applicationTypeId: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'Test Application',
      description: 'This is a test application',
      key: 'test_app',
    };

    expect(() => ApplicationInsertInputSchema.parse(validInput)).not.toThrow();
  });

  test('ApplicationInsertInputSchema should reject missing required fields', () => {
    const invalidInput = {
      name: 'Test Application',
      description: 'This is a test application',
      key: 'test_app',
    };

    expect(() => ApplicationInsertInputSchema.parse(invalidInput)).toThrow();
  });

  test('ApplicationUpdateInputSchema should parse valid data', () => {
    const validUpdate = {
      name: 'Updated Application Name',
    };

    expect(() => ApplicationUpdateInputSchema.parse(validUpdate)).not.toThrow();
  });

  test('ApplicationUpdateInputSchema should reject invalid fields', () => {
    const invalidUpdate = {
      unknownField: 'value',
    };

    expect(() => ApplicationUpdateInputSchema.parse(invalidUpdate)).toThrow();
  });
});