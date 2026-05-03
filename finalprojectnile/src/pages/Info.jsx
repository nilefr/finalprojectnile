import React from 'react';
import InfoCard from '../components/InfoCard';

const Info = () => {
  const benefits = [
    {
      title: "Environmental Benefits",
      description: "Public transit reduces carbon emissions by decreasing the number of vehicles on the road. One bus can replace up to 40 cars, significantly lowering air pollution and greenhouse gases.",
      icon: "🌿"
    },
    {
      title: "Cost Savings",
      description: "Using public transit is often cheaper than driving. Save on gas, parking, maintenance, and insurance costs while enjoying a stress-free commute.",
      icon: "💰"
    },
    {
      title: "Convenience & Accessibility",
      description: "Public transit provides easy access to jobs, education, and services. It's especially beneficial for those without cars, seniors, and people with disabilities.",
      icon: "🚇"
    },
    {
      title: "Health & Wellness",
      description: "Walking to transit stops promotes physical activity. Reduced traffic congestion means less stress and better air quality for healthier communities.",
      icon: "🏃‍♂️"
    },
    {
      title: "Economic Growth",
      description: "Efficient public transit attracts businesses and boosts local economies. It creates jobs in transportation and supports urban development.",
      icon: "📈"
    },
    {
      title: "Reduced Traffic Congestion",
      description: "By encouraging shared rides, public transit helps alleviate traffic jams, reducing commute times and improving overall transportation efficiency.",
      icon: "🚗"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits of Public Transit
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how public transportation improves our communities, environment, and quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <InfoCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Experience the Benefits?
            </h2>
            <p className="text-gray-600 mb-6">
              Join millions who choose public transit for a better tomorrow. Check local schedules and start your journey today.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200">
              Find Transit Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;