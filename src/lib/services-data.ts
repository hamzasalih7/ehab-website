export type ServiceItem = {
  slug: string;
  icon: string;
  image?: string;
  features: string[];
};

export type MainService = {
  slug: string;
  icon: string;
  image: string;
  features: string[];
};

export type ServiceCategory = {
  slug: string;
  icon: string;
  image: string;
  href: string;
  hub: boolean;
};

export const mainServices: MainService[] = [
  {
    slug: "restaurant",
    icon: "UtensilsCrossed",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    features: [
      "restaurantSetup",
      "licensing",
      "consulting",
      "recruitment",
      "management",
    ],
  },
  {
    slug: "construction",
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    features: [
      "projectSupport",
      "engineering",
      "workforce",
      "safety",
      "projectManagement",
    ],
  },
  {
    slug: "visa",
    icon: "Plane",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
    features: [
      "businessVisas",
      "workVisas",
      "familyVisas",
      "visitVisas",
      "documentation",
      "immigration",
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "restaurant",
    icon: "UtensilsCrossed",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    href: "/services/restaurant",
    hub: false,
  },
  {
    slug: "construction",
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    href: "/services/construction",
    hub: false,
  },
  {
    slug: "visa",
    icon: "Plane",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
    href: "/services/visa",
    hub: false,
  },
  {
    slug: "business-consulting",
    icon: "Briefcase",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    href: "/services/business-consulting",
    hub: true,
  },
  {
    slug: "real-estate",
    icon: "Home",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    href: "/services/real-estate",
    hub: true,
  },
  {
    slug: "digital-services",
    icon: "Monitor",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    href: "/services/digital-services",
    hub: true,
  },
];

export const consultingServices: ServiceItem[] = [
  {
    slug: "accounting-vat-audit",
    icon: "Calculator",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb8cd7ae?w=800&q=80",
    features: [
      "bookkeeping",
      "vatRegistration",
      "zatcaCompliance",
      "financialReporting",
      "auditSupport",
    ],
  },
  {
    slug: "banking-financial",
    icon: "Landmark",
    image:
      "https://images.unsplash.com/photo-1541354329998-f4d4f9497a96?w=800&q=80",
    features: [
      "bankAccount",
      "bankingDocs",
      "financialAdvisory",
      "investmentConsultation",
    ],
  },
  {
    slug: "business-setup",
    icon: "Rocket",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    features: [
      "newCompany",
      "foreignInvestor",
      "commercialRegistration",
      "businessLicensing",
    ],
  },
  {
    slug: "company-formation",
    icon: "Building",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    features: ["llcFormation", "branchOffice", "misaSupport", "governmentApprovals"],
  },
  {
    slug: "it-technology",
    icon: "Cpu",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    features: [
      "websiteDevelopment",
      "cloudSolutions",
      "itInfrastructure",
      "digitalTransformation",
      "technicalSupport",
    ],
  },
  {
    slug: "payroll-hr",
    icon: "Users",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    features: [
      "payrollProcessing",
      "employeeManagement",
      "gosiRegistration",
      "hrDocumentation",
      "complianceSupport",
    ],
  },
  {
    slug: "premium-residency",
    icon: "Award",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f5cd577c7?w=800&q=80",
    features: [
      "eligibilityAssessment",
      "applicationProcessing",
      "documentationSupport",
      "residencyRenewal",
    ],
  },
  {
    slug: "pro-gro",
    icon: "FileCheck",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    features: [
      "iqamaServices",
      "visaProcessing",
      "governmentRelations",
      "chamberRegistration",
      "municipalityServices",
      "documentAttestation",
      "licenseRenewals",
    ],
  },
];

export const realEstateServices: ServiceItem[] = [
  {
    slug: "building-rentals",
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    features: ["commercialBuildings", "officeBuildings", "residentialBuildings"],
  },
  {
    slug: "villa-rentals",
    icon: "Castle",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    features: ["luxuryVillas", "familyVillas", "furnishedVillas"],
  },
  {
    slug: "house-rentals",
    icon: "House",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    features: ["familyHouses", "shortTermRentals", "longTermRentals"],
  },
  {
    slug: "business-establishment-support",
    icon: "Store",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: [
      "findLocation",
      "commercialLeasing",
      "officeRental",
      "licenseRequirements",
      "licenseLocationSupport",
    ],
  },
];

export const digitalServices: ServiceItem[] = [
  {
    slug: "amazon-services",
    icon: "ShoppingCart",
    image:
      "https://images.unsplash.com/photo-1523474253046-5993fd1740c8?w=800&q=80",
    features: [
      "sellerSetup",
      "listingOptimization",
      "storeManagement",
      "productResearch",
      "accountHealth",
    ],
  },
  {
    slug: "advertising-marketing",
    icon: "Megaphone",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: [
      "googleAds",
      "metaAds",
      "tiktokAds",
      "linkedinMarketing",
      "socialMediaManagement",
      "leadGeneration",
    ],
  },
  {
    slug: "website-development",
    icon: "Globe",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    features: [
      "businessWebsites",
      "corporateWebsites",
      "ecommerceStores",
      "landingPages",
      "maintenance",
      "seoOptimization",
    ],
  },
  {
    slug: "branding-digital-presence",
    icon: "Palette",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    features: [
      "logoDesign",
      "brandIdentity",
      "contentCreation",
      "socialMediaBranding",
    ],
  },
];

export type ServiceNamespace =
  | "mainServices"
  | "consultingServices"
  | "realEstateServices"
  | "digitalServices"
  | "serviceCategories";

export function getNamespaceForHub(hub: string): ServiceNamespace {
  switch (hub) {
    case "business-consulting":
      return "consultingServices";
    case "real-estate":
      return "realEstateServices";
    case "digital-services":
      return "digitalServices";
    default:
      return "consultingServices";
  }
}

export function getSubServices(hub: string): ServiceItem[] {
  switch (hub) {
    case "business-consulting":
      return consultingServices;
    case "real-estate":
      return realEstateServices;
    case "digital-services":
      return digitalServices;
    default:
      return [];
  }
}

export function getConsultingService(slug: string) {
  return consultingServices.find((s) => s.slug === slug);
}

export function getRealEstateService(slug: string) {
  return realEstateServices.find((s) => s.slug === slug);
}

export function getDigitalService(slug: string) {
  return digitalServices.find((s) => s.slug === slug);
}

export function getMainService(slug: string) {
  return mainServices.find((s) => s.slug === slug);
}

export const siteConfig = {
  name: "Ehab Solutions",
  phone: "+966 50 000 0000",
  email: "info@ehabsolutions.sa",
  whatsapp: "966500000000",
  address: {
    en: "King Fahd Road, Riyadh, Saudi Arabia",
    ar: "طريق الملك فهد، الرياض، المملكة العربية السعودية",
  },
  hours: {
    en: "Sunday – Thursday: 9:00 AM – 6:00 PM",
    ar: "الأحد – الخميس: 9:00 صباحاً – 6:00 مساءً",
  },
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1",
};
