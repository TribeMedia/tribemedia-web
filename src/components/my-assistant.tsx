'use client';

import React from 'react';
import { Thread, useEdgeRuntime, TextContentPartProps } from "@assistant-ui/react";
import MDXRenderer from "@/components/mdx-renderer.tsx";

export default function MyAssistant() {
  const runtime = useEdgeRuntime({
    api: "/api/chat",
  });
  return (
    <div className="w-full h-full p-4">
      <div className="bg-background border rounded-lg shadow-lg p-4 h-full">
        <Thread 
          runtime={runtime}
          assistantMessage={{
            components: {
                Text: ({ part }: TextContentPartProps) => {
                    console.log('Text part received:', part); // Debug log
                    return <MDXRenderer content={part.text} />;
                  }
            }
          }}
        />
      </div>
    </div>
  );
}