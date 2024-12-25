import React from 'react';
import AISearchBar from '../../components/AiSearchBar';

const Home: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-4xl font-bold">Design Patterns Library</h1>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900">Welcome to the Design Patterns Library</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <p className="text-base text-gray-700 mb-4">
            Explore our comprehensive collection of design patterns, each explained in detail with practical examples and use cases.
          </p>
          <AISearchBar />
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900">What are Design Patterns?</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <p className="text-base text-gray-700">
            Design patterns are typical solutions to common problems in software design. They are like pre-made
            blueprints that you can customize to solve a recurring design problem in your code. Design patterns
            are not finished designs that can be transformed directly into code. They are descriptions or templates
            for how to solve a problem that can be used in many different situations.
          </p>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900">Why Use Design Patterns?</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
            <li>They are proven solutions: Design patterns provide robust solutions to recurring problems.</li>
            <li>They are reusable: Design patterns can be adapted to solve similar problems in different contexts.</li>
            <li>They are expressive: Design patterns can explain large solutions succinctly.</li>
            <li>They ease communication: Design patterns provide a common vocabulary for developers.</li>
            <li>They prevent the need for refactoring code: Following design patterns during development can prevent the need for major refactoring later.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900">How to Use This Library</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <p className="text-base text-gray-700">
            Browse through our collection of design patterns using the sidebar navigation. Each pattern page includes:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-base text-gray-700">
            <li>A detailed explanation of the pattern</li>
            <li>Code examples</li>
            <li>Use cases and real-world applications</li>
            <li>Benefits and trade-offs</li>
            <li>Related patterns and further reading</li>
          </ul>
          <p className="mt-4 text-base text-gray-700">
            Whether you're a beginner learning about design patterns for the first time, or an experienced developer 
            looking to refresh your knowledge, we hope you'll find this library valuable in your software development journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

