import { useRef, useState } from 'react'
import { siteContent } from '../content/siteContent'

const Portfolio = () => {
  const { portfolio } = siteContent
  const [showAllProjects, setShowAllProjects] = useState(false)
  const thirdProjectRef = useRef(null)
  const fourthProjectRef = useRef(null)
  const scrollAnimationRef = useRef(0)
  const previewProjects = portfolio.projects.slice(0, 3)
  const extraProjects = portfolio.projects.slice(3)

  const scrollCardToTop = (target) => {
    if (!target) {
      return
    }

    const navOffset = 96
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const animateScrollFollow = (target, duration = 560) => {
    if (!target) {
      return
    }

    if (scrollAnimationRef.current) {
      window.cancelAnimationFrame(scrollAnimationRef.current)
    }

    const navOffset = 96
    const startTime = performance.now()
    const startY = window.scrollY

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      const targetY = target.getBoundingClientRect().top + window.scrollY - navOffset
      const nextY = startY + (targetY - startY) * eased

      window.scrollTo({ top: nextY, behavior: 'auto' })

      if (progress < 1) {
        scrollAnimationRef.current = window.requestAnimationFrame(step)
      }
    }

    scrollAnimationRef.current = window.requestAnimationFrame(step)
  }

  const toggleProjects = () => {
    const isMobile = window.innerWidth <= 768
    const nextValue = !showAllProjects

    if (scrollAnimationRef.current) {
      window.cancelAnimationFrame(scrollAnimationRef.current)
      scrollAnimationRef.current = 0
    }

    if (isMobile) {
      setShowAllProjects(nextValue)
      window.dispatchEvent(new Event('meteor-burst'))
      return
    }

    if (nextValue) {
      setShowAllProjects(nextValue)
      window.dispatchEvent(new Event('meteor-burst'))
      window.requestAnimationFrame(() => {
        animateScrollFollow(fourthProjectRef.current)
      })
      return
    }

    setShowAllProjects(nextValue)
    window.dispatchEvent(new Event('meteor-burst'))
    animateScrollFollow(thirdProjectRef.current)
  }

  const renderProjectBullets = (bulletPoints = []) => {
    if (!bulletPoints.length) {
      return null
    }

    return (
      <ul className="portfolio-bullet-list">
        {bulletPoints.map((point, index) => (
          <li key={`portfolio-bullet-${index}-${point || 'empty'}`} className="portfolio-bullet-item">
            {point}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <section className="portfolio-section">
      <div className="portfolio-shell">
        <div className="portfolio-copy">
          <p className="portfolio-kicker">{portfolio.kicker}</p>
          <h2 className="portfolio-title">{portfolio.title}</h2>
          <p className="portfolio-description">{portfolio.description}</p>

          <div className="portfolio-metrics">
            {portfolio.metrics.map((metric, index) => (
              <div
                key={`${metric.label || 'metric'}-${metric.value || 'empty'}-${index}`}
                className="portfolio-metric"
              >
                <span className="portfolio-metric-value">{metric.value}</span>
                <span className="portfolio-metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {previewProjects.map((project, index) => (
            <article
              key={project.title}
              className="portfolio-card"
              style={{ animationDelay: `${index * 120}ms` }}
              ref={index === 2 ? thirdProjectRef : null}
            >
              <div className="portfolio-card-top">
                <span className="portfolio-card-number">{project.number}</span>
                <span className="portfolio-card-category">{project.category}</span>
              </div>

              <h3 className="portfolio-card-title">{project.title}</h3>
              <p className="portfolio-card-description">{project.description}</p>
              {renderProjectBullets(project.bulletPoints)}

              {project.media.length > 0 ? (
                <div className="portfolio-card-media">
                  {project.media.map((item, mediaIndex) => (
                    <div
                      key={`portfolio-media-${project.number}-${mediaIndex}-${item.label || item.type || 'empty'}`}
                      className="portfolio-media-slot"
                    >
                      <span className="portfolio-media-type">{item.type}</span>
                      <span className="portfolio-media-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="portfolio-tags">
                {project.stack.map((item, stackIndex) => (
                  <span key={`portfolio-tag-${project.number}-${stackIndex}-${item || 'empty'}`} className="portfolio-tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}

          <div className={`portfolio-expandable ${showAllProjects ? 'is-open' : ''}`}>
            <div className="portfolio-expandable-inner">
              {extraProjects.map((project, index) => (
                <article
                  key={project.title}
                  className="portfolio-card portfolio-card-extra"
                  style={{ animationDelay: `${(index + 3) * 120}ms` }}
                  ref={index === 0 ? fourthProjectRef : null}
                >
                  <div className="portfolio-card-top">
                    <span className="portfolio-card-number">{project.number}</span>
                    <span className="portfolio-card-category">{project.category}</span>
                  </div>

                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <p className="portfolio-card-description">{project.description}</p>
                  {renderProjectBullets(project.bulletPoints)}

                  {project.media.length > 0 ? (
                    <div className="portfolio-card-media">
                      {project.media.map((item, mediaIndex) => (
                        <div
                          key={`portfolio-media-${project.number}-${mediaIndex}-${item.label || item.type || 'empty'}`}
                          className="portfolio-media-slot"
                        >
                          <span className="portfolio-media-type">{item.type}</span>
                          <span className="portfolio-media-label">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="portfolio-tags">
                    {project.stack.map((item, stackIndex) => (
                      <span key={`portfolio-tag-${project.number}-${stackIndex}-${item || 'empty'}`} className="portfolio-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="portfolio-actions">
          <button
            type="button"
            className="portfolio-button"
            onClick={toggleProjects}
          >
            {showAllProjects ? 'Show Fewer Projects' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
