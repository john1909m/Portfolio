export const SOFTWARE_PROJECTS = [
  {
    id: 'storely',
    number: '01',
    title: 'Storely',
    role: 'Full Stack',
    roleTag: 'fullstack',
    subtitle: 'Multi-tenant SaaS E-commerce Platform',

    // The story behind the product
    projectFor:
      'Small businesses and Instagram sellers who want to sell online without building and maintaining their own e-commerce infrastructure.',
    problem:
      'Many small sellers rely on social media to manage products and orders. Moving to a standalone online store can add development costs, technical overhead, and operational complexity.',
    solution:
      'Storely provides a multi-tenant SaaS platform where each merchant can manage an online store through a shared platform, with store-scoped data and role-based access.',
    description:
      'I built Storely as a SaaS product for small businesses and social media sellers. It brings store setup, product and order management, access control, and payment workflows into one platform, without requiring each merchant to build a store from scratch.',
    approach:
      'Designed the platform around multiple stores sharing one application while keeping merchant data and permissions scoped to the relevant store. Implemented the backend APIs, authentication and authorization, and the workflows needed to operate each store.',
    outcome:
      'The platform onboarded 35+ stores. The project gave me hands-on experience building a multi-tenant product and handling the backend concerns that come with real merchant workflows.',

    metrics: [
      { label: 'Stores onboarded', value: '35+' },
      { label: 'REST endpoints', value: '90+' },
      { label: 'Architecture', value: 'Multi-tenant SaaS' },
      { label: 'Payments', value: '3 methods' },
    ],
    features: [
      {
        title: 'Multi-tenant store management',
        description:
          'Multiple merchants operate their own stores through one platform. Store-related operations are scoped so each merchant works with their own business data.',
        images: [],
      },
      {
        title: 'Role-based access control',
        description:
          'JWT-based authentication and role-aware authorization separate platform and store responsibilities, allowing access to be controlled according to the user role.',
        images: [
          'src/assets/projects/storely/roles-1.jpg',
          'src/assets/projects/storely/roles-2.jpg',
        ],
      },
      {
        title: 'Product and order workflows',
        description:
          'Store owners can manage their catalog and follow the order workflow from their store management experience.',
        images: [],
      },
      {
        title: 'Payment integration',
        description:
          'Integrated three payment methods and connected payment handling to the store checkout workflow.',
        images: [],
      },
    ],
    image: '/images/storely.png',
    cover: '/images/storely.png',
    gallery: ['src/assets/projects/storely/extra-1.jpg'],
    github: 'https://github.com/john1909m/Storely.git',
    liveDemo: 'https://storely-eg.com',
    accent: 'burgundy',
    abstract:
      'A multi-tenant SaaS e-commerce platform built for small businesses and social media sellers. Storely brings independent online stores, merchant workflows, role-based access, and payment methods into one product.',
    links: {
      live: 'https://storely-eg.com',
      github: 'https://github.com/john1909m/Storely.git',
    },
  },

  {
    id: 'AI Powered traveling agency',
    number: '02',
    title: 'AI Powered Hotel & Bus Booking System',
    role: 'Backend',
    roleTag: 'backend',
    subtitle: 'Connected Travel Booking & AI Assistance',

    projectFor:
      'Travelers who need to coordinate accommodation and transportation as part of one trip, plus administrators managing hotels, rooms, trips, and bookings.',
    problem:
      'Booking a hotel and arranging transportation are often separate tasks. The project focuses on connecting hotel stay dates with compatible bus trips and keeping the related booking operations consistent.',
    solution:
      'Built a connected booking workflow where a customer can book a hotel and then find bus trips that fit the hotel booking dates. The backend also supports a unified checkout and an AI booking agent that can use application services to answer travel-related requests.',
    description:
      'A full-stack travel booking platform that connects hotel reservations with compatible bus trips. Its backend handles booking workflows, payment operations, booking consistency, and an AI agent connected to real application services.',
    approach:
      'Focused on backend business rules and transactional safety: validating booking operations, preventing conflicting reservations, enforcing ownership and role checks, and exposing read-only application tools to the AI agent instead of letting it access the database directly.',
    outcome:
      'Implemented the unified booking and checkout flow, payment flow, double-booking prevention, and AI agent actions. Integration testing and monitoring were still being developed, so they are not presented as completed features.',
    metrics: [
      { label: 'Booking flow', value: 'Hotel + Bus' },
      { label: 'Checkout', value: 'Unified' },
      { label: 'Booking integrity', value: 'Double-booking prevention' },
      { label: 'AI integration', value: 'Gemini AI Agent' },
    ],
    features: [
      {
        title: 'Connected hotel and bus booking',
        description:
          'After selecting a hotel and stay dates, customers can explore bus trips compatible with the dates of their hotel reservation.',
        images: [],
      },
      {
        title: 'Unified booking and checkout',
        description:
          'Hotel and bus reservations are brought into a connected customer booking flow, reducing the need to treat each part of the trip as an unrelated process.',
        images: [],
      },
      {
        title: 'Double-booking prevention',
        description:
          'Backend booking rules protect reservation operations against conflicting bookings, including concurrency-sensitive seat and availability updates.',
        images: [],
      },
      {
        title: 'Payment workflow',
        description:
          'Implemented the payment flow as part of the booking experience, connecting payment handling with reservation state.',
        images: [],
      },
      {
        title: 'AI booking agent',
        description:
          'Integrated a Gemini-powered agent with application-level tools for retrieving travel information and performing supported booking-related actions. The tools use existing services rather than direct database access.',
        images: [],
      },
      {
        title: 'Authentication and authorization',
        description:
          'Secured application endpoints with JWT-based authentication and role-based access for customer and admin workflows.',
        images: [],
      },
    ],
    image: '/images/travelEase.png',
    cover: '/images/travelEase.png',
    gallery: [],
    github: 'https://github.com/john1909m/Hotel-Bus-Booking-System.git',
    accent: 'violet',
    abstract:
      'A travel booking platform connecting hotel stays with compatible bus trips. The backend focuses on reliable booking transactions, payment workflows, double-booking prevention, and an AI agent integrated with real application services.',
    links: {
      live: '',
      github: 'https://github.com/john1909m/Hotel-Bus-Booking-System.git',
    },
  },

  {
    id: 'alamia-erp',
    number: '03',
    title: 'Alamia Print ERP',
    role: 'Full Stack',
    roleTag: 'fullstack',
    subtitle: 'ERP for Commercial Printing Operations',

    projectFor:
      'A commercial printing business that needs to organize its internal operations, from suppliers and purchasing to materials, inventory, and production orders.',
    problem:
      'Printing operations involve connected business activities and materials. Managing these workflows across disconnected records makes it harder to follow purchases, stock, and production activity in one place.',
    solution:
      'Developed a business-focused ERP system that brings the company’s core operational workflows into one application, including companies, suppliers, materials, inventory, purchases, and production orders.',
    description:
      'A full-stack ERP system developed around the workflows of a real commercial printing business. It centralizes operational data and connects purchasing, inventory, materials, suppliers, and production orders.',
    approach:
      'Structured the application around business modules and clear backend layers using Spring Boot, React, and Oracle Database. The system is designed around the company workflow rather than generic dashboard screens.',
    outcome:
      'Built an end-to-end ERP foundation for a live business context, translating real operational requirements into connected software modules.',
    metrics: [
      { label: 'Business context', value: 'Commercial printing' },
      { label: 'Core modules', value: '7' },
      { label: 'Backend', value: 'Spring Boot' },
      { label: 'Database', value: 'Oracle DB' },
    ],
    features: [
      {
        title: 'Dashboard',
        description:
          'Provides an overview of the business system and its operational areas.',
        images: [],
      },
      {
        title: 'Companies and suppliers',
        description:
          'Organizes company and supplier records used throughout purchasing and business operations.',
        images: [],
      },
      {
        title: 'Materials and inventory',
        description:
          'Tracks printing materials and inventory records so the business can manage the resources used in its operations.',
        images: [],
      },
      {
        title: 'Purchases',
        description:
          'Manages purchasing workflows and connects supplier activity with the materials entering the business.',
        images: [],
      },
      {
        title: 'Production orders',
        description:
          'Provides a dedicated workflow for production orders, connecting operational requests with the business resources they require.',
        images: [],
      },
    ],
    image: '/images/erp.png',
    cover: '/images/erp.png',
    gallery: [],
    github: 'https://github.com/john1909m/Alamia_Print_ERP_System.git',
    accent: 'tomato',
    abstract:
      'An ERP system built for a commercial printing business, connecting seven core areas including companies, suppliers, materials, inventory, purchases, and production orders.',
    links: {
      live: '',
      github: 'https://github.com/john1909m/Alamia_Print_ERP_System.git',
    },
  },

  {
    id: 'clinic-system',
    number: '04',
    title: 'Clinic Management System',
    role: 'Full Stack',
    roleTag: 'fullstack',
    subtitle: 'Clinic & Patient Workflow Management',

    projectFor:
      'Clinics that need a structured way to manage patient information, doctors, appointments, and medical records.',
    problem:
      'Clinic workflows depend on keeping patient details, doctor information, appointments, and medical records organized and accessible.',
    solution:
      'Built a clinic management application that brings patient registration, doctor management, appointment scheduling, and medical record tracking into one system.',
    description:
      'A full-stack clinic management application focused on organizing everyday healthcare workflows, from patient information and doctor management to appointments and medical records.',
    approach:
      'Designed the application around the main clinic entities and the workflows connecting patients, doctors, appointments, and records.',
    outcome:
      'Delivered a working full-stack application with a deployed frontend demo.',
    metrics: [
      { label: 'Domain', value: 'Healthcare' },
      { label: 'Patient workflow', value: 'Registration & records' },
      { label: 'Scheduling', value: 'Doctor appointments' },
      { label: 'Delivery', value: 'Live demo' },
    ],
    features: [
      {
        title: 'Patient management',
        description:
          'Organizes patient information and provides a central place to manage patient records.',
        images: [],
      },
      {
        title: 'Doctor management',
        description:
          'Maintains doctor information as part of the clinic’s management workflow.',
        images: [],
      },
      {
        title: 'Appointment scheduling',
        description:
          'Supports the process of arranging and managing doctor appointments.',
        images: [],
      },
      {
        title: 'Medical records',
        description:
          'Keeps medical record information organized and associated with the patient workflow.',
        images: [],
      },
    ],
    image: '/images/Screenshot 2026-06-05 133427.png',
    cover: '/images/Screenshot 2026-06-05 133427.png',
    gallery: [],
    github: 'https://github.com/john1909m/Project_Clinic_System.git',
    liveDemo: 'https://healthcare-kappa-umber.vercel.app',
    accent: 'mint',
    abstract:
      'A clinic management application covering patient registration, doctor management, appointment scheduling, and medical record organization.',
    links: {
      live: 'https://healthcare-kappa-umber.vercel.app',
      github: 'https://github.com/john1909m/Project_Clinic_System.git',
    },
  },

  {
    id: 'smart-city',
    number: '05',
    title: 'Smart City Monitoring Dashboard',
    role: 'Backend',
    roleTag: 'backend',
    subtitle: 'City Sensor & Telemetry Monitoring',

    projectFor:
      'Smart-city operators who need a centralized view of connected devices and the sensor data they report.',
    problem:
      'Data coming from distributed city sensors is difficult to monitor when device readings and status information are not presented in one place.',
    solution:
      'Developed a monitoring dashboard concept for centralizing sensor data, device status, alerts, and metric visualizations.',
    description:
      'A smart-city monitoring project focused on presenting telemetry from connected sensors and giving operators a centralized view of device and metric information.',
    approach:
      'Organized the project around sensor telemetry, device monitoring, alert information, and dashboard visualizations.',
    outcome:
      'Created a centralized monitoring experience for exploring city sensor information. Specific scale and real-time infrastructure metrics are not claimed here.',
    metrics: [
      { label: 'Domain', value: 'Smart city / IoT' },
      { label: 'Data source', value: 'Connected sensors' },
      { label: 'Monitoring', value: 'Device status' },
      { label: 'Interface', value: 'Metrics dashboard' },
    ],
    features: [
      {
        title: 'Sensor data monitoring',
        description:
          'Presents readings reported by connected city sensors in a centralized monitoring experience.',
        images: [],
      },
      {
        title: 'Device status',
        description:
          'Provides a view of connected device information to help operators follow the state of monitored devices.',
        images: [],
      },
      {
        title: 'Alerts and metrics',
        description:
          'Brings alert information and metric visualizations together to make monitoring data easier to inspect.',
        images: [],
      },
    ],
    image: '/images/smart-city.png',
    cover: '/images/smart-city.png',
    gallery: [],
    github: 'https://github.com/john1909m/Smart-City.git',
    accent: 'violet',
    abstract:
      'A smart-city monitoring dashboard concept for centralizing connected-sensor telemetry, device status, alerts, and metric visualizations.',
    links: {
      live: '',
      github: 'https://github.com/john1909m/Smart-City.git',
    },
  },

  {
    id: 'Essence Landing Page',
    number: '06',
    title: 'Essence E-commerce',
    role: 'Frontend',
    roleTag: 'frontend',
    subtitle: 'Responsive E-commerce Storefront',

    projectFor:
      'Online shoppers who need a clear and accessible way to explore products and browse an e-commerce storefront.',
    problem:
      'An online store needs more than product images: visitors need a clear layout and straightforward ways to discover and browse products.',
    solution:
      'Built a responsive e-commerce frontend focused on product presentation, category browsing, and a straightforward shopping interface.',
    description:
      'A frontend e-commerce experience designed around product discovery and browsing, with a responsive interface for exploring an online catalog.',
    approach:
      'Focused on the customer-facing interface, organizing the storefront into reusable UI sections and responsive layouts.',
    outcome:
      'Delivered a deployed storefront demo that demonstrates the visual and browsing experience.',
    metrics: [
      { label: 'Project type', value: 'E-commerce UI' },
      { label: 'Focus', value: 'Product discovery' },
      { label: 'Interface', value: 'Responsive design' },
      { label: 'Delivery', value: 'Live demo' },
    ],
    features: [
      {
        title: 'Product presentation',
        description:
          'Presents products through a structured storefront layout designed to make browsing clear.',
        images: [],
      },
      {
        title: 'Category browsing',
        description:
          'Organizes the catalog so visitors can explore products by category.',
        images: [],
      },
      {
        title: 'Responsive storefront',
        description:
          'Adapts the customer-facing interface to different screen sizes.',
        images: [],
      },
    ],
    image: '/images/essence.png',
    cover: '/images/essence.png',
    gallery: [],
    github: 'https://github.com/john1909m/Essence.git',
    liveDemo: 'https://essence-xi-eight.vercel.app',
    accent: 'marigold',
    abstract:
      'A responsive e-commerce storefront focused on product presentation, category browsing, and a clear customer-facing shopping experience.',
    links: {
      live: 'https://essence-xi-eight.vercel.app',
      github: 'https://github.com/john1909m/Essence.git',
    },
  },

  {
    id: 'Kasper Landing Page',
    number: '07',
    title: 'Kasper Landing Page',
    role: 'Frontend',
    roleTag: 'frontend',
    subtitle: 'Creative Agency Landing Page',

    projectFor:
      'A creative agency that needs a public-facing website to introduce its services, showcase work, and help visitors find contact information.',
    problem:
      'An agency website needs to communicate its identity and services while presenting portfolio content in a clear, navigable structure.',
    solution:
      'Implemented a responsive landing page with dedicated sections for services, portfolio work, team information, and contact details.',
    description:
      'A responsive creative-agency landing page built to present an agency’s services and work through a structured visual layout.',
    approach:
      'Translated the page design into a responsive frontend, focusing on layout consistency, navigation, and clear content sections.',
    outcome:
      'Delivered a live landing page that demonstrates responsive layout implementation and frontend fundamentals.',
    metrics: [
      { label: 'Project type', value: 'Landing page' },
      { label: 'Main focus', value: 'Responsive UI' },
      { label: 'Content', value: 'Services & portfolio' },
      { label: 'Delivery', value: 'Live demo' },
    ],
    features: [
      {
        title: 'Services section',
        description:
          'Introduces the agency’s services in a dedicated, easy-to-scan section.',
        images: [],
      },
      {
        title: 'Portfolio showcase',
        description:
          'Presents selected work in a visual portfolio section.',
        images: [],
      },
      {
        title: 'Team and contact sections',
        description:
          'Gives visitors context about the people behind the agency and a clear path to get in touch.',
        images: [],
      },
      {
        title: 'Responsive layout',
        description:
          'Adapts the page structure for different viewport sizes.',
        images: [],
      },
    ],
    image: '/images/Screenshot 2025-04-14 142838.png',
    cover: '/images/Screenshot 2025-04-14 142838.png',
    gallery: [],
    github: 'https://github.com/john1909m/Kasper.git',
    liveDemo: 'https://kasper-zeta-bice.vercel.app',
    accent: 'pink',
    abstract:
      'A responsive creative-agency website presenting services, portfolio work, team information, and contact sections.',
    links: {
      live: 'https://kasper-zeta-bice.vercel.app',
      github: 'https://github.com/john1909m/Kasper.git',
    },
  },

  {
    id: 'el akeel',
    number: '08',
    title: 'El Akeel Restaurant',
    role: 'Frontend',
    roleTag: 'frontend',
    subtitle: 'Restaurant Website & Digital Presence',

    projectFor:
      'A restaurant that needs an online presence to introduce its brand and present its food offering to potential customers.',
    problem:
      'Customers need a simple way to discover a restaurant and explore its offering before deciding to visit or order.',
    solution:
      'Built a restaurant website that presents the brand and food offering through a responsive, customer-facing interface.',
    description:
      'A restaurant website focused on presenting the brand and its food offering through a clear, responsive browsing experience.',
    approach:
      'Focused on the visual presentation of the restaurant and on making the website easy to browse across screen sizes.',
    outcome:
      'Delivered a live website demo for the restaurant’s digital presence.',
    metrics: [
      { label: 'Project type', value: 'Restaurant website' },
      { label: 'Focus', value: 'Brand presentation' },
      { label: 'Interface', value: 'Responsive UI' },
      { label: 'Delivery', value: 'Live demo' },
    ],
    features: [
      {
        title: 'Restaurant presentation',
        description:
          'Introduces the restaurant through a dedicated branded website experience.',
        images: [],
      },
      {
        title: 'Food showcase',
        description:
          'Presents the restaurant’s food offering in a visual format.',
        images: [],
      },
      {
        title: 'Responsive browsing',
        description:
          'Keeps the website accessible and usable across different screen sizes.',
        images: [],
      },
    ],
    image: '/images/Screenshot 2025-04-14 143044.png',
    cover: '/images/Screenshot 2025-04-14 143044.png',
    gallery: [],
    github: 'https://github.com/john1909m/el-akeel.git',
    liveDemo: 'https://el-akeel.vercel.app',
    accent: 'lime',
    abstract:
      'A responsive restaurant website presenting the brand and food offering in a straightforward digital experience.',
    links: {
      live: 'https://el-akeel.vercel.app',
      github: 'https://github.com/john1909m/el-akeel.git',
    },
  },
];
export const GRAPHIC_PROJECTS = [
  {
    id: 'Smart Zone',
    number: '01',
    category: 'social media',
    categoryLabel: 'Social Media',
    title: 'Sale for an Academy',
    description: 'Social media design for an academy for students',
    image: '/images/graphic images/offer post.jpg',
    palette: {
      primary: '#FF4F2E',
      secondary: '#FFB400',
      badgeText: 'text-tomato',
      badgeBg: 'bg-tomato/15',
      colorBlock: 'bg-tomato',
      accentBlock: 'bg-marigold',
    },
    accent: 'tomato',
    cover: '/images/graphic images/offer post.jpg',
    abstract: 'Social media design for an academy for students',
    features: [],
    gallery: [],
    links: { live: '', github: '' },
    metrics: [],
    isPlaceholder: false,
  },
  {
    id: 'adidas-bannar-mockup',
    number: '02',
    category: 'printing',
    categoryLabel: 'Printing',
    title: 'Adidas brand banner mockup',
    description: 'Large-scale retail display banners and outdoor advertising collateral designed for commercial print specifications.',
    image: '/images/graphic images/adidas bannar mockup 2.webp',
    palette: {
      primary: '#FF4F2E',
      secondary: '#C8F169',
      badgeText: 'text-tomato',
      badgeBg: 'bg-tomato/15',
      colorBlock: 'bg-tomato',
      accentBlock: 'bg-lime',
    },
    accent: 'lime',
    cover: '/images/graphic images/adidas bannar mockup 2.webp',
    abstract: 'Large-scale retail display banners and outdoor advertising collateral designed for commercial print specifications.',
    features: [],
    gallery: [],
    links: { live: '', github: '' },
    metrics: [],
    isPlaceholder: false,
  },
  {
    id: 'max-muscle-poster',
    number: '03',
    category: 'social',
    categoryLabel: 'Social Media',
    title: 'Max Muscle nutrition campaign',
    description: 'High-impact social media creative layouts showcasing sports nutrition products with dynamic typography and focal contrast.',
    image: '/images/graphic images/max muscle.webp',
    palette: {
      primary: '#FF4F2E',
      secondary: '#FF8FB1',
      badgeText: 'text-pink',
      badgeBg: 'bg-pink/15',
      colorBlock: 'bg-pink',
      accentBlock: 'bg-tomato',
    },
    accent: 'pink',
    cover: '/images/graphic images/max muscle.webp',
    abstract: 'High-impact social media creative layouts showcasing sports nutrition products with dynamic typography and focal contrast.',
    features: [],
    gallery: [],
    links: { live: '', github: '' },
    metrics: [],
    isPlaceholder: false,
  },
  {
    id: 'fast-cooking-branding',
    number: '04',
    category: 'social',
    categoryLabel: 'Social Media',
    title: 'Fast Cooking social media series',
    description: 'Promotional culinary marketing campaign with focused product photography, appetite appeal, and platform-optimized aspect ratios.',
    image: '/images/graphic images/fast cooking.webp',
    palette: {
      primary: '#FF4F2E',
      secondary: '#FFB400',
      badgeText: 'text-marigold',
      badgeBg: 'bg-marigold/15',
      colorBlock: 'bg-marigold',
      accentBlock: 'bg-tomato',
    },
    accent: 'marigold',
    cover: '/images/graphic images/fast cooking.webp',
    abstract: 'Promotional culinary marketing campaign with focused product photography, appetite appeal, and platform-optimized aspect ratios.',
    features: [],
    gallery: [],
    links: { live: '', github: '' },
    metrics: [],
    isPlaceholder: false,
  },
  {
    id: 'headphone-wave-manipulation',
    number: '05',
    category: 'manipulation',
    categoryLabel: 'Manipulation',
    title: 'Audio wave sound manipulation',
    description: 'Surrealist audio visual concept combining acoustic wave forms with fluid simulations and multi-layer masking techniques.',
    image: '/images/graphic images/headphone wave.webp',
    palette: {
      primary: '#FF4F2E',
      secondary: '#7ED6A8',
      badgeText: 'text-mint',
      badgeBg: 'bg-mint/15',
      colorBlock: 'bg-mint',
      accentBlock: 'bg-tomato',
    },
    accent: 'mint',
    cover: '/images/graphic images/headphone wave.webp',
    abstract: 'Surrealist audio visual concept combining acoustic wave forms with fluid simulations and multi-layer masking techniques.',
    features: [],
    gallery: [],
    links: { live: '', github: '' },
    metrics: [],
    isPlaceholder: false,
  },
  {
    id: 'ramadan-manipulation',
    number: '06',
    category: 'manipulation',
    categoryLabel: 'Manipulation',
    title: 'Ramadan cultural composite',
    description: 'Complex visual composition blending heritage architecture, atmospheric lighting, and digital matte painting techniques.',
    image: '/images/graphic images/ramadan manipulation.webp',
    palette: {
      primary: '#FF4F2E',
      secondary: '#9B6BFF',
      badgeText: 'text-violet',
      badgeBg: 'bg-violet/15',
      colorBlock: 'bg-violet',
      accentBlock: 'bg-marigold',
    },
    accent: 'violet',
    cover: '/images/graphic images/ramadan manipulation.webp',
    abstract: 'Complex visual composition blending heritage architecture, atmospheric lighting, and digital matte painting techniques.',
    features: [],
    gallery: [],
    links: { live: '', github: '' },
    metrics: [],
    isPlaceholder: false,
  },
  {
    id: 'robot-manipulation',
    number: '07',
    category: 'manipulation',
    categoryLabel: 'Manipulation',
    title: 'Cybernetic composite manipulation',
    description: 'Sci-fi concept composite featuring intricate mechanical textures, customized surface reflections, and cinematic tone grading.',
    image: '/images/graphic images/robot manipulation.webp',
    palette: {
      primary: '#FF4F2E',
      secondary: '#7ED6A8',
      badgeText: 'text-mint',
      badgeBg: 'bg-mint/15',
      colorBlock: 'bg-mint',
      accentBlock: 'bg-tomato',
    },
    accent: 'mint',
    cover: '/images/graphic images/robot manipulation.webp',
    abstract: 'Sci-fi concept composite featuring intricate mechanical textures, customized surface reflections, and cinematic tone grading.',
    features: [],
    gallery: [],
    links: { live: '', github: '' },
    metrics: [],
    isPlaceholder: false,
  },
  {
    id: 'bag-advertising-mockup',
    number: '08',
    category: 'social media',
    categoryLabel: 'Social Media',
    title: 'Retail packaging bag mockup',
    description: 'Bespoke retail bag mockups with detailed die-cut contours, foil stamp placements, and material texture realism.',
    image: '/images/graphic images/bag advertising.webp',
    palette: {
      primary: '#FF4F2E',
      secondary: '#FFB400',
      badgeText: 'text-marigold',
      badgeBg: 'bg-marigold/15',
      colorBlock: 'bg-marigold',
      accentBlock: 'bg-tomato',
    },
    accent: 'marigold',
    cover: '/images/graphic images/bag advertising.webp',
    abstract: 'Bespoke retail bag mockups with detailed die-cut contours, foil stamp placements, and material texture realism.',
    features: [],
    gallery: [],
    links: { live: '', github: '' },
    metrics: [],
    isPlaceholder: false,
  },
  {
    id: 'team-zikry-branding',
    number: '09',
    category: 'social media',
    categoryLabel: 'Social Media',
    title: 'Team Zikry corporate collateral',
    description: 'Social media design for a team of Teachers for secondary school ',
    image: '/images/graphic images/team zikry.webp',
    palette: {
      primary: '#FF4F2E',
      secondary: '#C8F169',
      badgeText: 'text-lime',
      badgeBg: 'bg-lime/15',
      colorBlock: 'bg-lime',
      accentBlock: 'bg-tomato',
    },
    accent: 'lime',
    cover: '/images/graphic images/team zikry.webp',
    abstract: 'Social media design for a team of Teachers for secondary school ',
    features: [],
    gallery: [],
    links: { live: '', github: '' },
    metrics: [],
    isPlaceholder: false,
  },
];

export const EXPERIENCE_ITEMS = [
  {
    title: 'Full Stack Developer & Founder',
    institution: 'Storely',
    duration: 'Feb 2026 – June 2026',
    description: 'Built and architected a multi-tenant SaaS e-commerce platform powering 35+ active stores, with 90+ RESTful endpoints, multi-role access control, and 3 payment methods.',
  },
  {
    title: 'Freelance Full Stack Developer',
    institution: 'Alamia Print',
    duration: 'June 2026 – Sep 2026',
    description: 'Engineered a production full-stack ERP system for a live printing business, streamlining orders, inventory, and internal commercial print workflows.',
  },
  {
    title: 'Graphic Designer',
    institution: 'Alamia Print',
    duration: 'Sep 2023 – present',
    description: 'Designed print-ready marketing materials and commercial packaging with production-grade color accuracy and typography.',
  },
  {
    title: 'Graphic Design Instructor',
    institution: '3C School',
    duration: 'April 2026 – present',
    description: 'Delivering structured lessons focused on design principles, visual composition, and practical project execution.',
  },
  {
    title: 'Frontend Developer',
    institution: 'Orange Digital Center',
    duration: 'Internship',
    description: 'Leveraging AI agents (Cursor, Claude, etc.) to accelerate frontend development with a focus on rapid prototyping, component-based architecture, and maintaining a high-velocity workflow. Continuously integrating AI assistance to enhance productivity and code quality across personal and freelance projects.',
  },
  {
    title: 'IT Intern',
    institution: 'GUPCO',
    duration: 'Internship',
    description: 'Supported IT enterprise operations, internal workstation setup, hardware troubleshooting, and network administration.',
  },
  {
    title: 'Flutter Intern',
    institution: 'EraaSoft Academy',
    duration: 'Internship',
    description: 'Hands-on practical training in mobile application engineering, state management patterns, and REST API consumption.',
  },
];

export const EDUCATION_ITEMS = [
  {
    title: 'B.Sc. Computer Engineering',
    institution: 'Modern Academy, Maadi',
    duration: 'Expected 2028',
    description: 'Undergraduate engineering curriculum emphasizing software engineering, algorithms, computer architecture, and distributed systems.',
  },
];

export const CERTIFICATION_ITEMS = [
  {
    title: 'Back-End Development (Java, Spring Boot)',
    institution: 'EraaSoft Academy',
    duration: 'Professional Certification',
    description: 'In-depth certification covering Java, Spring Boot microservices and REST architectures, security protocols, and relational data management.',
  },
  {
    title: 'Front-End Development (React.js)',
    institution: 'MEC Academy',
    duration: 'Professional Certification',
    description: 'Hands-on certification in modern React.js patterns, component lifecycle, state management, and accessible UI engineering.',
  },
];
