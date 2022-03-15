import Head from 'next/head';
import Nav from '../components/nav';
import Section from '../components/section';
import Demo from '../components/demo';
import Headline from '../components/headline';
import Feature from '../components/feature';
import Install from '../components/install';
import Options from '../components/options';
import Fr from '../components/fr';
import Button, { ToastButton } from '../components/button';
import Flower from '../components/flower';
import Version from '../components/version';

const Home = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="/fonts/Basteleur-Bold.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/CascadiaCode-Regular.otf" as="font" type="font/otf" crossOrigin="" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>keybored.js • React-based keyboard UI library</title>
        <meta name="description" content="Keybored.js is a React-based keyboard UI library made for fun experimental sites." />
        <meta property="og:title" content="keybored.js • React-based keyboard UI library" />
        <meta property="og:description" content="Keybored.js is a React-based keyboard UI library made for fun experimental sites." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="keybored.js • React-based keyboard UI library" />
        <meta property="og:url" content="https://keyboredjs.com" />
        <meta property="og:image" content="https://www.keyboredjs.com/og.jpg" />
        <meta name="twitter:image:alt" content="keybored.js • React-based keyboard UI library" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@logan_liffick" />
        <meta name="twitter:creator" content="@logan_liffick" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        {/* <meta name="google-site-verification" content="ugqQc2EJej0hywM0zD6iTDzuIhGCttd9t_p-kFFXm18" /> */}
      </Head>
      <Nav />
      <Version />
      <main>
        <Section large hero>
          <Demo />
          <ToastButton text="npm i keybored" type="copy" clip="npm i keybored" toast="copied!" />
        </Section>
        <Section id="features">
          <Headline>
            <h1>Features</h1>
            <h4>keybored is built for React and ready to handle all of your on-screen typing needs</h4>
            <Flower color="var(--yellow)" size="56" top="-20px" left="-40px" />
            <Flower delay color="var(--red)" size="40" top="-30px" right="-60px" />
          </Headline>
          <Feature image="/images/feature-1.svg" height="200px">
            <h3>Style Everything</h3>
            <p>
              Customize keybored to your heart’s desire. With the included <a href="#">CSS file</a>, you can style every aspect of your keys, including creating one-offs.
            </p>
          </Feature>
          <Feature image="/images/feature-2.svg" height="304px">
            <h3>Choose your bored</h3>
            <p>
              Choose between ‘std’ or ‘wasd’ for an experience that caters to your needs. Check out our <a href="#">futures</a> section for a peek at the roadmap.
            </p>
          </Feature>
          <Feature image="/images/feature-3.svg" height="304px">
            <h3>Accessible by default</h3>
            <p>One of the biggest wins with keybored has been creating a keyboard that’s not only clickable and tappable, but also targetable using tabbing.</p>
          </Feature>
        </Section>
        <Section dark id="guides">
          <Headline>
            <h1>Guides</h1>
            <h4>All you need to know to get started with keybored</h4>
            <Button text="View source" link="https://github.com/loganliffick/keybored" type="link" />
            <Flower delay color="var(--green)" size="40" top="-10px" left="-20px" />
            <Flower color="var(--yellow)" size="64" top="-60px" right="-40px" />
          </Headline>
          <Headline small>
            <h2>Install</h2>
            <h4>Let’s get tippity typing</h4>
          </Headline>
          <Install />
          <Headline small>
            <h2>Usage</h2>
            <h4>A peek behind the curtain</h4>
          </Headline>
          <iframe
            src="https://codesandbox.io/embed/keybored-bdc06?codemirror=1&fontsize=14&hidenavigation=1&theme=light&view=preview"
            style={{ width: '100%', height: '504px', border: '0', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}
            title="keybored"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
          <Options />
        </Section>
        <Section id="futures">
          <Headline>
            <h1>Futures</h1>
            <h4>Here’s a few things we would love your help creating to make keybored even better</h4>
            <Flower delay color="var(--blue)" size="64" top="-20px" left="-90px" />
            <Flower color="var(--red)" size="40" top="-30px" right="-104px" />
          </Headline>
          <Fr down n="1" title="Custom keyboreds" content="This is a big one. How sick would it be to have a ‘custom’ option allowing users to handcraft the keybored they need?" color="var(--blue)" background="var(--pink)" />
          <Fr n="2" title="TS support" content="Duh, everyone asks for this." color="var(--yellow)" background="var(--blue)" />
          <Fr down n="3" title="Mobile bugs" content="As you probably already know, there’s some bugginess on mobile. Hot-ticket item right here!" color="var(--red)" background="var(--yellow)" />
          <Fr n="4" title="Multi-key press" content="We’ll probably want to cmd+x at some point." color="var(--dark)" background="var(--green)" />
        </Section>
      </main>
      <footer>
        <h4>
          Created & maintained by{' '}
          <a href="https://loganliffick.com" target="_blank">
            Logan Liffick
          </a>
        </h4>
      </footer>
    </>
  );
};

export default Home;
