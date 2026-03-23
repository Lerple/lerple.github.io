import { useEffect, useRef, useState } from 'react'
import githubLogo from '../assets/contact/Github.png'
import linkedinLogo from '../assets/contact/Linkden.png'
import resumeLogo from '../assets/contact/Resume.png'
import resumeFile from '../assets/contact/Resume.pdf'
import { siteContent } from '../content/siteContent'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const Contact = () => {
  const { contact } = siteContent
  const [isComposerOpen, setIsComposerOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const successTimerRef = useRef(0)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const contactMeta = {
    Resume: {
      icon: resumeLogo,
      href: resumeFile,
      external: true,
    },
    Linkden: {
      icon: linkedinLogo,
      href: 'https://www.linkedin.com/in/hashebuljoy/',
      external: true,
    },
    GitHub: {
      icon: githubLogo,
      href: 'https://github.com/lerple',
      external: true,
    },
  }

  const updateField = (field) => (event) => {
    setFormState((current) => ({
      ...current,
      [field]: event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitError(
        'Email sending is not configured yet. Add your EmailJS service ID, template ID, and public key in a local env file.',
      )
      return
    }

    setIsSubmitting(true)
    setIsSubmitted(false)
    setSubmitError('')

    try {
      const response = await window.fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            name: formState.name,
            email: formState.email,
            message: formState.message,
            from_name: formState.name,
            reply_to: formState.email,
            submitted_at: new Date().toLocaleString(),
          },
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'EmailJS request failed.')
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: '',
        email: '',
        message: '',
      })

      successTimerRef.current = window.setTimeout(() => {
        setIsSubmitted(false)
      }, 2600)
    } catch (error) {
      setIsSubmitting(false)
      setSubmitError('The message could not be sent right now. Please try again in a moment.')
      console.error(error)
    }
  }

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        window.clearTimeout(successTimerRef.current)
      }
    }
  }, [])

  return (
    <section className="contact-section">
      <div className="contact-shell">
        <div className="contact-copy">
          <p className="contact-kicker">{contact.kicker}</p>
          <h2 className="contact-title">{contact.title}</h2>
          <p className="contact-description">{contact.description}</p>

          <div className="contact-list">
            {contact.links.map((item, index) => (
              <div
                key={`contact-link-${index}-${item.label || 'empty'}`}
                className="contact-item"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="contact-item-main">
                  <img
                    src={contactMeta[item.label]?.icon}
                    alt={`${item.label} logo`}
                    className="contact-icon"
                  />
                  <div className="contact-item-copy">
                    <span className="contact-label">{item.label}</span>
                  </div>
                </div>

                <a
                  className="contact-link-button"
                  href={contactMeta[item.label]?.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-panel">
          <p className="contact-panel-kicker">{contact.panelKicker}</p>
          <h3 className="contact-panel-title">{contact.panelTitle}</h3>
          <p className="contact-panel-text">{contact.panelText}</p>

          <div
            className="contact-composer is-open"
          >
            <div className="contact-composer-inner">
              <form className="contact-form" onSubmit={handleSubmit}>
                <label className="contact-field">
                  <span className="contact-field-label">Name</span>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={updateField('name')}
                    className="contact-input"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label className="contact-field">
                  <span className="contact-field-label">Email</span>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={updateField('email')}
                    className="contact-input"
                    placeholder="you@example.com"
                    required
                  />
                </label>

                <label className="contact-field">
                  <span className="contact-field-label">Message</span>
                  <textarea
                    value={formState.message}
                    onChange={updateField('message')}
                    className="contact-textarea"
                    placeholder="Tell me a little about the opportunity or project."
                    rows="5"
                    required
                  />
                </label>

                <div className="contact-form-actions">
                  <button
                    type="submit"
                    className="contact-primary-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </div>

                {submitError ? (
                  <p className="contact-form-error">{submitError}</p>
                ) : null}
              </form>
            </div>
          </div>

          <div className={`contact-complete ${isSubmitted ? 'is-visible' : ''}`}>
            <div className="contact-complete-badge">
              <span className="contact-complete-check" />
            </div>
            <p className="contact-complete-title">Message Sent</p>
            <p className="contact-complete-text">
              Thanks for reaching out. Your message was sent successfully.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
