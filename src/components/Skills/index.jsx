import { memo, useState } from 'react';
import {
  HiOutlineCodeBracket,
  HiOutlineComputerDesktop,
  HiOutlinePaintBrush,
  HiOutlineCpuChip,
  HiOutlineDevicePhoneMobile,
} from 'react-icons/hi2';
import { FaJava } from 'react-icons/fa6';
import {
  SiSpringboot,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiOracle,
  SiVite,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
  SiDocker,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiClaude,
  SiGooglegemini,
  SiOpenai,
} from 'react-icons/si';

const DualHtmlCssIcon = () => (
  <div className="flex items-center -space-x-1" aria-hidden="true">
    <SiHtml5 className="w-4 h-4 text-[#E34F26]" />
    <SiCss3 className="w-4 h-4 text-[#1572B6]" />
  </div>
);

const DualGitGithubIcon = () => (
  <div className="flex items-center -space-x-1" aria-hidden="true">
    <SiGit className="w-4 h-4 text-[#F05032]" />
    <SiGithub className="w-4 h-4 text-ink" />
  </div>
);

const CursorIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-ink" aria-hidden="true" {...props}>
    <path d="M5.5 3.214V20.786L10.33 15.956H18.58L5.5 3.214Z" />
  </svg>
);

const skillCategories = [
  {
    id: 'backend-frontend',
    title: 'Engineering & Web',
    icon: HiOutlineCodeBracket,
    skills: [
      { name: 'Java', level: 'Backend', icon: FaJava, color: '#E76F00' },
      { name: 'Spring Boot', level: 'REST APIs', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'React.js', level: 'Frontend', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', level: 'Core', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', level: 'UI', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5 & CSS3', level: 'Semantic', icon: DualHtmlCssIcon },
      { name: 'Relational DBs', level: 'Oracle / SQL', icon: SiOracle, color: '#F80000' },
      { name: 'Vite', level: 'Tooling', icon: SiVite, color: '#646CFF' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: HiOutlineComputerDesktop,
    skills: [
      { name: 'Git & GitHub', level: 'VCS', icon: DualGitGithubIcon },
      { name: 'Postman', level: 'API Testing', icon: SiPostman, color: '#FF6C37' },
      { name: 'Swagger / OpenAPI', level: 'Docs', icon: SiSwagger, color: '#85EA2D' },
      { name: 'Responsive Design', level: 'Mobile', icon: HiOutlineDevicePhoneMobile, color: '#7ED6A8' },
      { name: 'Docker', level: 'Containers', icon: SiDocker, color: '#2496ED' },
    ],
  },
  {
    id: 'creative',
    title: 'Creative & Media',
    icon: HiOutlinePaintBrush,
    skills: [
      { name: 'Adobe Photoshop', level: 'Raster', icon: SiAdobephotoshop, color: '#31A8FF' },
      { name: 'Adobe Illustrator', level: 'Vector', icon: SiAdobeillustrator, color: '#FF9A00' },
      { name: 'Adobe Premiere Pro', level: 'Video', icon: SiAdobepremierepro, color: '#9999FF' },
      { name: 'Adobe After Effects', level: 'Motion', icon: SiAdobeaftereffects, color: '#9999FF' },
    ],
  },
  {
    id: 'ai-tooling',
    title: 'AI Assisted Workflow',
    icon: HiOutlineCpuChip,
    skills: [
      { name: 'Claude Code', level: 'Agentic', icon: SiClaude, color: '#D97706' },
      { name: 'Cursor', level: 'Editor', icon: CursorIcon, color: 'text-ink' },
      { name: 'Antigravity', level: 'IDE', icon: SiGooglegemini, color: '#4E87F8' },
      { name: 'ChatGPT', level: 'LLM', icon: SiOpenai, color: '#10A37F' },
    ],
  },
];

export const Skills = memo(() => {
  const [activeTab, setActiveTab] = useState('backend-frontend');

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section className="py-12 sm:py-16 md:py-20 border-b border-ink-border bg-paper" id="skills">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-6 sm:pb-8 border-b border-ink-border space-y-1.5 sm:space-y-2">
          <p className="text-xs font-mono text-ink-muted tracking-wider">
            02 &middot; Technical competencies
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-ink font-semibold">
            Skills &amp; toolset
          </h2>
          <p className="text-xs sm:text-sm font-sans text-ink-muted max-w-2xl font-normal">
            Everyday software engineering stack, system utilities, creative applications, and development tooling.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="pt-6 sm:pt-8 space-y-5 sm:space-y-6">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded text-xs font-mono transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${isActive
                      ? 'bg-ink text-paper border-ink font-medium'
                      : 'bg-paper-card text-ink border-ink-border hover:bg-paper-surface'
                    }`}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Skill items grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {currentCategory.skills.map((skill) => {
              const SkillIcon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="group p-3.5 sm:p-4 border border-ink-border rounded-lg bg-paper-card hover:bg-paper-surface hover:border-ink transition-all hover:shadow-sm flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md border border-ink-border/60 bg-paper flex items-center justify-center p-2 shrink-0 transition-transform group-hover:scale-105 shadow-xs">
                      {SkillIcon && (
                        <SkillIcon
                          className="w-5 h-5 shrink-0"
                          style={skill.color && !skill.color.startsWith('text-') ? { color: skill.color } : undefined}
                        />
                      )}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-ink-muted px-2 py-0.5 rounded bg-paper border border-ink-border/50 truncate">
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs sm:text-sm font-mono text-ink font-medium block truncate group-hover:text-ink">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
export default Skills;
