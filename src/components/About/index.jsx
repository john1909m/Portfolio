import { memo } from 'react';
import { HiOutlineMapPin, HiOutlineEnvelope, HiOutlineLanguage } from 'react-icons/hi2';

export const About = memo(() => {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-b border-ink-border bg-paper" id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-6 sm:pb-8 border-b border-ink-border space-y-1.5 sm:space-y-2">
          <p className="text-xs font-mono text-ink-muted tracking-wider">
            05 &middot; Profile &amp; background
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-ink font-semibold">
            About John Emil
          </h2>
        </div>

        <div className="pt-6 sm:pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Main prose */}
          <div className="md:col-span-8 space-y-5 text-sm md:text-base font-sans text-ink leading-relaxed font-normal">
            <p>
              I am a software engineer focused on building robust, scalable web systems and production applications. My primary work centers around Java Spring Boot on the backend and React.js on the frontend, complemented by an active background in commercial graphic design and digital media.
            </p>
            <p>
              As the builder and founder of Storely, I designed and developed a multi-tenant SaaS e-commerce system that powers 35+ active merchant stores with over 90 secure RESTful endpoints, multi-role access control, and 3 payment integrations.
            </p>
            <p>
              In parallel, I have built real-world operational software including a production ERP system for Alamia Print, a live printing business, and a clinic management system for patient schedules and health records.
            </p>

            <div className="p-4 rounded border border-ink-border bg-paper-card space-y-2">
              <span className="text-xs font-mono text-lime font-medium block">
                Engineering philosophy
              </span>
              <p className="text-sm font-sans text-ink-muted font-normal">
                Prioritize clean separation of concerns, explicit domain boundaries, predictable data flows, and accessible, responsive interfaces without unnecessary runtime overhead.
              </p>
            </div>
          </div>

          {/* Quick info card */}
          <div className="md:col-span-4 p-4 sm:p-5 rounded border border-ink-border bg-paper-card space-y-4">
            <h3 className="text-base font-display text-ink font-semibold">
              Quick facts
            </h3>

            <ul className="space-y-3 text-xs font-mono">
              <li className="flex items-start gap-2.5">
                <HiOutlineMapPin className="w-4 h-4 text-ink-muted mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-ink-muted block">Location</span>
                  <span className="text-ink font-medium">Giza, Egypt</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <HiOutlineEnvelope className="w-4 h-4 text-ink-muted mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-ink-muted block">Email</span>
                  <a href="mailto:johnemil21@yahoo.com" className="text-ink font-medium hover:underline">
                    johnemil21@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <HiOutlineLanguage className="w-4 h-4 text-ink-muted mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-ink-muted block">Languages</span>
                  <span className="text-ink font-medium">Arabic (Native), English (Fluent)</span>
                </div>
              </li>
            </ul>

            <div className="pt-2 border-t border-ink-border">
              <span className="text-[11px] font-mono text-ink-muted block">
                Modern Academy Maadi &middot; Graduating 2028
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
export default About;
