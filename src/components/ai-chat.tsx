// src/components/ai-chat.tsx
'use client';

import React, { useState } from 'react';
import { useEdgeRuntime, AssistantModal, TextContentPartProps } from "@assistant-ui/react";
import MDXRenderer from "./mdx-renderer";

export default function AIChat() {
  const [error] = useState<string | null>(null);

  const runtime = useEdgeRuntime({
    api: "/api/chat",
  });


  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="bg-background border rounded-lg shadow-lg p-4">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <AssistantModal 
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