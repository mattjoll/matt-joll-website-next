import type { NextPage } from 'next';
import PageHead from '../components/PageHead';

const Home: NextPage = () => {
  return (
    <div>
      <PageHead />
      <section>
        <div>Kia ora, I{"'"}m Matt</div>
        <div>Software engineer and lover of the web</div>
      </section>

      <section>
        <div>About me</div>
        <div>This is a description of me. Something something developer.</div>
        <div>Now for some more content. Yay for content.</div>
      </section>

      <section>
        <div>Skills and tricks</div>
        <div>These are my skills. I have skills in:</div>
        <div>Angular, React, Node, C#/.NET, SQL</div>
      </section>
    </div>
  );
};

export default Home;
