import React from 'react';

const Price = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$10',
      period: '/mo',
      description: 'Perfect for individuals',
      features: ['Access to basic features', 'Email support', '10GB storage'],
      color: 'text-gray-800 dark:text-gray-100',
    },
    {
      name: 'Pro',
      price: '$30',
      period: '/mo',
      description: 'Best for small teams',
      features: ['Everything in Basic', 'Priority support', '50GB storage'],
      color: 'text-blue-500 dark:text-blue-400',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '$50',
      period: '/mo',
      description: 'Ideal for large organizations',
      features: ['All Pro features', 'Dedicated support', '200GB storage'],
      color: 'text-gray-800 dark:text-gray-100',
    },
  ];

  return (
    <div className='py-12 bg-gray-50 dark:bg-gray-900'>
      <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center px-4'>
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg bg-white dark:bg-gray-800 p-8 text-center ${
              plan.highlight
                ? 'border-2 border-blue-500 dark:border-blue-400'
                : ''
            }`}
          >
            <h3 className={`text-2xl font-semibold ${plan.color}`}>
              {plan.name}
            </h3>
            <p className='text-gray-500 dark:text-gray-400 mt-1'>
              {plan.description}
            </p>
            <p className='text-4xl font-extrabold mt-4 text-gray-900 dark:text-gray-50'>
              {plan.price}
              <span className='text-lg font-normal'>{plan.period}</span>
            </p>
            <ul className='mt-6 space-y-3 text-gray-600 dark:text-gray-300'>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className='mt-8 w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300'>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
