import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import Heading from '@theme/Heading';

export default function About() {
  return (
    <Layout title="About Eshan Pai">
      <main style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
        <Heading as="h1" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          A Note to the Readers...
        </Heading>
        <p>
          I’m Eshan — a finance guy turned founder, building products that make money feel less… complicated.
        </p>
        <p>
          I moved to Australia with a backpack, a Myki card, and enough curiosity to ask why every small business still pays to get paid. That question turned into a startup. That startup turned into a story.
        </p>
        <p>
          Here, on <a href='eshanpai.com'><strong>eshanpai.com</strong></a>, I write about money, migration, mindset, and modern startups. You’ll find:
        </p>
        <ul>
          <li><strong>Founder Diaries</strong> — the real stuff behind building something from scratch</li>
          <li><strong>The Money Yarn</strong> — fintech stories across Australia and India</li>
          <li><strong>Startup Snapshots and Company Analyses</strong> — so you don’t just watch the news, you understand it</li>
          <li><strong>Book Reviews</strong> — because better decisions start with better thinking</li>
          <li>And the occasional post about chai, QR codes, or why I still read paperbacks</li>
        </ul>
        <p>
          This isn’t just a blog. It’s a record of doing things the hard way — publicly, honestly, and hopefully usefully.
        </p>
        <p>
          Whether you’re a student, founder, migrant, or just money-curious, I hope something here helps you think sharper, build braver, or save better.
        </p>
        <p>
          Thanks for stopping by. There’s always a yarn brewing.
        </p>
      </main>
    </Layout>
  );
}
