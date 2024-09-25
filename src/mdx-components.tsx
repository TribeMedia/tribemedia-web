'use client';

import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import Image from 'next/image';
import Mermaid from '@/components/mermaid';
import CodeBlock from '@/components/code-block';

type ComponentPropsWithNode<T extends keyof JSX.IntrinsicElements> = 
  JSX.IntrinsicElements[T] & { node?: unknown };

type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  node?: unknown;
  src?: string;
  type?: string;
};

/*const VideoComponent: React.ComponentType<VideoProps> = ({ src, ...props }) => (
    <video controls width="100%" {...props}>
      {src && <source src={src} type={props.type || 'video/mp4'} />}
    </video>
  );

type YoutubeProps = React.IframeHTMLAttributes<HTMLIFrameElement> & {
  node?: unknown;
  id?: string;
};

const YoutubeComponent: React.FC<YoutubeProps> = ({ id, ...props }) => (
  <iframe
    width="100%"
    height="315"
    src={id ? `https://www.youtube.com/embed/${id}` : undefined}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    {...props}
  />
);*/

type CustomComponents = Components & {
    video: React.ComponentType<VideoProps>;
  };

export const components: Partial<CustomComponents> = {
  table: ({ ...props }: ComponentPropsWithNode<'table'>) => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  thead: ({ ...props }: ComponentPropsWithNode<'thead'>) => (
    <thead className="bg-gray-50" {...props} />
  ),
  th: ({ ...props }: ComponentPropsWithNode<'th'>) => (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    />
  ),
  td: ({ ...props }: ComponentPropsWithNode<'td'>) => (
    <td className="px-6 py-4 whitespace-nowrap" {...props} />
  ),
  img: ({ ...props }: ComponentPropsWithNode<'img'>) => (
    <Image
      src={props.src || ''}
      alt={props.alt || ''}
      width={500}
      height={300}
      layout="responsive"
    />
  ),
  code: ({ inline, className, children, ...props }: ComponentPropsWithNode<'code'> & { inline?: boolean; className?: string }) => {
    const match = /language-(\w+)/.exec(className || '');
    const language = match && match[1] ? match[1] : '';
    const value = String(children).replace(/\n$/, '');

    if (language === 'mermaid') {
      return <Mermaid chart={value} />;
    }

    return !inline ? (
      <CodeBlock language={language} value={value} />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  /*video: VideoComponent,
  youtube: YoutubeComponent,*/
};

interface MDXRendererProps {
  content: string;
}

const MDXRenderer: React.FC<MDXRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={components as Components}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MDXRenderer;