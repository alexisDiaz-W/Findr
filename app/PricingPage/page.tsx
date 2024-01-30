/*
import React from "react"

const PricingPage = () => {
    return (
        <div>Pricing: 
            <h1> $ 10 BILLION</h1>
        </div>
    )
}

export default PricingPage
*/

const features = [
  {
    name: 'Beginner Pricing Plan',
    description:
      'Start off with our basic pricing plan.',
  },
  {
    name: 'Intermediate Pricing Plan',
    description:
      'Meet our intermediate pricing plan.',
  },
  {
    name: 'Advanced Pricing Plan',
    description:
      'Level up your interns experience and support with our advanced pricing plan.',
  },
  {
    name: 'Elite Pricing Plan',
    description:
      'Get our best package with the elite pricing plan.',
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Start today</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to give your interns the perfect experience.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with our sales team today to start using our innovative software.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}