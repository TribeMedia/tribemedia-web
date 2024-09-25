import React from 'react'
import { PricingPlan, Feature } from '@/types/pricing'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Check } from 'lucide-react'

interface PricingPlanCardProps {
  plan: PricingPlan
}

export const PricingPlanCard: React.FC<PricingPlanCardProps> = ({ plan }) => {
  return (
    <Card className={`flex flex-col ${plan.highlighted ? 'border-primary' : ''}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-4xl font-bold mb-4">
          {plan.price}
          <span className="text-lg font-normal text-muted-foreground">/{plan.billingPeriod}</span>
        </div>
        <ul className="space-y-2">
          {plan.features.map((feature: Feature, index: number) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={plan.highlighted ? 'default' : 'outline'}>
          Get started
        </Button>
      </CardFooter>
    </Card>
  )
}