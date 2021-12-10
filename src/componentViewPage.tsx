import React, { ReactElement } from 'react';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Button from './componets/Button';
import { ReactCode } from './stories/ReactCodeBlock.stories';
import { CSSCode } from './stories/CSSCodeBlock.stories';

type Props = {
  reactCode: string,
  cssCode: string,
}

const ComponentViewPage: React.VFC<Props> = ({
  reactCode, cssCode,
}) => (
  <div className="app">
    <Header links={['link1', 'link2']} />
    <main className="main">
      <Button label="button" />
      <ReactCode code={reactCode} />
      <CSSCode code={cssCode} />
    </main>
    <Footer links={['link1', 'link2']} />
  </div>
);

export default ComponentViewPage;
