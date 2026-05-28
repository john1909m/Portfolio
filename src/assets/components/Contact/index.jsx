import { memo, useState, useCallback } from 'react';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
  HiOutlineClock,
  HiOutlineBolt,
  HiOutlineChatBubbleLeftRight,
} from 'react-icons/hi2';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SectionHeader } from '../../../components/shared/SectionHeader';
import './Contact.scss';

const FormInput = memo(({ label, type = 'text', name, value, onChange, placeholder, error, required }) => (
  <div className="contact-form__group">
    <label htmlFor={name} className="contact-form__label">
      {label}
      {required && <span className="contact-form__required" aria-hidden="true"> *</span>}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`contact-form__input ${error ? 'contact-form__input--error' : ''}`}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      required={required}
    />
    {error && (
      <span id={`${name}-error`} className="contact-form__error" role="alert">
        {error}
      </span>
    )}
  </div>
));

FormInput.displayName = 'FormInput';

export const Contact = memo(() => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = useCallback(() => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Name is required';
    if (!formData.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Enter a valid email';
    if (!formData.message.trim()) next.message = 'Message is required';
    else if (formData.message.trim().length < 10) next.message = 'Message must be at least 10 characters';
    return next;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: '' } : prev));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const next = validateForm();
      if (Object.keys(next).length) {
        setErrors(next);
        return;
      }
      setLoading(true);
      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
        setTimeout(() => setSubmitted(false), 5000);
      }, 800);
    },
    [validateForm]
  );

  return (
    <section className="contact section-wrap" id="contact" aria-labelledby="contact-heading">
      <div className="section-orb" aria-hidden="true" />
      <div className="section-container">
        <SectionHeader
          id="contact-heading"
          badge="Get in touch"
          badgeIcon={<HiOutlineChatBubbleLeftRight />}
          title="Let's"
          titleAccent="Connect"
          subtitle="Have a project in mind? I typically respond within 24 hours."
        />

        <div className="contact__grid">
          <aside className="contact__info">
            <ul className="contact__cards">
              <li className="card contact__card">
                <HiOutlineEnvelope aria-hidden="true" />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:johnemil21@yahoo.com">johnemil21@yahoo.com</a>
                </div>
              </li>
              <li className="card contact__card">
                <HiOutlinePhone aria-hidden="true" />
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+201200158852">+20 120 015 8852</a>
                </div>
              </li>
              <li className="card contact__card">
                <HiOutlineMapPin aria-hidden="true" />
                <div>
                  <strong>Location</strong>
                  <a href="https://maps.google.com/?q=Giza+Egypt" target="_blank" rel="noopener noreferrer">
                    Giza, Egypt
                  </a>
                </div>
              </li>
            </ul>

            <div className="card contact__availability">
              <HiOutlineClock aria-hidden="true" />
              <div>
                <strong>Availability</strong>
                <p>Open for freelance and full-time opportunities.</p>
                <span className="contact__status">
                  <span className="contact__status-dot" aria-hidden="true" />
                  Available for work
                </span>
              </div>
            </div>

            <nav className="contact__social" aria-label="Social links">
              <a href="https://www.linkedin.com/in/john-emil-0134a3239/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/john1909m" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://wa.me/201200158852" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </nav>
          </aside>

          <div className="card contact__form-wrap">
            <h3 className="contact__form-title">Send a message</h3>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <FormInput
                label="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                error={errors.name}
                required
              />
              <FormInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                error={errors.email}
                required
              />
              <div className="contact-form__group">
                <label htmlFor="message" className="contact-form__label">
                  Message <span className="contact-form__required" aria-hidden="true"> *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`contact-form__input contact-form__textarea ${errors.message ? 'contact-form__input--error' : ''}`}
                  rows={5}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  required
                />
                {errors.message && (
                  <span id="message-error" className="contact-form__error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>
              <button type="submit" className="btn-primary contact-form__submit" disabled={loading} aria-busy={loading}>
                {loading ? (
                  'Sending...'
                ) : (
                  <>
                    <HiOutlinePaperAirplane aria-hidden="true" />
                    Send message
                  </>
                )}
              </button>
            </form>

            {submitted && (
              <div className="contact__success" role="status">
                Message sent. I will get back to you shortly.
              </div>
            )}
          </div>
        </div>

        <p className="contact__note">
          <HiOutlineBolt aria-hidden="true" />
          Typically responds within <strong>24 hours</strong>
        </p>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
