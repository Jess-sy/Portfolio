const skillGroups = [
  {
    title: "Testing",
    skills: [
      "UAT Testing",
      "Test Case Design",
      "End-to-End Testing",
      "Regression Testing",
      "Defect Management",
    ],
  },
  {
    title: "Programming",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "Solidity",
      "HTML/CSS",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Azure DevOps",
      "Power BI",
      "Excel",
      "Figma",
      "draw.io",
      "Git",
    ],
  },
  {
    title: "Business",
    skills: [
      "Requirement Analysis",
      "System Validation",
      "Documentation",
      "Stakeholder Communication",
    ],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="section-label">Skills</div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;