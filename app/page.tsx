const publications = [
  {
    number: "01",
    year: "2026",
    type: "Research paper",
    title: "Publication title goes here",
    description:
      "A short, plain-language summary of the question you explored, your contribution, and why the work matters.",
    tags: ["Machine learning", "Research"],
    visual: "publication-one",
  },
  {
    number: "02",
    year: "2025",
    type: "Conference paper",
    title: "Your second publication",
    description:
      "Add the key finding, venue, and your role here. Keep it brief enough for a recruiter to understand at a glance.",
    tags: ["Data systems", "Collaboration"],
    visual: "publication-two",
  },
];

const projects = [
  {
    number: "01",
    year: "2026",
    type: "Featured project",
    title: "Project name goes here",
    description:
      "Describe the problem, what you built, and the measurable result. This card can link to a live demo or case study.",
    tags: ["TypeScript", "React", "APIs"],
    visual: "project-one",
  },
  {
    number: "02",
    year: "2025",
    type: "Selected project",
    title: "Another thing you built",
    description:
      "Show range with a second project: a product, developer tool, data experience, or technically ambitious experiment.",
    tags: ["Python", "Systems"],
    visual: "project-two",
  },
];

type WorkItem = (typeof publications)[number] | (typeof projects)[number];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <article className="work-card">
      <a className="card-link" href="#contact" aria-label={`Read more about ${item.title}`}>
        <div className={`card-visual ${item.visual}`} aria-hidden="true">
          <span className="visual-index">{item.number}</span>
          <div className="visual-orbit" />
          <div className="visual-window">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="card-body">
          <div className="card-meta">
            <span>{item.type}</span>
            <span>{item.year}</span>
          </div>
          <div className="card-title-row">
            <h3>{item.title}</h3>
            <span className="card-arrow"><ArrowIcon /></span>
          </div>
          <p>{item.description}</p>
          <ul className="tag-list" aria-label="Technologies and topics">
            {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Your Name, home">YN<span>.</span></a>
        <div className="nav-status"><span /> Available for opportunities</div>
        <a className="nav-link" href="#work">Selected work</a>
        <a className="nav-link" href="#contact">Contact</a>
      </nav>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer · Researcher · Problem solver</p>
          <h1 id="hero-title">Hi, I&apos;m <span>Your Name.</span><br />I build useful things<br />for the web.</h1>
          <p className="intro">
            Add a short introduction here about what you care about, the kinds of
            problems you enjoy, and the roles you&apos;re looking for. Two or three
            sentences is perfect.
          </p>
          <div className="social-row" aria-label="Profile links">
            <a href="#contact">GitHub <ArrowIcon /></a>
            <a href="#contact">LinkedIn <ArrowIcon /></a>
            <a href="#contact">Résumé <ArrowIcon /></a>
            <a href="mailto:hello@example.com">Email <ArrowIcon /></a>
          </div>
        </div>

        <div className="portrait-block">
          <div className="portrait-frame" role="img" aria-label="Placeholder for your portrait">
            <div className="portrait-shape" />
            <span>Add your<br />photo here</span>
          </div>
          <p><span>Currently</span> Based in Your City<br />Studying at Your University</p>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">A selection of things I&apos;ve made and studied</p>
          <h2 id="work-title">Selected work<span>.</span></h2>
        </div>

        <div className="work-grid">
          <section className="work-column" aria-labelledby="publications-title">
            <div className="column-heading">
              <h2 id="publications-title">Publications</h2>
              <span>02</span>
            </div>
            {publications.map((item) => <WorkCard key={item.number} item={item} />)}
          </section>

          <section className="work-column" aria-labelledby="projects-title">
            <div className="column-heading">
              <h2 id="projects-title">Projects</h2>
              <span>02</span>
            </div>
            {projects.map((item) => <WorkCard key={item.number} item={item} />)}
          </section>
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow">Have an interesting problem?</p>
        <a className="footer-cta" href="mailto:hello@example.com">Let&apos;s talk <ArrowIcon /></a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Your Name</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
