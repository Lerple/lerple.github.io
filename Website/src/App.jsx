import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Home, Experience, Contact, Portfolio, Navbar } from './components'

const randomBetween = (min, max) => Math.random() * (max - min) + min

const randomInt = (min, max) => Math.floor(randomBetween(min, max + 1))

const createStaticStars = (count) =>
  Array.from({ length: count }, () => ({
    top: `${randomBetween(2, 98).toFixed(2)}%`,
    left: `${randomBetween(1, 99).toFixed(2)}%`,
    size: `${randomBetween(1.4, 3.4).toFixed(2)}px`,
    opacity: Number(randomBetween(0.28, 0.72).toFixed(2)),
  }))

const createTwinklingStars = (count) =>
  Array.from({ length: count }, () => ({
    top: `${randomBetween(3, 97).toFixed(2)}%`,
    left: `${randomBetween(2, 98).toFixed(2)}%`,
    size: `${randomBetween(1.8, 3.6).toFixed(2)}px`,
    delay: `${randomBetween(0, 5.4).toFixed(2)}s`,
    duration: `${randomBetween(4.4, 8.6).toFixed(2)}s`,
  }))

const createMeteor = ({ side, burst = false, delay = 0, top }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640
  const durationRange = isMobile ? [0.26, 0.32] : [0.39, 0.43]

  return {
    id: `${Date.now()}-${Math.random()}`,
    side,
    top: top ?? `${randomBetween(4, 94).toFixed(2)}%`,
    delay: `${delay.toFixed(2)}s`,
    duration: `${randomBetween(durationRange[0], durationRange[1]).toFixed(2)}s`,
    length: `${randomBetween(160, 220).toFixed(0)}px`,
    burst,
  }
}

function App() {
  const currentYear = new Date().getFullYear()
  const scrollThumbHeight = 96
  const [staticStars] = useState(() => createStaticStars(110))
  const [twinklingStars] = useState(() => createTwinklingStars(88))
  const [shootingStars, setShootingStars] = useState([])
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDraggingScroll, setIsDraggingScroll] = useState(false)
  const activeDirectionRef = useRef(null)
  const activeMeteorCountRef = useRef(0)
  const meteorTimerRef = useRef(null)
  const scrollRailRef = useRef(null)
  const scrollDragOffsetRef = useRef(scrollThumbHeight / 2)
  const previousScrollBehaviorRef = useRef('')

  const removeMeteor = (meteorId) => {
    setShootingStars((current) =>
      current.filter((meteor) => meteor.id !== meteorId)
    )
    activeMeteorCountRef.current = Math.max(0, activeMeteorCountRef.current - 1)
    if (activeMeteorCountRef.current === 0) {
      activeDirectionRef.current = null
    }
  }

  const addMeteor = (meteor) => {
    setShootingStars((current) => [...current, meteor])
    activeDirectionRef.current = meteor.side
    activeMeteorCountRef.current += 1

    const totalLifetime =
      (Number.parseFloat(meteor.delay) + Number.parseFloat(meteor.duration)) * 1000 + 120

    window.setTimeout(() => {
      removeMeteor(meteor.id)
    }, totalLifetime)
  }

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    const resetScrollOnUnload = () => {
      window.scrollTo(0, 0)
    }

    window.addEventListener('beforeunload', resetScrollOnUnload)

    return () => {
      window.removeEventListener('beforeunload', resetScrollOnUnload)
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    const scheduleMeteor = () => {
      const frequency = randomBetween(4200, 9800)

      meteorTimerRef.current = window.setTimeout(() => {
        if (cancelled) return

        const side =
          activeDirectionRef.current ?? (Math.random() > 0.5 ? 'left' : 'right')
        addMeteor(createMeteor({ side }))
        scheduleMeteor()
      }, frequency)
    }

    scheduleMeteor()

    const handleStarBurst = () => {
      const side =
        activeDirectionRef.current ?? (Math.random() > 0.5 ? 'left' : 'right')
      const meteorCount = randomInt(6, 9)

      Array.from({ length: meteorCount }).forEach((_, index) => {
        addMeteor(
          createMeteor({
            side,
            burst: true,
            delay: index * randomBetween(0.12, 0.26),
          })
        )
      })
    }

    window.addEventListener('meteor-burst', handleStarBurst)
    return () => {
      cancelled = true
      if (meteorTimerRef.current) {
        window.clearTimeout(meteorTimerRef.current)
      }
      window.removeEventListener('meteor-burst', handleStarBurst)
    }
  }, [])

  useEffect(() => {
    const updateScrollProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = maxScroll <= 0 ? 0 : window.scrollY / maxScroll
      setScrollProgress(Math.max(0, Math.min(1, nextProgress)))
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])

  useEffect(() => {
    if (!isDraggingScroll) {
      return undefined
    }

    const scrollFromPointer = (clientY) => {
      if (!scrollRailRef.current) {
        return
      }

      const rect = scrollRailRef.current.getBoundingClientRect()
      const usableHeight = Math.max(1, rect.height - scrollThumbHeight)
      const relativeY = clientY - rect.top - scrollDragOffsetRef.current
      const nextProgress = relativeY / usableHeight
      const clampedProgress = Math.max(0, Math.min(1, nextProgress))
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const nextScrollTop = maxScroll * clampedProgress

      setScrollProgress(clampedProgress)
      document.documentElement.scrollTop = nextScrollTop
      document.body.scrollTop = nextScrollTop
    }

    const handlePointerMove = (event) => {
      event.preventDefault()
      scrollFromPointer(event.clientY)
    }

    const handlePointerUp = () => {
      document.documentElement.style.scrollBehavior = previousScrollBehaviorRef.current
      setIsDraggingScroll(false)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      document.documentElement.style.scrollBehavior = previousScrollBehaviorRef.current
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [isDraggingScroll])

  const handleScrollRailPointerDown = (event) => {
    event.preventDefault()
    previousScrollBehaviorRef.current = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = 'auto'
    setIsDraggingScroll(true)

    if (!scrollRailRef.current) {
      return
    }

    if (event.currentTarget.setPointerCapture) {
      event.currentTarget.setPointerCapture(event.pointerId)
    }

    const rect = scrollRailRef.current.getBoundingClientRect()
    const thumbTop = scrollProgress * Math.max(0, rect.height - scrollThumbHeight)
    const isThumbTarget = event.target instanceof HTMLElement &&
      event.target.closest('.left-scroll-thumb')

    scrollDragOffsetRef.current = isThumbTarget
      ? Math.max(0, Math.min(scrollThumbHeight, event.clientY - rect.top - thumbTop))
      : scrollThumbHeight / 2

    const usableHeight = Math.max(1, rect.height - scrollThumbHeight)
    const relativeY = event.clientY - rect.top - scrollDragOffsetRef.current
    const nextProgress = relativeY / usableHeight
    const clampedProgress = Math.max(0, Math.min(1, nextProgress))
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const nextScrollTop = maxScroll * clampedProgress

    setScrollProgress(clampedProgress)
    document.documentElement.scrollTop = nextScrollTop
    document.body.scrollTop = nextScrollTop
  }

  return (
    <main>
      <div
        className={`left-scroll-ui ${isDraggingScroll ? 'is-active' : ''}`}
      >
        <div
          ref={scrollRailRef}
          className="left-scroll-rail"
          onPointerDown={handleScrollRailPointerDown}
        >
          <div
            className="left-scroll-thumb"
            style={{
              '--scroll-progress': scrollProgress,
              '--scroll-thumb-height': `${scrollThumbHeight}px`,
            }}
          />
        </div>
      </div>

      <div className="site-stars" aria-hidden="true">
        {staticStars.map((star, index) => (
          <span
            key={`static-star-${index}`}
            className="site-star site-star-static"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ))}

        {twinklingStars.map((star, index) => (
          <span
            key={`twinkling-star-${index}`}
            className="site-star site-star-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}

        {shootingStars.map((star) => (
          <span
            key={star.id}
            className={[
              'shooting-star',
              star.burst ? 'shooting-star-burst' : '',
              star.side === 'right' ? 'from-right' : 'from-left',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration,
              '--meteor-length': star.length,
            }}
          />
        ))}
      </div>

      <section
        id="home"
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 10,
          }}
        >
          <Navbar />
        </div>

        <Home />
      </section>

      <section
        id="portfolio"
        className="page-section page-section-portfolio"
        style={{
          minHeight: '100vh',
        }}
      >
        <Portfolio />
      </section>

      <section
        id="experience"
        className="page-section page-section-experience"
        style={{
          minHeight: '100vh',
        }}
      >
        <Experience />
      </section>

      <section
        id="contact"
        className="page-section page-section-contact"
        style={{
          minHeight: '100vh',
        }}
      >
        <Contact />
      </section>

      <footer className="site-footer">
        <p className="site-footer-text">
          &copy; {currentYear} Hashebul Joy. All rights reserved. No reproduction, reuse, or redistribution without written permission.
        </p>
      </footer>
    </main>
  )
}

export default App
