import { memo, useState } from 'react';
import {
  HiOutlineCodeBracket,
  HiOutlineComputerDesktop,
  HiOutlinePaintBrush,
  HiOutlineFilm,
  HiOutlineCpuChip,
} from 'react-icons/hi2';

const skillCategories = [
  {
    id: 'backend-frontend',
    title: 'Engineering & Web',
    icon: HiOutlineCodeBracket,
    skills: [
      { name: 'Java', level: 'Backend' },
      { name: 'Spring Boot', level: 'REST APIs' },
      { name: 'React.js', level: 'Frontend' },
      { name: 'JavaScript', level: 'Core' },
      { name: 'Tailwind CSS', level: 'UI' },
      { name: 'HTML5 & CSS3', level: 'Semantic' },
      { name: 'Relational DBs', level: 'Data' },
      { name: 'Vite', level: 'Tooling' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: HiOutlineComputerDesktop,
    skills: [
      { name: 'Git & GitHub', level: 'VCS' },
      { name: 'Postman', level: 'API Testing' },
      { name: 'Swagger / OpenAPI', level: 'Docs' },
      { name: 'Responsive Design', level: 'Mobile' },
      { name: 'Docker', level: 'Containers' },

    ],
  },
  {
    id: 'creative',
    title: 'Creative & Media',
    icon: HiOutlinePaintBrush,
    skills: [
      { name: 'Adobe Photoshop', level: 'Raster' },
      { name: 'Adobe Illustrator', level: 'Vector' },
      { name: 'Adobe Premiere Pro', level: 'Video' },
      { name: 'Adobe After Effects', level: 'Motion' },
    ],
  },
  {
    id: 'ai-tooling',
    title: 'AI Assisted Workflow',
    icon: HiOutlineCpuChip,
    skills: [
      { name: 'Claude Code', level: 'Agentic' },
      { name: 'Cursor', level: 'Editor' },
      { name: 'Antigravity', level: 'IDE' },
      { name: 'ChatGPT', level: 'LLM' },
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
                      ? 'bg-ink text-paper border-ink'
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 border border-ink-border rounded bg-paper-card flex flex-col justify-between space-y-2"
              >
                <span className="text-sm font-mono text-ink font-medium">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-ink-muted">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
export default Skills;
