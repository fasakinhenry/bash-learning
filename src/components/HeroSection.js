import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Live Video',
    link: '/docs/live-video/intro-video-conf',
    lightImage: '/static/img/video-graphic.png',
    darkImage: '/static/img/video-graphic-dark.png',
    text: 'Enable live video communication within your application. Perfect for education, telemedicine, social networks, and gaming.',
  },
  {
    title: 'Voice',
    link: '/docs/voice-conf/intro-voice-conf',
    lightImage: '/static/img/voice-graphic.png',
    darkImage: '/static/img/voice-graphic-dark.png',
    text: 'Incorporate high-quality real-time audio into your application. Build voice calls, audio conferences, voice chats in games, and more.',
  },
  {
    title: 'Interactive Live Streaming',
    link: '/docs/livestream/livestream-overview',
    lightImage: '/static/img/livestream-graphic.png',
    darkImage: '/static/img/livestream-graphic-dark.png',
    text: 'Integrate highly scalable live video broadcasting capabilities into your app, ideal for apps that involve streaming webinars, sports, or live events.',
  },
];

function HeroProduct({ link, title, lightImage, darkImage, text }) {
  return (
    <Link to={link} className='hero-product-link'>
      <div className='hero-product'>
        <h3>{title}</h3>
        <p>{text}</p>
        <ThemedImage
          sources={{ light: lightImage, dark: darkImage }}
          alt={title}
          className='hero-product-image'
        />
      </div>
    </Link>
  );
}

export default function HeroSection() {
  return (
    <div className='hero'>
      <h1 className='hero__title'>Build with KnowBash</h1>
      <p className='hero__subtitle'>
        At KnowBash, we're building the future of Bash scripting. Integrate
        programmable, and easily customizable Bash scripts into your projects
        with just a few lines of code.
      </p>
      <div className='hero-products'>
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </div>
    </div>
  );
}
