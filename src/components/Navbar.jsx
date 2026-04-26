function Navbar() {
  return (
    <nav>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">Shu Yi Lim .</a>

        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;