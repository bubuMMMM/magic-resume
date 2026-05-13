import { DEFAULT_FIELD_ORDER } from "./constants";
import { GlobalSettings, DEFAULT_CONFIG, ResumeData } from "../types/resume";
const initialGlobalSettings: GlobalSettings = {
  baseFontSize: 16,
  pagePadding: 32,
  paragraphSpacing: 12,
  lineHeight: 1.5,
  sectionSpacing: 10,
  headerSize: 18,
  subheaderSize: 16,
  useIconMode: true,
  themeColor: "#000000",
  centerSubtitle: true,
};

export const initialResumeState = {
  title: "新建简历",
  basic: {
    name: "宋哈娜",
    title: "高级前端工程师",
    employementStatus: "离职",
    email: "zhangsan@example.com",
    phone: "13800138000",
    location: "北京市朝阳区",
    birthDate: "2025-01",
    fieldOrder: DEFAULT_FIELD_ORDER,
    icons: {
      email: "Mail",
      phone: "Phone",
      birthDate: "CalendarRange",
      employementStatus: "Briefcase",
      location: "MapPin",
    },
    photoConfig: DEFAULT_CONFIG,
    customFields: [
      {
        id: "personal",
        label: "个人网站",
        value: "https://zhangsan.dev",
        icon: "Globe",
      },
    ],
    photo: "/avatar.png",
    githubKey: "",
    githubUseName: "",
    githubContributionsVisible: false,
  },
  education: [
    {
      id: "1",
      school: "北京大学",
      major: "计算机科学与技术",
      degree: "",
      startDate: "2013-09",
      endDate: "2017-06",
      visible: true,
      gpa: "",
      description: `<ul>
        <li>主修课程：数据结构、算法设计、操作系统、计算机网络、Web开发技术</li>
        <li>专业排名前 5%，连续三年获得一等奖学金</li>
        <li>担任计算机协会技术部部长，组织多次技术分享会</li>
        <li>参与开源项目贡献，获得 GitHub Campus Expert 认证</li>
      </ul>`,
    },
  ],
  skillContent: `<div class="skill-content">
  <ul>
    <li>前端框架：熟悉 React、Vue.js，熟悉 Next.js、Nuxt.js 等 SSR 框架</li>
    <li>开发语言：TypeScript、JavaScript(ES6+)、HTML5、CSS3</li>
    <li>UI/样式：熟悉 TailwindCSS、Sass/Less、CSS Module、Styled-components</li>
    <li>状态管理：Redux、Vuex、Zustand、Jotai、React Query</li>
    <li>工程化工具：Webpack、Vite、Rollup、Babel、ESLint</li>
    <li>测试工具：Jest、React Testing Library、Cypress</li>
    <li>性能优化：熟悉浏览器渲染原理、性能指标监控、代码分割、懒加载等优化技术</li>
    <li>版本控制：Git、SVN</li>
    <li>技术管理：具备团队管理经验，主导过多个大型项目的技术选型和架构设计</li>
  </ul>
</div>`,
  selfEvaluationContent: "",
  experience: [
    {
      id: "1",
      company: "字节跳动",
      position: "高级前端工程师",
      date: "2021.07 - 2024.12",
      visible: true,
      details: `<ul>
      <li>负责抖音创作者平台的开发与维护，主导多个核心功能的技术方案设计</li>
      <li>优化项目工程化配置，将构建时间从 8 分钟优化至 2 分钟，提升团队开发效率</li>
      <li>设计并实现组件库，提升代码复用率达 70%，显著减少开发时间</li>
      <li>主导性能优化项目，使平台首屏加载时间减少 50%，接入 APM 监控系统</li>
      <li>指导初级工程师，组织技术分享会，提升团队整体技术水平</li>
    </ul>`,
    },
  ],
  draggingProjectId: null,
  projects: [
    {
      id: "p1",
      name: "抖音创作者中台",
      role: "前端负责人",
      date: "2022.06 - 2023.12",
      description: `<ul>
        <li>基于 React 开发的创作者数据分析和内容管理平台，服务百万级创作者群体</li>
        <li>包含数据分析、内容管理、收益管理等多个子系统</li>
        <li>使用 Redux 进行状态管理，实现复杂数据流的高效处理</li>
        <li>采用 Ant Design 组件库，确保界面设计的一致性和用户体验</li>
        <li>实施代码分割和懒加载策略，优化大规模应用的加载性能</li>
      </ul>`,
      visible: true,
    },
    {
      id: "p2",
      name: "微信小程序开发者工具",
      role: "核心开发者",
      date: "2020.03 - 2021.06",
      description: `<ul>
        <li>为开发者提供小程序开发、调试和发布的一站式解决方案</li>
        <li>基于 Electron 构建的跨平台桌面应用</li>
        <li>支持多平台开发，包括 Windows、macOS 和 Linux</li>
        <li>提供实时的错误日志和性能分析工具</li>
        <li>集成第三方插件和 SDK，支持开发者自定义功能</li>
      </ul>`,
      visible: true,
    },
    {
      id: "p3",
      name: "前端监控平台",
      role: "技术负责人",
      date: "2021.09 - 2022.03",
      description: `<ul>
        <li>一个完整的前端监控解决方案，包含错误监控、性能监控、用户行为分析等功能。</li>
        <li>基于 Vue 和 Element UI 构建，提供实时的监控数据和可视化分析工具。</li>
        <li>支持多种监控指标，包括错误日志、性能指标、用户行为分析等。</li>
        <li>提供详细的错误日志和性能分析工具，帮助开发者定位和优化问题。</li>
        <li>集成第三方插件和 SDK，支持开发者自定义功能。</li>
      </ul>`,
      visible: true,
    },
  ],
  menuSections: [
    { id: "basic", title: "基本信息", icon: "👤", enabled: true, order: 0 },
    { id: "skills", title: "专业技能", icon: "⚡", enabled: true, order: 1 },
    {
      id: "experience",
      title: "工作经验",
      icon: "💼",
      enabled: true,
      order: 2,
    },

    {
      id: "projects",
      title: "项目经历",
      icon: "🚀",
      enabled: true,
      order: 3,
    },
    {
      id: "education",
      title: "教育经历",
      icon: "🎓",
      enabled: true,
      order: 4,
    },
  ],
  certificates: [],
  customData: {},
  activeSection: "basic",
  globalSettings: initialGlobalSettings,
};

export const initialResumeStateEn = {
  title: "New Resume",
  basic: {
    name: "Dva",
    title: "Senior Frontend Engineer",
    employementStatus: "Available",
    email: "john.smith@123.com",
    phone: "555-123-4567",
    location: "San Francisco, CA",
    birthDate: "",
    fieldOrder: DEFAULT_FIELD_ORDER,
    icons: {
      email: "Mail",
      phone: "Phone",
      birthDate: "CalendarRange",
      employementStatus: "Briefcase",
      location: "MapPin",
    },
    photoConfig: DEFAULT_CONFIG,
    customFields: [],
    photo: "/avatar.png",
    githubKey: "",
    githubUseName: "",
    githubContributionsVisible: false,
  },
  education: [
    {
      id: "1",
      school: "Stanford University",
      major: "Computer Science",
      degree: "",
      startDate: "2013-09",
      endDate: "2017-06",
      visible: true,
      gpa: "",
      description: `<ul>
        <li>Core courses: Data Structures, Algorithms, Operating Systems, Computer Networks, Web Development</li>
        <li>Top 5% of class, received Dean's List honors for three consecutive years</li>
        <li>Served as Technical Director of the Computer Science Association, organized multiple tech workshops</li>
        <li>Contributed to open-source projects, earned GitHub Campus Expert certification</li>
      </ul>`,
    },
  ],
  skillContent: `<div class="skill-content">
  <ul>
    <li>Frontend Frameworks: React, Vue.js, Next.js, Nuxt.js and other SSR frameworks</li>
    <li>Languages: TypeScript, JavaScript(ES6+), HTML5, CSS3</li>
    <li>UI/Styling: TailwindCSS, Sass/Less, CSS Modules, Styled-components</li>
    <li>State Management: Redux, Vuex, Zustand, Jotai, React Query</li>
    <li>Build Tools: Webpack, Vite, Rollup, Babel, ESLint</li>
    <li>Testing: Jest, React Testing Library, Cypress</li>
    <li>Performance: Browser rendering principles, performance metrics monitoring, code splitting, lazy loading</li>
    <li>Version Control: Git, SVN</li>
    <li>Technical Leadership: Team management experience, led technology selection and architecture design for large projects</li>
  </ul>
</div>`,
  selfEvaluationContent: "",
  experience: [
    {
      id: "1",
      company: "ByteDance",
      position: "Senior Frontend Engineer",
      date: "2021.07 - 2024.12",
      visible: true,
      details: `<ul>
      <li>Responsible for development and maintenance of TikTok Creator Platform, leading technical solution design for core features</li>
      <li>Optimized build configuration, reducing build time from 8 minutes to 2 minutes, improving team development efficiency</li>
      <li>Designed and implemented component library, increasing code reuse by 70%, significantly reducing development time</li>
      <li>Led performance optimization project, reducing platform first-screen loading time by 50%, integrated APM monitoring system</li>
      <li>Mentored junior engineers, organized technical sharing sessions to improve overall team technical capabilities</li>
    </ul>`,
    },
  ],
  draggingProjectId: null,
  projects: [
    {
      id: "p1",
      name: "TikTok Creator Platform",
      role: "Frontend Lead",
      date: "2022.06 - 2023.12",
      description: `<ul>
        <li>React-based analytics and content management platform serving millions of creators</li>
        <li>Includes data analytics, content management, and revenue management subsystems</li>
        <li>Implemented Redux for state management, enabling efficient handling of complex data flows</li>
        <li>Used Ant Design component library to ensure UI consistency and user experience</li>
        <li>Implemented code splitting and lazy loading strategies to optimize loading performance</li>
      </ul>`,
      visible: true,
    },
    {
      id: "p2",
      name: "WeChat Mini Program Developer Tools",
      role: "Core Developer",
      date: "2020.03 - 2021.06",
      description: `<ul>
        <li>All-in-one solution for mini program development, debugging, and publishing</li>
        <li>Cross-platform desktop application built with Electron</li>
        <li>Supports multiple platforms including Windows, macOS, and Linux</li>
        <li>Provides real-time error logging and performance analysis tools</li>
        <li>Integrates third-party plugins and SDKs for custom functionality</li>
      </ul>`,
      visible: true,
    },
    {
      id: "p3",
      name: "Frontend Monitoring Platform",
      role: "Technical Lead",
      date: "2021.09 - 2022.05",
      description: `<ul>
        <li>Complete frontend monitoring solution including error tracking, performance monitoring, and user behavior analysis</li>
        <li>Built with Vue and Element UI, providing real-time monitoring data and visualization tools</li>
        <li>Supports various monitoring metrics including error logs, performance indicators, and user behavior analysis</li>
        <li>Provides detailed error logs and performance analysis tools to help developers identify and optimize issues</li>
        <li>Integrates third-party plugins and SDKs for custom functionality</li>
      </ul>`,
      visible: true,
    },
  ],
  menuSections: [
    {
      id: "basic",
      title: "Profile",
      icon: "👤",
      enabled: true,
      order: 0,
    },
    {
      id: "skills",
      title: "Skills",
      icon: "⚡",
      enabled: true,
      order: 1,
    },
    {
      id: "experience",
      title: "Experience",
      icon: "💼",
      enabled: true,
      order: 2,
    },
    {
      id: "projects",
      title: "Projects",
      icon: "🚀",
      enabled: true,
      order: 3,
    },
    {
      id: "education",
      title: "Education",
      icon: "🎓",
      enabled: true,
      order: 4,
    },
  ],
  certificates: [],
  customData: {},
  activeSection: "basic",
  globalSettings: initialGlobalSettings,
};

export const blankResumeState = {
  ...initialResumeState,
  title: "新建简历",
  basic: {
    ...initialResumeState.basic,
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    birthDate: "",
    employementStatus: "",
    photo: "",
    customFields: [],
  },
  education: [],
  skillContent: "",
  selfEvaluationContent: "",
  experience: [],
  projects: [],
  certificates: [],
  menuSections: [initialResumeState.menuSections[0]],
};

export const blankResumeStateEn = {
  ...initialResumeStateEn,
  title: "New Resume",
  basic: {
    ...initialResumeStateEn.basic,
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    birthDate: "",
    employementStatus: "",
    photo: "",
    customFields: [],
  },
  education: [],
  skillContent: "",
  selfEvaluationContent: "",
  experience: [],
  projects: [],
  certificates: [],
  menuSections: [initialResumeStateEn.menuSections[0]],
};

export const initialResumeStateFr = {
  title: "Nouveau CV",
  basic: {
    name: "Camille Dubois",
    title: "Ingenieure Frontend Senior",
    employementStatus: "Disponible",
    email: "camille.dubois@exemple.fr",
    phone: "06 12 34 56 78",
    location: "Paris, France",
    birthDate: "",
    fieldOrder: DEFAULT_FIELD_ORDER,
    icons: {
      email: "Mail",
      phone: "Phone",
      birthDate: "CalendarRange",
      employementStatus: "Briefcase",
      location: "MapPin",
    },
    photoConfig: DEFAULT_CONFIG,
    customFields: [
      {
        id: "personal",
        label: "Site personnel",
        value: "https://camille-dubois.fr",
        icon: "Globe",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/camilledubois",
        icon: "Linkedin",
      },
    ],
    photo: "/avatar.png",
    githubKey: "",
    githubUseName: "",
    githubContributionsVisible: false,
  },
  education: [
    {
      id: "1",
      school: "Ecole Polytechnique",
      major: "Informatique et Genie Logiciel",
      degree: "Master",
      startDate: "2014-09",
      endDate: "2017-06",
      visible: true,
      gpa: "",
      description: `<ul>
        <li>Specialisation en developpement web et architectures distribuees</li>
        <li>Mention Tres Bien, classee dans le top 5% de la promotion</li>
        <li>Vice-presidente de l'association informatique, organisation de hackathons</li>
        <li>Stage de fin d'etudes chez Criteo sur l'optimisation de performances frontend</li>
      </ul>`,
    },
  ],
  skillContent: `<div class="skill-content">
  <ul>
    <li>Frameworks Frontend : React, Vue.js, Next.js, Nuxt.js et frameworks SSR</li>
    <li>Langages : TypeScript, JavaScript (ES6+), HTML5, CSS3</li>
    <li>UI/Style : TailwindCSS, Sass/Less, CSS Modules, Styled-components</li>
    <li>Gestion d'etat : Redux, Zustand, Jotai, React Query, TanStack Query</li>
    <li>Outils de build : Webpack, Vite, Rollup, Turbopack, ESLint, Prettier</li>
    <li>Tests : Jest, Vitest, React Testing Library, Playwright, Cypress</li>
    <li>Performance : Optimisation Web Vitals, code splitting, lazy loading, SSR/ISR</li>
    <li>DevOps : Git, GitHub Actions, Docker, Vercel, AWS S3/CloudFront</li>
    <li>Leadership : Encadrement d'equipes, mentorat, conduite de revues techniques</li>
  </ul>
</div>`,
  selfEvaluationContent: "",
  experience: [
    {
      id: "1",
      company: "Doctolib",
      position: "Ingenieure Frontend Senior",
      date: "2021.07 - Present",
      visible: true,
      details: `<ul>
        <li>Responsable du developpement de la plateforme patient utilisee par plus de 70 millions d'utilisateurs en Europe</li>
        <li>Mise en place d'une architecture micro-frontends avec Module Federation, reduction du temps de build de 60%</li>
        <li>Conception d'une bibliotheque de composants partagee, gain de productivite de 40% pour 8 equipes produit</li>
        <li>Pilotage de l'optimisation Web Vitals : LCP passe de 3.2s a 1.4s, +18% de conversion</li>
        <li>Mentorat de 5 ingenieurs juniors et animation de sessions techniques hebdomadaires</li>
      </ul>`,
    },
    {
      id: "2",
      company: "BlaBlaCar",
      position: "Ingenieure Frontend",
      date: "2018.03 - 2021.06",
      visible: true,
      details: `<ul>
        <li>Refonte complete du parcours de reservation avec React et Redux, +25% de taux de conversion</li>
        <li>Internationalisation de l'application sur 22 pays avec gestion des fuseaux horaires et devises</li>
        <li>Mise en place de tests E2E avec Cypress, couverture passee de 30% a 85%</li>
        <li>Collaboration etroite avec les equipes design et produit en methodologie agile (Scrum)</li>
      </ul>`,
    },
  ],
  draggingProjectId: null,
  projects: [
    {
      id: "p1",
      name: "Plateforme Patient Doctolib",
      role: "Lead Frontend",
      date: "2022.06 - 2023.12",
      description: `<ul>
        <li>Application React servant plus de 70 millions de patients en Europe</li>
        <li>Architecture micro-frontends avec Module Federation et monorepo Nx</li>
        <li>Gestion d'etat complexe avec Redux Toolkit et React Query pour la synchronisation serveur</li>
        <li>Design system propre base sur Radix UI et TailwindCSS, plus de 80 composants</li>
        <li>Optimisation des Core Web Vitals : LCP < 1.5s, CLS < 0.05 sur mobile</li>
      </ul>`,
      visible: true,
    },
    {
      id: "p2",
      name: "Application Mobile BlaBlaCar",
      role: "Developpeuse principale",
      date: "2020.03 - 2021.06",
      description: `<ul>
        <li>Application React Native pour iOS et Android, plus de 10 millions de telechargements</li>
        <li>Integration native avec les modules de paiement (Stripe, Apple Pay, Google Pay)</li>
        <li>Geolocalisation en temps reel avec cartographie Mapbox</li>
        <li>Mise en place de l'offline-first avec synchronisation differee</li>
      </ul>`,
      visible: true,
    },
    {
      id: "p3",
      name: "Design System Open Source",
      role: "Contributrice principale",
      date: "2019.09 - 2020.03",
      description: `<ul>
        <li>Bibliotheque de composants React open source utilisee par plus de 500 entreprises</li>
        <li>Documentation interactive avec Storybook et tests visuels avec Chromatic</li>
        <li>Publication automatique sur npm via GitHub Actions et Changesets</li>
        <li>Plus de 2 000 etoiles sur GitHub et 50 contributeurs actifs</li>
      </ul>`,
      visible: true,
    },
  ],
  menuSections: [
    { id: "basic", title: "Informations", icon: "👤", enabled: true, order: 0 },
    { id: "skills", title: "Competences", icon: "⚡", enabled: true, order: 1 },
    {
      id: "experience",
      title: "Experience professionnelle",
      icon: "💼",
      enabled: true,
      order: 2,
    },
    {
      id: "projects",
      title: "Projets",
      icon: "🚀",
      enabled: true,
      order: 3,
    },
    {
      id: "education",
      title: "Formation",
      icon: "🎓",
      enabled: true,
      order: 4,
    },
  ],
  certificates: [],
  customData: {},
  activeSection: "basic",
  globalSettings: initialGlobalSettings,
};

export const blankResumeStateFr = {
  ...initialResumeStateFr,
  title: "Nouveau CV",
  basic: {
    ...initialResumeStateFr.basic,
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    birthDate: "",
    employementStatus: "",
    photo: "",
    customFields: [],
  },
  education: [],
  skillContent: "",
  selfEvaluationContent: "",
  experience: [],
  projects: [],
  certificates: [],
  menuSections: [initialResumeStateFr.menuSections[0]],
};
