import { useState } from 'react';
import { ArrowUpRight, Linkedin, Menu, X } from 'lucide-react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#what', label: 'What I bring' },
  { href: '#built', label: "What I've built" },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Start a conversation' },
];

const stats = [
  { value: '$300K → $20M', label: 'Enterprise pilot grown into a managed service over two years' },
  { value: '250+', label: 'Marketing analytics practice built and scaled' },
  { value: '$30M', label: 'Annual P&L responsibility' },
  { value: '$7–8M', label: 'Projected annual savings identified in a GenAI content supply-chain pilot' },
];

const capabilities = [
  {
    number: '01',
    title: 'AI-native marketing operating model',
    description:
      'I design it from the output backwards and implement it end to end. Humans set the goals and guardrails, specialist agents generate, evaluate and act in a continuous loop, and real market signals feed learning. The commercial model is built in.',
    proof:
      'Developing an AI-native marketing operating model at MediaMint; led a GenAI content supply chain pilot (OpenAI + Adobe) that identified $7–8M in annual savings; built a 40% TCO-reduction value story for AI operations.',
    tags: ['Operating model design', 'Human-in-the-loop AI', 'Continuous learning', 'Commercial model'],
  },
  {
    number: '02',
    title: 'AI-powered marketing transformation',
    description:
      'Design and lead modern marketing operating models that combine AI, content, customer data, measurement, and automation. I connect the roadmap to real workflows, implementation ownership, and performance outcomes.',
    proof:
      "Embedded delivery lead for a global search leader's product marketing organization, scaling the team from 7 to 100+; grew a 250+ person analytics practice; led DAM (Aprimo) and CMS implementations.",
    tags: ['Adobe Experience Cloud', 'Marketo', 'Salesforce', 'Aprimo DAM', 'AEM', 'HubSpot', 'Customer data platform', 'Experimentation'],
  },
  {
    number: '03',
    title: 'Strategy and go-to-market',
    description:
      'Consulting from first question to funded plan: strategy, AI roadmaps and implementation plans, plus go-to-market support and client partnership for the teams who take it to market.',
    proof:
      "Built the AI advertising go-to-market strategy for Deloitte's Customer practice; lead go-to-market and 8+ enterprise proposals at MediaMint; $300K pilot grown into a $20M managed service.",
    tags: ['Strategy', 'AI roadmaps', 'Implementation planning', 'GTM support', 'Client partnership'],
  },
];

const products = [
  {
    title: 'AI Visibility Snapshot and GEO Audit',
    description:
      'Tests how ChatGPT, Claude and Gemini describe a brand, scores its AI visibility, checks technical readiness, and produces a prioritized action plan.',
    status: 'Live now. Request a snapshot and get your insights back within 1 working day.',
    cta: 'Request your snapshot',
    tags: ['AEO', 'GEO', 'AI search'],
  },
  {
    title: 'AI proposal agent system',
    description: 'Seven specialist AI agents that draft, solution, price and design enterprise proposals.',
    status: 'Cuts proposal time by 80%.',
    tags: ['Agentic AI', 'Proposal automation'],
  },
  {
    title: 'AI marketing operations agents',
    description: 'Agents that automate business rules, campaign analytics and reporting inside marketing operations.',
    status: 'End-to-end campaign operations with 70% cost savings.',
    tags: ['Agents', 'Marketing ops automation'],
  },
];

const experience = [
  {
    period: '2025 – present',
    role: 'Advisory, Large Account & AI Strategy',
    company: 'MediaMint',
    detail:
      'Enterprise go-to-market, strategic proposals, AI-led operations solutions, and operating-model development for technology and media clients.',
  },
  {
    period: '2023 – 2024',
    role: 'Senior Manager, Marketing and Applied Design',
    company: 'Deloitte',
    detail:
      'Led GenAI content supply-chain and marketing transformation engagements, Salesforce marketing operations work, and AI advertising go-to-market strategy.',
  },
  {
    period: '2007 – 2022',
    role: 'VP, Client Services — Marketing Transformation',
    company: 'Accenture',
    detail:
      'Account lead, delivery lead and practice lead. Built marketing analytics and operations capabilities; led strategic client relationships, global delivery, managed services growth, and P&L.',
  },
];

const faq = [
  {
    q: 'Who is Shubha Raju?',
    a: 'Shubha Raju is a Canada-based AI transformation and marketing operations leader with 18+ years of experience across Accenture, Deloitte, and MediaMint.',
  },
  {
    q: 'What does Shubha Raju specialize in?',
    a: 'AI-powered marketing operating models, enterprise AI roadmaps and implementation, marketing platforms and analytics, strategic account growth, and building global delivery organizations.',
  },
  {
    q: 'What outcomes has she led?',
    a: 'Scaling a $300K pilot into a $20M managed service, building a 250+ person analytics practice, holding $30M annual P&L responsibility, and leading a GenAI content pilot that identified $7–8M in projected annual savings.',
  },
  {
    q: 'How can I contact Shubha Raju?',
    a: 'By email at shubha2020@gmail.com or on LinkedIn at linkedin.com/in/shubha-raju.',
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="site" id="top">
      <header className="nav">
        <a href="#top" className="brand">SR</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">AI-native marketing operations</p>
        <h1>
          I build AI-native marketing operating models, <em>end to end.</em>
        </h1>
        <p className="lead">
          For 18+ years I've helped product marketing teams at the world's leading search company and other top
          technology platforms run marketing operations at scale. Today I design and implement AI-native marketing
          operating models end to end: the strategy and roadmap, the platforms and workflows, the people and
          governance, with the commercial model built in.
        </p>
        <div className="actions">
          <a className="button primary" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
          <a className="button" href="#built">See what I've built</a>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.value} className="proof-item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <p className="eyebrow">About</p>
        <h2>Strategy matters. <em>Making it work matters more.</em></h2>
        <p>
          I'm Shubha Raju, an AI transformation and marketing operations leader based in Vancouver, Canada, and
          available to work and travel anywhere in North America. My career has moved between client leadership,
          consulting, delivery, and building businesses, often at the same time.
        </p>
        <p>
          At Accenture, I helped scale enterprise marketing and analytics services, including growing a $300K pilot
          with a global search leader into a $20M managed service and growing a 250+ person analytics practice. At
          Deloitte, I led work spanning GenAI-enabled content operations and enterprise marketing transformation. More
          recently, at MediaMint, my focus has included enterprise go-to-market, AI-led operating models, and turning
          emerging capabilities into practical client solutions.
        </p>
        <p>
          What connects the work is a belief that transformation is not a strategy deck or a technology deployment. It
          is a new way of operating, one that connects commercial priorities, technology, people, governance, and
          results. I'm a specialist who builds: deep in marketing operations and AI, and hands-on enough to prove ideas
          in working systems.
        </p>
      </section>

      <section id="what" className="section">
        <p className="eyebrow">What I bring</p>
        <h2>From the first signal <em>to scale.</em></h2>
        {capabilities.map((c) => (
          <article key={c.number} className="card">
            <span className="number">{c.number}</span>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <p className="proof"><strong>Proof:</strong> {c.proof}</p>
            <div className="tags">
              {c.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section id="built" className="section">
        <p className="eyebrow">Products I've built</p>
        <h2>Not just advisory. <em>I build and prove.</em></h2>
        {products.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p className="status">{p.status}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            {p.cta && (
              <a className="button primary" href="#contact">{p.cta} <ArrowUpRight size={16} /></a>
            )}
          </article>
        ))}
      </section>

      <section id="experience" className="section">
        <p className="eyebrow">Experience</p>
        <h2>Enterprise scale. <em>Measurable outcomes.</em></h2>
        <p>18+ years with Fortune 100 brands across technology, communications, media, retail and life sciences.</p>
        {experience.map((e) => (
          <article key={e.company} className="card">
            <p className="period">{e.period}</p>
            <h3>{e.role}</h3>
            <p className="company">{e.company}</p>
            <p>{e.detail}</p>
          </article>
        ))}
      </section>

      <section className="section">
        <p className="eyebrow">FAQ</p>
        <h2>About <em>Shubha Raju</em></h2>
        {faq.map((f, i) => (
          <div key={f.q} className="faq-item">
            <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              {f.q}
            </button>
            {openFaq === i && <p>{f.a}</p>}
          </div>
        ))}
      </section>

      <section id="contact" className="section contact">
        <h2>Building an AI-native marketing engine? <em>Let's talk.</em></h2>
        <p>I'm always glad to talk with leaders shaping how AI and marketing work together, about leadership roles, speaking, or collaboration.</p>
        <div className="actions">
          <a className="button primary" href="mailto:shubha2020@gmail.com">Email me <ArrowUpRight size={16} /></a>
          <a className="button" href="https://www.linkedin.com/in/shubha-raju/" target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
        <p className="muted">Vancouver, Canada · Available across North America</p>
      </section>

      <footer className="footer">
        <span>© 2026 Shubha Raju</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
