import { NextResponse } from 'next/server'
import { LandingPageData } from '@/types/pricing'

export async function GET() {
  const landingPageData: LandingPageData = {
    heroTitle: "Welcome to Prometheus AI",
    heroSubtitle: "Empower your business with cutting-edge AI technology. Streamline operations, gain insights, and drive innovation.",
    features: [
      { name: "Advanced Analytics", description: "Gain deep insights from your data with our AI-powered analytics.", iconName: "BarChart" },
      { name: "Automated Workflows", description: "Streamline your processes with intelligent automation.", iconName: "Workflow" },
      { name: "Predictive Modeling", description: "Forecast trends and make data-driven decisions.", iconName: "TrendingUp" },
      { name: "Natural Language Processing", description: "Understand and analyze text data at scale.", iconName: "MessageSquare" },
      { name: "Real-time Processing", description: "Process and analyze data in real-time for immediate insights.", iconName: "Zap" },
      { name: "Secure Infrastructure", description: "Enterprise-grade security to protect your data and AI models.", iconName: "Shield" },
    ],
    pricingPlans: [
      {
        id: "basic",
        name: "Basic",
        price: "$5,000",
        billingPeriod: "month",
        description: "Document management and embedding chatbots",
        features: [
          { name: "Basic AI analytics", description: "Get insights from your data", iconName: "BarChart" },
          { name: "5 user accounts", description: "Collaborate with your team", iconName: "Users" },
          { name: "24/7 support", description: "We're here to help", iconName: "HeadphonesIcon" },
        ],
      },
      {
        id: "pro",
        name: "Pro",
        price: "$15,000",
        billingPeriod: "month",
        description: "Deep insights and predictions",
        features: [
          { name: "Advanced AI analytics", description: "Deep insights and predictions", iconName: "BarChart" },
          { name: "Build rich AI applications", description: "Create custom AI solutions", iconName: "Code" },
          { name: "Intelligent Agents", description: "Deploy AI agents for automation", iconName: "Bot" },
          { name: "Custom integrations", description: "Connect with your existing tools", iconName: "Link" },
        ],
        highlighted: true,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "Custom",
        billingPeriod: "year",
        description: "Custom solutions for your business",
        features: [
          { name: "Full AI suite", description: "Access to all our AI capabilities", iconName: "Package" },
          { name: "Unlimited user accounts", description: "Scale across your organization", iconName: "Users" },
          { name: "Dedicated support team", description: "Personalized assistance", iconName: "HeadphonesIcon" },
          { name: "On-premise deployment option", description: "Deploy within your infrastructure", iconName: "Server" },
        ],
      },
    ],
  }

  return NextResponse.json(landingPageData)
}