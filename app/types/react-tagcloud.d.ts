declare module 'react-tagcloud' {
  import * as React from 'react';

  export interface TagCloudProps {
    tags: Array<{ value: string; count: number }>;
    minSize?: number;
    maxSize?: number;
    shuffle?: boolean;
    renderer?: (tag: any, size: number, color: string) => React.ReactNode;
    onClick?: (tag: any) => void;
    onMouseMove?: (tag: any) => void;
    onMouseOver?: (tag: any) => void;
    onMouseOut?: (tag: any) => void;
    colorOptions?: {
      luminosity?: string;
      hue?: string | number;
    };
    style?: React.CSSProperties;
    className?: string;
  }

  export class TagCloud extends React.Component<TagCloudProps> {}
}
