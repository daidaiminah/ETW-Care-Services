import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  interface Window {
    // Add any window-specific global properties here
  }

  // Fix for React 19's new types
  interface Element extends React.ReactElement {}
}

export {};
