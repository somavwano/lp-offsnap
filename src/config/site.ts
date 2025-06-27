export type SiteConfig = typeof siteConfig;

// TODO update information
export const siteConfig = {
  name: "OFFICEMILL_WEB",
  description: "Developer love OFFICEMILL_WEB",
  ogImage: "https://repicle.com/twitter-cards/repicle.jpeg",
  author: "Junior Garcia",
  email: "jrgarciadev@gmail.com",
  siteUrl: "https://repicle.com",
  creator: "@siteConfig",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://repicle.com",
    siteName: "repicle",
    description: "Beautiful, fast and modern React UI Library",
    images: [
      {
        url: "https://repicle.com/twitter-cards/repicle.jpeg",
        width: 1200,
        height: 630,
        alt: "repicle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "repicle - Beautiful, fast and modern React UI Library",
    description:
      "Make beautiful websites regardless of your design experience.",
    image: "https://repicle.com/twitter-cards/repicle.jpeg",
    creator: "@OFFICEMILL_WEB",
  },
  links: {
    github: "https://github.com/repicle-org/repicle",
    twitter: "https://twitter.com/OFFICEMILL_WEB",
    docs: "https://repicle.com/docs",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    portfolio: "https://jrgarciadev.com",
  },
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Trending",
      href: "/trending",
    },
    {
      label: "Questions&Answers",
      href: "/qas",
    },
    {
      label: "Event",
      href: "/event",
    },
    {
      label: "Challenges",
      href: "/challenge",
    },
    {
      label: "Ranking",
      href: "/ranking",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
};
