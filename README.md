# Prometheus Web

This project uses Next.js, TypeScript, and Zod for type-safe schema validation.

## Zod Schema Generator

We use a custom Zod schema generator to create type-safe schemas from our GraphQL schema. This generator also creates repositories for each type, providing CRUD operations.

### How to Use

1. Ensure your GraphQL schema is up to date in the `schema.graphql` file.

2. Run the Zod schema generator:

   ```
   npm run generate:zod
   ```

   This will:
   - Generate Zod schemas in `src/types/schemas/`
   - Create repositories for each type in `src/lib/repositories/`
   - Generate test files in `src/__tests__/schemas/`

3. The generated repositories can be imported and used in your application code:

   ```typescript
   import { UserRepository } from '@repositories/UserRepository';

   // Example usage
   const user = await UserRepository.get('user-id');
   const users = await UserRepository.list();
   const newUser = await UserRepository.create({ name: 'John Doe', email: 'john@example.com' });
   const updatedUser = await UserRepository.update('user-id', { name: 'Jane Doe' });
   const deleted = await UserRepository.delete('user-id');
   ```

### Configuration

The Zod schema generator uses a configuration file `zod-generator-config.json` in the project root. This file specifies which directories to include or exclude when processing GraphQL files.

## Development

To start the development server:

```
npm run dev
```

## Building for Production

To create a production build:

```
npm run build
```

Then, to start the production server:

```
npm start
```

## Testing

To run the tests:

```
npm test
```

## Linting

To run the linter:

```
npm run lint
```

## Project Structure

- `src/`: Source code
  - `app/`: Next.js app router
  - `components/`: React components
  - `lib/`: Utility functions and services
    - `repositories/`: Generated repositories for each type
  - `types/`: TypeScript type definitions and Zod schemas
  - `scripts/`: Utility scripts, including the Zod schema generator
- `public/`: Static assets
- `__tests__/`: Test files

## Dependencies

This project uses various dependencies, including:

- Next.js for the React framework
- Apollo Client for GraphQL queries
- Zod for schema validation
- Tailwind CSS for styling
- Various UI components from Radix UI

For a full list of dependencies, see the `package.json` file.

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

[Add your license information here]

## Architecture Assessment

### Overview

The project's architecture is designed with a focus on modularity, scalability, and maintainability. It utilizes Next.js for server-side rendering and routing, TypeScript for type safety, and Zod for schema validation. The codebase follows a feature-based organization, with files and directories structured by specific functionalities.

### Strengths

1. **Feature-Based Organization**: Organizing code by features promotes better encapsulation and makes the codebase more intuitive to navigate. Developers can easily locate and work on specific features without affecting unrelated parts of the project.

2. **Type Safety with TypeScript and Zod**: Using TypeScript enhances code reliability through static type checking. Combined with Zod schemas for runtime validation, this approach reduces bugs and ensures data integrity throughout the application.

3. **Separation of Concerns**: The architecture separates concerns by dividing schemas, inputs, repositories, and components into distinct files and directories. This separation improves readability and maintainability.

4. **Custom Repositories**: Placing custom repositories alongside their corresponding GraphQL query files allows for better organization and aligns related code. This practice simplifies collaboration among developers and aligns with the project's feature-based architecture.

5. **Code Generation for Schemas and Repositories**: Automating the generation of Zod schemas and repositories from the GraphQL schema accelerates development and ensures consistency between the frontend and backend.

### Weaknesses

1. **Complexity in Schema Management**: Generating individual schema and input files for each entity can lead to a large number of files. This fragmentation may increase the complexity of managing and updating schemas.

2. **Risk of Code Overwriting**: The code generation process may unintentionally overwrite custom code, particularly in repositories. This risk necessitates caution and additional configurations to prevent loss of custom implementations.

3. **Implicit Dependencies**: The reliance on naming conventions and file locations for code generation introduces implicit dependencies that may not be immediately evident. This can make onboarding new developers more challenging and increase the potential for errors.

4. **Duplicated or Missing Type Definitions**: Instances of duplicated entities across files or missing type imports have led to linting and compilation errors. This indicates a need for better type management and validation in the code generation process.

### Potential Improvements

1. **Enhance Code Generation Tools**: Improve the code generation scripts to handle custom code more intelligently. This could include identifying and preserving custom repositories or allowing for annotations that prevent overwriting.

2. **Consolidate Schemas**: Consider consolidating related schemas into single files or using index files to re-export schemas. This can reduce file proliferation and simplify imports.

3. **Explicit Type Management**: Ensure that all types are explicitly defined and imported where needed. Implement linting rules or code generation checks to detect and resolve any implicit `any` types or missing imports.

4. **Documentation and Conventions**: Develop comprehensive documentation outlining the project's architectural patterns, file naming conventions, and code generation processes. Clear guidelines can reduce implicit dependencies and assist new developers in understanding the architecture.

5. **Modularization with Monorepo Tools**: For larger projects, adopting a monorepo approach with tools like Lerna or Nx can help manage multiple packages, improve scalability, and enhance code sharing between modules.

6. **Automated Testing**: Continue to implement tests for generated code, especially for schemas and repositories. Automated tests can catch issues early and ensure that changes in code generation do not introduce bugs.

### Conclusion

The current architecture demonstrates a solid foundation, emphasizing modularity and type safety. By addressing the identified weaknesses and implementing the suggested improvements, the project can achieve greater maintainability, scalability, and ease of collaboration among developers.
