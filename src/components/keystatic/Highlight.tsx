import type { ReactNode } from 'react';

interface HighlightProps {
  children?: ReactNode;
}

export default function Highlight({ children }: HighlightProps) {
  return <mark className="green">{children}</mark>;
}