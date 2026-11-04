import { memo, useState, useCallback } from 'react';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
} from 'react-icons/hi2';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export const Contact = memo(() => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = useCallback(() => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Please enter your name';
    if (!formData.email.trim()) next.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Please enter a valid email address';
    if (!formData.message.trim()) next.message = 'Please enter your message';
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
      }, 600);
    },
    [validateForm]
  );

  return (
    <section className="py-12 sm:py-16 md:py-20 border-b border-ink-border bg-paper" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-6 sm:pb-8 border-b border-ink-border space-y-1.5 sm:space-y-2">
          <p className="text-xs font-mono text-ink-muted tracking-wider">
            05 &middot; Direct communication
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-ink font-semibold">
            Get in touch
          </h2>
          <p className="text-xs sm:text-sm font-sans text-ink-muted max-w-2xl font-normal">
            Have an engineering role, multi-tenant SaaS architecture challenge, or project in mind? Reach out directly.
          </p>
        </div>

        <div className="pt-6 sm:pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Info & direct channels */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-4 sm:p-5 border border-ink-border rounded bg-paper-card space-y-3">
              <h3 className="text-base font-display text-ink font-semibold">
                Contact information
              </h3>

              <ul className="space-y-3 text-xs font-mono">
                <li className="flex items-center gap-2">
                  <HiOutlineEnvelope className="w-4 h-4 text-lime" aria-hidden="true" />
                  <a href="mailto:johnemil21@yahoo.com" className="text-ink hover:underline">
                    johnemil21@yahoo.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <HiOutlinePhone className="w-4 h-4 text-lime" aria-hidden="true" />
                  <a href="tel:+201200158852" className="text-ink hover:underline">
                    +20 120 015 8852
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <HiOutlineMapPin className="w-4 h-4 text-lime" aria-hidden="true" />
                  <span className="text-ink">Giza, Egypt</span>
                </li>
              </ul>
            </div>

            <div className="p-5 border border-ink-border rounded bg-paper-card space-y-3">
              <h3 className="text-base font-display text-ink font-semibold">
                Direct channels
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <a
                  href="https://wa.me/201200158852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-ink-border bg-paper hover:bg-paper-surface text-ink transition-colors focus-visible:ring-2 focus-visible:ring-lime"
                >
                  <FaWhatsapp className="w-3.5 h-3.5 text-mint" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/john-emil-0134a3239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-ink-border bg-paper hover:bg-paper-surface text-ink transition-colors focus-visible:ring-2 focus-visible:ring-lime"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/john1909m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-ink-border bg-paper hover:bg-paper-surface text-ink transition-colors focus-visible:ring-2 focus-visible:ring-lime"
                >
                  <FaGithub className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 p-6 border border-ink-border rounded bg-paper-card">
            {submitted ? (
              <div className="py-10 text-center space-y-2">
                <p className="text-lg font-display text-ink font-semibold">
                  Thank you for your message
                </p>
                <p className="text-sm font-sans text-ink-muted font-normal">
                  I will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-ink font-medium mb-1.5">
                    Your name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-sm font-sans bg-paper border border-ink-border rounded text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.name && (
                    <span className="text-xs font-mono text-tomato mt-1 block">{errors.name}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-ink font-medium mb-1.5">
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-sm font-sans bg-paper border border-ink-border rounded text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                    placeholder="name@example.com"
                    required
                  />
                  {errors.email && (
                    <span className="text-xs font-mono text-tomato mt-1 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-ink font-medium mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-sm font-sans bg-paper border border-ink-border rounded text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                  {errors.message && (
                    <span className="text-xs font-mono text-tomato mt-1 block">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-ink text-paper text-xs font-mono font-medium hover:bg-ink/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime disabled:opacity-50"
                >
                  <HiOutlinePaperAirplane className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{loading ? 'Sending message...' : 'Send message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
