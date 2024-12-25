import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const patterns = [
  { name: 'Microservices Aggregator', path: '/aggregator' },
  { name: 'API Gateway', path: '/api-gateway' },
  { name: 'Saga', path: '/saga' },
  { name: 'Circuit Breaker', path: '/circuit-breaker' },
  { name: 'Distributed Tracing', path: '/distributed-tracing' },
  { name: 'Idempotent Consumer', path: '/idempotent-consumer' },
  { name: 'Log Aggregation', path: '/log-aggregation' },
  { name: 'Factory', path: '/factory' },
  { name: 'Builder', path: '/builder' },
  { name: 'Facade', path: '/facade' },
  { name: 'Strategy', path: '/strategy' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link to={"/"} className="text-2xl font-bold px-4 py-2 block">Design Patterns</Link>
        {patterns.map((pattern) => (
          <Link
            key={pattern.path}
            to={pattern.path}
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              location.pathname === pattern.path
                ? 'bg-gray-900 text-white'
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {pattern.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

