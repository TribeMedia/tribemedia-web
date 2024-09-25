import { z } from "zod";

const FeatureSchema = z.object({
  name: z.string(),
  description: z.string(),
  iconName: z.string(),
});

const PricingPlanSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.string(),
  billingPeriod: z.string(),
  description: z.string(),
  features: z.array(FeatureSchema),
  highlighted: z.boolean().optional(),
});

const LandingPageDataSchema = z.object({
  heroTitle: z.string(),
  heroSubtitle: z.string(),
  features: z.array(FeatureSchema),
  pricingPlans: z.array(PricingPlanSchema),
});

// Type aliases using z.infer
export type Feature = z.infer<typeof FeatureSchema>;
export type PricingPlan = z.infer<typeof PricingPlanSchema>;
export type LandingPageData = z.infer<typeof LandingPageDataSchema>;
