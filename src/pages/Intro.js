import React from 'react';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Reactstrap', 'Bootstrap']
  },
  {
    category: 'Backend',
    items: ['Python', 'Node.js', 'FastAPI', 'Express.js', 'C#', '.NET', 'REST APIs', 'Firebase']
  },
  {
    category: 'AI & Data',
    items: ['Claude API', 'Prompt Engineering', 'Tool-Use Agents', 'TimescaleDB', 'MongoDB', 'PostgreSQL']
  },
  {
    category: 'Cloud & DevOps',
    items: ['GitHub Actions', 'Railway', 'Vercel', 'Netlify', 'Firebase Hosting', 'CI/CD', 'Bash Scripting']
  },
  {
    category: 'Support & Systems',
    items: ['Technical Account Management', 'Linux', 'Windows', 'macOS', 'Networking', 'Enterprise Storage', 'Technical Documentation']
  },
  {
    category: 'Tools',
    items: ['Git', 'Postman', 'Adobe Creative Cloud', 'Microsoft Suite', 'WordPress']
  }
];

const Intro = () => {
  return (
    <div style={styles.page}>
      {/* Scanline overlay */}
      <div style={styles.scanlines} aria-hidden="true" />

      <main style={styles.container}>

        {/* Hero Section */}
        <section style={styles.heroSection} aria-label="Introduction">
          <div style={styles.headshotWrapper}>
            <img
              src={require('./Images/Headshot.jpeg')}
              alt="Zach McEntire — Full-Stack & AI Engineer"
              style={styles.headshot}
            />
            <div style={styles.headshotGlow} aria-hidden="true" />
          </div>

          <div style={styles.heroText}>
            <p style={styles.eyebrow}>Full-Stack · AI · Support Engineering</p>
            <h1 style={styles.name}>Zach McEntire</h1>
            <h2 style={styles.title}>Software & Customer Success Engineer</h2>

            <div style={styles.divider} aria-hidden="true">
              <span style={styles.dividerLine} />
              <span style={styles.dividerGlyph}>⬡</span>
              <span style={styles.dividerLine} />
            </div>

            <p style={styles.bio}>
              Full-Stack and AI Engineer with a deep commitment to developer experience and
              customer success. I build agentic systems, cloud-native APIs, and the support
              tooling that keeps them running — bringing 5+ years of technical leadership in
              customer-facing roles spanning Technical Support and Technical Account Management.
            </p>
            <p style={styles.bio}>
              I leverage Python and Bash scripting to craft custom integrations and data ingest
              routines for complex enterprise environments, and apply strong network and security
              knowledge across Windows, macOS, and Linux to troubleshoot and resolve
              deep-system defects. Recently shipped{' '}
              <a
                href="https://tigerdata-fitness-tracker-production-a693.up.railway.app"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.bioLink}
              >
                TigerData
              </a>
              {' '}— an agentic AI fitness tracker powered by Claude tool-use agents,
              TimescaleDB, and FastAPI.
            </p>

            <div style={styles.contactRow} role="list" aria-label="Social links">
              <a
                href="https://github.com/zmcentire"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.contactLink}
                aria-label="GitHub profile"
                role="listitem"
              >
                <i className="fa fa-github" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/zachmcentire/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.contactLink}
                aria-label="LinkedIn profile"
                role="listitem"
              >
                <i className="fab fa-linkedin" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1o6YLTJYDMKCfSPTZ4n80DPPWaRRJbY2i/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resumeBtn}
                aria-label="Download resume"
              >
                <span>↓ Resume</span>
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section style={styles.skillsSection} aria-labelledby="skills-heading">
          <h3 id="skills-heading" style={styles.sectionHeading}>
            <span style={styles.headingAccent}>{'// '}</span>Skills & Stack
          </h3>

          <div style={styles.skillsGrid} role="list">
            {skills.map((group) => (
              <div key={group.category} style={styles.skillCard} role="listitem">
                <h4 style={styles.skillCategory}>{group.category}</h4>
                <ul style={styles.skillList} aria-label={`${group.category} skills`}>
                  {group.items.map((skill) => (
                    <li key={skill} style={styles.skillPill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const CYAN = '#00e5ff';
const CRIMSON = '#8b1a1a';
const CRIMSON_LIGHT = '#c0392b';
const BRASS = '#b8960c';
const OBSIDIAN = '#0d0d0f';
const SURFACE = '#13141a';
const SURFACE2 = '#1a1b24';
const BORDER = '#2a2b38';
const TEXT_PRIMARY = '#e8e6df';
const TEXT_SECONDARY = '#9a9890';

const styles = {
  page: {
    minHeight: '100vh',
    background: OBSIDIAN,
    color: TEXT_PRIMARY,
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
    position: 'relative',
    overflowX: 'hidden',
  },
  scanlines: {
    position: 'fixed',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 1,
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
    backgroundSize: '100% 4px',
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '48px 24px 80px',
    position: 'relative',
    zIndex: 2,
  },

  /* Hero */
  heroSection: {
    display: 'flex',
    gap: '48px',
    alignItems: 'flex-start',
    marginBottom: '72px',
    flexWrap: 'wrap',
  },
  headshotWrapper: {
    position: 'relative',
    flexShrink: 0,
  },
  headshot: {
    width: '220px',
    height: '220px',
    objectFit: 'cover',
    objectPosition: 'center top',
    borderRadius: '4px',
    border: `1px solid ${BORDER}`,
    filter: 'saturate(0.75) contrast(1.1)',
    display: 'block',
    position: 'relative',
    zIndex: 1,
  },
  headshotGlow: {
    position: 'absolute',
    inset: '-2px',
    borderRadius: '6px',
    boxShadow: `0 0 20px rgba(0, 229, 255, 0.15), 0 0 60px rgba(139, 26, 26, 0.1)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
  heroText: {
    flex: 1,
    minWidth: '280px',
  },
  eyebrow: {
    fontSize: '11px',
    letterSpacing: '0.18em',
    color: CYAN,
    textTransform: 'uppercase',
    marginBottom: '10px',
    fontFamily: "'JetBrains Mono', monospace",
  },
  name: {
    fontSize: '48px',
    fontWeight: '700',
    letterSpacing: '-0.01em',
    margin: '0 0 6px',
    fontFamily: "'Cinzel', 'Palatino Linotype', Georgia, serif",
    color: TEXT_PRIMARY,
    lineHeight: 1.1,
  },
  title: {
    fontSize: '16px',
    fontWeight: '400',
    color: TEXT_SECONDARY,
    letterSpacing: '0.06em',
    margin: '0 0 24px',
    fontFamily: "'JetBrains Mono', monospace",
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    background: `linear-gradient(to right, ${CRIMSON}, transparent)`,
    display: 'block',
  },
  dividerGlyph: {
    color: BRASS,
    fontSize: '12px',
  },
  bio: {
    fontSize: '14px',
    lineHeight: '1.8',
    color: TEXT_SECONDARY,
    marginBottom: '16px',
    fontFamily: "'JetBrains Mono', monospace",
    maxWidth: '580px',
  },
  bioLink: {
    color: CYAN,
    textDecoration: 'none',
    borderBottom: `1px solid rgba(0, 229, 255, 0.3)`,
  },
  contactRow: {
    display: 'flex',
    gap: '16px',
    marginTop: '28px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: TEXT_SECONDARY,
    textDecoration: 'none',
    fontSize: '13px',
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: '0.04em',
    padding: '8px 14px',
    border: `1px solid ${BORDER}`,
    borderRadius: '2px',
    transition: 'color 0.2s, border-color 0.2s',
  },
  resumeBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: OBSIDIAN,
    background: CYAN,
    textDecoration: 'none',
    fontSize: '12px',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '700',
    letterSpacing: '0.08em',
    padding: '9px 18px',
    borderRadius: '2px',
  },

  /* Skills */
  skillsSection: {
    borderTop: `1px solid ${BORDER}`,
    paddingTop: '48px',
  },
  sectionHeading: {
    fontSize: '13px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: TEXT_SECONDARY,
    marginBottom: '32px',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '400',
  },
  headingAccent: {
    color: CRIMSON_LIGHT,
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '16px',
  },
  skillCard: {
    background: SURFACE,
    border: `1px solid ${BORDER}`,
    borderLeft: `3px solid ${CRIMSON}`,
    borderRadius: '2px',
    padding: '20px',
  },
  skillCategory: {
    fontSize: '11px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: BRASS,
    marginBottom: '14px',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '500',
  },
  skillList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  skillPill: {
    fontSize: '12px',
    padding: '4px 10px',
    background: SURFACE2,
    border: `1px solid ${BORDER}`,
    borderRadius: '2px',
    color: TEXT_SECONDARY,
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: '0.02em',
  },
};

export default Intro;