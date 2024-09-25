'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { PricingPlanCard } from './pricing/pricing-plan-card'
import FeatureCard from './feature-card'
import { Spinner } from './ui/spinner'
import HeroBackground from './hero-background'
import Footer from './footer'
import { getIconComponent } from '@/lib/utils/icon-utils'
import { LucideIcon } from 'lucide-react';
import { PricingPlan, Feature, LandingPageData } from '@/types/pricing';

export default function LandingPage() {
  const [data, setData] = useState<LandingPageData | null>(null)

  useEffect(() => {
    fetch('/api/landing-page')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching landing page data:', error))
  }, [])

  if (!data) return <Spinner />

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <section className="relative h-[600px]">
        <HeroBackground />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 font-heading">{data.heroTitle}</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {data.heroSubtitle}
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-heading">Key Features</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">Discover what makes Prometheus AI stand out</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feature: Feature) => {
              const Icon = getIconComponent(feature.iconName)
              return (
                <FeatureCard
                  key={feature.name}
                  title={feature.name}
                  description={feature.description}
                  icon={Icon as LucideIcon}
                />
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-heading">Plans for every need</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">Choose the perfect plan for your business</p>
          <div className="grid md:grid-cols-3 gap-8">
            {data.pricingPlans.map((plan: PricingPlan) => (
              <PricingPlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}