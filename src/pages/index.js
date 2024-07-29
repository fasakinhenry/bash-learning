import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
// For react typing animation
import TypingEffect from '/src/components/TypingEffect';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <header className={clsx('', styles.heroBanner)}>
      <div className='container'>
        <Heading as='h1' className='hero__title'>
          {siteConfig.title}
        </Heading>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <TypingEffect
          textArray={[
            'Bash the Learning Curve...',
            'Shell Out Your Potential...',
            'Command Line, Mastered...',
            'Script Your Success...',
            'Elevate Your Terminal Game...',
            'From Bash Novice to Pro...',
            'Unlock the Power of Bash...',
            'Your Bash Journey Starts Here...',
            'KnowBash: Where Confusion Ends...',
            'Level Up Your Bash Skills...',
            'Bash Basics to Beyond...',
            'Navigate the Shell Like a Pro...',
            'Embrace the Command Line...',
            'Bash: Learn, Apply, Succeed...',
            'Transform Your Workflow with Bash...',
          ]}
        />
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/intro'
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
