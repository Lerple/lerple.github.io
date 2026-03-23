import { useRef, useState } from 'react'
import { siteContent } from '../content/siteContent'

const Experience = () => {
  const { experience } = siteContent
  const [showAllExperience, setShowAllExperience] = useState(false)
  const thirdExperienceRef = useRef(null)
  const fourthExperienceRef = useRef(null)
  const scrollAnimationRef = useRef(0)
  const previewExperience = experience.items.slice(0, 3)
  const extraExperience = experience.items.slice(3)

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

  const toggleExperience = () => {
    const isMobile = window.innerWidth <= 768
    const nextValue = !showAllExperience

    if (scrollAnimationRef.current) {
      window.cancelAnimationFrame(scrollAnimationRef.current)
      scrollAnimationRef.current = 0
    }

    if (isMobile) {
      setShowAllExperience(nextValue)
      window.dispatchEvent(new Event('meteor-burst'))
      return
    }

    if (nextValue) {
      setShowAllExperience(nextValue)
      window.dispatchEvent(new Event('meteor-burst'))
      window.requestAnimationFrame(() => {
        animateScrollFollow(fourthExperienceRef.current)
      })
      return
    }

    setShowAllExperience(nextValue)
    window.dispatchEvent(new Event('meteor-burst'))
    animateScrollFollow(thirdExperienceRef.current)
  }

  const renderBulletPoints = (bulletPoints = []) => {
    if (!bulletPoints.length) {
      return null
    }

    return (
      <ul className="experience-bullet-list">
        {bulletPoints.map((point, index) => (
          <li key={`experience-bullet-${index}-${point || 'empty'}`} className="experience-bullet-item">
            {point}
          </li>
        ))}
      </ul>
    )
  }

  const renderPeriod = (period) => {
    const [location, dates] = period.split('|').map((part) => part.trim())

    return (
      <div className="experience-period">
        <span className="experience-period-location">{location}</span>
        {dates ? <span className="experience-period-dates">{dates}</span> : null}
      </div>
    )
  }

  const renderLogoSlot = (item) => (
    <div className="experience-meta">
      {renderPeriod(item.period)}
      <div className="experience-logo-slot">
        {item.logo ? (
          <img
            src={item.logo}
            alt={`${item.company} logo`}
            className="experience-logo-image"
            style={{
              ...item.logoStyle,
              '--logo-offset-x': `${item.logoOffsetX ?? 0}px`,
              '--logo-offset-y': `${item.logoOffsetY ?? 0}px`,
              '--logo-scale': item.logoScale ?? 1,
            }}
          />
        ) : (
          <span className="experience-logo-placeholder">{item.company} logo</span>
        )}
      </div>
    </div>
  )

  return (
    <section className="experience-section">
      <div className="experience-shell">
        <div className="experience-copy">
          <p className="experience-kicker">{experience.kicker}</p>
          <h2 className="experience-title">{experience.title}</h2>
          <p className="experience-description">{experience.description}</p>
        </div>

        <div className="experience-timeline">
          {previewExperience.map((item, index) => (
            <article
              key={`${item.role}-${item.company}`}
              className="experience-card"
              style={{ animationDelay: `${index * 140}ms` }}
              ref={index === 2 ? thirdExperienceRef : null}
            >
              {renderLogoSlot(item)}
              <div className="experience-body">
                <p className="experience-company">{item.company}</p>
                <h3 className="experience-role">{item.role}</h3>
                <p className="experience-text">{item.description}</p>
                {renderBulletPoints(item.bulletPoints)}

                <div className="experience-highlights">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={`experience-highlight-${item.company}-${item.role}-${highlightIndex}-${highlight || 'empty'}`}
                      className="experience-highlight"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <div className={`experience-expandable ${showAllExperience ? 'is-open' : ''}`}>
            <div className="experience-expandable-inner">
              {extraExperience.map((item, index) => (
                <article
                  key={`${item.role}-${item.company}`}
                  className="experience-card experience-card-extra"
                  style={{ animationDelay: `${(index + 3) * 140}ms` }}
                  ref={index === 0 ? fourthExperienceRef : null}
                >
                  {renderLogoSlot(item)}
                  <div className="experience-body">
                    <p className="experience-company">{item.company}</p>
                    <h3 className="experience-role">{item.role}</h3>
                    <p className="experience-text">{item.description}</p>
                    {renderBulletPoints(item.bulletPoints)}

                    <div className="experience-highlights">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={`experience-highlight-${item.company}-${item.role}-${highlightIndex}-${highlight || 'empty'}`}
                          className="experience-highlight"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="experience-actions">
          <button
            type="button"
            className="portfolio-button"
            onClick={toggleExperience}
          >
            {showAllExperience ? 'Show Less Experience' : 'View All Experience'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Experience
