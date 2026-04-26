function Hero() {
  return (
    <section id="hero">
      <p className="hero-label">
        Quality Assurance · Automation Testing · FinTech
      </p>

      <h1 className="hero-name">
        Welcome to my <br />
        <em>Portfolio</em>
      </h1>

      <p className="hero-bio">
        Passionate about the FinTech industry, I aim to leverage automation to
        improve testing efficiency, reduce defects, and support scalable digital
        solutions. I enjoy bridging business needs with technical execution,
        optimizing workflows, and contributing to high-impact, user-centric
        systems.
      </p>

      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">
          View my work
        </a>
        <a href="#contact" className="btn btn-outline">
          Get in touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
