export const SITE = {
  name: "Yu-Hsiang Lin",
  nameZh: "林郁翔",
  title: "Senior Embedded Systems Engineer",
  subtitle: "Platform Team Leader",
  tagline:
    "Over 15+ years of experience in embedded systems engineering, leading platform teams at DesaySV to deliver secure, reliable, and scalable embedded platforms for global automotive OEMs.",
  location: "New Taipei City, Taiwan",
  email: "gozli427@gmail.com",
  cvPath: "/files/yu_hsiang_lin_cv.pdf",
  status: "Open to new opportunities · Taipei, Taiwan",
  url: "https://yu-hsiang-lin.vercel.app",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Email",
    href: "mailto:gozli427@gmail.com",
    icon: "mail" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lin-yu-hsiang-0427/",
    icon: "linkedin" as const,
  },
  {
    label: "Medium",
    href: "https://medium.com/@gozli427",
    icon: "medium" as const,
  },
  {
    label: "Bold.pro",
    href: "https://bold.pro/my/lin-yuhsiang/694r",
    icon: "globe" as const,
  },
] as const;

export const ABOUT = {
  eyebrow: "INTRODUCTION",
  heading: "Build reliable systems, drive the operation of the modern world",
  paragraphs: [
    "I am a Senior Embedded Systems Engineer with over 15 years of experience working with Android, QNX, Yocto, Linux, and various embedded platforms. My work has primarily focused on hardware-software integration, board bring-up, driver development, manufacturing test solutions, and platform security.",
    "From embedded system bring-up to million-level production, I focus on connecting firmware to hardware to ensure the best performance, reliability, and security of products. During my time at Garmin, I led the Toyota IVI security key framework; at DesaySV, I conducted Google Widevine DRM automotive test solutions; during my master's research, I focused on UAV flight control and CAN Bus communication. Currently, I am actively exploring the potential of NVIDIA Jetson Edge AI in the embedded domain.",
  ],
  focusAreas: [
    { icon: "cpu", label: "Automotive IVI/RSE and DRM (Digital Right Management" },
    { icon: "shield", label: "Secure Boot、Trusted Execution Environment" },
    { icon: "factory", label: "Production and Test Yield Enhancement" },
    { icon: "drone", label: "Edge AI、UAV and Real-time System" },
  ],
  stats: [
    { value: "15+", label: "Years of Embedded Experience" },
    { value: "300k+", label: "DRM Devices per Year" },
    { value: "100%", label: "On-time Delivery" },
    { value: "0", label: "Quality Escape" },
  ],
} as const;

export const EXPERIENCES = [
  {
    id: "desaysv",
    year: "24",
    role: "Senior Engineer & Platform Team Leader",
    company: "DesaySV",
    location: "Taipei",
    period: "Aug 2024 — Present",
    highlights: [
      "Led a 4-person platform team across 4 concurrent projects, achieving 100% on-time delivery of all software milestones with zero critical quality escapes.",
      "Implemented Google Widevine DRM manufacturing test solutions for automotive IVI/RSE, supporting 5+ major OEMs with annual production exceeding 300,000 units.",
      "Managed BSP / Linux kernel driver development for Qualcomm and Telechips platforms.",
      "Established secure factory key delivery process, achieving 0% unauthorized access incidents.",
    ],
    active: true,
  },
  {
    id: "garmin",
    year: "20",
    role: "Advanced Software Engineer II ",
    company: "Garmin",
    location: "Taoyuan",
    period: "Jul 2020 — Aug 2024",
    highlights: [
      "Designed secure key storage framework adopted by Toyota for mass production IVI systems (100% manufacturing compliance, zero field key leaks).",
      "Developed RSA/XOR anti-hacking protection and QTEE secure TA; achieved 100% security certification pass rate with zero vulnerabilities in penetration testing.",
      "Reduced potential theft risks by over 90% during board-level bring-up and mass production phases.",
      "Led hardware security validation processes to ensure consistency between manufacturing tests and field deployment.",
    ],
    active: false,
  },
  {
    id: "foxconn",
    year: "16",
    role: "Senior Platform Software Engineer",
    company: "Foxconn Technology Group",
    location: "Ｎew Taipei City",
    period: "Nov 2016 — Jul 2020",
    highlights: [
      "Led Qualcomm SDX55 5G MiFi board bring-up and manufacturing test, achieving first-pass yield >95% and reducing test cycle time by 20–30%.",
      "Responsible for smart speaker peripheral driver verification and mass production testing (shipped >1 million units, yield improved 10–15%).",
      "Managed Netflix/HDCP 2.2 certification, achieving 100% pass rate and accelerating product launch by 2 weeks.",
    ],
    active: false,
  },
] as const;

export const PREVIOUS_ROLES =
  "Previous roles: Senior Software Engineer at Leadtek (health kiosk & ECG wearable devices), CMMI Coordinator at Ministry of Economic Affairs Automotive Research Center (Android automotive & LDW), Software Project Manager at Quanta Computer (NVIDIA Tegra 3 tablet), Software Engineer at Compal Electronics (Android factory test & OTA).";

export const SKILL_CATEGORIES = [
  {
    id: "embedded",
    title: "Embedded Systems & Linux",
    icon: "cpu",
    skills: [
      "C / C++",
      "Board Bring-up",
      "Linux Kernel Drivers",
      "Yocto / BSP",
      "Android Embedded",
      "QNX / QTEE",
      "Device Tree",
      "Secure Boot",
    ],
  },
  {
    id: "automotive",
    title: "Automotive & Security",
    icon: "shield",
    skills: [
      "Google Widevine DRM",
      "QTEE / TrustZone",
      "HDCP / Netflix Cert",
      "Anti-Hacking Protection",
      "Secure Key Delivery",
      "Automotive IVI/RSE",
      "RSA Cryptography",
    ],
  },
  {
    id: "uav",
    title: "UAV / Drone Systems",
    icon: "drone",
    skills: [
      "CAN Bus",
      "UAV Flight Control",
      "Avionics (ARINC 429)",
      "Real-time Systems",
      "PCB Design (ORCAD)",
      "ARM Board Bring-up",
    ],
  },
  {
    id: "tools",
    title: "Tools & Automation",
    icon: "wrench",
    skills: [
      "Python",
      "Bash / Shell",
      "Test Automation",
      "PyVISA / SCPI",
      "Manufacturing Test",
      "Yield Improvement",
      "Root Cause Analysis",
      "ISTQB CTFL",
    ],
  },
] as const;

export const PROJECTS = [
  {
    id: "Widevine DRM Security",
    title: "Google Widevine DRM Automotive IVI/RSE Manufacturing",
    company: "DesaySV · Senior Platform Engineer / Platform leader",
    period: "Automotive IVI/RSE · 2024–now",
    metric: "300k+ units/year",
    //image: "https://picsum.photos/seed/widevine-ivi/800/450",
    images: ["/images/desay_ivi.jpg", "/images/provisioning2.0.jpg", "/images/provision4.0.jpg"],
    description:
      "Led end-to-end design and deployment of Google Widevine DRM (L1/L3) manufacturing test solutions for automotive infotainment and rear-seat entertainment platforms, supporting secure mass production for global OEMs including Škoda, TATA Motors, Li Auto, Geely, and BYD.",
    contributions: [
      "Implemented secure factory key delivery process, achieving 0% unauthorized access incidents.",
      "Coordinated a 4-person Scrum team and delivered 100% of milestones on time across 4 concurrent projects.",
      "Managed BSP and Linux kernel driver development for Qualcomm and Telechips platforms.",
    ],
    tags: ["C/C++", "Linux BSP / Kernel", "Python Test Automation", "Widevine L1/L3", "Secure Boot"],
  },
  {
    id: "Secure Key Storage project",
    title: "Toyota IVI Secure Key Storage & Anti-Hacking Framework",
    company: "Garmin · Advanced Software Engineer II",
    period: "Automotive IVI Security · 2020–2024",
    metric: ">90% risk reduction",
    //image: "https://picsum.photos/seed/secure-toyota-ivi/800/450",
    images: ["/images/carmax.jpeg", "/images/secure_key_1.png", "/images/secure_key_2.png"],
    description:
      "Designed and implemented a production-grade secure key storage framework adopted by Toyota for IVI mass production systems. The framework includes RSA/XOR anti-hacking protection and QTEE secure Trusted Application.",
    contributions: [
      "Achieved 100% manufacturing test compliance with zero field key leakage incidents.",
      "QTEE secure TA protected key service data; passed 100% security certification with zero vulnerabilities in penetration testing.",
      "Conducted hardware security validation during board bring-up and mass production phases.",
    ],
    tags: ["C/C++", "QTEE / TrustZone", "RSA Cryptography", "Secure Key Storage", "Hardware Security Validation"],
  },
  {
    id: "IoT entertainment devices",
    title: "Smart speaker , 4K TV stick 4k , 5G MiFi",
    company: "Foxconn · Senior Engineer",
    period: "Consumer product · 2016–2020",
    metric: "Power Management / Thermal",
    images: ["/images/smart_speaker.png", "/images/cccair_stick.png", "/images/cccair_2.png" ,"/images/5G_mifi.jpg"],
    description:
      "Linux kernel driver integration and Android / Netflix certificate",
    contributions: [
      "Achieved 100% pass rate for Netflix/HDCP 2.2 certification, accelerating product launch by 2 weeks",
      "Optimized test sequences and automation, reducing test cycle time by 20–30%",
      "Supported high-volume mass production exceeding 1 million units",
    ],
    tags: ["Embedded Linux", "Driver Validation", "Netflix / HDCP Certification", "Production Test Sequences"],
  },
  {
    id: "Ａndroid smart phone from cupcake to Honeycomb",
    title: "Android smart phone and tablet development",
    company: "Quanta Computer / Compal Electronics · Software Engineer / Software Project Manager",
    period: "Fundation · 2009–2013",
    metric: "Linux Kernel / Android HAL developer",
    //image: "/images/Android_series_image.jpg",
    images: ["/images/Android_series_image.jpg",],
    description:
      "Ａndroid kernel driver development and system OTA integration cooperated witd 3rd party Redbend companty for smart phone and tablet. Also developed factory production line test software for quality control",
    contributions: [
      "Peripheral kernel driver development including Display LVDS adjustment, i2c devices, usb eye diagream",
      "Cooperate with 3rd party Redbend company for Android boot / system partition OTA integration",
      "One year experience SW PM in factory production line in Shanghai, China",
    ],
    tags: ["Android Phone", "ARM Board Bring-up", "Linux kernel driver","Software Project Management"],
  },
] as const;

export const EDUCATION = [
  {
    degree: "Master of science",
    field: "Aeronautical Engineering",
    school: "National Cheng Kung University (NCKU)",
    period: "2005 — 2007",
    highlight: "Research Topic: UAV CAN Bus Flight Control System & Avionics Communication Protocols",
  },
  {
    degree: "Bachelor of Science",
    field: "Aerospace Engineering",
    school: "TamKang University (TKU)",
    period: "2001 - 2005",
    highlight: "MCU 8051 for UAV solar power charging",
  },
] as const;

export const CONTACT = {
  eyebrow: "LET'S CONNECT",
  heading: "Ready for Embedded System development?",
  description:
    "Currently open to Senior/Staff Embedded Systems, Product Test Engineer, IoT Platform, and UAV/Edge AI opportunities. Particularly welcome collaborations in defense, automotive, or high-reliability domains.",
  formspreeEndpoint: "https://formspree.io/f/xplaceholder",
} as const;
