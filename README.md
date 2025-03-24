# Exkurzie & ČIMO Website

This repository contains the source code for the Exkurzie & ČIMO website, featuring a bus transportation service and educational materials catalog.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Production](#production)
- [Project Structure](#project-structure)
- [Adding New Products](#adding-new-products)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1. Install dependencies:
```bash
npm install
```

This will install all the necessary packages defined in `package.json`, including:
- React
- React Router
- Vite
- Tailwind CSS
- Other development dependencies

## Development

To start the development server:

```bash
npm run dev
```

This command starts the Vite development server. By default, the application will be available at [http://localhost:3000](http://localhost:3000).

Vite offers features like:
- Fast hot module replacement (HMR)
- On-demand file serving
- Optimized builds

## Production

### Building for Production

To build the application for production:

```bash
npm run build
```

This command creates an optimized production build in the `dist` directory.

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

This starts a local server with your production build, typically at [http://localhost:4173](http://localhost:4173).

### Deploying to a Server

After building, you can deploy the contents of the `dist` directory to any static hosting service or web server. Some popular options include:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any traditional web hosting with FTP access


## License

This project is proprietary and belongs to Bidiwo.