'use client';

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { evaluate, EvaluateOptions } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { ComponentType } from 'react';
import { components as mdxComponents } from '@/mdx-components';

interface MDXRendererProps {
  content: string;
}

export default function MDXRenderer({ content }: MDXRendererProps) {
  const [mdxModule, setMdxModule] = React.useState<{ default: ComponentType }>();
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    console.log('Raw content received in MDXRenderer:', content); // Debug log

    evaluate(content, {
      ...runtime,
      development: false,
      baseUrl: import.meta.url,
    } as EvaluateOptions)
      .then((exports) => {
        console.log('MDX evaluation successful'); // Debug log
        setMdxModule(exports);
      })
      .catch((err) => {
        console.error('MDX evaluation error:', err); // Debug log
        setError(err.message);
      });
  }, [content]);

  if (error) {
    return <div>Error rendering MDX: {error}</div>;
  }

  if (!mdxModule) {
    return <div>Loading...</div>;
  }

  const MDXContent = mdxModule.default;

  return (
    <MDXProvider components={mdxComponents}>
      <MDXContent />
    </MDXProvider>
  );
}