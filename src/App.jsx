import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BriefcaseBusiness, Check, Code2,
  Copy, Facebook, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, MessageCircle, Moon, Phone, Sparkles, Sun, X,
} from 'lucide-react'
import { portfolio } from './data/portfolio.js'

const navItems = [
  ['About', 'about'], ['Education', 'education'], ['Skills', 'skills'],
  ['Projects', 'projects'], ['Experience', 'experience'], ['Contact', 'contact'],
]

function SectionHeading({ number, label, title, summary }) {
  return <div className="section-heading">
    <div className="section-kicker"><span>{number}</span><span>{label}</span></div>
    <div className="section-heading-row"><h2>{title}</h2>{summary && <p>{summary}</p>}</div>
  </div>
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion()
  return <motion.div className={className}
    initial={reduced ? false : { opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.14 }}
    transition={{ duration: reduced ? 0 : 0.55, delay, ease: [0.2, 0.7, 0.2, 1] }}>
    {children}
  </motion.div>
}

function EmptyNote({ children = 'Add verified details here before publishing.' }) {
  return <div className="empty-note"><span className="empty-dot" />{children}</div>
}

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="nav-shell" aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="Go to home"><span className="brand-mark">{portfolio.shortName}</span><span>{portfolio.name}</span></a>
      <div className={`nav-links ${open ? 'is-open' : ''}`} id="primary-navigation">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={14} /></a>
      </div>
      <div className="header-actions">
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </nav>
  </header>
}

function Hero({ theme }) {
  const reduced = useReducedMotion()
  return <section className="hero section-wrap" id="home">
    <div className="hero-grid">
      <motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.7 }}>
        <div className="availability"><span className="availability-dot" /> STUDENT PORTFOLIO · PROFILE DRAFT</div>
        <p className="hero-eyebrow">{portfolio.eyebrow}</p>
        <h1>Hi, I’m <span>{portfolio.name}</span><br /><em>building what’s next.</em></h1>
        <p className="hero-description">{portfolio.introduction}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={16} /></a>
          <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
        </div>
        <div className="hero-meta">
          {portfolio.location && <span><MapPin size={14} />{portfolio.location}</span>}
          {portfolio.email && <a href={`mailto:${portfolio.email}`}><Mail size={14} />{portfolio.email}</a>}
          {portfolio.github && <a href={portfolio.github} target="_blank" rel="noreferrer"><Github size={15} />GitHub</a>}
          {portfolio.linkedin && <a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} />LinkedIn</a>}
        </div>
      </motion.div>
      <motion.div className="portrait-stage" initial={reduced ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduced ? 0 : 0.85, delay: 0.12 }}>
        <div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" />
        <div className="portrait-card">
          {portfolio.profileImage?.[theme] ? <img src={portfolio.profileImage[theme]} alt={`Portrait of ${portfolio.name}`} /> : <div className="portrait-placeholder"><span>{portfolio.shortName}</span><small>PROFILE PHOTO</small></div>}
          <div className="portrait-caption"><div><span className="caption-overline">CURRENT FOCUS</span><strong>{portfolio.title}</strong></div><span className="caption-icon"><Code2 size={18} /></span></div>
        </div>
        <div className="floating-note"><span className="note-icon"><Sparkles size={17} /></span><div><small>CURIOUS BY NATURE</small><b>Always learning</b></div></div>
        <span className="portrait-index">01 / THE INTRODUCTION</span>
      </motion.div>
    </div>
    <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
  </section>
}

function About() {
  return <section className="content-section section-wrap" id="about">
    <Reveal><SectionHeading number="01" label="A LITTLE ABOUT ME" title="Thoughtful work,\nsteady growth." summary="A quick introduction to the person behind the projects." /></Reveal>
    <div className="about-grid">
      <Reveal className="about-main"><span className="large-quote">“</span><p className="about-copy">{portfolio.about}</p><div className="objective-block"><span className="mini-label">CAREER OBJECTIVE</span><p>{portfolio.objective}</p></div></Reveal>
      <Reveal className="about-side" delay={0.12}><div className="about-card"><span className="card-icon"><GraduationCap size={20} /></span><span className="mini-label">CURRENT CHAPTER</span><h3>{portfolio.title}</h3><p>Bachelor of Science in Information Technology · Davao Del Norte State College.</p></div><div className="about-card"><span className="card-icon"><Sparkles size={20} /></span><span className="mini-label">WHAT DRIVES ME</span><h3>Interests & goals</h3><p>More about my interests and professional goals will be added here.</p></div></Reveal>
    </div>
  </section>
}

function Education() {
  const entries = portfolio.education
  return <section className="content-section section-wrap section-muted" id="education">
    <Reveal><SectionHeading number="02" label="EDUCATION" title="The foundation." summary="The learning experiences shaping my perspective." /></Reveal>
    {entries.length ? <div className="timeline">{entries.map((item, i) => <Reveal key={`${item.school}-${i}`}><article className="timeline-item"><div className="timeline-dot" /><div className="timeline-copy"><span className="mini-label">{item.period}</span><h3>{item.program}</h3><p>{item.school}</p>{item.detail && <p className="muted-copy">{item.detail}</p>}</div><GraduationCap className="timeline-icon" size={22} /></article></Reveal>)}</div> : <Reveal><EmptyNote>Education details will appear here once added.</EmptyNote></Reveal>}
  </section>
}

function Skills() {
  const groups = Object.entries(portfolio.skills)
  return <section className="content-section section-wrap" id="skills">
    <Reveal><SectionHeading number="03" label="SKILLS & TOOLKIT" title="Tools I’m growing with." summary="A practical set of technologies and people skills I use to learn and build." /></Reveal>
    {groups.length ? <div className="skill-grid">{groups.map(([group, skills], i) => <Reveal key={group} delay={i * 0.05}><article className="skill-card"><span className="skill-number">0{i + 1}</span><h3>{group}</h3><div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article></Reveal>)}</div> : <Reveal><EmptyNote>Verified skills and tools will be listed here.</EmptyNote></Reveal>}
  </section>
}

function ProjectCard({ project, index }) {
  const [activeImage, setActiveImage] = useState(0)
  const image = project.images?.[activeImage]
  return <Reveal delay={index * 0.07}>
    <article className="project-card">
      <div className="project-visual">
        {image && <img src={image.src} alt={image.alt} loading="lazy" />}
      </div>
      {image?.caption && <p className="project-image-caption">{image.caption}</p>}
      {project.images?.length > 1 && <div className="project-gallery" aria-label={`${project.title} images`}>
        {project.images.map((item, imageIndex) => <button key={item.src} type="button" className={imageIndex === activeImage ? 'is-active' : ''} aria-label={`Show image: ${item.caption}`} aria-pressed={imageIndex === activeImage} onClick={() => setActiveImage(imageIndex)}>
          <img src={item.src} alt="" loading="lazy" />
        </button>)}
      </div>}
      <div className="project-body">
        <div className="project-meta"><span>{project.category}</span>{project.year && <span>{project.year}</span>}</div>
        <h3>{project.title}</h3><p>{project.description}</p>
        {project.note && <p className="project-note">{project.note}</p>}
        <div className="project-tags">{project.technologies?.map((tech) => <span key={tech}>{tech}</span>)}</div>
        {(project.github || project.demo) && <div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={15} /></a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}</div>}
      </div>
    </article>
  </Reveal>
}

function Projects() {
  return <section className="content-section section-wrap section-muted" id="projects">
    <Reveal><SectionHeading number="04" label="SELECTED WORK" title="Projects with purpose." summary="Academic and personal work that shows how I think, learn, and solve problems." /></Reveal>
    {portfolio.projects.length ? <div className="project-grid">{portfolio.projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div> : <Reveal><div className="projects-empty"><div className="empty-illustration"><Code2 size={28} /></div><div><span className="mini-label">THE WORK IS THE STORY</span><h3>Projects will take the spotlight here.</h3><p>Add completed or ongoing projects with verified descriptions, technologies, and working links.</p></div></div></Reveal>}
  </section>
}

function Highlights() {
  const hasAwards = portfolio.achievements.length > 0
  const hasExperience = portfolio.experience.length > 0
  return <section className="content-section section-wrap" id="experience">
    <Reveal><SectionHeading number="05" label="BEYOND THE CODE" title="Experience & highlights." summary="The moments, teams, and commitments that make the work richer." /></Reveal>
    <div className="highlight-grid">
      <Reveal className="highlight-panel"><span className="highlight-icon"><BriefcaseBusiness size={19} /></span><span className="mini-label">EXPERIENCE & ACTIVITIES</span><h3>Learning in good company.</h3>{hasExperience ? portfolio.experience.map((item) => <article className={`highlight-item ${item.period ? 'has-period' : ''}`} key={item.title}>{item.period && <span>{item.period}</span>}<div className="highlight-copy"><b>{item.title}</b><p>{item.organization}</p>{item.detail && <p className="highlight-detail">{item.detail}</p>}</div></article>) : <p>Add verified internships, volunteer work, leadership, or meaningful academic activities.</p>}</Reveal>
      <Reveal className="highlight-panel accent-panel" delay={0.1}><span className="highlight-icon"><Award size={19} /></span><span className="mini-label">ACHIEVEMENTS & CERTIFICATIONS</span><h3>Progress worth celebrating.</h3>{hasAwards ? portfolio.achievements.map((item) => <article className="highlight-item" key={item.title}><span>{item.year}</span><b>{item.title}</b><p>{item.organization}</p>{item.href && <a className="highlight-link" href={item.href} target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={13} /></a>}</article>) : <p>Add verified awards, courses, workshops, and academic milestones. This section stays honest and uncluttered when there’s nothing to list yet.</p>}</Reveal>
    </div>
  </section>
}

function Contact() {
  const hasEmail = Boolean(portfolio.email)
  const [copied, setCopied] = useState(false)
  async function copyDiscord() {
    try {
      await navigator.clipboard.writeText(portfolio.discord)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }
  return <section className="contact-section" id="contact"><div className="section-wrap contact-inner">
    <Reveal><span className="section-kicker"><span>06</span><span>CONTACT</span></span><h2>Good things start<br /><em>with a conversation.</em></h2><p>Have an opportunity, an idea, or a question? I’d be glad to hear from you.</p><a className="button button-primary contact-button" href={hasEmail ? `mailto:${portfolio.email}` : '#contact-details'}>{hasEmail ? 'Say hello' : 'Add your contact details'} <ArrowUpRight size={16} /></a></Reveal>
    <Reveal className="contact-details" delay={0.12}>
      <span className="mini-label">FIND ME HERE</span>
      {hasEmail ? <a href={`mailto:${portfolio.email}`}><Mail size={17} /><span>{portfolio.email}</span><ArrowUpRight size={15} /></a> : <div className="contact-detail-placeholder" id="contact-details"><Mail size={17} /><span>Email address to be added</span></div>}
      {portfolio.phone && <a href={`tel:${portfolio.phone.replace(/\s/g, '')}`}><Phone size={17} /><span>{portfolio.phone}</span><ArrowUpRight size={15} /></a>}
      {portfolio.facebook && <a href={portfolio.facebook} target="_blank" rel="noreferrer"><Facebook size={17} /><span>Facebook profile</span><ArrowUpRight size={15} /></a>}
      {portfolio.discord && <button className="contact-copy" type="button" onClick={copyDiscord} aria-live="polite"><MessageCircle size={17} /><span>Discord · {portfolio.discord}</span><span className="copy-label">{copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}</span></button>}
      {portfolio.github && <a href={portfolio.github} target="_blank" rel="noreferrer"><Github size={17} /><span>GitHub</span><ArrowUpRight size={15} /></a>}
      {portfolio.linkedin && <a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LinkedIn</span><ArrowUpRight size={15} /></a>}
      {portfolio.location && <div className="contact-location"><MapPin size={16} />{portfolio.location}</div>}
    </Reveal>
  </div></section>
}

function Footer() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <footer className="site-footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">{portfolio.shortName}</span><span>{portfolio.name}</span></a><span>Designed with intention. Built with curiosity.</span><a href="#home" className="footer-top">Back to top <ArrowUpRight size={14} /></a></div>{showTop && <a className="back-top" href="#home" aria-label="Back to top"><ArrowDown size={17} /></a>}</footer>
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark' }
    catch { return 'dark' }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b1115' : '#f4f6f2')
    try { window.localStorage.setItem('portfolio-theme', theme) } catch { /* Theme still works for this visit. */ }
  }, [theme])
  return <><Navbar theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} /><main id="main-content"><Hero theme={theme} /><div className="hero-divider" /><About /><Education /><Skills /><Projects /><Highlights /><Contact /></main><Footer /></>
}
