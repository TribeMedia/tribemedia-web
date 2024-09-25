import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { parse, Kind } from 'graphql';
import Handlebars from 'handlebars';

// Set up logging to a file
const logFilePath = 'gen_handlebars.log';
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

const log = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
  logStream.write(`[${timestamp}] ${message}\n`);
};

// Directory paths
const rootSchemaPath = 'src/schema.graphql';
const graphqlFilesPath = 'src/**/*.graphql';
const outputTemplatesPath = 'generated/templates';
const combinedSchemaPath = path.join(outputTemplatesPath, 'combined_schema.graphql');

// Ensure output directory exists
if (!fs.existsSync(outputTemplatesPath)) {
  fs.mkdirSync(outputTemplatesPath, { recursive: true });
  log(`Created output directory at: ${outputTemplatesPath}`);
}

// Function to load and combine GraphQL schemas
const loadCombinedSchema = () => {
  try {
    log("Starting to load schemas...");
    // Read the root schema file
    let combinedSchemaContent = '';
    if (fs.existsSync(rootSchemaPath)) {
      combinedSchemaContent = fs.readFileSync(rootSchemaPath, 'utf-8');
      log(`Loaded root schema from: ${rootSchemaPath}`);
      log(`Root schema content length: ${combinedSchemaContent.length} characters`);
    } else {
      log(`Root schema file not found at path: ${rootSchemaPath}`);
      return null;
    }

    // Read all other .graphql files in subdirectories, excluding node_modules and other non-code directories
    log(`Searching for GraphQL files in: ${graphqlFilesPath}`);
    let files;
    try {
      files = globSync(graphqlFilesPath, {
        ignore: [
          '**/node_modules/**',
          '**/dist/**',
          '**/build/**',
          '**/coverage/**',
          '**/generated/**',
          '**/.git/**',
          '**/.vscode/**'
        ],
        nodir: true,
        absolute: true
      });
      log(`Glob search completed. Found ${files.length} GraphQL file(s) in subdirectories`);
    } catch (globError) {
      log(`Error during glob search: ${globError}`);
      return null;
    }

    if (files.length === 0) {
      log("No GraphQL files found. Check your graphqlFilesPath and ignore patterns.");
      return combinedSchemaContent;
    }

    for (const file of files) {
      log(`Reading file: ${file}`);
      try {
        const fileContent = fs.readFileSync(file, 'utf-8');
        combinedSchemaContent += '\n' + fileContent;
        log(`Appended content from file: ${file}. New total length: ${combinedSchemaContent.length} characters`);
      } catch (readError) {
        log(`Error reading file ${file}: ${readError}`);
      }
    }

    // Save the combined schema to the output directory
    try {
      fs.writeFileSync(combinedSchemaPath, combinedSchemaContent, 'utf8');
      log(`Saved combined schema to: ${combinedSchemaPath}`);
      log(`Total combined schema length: ${combinedSchemaContent.length} characters`);
    } catch (writeError) {
      log(`Error writing combined schema: ${writeError}`);
    }

    return combinedSchemaContent;
  } catch (err) {
    log(`Error loading schemas: ${err}`);
    return null;
  }
};

// Helper function to map GraphQL types to TypeScript types
const mapType = (type) => {
  if (type.kind === Kind.NON_NULL_TYPE) {
    return mapType(type.type);
  }
  if (type.kind === Kind.LIST_TYPE) {
    return `Array<${mapType(type.type)}>`;
  }
  if (type.kind === Kind.NAMED_TYPE) {
    switch (type.name.value) {
      case 'ID':
      case 'String':
      case 'UUID':
        return 'string';
      case 'Int':
      case 'Float':
        return 'number';
      case 'Boolean':
        return 'boolean';
      case 'JSON':
        return 'Record<string, any>';
      case 'DateTime':
        return 'Date';
      default:
        return type.name.value;
    }
  }
  return 'any'; // fallback
};

// Helper function to get the raw GraphQL type
const getRawType = (type) => {
  if (type.kind === Kind.NON_NULL_TYPE) {
    return getRawType(type.type) + '!';
  }
  if (type.kind === Kind.LIST_TYPE) {
    return `[${getRawType(type.type)}]`;
  }
  if (type.kind === Kind.NAMED_TYPE) {
    return type.name.value;
  }
  return 'any'; // fallback
};

// Helper function to check if a type is a node type
const isNodeType = (type) => {
  return type.interfaces && type.interfaces.some(iface => iface.name.value === 'Node');
};

// Function to generate Handlebars templates from GraphQL operations
const generateTemplates = () => {
  try {
    log("Starting to generate templates...");
    // Load combined schema content
    const combinedSchemaContent = loadCombinedSchema();
    if (!combinedSchemaContent) {
      log("Failed to load combined schema content.");
      return;
    }

    // Parse the combined schema
    let parsedDocument;
    try {
      log("Parsing combined schema...");
      parsedDocument = parse(combinedSchemaContent);
      log("Successfully parsed combined schema.");
      log(`Number of definitions found: ${parsedDocument.definitions.length}`);
    } catch (parseError) {
      log(`Error parsing combined schema: ${parseError}`);
      return;
    }
    
    parsedDocument.definitions.forEach((definition, index) => {
      try {
        if (definition.kind === Kind.OBJECT_TYPE_DEFINITION && isNodeType(definition)) {
          const typeName = definition.name.value;
          log(`Processing node type: ${typeName}`);
          
          let templateContent = '';
          templateContent += 'import { gql } from \'@apollo/client\';\n';
          templateContent += 'import { ApolloClient, NormalizedCacheObject } from \'@apollo/client\';\n';
          templateContent += 'import * as Types from \'./graphql\';\n\n';
          templateContent += 'export class {{typeName}}Repository {\n';
          templateContent += '  private client: ApolloClient<NormalizedCacheObject>;\n\n';
          templateContent += '  constructor(client: ApolloClient<NormalizedCacheObject>) {\n';
          templateContent += '    this.client = client;\n';
          templateContent += '  }\n\n';
          templateContent += '{{#each fields}}\n';
          templateContent += '  // OPERATION: {{operationName}}\n';
          templateContent += '  async {{operationName}}({{#if args}}{{#each args}}{{name}}: {{type}}{{#unless @last}}, {{/unless}}{{/each}}{{/if}}): Promise<Types.{{../typeName}}[\'{{operationName}}\']> {\n';
          templateContent += '    const {{upperCase operationName}} = gql`\n';
          templateContent += '      query {{operationName}}{{#if args}}({{#each args}}${{name}}: {{rawType}}{{#unless @last}}, {{/unless}}{{/each}}){{/if}} {\n';
          templateContent += '        {{operationName}}{{#if args}}({{#each args}}{{name}}: ${{name}}{{#unless @last}}, {{/unless}}{{/each}}){{/if}} {\n';
          templateContent += '          # fields would be added here\n';
          templateContent += '        }\n';
          templateContent += '      }\n';
          templateContent += '    `;\n\n';
          templateContent += '    const { data } = await this.client.query({\n';
          templateContent += '      {{#if args}}variables: { {{#each args}}{{name}}{{#if (eq rawType "DateTime")}}: {{name}}.toISOString(){{else if (eq rawType "JSON")}}: JSON.stringify({{name}}){{else}}: {{name}}{{/if}}{{#unless @last}}, {{/unless}}{{/each}} },{{/if}}\n';
          templateContent += '      query: {{upperCase operationName}},\n';
          templateContent += '    });\n\n';
          templateContent += '    return data.{{operationName}};\n';
          templateContent += '  }\n\n';
          templateContent += '{{/each}}\n';
          templateContent += '}\n';

          // Write the template content directly to a file
          const outputFilePath = path.join(outputTemplatesPath, `${typeName}Repository.hbs`);
          fs.writeFileSync(outputFilePath, templateContent);
          log(`Handlebars template created for type '${typeName}' at ${outputFilePath}`);
        } else {
          log(`Skipping non-node type definition: ${definition.kind} - ${definition.name?.value || 'Unnamed'}`);
        }
      } catch (definitionError) {
        log(`Error processing definition ${index + 1}: ${definitionError}`);
      }
    });
    
    log("Finished processing all definitions.");
  } catch (err) {
    log(`Error generating templates: ${err}`);
  }
};

// Helper function to uppercase a string (for use in Handlebars)
Handlebars.registerHelper('upperCase', function(str) {
  return str.toUpperCase();
});

// Helper function to check equality (for use in Handlebars)
Handlebars.registerHelper('eq', function(a, b) {
  return a === b;
});

// Execute the template generation
(() => {
  log("Starting the template generation process.");
  generateTemplates();
  log("Completed template generation.");
})();