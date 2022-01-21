import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/nav';
import Section from '../components/section';
import Headline from '../components/headline';
import Flower from '../components/flower';

const Home = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="/fonts/Basteleur-Bold.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/CascadiaCode-Regular.otf" as="font" type="font/otf" crossOrigin="" />
        <title>keybored.js • React-based keyboard UI library</title>
        <meta name="description" content="A React-based keyboard UI library" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />
      <main>
        <Section>
          <Headline>
            <h1>Features</h1>
            <h4>keybored is built for React and ready to handle all of your on-screen typing needs</h4>
            <Flower color="var(--yellow)" size="56" top="-10px" left="10px" />
            <Flower opposite color="var(--red)" size="30" top="-10px" right="20px" />
          </Headline>
        </Section>
        <Section large>
          <h1>WIP! Site coming soon.</h1>
          <Headline />
        </Section>
      </main>
    </>
  );
};

export default Home;
