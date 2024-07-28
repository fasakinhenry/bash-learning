// import clsx from 'clsx';
// import React from 'react';
// import styles from './styles.module.css';

// const features = [
//   {
//     title: 'Live Video',
//     imageUrl: 'img/live_video.svg',
//     description: 'Enable live video communication within your application. Perfect for education, telemedicine, social networks and gaming.',
//   },
//   {
//     title: 'Voice',
//     imageUrl: 'img/voice.svg',
//     description: 'Incorporate high-quality real-time audio into your application. Build voice calls, audio conferences, voice chats in games and more.',
//   },
//   {
//     title: 'Interactive Live Streaming',
//     imageUrl: 'img/interactive_live_streaming.svg',
//     description: 'Integrate highly scalable live video broadcasting capabilities into your app, ideal for apps that involve streaming webinars, sports or live events.',
//   },
// ];

// function Feature({imageUrl, title, description}) {
//   return (
//     <div className={clsx('col col--4', styles.featureCard)}>
//       <img src={imageUrl} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.mainContent}>
//       <div className="container">
//         <div className="row">
//           {features.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Old one

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
