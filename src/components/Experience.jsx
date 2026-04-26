const experiences = [
  {
    date: "May 2025 — Present",
    role: "QA Tester Part-Timer",
    company: "Alpha Red Solutions · Subang Jaya, MY",
    desc: "Performed UAT, end-to-end testing, regression testing, defect tracking, and test case execution for web and mobile applications.",
  },
  {
    date: "Jan 2025 — May 2025",
    role: "Business Analyst Intern",
    company: "Alpha Red Solutions · Subang Jaya, MY",
    desc: "Worked closely with stakeholders to understand requirements, support system validation, and ensure delivered solutions aligned with business needs.",
  },
];

function Experience() {
  return (
    <section id="experience">
      <div className="section-label">Work Experience</div>

      <div className="experience-list">
        {experiences.map((exp) => (
          <div className="exp-item" key={exp.role}>
            <div className="exp-date">{exp.date}</div>

            <div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-desc">{exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;