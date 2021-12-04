import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from 'react';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ReactCodeBlock: React.VFC = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default ReactCodeBlock;
