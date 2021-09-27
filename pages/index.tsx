import type { NextPage } from 'next';
import PageHead from '../components/PageHead';

const Home: NextPage = () => {
  return (
    <div>
      <PageHead />
      <section className="mb-10">
        <h1>
          Kia ora, I{"'"}m <span className="text-green-400">Matt</span>
        </h1>
        <h2>Software engineer and lover of the web</h2>
      </section>

      <section className="my-10">
        <h2>About me</h2>
        <p>This is a description of me. Something something developer.</p>
        <p>Now for some more content. Yay for content.</p>
      </section>

      <section className="my-10">
        <h2>Skills and tricks</h2>
        <p>These are my skills. I have skills in:</p>
        <p>Angular, React, Node, C#/.NET, SQL</p>
      </section>
    </div>
  );
};

export default Home;
