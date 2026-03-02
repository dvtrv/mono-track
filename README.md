# Mono Track

A simple React-based task management application built with modern web technologies.

## 🚀 Features

- Create new tasks with custom titles
- Mark tasks as completed
- Delete individual tasks
- Clear all completed tasks at once
- Clean and intuitive user interface

## 🛠️ Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mono-track
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍‍🌼 Usage

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

## 📁 Project Structure

```
mono-track/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Button.jsx
│   │   ├── Checkbox.jsx
│   │   ├── CreateForm.jsx
│   │   ├── Divider.jsx
│   │   ├── Input.jsx
│   │   ├── Navbar.jsx
│   │   ├── TaskCard.jsx
│   │   └── TaskList.jsx
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

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 🚀 Deployment

This application can be deployed to any static hosting service. After building with `npm run build`, deploy the contents of the `dist` folder.
