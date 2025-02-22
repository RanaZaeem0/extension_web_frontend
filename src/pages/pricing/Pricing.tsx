import type React from "react"

interface PlanFeature {
  text: string
  included: boolean
}

interface PricingPlanProps {
  title: string
  price: string
  features: PlanFeature[]
}

const PricingCard: React.FC<PricingPlanProps> = ({ title, price, features }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="px-6 py-8">
      <h3 className="text-2xl font-semibold text-center text-gray-900">{title}</h3>
      <div className="mt-4 flex justify-center">
        <span className="text-5xl font-extrabold text-gray-900">${price}</span>
        <span className="ml-1 text-xl font-medium text-gray-500 self-end">/ month</span>
      </div>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            {feature.included ? (
              <span className="flex-shrink-0 w-5 h-5 text-green-500" />
            ) : (
              <span className="flex-shrink-0 w-5 h-5"></span>
            )}
            <span className={`ml-3 text-base ${feature.included ? "text-gray-700" : "text-gray-500"}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="px-6 py-8 bg-gray-50">
      <button className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
        Select Plan
      </button>
    </div>
  </div>
)

export default function PricingPlan() {
  const plans = [
    {
      title: "Basic Plan",
      price: "9.99",
      features: [
        { text: "1 WhatsApp Account", included: true },
        { text: "Unlimited Messages", included: true },
        { text: "Real-Time Sending Progress", included: true },
        { text: "Upload Excel", included: true },
        { text: "Send Attachments", included: true },
      ],
    },
    {
      title: "Pro Plan",
      price: "18.99",
      features: [
        { text: "3 WhatsApp Accounts", included: true },
        { text: "All Basic Features", included: true },
        { text: "Export Group Members", included: true },
        { text: "Send Personalized Messages", included: true },
      ],
    },
    {
      title: "Premium Plan",
      price: "24.99",
      features: [
        { text: "5 WhatsApp Accounts", included: true },
        { text: "All Pro Features", included: true },
        { text: "Number Replacement", included: true },
        { text: "Auto Remove Invalid Chats", included: true },
      ],
    },
  ]

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">Choose Your Plan</h1>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  )
}

