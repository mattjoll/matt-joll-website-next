import type { NextPage } from 'next';
import Image from 'next/image';
import DevIcon from '../components/DevIcon';
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
          <section>
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
          </section>
          <figure className="block flex-shrink-0 lg:ml-6">
            <Image
              alt="Matt Joll"
              className="rounded-full"
              src="/images/Matt-head.jpg"
              height={300}
              width={300}
            />
          </figure>
        </article>
      </section>

      <section className="my-20">
        <h2>Skills and tricks</h2>
        <h3>Languages</h3>
        <p className="flex flex-wrap">
          <DevIcon
            icon="devicon-html5-plain"
            link="https://en.wikipedia.org/wiki/HTML5"
          />
          <DevIcon
            icon="devicon-css3-plain"
            link="https://en.wikipedia.org/wiki/CSS"
          />
          <DevIcon
            icon="devicon-javascript-plain"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <DevIcon
            icon="devicon-typescript-plain"
            link="https://www.typescriptlang.org"
          />
          <DevIcon
            icon="devicon-csharp-plain"
            link="https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/"
          />
        </p>
        <h3>Frameworks and libraries</h3>
        <p className="flex flex-wrap">
          <DevIcon icon="devicon-angularjs-plain" link="https://angular.io" />
          <DevIcon icon="devicon-react-original" link="https://reactjs.org" />
          <DevIcon
            icon="devicon-tailwindcss-plain"
            link="https://tailwindcss.com"
          />
          <DevIcon icon="devicon-nodejs-plain" link="https://nodejs.org/en/" />
          <DevIcon icon="devicon-jest-plain" link="https://jestjs.io" />
          <DevIcon
            icon="devicon-dotnetcore-plain"
            link="https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet"
          />
        </p>
        <h3>Other cool things</h3>
        <p className="flex flex-wrap">
          <DevIcon
            icon="devicon-vscode-plain"
            link="https://code.visualstudio.com"
          />
          <DevIcon icon="devicon-docker-plain" link="https://www.docker.com" />
          <DevIcon
            icon="devicon-googlecloud-plain"
            link="https://cloud.google.com"
          />
        </p>
      </section>
    </div>
  );
};

export default Home;
