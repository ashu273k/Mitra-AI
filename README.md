# Mitra AI

Your AI-powered companion for mastering coding interviews and real-world programming challenges.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

---

## Overview
Mitra AI is a modern web application that helps developers prepare for coding interviews and improve their programming skills. It features an AI interviewer, interactive coding playground, real-time feedback, and a beautiful GitHub-inspired UI.

## Features
- **AI Interviewer:** Practice coding interviews with adaptive AI feedback on code, approach, and communication.
- **Smart Playground:** Write, run, and test code in multiple languages with syntax highlighting and real-time output.
- **Animated AI Assistant:** Engaging Rive-powered assistant provides feedback and guidance.
- **Progress Tracking:** Monitor your improvement with analytics and personalized recommendations.
- **Community Learning:** Join a community of learners, share solutions, and collaborate.
- **Responsive Design:** Fully responsive and accessible UI.

## Live Demo
> _Coming soon!_

## Installation
1. **Clone the repository:**
   ```powershell
   git clone https://github.com/ashu273k/Mitra-AI.git
   cd Mitra-AI
   ```
2. **Install dependencies:**
   ```powershell
   npm install
   ```
3. **Start the development server:**
   ```powershell
   npm run dev
   ```
4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Usage
- **Landing Page:** Explore features, testimonials, and team info.
- **Playground:** Go to `/playground` to write, run, and test code with instant feedback.
- **AI Interview:** Practice coding interviews and receive adaptive feedback.
- **Rive Animation:** See `RIVE_ANIMATION_SETUP.md` and `public/ANIMATION_INSTRUCTIONS.md` for customizing the animated assistant.

## Project Structure
```
├── public/
│   ├── ANIMATION_INSTRUCTIONS.md
│   ├── stars.svg
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── LandingPage.jsx
│   ├── components/
│   │   ├── CoreFeaturesSection.jsx
│   │   ├── DemoSection.jsx
│   │   ├── FAQsSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── TeamSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── playground/
│   │       ├── PlaygroundEditor.jsx
│   │       ├── PlaygroundOutput.jsx
│   │       ├── AssistantBot.jsx
│   │       ├── FallbackAnimation.jsx
│   │       └── animations.css
│   ├── pages/
│   │   └── Playground.jsx
│   ├── utils/
│   │   ├── codeLinter.js
│   │   └── codeTemplates.js
│   ├── github-theme.css
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Technologies Used
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Rive](https://rive.app/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Credits
- Developed by Aryan Bhendarkar, Avishkar Chavan, and Aashu Kumar
- Special thanks to the open-source community and all contributors

---

> © 2025 Mitra AI. All rights reserved.
