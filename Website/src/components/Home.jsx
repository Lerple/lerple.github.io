import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useEffect, useState, useRef } from 'react'
import { Color } from 'three'
import astroImage from '../assets/space/Astro.png'
import backgroundImage from '../assets/space/Background.jpeg'
import cloudsImage from '../assets/space/Clouds.png'
import cloudsOverlayImage from '../assets/space/CloudsOverlay.png'
import { siteContent } from '../content/siteContent'
import '../App.css'

function ParallaxLayer({
  texturePath,
  basePosition,
  planeHeight,
  depthSpeed,
  horizontalDrift = 0,
  scale = [1, 1, 1],
  cover = false,
  ambientIntensity = 1,
  floatAmplitude = 0,
  floatSpeed = 0.6,
  progressLimit = 0.8,
  progressMultiplier = 1,
}) {
  const texture = useTexture(texturePath)
  const meshRef = useRef(null)
  const { viewport } = useThree()

  if (!texture.image) return null

  const imageAspect = texture.image.width / texture.image.height
  const screenAspect = viewport.width / viewport.height

  let width
  let height

  if (cover) {
    if (imageAspect > screenAspect) {
      height = viewport.height
      width = height * imageAspect
    } else {
      width = viewport.width
      height = width / imageAspect
    }
  } else {
    height = planeHeight
    width = imageAspect * planeHeight
  }

  const [baseX, baseY, baseZ = 0] = basePosition

  useFrame((state) => {
    if (!meshRef.current) return

    const progress =
      Math.min(window.scrollY / window.innerHeight, progressLimit) * progressMultiplier
    const floatOffset =
      floatAmplitude === 0 ? 0 : Math.sin(state.clock.elapsedTime * floatSpeed) * floatAmplitude

    meshRef.current.position.x = baseX + progress * horizontalDrift
    meshRef.current.position.y = baseY + progress * depthSpeed + floatOffset
  })

  return (
    <mesh ref={meshRef} position={[baseX, baseY, baseZ]} scale={scale}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial
        map={texture}
        transparent
        toneMapped={false}
        color={new Color().setScalar(ambientIntensity)}
      />
    </mesh>
  )
}

export default function Home() {
  const { home } = siteContent
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const frameRef = useRef(0)

  useEffect(() => {
    const updateLayout = () => {
      frameRef.current = 0
      setScrollProgress(Math.min(window.scrollY / window.innerHeight, 0.92))
    }

    const handleScroll = () => {
      if (frameRef.current) {
        return
      }

      frameRef.current = window.requestAnimationFrame(updateLayout)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      handleScroll()
    }

    setIsMobile(window.innerWidth <= 768)
    updateLayout()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }

      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const canvasDpr = isMobile ? 1 : [1, 2]

  return (
    <section className="home-scene">
      <div className="home-scene-sticky">
        <Canvas
          gl={{ alpha: false }}
          dpr={canvasDpr}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        >
          <color attach="background" args={['black']} />

          <ParallaxLayer
            texturePath={backgroundImage}
            basePosition={[0, 0, 0]}
            planeHeight={11}
            depthSpeed={0.35}
            cover
            ambientIntensity={1}
          />
          <ParallaxLayer
            texturePath={cloudsImage}
            basePosition={[0, -0.15, 0.1]}
            planeHeight={11}
            depthSpeed={0.8}
            horizontalDrift={0.15}
            ambientIntensity={0.3}
          />
        </Canvas>

        <div className="home-copy-overlay" style={{ zIndex: 4 }}>
          <div
            className="home-title-group"
            style={{
              transform: `translate3d(${scrollProgress * 34}px, ${scrollProgress * 64}px, 0)`,
            }}
          >
            <h1 className="home-name">{home.name}</h1>
            <p className="home-subtitle">{home.title}</p>
          </div>
        </div>

        <Canvas
          gl={{ alpha: true }}
          dpr={canvasDpr}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            inset: 0,
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          <ParallaxLayer
            texturePath={astroImage}
            basePosition={[0, 0, 0.2]}
            planeHeight={6}
            depthSpeed={1.35}
            horizontalDrift={0.3}
            scale={isMobile ? [0.65, 0.65, 0.65] : [1.3, 1.3, 1.3]}
            ambientIntensity={0.9}
            floatAmplitude={0.18}
            floatSpeed={0.7}
          />
        </Canvas>

        <div className="home-copy-overlay" style={{ zIndex: 6 }}>
          <div
            className="home-blurb-group"
            style={{
              transform: `translate3d(${-scrollProgress * 26}px, ${scrollProgress * 42}px, 0)`,
            }}
          >
            <p className="home-blurb-label">{home.blurbLabel}</p>
            <p className="home-blurb-text">{home.blurbText}</p>
          </div>
        </div>

        <Canvas
          gl={{ alpha: true }}
          dpr={canvasDpr}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            inset: 0,
            zIndex: 7,
            pointerEvents: 'none',
          }}
        >
          <ParallaxLayer
            texturePath={cloudsOverlayImage}
            basePosition={[3, -2, 0.3]}
            planeHeight={11}
            depthSpeed={1.8}
            horizontalDrift={0.45}
            scale={[1.5, 1.5, 1.5]}
            ambientIntensity={1}
            progressLimit={1}
            progressMultiplier={1.22}
          />
        </Canvas>
        <div className="fade" />
      </div>
    </section>
  )
}
