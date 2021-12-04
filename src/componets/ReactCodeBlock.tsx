import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from 'react';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const code = "import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';\n"
+ "import React from 'react';\n"
+ "import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';\n"
+ 'const ReactCodeBlock: React.VFC = () => {\n'
+ "  const codeString = '(num) => num + 1';\n"
+ '  return (\n'
+ '\n'
+ '      {codeString}\n'
+ '   </SyntaxHighlighter>\n'
+ '  );\n'
+ '};\n'
+ '\n'
+ 'export default ReactCodeBlock;\n';

const ReactCodeBlock: React.VFC = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
      {code}
    </SyntaxHighlighter>
  );
};

export default ReactCodeBlock;
