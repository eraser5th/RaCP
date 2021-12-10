import React, { ReactElement } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Button from '../componets/Button';
import { ReactCode } from '../stories/ReactCodeBlock.stories';
import { CSSCode } from '../stories/CSSCodeBlock.stories';

const code = `
import React, { ReactElement } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Button from '../componets/Button';
import { ReactCode } from '../stories/ReactCodeBlock.stories';
import { CSSCode } from '../stories/CSSCodeBlock.stories';

const code = \`


const App: React.VFC = () => (
  <div className="app">
    <Header links={['link1', 'link2']} />
    <main className="main">
      <Button label="button" />
      <ReactCode code=''/>
      <CSSCode />
    </main>
    <Footer links={['link1', 'link2']} />
  </div>
);

export default App;
`;

const css = `
.main {
    weight: 300px;
    height: 300px;
    margin-top: 10px;
    margin-left: 20px;
}
`;

const App: React.VFC = () => (
  <div className="app">
    <Header links={['link1', 'link2']} />
    <main className="main">
      <Button label="button" />
      <ReactCode code={code} />
      <CSSCode code={css} />
    </main>
    <Footer links={['link1', 'link2']} />
  </div>
);

export default App;
