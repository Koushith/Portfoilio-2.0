import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Navbar } from './src/components/common/navbar/navbar.component';
import { Card } from './src/components/card/card.component';
import { Hero } from './src/components/hero/hero.component';
import { HackathonProjects } from './src/components/hackathon-project/projects/hackathon-project.component';
import { HackathonSection } from './src/components/hackathon-project/hackathon-section.component';
import { SkillsSection } from './src/components/skills-section/skills-section.component';
import { WorkExperience } from './src/components/experience/experience-section.component';
import { BlogSection } from './src/components/blog-section/blog-section.component';
import { Footer } from './src/components/common/footer/footer.component';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Koushith Amin</title>
        <meta name='description' content='Portfolio 2.0' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
          integrity='sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=='
          crossOrigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>

      <Hero />
      <HackathonSection />
      {/* <SkillsSection /> */}
      <WorkExperience />
      <BlogSection />
    </div>
  );
}
