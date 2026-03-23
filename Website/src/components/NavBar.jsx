import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home'},
  { label: 'Projects', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = ['home', 'portfolio', 'experience', 'contact']

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.32
      let currentSection = 'home'

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId)

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId
        }
      })

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const isCollapsed = activeSection !== 'home'

  return (
    <nav className={`site-nav ${isCollapsed ? 'is-collapsed' : ''}`}>
      <div className="site-nav-shell">
        <span className="site-nav-peek" aria-hidden="true" />
        <div className="site-nav-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`site-nav-link ${activeSection === item.href.slice(1) ? 'is-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
