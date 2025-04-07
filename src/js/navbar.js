<li className="dropdown">
  <div className="dropdown-toggle" onClick={() => toggleDropdown("about")}>
    About <FaChevronDown className={`dropdown-icon ${dropdownStates.about ? "open" : ""}`} />
  </div>
  {dropdownStates.about && (
    <ul className="dropdown-menu">
      <li><Link to="about" smooth={true} duration={500}>Our History</Link></li>
      <li><Link to="infrastructure" smooth={true} duration={500}>Infrastructure</Link></li>
      <li><Link to="accreditations" smooth={true} duration={500}>Accreditations</Link></li>
    </ul>
  )}
</li>
