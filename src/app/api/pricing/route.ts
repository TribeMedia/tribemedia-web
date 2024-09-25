import { NextResponse } from 'next/server';

export async function GET() {
  const pricingPlans = [
    {
      nodeId: 'plan1',
      id: '1',
      name: 'Basic Plan',
      key: 'basic',
      description: 'Entry-level plan for individuals',
      markdownBody: '# Basic Plan\n\nPerfect for getting started.',
      createdAt: new Date(),
      updatedAt: new Date(),
      data: {
        type: 'pricing',
        price: 9.99,
        billingCycle: 'monthly'
      },
      pricingPlanFeatures: []
    },
    {
      nodeId: 'plan2',
      id: '2',
      name: 'Pro Plan',
      key: 'pro',
      description: 'Advanced features for professionals',
      markdownBody: '# Pro Plan\n\nUnlock advanced capabilities.',
      createdAt: new Date(),
      updatedAt: new Date(),
      data: {
        type: 'pricing',
        price: 19.99,
        billingCycle: 'monthly'
      },
      pricingPlanFeatures: []
    },
    {
      nodeId: 'plan3',
      id: '3',
      name: 'Enterprise Plan',
      key: 'enterprise',
      description: 'Customized solutions for large organizations',
      markdownBody: '# Enterprise Plan\n\nTailored for your business needs.',
      createdAt: new Date(),
      updatedAt: new Date(),
      data: {
        type: 'pricing',
        price: 'Custom',
        billingCycle: 'annual'
      },
      pricingPlanFeatures: []
    }
  ];

  return NextResponse.json({ data: pricingPlans });
}