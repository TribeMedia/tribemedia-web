'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Markdown } from 'tiptap-markdown'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2 } from 'lucide-react'
import { EditorView } from '@tiptap/pm/view';

interface TiptapProps {
  initialContent?: string;
  onChange?: (editor: Editor) => void;
}

const Tiptap: React.FC<TiptapProps> = ({ initialContent = '# Overview' }) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating some async operation
    const loadData = async () => {
      try {
        // Your async logic here
        // ...
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const editorConfig = {
    onUpdate: () => {
      // Function body
    },
    onCreate: () => {
      // Function body
    },
    editorProps: {
      handleDOMEvents: {
        // Add any existing handleDOMEvents here
      },
      // Add any other editorProps here
    },
  };

  const handleError = useCallback((error: Error) => {
    console.error('Tiptap error:', error);
    setError('An error occurred while initializing the editor.');
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Markdown.configure({
        transformPastedText: true, // Allow to paste markdown text in the editor
        transformCopiedText: true,
      }),
    ],
    content: initialContent,
    ...editorConfig,
    editorProps: {
      ...editorConfig.editorProps,
      handleDOMEvents: {
        ...editorConfig.editorProps?.handleDOMEvents,
        error: (view: EditorView, event: ErrorEvent) => {
          handleError(event.error);
          return false;
        },
      },
    },
  })

  useEffect(() => {
    return () => {
      editor?.destroy();
    }
  }, [editor])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-24">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return <EditorContent editor={editor} />
}

export default Tiptap