# Design Patterns Library

> [!IMPORTANT]  
> The design patterns are accessible via Github links inside the app. We made sure to implement each one of the Design Patterns in an independant repository.

## Overview

The Design Patterns Library is a comprehensive web application that serves as an interactive resource for learning and understanding various software design patterns. Built with React and Next.js, this project aims to provide developers with detailed explanations, examples, and use cases for common design patterns.

## Features

- Detailed explanations of various design patterns
- Interactive UI with a sidebar for easy navigation
- AI-powered search functionality for querying about design patterns
- Responsive design for optimal viewing on different devices
- Code examples and real-world applications for each pattern

## Design Patterns Included

- Aggregator
- API Gateway
- Saga
- Circuit Breaker
- Distributed Tracing
- Idempotent Consumer
- Log Aggregation
- Factory
- Builder
- Facade
- Strategy

## Technologies Used

- React
- Next.js
- TypeScript
- Tailwind CSS
- OpenAI API (for AI-powered search)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/design-patterns-library.git
cd design-patterns-library
```

2. Install dependencies:

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

3. Create a `.env.local` file in the root directory and add the required environment variables:

```env
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
```

4. Start the development server:

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Browse the sidebar to navigate between different design patterns.
2. Use the AI-powered search bar to ask questions or find specific patterns.
3. View code examples and real-world applications for each pattern.

## Contributing

Contributions are welcome! If you’d like to add new design patterns, improve the UI, or enhance functionality, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add feature/your-feature-name"
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request to the `main` branch of this repository.

## Project Structure

```
├── node_modules       # Dependencies installed via npm or yarn
├── public             # Static assets (images, icons, etc.)
├── src                # Source code
│   ├── api            # API-related functions and integrations
│   ├── components     # Reusable UI components
│   ├── pages          # Next.js page components
│   ├── server         # Server-side utilities or configurations
│   ├── App.css        # Global styles for the application
│   ├── App.test.tsx   # Unit tests for the App component
│   ├── App.tsx        # Main application entry component
│   ├── index.css      # Additional global CSS
│   ├── index.tsx      # Entry point for rendering the React app
│   ├── logo.svg       # Project logo
│   ├── react-app-env.d.ts  # TypeScript environment definitions
│   ├── reportWebVitals.ts  # Performance measurement setup
│   ├── setupTests.ts  # Configuration for testing environment
├── .gitignore         # Files and folders to ignore in Git
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Lockfile for npm dependencies
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

## Roadmap

- Add more design patterns
- Implement user authentication for personalized experience
- Enable saving favorite patterns for quick access
- Add support for multiple languages
- Enhance AI capabilities for contextual recommendations

## Demo Video

https://github.com/user-attachments/assets/d5379d28-613b-4d9d-b56d-8028e33ff719

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the Gang of Four's "Design Patterns: Elements of Reusable Object-Oriented Software."
- Powered by OpenAI's GPT technology for intelligent search.

---

Feel free to reach out with any questions or feedback. Happy coding! 🚀
