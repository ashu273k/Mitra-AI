# Setting Up the Rive Animation for AI Assistant

This project uses Rive for animated interactions. Follow these steps to set up the AI assistant animation:

## Creating the Rive Animation File

1. Go to [Rive.app](https://rive.app/) and create a free account
2. Create a new file
3. Design a simple robot or AI assistant character
4. Set up a State Machine with the following:
   - Create a State Machine named "State Machine"
   - Add 4 states: greeting, thinking, confused, and celebrating
   - Create animations for each state
   - Add a numeric input named "state" (0 = greeting, 1 = thinking, 2 = confused, 3 = celebrating)
5. Export the file as "ai-assistant.riv"
6. Place the file in the `/public` folder of this project

## Example Animation States

Here are some ideas for each animation state:

1. **Greeting**: Character waving or smiling
2. **Thinking**: Character with a thinking expression (perhaps with a thought bubble)
3. **Confused**: Character looking puzzled with question marks
4. **Celebrating**: Character celebrating with confetti or a happy jump

## Testing the Animation

Once you've placed the Rive file in the public folder, the application will automatically use it for the AI assistant on the Playground page.

---

If you prefer not to create your own animation, you can find free Rive animations on the [Rive community page](https://rive.app/community/) that you can modify for this purpose.
