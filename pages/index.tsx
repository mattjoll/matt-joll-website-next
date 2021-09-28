import type { NextPage } from 'next';
import PageHead from '../components/PageHead';

const Home: NextPage = () => {
  return (
    <div>
      <PageHead />
      <section className="mb-20 mt-12">
        <h1 className="max-w-sm">
          Kia ora, my name is <span className="text-green-400">Matt</span>
        </h1>
        <h3>
          I&apos;m a software engineer and lover of the web from New Zealand.
        </h3>
      </section>

      <section className="my-20">
        <h2>About me</h2>
        <p>
          This is some content. Quite a lot of content actually. I want to write
          a lot of content so that I can test if my paragraphs look nice or not.
        </p>
        <p>
          Now for some more content. Yay for content. In hindsight I couldve
          used a lorem ipsum generator. Better yet, I could&apos;ve used bacon
          ipsum. Why didn&apos;t I, you ask? Well, because I like to make my
          life difficult when testing paragraphs and content.
        </p>
      </section>

      <section className="my-20">
        <h2>Skills and tricks</h2>
        <p>These are my skills. I have skills in:</p>
        <p>Angular, React, Node, C#/.NET, SQL</p>
      </section>
    </div>
  );
};

export default Home;
