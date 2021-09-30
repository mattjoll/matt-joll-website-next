import type { NextPage } from 'next';
import Image from 'next/image';
import PageHead from '../components/PageHead';

const Home: NextPage = () => {
  return (
    <div>
      <PageHead />
      <section className="mb-20">
        <h1 className="max-w-sm">
          Kia ora, my name is <span className="text-green-400">Matt</span>
        </h1>
        <h3>
          I&apos;m a software engineer and lover of the web from New Zealand.
        </h3>
      </section>

      <section className="my-20">
        <h2>About me</h2>
        <article className="flex flex-col items-center lg:flex-row">
          <div>
            <p>
              As a developer, I want to help people. From teaching someone
              who&apos;s never coded before to helping a large team write
              software to stop bad guys, this is my drive and why I love doing
              what I do.
            </p>
            <p>
              I graduated from the University of Canterbury with a BSc in
              Computer Science. During this time I managed to get some
              experience as an intern while studying for my final year.
            </p>
            <p>
              I currently work full time as a frontend software engineer, and
              have experience in the full stack. I also enjoy taking on
              contracting work as it gives me the opportunity to develop
              different skills as every project is different!
            </p>
            <p>
              When I&apos;m not coding, you can find me writing music, cooking,
              or playing video games. Theres nothing quite like listening to
              rock music and playing Final Fantasy while waiting for bread to
              bake.
            </p>
          </div>
          <div className="block flex-shrink-0 lg:ml-6">
            <Image
              alt="Matt Joll"
              className="rounded-full"
              src="/images/Matt-head.jpg"
              height={300}
              width={300}
            />
          </div>
        </article>
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
