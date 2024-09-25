export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export interface HeroSection {
  title: string;
  subtitle: string;
}

export interface IconData {
  name: string;
  path: string;
}

export interface LandingPageData {
  hero: HeroSection;
  features: Feature[];
  pricingPlans: PricingPlan[];
  iconMap: IconData[];
}

export type IconMap = {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};