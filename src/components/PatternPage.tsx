import React from 'react';
import { Github } from 'lucide-react';

interface PatternPageProps {
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  tags: string[];
  alsoKnownAs: string[];
  intent: string;
  explanation: string;
  programmaticExample: string;
  whenToUse: string[];
  realWorldApplications: string[];
  benefits: string[];
  tradeoffs: string[];
  references: Array<{ name: string; link: string }>;
  githubLink: string;
}

export const PatternPage: React.FC<PatternPageProps> = ({
  title,
  shortTitle,
  description,
  category,
  tags,
  alsoKnownAs,
  intent,
  explanation,
  programmaticExample,
  whenToUse,
  realWorldApplications,
  benefits,
  tradeoffs,
  references,
  githubLink
}) => {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl text-gray-600">{description}</p>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Info</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Category</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{category}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Tags</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{tags.join(', ')}</dd>
            </div>
          </dl>
        </div>
      </div>

      {alsoKnownAs && alsoKnownAs.length > 0 && (
  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Also Known As</h3>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
      <ul className="list-disc pl-5 px-4 py-5 sm:px-6">
        {alsoKnownAs.map((name, index) => (
          <li key={index} className="text-sm text-gray-900">{name}</li>
        ))}
      </ul>
    </div>
  </div>
)}

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Intent</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <p className="text-sm text-gray-900 px-4 py-5 sm:px-6">{intent}</p>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Explanation</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <p className="text-sm text-gray-900 px-4 py-5 sm:px-6">{explanation}</p>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Programmatic Example</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <pre className="text-sm text-gray-900 px-4 py-5 sm:px-6 overflow-x-auto">
            <code>{programmaticExample}</code>
          </pre>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">When to Use</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <ul className="list-disc pl-5 px-4 py-5 sm:px-6">
            {whenToUse.map((item, index) => (
              <li key={index} className="text-sm text-gray-900">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Real-World Applications</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <ul className="list-disc pl-5 px-4 py-5 sm:px-6">
            {realWorldApplications.map((item, index) => (
              <li key={index} className="text-sm text-gray-900">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Benefits and Trade-offs</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div className="px-4 py-5 sm:px-6">
            <h4 className="text-md font-medium text-gray-900 mb-2">Benefits:</h4>
            <ul className="list-disc pl-5">
              {benefits.map((item, index) => (
                <li key={index} className="text-sm text-gray-900">{item}</li>
              ))}
            </ul>
            <h4 className="text-md font-medium text-gray-900 mt-4 mb-2">Trade-offs:</h4>
            <ul className="list-disc pl-5">
              {tradeoffs.map((item, index) => (
                <li key={index} className="text-sm text-gray-900">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">References</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <ul className="list-disc pl-5 px-4 py-5 sm:px-6">
            {references.map((ref, index) => (
              <li key={index} className="text-sm text-gray-900">
                <a href={ref.link} className="text-blue-600 hover:underline">
                  {ref.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Github className="mr-2 h-4 w-4" />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

