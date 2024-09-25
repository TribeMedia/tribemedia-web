'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    if (ref.current) {
      mermaid.render('mermaid-svg', chart).then((result: { svg: string }) => {
        if (ref.current) {
          ref.current.innerHTML = result.svg;
        }
      });
    }
  }, [chart]);

  return <div ref={ref} />;
}