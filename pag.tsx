'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '@/styles/service.module.css';

type Service = { id: string; title: string; description: string };

const SERVICES: Service[] = [
  {
    id: 'ai-business-apps',
    title: 'AI Solution for Business Growth',
    description:
      'We design, train, and deploy custom AI models that integrate with your business applications—automating workflows, enhancing decision-making, and improving user experiences. From demand forecasting to document intelligence, we tailor models to your data and KPIs.',
  },
  {
    id: 'analytics-reporting',
    title: 'Business Analytics & Reporting',
    description:
      'Build a trustworthy analytics foundation. We set up data pipelines, semantic layers, and BI dashboards that deliver real-time, drill-down insights. Expect governance, quality checks, and metrics consistency your teams can rely on.',
  },
  {
    id: 'ai-digital-marketing',
    title: 'AI-Powered Digital Marketing',
    description:
      'Predictive audiences, creative testing at scale, and channel optimization powered by machine learning. We pair first-party data with AI to improve ROAS while respecting privacy and platform policies.',
  },
  {
    id: 'branding-ads',
    title: 'Branding & Advertisement',
    description:
      'Craft a brand story that resonates. We deliver identity systems, guidelines, creatives, and full-funnel ad campaigns—with performance telemetry so you see what actually moves the needle.',
  },
  {
    id: 'marketing-automation',
    title: 'Intelligent Marketing Automation',
    description:
      'Orchestrate omnichannel journeys using AI triggers, lead scoring, and content personalization. Reduce manual work and increase conversion with robust segmentation and lifecycle playbooks.',
  },
  {
    id: 'rag-chatbots',
    title: 'RAG Powered Chatbots',
    description:
      'Deploy retrieval-augmented generation chatbots that answer with grounded, source-linked context from your documents, CMS, or data warehouse—secure, auditable, and enterprise-ready.',
  },
];

export default function ServicesPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const spinnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 8,
          duration: 0.3,
          ease: 'power2.out',
          force3D: true,
        });
      }
      if (spinnerRef.current) {
        gsap.set(spinnerRef.current, { willChange: 'transform', transformPerspective: 1000 });
        gsap.to(spinnerRef.current, {
          rotate: 360,
          duration: 8,
          ease: 'none',
          repeat: -1,
          force3D: true,
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbsoluteTop = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <main className={styles.wrapper} ref={rootRef}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTop}>
            <div className={styles.headingCol}>
              <h1 ref={headingRef} className={styles.heading}>
                <span className={styles.headingAccent}>Our</span> Services
              </h1>
              <div className={styles.note}>
                <p>Muasr is commited to give effective and efficient services</p>
              </div>
            </div>

            {/* Single multi-color spinning ball */}
            <div className={styles.spinWrap}>
              <div ref={spinnerRef} className={styles.spinBall} aria-hidden="true" />
            </div>
          </div>

          {/* Compact 3×2 grid (titles only) */}
          <div className={styles.grid}>
            {SERVICES.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={styles.card} aria-label={`Go to ${s.title}`}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className={styles.detailsSection} aria-labelledby="services-details-title">
        <h2 id="services-details-title" className={styles.sectionHeading}>Service Details</h2>

        {/* ===== AI for Business Growth ===== */}
        <div id="ai-business-apps" className={styles.detailCard}>
          <h3 className={styles.detailTitle}>AI Solution for Business Growth</h3>
          <p className={styles.detailText}>
            We build measurable AI that improves operations, reduces costs, and creates new value across your stack.
          </p>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Overview / What We Offer</h4>
            <p className={styles.detailBody}>
              End-to-end AI: discovery, model selection, training, deployment, and monitoring, fully integrated with your
              apps and data.
            </p>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Key Features / What’s Included</h4>
            <ul className={styles.detailList}>
              <li>Use-case discovery and ROI estimation</li>
              <li>Custom models (LLMs, classifiers, forecasting, document AI)</li>
              <li>MLOps pipelines (data prep, training, eval, rollout)</li>
              <li>Secure APIs & microservices integration</li>
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Benefits / Why It Matters</h4>
            <ul className={styles.pillList}>
              <li>Automate repetitive work</li>
              <li>Faster, smarter decisions</li>
              <li>Lower operational cost</li>
              <li>Scalable & maintainable</li>
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Process / How We Work</h4>
            <ol className={styles.stepList}>
              <li>Discovery & success metrics</li>
              <li>Solution design & data readiness</li>
              <li>Model development & evaluation</li>
              <li>Deployment, monitoring, iteration</li>
            </ol>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Industries We Serve</h4>
            <p className={styles.detailBody}>E-commerce, Finance, Healthcare, Logistics, Education, SaaS.</p>
          </div>

          <div className={styles.detailCTA}>
            <a href="#" onClick={scrollToAbsoluteTop} className={styles.backLink}>Back to services</a>
          </div>
        </div>

        {/* ===== Analytics & Reporting ===== */}
        <div id="analytics-reporting" className={styles.detailCard}>
          <h3 className={styles.detailTitle}>Business Analytics & Reporting</h3>
          <p className={styles.detailText}>
            Reliable data, consistent metrics, and fast insights, so teams can trust what they see and act quickly.
          </p>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Overview / What We Offer</h4>
            <p className={styles.detailBody}>
              Modern data stack setup with governed metrics and BI experiences tailored to roles and workflows.
            </p>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Key Features / What’s Included</h4>
            <ul className={styles.detailList}>
              <li>ELT pipelines & warehouse modeling</li>
              <li>Semantic layer & versioned metrics</li>
              <li>Dashboards, self-serve exploration, alerts</li>
              <li>Data quality checks & governance</li>
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Benefits / Why It Matters</h4>
            <ul className={styles.pillList}>
              <li>One source of truth</li>
              <li>Real-time visibility</li>
              <li>Self-serve decisions</li>
              <li>Compliance & trust</li>
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Process / How We Work</h4>
            <ol className={styles.stepList}>
              <li>Data audit & objectives</li>
              <li>Architecture & modeling</li>
              <li>Dashboarding & enablement</li>
              <li>Monitoring & optimization</li>
            </ol>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Industries We Serve</h4>
            <p className={styles.detailBody}>Retail, B2B SaaS, FinTech, Healthcare, Manufacturing.</p>
          </div>

          <div className={styles.detailCTA}>
            <a href="#" onClick={scrollToAbsoluteTop} className={styles.backLink}>Back to services</a>
          </div>
        </div>

        {/* ===== AI-Powered Digital Marketing ===== */}
        <div id="ai-digital-marketing" className={styles.detailCard}>
          <h3 className={styles.detailTitle}>AI-Powered Digital Marketing</h3>
          <p className={styles.detailText}>
            Data-driven planning and optimization that improves ROAS while staying privacy-safe across channels.
          </p>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Overview / What We Offer</h4>
            <p className={styles.detailBody}>
              Predictive audiences, creative scoring, and budget allocation powered by ML and experiment design.
            </p>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Key Features / What’s Included</h4>
            <ul className={styles.detailList}>
              <li>Audience modeling & look-alikes</li>
              <li>Creative testing at scale</li>
              <li>Bid/budget optimization</li>
              <li>MMM & incrementality testing</li>
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Benefits / Why It Matters</h4>
            <ul className={styles.pillList}>
              <li>Higher ROAS</li>
              <li>Faster learning</li>
              <li>Privacy-first activation</li>
              <li>Clear attribution</li>
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Process / How We Work</h4>
            <ol className={styles.stepList}>
              <li>Audit & goal setting</li>
              <li>Modeling & experiments</li>
              <li>Activation & optimization</li>
              <li>Reporting & iteration</li>
            </ol>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Industries We Serve</h4>
            <p className={styles.detailBody}>E-commerce, D2C, Marketplaces, B2B lead gen, Apps.</p>
          </div>

          <div className={styles.detailCTA}>
            <a href="#" onClick={scrollToAbsoluteTop} className={styles.backLink}>Back to services</a>
          </div>
        </div>

        {/* ===== Branding & Advertisement ===== */}
        <div id="branding-ads" className={styles.detailCard}>
          <h3 className={styles.detailTitle}>Branding & Advertisement</h3>
          <p className={styles.detailText}>
            Cohesive brand systems and performance-ready campaigns that resonate across touchpoints.
          </p>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Overview / What We Offer</h4>
            <p className={styles.detailBody}>
              From strategy and identity to creative production and media planning, end-to-end brand execution.
            </p>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Key Features / What’s Included</h4>
            <ul className={styles.detailList}>
              <li>Brand strategy, voice, and visual identity</li>
              <li>Guidelines & asset toolkits</li>
              <li>Creative production (static/video/UGC)</li>
              <li>Paid media planning & execution</li>
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Benefits / Why It Matters</h4>
            <ul className={styles.pillList}>
              <li>Clear positioning</li>
              <li>Memorable creative</li>
              <li>Consistent experience</li>
              <li>Measurable growth</li>
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Process / How We Work</h4>
            <ol className={styles.stepList}>
              <li>Research & strategy</li>
              <li>Identity & guidelines</li>
              <li>Production & media plan</li>
              <li>Launch & optimization</li>
            </ol>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Industries We Serve</h4>
            <p className={styles.detailBody}>Startups, Consumer brands, B2B, FinTech, Health, Education.</p>
          </div>

          <div className={styles.detailCTA}>
            <a href="#" onClick={scrollToAbsoluteTop} className={styles.backLink}>Back to services</a>
          </div>
        </div>

        {/* ===== Marketing Automation ===== */}
        <div id="marketing-automation" className={styles.detailCard}>
          <h3 className={styles.detailTitle}>Intelligent Marketing Automation</h3>
          <p className={styles.detailText}>
            Smarter journeys with AI triggers, lead scoring, and personalization across email, SMS, and ads.
          </p>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Overview / What We Offer</h4>
            <p className={styles.detailBody}>
              Build and operate lifecycle programs that convert, backed by robust data pipelines and templates.
            </p>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Key Features / What’s Included</h4>
            <ul className={styles.detailList}>
              <li>Lead scoring & journey orchestration</li>
              <li>Dynamic segmentation & personalization</li>
              <li>Template libraries & content ops</li>
              <li>Deliverability & QA monitoring</li>
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Benefits / Why It Matters</h4>
            <ul className={styles.pillList}>
              <li>Higher conversions</li>
              <li>Less manual work</li>
              <li>Consistent messaging</li>
              <li>Measurable revenue impact</li>
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Process / How We Work</h4>
            <ol className={styles.stepList}>
              <li>Audit & data mapping</li>
              <li>Playbooks & journeys</li>
              <li>Personalization & testing</li>
              <li>Reporting & optimization</li>
            </ol>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Industries We Serve</h4>
            <p className={styles.detailBody}>B2B SaaS, E-commerce, Education, Marketplaces.</p>
          </div>

          <div className={styles.detailCTA}>
            <a href="#" onClick={scrollToAbsoluteTop} className={styles.backLink}>Back to services</a>
          </div>
        </div>

        {/* ===== RAG Chatbots ===== */}
        <div id="rag-chatbots" className={styles.detailCard}>
          <h3 className={styles.detailTitle}>RAG Powered Chatbots</h3>
          <p className={styles.detailText}>
            Chatbots that answer with grounded context and citations from your own knowledge sources, secure by design.
          </p>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Overview / What We Offer</h4>
            <p className={styles.detailBody}>
              Retrieval-augmented generation with document ingestion, vector search, guardrails, and observability.
            </p>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Key Features / What’s Included</h4>
            <ul className={styles.detailList}>
              <li>Connectors to files, CMS, DBs, and APIs</li>
              <li>Chunking, embeddings, and relevance tuning</li>
              <li>Prompt engineering with citations & safeguards</li>
              <li>Analytics, feedback loops, & continuous improvement</li>
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Benefits / Why It Matters</h4>
            <ul className={styles.pillList}>
              <li>Accurate, auditable answers</li>
              <li>Lower support costs</li>
              <li>24/7 availability</li>
              <li>Enterprise security</li>
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Process / How We Work</h4>
            <ol className={styles.stepList}>
              <li>Knowledge audit & data prep</li>
              <li>Retriever & prompt tuning</li>
              <li>UX integration & testing</li>
              <li>Monitoring & iteration</li>
            </ol>
          </div>

          <div className={styles.detailBlock}>
            <h4 className={styles.detailSubhead}>Industries We Serve</h4>
            <p className={styles.detailBody}>Customer support, HR/IT helpdesk, Sales enablement, Ops.</p>
          </div>

          <div className={styles.detailCTA}>
            <a href="#" onClick={scrollToAbsoluteTop} className={styles.backLink}>Back to services</a>
          </div>
        </div>
      </section>
    </main>
  );
}
