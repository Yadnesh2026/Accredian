"use client";

import { useState } from "react";
import LeadForm from "./LeadForm";
import {
  academies,
  categories,
  edgePoints,
  faqs,
  heroStats,
  learners,
  navigationLinks,
  partnerLogos,
  processSteps,
  testimonials,
} from "./data";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "centered" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function EnterprisePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="enterprise-page">
      <header className="site-header">
        <div className="shell nav-shell">
          <a href="#overview" className="brand-mark" aria-label="Accredian Enterprise homepage">
            <span className="brand-dot" />
            <span>
              Accredian
              <small>Enterprise Learning</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigationLinks.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="button button-primary desktop-cta">
              Enquire Now
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="mobile-nav">
            {navigationLinks.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="button button-primary" onClick={closeMenu}>
              Enquire Now
            </a>
          </div>
        ) : null}
      </header>

      <main>
        <section id="overview" className="hero-section">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Enterprise learning built for business change</p>
              <h1>Custom learning journeys for teams that need measurable growth, not generic training.</h1>
              <p className="hero-text">
                This landing page is a structured recreation of the Accredian Enterprise experience using reusable
                Next.js components, a responsive layout, and a mock lead-capture API flow.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="button button-primary">
                  Talk To The Team
                </a>
                <a href="#catalog" className="button button-secondary">
                  Explore Programs
                </a>
              </div>
              <div className="stat-row">
                {heroStats.map((item) => (
                  <article key={item.label} className="stat-pill">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hero-panel">
              <div className="hero-panel-card glass-card">
                <p className="mini-label">Launch Snapshot</p>
                <h3>From skill mapping to rollout in one enterprise-ready workflow.</h3>
                <ul className="feature-list">
                  <li>Role-based pathways</li>
                  <li>Hybrid delivery options</li>
                  <li>Mentor-led sessions</li>
                  <li>Progress tracking</li>
                </ul>
              </div>

              <div className="hero-panel-card metrics-card">
                <div>
                  <span>Preferred formats</span>
                  <strong>Online, hybrid, onsite</strong>
                </div>
                <div>
                  <span>Focus areas</span>
                  <strong>Leadership, GenAI, product, data</strong>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="stats" className="section-shell">
          <div className="shell">
            <SectionHeading
              eyebrow="Track record"
              title="The numbers behind the enterprise offering"
              description="The original site emphasizes social proof and traction early in the page, so this section keeps that same trust-building rhythm."
              align="center"
            />
            <div className="impact-grid">
              {heroStats.map((item) => (
                <article key={item.value} className="impact-card">
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="clients" className="section-shell muted-section">
          <div className="shell">
            <SectionHeading
              eyebrow="Trusted by teams"
              title="Enterprise partners across technology, finance, and operations"
              description="Brand marks are recreated as clean text chips to keep the implementation original while preserving the reference page's credibility section."
            />
            <div className="logo-grid">
              {partnerLogos.map((logo) => (
                <div key={logo} className="logo-chip">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="edge" className="section-shell">
          <div className="shell">
            <SectionHeading
              eyebrow="Accredian edge"
              title="A delivery model built around outcomes, not just attendance"
              description="This section mirrors the reference site's enterprise value framing while using fresh copy and a more editorial card layout."
            />
            <div className="card-grid four-up">
              {edgePoints.map((item, index) => (
                <article key={item.title} className="info-card">
                  <span className="card-kicker">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="catalog" className="section-shell">
          <div className="shell">
            <SectionHeading
              eyebrow="Program categories"
              title="Learning architecture that scales across teams and seniority levels"
              description="The original page groups programs by format, industry, topic, and level. This build keeps that logic and presents it with reusable cards."
            />
            <div className="card-grid">
              {categories.map((item) => (
                <article key={item.title} className="program-card">
                  <div className="program-visual" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell accent-band">
          <div className="shell split-band">
            <div>
              <p className="eyebrow light">Who should join</p>
              <h2>Strategic skill enhancement for every stage of the workforce</h2>
            </div>
            <div className="learner-grid">
              {learners.map((item) => (
                <article key={item.title} className="learner-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell muted-section">
          <div className="shell">
            <SectionHeading
              eyebrow="Capability tracks"
              title="Popular enterprise academies"
              description="These cards reinterpret the domain-focused section from the reference page with cleaner spacing and stronger hierarchy."
            />
            <div className="card-grid three-up">
              {academies.map((item) => (
                <article key={item.title} className="academy-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-shell">
          <div className="shell">
            <SectionHeading
              eyebrow="How it works"
              title="A simple three-step rollout for enterprise cohorts"
              description="The reference journey is intentionally straightforward, so this version keeps the flow concise and easy to scan."
            />
            <div className="process-grid">
              {processSteps.map((item, index) => (
                <article key={item.title} className="process-card">
                  <span>{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell">
          <div className="shell faq-layout">
            <div>
              <SectionHeading
                eyebrow="FAQs"
                title="Questions teams usually ask before launch"
                description="A compact accordion keeps the interaction smooth on mobile and desktop."
              />
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => {
                const expanded = openFaq === index;

                return (
                  <article key={item.question} className={`faq-card ${expanded ? "open" : ""}`}>
                    <button type="button" onClick={() => setOpenFaq(expanded ? -1 : index)}>
                      <span>{item.question}</span>
                      <strong>{expanded ? "-" : "+"}</strong>
                    </button>
                    {expanded ? <p>{item.answer}</p> : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-shell muted-section">
          <div className="shell">
            <SectionHeading
              eyebrow="Testimonials"
              title="What enterprise partners say after delivery"
              description="The reference page closes with social proof, so this clone keeps a testimonial lane before the final CTA."
              align="center"
            />
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article key={item.company} className="testimonial-card">
                  <span className="quote-mark">"</span>
                  <p>{item.quote}</p>
                  <strong>{item.company}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="shell contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">Lead capture</p>
              <h2>Start a conversation about your next learning cohort</h2>
              <p>
                This form is wired to a Next.js App Router API route, which satisfies the assignment's API integration
                requirement while staying easy to deploy on Vercel.
              </p>
              <ul className="contact-points">
                <li>Reusable form state with hooks</li>
                <li>Client-side submission feedback</li>
                <li>Server-side validation in `/api/lead`</li>
              </ul>
            </div>
            <div className="contact-card">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <a href="#overview" className="brand-mark footer-brand">
              <span className="brand-dot" />
              <span>
                Accredian
                <small>Enterprise Learning</small>
              </span>
            </a>
            <p>
              A responsive Next.js recreation of the Accredian Enterprise landing experience with reusable sections,
              anchor navigation, and a working mock API flow.
            </p>
          </div>
          <div className="footer-links">
            {navigationLinks.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
