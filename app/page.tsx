/* eslint-disable @next/next/no-img-element -- direct static assets avoid unsupported image optimization in this deployment */

const publications = [
  {
    number: "01",
    year: "2026",
    type: "Research paper",
    title: "From Laboratory Model to Statewide Deployment",
    description: "Documents the continuous enhancement of a wrong-way-driving detection system from 10 to more than 200 existing Iowa DOT CCTV cameras, with an emphasis on reliable operations, operator workload, and deployment cost.",
    tags: ["Computer Vision", "Traffic Safety", "Deployment"],
    visual: "lime",
    preview: "/wrong-way-driving-cover.png",
    previewClass: "paper",
    href: "/publications/wrong-way-driving-detection-system.pdf",
  },
  {
    number: "02",
    year: "2026",
    type: "Research paper",
    title: "Architectural Trade-offs in Semantic Segmentation",
    description: "Fine-tuned and compared high-accuracy and lightweight road-segmentation models, then benchmarked ONNX inference to study robustness and accuracy-latency tradeoffs for embedded automotive vision.",
    tags: ["PyTorch", "Fine-Tuning", "ONNX Inference"],
    visual: "blue",
    preview: "/semantic-segmentation-cover.webp",
    previewClass: "paper",
    href: "/publications/architectural-tradeoffs-semantic-segmentation.pdf",
  },
];

const projects = [
  {
    number: "01",
    type: "Featured project",
    title: "Documentation Insights System",
    description: "Developed a full-stack RAG system that ingests code repositories and technical documents, indexes embedded chunks in PostgreSQL, and returns grounded, traceable answers through semantic retrieval.",
    tags: ["RAG", "FastAPI", "PostgreSQL", "pgvector"],
    visual: "coral",
    preview: "/documentation-insights-app.png",
    previewClass: "app",
    href: "https://github.com/raychu23/Documentation-Insights-System",
  },
  {
    number: "02",
    type: "Featured project",
    title: "Multiple Graph Representations Generator",
    description: "Developed a Streamlit tool that converts graphs among edge descriptions, formal titles, and images using modular computer-vision and graph-analysis components.",
    tags: ["Python", "OpenCV", "NetworkX", "Graph Theory"],
    visual: "sand",
    preview: "/graph-representations-cover.png",
    href: "https://softarchitech.cs.grinnell.edu/multiple-graph-representations-generator/",
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
  const href = ("href" in item ? item.href : undefined) ?? "#contact";
  const opensNewTab = href.startsWith("http") || href.endsWith(".pdf");
  const preview = "preview" in item ? item.preview : null;
  const previewClass = "previewClass" in item ? item.previewClass : "";

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
            {"year" in item && <span>{item.year}</span>}
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ul aria-label="Technologies and topics">
            {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div className={`card-thumbnail ${item.visual} ${preview ? "has-preview" : ""}`} aria-hidden="true">
          {preview && <img className={`card-preview ${previewClass}`} src={preview} alt="" loading="lazy" />}
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
            <p className="label">Profile</p>
            <div className="portrait">
              <img
                className="portrait-image"
                src="/raymond-chu-photo.jpg"
                alt="Raymond Chu in Central Park"
                loading="eager"
              />
            </div>
            <div className="identity-copy">
              <h1 id="profile-title">Raymond Chu</h1>
              <p>Student · Software engineer · AI/ML researcher</p>
              <p>San Jose, CA · Grinnell College (Iowa)</p>
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
            <h2>I am most interested in AI systems where the surrounding system matters as much as the model.</h2>
            <p>
              I have worked with language and vision models, but I am usually most
              interested in what makes them useful outside a demo: how information is
              prepared and retrieved, how a model is evaluated, and how the result fits
              into software people already use.
            </p>
            <details>
              <summary>More about me <span aria-hidden="true">＋</span></summary>
              <p>
                I am naturally very particular, which has made me systems-oriented. I tend
                to think of much of what I do as an input-output funnel: I capture information,
                connect it to the right context, and use it to move toward a project or decision.
                That way of thinking also shows up in my work. Whether I am indexing a changing
                codebase or improving a traffic-safety system, I like understanding how the pieces
                connect and where a system becomes unreliable, expensive, or difficult for the
                person using it.
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
