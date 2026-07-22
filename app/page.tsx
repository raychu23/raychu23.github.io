const publications = [
  {
    number: "01",
    year: "2026",
    type: "Research paper",
    title: "Publication title goes here",
    description: "One sentence on the research question, your contribution, and the result.",
    tags: ["Machine learning", "Research"],
    visual: "lime",
  },
  {
    number: "02",
    year: "2025",
    type: "Conference paper",
    title: "Your second publication",
    description: "Add the venue, central finding, and a concise description of your role.",
    tags: ["Data systems", "Collaboration"],
    visual: "blue",
  },
];

const projects = [
  {
    number: "01",
    year: "2026",
    type: "Featured project",
    title: "Project name goes here",
    description: "The problem you solved, what you built, and one measurable outcome.",
    tags: ["TypeScript", "React", "APIs"],
    visual: "coral",
  },
  {
    number: "02",
    year: "2025",
    type: "Selected project",
    title: "Another thing you built",
    description: "A compact summary of the technical challenge and why the work matters.",
    tags: ["Python", "Systems"],
    visual: "sand",
  },
];

const profiles = [
  { label: "GitHub", icon: "GH", href: "https://github.com/" },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/" },
  { label: "Résumé", icon: "CV", href: "/resume.txt" },
];

type WorkItem = (typeof publications)[number] | (typeof projects)[number];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <article className="work-card">
      <a href="#contact" aria-label={`Open ${item.title}`}>
        <div className="card-copy">
          <div className="card-kicker">
            <span>{item.number} / {item.type}</span>
            <span>{item.year}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ul aria-label="Technologies and topics">
            {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div className={`card-thumbnail ${item.visual}`} aria-hidden="true">
          <span>{item.number}</span>
          <i />
          <b><Arrow /></b>
        </div>
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <main id="top">
      <nav className="topbar" aria-label="Portfolio sections">
        <a className="wordmark" href="#top" aria-label="Your Name, home">YN<span>.</span></a>
        <div className="nav-links">
          <a href="#contact">Contact / Bio</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <div className="portfolio-shell">
        <section className="profile-panel" id="contact" aria-labelledby="profile-title">
          <div className="identity">
            <div className="portrait" role="img" aria-label="Placeholder for your portrait">
              <div className="portrait-person" />
              <span>Add photo</span>
            </div>
            <div className="identity-copy">
              <p className="label">Profile</p>
              <h1 id="profile-title">Your Name</h1>
              <p>Software engineer · Researcher</p>
              <p>Your City · Your University</p>
            </div>
          </div>

          <div className="contact-stack" aria-label="Contact and profile links">
            <p className="label">Contact</p>
            <div className="profile-links">
              {profiles.map((profile) => (
                <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer" aria-label={`Open ${profile.label}`}>
                  <span aria-hidden="true">{profile.icon}</span>
                  {profile.label}
                  <Arrow />
                </a>
              ))}
            </div>
            <div className="direct-contact">
              <a href="mailto:hello@example.com"><span>Email</span> hello@example.com</a>
              <a href="tel:+10000000000"><span>Phone</span> +1 (000) 000-0000</a>
            </div>
          </div>

          <div className="bio">
            <p className="label">Bio</p>
            <h2>I build reliable, thoughtful products and enjoy turning difficult problems into clear experiences.</h2>
            <p>
              Replace this with two short sentences about your focus, strongest skills,
              and the software engineering roles you are pursuing.
            </p>
            <details>
              <summary>More about me <span aria-hidden="true">＋</span></summary>
              <p>
                Add a little more context here: what first drew you to engineering,
                how your research connects to your projects, or what you hope to work on next.
              </p>
            </details>
          </div>
        </section>

        <div className="work-grid">
          <section className="work-section" id="publications" aria-labelledby="publications-title">
            <header>
              <div>
                <p className="label">01 / Research</p>
                <h2 id="publications-title">Publications</h2>
              </div>
              <span>02 items</span>
            </header>
            <div className="card-list">
              {publications.map((item) => <WorkCard key={item.number} item={item} />)}
            </div>
          </section>

          <section className="work-section" id="projects" aria-labelledby="projects-title">
            <header>
              <div>
                <p className="label">02 / Building</p>
                <h2 id="projects-title">Projects</h2>
              </div>
              <span>02 items</span>
            </header>
            <div className="card-list">
              {projects.map((item) => <WorkCard key={item.number} item={item} />)}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
