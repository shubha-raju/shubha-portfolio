import { useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  Linkedin,
  Menu,
  MoveUpRight,
  X,
} from 'lucide-react';

const capabilities = [
  {
    number: '01',
    title: 'Commercial strategy',
    description:
      'Turn ambitious growth targets into a focused operating model, value story, and path to market that leadership can fund and teams can execute.',
    tags: ['Growth architecture', 'Value articulation', 'Go-to-market'],
  },
  {
    number: '02',
    title: 'AI transformation',
    description:
      'Move beyond pilots. Design the governance, workflows, and capability needed to make AI useful, trusted, and measurable across the business.',
    tags: ['AI operating models', 'Adoption', 'Responsible scale'],
  },
  {
    number: '03',
    title: 'Enterprise pursuit',
    description:
      'Make complex propositions matter to decision-makers — from the first signal to the final proposal, with a narrative built around business outcomes.',
    tags: ['RFP leadership', 'C-suite narrative', 'Account expansion'],
  },
];

const outcomes = [
  {
    year: '2025 — now',
    role: 'Client Partner, Large Account Sales & AI Strategy',
    company: 'MediaMint',
    detail:
      'Leading concurrent enterprise relationships, new-business origination, and AI strategy across the commercial portfolio.',
  },
  {
    year: '2023 — 2024',
    role: 'Senior Account Manager, Marketing & Advertising',
    company: 'Deloitte',
    detail:
      'Led multi-stakeholder pursuits and built the Generative AI content supply chain pilot for a global technology client.',
  },
  {
    year: '2007 — 2022',
    role: 'VP, Client Services — Marketing Transformation',
    company: 'Accenture',
    detail:
      'Grew a $300K digital campaign into a $20M managed service and built a 250+ person marketing analytics practice.',
  },
];

const principles = [
  'Start with the business outcome, not the tool.',
  'Make the complex clear enough to act on.',
  'Build capability, not dependency.',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Shubha Raju home">
          <span className="brand-mark">SR</span>
          <span className="brand-name">Shubha Raju</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#perspective" onClick={closeMenu}>Perspective</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu} className="nav-cta">
            Start a conversation <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Commercial strategy × AI transformation</div>
            <h1>I build the commercial systems that make <em>AI matter.</em></h1>
            <p className="hero-intro">
              I help ambitious organizations turn strategy into momentum — shaping the proposition,
              winning the room, and building the operating model to scale what works.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://calendly.com/shubha2020" target="_blank" rel="noreferrer">
                Book a growth diagnostic <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#perspective">Explore the thinking <ChevronDown size={16} /></a>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract graphic representing strategy, signal and scale">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core"><span>AI</span><small>×</small><span>GROWTH</span></div>
            <div className="art-label label-top">Strategy</div>
            <div className="art-label label-right">Signal</div>
            <div className="art-label label-bottom">Scale</div>
            <div className="art-dot dot-one" />
            <div className="art-dot dot-two" />
            <div className="art-dot dot-three" />
          </div>
        </section>

        <section className="proof-strip" aria-label="Selected results">
          <div className="proof-item"><strong>$60M+</strong><span>revenue generated across<br />Fortune 100 accounts</span></div>
          <div className="proof-item"><strong>$300K → $20M</strong><span>single account grown into<br />a managed service</span></div>
          <div className="proof-item"><strong>18+ years</strong><span>of enterprise transformation<br />and growth leadership</span></div>
          <div className="proof-item"><strong>600+</strong><span>people led across<br />global engagements</span></div>
        </section>

        <section className="perspective section-wrap" id="perspective">
          <div className="section-kicker">The perspective</div>
          <div className="perspective-grid">
            <h2>The gap between an AI ambition and an <span>AI advantage</span> is commercial.</h2>
            <div className="perspective-copy">
              <p>
                Most organizations do not need another strategy deck or disconnected tool. They need a clear
                answer to the question: <strong>what changes in the business on Monday?</strong>
              </p>
              <p>
                My work sits at that intersection — where customer reality, leadership priorities, technology,
                and execution meet. I make the case for change, then help teams deliver it.
              </p>
              <a className="arrow-link" href="https://transperience.ai/" target="_blank" rel="noreferrer">
                Explore Transperience.ai <MoveUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="capabilities section-wrap" id="capabilities">
          <div className="section-heading">
            <div className="section-kicker">What I do</div>
            <h2>From the first<br /><span>signal</span> to scale.</h2>
            <p>Senior counsel for leaders navigating their next stage of growth.</p>
          </div>
          <div className="capability-list">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.number}>
                <div className="card-topline"><span>{item.number}</span><ArrowUpRight size={19} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="experience-heading">
            <div className="section-kicker">The track record</div>
            <h2>Enterprise scale.<br /><span>Measurable outcomes.</span></h2>
          </div>
          <div className="experience-content">
            <p className="experience-lede">The same playbooks used with Fortune 50 clients, applied to the growth challenges in front of you.</p>
            <div className="timeline">
              {outcomes.map((outcome) => (
                <article className="timeline-item" key={outcome.year}>
                  <div className="timeline-year">{outcome.year}</div>
                  <div className="timeline-marker" />
                  <div className="timeline-detail">
                    <h3>{outcome.role}</h3>
                    <div className="timeline-company">{outcome.company}</div>
                    <p>{outcome.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="beliefs section-wrap">
          <div className="beliefs-quote">“</div>
          <div>
            <div className="section-kicker">A working philosophy</div>
            <blockquote>It is no longer about automating tasks. The next competitive edge is building an <em>autonomous growth engine</em> — while humans stay focused on strategy.</blockquote>
            <div className="principles">
              {principles.map((principle, index) => (
                <div className="principle" key={principle}><span>0{index + 1}</span>{principle}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-inner">
            <div className="section-kicker">Let’s make the next move</div>
            <h2>Find the one lever<br /><em>that moves your revenue.</em></h2>
            <p>Bring the ambition, the hard problem, or the half-formed idea. We’ll find the clearest place to start.</p>
            <a className="button button-light" href="https://calendly.com/shubha2020" target="_blank" rel="noreferrer">
              Book a 30-minute diagnostic <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="contact-meta">
            <a href="mailto:shubha2020@gmail.com">shubha2020@gmail.com</a>
            <a href="https://www.linkedin.com/in/shubha-raju/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <span>North Vancouver · Canada</span>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <span>© {new Date().getFullYear()} Shubha Raju</span>
        <span>Commercial strategy × AI transformation</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
