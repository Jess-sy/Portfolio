const projects = [
  {
    tag: "Blockchain",
    title: "NexGov",
    desc: "A token-based governance voting platform with proposal management, staking, role-based access, and real-time vote tracking.",
    link: "#",
  },
  {
    tag: "Power BI",
    title: "Finance Dashboard",
    desc: "A Power BI dashboard visualizing finance report performance by year, country, and profit trends.",
    link: "#",
  },
  {
    tag: "QA Practice",
    title: "Automation Testing Practice",
    desc: "A learning-based automation testing project using Java and JavaScript to practice test scripts and validation flows.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="section-label">Projects</div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <span className="project-tag">{project.tag}</span>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-desc">{project.desc}</p>
            <a href={project.link} className="project-link">View project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;