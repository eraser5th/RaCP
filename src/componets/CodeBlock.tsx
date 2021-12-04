import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from 'react';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CSS: React.VFC<{code: string}> = ({ code }) => (
  <SyntaxHighlighter language="css" style={vscDarkPlus}>
    {code}
  </SyntaxHighlighter>
);

const react: React.VFC<{code: string}> = ({ code }) => (
  <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
    {code}
  </SyntaxHighlighter>
);

export default {
  CSS,
  react,
};
