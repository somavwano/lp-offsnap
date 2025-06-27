export interface CTA {
  text: string;
  subText?: string;
  style: "purple" | "gradient";
}

interface Feature {
  text: string;
  link?: {
    text: string;
    href: string;
  };
  subText?: string;
}

export interface Plan {
  name: string;
  price: string;
  priceNote: string | null;
  recommended?: boolean;
  cta: CTA;
  features: Feature[];
  footerNote: string | null;
}
