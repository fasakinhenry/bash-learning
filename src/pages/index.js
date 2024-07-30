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
            'Shell Out and learn bash...',
            'Ditch the bashing, learn with knowbash...',
            'Command Line, Mastered...',
            'Script Your Success...',
            'Elevate Your Terminal Game...',
            'From Bash Novice to Pro...',
            'Bashing Ends Here. KnowBash Begins...',
            'Unlock the Power of Bash...',
            'Your Bash Journey Starts Here...',
            'KnowBash: Where Confusion Ends...',
            'Tired of Bashing, Knowbash it...',
            'Level Up Your Bash Skills...',
            'Bash Basics to Beyond...',
            'Bash beyond belief...',
            'Enjoy the Bash learning Hub...',
            'Become bashfully brilliant...',
            'Bashing is really a good skill ;)...',
            'Navigate the Shell Like a Pro...',
            'Embrace the Command Line...',
            'Bash: Learn, Apply, Succeed...',
            'Transform Your Workflow with Bash...',
            'Bash Mastery Unlocked...',
            'Learn Bash, Rule the Shell...',
            'Your Bash Learning Shortcut...',
            'Bash Brilliance Begins Here...',
            'Bash the limits, Learn more...',
            'Can you really bash without Bashing?..'
          ]}
        />
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/intro'
          >
            Know bash now - 2 weeks or less ⏱️
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
