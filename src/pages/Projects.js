import React, { useState } from 'react';

const projects = [
  {
    id: 'tigerdata',
    title: 'TigerData Fitness Tracker',
    tagline: 'Agentic AI powerlifting coach & analytics platform',
    status: 'live',
    stack: ['Python', 'TimescaleDB', 'FastAPI', 'Streamlit', 'Claude API', 'Plotly', 'Railway'],
    description:
      'An agentic powerlifting tracker built on TimescaleDB. Ingests workout data via natural language, stores sets as time-series data in hypertables, and projects 1RM progress toward 2026 PR targets using continuous aggregates and linear regression.',
    highlights: [
      'AI coaching interface powered by Claude tool-use agents',
      'Natural language workout ingestion — no manual form entry',
      'Real-time Streamlit dashboard with Plotly visualizations',
      'Linear regression 1RM projections against PR targets',
    ],
    challenges:
      'Designing the TimescaleDB schema to efficiently store and aggregate time-series workout data while keeping Claude tool-use calls stateless was the core architectural challenge. Continuous aggregates required careful hypertable configuration to stay performant at scale.',
    future: [
      'User authentication & multi-user support',
      'Calorie & diet tracking tab',
      'Sleep quality logging & correlation analysis',
      'Expanded workout tracker (cardio, mobility)',
    ],
    demo: 'https://tigerdata-fitness-tracker-production-a693.up.railway.app',
    github: 'https://github.com/zmcentire/tigerdata-fitness-tracker',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
  },
  {
    id: 'poly',
    title: 'Poly Platform',
    tagline: 'Event scheduling & social platform for organizations',
    status: 'live',
    stack: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
    description:
      'A social event scheduling platform that combines organizational exclusivity with interest-based content to encourage face-to-face engagement for university students and company employees.',
    highlights: [
      'Built navigation, menus, and typography systems',
      'Developed reusable action card components in Angular',
      'Interest-based content discovery for orgs and events',
      'Backend data aggregation for organizational analytics',
    ],
    challenges:
      'Building reusable, composable Angular components that could scale across different organizational contexts required careful attention to input/output contracts and TypeScript typing discipline.',
    demo: 'https://getpolyplatform.com/',
    github: null,
    image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800',
  },
  {
    id: 'hotzone',
    title: 'HotZone',
    tagline: 'Comprehensive resource app for firefighters & paramedics',
    status: 'live',
    stack: ['React', 'Firebase', 'Node.js', 'CSS'],
    description:
      'A field resource application for firefighters and paramedics to quickly look up drug protocols, administration dosages, Utah hospital locations, fire hazard information by building type, and county-specific procedures — all accessible offline-first in the field.',
    highlights: [
      'Custom Firebase API storing drug, protocol, and fire hazard data',
      'County-specific protocol filtering',
      'Utah hospital directory with quick-reference info',
      'Designed for high-pressure, low-latency field use',
    ],
    challenges:
      'The UX challenge was building an interface that works under genuine stress — large tap targets, minimal cognitive load, and fast lookup. Data architecture in Firebase required careful normalization to support fast county-filtered queries.',
    demo: 'https://firehouse-app.web.app',
    github: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  },
  {
    id: 'stoic-quote',
    title: 'Stoic Quote Generator',
    tagline: 'Random quote generator powered by a custom Stoicism API',
    status: 'live',
    stack: ['React', 'Node.js', 'Reactstrap', 'REST API', 'CSS'],
    description:
      'A random quote generator that pulls from a custom-built API of Stoic philosophy quotes. Built and hosted the quote data as its own REST API, then consumed it in a clean React interface.',
    highlights: [
      'Custom-built quote API — not a third-party data source',
      'Randomized quote selection with philosopher attribution',
      'Clean single-page React interface',
    ],
    challenges:
      'Hosting a custom REST API as a free-tier service introduced cold-start latency. Managed this with a loading state and optimistic UI.',
    future: [
      'Filter by philosopher or theme',
      'Daily quote via email subscription',
    ],
    demo: 'https://stoic-quote.netlify.app',
    github: 'https://github.com/zmcentire/vschool/tree/master/exercise/stoic-quote',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  },
  {
    id: 'stoic-timeline',
    title: 'Stoic Timeline',
    tagline: 'Interactive timeline & biographies of Stoic philosophers',
    status: 'live',
    stack: ['React', 'styled-components', 'CSS'],
    description:
      'An interactive timeline React app featuring bios, notable quotes, and recommended readings for prolific Stoic philosophers — Marcus Aurelius, Seneca, Epictetus, Zeno, and more. Includes a light/dark theme toggle.',
    highlights: [
      'Clickable timeline navigation with smooth bio transitions',
      'Light/dark theme toggle via styled-components ThemeProvider',
      'Rich biographical content with primary source recommendations',
    ],
    challenges:
      'Building smooth, stateful transitions between philosopher bios without a heavy animation library — achieved via CSS transitions and React state.',
    future: [
      'Expand to other ancient philosophy schools',
      'Audio narration of selected quotes',
    ],
    demo: 'https://stoic-timeline.netlify.app',
    github: 'https://github.com/zmcentire/stoic-bio',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
  },
  {
    id: 'metronome',
    title: 'React Metronome',
    tagline: 'Precise BPM metronome built in React',
    status: 'live',
    stack: ['React', 'Web Audio API'],
    description:
      'A clean, functional metronome app with BPM control and audio click built using React and the Web Audio API. A focused exercise in precise timing and audio scheduling in the browser.',
    highlights: [
      'Web Audio API for sample-accurate click scheduling',
      'BPM slider with tap-tempo input',
    ],
    challenges:
      'Browser audio scheduling requires working slightly ahead of playback time to prevent drift — implemented a lookahead scheduler pattern to maintain click accuracy.',
    future: [],
    demo: 'https://react-metronome-zm.netlify.app',
    github: 'https://github.com/zmcentire/react-metronome',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800',
  },
  {
    id: 'recipe',
    title: 'React Recipe App',
    tagline: 'Recipe search powered by the Edamam API',
    status: 'issue',
    statusNote: 'CORS issue — API proxy refactor planned',
    stack: ['React', 'Edamam API', 'CSS'],
    description:
      'A recipe search application using React and the Edamam recipe search API. Fetches and displays recipe cards with ingredients, nutrition info, and source links.',
    highlights: [
      'Dynamic recipe search with debounced input',
      'Recipe card grid with nutrition summary',
    ],
    challenges:
      'The Edamam API currently returns CORS errors when called directly from the browser. The fix is proxying requests through a serverless function (Netlify Function or Next.js API route) — this refactor is planned.',
    future: [
      'Proxy API calls through a serverless function to resolve CORS',
      'Save favorite recipes to localStorage',
    ],
    demo: 'https://zachmac-recipe-react.netlify.app/',
    github: 'https://github.com/zmcentire/react-recipe-app',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800',
  },
];

const statusConfig = {
  live:    { label: 'Live',             color: '#00e5ff',  bg: 'rgba(0,229,255,0.08)',  border: 'rgba(0,229,255,0.25)' },
  offline: { label: 'Redeploying',      color: '#b8960c',  bg: 'rgba(184,150,12,0.08)', border: 'rgba(184,150,12,0.25)' },
  issue:   { label: 'Known Issue',      color: '#c0392b',  bg: 'rgba(192,57,43,0.08)',  border: 'rgba(192,57,43,0.25)' },
};

const CYAN    = '#00e5ff';
const CRIMSON = '#8b1a1a';
const BRASS   = '#b8960c';
const OBSIDIAN = '#0d0d0f';
const SURFACE  = '#13141a';
const SURFACE2 = '#1a1b24';
const BORDER   = '#2a2b38';
const TEXT_PRIMARY   = '#e8e6df';
const TEXT_SECONDARY = '#9a9890';

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(prev => prev === id ? null : id);

  return (
    <div style={styles.page}>
      <div style={styles.scanlines} aria-hidden="true" />

      <main style={styles.container}>
        <header style={styles.pageHeader}>
          <p style={styles.eyebrow}>
            <span style={styles.accent}>{'// '}</span>Selected Work
          </p>
          <h1 style={styles.pageTitle}>Projects</h1>
        </header>

        <div style={styles.grid} role="list">
          {projects.map((project) => {
            const isOpen = expanded === project.id;
            const status = statusConfig[project.status];

            return (
              <article
                key={project.id}
                style={{
                  ...styles.card,
                  ...(isOpen ? styles.cardOpen : {}),
                }}
                role="listitem"
                aria-label={project.title}
              >
                {/* Project image */}
                <div style={styles.imageWrapper} aria-hidden="true">
                  <img
                    src={project.image}
                    alt=""
                    style={styles.image}
                    loading="lazy"
                  />
                  <div style={styles.imageOverlay} />
                </div>

                {/* Card header */}
                <div style={styles.cardBody}>
                  <div style={styles.cardTop}>
                    <div>
                      <h2 style={styles.projectTitle}>{project.title}</h2>
                      <p style={styles.tagline}>{project.tagline}</p>
                    </div>
                    <span
                      style={{
                        ...styles.statusBadge,
                        color: status.color,
                        background: status.bg,
                        border: `1px solid ${status.border}`,
                      }}
                      aria-label={`Status: ${status.label}`}
                    >
                      {status.label}
                    </span>
                  </div>

                  {project.statusNote && (
                    <p style={styles.statusNote}>{project.statusNote}</p>
                  )}

                  {/* Stack pills */}
                  <ul style={styles.stackList} aria-label="Technologies used">
                    {project.stack.map((tech) => (
                      <li key={tech} style={styles.stackPill}>{tech}</li>
                    ))}
                  </ul>

                  <p style={styles.description}>{project.description}</p>

                  {/* Expandable case study */}
                  <button
                    style={styles.expandBtn}
                    onClick={() => toggle(project.id)}
                    aria-expanded={isOpen}
                    aria-controls={`case-study-${project.id}`}
                  >
                    <span>{isOpen ? '− ' : '+ '}</span>
                    {isOpen ? 'Hide case study' : 'View case study'}
                  </button>

                  {isOpen && (
                    <div
                      id={`case-study-${project.id}`}
                      style={styles.caseStudy}
                    >
                      <div style={styles.caseSection}>
                        <h3 style={styles.caseHeading}>
                          <span style={styles.accent}>{'> '}</span>Highlights
                        </h3>
                        <ul style={styles.highlightList} aria-label="Key highlights">
                          {project.highlights.map((h) => (
                            <li key={h} style={styles.highlightItem}>
                              <span style={{ color: CYAN, marginRight: 8 }} aria-hidden="true">▸</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={styles.caseSection}>
                        <h3 style={styles.caseHeading}>
                          <span style={styles.accent}>{'> '}</span>Engineering challenges
                        </h3>
                        <p style={styles.caseText}>{project.challenges}</p>
                      </div>

                      {project.future.length > 0 && (
                        <div style={styles.caseSection}>
                          <h3 style={styles.caseHeading}>
                            <span style={styles.accent}>{'> '}</span>Planned iterations
                          </h3>
                          <ul style={styles.highlightList} aria-label="Planned features">
                            {project.future.map((f) => (
                              <li key={f} style={styles.highlightItem}>
                                <span style={{ color: BRASS, marginRight: 8 }} aria-hidden="true">◈</span>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action buttons */}
                  <div style={styles.actions} role="group" aria-label={`Links for ${project.title}`}>
                    {project.demo && project.status === 'live' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.btnPrimary}
                      >
                        Live Demo ↗
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.btnSecondary}
                      >
                        <i className="fa fa-github" aria-hidden="true" /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
};

/* ─── Styles ──────────────────────────────────────────────────────────────── */

const styles = {
  page: {
    minHeight: '100vh',
    background: OBSIDIAN,
    color: TEXT_PRIMARY,
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
    position: 'relative',
  },
  scanlines: {
    position: 'fixed',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 1,
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '48px 24px 80px',
    position: 'relative',
    zIndex: 2,
  },
  pageHeader: {
    marginBottom: '48px',
  },
  eyebrow: {
    fontSize: '11px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: TEXT_SECONDARY,
    marginBottom: '8px',
    fontFamily: "'JetBrains Mono', monospace",
  },
  accent: {
    color: '#c0392b',
  },
  pageTitle: {
    fontSize: '40px',
    fontWeight: '700',
    fontFamily: "'Cinzel', 'Palatino Linotype', Georgia, serif",
    color: TEXT_PRIMARY,
    margin: 0,
    letterSpacing: '0.02em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '20px',
  },
  card: {
    background: SURFACE,
    border: `1px solid ${BORDER}`,
    borderRadius: '2px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'border-color 0.2s',
  },
  cardOpen: {
    borderColor: 'rgba(0, 229, 255, 0.3)',
  },
  imageWrapper: {
    position: 'relative',
    height: '160px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'saturate(0.3) contrast(1.2) brightness(0.7)',
    transition: 'filter 0.3s',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(to bottom, transparent 40%, ${SURFACE} 100%)`,
  },
  cardBody: {
    padding: '20px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '12px',
  },
  projectTitle: {
    fontSize: '17px',
    fontWeight: '600',
    fontFamily: "'Cinzel', Georgia, serif",
    color: TEXT_PRIMARY,
    margin: 0,
    lineHeight: 1.3,
  },
  tagline: {
    fontSize: '11px',
    color: TEXT_SECONDARY,
    letterSpacing: '0.04em',
    margin: '4px 0 0',
    fontFamily: "'JetBrains Mono', monospace",
  },
  statusBadge: {
    fontSize: '10px',
    fontWeight: '500',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '3px 8px',
    borderRadius: '2px',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    fontFamily: "'JetBrains Mono', monospace",
  },
  statusNote: {
    fontSize: '11px',
    color: BRASS,
    fontFamily: "'JetBrains Mono', monospace",
    margin: 0,
    letterSpacing: '0.02em',
  },
  stackList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  stackPill: {
    fontSize: '10px',
    padding: '3px 8px',
    background: SURFACE2,
    border: `1px solid ${BORDER}`,
    borderRadius: '2px',
    color: TEXT_SECONDARY,
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: '0.03em',
  },
  description: {
    fontSize: '13px',
    lineHeight: '1.7',
    color: TEXT_SECONDARY,
    margin: 0,
    fontFamily: "'JetBrains Mono', monospace",
  },
  expandBtn: {
    background: 'none',
    border: `1px solid ${BORDER}`,
    borderLeft: `3px solid ${CRIMSON}`,
    color: TEXT_SECONDARY,
    fontSize: '11px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '8px 14px',
    cursor: 'pointer',
    fontFamily: "'JetBrains Mono', monospace",
    textAlign: 'left',
    borderRadius: '2px',
    transition: 'border-color 0.2s, color 0.2s',
    alignSelf: 'flex-start',
  },
  caseStudy: {
    borderTop: `1px solid ${BORDER}`,
    paddingTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  caseSection: {},
  caseHeading: {
    fontSize: '11px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: BRASS,
    marginBottom: '10px',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '500',
  },
  caseText: {
    fontSize: '12px',
    lineHeight: '1.75',
    color: TEXT_SECONDARY,
    margin: 0,
    fontFamily: "'JetBrains Mono', monospace",
  },
  highlightList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  highlightItem: {
    fontSize: '12px',
    color: TEXT_SECONDARY,
    fontFamily: "'JetBrains Mono', monospace",
    lineHeight: '1.5',
    display: 'flex',
    alignItems: 'flex-start',
  },
  actions: {
    display: 'flex',
    gap: '10px',
    marginTop: 'auto',
    paddingTop: '4px',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '9px 18px',
    background: CYAN,
    color: OBSIDIAN,
    textDecoration: 'none',
    borderRadius: '2px',
    fontFamily: "'JetBrains Mono', monospace",
  },
  btnSecondary: {
    fontSize: '11px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '9px 16px',
    background: 'transparent',
    color: TEXT_SECONDARY,
    border: `1px solid ${BORDER}`,
    textDecoration: 'none',
    borderRadius: '2px',
    fontFamily: "'JetBrains Mono', monospace",
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
};

export default Projects;