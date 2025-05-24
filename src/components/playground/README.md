# Coding Playground Module

This module adds an interactive coding playground to the landing page. Users can write, run, and test JavaScript code directly in the browser.

## Features

- **Monaco Editor** with GitHub Dark theme and syntax highlighting
- **Interactive Console** that captures console output
- **Animated AI Assistant** with different states (greeting, thinking, confused, celebrating)
- **Code Templates** for quick starter examples
- **Download Feature** to save code locally
- **Error Handling** with line highlighting for syntax errors

## Setup

1. Make sure all dependencies are installed:
   ```
   npm install react-router-dom @monaco-editor/react @rive-app/react-canvas
   ```

2. Set up the Rive animation for the assistant bot:
   - See `public/ANIMATION_INSTRUCTIONS.md` for details
   - Create a file named `ai-assistant.riv` in the public folder

## Usage

The playground is accessible via the `/playground` route. Users can:

1. **Write Code** in the editor
2. **Select Templates** from predefined examples
3. **Run Code** and see output in the console
4. **Get Feedback** from the animated AI assistant
5. **Download Code** for local use

## Component Structure

- **Playground.jsx** - Main container page
  - **PlaygroundEditor.jsx** - Code editor with Monaco
  - **PlaygroundOutput.jsx** - Console output display
  - **AssistantBot.jsx** - Animated assistant with Rive
  - **FallbackAnimation.jsx** - Backup animation if Rive isn't available

## Code Structure

- **src/utils/codeLinter.js** - Handles code validation and execution
- **src/utils/codeTemplates.js** - Provides sample code templates
- **src/components/playground/animations.css** - Custom animations for the playground

## Customization

- Add new code templates in `src/utils/codeTemplates.js`
- Modify the assistant states in `src/components/playground/AssistantBot.jsx`
- Change the editor theme in `src/components/playground/PlaygroundEditor.jsx`
