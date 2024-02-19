# Next.js with Storybook Project


This project serves as an example of how to organize code effectively using Next.js along with Storybook. It demonstrates the usage of Storybook in a Next.js project for developing and showcasing UI components.


## Installation
To get started, clone this repository and navigate to the project directory:

```git clone <repository-url>
cd nextjs-storybook
```

## Install the dependencies:

```
npm install
```
## Usage
After installing the dependencies, you can start the development server:

```
npm run dev
```
This will start the Next.js development server. Open http://localhost:3000 to view the application in your browser.



## Project Structure
The project is organized to maintain a clean and scalable codebase. Here's an overview of the project structure:
```
nextjs-storybook/
├── components/          # Common reusable components
├── hooks/                # Next.js page components
├── stories/             # Storybook stories for components
├── .storybook/          # Storybook configuration
├── utils /              # Static files
└── ...
```

## Storybook
Storybook is integrated into the project for showcasing UI components. To start Storybook, run the following command:
```bash
npm run storybook

```
This will start Storybook on http://localhost:6006.

## Unit Test Cases
Unit test cases are written using Jest and React Testing Library. You can run the tests using the following command:
```
npm test
```

## Writing Common Components
Common components are stored in the components/ directory. These components are designed to be reusable across different parts of the application.

## Scripts
- ```npm run dev```: Starts the Next.js development server
- npm run build: Builds the Next.js application.
- npm start: Starts the Next.js production server.
- npm run lint: Lints the project files using ESLint.
- npm run storybook: Starts Storybook for showcasing UI components.
- npm run build-storybook: Builds Storybook for deployment.
- npm test: Runs unit tests using Jest.
