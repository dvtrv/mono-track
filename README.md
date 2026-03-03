# Mono Track

A simple React-based task management application built with modern web technologies.


<video src="https://github.com/user-attachments/assets/d7bcd4a2-c31c-45b1-ae94-a6f474963a97" width="600" controls></video>

## Features

- Create new tasks with custom titles
- Mark tasks as completed
- Delete individual tasks
- Clear all completed tasks at once
- Clean and intuitive user interface

## Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **React Icons** - Icon library

## Installation

1. Clone the repository:
```bash
git clone https://github.com/dvtrv/mono-track.git
cd mono-track
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development
```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
mono-track/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Button.jsx
│   │   ├── Checkbox.jsx
│   │   └── ...
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── utils/
│   └── utils.jsx         # Utility functions
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Deployment

This application can be deployed to any static hosting service. After building with `npm run build`, deploy the contents of the `dist` folder.
