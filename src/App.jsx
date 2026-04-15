import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Briefcase,
  ChevronRight,
  Cpu,
  ExternalLink,
  FileText,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Search,
  Sparkles,
  X,
} from "lucide-react";

const categories = [
  "All",
  "Data Science",
  "Data Analyst",
  "AI/ML Engineer",
  "NeuroCortex MindTech",
];

const skills = {
  "Programming & Data": ["Python", "SQL", "R", "Pandas", "NumPy"],
  "ML & AI": ["Scikit-learn", "PyTorch", "TensorFlow", "Hugging Face", "LangChain"],
  "Visualization & BI": ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
  "Big Data & Data Systems": ["Spark", "PySpark", "Hadoop", "Hive"],
  "Deployment & APIs": ["FastAPI", "Streamlit", "Git", "GitHub", "Docker"],
  "Cloud & Product Thinking": ["Azure", "GCP", "Experimentation", "Problem Framing", "Research Translation"],
};

const projects = [
  {
    id: 1,
    title: "DataDoctor AI",
    category: "Data Science",
    impact:
      "Diagnoses why tabular ML models fail and recommends practical fixes like an internal ML copilot.",
    problem:
      "Teams often waste time debugging poor model performance without a structured diagnosis workflow.",
    outcome:
      "Built a production-style debugging assistant for dataset quality checks, target issues, leakage detection, and baseline benchmarking.",
    stack: ["FastAPI", "Pandas", "NumPy", "Scikit-learn", "HTML/CSS/JS"],
    github: "https://github.com/codewp199/datadoc_ai",
    demo: "#",
    details: {
      whyItMatters:
        "It turns model debugging into a faster, more structured engineering workflow instead of trial and error.",
      role:
        "Designed the product concept, backend analysis pipeline, issue-detection logic, and user-facing explanation flow.",
      architecture: [
        "Upload supervised tabular CSV",
        "Run data quality and target-health diagnostics",
        "Check leakage, imbalance, missingness, duplicates, outliers, and cardinality risks",
        "Benchmark quick baseline models when target is present",
        "Generate plain-English recommendations for next steps",
      ],
      highlights: [
        "Production-style ML debugging workflow",
        "Feature-quality and target-quality diagnostics",
        "Benchmark baseline support",
        "Action-oriented recommendations for fixes",
      ],
      recruiterAngle:
        "Best shown under Data Science because it demonstrates model reasoning, diagnostics, and practical ML judgment.",
    },
  },
  {
    id: 2,
    title: "Anomaly Detection Platform",
    category: "Data Analyst",
    impact:
      "Flags unusual operational patterns in uploaded CSV data using a flexible schema-aware anomaly workflow.",
    problem:
      "Analysts and ops teams need fast anomaly detection across changing datasets without building a custom pipeline each time.",
    outcome:
      "Created a reusable anomaly analysis app with automatic schema detection, record labeling, group-level views, and adaptive scoring.",
    stack: ["Python", "FastAPI", "React", "CSV Analytics", "Visualization"],
    github: "https://github.com/codewp199/Anomaly_Detection",
    demo: "#",
    details: {
      whyItMatters:
        "This project shows that data monitoring can be made flexible enough for operational analytics, support data, product metrics, and finance-style records.",
      role:
        "Built the flexible ingestion logic, anomaly scoring flow, and frontend experience for exploring suspicious records.",
      architecture: [
        "Upload CSV",
        "Auto-detect numeric, ID, and grouping fields",
        "Generate anomaly scores from available numeric features",
        "Create adaptive group charts and top-anomaly tables",
        "Present high-risk records for review",
      ],
      highlights: [
        "No hardcoded schema dependency",
        "Adaptive charts and anomaly tables",
        "Operational analytics use cases",
        "Strong portfolio fit for analyst + product-facing storytelling",
      ],
      recruiterAngle: "Primary category: Data Analyst. Secondary fit: Data Science.",
    },
  },
  {
    id: 3,
    title: "AegisML Control Center",
    category: "AI/ML Engineer",
    impact:
      "Monitors live ML systems, surfaces reliability degradation, and recommends platform-level control actions.",
    problem:
      "Model operations teams need a way to track reliability, investigate failure pressure, and decide when to retrain, rollback, or guardrail a system.",
    outcome:
      "Built a control center with telemetry monitoring, similarity-based incident retrieval, and action recommendations.",
    stack: ["React", "JavaScript", "Monitoring", "Telemetry Analytics", "UI Engineering"],
    github: "https://github.com/codewp199/AegisML-Control-Center",
    demo: "#",
    details: {
      whyItMatters:
        "This feels like an internal platform tool, which is exactly the kind of project that makes an AI/ML engineer portfolio look more mature.",
      role:
        "Designed the product narrative, monitoring views, telemetry logic, reliability scoring, and incident recommendation layer.",
      architecture: [
        "Ingest model telemetry and incident history",
        "Score portfolio reliability across models",
        "Visualize degradation, error pressure, and service health",
        "Retrieve similar incidents using similarity signals",
        "Recommend retrain, rollback, scale, or guardrail actions",
      ],
      highlights: [
        "Internal-tool feel instead of student-demo feel",
        "MLOps-style monitoring narrative",
        "Action recommendations, not just charts",
        "Strong recruiter appeal for ML engineering roles",
      ],
      recruiterAngle: "Best flagship project under AI/ML Engineer.",
    },
  },
  {
    id: 4,
    title: "ResolutionOS AI",
    category: "AI/ML Engineer",
    impact:
      "Acts as an incident resolution copilot that retrieves similar cases, infers likely root causes, and recommends next actions.",
    problem:
      "Support and operations teams often lose time triaging repeated incidents without a structured resolution memory layer.",
    outcome:
      "Built a lightweight incident resolution assistant with retrieval, root-cause heuristics, urgency estimation, and confidence scoring.",
    stack: ["Python", "FastAPI", "Similarity Search", "Incident Intelligence", "Applied AI"],
    github: "https://github.com/codewp199/ResolutionOS",
    demo: "#",
    details: {
      whyItMatters:
        "Shows how AI-style retrieval systems can help teams act faster even without heavyweight LLM infrastructure.",
      role:
        "Built the resolution logic, search flow, recommendation pipeline, and product story around incident intelligence.",
      architecture: [
        "Upload historical incidents",
        "Query new issue in plain English",
        "Retrieve similar historical cases",
        "Infer likely root causes and next best actions",
        "Estimate urgency and confidence",
      ],
      highlights: [
        "Useful agent-style workflow",
        "Knowledge retrieval plus recommendations",
        "Operational AI positioning",
        "Strong fit for AI product and ML engineering applications",
      ],
      recruiterAngle:
        "Best shown under AI/ML Engineer with a product and agentic systems angle.",
    },
  },
  {
    id: 5,
    title: "NeuroCortex MindTech Platform",
    category: "NeuroCortex MindTech",
    impact:
      "Startup track focused on Brain-Computer Interface innovation, EEG analytics, and neurotechnology-driven product thinking.",
    problem:
      "Neurotechnology products need stronger bridges between research insights, intelligent signal analysis, and deployable user-facing solutions.",
    outcome:
      "Positioned as a founder-led innovation track combining AI, neural signal analysis, research translation, and product experimentation.",
    stack: ["BCI", "EEG Analytics", "Machine Learning", "Startup Strategy", "Research Translation"],
    github: "https://github.com/codewp199/EEG-Stress-Management",
    demo: "https://neurocortexmindtech.godaddysites.com/",
    details: {
      whyItMatters:
        "This is the section that differentiates you from generic AI candidates. It signals founder energy, research depth, and future-facing technical ambition.",
      role:
        "Founder, builder, and technical storyteller shaping neurotechnology ideas into applied product directions.",
      architecture: [
        "Signal acquisition and preprocessing",
        "Feature extraction and pattern modeling",
        "Use-case-driven intelligence layer",
        "Decision support, monitoring, or rehabilitation workflow",
        "Founder-led experimentation and product iteration",
      ],
      highlights: [
        "Unique domain positioning",
        "Research-to-product narrative",
        "Health-tech and neurotech innovation angle",
        "Long-term differentiator for your brand",
      ],
      recruiterAngle:
        "Use this as your founder and innovation section rather than a standard repo card.",
    },
  },
  {
  id: 6,
  title: "DataLens",
  category: "Data Science",
  impact: "Analyzes datasets to detect quality issues, feature risks, and ML readiness with actionable insights.",
  problem: "Raw datasets often contain missing values, outliers, and hidden risks that affect downstream ML performance.",
  outcome: "Built an intelligent data profiling tool that audits data quality, highlights risks, and recommends preprocessing steps.",
  stack: ["Python", "Streamlit", "Pandas", "NumPy", "Matplotlib"],
  github: "https://github.com/codewp199/DataLens",
  demo: "https://datalens-m8cctlegynxpzta4zwno7r.streamlit.app/",
  details: {
    whyItMatters: "Helps teams identify data issues early and improve model performance before training.",
    role: "Designed and built the full pipeline including data profiling, risk detection, and insight generation.",
    architecture: [
      "Upload CSV dataset",
      "Analyze missing values, duplicates, and outliers",
      "Profile each column and assign risk levels",
      "Generate insights and recommendations",
      "Compute ML readiness score"
    ],
    highlights: [
      "Automated data quality audit",
      "Feature risk detection",
      "Insight generation engine",
      "ML readiness scoring"
    ],
    recruiterAngle: "Strong demonstration of data understanding, ML thinking, and product-level problem solving."
  }
},
{
  id: 7,
  title: "DecisionBoard",
  category: "Data Analyst",
  impact: "Transforms raw datasets into actionable business decisions by identifying key drivers, risks, and opportunities.",
  problem: "Data analysis often stops at dashboards without clear direction, leaving teams unsure about what actions to take next.",
  outcome: "Built a decision-support tool that analyzes data patterns, highlights critical insights, and generates clear, data-driven recommendations.",
  stack: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly"],
  github: "https://github.com/codewp199/DecisionBoard",
  demo: "https://decisionboard-dmdzqwoqg4pxienvdkhagg.streamlit.app/",
  details: {
    whyItMatters: "Bridges the gap between analysis and decision-making by turning insights into clear, actionable recommendations.",
    role: "Designed and developed the full pipeline including data ingestion, pattern detection, insight generation, and decision recommendation engine.",
    architecture: [
      "Upload CSV dataset",
      "Perform data quality checks and preprocessing",
      "Analyze distributions, outliers, and segment patterns",
      "Identify key drivers and anomalies",
      "Generate decision-oriented insights and recommendations"
    ],
    highlights: [
      "Decision-focused analytics engine",
      "Automated insight generation",
      "Pattern and anomaly detection",
      "Actionable recommendation system"
    ],
    recruiterAngle: "Demonstrates strong analytical thinking, business awareness, and ability to translate data insights into real-world decisions."
  }
}
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="skill-card card">
      <h3>{title}</h3>
      <div className="tag-wrap">
        {items.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.div layout className="project-card card">
      <div className="project-card-top">
        <div>
          <p className="category-label">{project.category}</p>
          <h3>{project.title}</h3>
        </div>
        <div className="icon-box">
          <Layers3 size={18} />
        </div>
      </div>

      <p className="muted body-text">{project.impact}</p>

      <div className="tag-wrap compact-tags">
        {project.stack.slice(0, 4).map((item) => (
          <span key={item} className="tag small-tag">
            {item}
          </span>
        ))}
      </div>

      <div className="project-meta">
        <p>
          <strong>Problem:</strong> {project.problem}
        </p>
        <p>
          <strong>Outcome:</strong> {project.outcome}
        </p>
      </div>

      <div className="button-row">
        <button className="btn btn-primary" onClick={() => onOpen(project)} type="button">
          View Details <ChevronRight size={16} />
        </button>
        <a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer">
          <Github size={16} /> GitHub
        </a>
        <a className="btn btn-accent" href={project.demo} target="_blank" rel="noreferrer">
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal card"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal-header">
            <div>
              <p className="category-label">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="muted body-text">{project.impact}</p>
            </div>
            <button className="icon-button" onClick={onClose} aria-label="Close modal" type="button">
              <X size={18} />
            </button>
          </div>

          <div className="modal-grid two-col">
            <div className="card inner-card">
              <h4>Problem Statement</h4>
              <p className="muted body-text">{project.problem}</p>
            </div>
            <div className="card inner-card">
              <h4>Why It Matters</h4>
              <p className="muted body-text">{project.details.whyItMatters}</p>
            </div>
            <div className="card inner-card">
              <h4>My Role</h4>
              <p className="muted body-text">{project.details.role}</p>
            </div>
            <div className="card inner-card">
              <h4>Business and User Impact</h4>
              <p className="muted body-text">{project.outcome}</p>
            </div>
          </div>

          <div className="card inner-card architecture-card">
            <h4>Architecture and Workflow</h4>
            <div className="architecture-grid">
              {project.details.architecture.map((step, index) => (
                <div key={step} className="step-box">
                  <span className="step-index">0{index + 1}.</span> {step}
                </div>
              ))}
            </div>
          </div>

          <div className="modal-grid feature-split">
            <div className="card inner-card">
              <h4>Key Highlights</h4>
              <div className="tag-wrap">
                {project.details.highlights.map((item) => (
                  <span key={item} className="tag accent-tag">
                    {item}
                  </span>
                ))}
              </div>
              <h4 className="subheading">Tech Stack</h4>
              <div className="tag-wrap">
                {project.stack.map((item) => (
                  <span key={item} className="tag small-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card inner-card recruiter-card">
              <h4>Recruiter Positioning</h4>
              <p className="muted body-text">{project.details.recruiterAngle}</p>
              <div className="stacked-buttons">
                <a className="btn btn-primary full-width" href={project.github} target="_blank" rel="noreferrer">
                  <Github size={16} /> View GitHub Repo
                </a>
                <a className="btn btn-secondary full-width" href={project.demo} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> Demo Placeholder
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const loweredQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const categoryMatch = activeCategory === "All" || project.category === activeCategory;
      const queryMatch =
        loweredQuery.length === 0 ||
        project.title.toLowerCase().includes(loweredQuery) ||
        project.impact.toLowerCase().includes(loweredQuery) ||
        project.category.toLowerCase().includes(loweredQuery) ||
        project.stack.join(" ").toLowerCase().includes(loweredQuery);

      return categoryMatch && queryMatch;
    });
  }, [activeCategory, query]);

  return (
    <div className="app-shell">
      <div className="background-glow" />

      <header className="topbar">
        <div className="container topbar-inner">
          <p className="brand">PRAVALIKA // PORTFOLIO</p>
          <nav className="desktop-nav">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="pill">
                <Sparkles size={14} /> AI/ML • Data Analyst Enthusiast • Founder
              </div>
              <h1>
                Building intelligent systems, analytical workflows, and product-grade AI experiences.
              </h1>
              <p className="hero-copy">
                I design and build data-driven products across AI/ML engineering, analytics, data science, and neurotechnology-focused innovation. This portfolio is structured to show technical depth, execution quality, and practical problem solving.
              </p>
              <div className="button-row hero-buttons">
                <a className="btn btn-primary" href="#projects">
                  View Projects
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Contact
                </a>
                <a className="btn btn-accent" href="#">
                  Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-panel-wrapper"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="hero-panel card">
                <div className="stats-grid">
                  {[
                    { label: "Tracks", value: "4", icon: Layers3 },
                    { label: "Core Focus", value: "AI + Data", icon: Cpu },
                    { label: "Startup Lens", value: "NeuroTech", icon: Brain },
                    { label: "Build Style", value: "Product-Grade", icon: Briefcase },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="stat-card inner-card">
                        <Icon size={18} />
                        <p className="stat-value">{item.value}</p>
                        <p className="muted">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="inner-card recruiter-snapshot">
                  <h4>How I think?</h4>
                  <p className="muted body-text">
            "I’m naturally drawn to broken systems—especially when the issue isn’t obvious. I like digging into data, figuring out what’s actually going wrong, and building tools that make that process faster and more intuitive."                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionTitle
              eyebrow="About"
              title="A technical portfolio designed like a product, not a resume dump."
              description="I focus on building systems that connect technical implementation with real-world usefulness — from anomaly detection and incident intelligence to ML monitoring and neurotechnology-driven innovation. The goal is not just to ship models, but to solve meaningful problems with strong engineering judgment and product clarity."
            />
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Skills"
              title="Technical breadth with a clear applied engineering focus."
              description="Designed to reflect real-world engineering thinking, this portfolio showcases how I build, analyze, and deploy data-driven systems—from dataset auditing and anomaly detection to ML monitoring and decision-support tools."
              />
            <div className="skills-grid">
              {Object.entries(skills).map(([title, items]) => (
                <SkillCard key={title} title={title} items={items} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Project Showcase"
              title="Four tracks. One coherent technical story."
              description="Projects are structured to highlight key engineering signals: how models are reasoned about, how data is analyzed, how systems are designed, and how solutions are translated into usable products."            />

            <div className="toolbar card">
              <div className="filter-group">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-chip ${activeCategory === category ? "active" : ""}`}
                    onClick={() => setActiveCategory(category)}
                    type="button"
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="search-box">
                <Search size={16} />
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search projects, tools, or categories"
                />
              </div>
            </div>

            <motion.div layout className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
              ))}
            </motion.div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Experience & Credibility"
              title="Positioned to show ownership, initiative, and execution."
              description="Highlights hands-on execution and ownership across projects, with a focus on turning technical concepts and research-driven ideas into deployable, real-world solutions."            />

            <div className="experience-grid">
              {[
                {
                  title: "Founder & AI/ML Lead",
                  org: "NeuroCortex MindTech",
                  description:
                    "Building a neurotechnology-focused innovation track that combines BCI ideas, applied ML thinking, and product-led experimentation.",
                },
                {
                  title: "AI/ML Projects & Systems Builder",
                  org: "Independent Portfolio Work",
                  description:
                    "Created production-style AI tools across ML debugging, incident intelligence, anomaly detection, and model monitoring.",
                },
                {
                  title: "Research & Technical Credibility",
                  org: "Publications / Academic Work",
                  description:
                    "Applying machine learning and brain-signal-oriented problem solving with a strong focus on practical, outcome-oriented engineering.",
                },
              ].map((item) => (
                <div key={item.title} className="card experience-card">
                  <div className="icon-box small-icon-box">
                    <Briefcase size={18} />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="accent-text">{item.org}</p>
                  <p className="muted body-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="feature-banner card">
              <div>
                <p className="eyebrow">NeuroCortex MindTech</p>
                <h2>Founder-led neurotechnology track built to differentiate the portfolio.</h2>
                <p className="section-description">
                  This section is designed to communicate long-range technical ambition: Brain-Computer Interface thinking, applied machine learning for neural data, and the ability to translate research-oriented ideas into product-facing innovation. It should feel like a serious startup narrative, not a hobby add-on.
                </p>
              </div>

              <div className="feature-points">
                {[
                  "BCI and EEG-centered innovation framing",
                  "Research-to-product storytelling",
                  "Health-tech and neurotech differentiation",
                  "Founder mindset with technical ownership",
                ].map((item) => (
                  <div key={item} className="inner-card point-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-card card">
              <p className="eyebrow">Contact</p>
              <h2>Open to impactful AI, data, and startup-facing opportunities.</h2>
              <p className="section-description contact-copy">
              </p>

              <div className="button-row centered-buttons">
                <a className="btn btn-primary" href="https://www.linkedin.com/in/pravalika-upadrashta">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a className="btn btn-secondary" href="https://github.com/codewp199" target="_blank" rel="noreferrer">
                  <Github size={16} /> GitHub
                </a>
                <a className="btn btn-secondary" href="mailto:pravalikaupadrasta11@gmail.com">
                  <Mail size={16} /> Email
                </a>
                <a className="btn btn-accent" href="https://canva.link/axgi84qebb78vgt">
                  <FileText size={16} /> Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
