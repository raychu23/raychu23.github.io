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
    year: "2026",
    type: "Research paper",
    title: "Architectural Trade-offs in Semantic Segmentation",
    description: "Compared three road-segmentation architectures across accuracy, latency, and adverse driving conditions to study practical model selection under embedded constraints.",
    tags: ["Computer vision", "PyTorch", "BDD100K"],
    visual: "blue",
    href: "/publications/architectural-tradeoffs-semantic-segmentation.pdf",
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
    title: "Multiple Graph Representations Generator",
    description: "Built a tool that converts graphs between titles, edge-list descriptions, images, and camera input, with structural analysis and isomorphism checking.",
    tags: ["Python", "OpenCV", "NetworkX"],
    visual: "sand",
    href: "https://github.com/raychu23/Multiple-Graph-Representations-Generator",
  },
];

const profiles = [
  { label: "GitHub", icon: "GH", href: "https://github.com/raychu23" },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/raymondchu001/" },
];

type WorkItem = (typeof publications)[number] | (typeof projects)[number];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function WorkCard({ item }: { item: WorkItem }) {
  const href = "href" in item ? item.href : "#contact";
  const opensNewTab = href.startsWith("http") || href.endsWith(".pdf");

  return (
    <article className="work-card">
      <a
        href={href}
        aria-label={`Open ${item.title}`}
        target={opensNewTab ? "_blank" : undefined}
        rel={opensNewTab ? "noreferrer" : undefined}
      >
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
        <a className="wordmark" href="#top" aria-label="Raymond Chu, home">RC<span>.</span></a>
        <div className="nav-links">
          <a href="#contact">Contact / Bio</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <div className="portfolio-shell">
        <section className="profile-panel" id="contact" aria-labelledby="profile-title">
          <div className="identity">
            <div className="portrait" role="img" aria-label="Abstract portrait placeholder for Raymond Chu">
              <div className="portrait-person" />
              <span>Add photo</span>
            </div>
            <div className="identity-copy">
              <p className="label">Profile</p>
              <h1 id="profile-title">Raymond Chu</h1>
              <p>Software engineer · AI/ML researcher</p>
              <p>San Jose, CA · Grinnell College</p>
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
              <a href="mailto:churaymo@grinnell.edu"><span>Email</span> churaymo@grinnell.edu</a>
              <a href="tel:+14088762186"><span>Phone</span> +1 (408) 876-2186</a>
            </div>
          </div>

          <div className="bio">
            <p className="label">Bio</p>
            <h2>I build AI systems that have to work outside of a clean benchmark.</h2>
            <p>
              I am most interested in the point where model architecture, data, and
              production constraints meet. My work has ranged from controlled transformer
              experiments to traffic-safety systems running across more than 200 cameras.
            </p>
            <details>
              <summary>More about me <span aria-hidden="true">＋</span></summary>
              <p>
                I tend to think in systems: what information comes in, how it is organized,
                and what a person needs to do with it next. That has shaped the way I build,
                from documentation tools that connect code to past bugs to computer-vision
                pipelines that help traffic operators focus on credible emergencies. I like
                work that improves what people already depend on without making it harder to use.
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
